from libs import constants

from PIL import Image

from libs.fileManager import ensureDir


def mergeImage(inputs: list[str], output, inputDir: str = './src', outputDir: str = './dev'):
    keepTransparent = output.endswith('_kt.png')

    result = None
    keepSpecial = False
    for index in range(len(inputs)):
        image = Image.open(inputDir+'/'+inputs[index])

        if result is None:
            result = image
        else:
            result = Image.alpha_composite(
                result.convert('RGBA'), image.convert('RGBA'))

        nextIsLast = index+1 == len(inputs)-1
        keepSpecial = nextIsLast and inputs[index+1].endswith('_sc.png')
        if(keepSpecial):
            continue

        removeEraseColor = inputs[index].endswith('_ec.png')
        if(removeEraseColor):
            result = manipulatePixcels(
                result.convert('RGBA'),
                keepTransparent,
                not keepSpecial,
                removeEraseColor
            )

    if(result is None):
        raise "Image is empty"

    ensureDir(outputDir+'/'+output)
    result.save(outputDir+'/'+output)


def manipulatePixcels(
    image: Image,
    keepTransparent: bool,
    replaceSpecialColor: bool,
    eraseColor: bool
) -> Image:
    # print('manipulatePixcels', f"kt:{'T'if keepTransparent else 'F'} sp:{'T'if replaceSpecialColor else 'F'} ec:{'T'if eraseColor else 'F'} ")
    resultImage = Image.new(image.mode, image.size)
    resultImage.putdata(list(map(
        lambda d: manipulatePixcel(
            d, keepTransparent, replaceSpecialColor, eraseColor),
        image.getdata()
    )))
    return resultImage


def manipulatePixcel(
    pixcel: tuple,
    keepTransparent: bool,
    replaceSpecialColor: bool,
    eraseColor: bool
) -> tuple:
    if(replaceSpecialColor):
        pixcel = handleReplaceSpecialColor(pixcel)

    if(eraseColor):
        pixcel = handleEraseColor(pixcel)

    if not (keepTransparent):
        pixcel = handleTransparent(pixcel)

    return pixcel


def handleReplaceSpecialColor(pixcel: tuple, specialColors: list[tuple] = constants.specialColors) -> tuple:
    if (specialColors.__contains__((pixcel[0], pixcel[1], pixcel[2]))):
        return (pixcel[0]+1, pixcel[1]+1, pixcel[2]+1, pixcel[3])
    return pixcel


def handleEraseColor(pixcel: tuple, eraseColor=(255, 0, 0)) -> tuple:
    if (pixcel[0], pixcel[1], pixcel[2]) == eraseColor:
        return (0, 0, 0, 0)
    return pixcel


def handleTransparent(pixcel: tuple, threthold: int = 25, transparentColor: tuple = (231, 255, 255)) -> tuple:
    if(pixcel[3] < threthold):
        return transparentColor+(255,)
    return (pixcel[0], pixcel[1], pixcel[2], 255)
