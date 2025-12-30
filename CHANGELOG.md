## [2.0.0] - 2025-12-30

### Added

- _NEXT_PUBLIC_BASE_URL_ для разделения с _NEXT_PUBLIC_API_BASE_URL_ - на случай, когда бэкенд расположен по другому адресу (на поддомене).
- Поддержка `.raw.svg` и мета-иконок (`app/icon0.svg`)
- Шаблоны:
    - entities/Example
    - pages/example
    - meta
    - JSON-LD
- Блок "Сайт находится в разработке"
- Динамический `Tooltip`

### Changed

- Патч **next** заменен глобальными типами `@types/global.d.ts`
- _NEXT_PUBLIC_ENABLE_METRICS_ переименована в _NEXT_PUBLIC_ENABLE_ANALYTICS_
- _NEXT_ANALYZE_ заменена командой `analyze`
- `PhoneNumberInput` на **react-imask** заменен компонентом на `input-number` из **antd**

### Removed

- `.npmrc` - покрывается настройками по умолчанию

## [1.1.3] - 2025-12-15

### Dependencies

- Обновлен **next**: 15.4.8 -> 15.4.10 - [CVE-2025-55183 & CVE-2025-55184](https://vercel.com/kb/bulletin/security-bulletin-cve-2025-55184-and-cve-2025-55183#how-to-upgrade-and-protect-your-next.js-app)
- Обновлен **react**: 19.0.1 -> 19.0.3 - [CVE-2025-55183 & CVE-2025-55184](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components)

## [1.1.2] - 2025-12-08

### Dependencies

- Обновлен **react**: 19.0.0 -> 19.0.1 - [CVE-2025-55182](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components)

## [1.1.1] - 2025-12-05

### Dependencies

- Обновлен **next**: 15.4.6 -> 15.4.8 - [CVE-2025-66478](https://nextjs.org/blog/CVE-2025-66478)

## [1.1.0] - 2025-10-21

### Dependencies

- Зафиксирована версия **Next.js**: 15.4.5
- Добавлены:
    - **React IMask**: 7.6.1
- Удалены:
    - **antd-5-mask-input**

### Added

- Скрипт `utils:sync-colors` для генерации `colors.ts` на основе `_colors.scss`
- Конфигурация изображений `deviceSizes` и `imageSizes`
- Страницы ошибок
- Базовая веб-аналитика `WebAnalytics`
- Компоненты:
    - `Container`
    - `PhoneNumberInput`
- `query.ts` для search-параметров
- `.npmrc` - фиксирует параметр `auto-install-peers`, чтобы восстановить предыдущее поведение pnpm

### Changed

- GraphQL-клиент теперь добавляет запросам search-параметр `q` в продакшене
- В `FormItem` добавлен проп `hideValidation`. Он должен использоваться вместо правил без сообщений для улучшения доступности.

### Removed

- Редирект с главной на авторизацию
- autofill-стили инпутов

## [1.0.2] - 2025-08-14

### Dependencies

- Добавлены дев-зависимости `graphql-codegen`

### Added

- Добавлена конфигурация `codegen.yml`

## [1.0.1] - 2025-08-14

### Changed

- `at-rules` удален из `stylelintrc.rules.order/order`, чтобы избежать конфликтов с https://sass-lang.com/d/mixed-decls.

## [1.0.0] - 2025-08-06

### Dependencies

- Обновлены ключевые зависимости:
    - **Next.js**: 14.2.0 → 15.4.5
    - **React / ReactDOM**: 18.3.1 → 19.0.0
    - **AntD**: 5.19.3 → 5.26.7
    - **TypeScript**: 5.4.5 → 5.9.2
    - **GraphQL**: 16.9.0 → 16.11.0
    - **Axios**: 1.7.2 → 1.11.0
    - **SWR**: 2.2.5 → 2.3.4
    - **Yup**: 1.4.0 → 1.7.0
    - **Zustand**: 4.5.4 → 4.5.7
- Обновлены дев-зависимости: ESLint, Storybook, Stylelint, Prettier, Husky и др.
- Удален Sentry.

### Changed

- Локальные модал-менеджеры заменены на глобальный `app/ui/Modals`
- Цветовые токены перенесены из SCSS `:export` в JavaScript-объект `colors`
- Компоненты `Storybook` адаптированы под обновленные зависимости

### Removed

- Удален дублирующий `utils.ts`
