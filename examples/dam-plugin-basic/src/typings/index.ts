export type NonEmptyString<S extends string> = S extends '' ? never : S;

export type DamRoute<S extends string> = `/dam_enterprise/${NonEmptyString<S>}`;

// 插件自己注册的路由
export type DamPluginRoute<S extends string> =
  DamRoute<`plugin/${NonEmptyString<S>}`>;
