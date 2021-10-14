from libs import constants

from PIL import Image

from libs.fileManager import ensureDir


def mergeImage(inputs: list[str], output, inputDir: str = './src', outputDir: str = './dev'):
    keepTransparent = output.endswith('_kt.png')

    result = None
    for i in inputs:
        image = Image.open(inputDir+'/'+i)

        if result is None:
            result = image
        else:
            result = Image.alpha_composite(result, image)

        keepSpecial = i.endswith('_sc.png')
        removeEraseColor = i.endswith('_ec.png')

        if(removeEraseColor or not keepSpecial):
            result = manipulatePixcels(
                result,
                True,
                not keepSpecial,
                removeEraseColor
            )

    if(result is None):
        raise "Image is empty"

    if not (keepTransparent):
        result = manipulatePixcels(
            result,
            False,
            True,
            False
        )

    ensureDir(outputDir+'/'+output)
    result.save(outputDir+'/'+output)


def manipulatePixcels(
    image: Image,
    keepTransparent: bool,
    replaceSpecialColor: bool,
    eraseColor: bool
) -> Image:

    result: list[tuple] = []
    for pixcel in image.getdata():
        result.append(manipulatePixcel(
            pixcel, keepTransparent, replaceSpecialColor, eraseColor
        ))

    resultImage = Image.new(image.mode, image.size)
    resultImage.putdata(result)
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
    for sp in specialColors:
        if (pixcel[0], pixcel[1], pixcel[2]) == sp:
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
