# definition.js

```
module.exports = [
  {
    size: 256,
    pakFile: 'iss_{waytype.name}_{obj.name}.pak',
    datFiles: ['path/to/file.dat'],
    imageSet: {
      'path/to/merged.png': ['path/to/image.png'],
    }
  },
```

## 入力画像 `*_sc.png`

指定画像マージ時に特殊色消去処理を行わない。
画像セット末尾で指定しないと後続画像マージ時に特殊色消去がされるので注意。

## 入力画像 `*_ec.png`

指定画像マージ時に指定色（`#FF0000`）を透過色に変換する。
エッジなどはみ出た部分を消去できる。

## 出力画像 `*_kt.png`

全画像マージ後に透過色を特殊色（`#E7FFFF`）に変換しない。
