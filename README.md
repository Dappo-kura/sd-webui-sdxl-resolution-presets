# SD WebUI SDXL Resolution Presets

Stable Diffusion WebUI (A1111) 用の拡張機能です。
SDXLに最適な解像度（アスペクト比）への切り替えボタンを、`txt2img` および `img2img` タブのスライダー上部に追加します。

## 機能
- ワンクリックでSDXL推奨アスペクト比に解像度を設定
- ボタン形状でアスペクト比を視覚的に表現（横長、縦長、正方形など）

## サポートする解像度
- 1:1 (1024x1024)
- 5:4 (1152x896)
- 4:5 (896x1152)
- 3:2 (1216x832)
- 2:3 (832x1216)
- 7:4 (1344x768)
- 4:7 (768x1344)
- 12:5 (1536x640)
- 5:12 (640x1536)
- 16:9 (1344x768 approx)
- 9:16 (768x1344 approx)

## インストール
1. Stable Diffusion WebUIの `extensions` フォルダにクローンします。
   ```bash
   git clone https://github.com/Dappo-kura/sd-webui-sdxl-resolution-presets.git
   ```
2. WebUIを再起動します。

## ライセンス
MIT License
