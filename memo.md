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
  g maglev_track
  n narrowgauge_track
system_type
  g ground
  e elevated
  b bridge
  t tunnel/taxyway
  r runway
  u underground(トンネル用画像)
  s special(255)
  w wayobj
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

# エンベロープ操作順

```
Alt+Ctrl+M
E
V(次のオブジェクトを選択)
```

# 線幅
```
横断歩道
  0.45～0.50等間隔

停止線
  0.30～0.45

走行車線
  0.10~0.20

走行車線（破線）
  白 2.00~5.00
  無 2.00~7.50(1~1.5x白)
```

# 角度

actan(x)=0.5

x = 26.565°
90 - x = 63.435°
