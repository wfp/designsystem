"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.svgConfig = void 0;
function svgConfig() {
    return {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
        replaceAttrValues: {
            '#000000': 'currentColor',
            '#000': 'currentColor',
            //'#CCC': 'currentColor',
            //'url(#a)': 'undefined',
        },
        svgoConfig: {
            plugins: [
                {
                    name: 'preset-default',
                    params: {
                        overrides: {
                            // customize default plugin options
                            /*inlineStyles: {
                              onlyMatchedOnce: false,
                            },
                            removeDoctype: false,
                            convertColors: false,*/
                            removeUnknownsAndDefaults: false,
                            removeViewBox: false,
                        },
                    },
                },
            ],
        },
        icon: true,
    };
}
exports.svgConfig = svgConfig;
