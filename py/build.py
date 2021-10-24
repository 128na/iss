import time
import os
import sys
from dotenv import load_dotenv
from libs import fileManager
from libs import imageManager
from libs import makeobjManager
import concurrent.futures


def handleDefinitions(definitions: list[dict], inputPath, outputPath, makeobjpath):

    threads = int(os.getenv('THREADS'))
    executor = concurrent.futures.ProcessPoolExecutor(max_workers=threads)
    processList = []

    for definition in definitions:
        processList.append(executor.submit(
            handleDefinition,
            definition,
            inputPath,
            outputPath,
            makeobjpath
        ))

    for process in processList:
        process.result()


def handleDefinition(definition: dict, inputPath, outputPath, makeobjpath):
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


def handleImages(definition: dict, inputPath, outputPath):
    threads = int(os.getenv('THREADS'))
    executor = concurrent.futures.ProcessPoolExecutor(max_workers=threads)
    processList = []

    # print('handleImagesMulti')
    for output, inputs in definition['imageSet'].items():
        print('mergeImage', output, inputs)
        if(fileManager.existsFile(outputPath+'/'+output)):
            print('skip')
            continue

        processList.append(executor.submit(
            imageManager.mergeImage, inputs, output, inputPath, outputPath))

    for process in processList:
        process.result()


if __name__ == '__main__':
    load_dotenv()
    makeobjpath = os.getenv('MAKEOBJ_PATH')

    definitionsPath = sys.argv[1]
    outputPath = sys.argv[2]
    inputPath = './src'
    definitions = fileManager.loadJson(definitionsPath)

    fileManager.removeDir(outputPath)
    beginAt = time.perf_counter()

    handleDefinitions(definitions, inputPath,
                      outputPath, makeobjpath)
    endAt = time.perf_counter()
    print("processed", endAt-beginAt)
