"use strict";
/**
 * @jest-environment node
 */
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("react-dom/server");
var utils_tsx_new_1 = require("./utils.tsx.new");
describe('Server rendering', function () {
    test('defalut state', function () {
        var htmlString = (0, server_1.renderToString)((0, utils_tsx_new_1.getAccordion)());
        expect(htmlString).toContain('szh-accordion__item--status-exited');
        expect(htmlString).toContain('item 1');
    });
    test('mountOnEnter', function () {
        var htmlString = (0, server_1.renderToString)((0, utils_tsx_new_1.getAccordion)({ props: { mountOnEnter: true } }));
        expect(htmlString).toContain('szh-accordion__item--status-unmounted');
        expect(htmlString).not.toContain('szh-accordion__item--status-exited');
        expect(htmlString).not.toContain('item 1');
    });
    test('initialEntered', function () {
        var htmlString = (0, server_1.renderToString)((0, utils_tsx_new_1.getAccordion)({ props: { initialEntered: true } }));
        expect(htmlString).toContain('szh-accordion__item--status-entered');
        expect(htmlString).not.toContain('szh-accordion__item--status-exited');
        expect(htmlString).toContain('item 1');
    });
});
