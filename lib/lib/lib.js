"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zipkin = require("zipkin");
const url = require("url");
function getHeaderValue(req, headerName) {
    return req.header[headerName.toLowerCase()];
}
exports.getHeaderValue = getHeaderValue;
function containsRequiredHeaders(req) {
    return getHeaderValue(req, zipkin.HttpHeaders.TraceId) !== undefined
        && getHeaderValue(req, zipkin.HttpHeaders.SpanId) !== undefined;
}
exports.containsRequiredHeaders = containsRequiredHeaders;
function formatRequestUrl(req) {
    const parsed = url.parse(req.originalUrl);
    return url.format({
        protocol: req.protocol,
        host: req.header['host'],
        pathname: parsed.pathname,
        search: parsed.search
    });
}
exports.formatRequestUrl = formatRequestUrl;
function stringToBoolean(str) {
    return str === '1';
}
exports.stringToBoolean = stringToBoolean;
function stringToIntOption(str) {
    try {
        return new zipkin.option.Some(parseInt(str));
    }
    catch (err) {
        return zipkin.option.None;
    }
}
exports.stringToIntOption = stringToIntOption;
//# sourceMappingURL=lib.js.map