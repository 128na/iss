import os
import sys
from dotenv import load_dotenv
from libs import fileManager
from libs import imageManager

from libs import makeobjManager
from multiprocessing import Process


def handleDefinitions(definition: list[dict], inputPath, outputPath, makeobjpath):
    for definition in definitions:
        handleDefinition(definition, inputPath, outputPath, makeobjpath)


def handleDefinition(definition: dict, inputPath, outputPath, makeobjpath):
    # process_list = []
    for output, inputs in definition['imageSet'].items():
        print('mergeImage', output, inputs)
        if(fileManager.existsFile(outputPath+'/'+output)):
            print('skip')
            continue
        # if(os.getenv('MULTITHREAD')):
        #     process = Process(
        #         target=imageManager.mergeImage,
        #         args=(inputs, output,  inputPath, outputPath)
        #     )
        #     process.start()
        #     process_list.append(process)
        # else:
        imageManager.mergeImage(inputs, output,  inputPath, outputPath)

    # if(os.getenv('MULTITHREAD')):
    #     for process in process_list:
    #         process.join()

    for datFile in definition['datFiles']:
        fileManager.copyFile(inputPath+'/'+datFile, outputPath+'/'+datFile)

    makeobjManager.pak(
        makeobjpath,
        outputPath,
        definition['size'],
        definition['pakFile'],
        definition['datFiles']
    )


if __name__ == '__main__':
    load_dotenv()
    makeobjpath = os.getenv('MAKEOBJ_PATH')
    print('MULTITHREAD', os.getenv('MULTITHREAD'))

    definitionsPath = sys.argv[1]
    outputPath = sys.argv[2]
    inputPath = './src'
    definitions = fileManager.loadJson(definitionsPath)

    fileManager.removeDir(outputPath)
    handleDefinitions(definitions, inputPath, outputPath, makeobjpath)
