export type Nullable<T> = T | null | undefined;

export type PickNullable<T, K extends keyof T> = Omit<T, K> & { [P in K]: Nullable<T[P]> };

export type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

export type DeepNullable<T> = T extends object
    ? {
          [P in keyof T]-?: DeepNullable<Nullable<T[P]>>;
      }
    : T;

export type DeepNonNullable<T> = T extends object
    ? {
          [P in keyof T]-?: DeepNonNullable<NonNullable<T[P]>>;
      }
    : T;

export type NonNullableArray<T> = T extends (infer U)[] ? NonNullable<U>[] : never;

export type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type AnyFunction<T = any> = (args: T) => any;

export type GQLEntity<T> = Nullable<DeepPartial<T>>;
