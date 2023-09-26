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

## Storybook
1. To start storybook locally
   ```shell
   pnpm storybook:dev
   ```
2. To build storybook
   ```shell
   pnpm storybook:build
   ```
## Testing Storybook with Loki
1. First of all, you need both storybook and next app to be running in dev mode
   ```shell
   pnpm dev && pnpm storybook:dev
   ```
2. Now you can run tests using Loki
   ```shell
   pnpm test:ui
   ```
   Then in the terminal you will see files that were changed during the development process. In the .loki folder, 2 folders will appear: current and difference.
3. To view these changes in an interactive format, you need to generate a report
   ```shell
   pnpm test:ui:report
   ```
   After executing this command, 2 files will be generated in the .loki folder. You can run the report file in a browser and see all the changes there.
   For Mac you can use this command
   ```shell
   open .loki/report.html
   ```
4. If you agree with all the changes, you should run the following command
   ```shell
   pnpm test:ui:ok
   ```
   After its execution, all changes will be confirmed and the next run of the ```pnpm test:ui``` command will show that all tests passed successfully
