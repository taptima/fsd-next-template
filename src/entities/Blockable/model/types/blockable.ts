import type { GQLEntity } from 'shared/types/utility';

export type Blockable = GQLEntity<{
    readonly banned: boolean;
}>;
