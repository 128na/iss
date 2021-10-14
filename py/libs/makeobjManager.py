import subprocess


def pak(makeobjpath: str, outputDir: str, size: int, pakFile: str, datFiles: list[str]):

    command = makeobjpath+' pak' + \
        str(size) + ' ' + pakFile+' ' + (' '.join(datFiles))

    print(command)
    res = subprocess.call(command, cwd=outputDir)

    if(res != 0):
        raise "makeobj failed"
