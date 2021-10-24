import subprocess
import time


def pak(makeobjpath: str, outputDir: str, size: int, pakFile: str, datFiles: list[str]):
    command = f"{makeobjpath} pak{str(size)} {pakFile} {' '.join(datFiles)}"
    print(command)

    count = 0
    limit = 5
    while count < limit:
        res = subprocess.run(command, cwd=outputDir, shell=True,
                             stdout=subprocess.PIPE, stderr=subprocess.PIPE, encoding='utf-8')
        print(res.stdout)

        if(res.returncode == 0):
            return

        count += 1
        print(res.stderr)
        time.sleep(1)

    raise Exception("makeobj failed")
