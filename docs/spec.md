# ISS 仕様書

## Version

- v1.0 それとなく定義
- v2.0 system_typeとobjの区別を明確に
- v3.0 

## 命名則

### ディレクトリ名

カテゴリ、obj単位で分ける。 `{category}/{obj.name}`

例 モノレールトンネル： `monorail/tunnel`

ビルド前ソースは管理しやすい名称でよい。


### obj名

ファイル一覧での視認性を優先する。

- `iss_{obj.ID}{waytype.ID?}{system_type.ID?}{_additional?}`

```
additional
  任意項目。バリエーションなどオリジナリティ高い感じの名称をいい感じに設定する
```
  例 120km/hモノレール高架軌道 `iss_wme_0120_pier_type_2`

### 表示名(compat.tab)

ゲーム内での表示名はメニューでの視認性を優先する。

- `[{system_type.name?}] {_additional?} (iss_{obj.ID}{waytype.ID?})`

例 120km/hモノレール高架軌道 `[高架] 鋼製橋脚 (iss_wme_0120_pier_type_2)`


### pakファイル

ディレクトリ単位でpak化する。

`iss_{category}_{waytype.name?}_{_additional?}.pak`

例 モノレールトンネル： `iss_monorail_tunnel.pak`


### datファイル

管理しやすい名称でよい。

### pngファイル

管理しやすい名称でよい。

## appendix
補足資料

### Category

|ID|name|備考|
|:---:|---|---|
|road|道路||
|rail|鉄道・トラム||
|monorail|モノレール||
|maglev|マグレブ||
|narrow|ナローゲージ||
|water|海路||
|air|空路||
|util|装飾専用||

### obj

|ID|name|備考|
|:---:|---|---|
|w|way||
|b|bridge||
|t|tunnel||
|o|way-obj||
|s|roadsign	||
|c|crossing||
|u|building||

### way.waytype

|ID|name|waytype|備考|
|:---:|---|---|---|
|r|road|road||
|t|track|track||
|m|monorail|monorail_track||
|s|tram|tram_track|Straßenbahn|
|g|maglev|maglev_track||
|n|narrowgauge|narrowgauge_trac||
|w|water|water||
|a|air|air||
|p|power|power||


### way.system_type

|ID|name|system_type|備考|
|:---:|---|---|---|
|g|ground|0||
|e|elevated|1||
|t|taxyway|0||
|r|runway|1||
|u|underground|64||
|s|special|255||

### building.type

|ID|type|備考|
|:---:|---|---|
|r|res|0|
|c|com|1|
|i|ind|0|
|m|mon|1|
|u|cur|64|
|t|tow|255|
|h|hq|255|
|s|stop|255|
|e|extension|255|
|d|depot|255|
|a|habour|255|

### タイル角度

```
actan(x)=1/2
x = 26.565°
90 - x = 63.435°
```

### エンベロープ操作順

四角形以外の図形や文字オブジェクトはメッシュ変換してから変形する必要あり。

```
Alt+Ctrl+M
E
V(次のオブジェクトを選択)
```

### 軌道属性の橋長さのパータン

|長さ|端部|直線|傾斜(緩)|傾斜(急)|
|---:|:---:|:---:|:---:|:---:|
|1|×|×|〇|〇|
|2-1|〇||||
|2-2|||〇||
|2-3||||〇|
|3|〇|〇|||
|4|||〇|〇|
|5||〇|〇|〇|
|6|〇||〇|〇|
|7|〇|〇|〇|〇|

|組合せ|端部|直線|傾斜(緩)|傾斜(急)|
|---:|:---:|:---:|:---:|:---:|
|1+2|〇||〇|〇|
|3+4|〇|〇|〇|〇|
|5||〇|〇|〇|
|6|〇||〇|〇|
|7|〇|〇|〇|〇|

# 橋パターン

|長さ|主塔位置|主塔高さ|備考|
|---:|:---:|:---:|---|
|1|N/A||端数調整用|
|2|中央|1|非対称（`/\|＼`）|
|3|中央|1||
|4|端|1.5||
|5|中央|2||
|6|端|2.5||
|7|中央|3||

# ノイズ設定

- 50% カラー
  強め 法面
- 50% グレースケール
  標準 路面
- 50% 描画色（白）
  控えめ
  側壁、橋脚
