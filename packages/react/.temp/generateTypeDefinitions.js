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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var promises_1 = require("fs/promises");
var path_1 = __importDefault(require("path"));
var react_docgen_typescript_1 = require("react-docgen-typescript");
var distUrl = path_1["default"].resolve(__dirname, '../../website/types/');
var options = {
    savePropValueAsString: true,
    propFilter: function (prop, component) {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
            var hasPropAdditionalDescription = prop.declarations.find(function (declaration) {
                return !declaration.fileName.includes('node_modules');
            });
            return Boolean(hasPropAdditionalDescription);
        }
        return true;
    }
};
function walk(directory) {
    return __awaiter(this, void 0, void 0, function () {
        var fileList, files, _i, files_1, file, p, _a, tsxFileList;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    fileList = [];
                    return [4 /*yield*/, (0, promises_1.readdir)(directory)];
                case 1:
                    files = _b.sent();
                    _i = 0, files_1 = files;
                    _b.label = 2;
                case 2:
                    if (!(_i < files_1.length)) return [3 /*break*/, 7];
                    file = files_1[_i];
                    p = path_1["default"].join(directory, file);
                    return [4 /*yield*/, (0, promises_1.stat)(p)];
                case 3:
                    if (!(_b.sent()).isDirectory()) return [3 /*break*/, 5];
                    _a = [__spreadArray([], fileList, true)];
                    return [4 /*yield*/, walk(p)];
                case 4:
                    fileList = __spreadArray.apply(void 0, _a.concat([(_b.sent()), true]));
                    return [3 /*break*/, 6];
                case 5:
                    fileList.push(p);
                    _b.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7:
                    tsxFileList = fileList.filter(function (file) { return file.endsWith('.tsx') && !file.includes('stories'); });
                    return [4 /*yield*/, Promise.all(tsxFileList.map(function (file) { return __awaiter(_this, void 0, void 0, function () {
                            var propTypes, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        propTypes = JSON.parse(JSON.stringify((0, react_docgen_typescript_1.parse)(file, options)));
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, (0, promises_1.mkdir)(path_1["default"].dirname(path_1["default"].join(distUrl, file)), {
                                                recursive: true
                                            })];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_1 = _a.sent();
                                        console.log('collectTypes error', error_1);
                                        return [3 /*break*/, 4];
                                    case 4:
                                        console.log('propTypes', path_1["default"].join(distUrl, file.replace('.tsx', '.json')));
                                        return [4 /*yield*/, (0, promises_1.writeFile)(path_1["default"].join(distUrl, file.replace('.tsx', '.json')), JSON.stringify(propTypes, null, 2))];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, null];
                                }
                            });
                        }); }))];
                case 8:
                    _b.sent();
                    return [2 /*return*/, fileList];
            }
        });
    });
}
exports["default"] = walk;
function startGenerateTypes() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, promises_1.rm)(distUrl, { recursive: true, force: true })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, walk('./src')];
                case 2:
                    _a.sent();
                    process.exit();
                    return [2 /*return*/];
            }
        });
    });
}
startGenerateTypes();
