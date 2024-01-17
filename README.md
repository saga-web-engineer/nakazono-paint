# 中園塗装店 Webサイト

## URL
こちらは架空のサイトで実際には存在しません  
https://nakazono-paint.netlify.app/

## Version
Voltaで管理しています。
- Node 20.10.0
- npm 10.2.3

## start
1.  **install**  

    クローンした後に実行してください。

    ```
    npm i
    ```

2.  **develop**

    ```
    npm run watch:all
    ```

3.  **deploy**

    デプロイする前に実行してmap等の不要ファイルを削除します。

    ```
    npm run prepare:all
    ```

## format
ts、scssファイルはhuskyを用いてコミット時にフォーマットしますが、自身でフォーマットすることもできます。
```
npm run format:all
```
