export type Setters<Schema extends object> = {
    [Property in keyof Schema as `set${Capitalize<string & Property>}`]: (
        value: Schema[Property],
    ) => void;
};

export interface StoreActions<Schema extends object = object, Actions = object>
    extends Readonly<{ actions: Setters<Schema> & Actions }> {}

export type ModalsStore<Type extends Capitalize<string>> = {
    [Key in Type as `is${Key}ModalOpen`]: boolean;
};
