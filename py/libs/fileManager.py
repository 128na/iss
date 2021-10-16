import shutil
from pathlib import Path
import os
import json


def loadJson(path: str):
    return json.load(open(path, 'r'))


def ensureDir(path: str):
    dir = Path(path).parent
    if not os.path.exists(dir):
        try:
            os.makedirs(dir)
        except FileExistsError:
            pass


def existsFile(path: str) -> bool:
    return os.path.exists(path)


def removeDir(path: str):
    if os.path.exists(path):
        shutil.rmtree(path)


def copyFile(source: str, dest: str):
    ensureDir(dest)
    shutil.copyfile(source, dest)
