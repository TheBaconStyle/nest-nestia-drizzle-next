"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHello = exports.user = void 0;
var NestiaSimulator_1 = require("@nestia/fetcher/lib/NestiaSimulator");
var PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
var typia_1 = __importDefault(require("typia"));
exports.user = __importStar(require("./user"));
/**
 * @controller AppController.getHello
 * @path GET /:param
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
function getHello(connection, param) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            (function (input, errorFactory) {
                var __is = function (input) {
                    return "string" === typeof input;
                };
                if (false === __is(input))
                    (function (input, _path, _exceptionable) {
                        if (_exceptionable === void 0) { _exceptionable = true; }
                        var $guard = typia_1.default.assert.guard;
                        return "string" === typeof input || $guard(true, {
                            path: _path + "",
                            expected: "string",
                            value: input
                        }, errorFactory);
                    })(input, "$input", true);
                return input;
            })(param);
            return [2 /*return*/, !!connection.simulate
                    ? getHello.simulate(connection, param)
                    : PlainFetcher_1.PlainFetcher.propagate(connection, __assign(__assign({}, getHello.METADATA), { template: getHello.METADATA.path, path: getHello.path(param) }))];
        });
    });
}
exports.getHello = getHello;
(function (getHello) {
    getHello.METADATA = {
        method: "GET",
        path: "/:param",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    getHello.path = function (param) {
        return "/".concat(encodeURIComponent(param !== null && param !== void 0 ? param : "null"));
    };
    getHello.random = function (g) { return (function (generator) {
        var _a, _b, _c, _d, _e;
        var $generator = typia_1.default.random.generator;
        return (_d = (_c = (_b = ((_a = generator === null || generator === void 0 ? void 0 : generator.customs) !== null && _a !== void 0 ? _a : $generator.customs)) === null || _b === void 0 ? void 0 : _b.string) === null || _c === void 0 ? void 0 : _c.call(_b, [])) !== null && _d !== void 0 ? _d : ((_e = generator === null || generator === void 0 ? void 0 : generator.string) !== null && _e !== void 0 ? _e : $generator.string)();
    })(g); };
    getHello.simulate = function (connection, param) {
        var assert = NestiaSimulator_1.NestiaSimulator.assert({
            method: getHello.METADATA.method,
            host: connection.host,
            path: getHello.path(param),
            contentType: "application/json",
        });
        try {
            assert.param("param")(function () { return (function (input, errorFactory) {
                var __is = function (input) {
                    return "string" === typeof input;
                };
                if (false === __is(input))
                    (function (input, _path, _exceptionable) {
                        if (_exceptionable === void 0) { _exceptionable = true; }
                        var $guard = typia_1.default.assert.guard;
                        return "string" === typeof input || $guard(true, {
                            path: _path + "",
                            expected: "string",
                            value: input
                        }, errorFactory);
                    })(input, "$input", true);
                return input;
            })(param); });
        }
        catch (exp) {
            if (!(function (input) {
                var $io0 = function (input) { return ("GET" === input.method || "HEAD" === input.method || "DELETE" === input.method || "PATCH" === input.method || "POST" === input.method || "PUT" === input.method) && "string" === typeof input.path && "number" === typeof input.status && ("object" === typeof input.headers && null !== input.headers && false === Array.isArray(input.headers) && $io1(input.headers)) && "string" === typeof input.name && "string" === typeof input.message && (undefined === input.stack || "string" === typeof input.stack); };
                var $io1 = function (input) { return Object.keys(input).every(function (key) {
                    var value = input[key];
                    if (undefined === value)
                        return true;
                    return null !== value && undefined !== value && ("string" === typeof value || Array.isArray(value) && value.every(function (elem) { return "string" === typeof elem; }));
                }); };
                return "object" === typeof input && null !== input && $io0(input);
            })(exp))
                throw exp;
            return {
                success: false,
                status: exp.status,
                headers: exp.headers,
                data: exp.toJSON().message,
            };
        }
        return {
            success: true,
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
            data: getHello.random("object" === typeof connection.simulate && null !== connection.simulate
                ? connection.simulate
                : undefined),
        };
    };
})(getHello || (exports.getHello = getHello = {}));
//# sourceMappingURL=index.js.map