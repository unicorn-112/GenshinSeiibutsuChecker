# 原神聖遺物スコアチェッカー

原神プレイヤーが聖遺物のステータスを入力することで、効率的にスコアを計算・評価できるWebアプリケーションです。

## アプリケーションURL

[準備中]

## 開発の背景

原神において聖遺物の厳選は重要ですが、計算が手間であるという課題がありました。
自身の日々の聖遺物整理を効率化するため、直感的なUIでスコアを確認できるツールを開発しました。

## 主な機能

- **聖遺物スコア計算**: 主要ステータスを入力し、即座にスコアを算出します。
- **直感的なUI**: シンプルな入力フォームで、初心者でも迷わず操作可能です。

## 使用技術

| カテゴリ       | 技術               |
| :------------- | :----------------- |
| フロントエンド | React, Vite        |
| バックエンド   | Java (Spring Boot) |

## ローカル環境での起動方法

以下の手順で、バックエンドとフロントエンドを起動してください。

### 必要環境

- Java (JDK 17以上)
- Node.js (npm)

### 起動手順

1. リポジトリをクローンします。
   ```bash
   git clone [https://github.com/unicorn-112/GenshinSeiibutsuChecker.git](https://github.com/unicorn-112/GenshinSeiibutsuChecker.git)
   バックエンドの起動
   GenshinSeiibutsuChecker フォルダへ移動し、以下のコマンドを実行します。
   ```

Bash
./mvnw spring-boot:run
フロントエンドの起動
GenshinFrontEnd フォルダへ移動し、インストール後に起動します。

Bash
npm install
npm run dev

---

### 作業の手順

1.  VS Codeでこの内容を `README.md` に貼り付けて保存します。
2.  ターミナルで以下のコマンドを実行して、GitHubに反映させます。

```bash
git add README.md
git commit -m "Update README with project details"
git push origin main
```
