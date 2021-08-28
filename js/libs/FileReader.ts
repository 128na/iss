import fs from 'fs-extra';
export default class FileReader {
  public getFiles(directory: string, ext: string): string[] {
    return fs.readdirSync(directory).reduce((files: string[], f: string) => {
      const path = `${directory}/${f}`;
      if (fs.statSync(path).isDirectory()) {
        return [...files, ...this.getFiles(path, ext)];
      }
      if (f.endsWith(ext)) {
        return [...files, path];
      }
      return files;
    }, []);
  }

  public readFile(path: string): string {
    return fs.readFileSync(path).toString();
  }

  public writeFile(path: string, content: string): void {
    return fs.writeFileSync(path, content);
  }
}
