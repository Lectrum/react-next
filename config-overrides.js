/* eslint-disable global-require */

const { override, addPostcssPlugins, disableEsLint } = require('customize-cra');

module.exports = override(
    disableEsLint(),
    addPostcssPlugins([
        require('postcss-preset-env')({
            stage:    0,
            features: {
                'custom-media-queries': {
                    importFrom: [
                        {
                            customMedia: {
                                '--phonePortrait':  '(width <= 414px)',
                                '--phoneLandscape':
                                    '(width >= 415px) and (width <= 667px)',
                                '--tabletPortrait':
                                    '(width >= 668px) and (width <= 768px)',
                                '--tabletLandscape':
                                    '(width >= 769px) and (width <= 1024px)',
                                '--desktopS':
                                    '(width >= 1025px) and (width <= 1366px)',
                                '--desktopM':
                                    '(width >= 1367px) and (width <= 1680px)',
                                '--desktopL':
                                    '(width >= 1681px) and (width <= 1920px)',
                                '--desktopXL': '(width >= 1921px)',
                            },
                        },
                    ],
                },
            },
        }),
    ]),
);
