export type Setters<Schema> = {
    [Property in keyof Schema as `set${Capitalize<string & Property>}`]: (
        value: Schema[Property],
    ) => void;
};

export interface StoreActions<Schema> extends Readonly<{ actions: Setters<Schema> }> {}
