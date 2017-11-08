import * as zipkin from "zipkin";
import {Middleware as KoaMiddleware} from "koa";

export interface TraceInfo {
    tracer: zipkin.Tracer;
    serviceName?: string;
    port?: number;
}

export declare class KoaInstrumentation {
    public static middleware(options: TraceInfo): KoaMiddleware;
}

