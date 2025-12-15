## [1.1.4] - 2025-12-15

### Dependencies

- Обновлен **next**: 15.4.8 -> 15.4.10 - [CVE-2025-55183 & CVE-2025-55184](https://vercel.com/kb/bulletin/security-bulletin-cve-2025-55184-and-cve-2025-55183#how-to-upgrade-and-protect-your-next.js-app)
- Обновлен **react**: 19.0.1 -> 19.0.3 - [CVE-2025-55183 & CVE-2025-55184](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components)

## [1.1.3] - 2025-12-08

### Dependencies

- Обновлен **react**: 19.0.0 -> 19.0.1 - [CVE-2025-55182](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components)

## [1.1.2] - 2025-12-05

### Dependencies

- Обновлен **next**: 15.4.6 -> 15.4.8 - [CVE-2025-66478](https://nextjs.org/blog/CVE-2025-66478)

### Removed

- `.npmrc` - покрывается настройками по умолчанию

## [1.1.1] - 2025-10-21

### Added

- **.npmrc**. Фиксирует параметр `auto-install-peers`, чтобы восстановить предыдущее поведение pnpm.

## [1.1.0] - 2025-10-19

### Dependencies

- Зафиксирована версия **Next.js**: 15.4.6
- Добавлены:
    - **React Hook Form**: 7.65.0
    - **React Hot Toast**: 2.6.0
    - **React IMask**: 7.6.1

### Added

- Скрипт `utils:sync-colors` для генерации `colors.ts` на основе `_colors.scss`
- Конфигурация изображений `deviceSizes` и `imageSizes`
- Страницы ошибок
- Базовая веб-аналитика `WebAnalytics`
- Шаблонная форма `ExampleForm`
- Компоненты:
    - `Container`
    - `FieldWrapper`
    - `Input`
    - `PhoneNumberInput`
- `query.ts` для search-параметров
- `plurals.ts`

### Changed

- GraphQL-клиент теперь добавляет запросам search-параметр `q` в продакшене
- Шрифты:
    - В варианты добавлен адаптив
    - Добавлен вариант `custom`

## [1.0.2] - 2025-08-14

### Dependencies

- Добавлены дев-зависимости `graphql-codegen`

### Added

- Добавлена конфигурация `codegen.yml`

## [1.0.1] - 2025-08-14

### Changed

- `at-rules` удален из `stylelintrc.rules.order/order`, чтобы избежать конфликтов с https://sass-lang.com/d/mixed-decls.

## [1.0.0] - 2025-08-13

### Dependencies

- Обновлены ключевые зависимости:
    - **Next.js**: 15.0.1 → 15.4.5
    - **React / ReactDOM**: 18.3.1 → 19.0.0
    - **TypeScript**: 5.4.5 → 5.9.2
    - **GraphQL**: 16.9.0 → 16.11.0
    - **Axios**: 1.7.2 → 1.11.0
    - **SWR**: 2.3.0 → 2.3.4
    - **Yup**: 1.4.0 → 1.7.0
    - **Zustand**: 4.5.4 → 4.5.7
- Обновлены дев-зависимости: ESLint, Storybook, Stylelint, Prettier, Husky и др.

### Changed

- Цветовые токены перенесены из SCSS `:export` в JavaScript-объект `colors`
- Компоненты `Storybook` адаптированы под обновленные зависимости

### Removed

- Удален дублирующий `utils.ts`
