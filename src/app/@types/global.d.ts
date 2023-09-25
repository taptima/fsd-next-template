type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type AnyFunction<T = any> = (args: T) => any;
