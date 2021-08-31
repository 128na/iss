# Infrastructure of Sorenarini Soreppoi series

![tumbnail](./docs/tumbnail.png)

それなりにそれっぽい感じのインフラアドオンになる予定（未定

# 導入

以下のリリース一覧から `release.zip` をダウンロードし、解凍したファイルを指定フォルダにコピーして下さい。

https://github.com/128na/iss/releases

- アドオン本体
  - `dist/pak128/***.pak` -> `addons/pak128/`
- 翻訳ファイル（日本語、英語のみ対応）
  - `dist/pak128/text` -> `addons/pak128/`


# リリースバージョン

- `v.{n}` 正式版リリースです。互換性のない変更は同梱のcompat.tabで置換可能です（予定
- `beta.{n}` ベータ版リリースです。正式リリースまでに仕様やアドオン名変更や発生する可能性があります。
- `test.{n}` 動作検証用のリリースです。ベータリリースまでに仕様やアドオン名変更が発生します。

# license

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />この 作品 は <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">クリエイティブ・コモンズ 表示 4.0 国際 ライセンス</a>の下に提供されています。


# 資料

- [仕様書](./docs/spec.md)
- [アドオン一覧](./docs/addons.md)


# 開発者向け
## pak化

自動pak化を使うにはNodejsのセットアップが必要です。

サンプルの環境設定ファイル `.env.example` をコピーし、環境設定ファイル `.env` を作成する
設定ファイル内のmakeobjのパスを設定する。
`MAKEOBJ_PATH=C:\simutrans\makeobj.exe` など

npmスクリプトを実行する
```
npm install

npm run build
```

### 検証用
dat,png,jsファイル更新時に自動pak化ができます。
生成されたpakファイルは`SIMUTRANS_PAKDIR`で指定された動作検証用pakディレクトリにコピーされ、`SIMUTRANS_EXECUTABLE`で指定されたシムトラを自動起動します。

```
npm run serve
```
