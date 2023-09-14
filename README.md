## Develop
1. Install the dependencies. Run:
    ```shell
    pnpm install
    ```
2. Set up environment variables. See list of pre-configured environment
   variables bellow. <br>
   Note: `.env.local` overwrite `.env` ([more](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables))
3. Start the development server ([see](https://nextjs.org/docs/api-reference/cli#development) additional info about this feature). Run:
    ```shell
    pnpm dev
    ```
4. Open `http://localhost:3000` in your browser.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Publish
1. Install the dependencies. Run:
    ```shell
    pnpm install
    ```
2. Make the production build. Run:
    ```shell
    pnpm build
    ```
3. Start server ([see](https://nextjs.org/docs/api-reference/cli#production) additional info about this feature). Run:
    ```shell
    pnpm start
    ```

## Pre-configured environment variables
1. `NEXT_PUBLIC_API_BASE_URL` — useful for configuring base URL for any
   API calls.
2. `NEXT_PUBLIC_ASSETS_VERSION` — version of public assets. Can be used
   to reset browser cache of any assets.
3. `NEXT_PUBLIC_SENTRY_DSN` — used to log errors to Sentry.

**Sentry**
1. Add `NEXT_PUBLIC_SENTRY_DSN` to `.env` file
2. `sentry-cli login` — to login through browser or enter auth token
3. Fill `defaults.project` field in `sentry.properties` file
