type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Replace<
    Type,
    TypeKeys extends keyof Type,
    ReplaceKeys extends keyof never,
    ReplaceValue = null,
> = Omit<Type, TypeKeys> & {
    [RKey in ReplaceKeys]: ReplaceValue extends null ? Type[TypeKeys] : ReplaceValue;
};
