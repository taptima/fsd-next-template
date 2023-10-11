export type Classnames<Type extends string> = {
    [Key in Type as `${Key}Classname`]?: string;
};
