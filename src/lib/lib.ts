import * as zipkin from "zipkin";
import * as url from "url";
import {MiddlewareNext, GatewayRequest, GatewayContext} from "sasdn";

export function getHeaderValue(req: GatewayRequest, headerName: string): string {
    return req.header[headerName.toLowerCase()];
}

export function containsRequiredHeaders(req: GatewayRequest): boolean {
    return getHeaderValue(req, zipkin.HttpHeaders.TraceId) !== undefined
        && getHeaderValue(req, zipkin.HttpHeaders.SpanId) !== undefined;
}

export function formatRequestUrl(req: GatewayRequest): string {
    const parsed = url.parse(req.originalUrl);
    return url.format({
        protocol: req.protocol,
        host: req.header['host'],
        pathname: parsed.pathname,
        search: parsed.search
    });
}

export function stringToBoolean(str: string): boolean {
    return str === '1';
}

export function stringToIntOption(str: string): any {
    try {
        return new zipkin.option.Some(parseInt(str));
    } catch (err) {
        return zipkin.option.None;
    }
}