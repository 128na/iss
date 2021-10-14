import os
import sys
from dotenv import load_dotenv
from libs import fileManager
from libs import imageManager

from libs import makeobjManager


def handleDefinitions(definition: list[dict], inputPath, outputPath, makeobjpath):
    for definition in definitions:
        handleDefinition(definition, inputPath, outputPath, makeobjpath)


def handleDefinition(definition: dict, inputPath, outputPath, makeobjpath):
    for output, inputs in definition['imageSet'].items():
        print('mergeImage', output, inputs)
        if(fileManager.existsFile(outputPath+'/'+output)):
            print('skip')
            continue
        imageManager.mergeImage(inputs, output,  inputPath, outputPath)

    datFiles = []
    for datFile in definition['datFiles']:
        fileManager.copyFile(inputPath+'/'+datFile, outputPath+'/'+datFile)
        datFiles.append(outputPath+'/'+datFile)

    makeobjManager.pak(
        makeobjpath,
        definition['size'],
        outputPath + '/'+definition['pakFile'],
        datFiles
    )


load_dotenv()
makeobjpath = os.getenv('MAKEOBJ_PATH')

definitionsPath = sys.argv[1]
outputPath = sys.argv[2]
inputPath = './src'
definitions = fileManager.loadJson(definitionsPath)

fileManager.removeDir(outputPath)
handleDefinitions(definitions, inputPath, outputPath, makeobjpath)