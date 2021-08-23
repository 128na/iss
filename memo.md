# 命名則

```
iss_{waytype}{system_type}_{topspeed}{additional?}

waytype
  r road
  t track
  p power
  m monorail_track
  s tram_track(Straßenbahn)
  w water
  a air
  m maglev_track
  n narrowgauge_track
system_type
  g ground
  e elevated
  b bridge
  t tunnel/taxyway
  r runway
  u underground(トンネル用画像)
  s special(255)
topspeed
  4桁数値
additional
  任意項目。バリエーションなどオリジナリティ高い感じの名称をいい感じに設定する
  eg. iss_rg_30_without_center_line
```

# テクスチャ重い問題

## 出力画像に後付けでノイズを付ける
imagemagickで出来そう。ビルド自動化するならjsとかで書いた方がよさげ

# タイル境界に隙間が出る問題
## AA無しで出力した画像を後ろに合成する

```
magick composite backimage_ns.png image_ns.png: result.png
```
