export type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type AnyFunction<T = any> = (args: T) => any;
