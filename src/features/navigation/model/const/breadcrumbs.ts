import type { Breadcrumb } from 'features/navigation/model/types/breadcrumb';
import { EXAMPLE, CATALOG, HOME } from 'shared/const/pageRoutes';

export const getBreadcrumbs = (breadcrumb: Breadcrumb) => [
    { title: 'Главная', href: HOME },
    breadcrumb,
];

// Example
export const EXAMPLE_BREADCRUMBS = getBreadcrumbs({ title: 'Example', href: EXAMPLE });
const getExampleBreadcrumbs = (breadcrumb: Breadcrumb) => [...EXAMPLE_BREADCRUMBS, breadcrumb];
export const CATALOG_BREADCRUMBS = getExampleBreadcrumbs({ title: 'Catalog', href: CATALOG });
