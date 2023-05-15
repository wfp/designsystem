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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var useId_1 = require("../../hooks/useId");
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react', function () { return (__assign(__assign({}, jest.requireActual('react')), { useId: undefined })); });
test('useId', function () {
    var id1 = (0, react_1.renderHook)(function () { return (0, useId_1.useId)(); });
    var id2 = (0, react_1.renderHook)(function () { return (0, useId_1.useId)(); });
    expect(id1.result.current).toBe('szh-adn-1');
    expect(id2.result.current).toBe('szh-adn-2');
    id1.rerender();
    id2.rerender();
    expect(id1.result.current).toBe('szh-adn-1');
    expect(id2.result.current).toBe('szh-adn-2');
});
