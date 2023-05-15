"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var react_transition_state_1 = require("react-transition-state");
var __1 = require("../../");
jest.mock('react-transition-state', function () { return ({
    useTransitionMap: jest.fn().mockReturnValue({ mock: true })
}); });
describe('useAccordionProvider', function () {
    test('can be called without params', function () {
        var result = (0, react_1.renderHook)(function () { return (0, __1.useAccordionProvider)(); }).result;
        expect(result.current).toEqual({ mock: true, mountOnEnter: false, initialEntered: false });
        expect(react_transition_state_1.useTransitionMap).toHaveBeenCalledWith({
            enter: false,
            exit: false,
            preEnter: false,
            preExit: false
        });
    });
    test('should forward options', function () {
        var result = (0, react_1.renderHook)(function () {
            return (0, __1.useAccordionProvider)({
                mountOnEnter: true,
                initialEntered: true,
                transition: true,
                transitionTimeout: 300
            });
        }).result;
        expect(result.current).toEqual({ mock: true, mountOnEnter: true, initialEntered: true });
        expect(react_transition_state_1.useTransitionMap).toHaveBeenCalledWith({
            mountOnEnter: true,
            initialEntered: true,
            enter: true,
            exit: true,
            preEnter: true,
            preExit: true,
            timeout: 300
        });
    });
    test('should accept individual transition flag', function () {
        var result = (0, react_1.renderHook)(function () {
            return (0, __1.useAccordionProvider)({
                transition: { enter: true, preExit: true }
            });
        }).result;
        expect(result.current).toEqual({ mock: true, mountOnEnter: false, initialEntered: false });
        expect(react_transition_state_1.useTransitionMap).toHaveBeenCalledWith({
            enter: true,
            exit: false,
            preEnter: false,
            preExit: true
        });
    });
});
