import * as zipkin from "zipkin";
import {Middleware as KoaMiddleware} from "koa";

export interface MiddlewareOptions {
    tracer: zipkin.Tracer;
    serviceName?: string;
    port?: number;
}

export declare class KoaInstrumentation {
    public static middleware(options: MiddlewareOptions): KoaMiddleware;
}

