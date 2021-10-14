import subprocess


def pak(makeobjpath: str, size: int, pakFile: str, datFiles: list[str]):

    command = makeobjpath+' pak' + \
        str(size) + ' ' + pakFile+' ' + (' '.join(datFiles))

    print(command)
    res = subprocess.call(command)

    if(res != 0):
        raise "makeobj failed"
