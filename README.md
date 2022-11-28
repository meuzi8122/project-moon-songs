- npm ci
- npm run dev

### メモ

- fetch が 2 回呼ばれることがある

  - strictMode が true になっているか確認
    - 副作用を持つコンポーネントを検知するために、わざとコンポーネントを 2 回描画する機能
      - (mount → unmount → mount)
    - dev 環境でのみ実行される

- @next/font/google

  - ビルド時に google フォントをダウンロード・最適化

- svg

  - `fill="white"`で白色にできる

- カード画像と説明を横並び
  - [このコミット](https://github.com/meuzi8122/project-moon-songs/tree/07a2f52707e8a679c735d244e978ee7db4f00848)
