import {AuthError, AuthResponse} from "msal";
import {CacheOptions, FrameworkOptions, SystemOptions} from "msal/lib-commonjs/Configuration";

export type Auth = {
    clientId: string,
    tenantId: string,
    tenantName?: string,
    validateAuthority?: boolean;
    redirectUri?: string | (() => string);
    postLogoutRedirectUri?: string | (() => string);
    navigateToLoginRequestUrl?: boolean;
    requireAuthOnInitialize?: boolean,
    onAuthentication: (ctx: object, error: AuthError, response: AuthResponse) => any
    onToken: (ctx: object, error: AuthError | null, response: AuthResponse | null) => any,
    beforeSignOut: (ctx: object) => any
}

export type Request = {
    scopes?: string[]
}

export type Graph = {
    callAfterInit?: boolean,
    meEndpoint?: string,
    onResponse?: (ctx: object, response: object) => any
}

export type AuthError = AuthError
export type AuthResponse = AuthResponse
export type CacheOptions = CacheOptions
export type SystemOptions = SystemOptions
export type FrameworkOptions = FrameworkOptions

export type Options = {
    auth: Auth,
    request?: Request,
    graph?: Graph,
    cache?: CacheOptions,
    system?: SystemOptions,
    framework?: FrameworkOptions,
    globalMixin?: false
}

export type DataObject = {
    isAuthenticated: boolean,
    accessToken: string,
    user: object,
    userDetails: object,
    custom: object
}

export type CallbackQueueObject = {
    id: string,
    callback: string,
    arguments: any[]
}