from libs import constants

from PIL import Image

from libs.fileManager import ensureDir


def mergeImage(inputs: list[str], output, inputDir: str = './src', outputDir: str = './dev'):
    eraseTransparent = not output.endswith('_kt.png')

    result = None
    for index in range(len(inputs)):
        image = Image.open(inputDir+'/'+inputs[index])

        if result is None:
            result = image
        else:
            result = Image.alpha_composite(
                result.convert('RGBA'), image.convert('RGBA'))

        eraseColor = False
        replaceSpecialColor = False

        # 最終画像がSP指定のときは1つ前の画像までで特殊色除去をする
        nextIsLast = index+1 == len(inputs)-1
        if nextIsLast and inputs[index+1].endswith('_sc.png'):
            replaceSpecialColor = True

        # 最終画像がSP指定以外のときは特殊色除去をする
        isLast = index == len(inputs)-1
        if isLast and not inputs[index].endswith('_sc.png'):
            replaceSpecialColor = True

        # EC指定のときは指定色を削除する
        eraseColor = inputs[index].endswith('_ec.png')

        if(eraseColor or replaceSpecialColor or (isLast and eraseTransparent)):
            print('image', inputs[index])
            print('nextIsLast', nextIsLast)
            print('isLast', isLast)
            print('eraseTransparent', eraseTransparent)
            print('replaceSpecialColor', replaceSpecialColor)
            print('eraseColor', eraseColor)
            result = manipulatePixcels(
                result.convert('RGBA'),
                isLast and eraseTransparent,
                replaceSpecialColor,
                eraseColor
            )

    if(result is None):
        raise Exception("Image is empty")

    ensureDir(outputDir+'/'+output)
    result.save(outputDir+'/'+output)


def manipulatePixcels(
    image: Image,
    eraseTransparent: bool,
    replaceSpecialColor: bool,
    eraseColor: bool
) -> Image:
    resultImage = Image.new(image.mode, image.size)
    resultImage.putdata(list(map(
        lambda d: manipulatePixcel(
            d, eraseTransparent, replaceSpecialColor, eraseColor),
        image.getdata()
    )))
    return resultImage


def manipulatePixcel(
    pixcel: tuple,
    eraseTransparent: bool,
    replaceSpecialColor: bool,
    eraseColor: bool
) -> tuple:
    if(replaceSpecialColor):
        pixcel = handleReplaceSpecialColor(pixcel)

    if(eraseColor):
        pixcel = handleEraseColor(pixcel)

    if (eraseTransparent):
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
