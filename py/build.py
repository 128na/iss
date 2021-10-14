import os
import sys
from dotenv import load_dotenv
from libs import fileManager
from libs import imageManager

from libs import makeobjManager
from multiprocessing import Process


def handleDefinitions(definitions: list[dict], inputPath, outputPath, makeobjpath, multithread):
    for definition in definitions:
        if(multithread):
            handleImagesMulti(definition, inputPath, outputPath)
        else:
            handleImages(definition, inputPath, outputPath)

        for datFile in definition['datFiles']:
            fileManager.copyFile(inputPath+'/'+datFile, outputPath+'/'+datFile)

        makeobjManager.pak(
            makeobjpath,
            outputPath,
            definition['size'],
            definition['pakFile'],
            definition['datFiles']
        )


def handleImagesMulti(definition: dict, inputPath, outputPath):
    print('handleImagesMulti')
    process_list = []
    for output, inputs in definition['imageSet'].items():
        print('mergeImage', output, inputs)
        if(fileManager.existsFile(outputPath+'/'+output)):
            print('skip')
            continue
        process = Process(
            target=imageManager.mergeImage,
            args=(inputs, output,  inputPath, outputPath)
        )
        process.start()
        process_list.append(process)

    for process in process_list:
        process.join()


def handleImages(definition: dict, inputPath, outputPath):
    print('handleImages')
    for output, inputs in definition['imageSet'].items():
        print('mergeImage', output, inputs)
        if(fileManager.existsFile(outputPath+'/'+output)):
            print('skip')
            continue
        imageManager.mergeImage(inputs, output,  inputPath, outputPath)


if __name__ == '__main__':
    load_dotenv()
    makeobjpath = os.getenv('MAKEOBJ_PATH')
    multithread = os.getenv(
        'MULTITHREAD', 'False').lower() in ('true', '1', 't')

    definitionsPath = sys.argv[1]
    outputPath = sys.argv[2]
    inputPath = './src'
    definitions = fileManager.loadJson(definitionsPath)

    fileManager.removeDir(outputPath)
    handleDefinitions(definitions, inputPath, outputPath,
                      makeobjpath, multithread)
