# 松田うなぎ Webサイト

## URL
こちらは架空のサイトで実際には存在しません  
https://matsuda-eel.netlify.app/

## Version
Voltaで管理しています。
- Node 16.16.0
- npm 8.11.0

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
