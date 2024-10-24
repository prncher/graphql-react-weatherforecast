"use strict";
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
exports.__esModule = true;
exports.getWeatherData = void 0;
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var getWeatherData = function (address) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, street, city, state, coordinates, base, params, url, response, result, _b, y, x, jsonResult, forecastUrl, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 12, , 13]);
                _a = { street: encodeURIComponent(address.street),
                    city: encodeURIComponent(address.city),
                    state: address.state }, street = _a.street, city = _a.city, state = _a.state;
                coordinates = { x: 0, y: 0 };
                base = "https://geocoding.geo.census.gov/geocoder/locations/address";
                params = "benchmark=4&format=json";
                url = "".concat(base, "?street=").concat(street, "&city=").concat(city, "&state=").concat(state, "&").concat(params);
                return [4 /*yield*/, fetch(url)];
            case 1:
                response = _c.sent();
                if (!(response.status === 200)) return [3 /*break*/, 3];
                return [4 /*yield*/, response.json()];
            case 2:
                result = (_c.sent()).result;
                if (Array.isArray(result.addressMatches) &&
                    result.addressMatches.length > 0) {
                    coordinates = result.addressMatches[0].coordinates;
                }
                else {
                    throw 'Unable to get the latitude and longitude';
                }
                return [3 /*break*/, 4];
            case 3: throw 'Unable to get the latitude and longitude';
            case 4:
                _b = { y: coordinates.y.toFixed(4), x: coordinates.x.toFixed(4) }, y = _b.y, x = _b.x;
                return [4 /*yield*/, fetch("https://api.weather.gov/points/".concat(y, ",").concat(x), {})];
            case 5:
                //47.674,-122.1215
                response = _c.sent();
                if (!(response.statusText === 'OK')) return [3 /*break*/, 10];
                return [4 /*yield*/, response.json()];
            case 6:
                jsonResult = _c.sent();
                forecastUrl = jsonResult.properties.forecast;
                return [4 /*yield*/, fetch(forecastUrl)];
            case 7:
                response = _c.sent();
                if (!(response.statusText === 'OK')) return [3 /*break*/, 9];
                return [4 /*yield*/, response.json()];
            case 8:
                jsonResult = _c.sent();
                return [2 /*return*/, jsonResult.properties.periods];
            case 9: return [3 /*break*/, 11];
            case 10: throw { error: "Server Error" };
            case 11: return [3 /*break*/, 13];
            case 12:
                e_1 = _c.sent();
                throw e_1;
            case 13: return [2 /*return*/];
        }
    });
}); };
exports.getWeatherData = getWeatherData;
