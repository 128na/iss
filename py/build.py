import os
import sys
from dotenv import load_dotenv
from libs import fileManager
from libs import imageManager
from libs import makeobjManager
import concurrent.futures


def handleDefinitions(definitions: list[dict], inputPath, outputPath, makeobjpath):
    multithread = os.getenv('MULTITHREAD').lower() in ('true', '1', 't')
    threads = int(os.getenv('THREADS'))

    for definition in definitions:
        if(multithread):
            handleImagesMulti(definition, inputPath, outputPath, threads)
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


def handleImagesMulti(definition: dict, inputPath, outputPath, threads):
    # print('handleImagesMulti')
    executor = concurrent.futures.ProcessPoolExecutor(max_workers=threads)
    processList = []
    for output, inputs in definition['imageSet'].items():
        print('mergeImage', output, inputs)
        if(fileManager.existsFile(outputPath+'/'+output)):
            print('skip')
            continue

        processList.append(executor.submit(
            imageManager.mergeImage, inputs, output,  inputPath, outputPath))

    for process in processList:
        process.result()


def handleImages(definition: dict, inputPath, outputPath):
    # print('handleImages')
    for output, inputs in definition['imageSet'].items():
        print('mergeImage', output, inputs)
        if(fileManager.existsFile(outputPath+'/'+output)):
            print('skip')
            continue
        imageManager.mergeImage(inputs, output,  inputPath, outputPath)


if __name__ == '__main__':
    load_dotenv()
    makeobjpath = os.getenv('MAKEOBJ_PATH')

    definitionsPath = sys.argv[1]
    outputPath = sys.argv[2]
    inputPath = './src'
    definitions = fileManager.loadJson(definitionsPath)

    fileManager.removeDir(outputPath)
    handleDefinitions(definitions, inputPath, outputPath, makeobjpath)
