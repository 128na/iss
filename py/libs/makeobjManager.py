import subprocess


def pak(makeobjpath: str, outputDir: str, size: int, pakFile: str, datFiles: list[str]):

    command = f"{makeobjpath} pak{str(size)} {pakFile} {' '.join(datFiles)}"

    print(command)
    res = subprocess.run(command, cwd=outputDir, shell=True,
                         stdout=subprocess.PIPE, stderr=subprocess.PIPE, encoding='utf-8')
    print(res.stdout)

    if(res.returncode != 0):
        print(res.stderr)
        raise Exception("makeobj failed")
