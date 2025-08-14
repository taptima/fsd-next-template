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
