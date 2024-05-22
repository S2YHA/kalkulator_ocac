## Deploy na Vercel

Vercel jest jedną z najpopularniejszych platform do hostingu aplikacji Next.js oraz Nuxt.js.

1. **Zainstaluj Vercel CLI**:
    ```sh
    npm install -g vercel
    ```

2. **Zaloguj się do Vercel**:
    ```sh
    vercel login
    ```

3. **Wdróż aplikację**:
    W katalogu głównym projektu uruchom:
    ```sh
    vercel
    ```
    Postępuj zgodnie z instrukcjami na ekranie, aby skonfigurować projekt.

## Deploy na Netlify

Netlify jest kolejną popularną platformą do hostingu aplikacji statycznych i Jamstack.

1. **Zainstaluj Netlify CLI**:
    ```sh
    npm install -g netlify-cli
    ```

2. **Zaloguj się do Netlify**:
    ```sh
    netlify login
    ```

3. **Zbuduj aplikację Nuxt 3**:
    ```sh
    npm run build
    ```

4. **Wdróż aplikację**:
    ```sh
    netlify deploy --prod --dir=.output/public
    ```
    Użyj `--dir=.output/public` jako katalogu, ponieważ Nuxt 3 domyślnie buduje aplikację w `./output/public`.