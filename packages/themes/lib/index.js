'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Color = require('color');
var colors$1 = require('@carbon/colors');
var type = require('@wfp/type');
var layout = require('@wfp/layout');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Color__default = /*#__PURE__*/_interopDefaultLegacy(Color);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * Adjust a given token's lightness by a specified percentage
 * Example: token = hsl(10, 10, 10);
 * adjustLightness(token, 5) === hsl(10, 10, 15);
 * adjustLightness(token, -5) === hsl(10, 10, 5);
 * @param {string} token
 * @param {integer} shift The number of percentage points (positive or negative) by which to shift the lightness of a token.
 * @returns {string}
 */

function adjustLightness(token, shift) {
  var original = Color__default['default'](token).hsl().object();
  return Color__default['default'](_objectSpread2(_objectSpread2({}, original), {}, {
    l: original.l += shift
  })).round().hex().toLowerCase();
}

/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var interactive01$1 = colors$1.blue60;
var interactive02$1 = colors$1.gray80;
var interactive03$1 = colors$1.blue60;
var interactive04$1 = colors$1.blue60;
var uiBackground$1 = colors$1.white;
var ui01$1 = colors$1.gray10;
var ui02$1 = colors$1.white;
var ui03$1 = colors$1.gray20;
var ui04$1 = colors$1.gray50;
var ui05$1 = colors$1.gray100;
var text01$1 = colors$1.gray100;
var text02$1 = colors$1.gray70;
var text03$1 = colors$1.gray40;
var text04$1 = colors$1.white;
var text05$1 = colors$1.gray60;
var textError$1 = colors$1.red60;
var icon01$1 = colors$1.gray100;
var icon02$1 = colors$1.gray70;
var icon03$1 = colors$1.white;
var link01$1 = '#9EEB2D';
var link02$1 = '#9EEB2D';
var inverseLink$1 = colors$1.blue40;
var field01$1 = colors$1.gray10;
var field02$1 = colors$1.white;
var inverse01$1 = colors$1.white;
var inverse02$1 = colors$1.gray80;
var support01$1 = colors$1.red60;
var support02$1 = colors$1.green60;
var support03$1 = colors$1.yellow;
var support04$1 = colors$1.blue70;
var inverseSupport01$1 = colors$1.red50;
var inverseSupport02$1 = colors$1.green40;
var inverseSupport03$1 = colors$1.yellow;
var inverseSupport04$1 = colors$1.blue50;
var overlay01$1 = colors$1.rgba(colors$1.gray100, 0.5);
var danger01$1 = colors$1.red60;
var danger02$1 = colors$1.red60; // Interaction states

var focus$1 = colors$1.blue60;
var inverseFocusUi$1 = colors$1.white;
var hoverPrimary$1 = '#0353e9';
var activePrimary$1 = colors$1.blue80;
var hoverPrimaryText$1 = colors$1.blue70;
var hoverSecondary$1 = '#4c4c4c';
var activeSecondary$1 = colors$1.gray60;
var hoverTertiary$1 = '#0353e9';
var activeTertiary$1 = colors$1.blue80;
var hoverUI$1 = '#e5e5e5';
var hoverLightUI$1 = '#e5e5e5';
var activeUI$1 = colors$1.gray30;
var activeLightUI$1 = colors$1.gray30;
var selectedUI$1 = colors$1.gray20;
var selectedLightUI$1 = colors$1.gray20;
var inverseHoverUI$1 = '#4c4c4c';
var hoverSelectedUI$1 = '#cacaca';
var hoverDanger$1 = adjustLightness(danger01$1, -8);
var activeDanger$1 = colors$1.red80;
var hoverRow$1 = '#e5e5e5';
var visitedLink$1 = colors$1.purple60;
var disabled01$1 = colors$1.gray10;
var disabled02$1 = colors$1.gray30;
var disabled03$1 = colors$1.gray50;
var highlight$1 = colors$1.blue20;
var decorative01$1 = colors$1.gray20;
var buttonSeparator$1 = '#e0e0e0';
var skeleton01$1 = '#e5e5e5';
var skeleton02$1 = colors$1.gray30; // New color tokens
// TO-DO: remove fallback color when v11 is released and assign carbon colors to new tokens

var background$1 = uiBackground$1;
var layer$1 = ui01$1;
var layerAccent$1 = ui03$1;
var layerAccentActive$1 = colors$1.gray40;
var layerAccentHover$1 = adjustLightness(layerAccent$1, -6);
var field$1 = field01$1;
var backgroundInverse$1 = inverse02$1;
var backgroundBrand$1 = interactive01$1;
var interactive$1 = interactive04$1;
var borderSubtle$1 = ui03$1;
var borderStrong$1 = ui04$1;
var borderInverse$1 = ui05$1;
var borderInteractive$1 = interactive04$1;
var textPrimary$1 = text01$1;
var textSecondary$1 = text02$1;
var textPlaceholder$1 = text03$1;
var textHelper$1 = text05$1;
var textOnColor$1 = text04$1;
var textInverse$1 = inverse01$1;
var linkPrimary$1 = link01$1;
var linkSecondary$1 = link02$1;
var linkVisited$1 = visitedLink$1;
var linkInverse$1 = inverseLink$1;
var iconPrimary$1 = icon01$1;
var iconSecondary$1 = icon02$1;
var iconOnColor$1 = icon03$1;
var iconInverse$1 = inverse01$1;
var supportError$1 = support01$1;
var supportSuccess$1 = support02$1;
var supportWarning$1 = support03$1;
var supportInfo$1 = support04$1;
var supportErrorInverse$1 = inverseSupport01$1;
var supportSuccessInverse$1 = inverseSupport02$1;
var supportWarningInverse$1 = inverseSupport03$1;
var supportInfoInverse$1 = inverseSupport04$1;
var overlay$1 = overlay01$1;
var toggleOff$1 = ui04$1;
var buttonPrimary$1 = interactive01$1;
var buttonSecondary$1 = interactive02$1;
var buttonTertiary$1 = interactive03$1;
var buttonDangerPrimary$1 = danger01$1;
var buttonDangerSecondary$1 = danger02$1;
var backgroundActive$1 = activeUI$1;
var layerActive$1 = activeUI$1;
var buttonDangerActive$1 = activeDanger$1;
var buttonPrimaryActive$1 = activePrimary$1;
var buttonSecondaryActive$1 = activeSecondary$1;
var buttonTertiaryActive$1 = activeTertiary$1;
var focusInset$1 = inverse01$1;
var focusInverse$1 = inverseFocusUi$1;
var backgroundHover$1 = hoverUI$1;
var layerHover$1 = hoverUI$1;
var fieldHover$1 = hoverUI$1;
var backgroundInverseHover$1 = inverseHoverUI$1;
var linkPrimaryHover$1 = hoverPrimaryText$1;
var buttonDangerHover$1 = hoverDanger$1;
var buttonPrimaryHover$1 = hoverPrimary$1;
var buttonSecondaryHover$1 = hoverSecondary$1;
var buttonTertiaryHover$1 = hoverTertiary$1;
var backgroundSelected$1 = selectedUI$1;
var backgroundSelectedHover$1 = hoverSelectedUI$1;
var layerSelected$1 = selectedUI$1;
var layerSelectedHover$1 = hoverSelectedUI$1;
var layerSelectedInverse$1 = ui05$1;
var borderSubtleSelected$1 = activeUI$1;
var layerDisabled$1 = disabled01$1;
var fieldDisabled$1 = disabled01$1;
var borderDisabled$1 = disabled01$1;
var textDisabled$1 = disabled02$1;
var buttonDisabled$1 = disabled02$1;
var iconDisabled$1 = disabled02$1;
var textOnColorDisabled$1 = disabled03$1;
var iconOnColorDisabled$1 = disabled03$1;
var layerSelectedDisabled$1 = disabled03$1;
var skeletonBackground$1 = skeleton01$1;
var skeletonElement$1 = skeleton02$1; // Type

var brand01$1 = interactive01$1;
var brand02$1 = interactive02$1;
var brand03$1 = interactive03$1;
var active01$1 = activeUI$1;
var hoverField$1 = hoverUI$1;
var danger$1 = danger01$1;

var white = /*#__PURE__*/Object.freeze({
  __proto__: null,
  interactive01: interactive01$1,
  interactive02: interactive02$1,
  interactive03: interactive03$1,
  interactive04: interactive04$1,
  uiBackground: uiBackground$1,
  ui01: ui01$1,
  ui02: ui02$1,
  ui03: ui03$1,
  ui04: ui04$1,
  ui05: ui05$1,
  text01: text01$1,
  text02: text02$1,
  text03: text03$1,
  text04: text04$1,
  text05: text05$1,
  textError: textError$1,
  icon01: icon01$1,
  icon02: icon02$1,
  icon03: icon03$1,
  link01: link01$1,
  link02: link02$1,
  inverseLink: inverseLink$1,
  field01: field01$1,
  field02: field02$1,
  inverse01: inverse01$1,
  inverse02: inverse02$1,
  support01: support01$1,
  support02: support02$1,
  support03: support03$1,
  support04: support04$1,
  inverseSupport01: inverseSupport01$1,
  inverseSupport02: inverseSupport02$1,
  inverseSupport03: inverseSupport03$1,
  inverseSupport04: inverseSupport04$1,
  overlay01: overlay01$1,
  danger01: danger01$1,
  danger02: danger02$1,
  focus: focus$1,
  inverseFocusUi: inverseFocusUi$1,
  hoverPrimary: hoverPrimary$1,
  activePrimary: activePrimary$1,
  hoverPrimaryText: hoverPrimaryText$1,
  hoverSecondary: hoverSecondary$1,
  activeSecondary: activeSecondary$1,
  hoverTertiary: hoverTertiary$1,
  activeTertiary: activeTertiary$1,
  hoverUI: hoverUI$1,
  hoverLightUI: hoverLightUI$1,
  activeUI: activeUI$1,
  activeLightUI: activeLightUI$1,
  selectedUI: selectedUI$1,
  selectedLightUI: selectedLightUI$1,
  inverseHoverUI: inverseHoverUI$1,
  hoverSelectedUI: hoverSelectedUI$1,
  hoverDanger: hoverDanger$1,
  activeDanger: activeDanger$1,
  hoverRow: hoverRow$1,
  visitedLink: visitedLink$1,
  disabled01: disabled01$1,
  disabled02: disabled02$1,
  disabled03: disabled03$1,
  highlight: highlight$1,
  decorative01: decorative01$1,
  buttonSeparator: buttonSeparator$1,
  skeleton01: skeleton01$1,
  skeleton02: skeleton02$1,
  background: background$1,
  layer: layer$1,
  layerAccent: layerAccent$1,
  layerAccentActive: layerAccentActive$1,
  layerAccentHover: layerAccentHover$1,
  field: field$1,
  backgroundInverse: backgroundInverse$1,
  backgroundBrand: backgroundBrand$1,
  interactive: interactive$1,
  borderSubtle: borderSubtle$1,
  borderStrong: borderStrong$1,
  borderInverse: borderInverse$1,
  borderInteractive: borderInteractive$1,
  textPrimary: textPrimary$1,
  textSecondary: textSecondary$1,
  textPlaceholder: textPlaceholder$1,
  textHelper: textHelper$1,
  textOnColor: textOnColor$1,
  textInverse: textInverse$1,
  linkPrimary: linkPrimary$1,
  linkSecondary: linkSecondary$1,
  linkVisited: linkVisited$1,
  linkInverse: linkInverse$1,
  iconPrimary: iconPrimary$1,
  iconSecondary: iconSecondary$1,
  iconOnColor: iconOnColor$1,
  iconInverse: iconInverse$1,
  supportError: supportError$1,
  supportSuccess: supportSuccess$1,
  supportWarning: supportWarning$1,
  supportInfo: supportInfo$1,
  supportErrorInverse: supportErrorInverse$1,
  supportSuccessInverse: supportSuccessInverse$1,
  supportWarningInverse: supportWarningInverse$1,
  supportInfoInverse: supportInfoInverse$1,
  overlay: overlay$1,
  toggleOff: toggleOff$1,
  buttonPrimary: buttonPrimary$1,
  buttonSecondary: buttonSecondary$1,
  buttonTertiary: buttonTertiary$1,
  buttonDangerPrimary: buttonDangerPrimary$1,
  buttonDangerSecondary: buttonDangerSecondary$1,
  backgroundActive: backgroundActive$1,
  layerActive: layerActive$1,
  buttonDangerActive: buttonDangerActive$1,
  buttonPrimaryActive: buttonPrimaryActive$1,
  buttonSecondaryActive: buttonSecondaryActive$1,
  buttonTertiaryActive: buttonTertiaryActive$1,
  focusInset: focusInset$1,
  focusInverse: focusInverse$1,
  backgroundHover: backgroundHover$1,
  layerHover: layerHover$1,
  fieldHover: fieldHover$1,
  backgroundInverseHover: backgroundInverseHover$1,
  linkPrimaryHover: linkPrimaryHover$1,
  buttonDangerHover: buttonDangerHover$1,
  buttonPrimaryHover: buttonPrimaryHover$1,
  buttonSecondaryHover: buttonSecondaryHover$1,
  buttonTertiaryHover: buttonTertiaryHover$1,
  backgroundSelected: backgroundSelected$1,
  backgroundSelectedHover: backgroundSelectedHover$1,
  layerSelected: layerSelected$1,
  layerSelectedHover: layerSelectedHover$1,
  layerSelectedInverse: layerSelectedInverse$1,
  borderSubtleSelected: borderSubtleSelected$1,
  layerDisabled: layerDisabled$1,
  fieldDisabled: fieldDisabled$1,
  borderDisabled: borderDisabled$1,
  textDisabled: textDisabled$1,
  buttonDisabled: buttonDisabled$1,
  iconDisabled: iconDisabled$1,
  textOnColorDisabled: textOnColorDisabled$1,
  iconOnColorDisabled: iconOnColorDisabled$1,
  layerSelectedDisabled: layerSelectedDisabled$1,
  skeletonBackground: skeletonBackground$1,
  skeletonElement: skeletonElement$1,
  brand01: brand01$1,
  brand02: brand02$1,
  brand03: brand03$1,
  active01: active01$1,
  hoverField: hoverField$1,
  danger: danger$1,
  caption01: type.caption01,
  caption02: type.caption02,
  label01: type.label01,
  label02: type.label02,
  helperText01: type.helperText01,
  helperText02: type.helperText02,
  bodyShort01: type.bodyShort01,
  bodyLong01: type.bodyLong01,
  bodyShort02: type.bodyShort02,
  bodyLong02: type.bodyLong02,
  code01: type.code01,
  code02: type.code02,
  heading01: type.heading01,
  productiveHeading01: type.productiveHeading01,
  heading02: type.heading02,
  productiveHeading02: type.productiveHeading02,
  productiveHeading03: type.productiveHeading03,
  productiveHeading04: type.productiveHeading04,
  productiveHeading05: type.productiveHeading05,
  productiveHeading06: type.productiveHeading06,
  productiveHeading07: type.productiveHeading07,
  expressiveHeading01: type.expressiveHeading01,
  expressiveHeading02: type.expressiveHeading02,
  expressiveHeading03: type.expressiveHeading03,
  expressiveHeading04: type.expressiveHeading04,
  expressiveHeading05: type.expressiveHeading05,
  expressiveHeading06: type.expressiveHeading06,
  expressiveParagraph01: type.expressiveParagraph01,
  quotation01: type.quotation01,
  quotation02: type.quotation02,
  display01: type.display01,
  display02: type.display02,
  display03: type.display03,
  display04: type.display04,
  spacing01: layout.spacing01,
  spacing02: layout.spacing02,
  spacing03: layout.spacing03,
  spacing04: layout.spacing04,
  spacing05: layout.spacing05,
  spacing06: layout.spacing06,
  spacing07: layout.spacing07,
  spacing08: layout.spacing08,
  spacing09: layout.spacing09,
  spacing10: layout.spacing10,
  spacing11: layout.spacing11,
  spacing12: layout.spacing12,
  spacing13: layout.spacing13,
  fluidSpacing01: layout.fluidSpacing01,
  fluidSpacing02: layout.fluidSpacing02,
  fluidSpacing03: layout.fluidSpacing03,
  fluidSpacing04: layout.fluidSpacing04,
  layout01: layout.layout01,
  layout02: layout.layout02,
  layout03: layout.layout03,
  layout04: layout.layout04,
  layout05: layout.layout05,
  layout06: layout.layout06,
  layout07: layout.layout07,
  container01: layout.container01,
  container02: layout.container02,
  container03: layout.container03,
  container04: layout.container04,
  container05: layout.container05,
  sizeXSmall: layout.sizeXSmall,
  sizeSmall: layout.sizeSmall,
  sizeMedium: layout.sizeMedium,
  sizeLarge: layout.sizeLarge,
  sizeXLarge: layout.sizeXLarge,
  size2XLarge: layout.size2XLarge,
  iconSize01: layout.iconSize01,
  iconSize02: layout.iconSize02
});

/* eslint-disable */

/* Do not edit file! Updated at Mon, 29 Nov 2021 19:56:07 GMT from Figma */
var corporate1 = '#007dbc';
var corporate2 = '#000000';
var corporate3 = '#ffffff';
var corporate4 = '#36b5c5';
var corporate5 = '#00b485';
var corporate6 = '#008868';
var corporate7 = '#1a4262';
var corporate8 = '#982b56';
var corporate9 = '#ef404c';
var corporate10 = '#f47847';
var corporate11 = '#b79f8d';
var corporate12 = '#ecdfbb';
var brand = '#007dbc';
var brandDark = '#1a4262';
var interactive = '#0b77c2';
var overlay = '#0b1923';
var focus = '#0b77c2';
var focusInverse = '#0b77c2';
var focusInset = '#ffffff';
var highlight = '#bbe3ff';
var background = '#ffffff';
var backgroundHover = '#ffffff';
var backgroundActive = '#ffffff';
var backgroundInverse = '#333945';
var backgroundInverseMax = '#232831';
var backgroundInverseHover = '#313c44';
var backgroundSelected = '#ffffff';
var backgroundSelectedHover = '#ffffff';
var backgroundBrand = '#0b77c2';
var layer = '#ebf1f4';
var layerActive = '#dfe3e6';
var layerHover = '#0b77c2';
var layerSelected = '#0b77c2';
var layerSelectedHover = '#0b77c2';
var layerSelectedInverse = '#0b77c2';
var layerSelectedDisabled = '#0b77c2';
var layerAccent = '#d7dfe7';
var layerAccentActive = '#7e8b93';
var layerAccentHover = '#586b77';
var layerDisabled = '#586b77';
/** Primary color for text */

var textPrimary = '#031c2d';
/** Secondary color for text, e.g. subtitle */

var textSecondary = '#5a6872';
var textPlaceholder = '#96a2a8';
var textHelper = '#5a6872';
var textOnColor = '#ffffff';
var textInverse = '#f3f7f9';
var textDisabled = '#8c9ba5';
var textError = '#c5192d';
var textWarning = '#b98407';
var textSuccess = '#3f600f';
var textInfo = '#085387';
var textOnColorDisabled = '#5a6872';
var buttonPrimary = '#0b77c2';
var buttonPrimaryHover = '#085387';
var buttonPrimaryActive = '#1a4262';
var buttonSecondary = '#0b77c2';
var buttonSecondaryHover = '#085387';
var buttonSecondaryActive = '#1a4262';
var buttonTertiary = '#d7dfe7';
var buttonTertiaryHover = '#c5d0db';
var buttonTertiaryActive = '#c5d0dc';
var buttonDangerPrimary = '#c5192d';
var buttonDangerSecondary = '#c5192d';
var buttonDangerHover = '#981323';
var buttonDangerActive = '#451e22';
var buttonGhostHover = '#f0f3f6';
var buttonGhostActive = '#dde8ed';
var buttonInverse = '#ffffff';
var buttonInverseHover = '#ffffff';
var buttonInverseActive = '#ffffff';
var buttonMainNavigation = '#3b94d3';
var buttonMainNavigationHover = '#509fd8';
var buttonDisabled = '#c5cdd2';
var buttonSeparator = '#c5192d';
var linkPrimary = '#0b77c2';
var linkPrimaryHover = '#085387';
var linkSecondary = '#085387';
var linkVisited = '#085387';
var linkOnColor = '#ffffff';
var linkInverse = '#8ccfff';
var field = '#ffffff';
var fieldHover = '#ffffff';
var fieldBorder = '#77a0b6';
var fieldOptionHover = '#e0ebfd';
var fieldOptionActive = '#dfe3e6';
var fieldDisabled = '#f9fbfc';
var toggleOff = '#8c9ba5';
var iconPrimary = '#1d2023';
var iconSecondary = '#97a2a9';
var iconTertiary = '#77a0b6';
var iconOnColor = '#ffffff';
var iconOnColorDisabled = '#ffffff';
var iconInverse = '#ffffff';
var iconDisabled = '#8c9ba5';
var borderSubtle = '#f0f3f6';
var borderStrong = '#d3e1e8';
var borderInverse = '#8c9ba5';
var borderInteractive = '#007dbc';
var borderSubtleSelected = '#f0f3f6';
var borderDisabled = '#dfe6eb';
var supportError = '#c5192d';
var supportSuccess = '#689e18';
var supportWarning = '#f7b825';
var supportInfo = '#007dbc';
var supportErrorLight = '#f1c6cb';
var supportSuccessLight = '#ccdbcd';
var supportWarningLight = '#fdedc9';
var supportInfoLight = '#dae9f4';
var supportErrorInverse = '#ff4056';
var supportSuccessInverse = '#9eea2d';
var supportWarningInverse = '#ffcf60';
var supportInfoInverse = '#17b1ff';
var skeletonBackground = '#8c9ba5';
var skeletonElement = '#dfe3e6';
var logoWhite = '#ffffff';
var logoBlack = '#000000';
var logoBlue = '#0b77c2';
var datavisSequentialDefaultSequentialDefault1 = '#9deaff';
var datavisSequentialDefaultSequentialDefault2 = '#73c3fe';
var datavisSequentialDefaultSequentialDefault3 = '#4aa1e2';
var datavisSequentialDefaultSequentialDefault4 = '#0780c0';
var datavisSequentialDefaultSequentialDefault5 = '#005f9b';
var datavisSequentialDefaultSequentialDefault6 = '#003f76';
var datavisSequentialDefaultSequentialDefault7 = '#002153';
var datavisSequentialSecondarySequentialSecondary1 = '#bdf9c4';
var datavisSequentialSecondarySequentialSecondary2 = '#89eaa8';
var datavisSequentialSecondarySequentialSecondary3 = '#5fd79a';
var datavisSequentialSecondarySequentialSecondary4 = '#41c196';
var datavisSequentialSecondarySequentialSecondary5 = '#33aa96';
var datavisSequentialSecondarySequentialSecondary6 = '#319298';
var datavisSequentialSecondarySequentialSecondary7 = '#367a96';
var datavisCategoricalCategorical1 = '#007dbc';
var datavisCategoricalCategorical2 = '#36b5c5';
var datavisCategoricalCategorical3 = '#00b485';
var datavisCategoricalCategorical4 = '#008868';
var datavisCategoricalCategorical5 = '#1a4262';
var datavisCategoricalCategorical6 = '#982b56';
var datavisCategoricalCategorical7 = '#ef404c';
var datavisCategoricalCategorical8 = '#f47847';
var datavisCategoricalCategorical9 = '#b79f8d';
var datavisCategoricalCategorical10 = '#ecdfbb';
var datavisDivergingDiverging1 = '#73c5d0';
var datavisDivergingDiverging2 = '#ecdfbb';
var datavisAlertAlert1 = '#5fd79a';
var datavisAlertAlert2 = '#a0db90';
var datavisAlertAlert3 = '#d0de85';
var datavisAlertAlert4 = '#fbe07a';
var datavisAlertAlert5 = '#fbb16a';
var datavisAlertAlert6 = '#f77f5b';
var datavisAlertAlert7 = '#ef404c';

/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Old tokens needed to pass tests  //
//////////////////////////////////////
// TODO: set colors

var gray50 = '#cccccc';
var gray60 = '#cccccc';
var gray70 = '#cccccc';
var interactive01 = backgroundBrand;
var interactive02 = buttonSecondary;
var interactive03 = buttonTertiary;
var interactive04 = interactive;
var uiBackground = background;
var ui01 = layer;
var ui02 = gray70;
var ui03 = layerAccent;
var ui04 = borderStrong;
var ui05 = borderInverse;
var text01 = textPrimary;
var text02 = textSecondary;
var text03 = textPlaceholder;
var text04 = textOnColor;
var text05 = textHelper;
var icon01 = iconPrimary;
var icon02 = iconSecondary;
var icon03 = iconOnColor;
var link01 = linkPrimary;
var link02 = linkSecondary;
var inverseLink = linkInverse;
var field01 = field;
var field02 = gray60;
var inverse01 = textInverse;
var inverse02 = backgroundInverse;
var support01 = supportError;
var support02 = supportSuccess;
var support03 = supportWarning;
var support04 = supportInfo;
var inverseSupport01 = supportErrorInverse;
var inverseSupport02 = supportSuccessInverse;
var inverseSupport03 = supportWarningInverse;
var inverseSupport04 = supportInfoInverse;
var overlay01 = overlay;
var danger01 = buttonDangerPrimary;
var danger02 = buttonDangerSecondary; // Interaction states

var inverseFocusUi = focusInverse;
var hoverPrimary = buttonPrimaryHover;
var activePrimary = buttonPrimaryActive;
var hoverPrimaryText = linkPrimaryHover;
var hoverSecondary = buttonSecondaryHover;
var activeSecondary = buttonSecondaryActive;
var hoverTertiary = buttonTertiaryHover;
var activeTertiary = buttonTertiaryActive;
var hoverUI = backgroundHover;
var hoverLightUI = '#5E5E5E';
var activeUI = backgroundActive;
var activeLightUI = gray50;
var selectedUI = backgroundSelected;
var selectedLightUI = gray50;
var inverseHoverUI = backgroundInverseHover;
var hoverSelectedUI = layerSelectedHover;
var hoverDanger = buttonDangerHover;
var activeDanger = buttonDangerActive;
var hoverRow = layerHover;
var visitedLink = linkVisited;
var disabled01 = layerDisabled;
var disabled02 = textDisabled;
var disabled03 = textOnColorDisabled;
var decorative01 = gray60;
var skeleton01 = skeletonBackground;
var skeleton02 = skeletonElement; // Type

var brand01 = interactive01;
var brand02 = interactive02;
var brand03 = interactive03;
var active01 = activeUI;
var hoverField = hoverUI;
var danger = danger01;

var wfp = /*#__PURE__*/Object.freeze({
  __proto__: null,
  interactive01: interactive01,
  interactive02: interactive02,
  interactive03: interactive03,
  interactive04: interactive04,
  uiBackground: uiBackground,
  ui01: ui01,
  ui02: ui02,
  ui03: ui03,
  ui04: ui04,
  ui05: ui05,
  text01: text01,
  text02: text02,
  text03: text03,
  text04: text04,
  text05: text05,
  icon01: icon01,
  icon02: icon02,
  icon03: icon03,
  link01: link01,
  link02: link02,
  inverseLink: inverseLink,
  field01: field01,
  field02: field02,
  inverse01: inverse01,
  inverse02: inverse02,
  support01: support01,
  support02: support02,
  support03: support03,
  support04: support04,
  inverseSupport01: inverseSupport01,
  inverseSupport02: inverseSupport02,
  inverseSupport03: inverseSupport03,
  inverseSupport04: inverseSupport04,
  overlay01: overlay01,
  danger01: danger01,
  danger02: danger02,
  inverseFocusUi: inverseFocusUi,
  hoverPrimary: hoverPrimary,
  activePrimary: activePrimary,
  hoverPrimaryText: hoverPrimaryText,
  hoverSecondary: hoverSecondary,
  activeSecondary: activeSecondary,
  hoverTertiary: hoverTertiary,
  activeTertiary: activeTertiary,
  hoverUI: hoverUI,
  hoverLightUI: hoverLightUI,
  activeUI: activeUI,
  activeLightUI: activeLightUI,
  selectedUI: selectedUI,
  selectedLightUI: selectedLightUI,
  inverseHoverUI: inverseHoverUI,
  hoverSelectedUI: hoverSelectedUI,
  hoverDanger: hoverDanger,
  activeDanger: activeDanger,
  hoverRow: hoverRow,
  visitedLink: visitedLink,
  disabled01: disabled01,
  disabled02: disabled02,
  disabled03: disabled03,
  decorative01: decorative01,
  skeleton01: skeleton01,
  skeleton02: skeleton02,
  brand01: brand01,
  brand02: brand02,
  brand03: brand03,
  active01: active01,
  hoverField: hoverField,
  danger: danger,
  caption01: type.caption01,
  caption02: type.caption02,
  label01: type.label01,
  label02: type.label02,
  helperText01: type.helperText01,
  helperText02: type.helperText02,
  bodyShort01: type.bodyShort01,
  bodyLong01: type.bodyLong01,
  bodyShort02: type.bodyShort02,
  bodyLong02: type.bodyLong02,
  code01: type.code01,
  code02: type.code02,
  heading01: type.heading01,
  productiveHeading01: type.productiveHeading01,
  heading02: type.heading02,
  productiveHeading02: type.productiveHeading02,
  productiveHeading03: type.productiveHeading03,
  productiveHeading04: type.productiveHeading04,
  productiveHeading05: type.productiveHeading05,
  productiveHeading06: type.productiveHeading06,
  productiveHeading07: type.productiveHeading07,
  expressiveHeading01: type.expressiveHeading01,
  expressiveHeading02: type.expressiveHeading02,
  expressiveHeading03: type.expressiveHeading03,
  expressiveHeading04: type.expressiveHeading04,
  expressiveHeading05: type.expressiveHeading05,
  expressiveHeading06: type.expressiveHeading06,
  expressiveParagraph01: type.expressiveParagraph01,
  quotation01: type.quotation01,
  quotation02: type.quotation02,
  display01: type.display01,
  display02: type.display02,
  display03: type.display03,
  display04: type.display04,
  spacing01: layout.spacing01,
  spacing02: layout.spacing02,
  spacing03: layout.spacing03,
  spacing04: layout.spacing04,
  spacing05: layout.spacing05,
  spacing06: layout.spacing06,
  spacing07: layout.spacing07,
  spacing08: layout.spacing08,
  spacing09: layout.spacing09,
  spacing10: layout.spacing10,
  spacing11: layout.spacing11,
  spacing12: layout.spacing12,
  spacing13: layout.spacing13,
  fluidSpacing01: layout.fluidSpacing01,
  fluidSpacing02: layout.fluidSpacing02,
  fluidSpacing03: layout.fluidSpacing03,
  fluidSpacing04: layout.fluidSpacing04,
  layout01: layout.layout01,
  layout02: layout.layout02,
  layout03: layout.layout03,
  layout04: layout.layout04,
  layout05: layout.layout05,
  layout06: layout.layout06,
  layout07: layout.layout07,
  container01: layout.container01,
  container02: layout.container02,
  container03: layout.container03,
  container04: layout.container04,
  container05: layout.container05,
  sizeXSmall: layout.sizeXSmall,
  sizeSmall: layout.sizeSmall,
  sizeMedium: layout.sizeMedium,
  sizeLarge: layout.sizeLarge,
  sizeXLarge: layout.sizeXLarge,
  size2XLarge: layout.size2XLarge,
  iconSize01: layout.iconSize01,
  iconSize02: layout.iconSize02,
  corporate1: corporate1,
  corporate2: corporate2,
  corporate3: corporate3,
  corporate4: corporate4,
  corporate5: corporate5,
  corporate6: corporate6,
  corporate7: corporate7,
  corporate8: corporate8,
  corporate9: corporate9,
  corporate10: corporate10,
  corporate11: corporate11,
  corporate12: corporate12,
  brand: brand,
  brandDark: brandDark,
  interactive: interactive,
  overlay: overlay,
  focus: focus,
  focusInverse: focusInverse,
  focusInset: focusInset,
  highlight: highlight,
  background: background,
  backgroundHover: backgroundHover,
  backgroundActive: backgroundActive,
  backgroundInverse: backgroundInverse,
  backgroundInverseMax: backgroundInverseMax,
  backgroundInverseHover: backgroundInverseHover,
  backgroundSelected: backgroundSelected,
  backgroundSelectedHover: backgroundSelectedHover,
  backgroundBrand: backgroundBrand,
  layer: layer,
  layerActive: layerActive,
  layerHover: layerHover,
  layerSelected: layerSelected,
  layerSelectedHover: layerSelectedHover,
  layerSelectedInverse: layerSelectedInverse,
  layerSelectedDisabled: layerSelectedDisabled,
  layerAccent: layerAccent,
  layerAccentActive: layerAccentActive,
  layerAccentHover: layerAccentHover,
  layerDisabled: layerDisabled,
  textPrimary: textPrimary,
  textSecondary: textSecondary,
  textPlaceholder: textPlaceholder,
  textHelper: textHelper,
  textOnColor: textOnColor,
  textInverse: textInverse,
  textDisabled: textDisabled,
  textError: textError,
  textWarning: textWarning,
  textSuccess: textSuccess,
  textInfo: textInfo,
  textOnColorDisabled: textOnColorDisabled,
  buttonPrimary: buttonPrimary,
  buttonPrimaryHover: buttonPrimaryHover,
  buttonPrimaryActive: buttonPrimaryActive,
  buttonSecondary: buttonSecondary,
  buttonSecondaryHover: buttonSecondaryHover,
  buttonSecondaryActive: buttonSecondaryActive,
  buttonTertiary: buttonTertiary,
  buttonTertiaryHover: buttonTertiaryHover,
  buttonTertiaryActive: buttonTertiaryActive,
  buttonDangerPrimary: buttonDangerPrimary,
  buttonDangerSecondary: buttonDangerSecondary,
  buttonDangerHover: buttonDangerHover,
  buttonDangerActive: buttonDangerActive,
  buttonGhostHover: buttonGhostHover,
  buttonGhostActive: buttonGhostActive,
  buttonInverse: buttonInverse,
  buttonInverseHover: buttonInverseHover,
  buttonInverseActive: buttonInverseActive,
  buttonMainNavigation: buttonMainNavigation,
  buttonMainNavigationHover: buttonMainNavigationHover,
  buttonDisabled: buttonDisabled,
  buttonSeparator: buttonSeparator,
  linkPrimary: linkPrimary,
  linkPrimaryHover: linkPrimaryHover,
  linkSecondary: linkSecondary,
  linkVisited: linkVisited,
  linkOnColor: linkOnColor,
  linkInverse: linkInverse,
  field: field,
  fieldHover: fieldHover,
  fieldBorder: fieldBorder,
  fieldOptionHover: fieldOptionHover,
  fieldOptionActive: fieldOptionActive,
  fieldDisabled: fieldDisabled,
  toggleOff: toggleOff,
  iconPrimary: iconPrimary,
  iconSecondary: iconSecondary,
  iconTertiary: iconTertiary,
  iconOnColor: iconOnColor,
  iconOnColorDisabled: iconOnColorDisabled,
  iconInverse: iconInverse,
  iconDisabled: iconDisabled,
  borderSubtle: borderSubtle,
  borderStrong: borderStrong,
  borderInverse: borderInverse,
  borderInteractive: borderInteractive,
  borderSubtleSelected: borderSubtleSelected,
  borderDisabled: borderDisabled,
  supportError: supportError,
  supportSuccess: supportSuccess,
  supportWarning: supportWarning,
  supportInfo: supportInfo,
  supportErrorLight: supportErrorLight,
  supportSuccessLight: supportSuccessLight,
  supportWarningLight: supportWarningLight,
  supportInfoLight: supportInfoLight,
  supportErrorInverse: supportErrorInverse,
  supportSuccessInverse: supportSuccessInverse,
  supportWarningInverse: supportWarningInverse,
  supportInfoInverse: supportInfoInverse,
  skeletonBackground: skeletonBackground,
  skeletonElement: skeletonElement,
  logoWhite: logoWhite,
  logoBlack: logoBlack,
  logoBlue: logoBlue,
  datavisSequentialDefaultSequentialDefault1: datavisSequentialDefaultSequentialDefault1,
  datavisSequentialDefaultSequentialDefault2: datavisSequentialDefaultSequentialDefault2,
  datavisSequentialDefaultSequentialDefault3: datavisSequentialDefaultSequentialDefault3,
  datavisSequentialDefaultSequentialDefault4: datavisSequentialDefaultSequentialDefault4,
  datavisSequentialDefaultSequentialDefault5: datavisSequentialDefaultSequentialDefault5,
  datavisSequentialDefaultSequentialDefault6: datavisSequentialDefaultSequentialDefault6,
  datavisSequentialDefaultSequentialDefault7: datavisSequentialDefaultSequentialDefault7,
  datavisSequentialSecondarySequentialSecondary1: datavisSequentialSecondarySequentialSecondary1,
  datavisSequentialSecondarySequentialSecondary2: datavisSequentialSecondarySequentialSecondary2,
  datavisSequentialSecondarySequentialSecondary3: datavisSequentialSecondarySequentialSecondary3,
  datavisSequentialSecondarySequentialSecondary4: datavisSequentialSecondarySequentialSecondary4,
  datavisSequentialSecondarySequentialSecondary5: datavisSequentialSecondarySequentialSecondary5,
  datavisSequentialSecondarySequentialSecondary6: datavisSequentialSecondarySequentialSecondary6,
  datavisSequentialSecondarySequentialSecondary7: datavisSequentialSecondarySequentialSecondary7,
  datavisCategoricalCategorical1: datavisCategoricalCategorical1,
  datavisCategoricalCategorical2: datavisCategoricalCategorical2,
  datavisCategoricalCategorical3: datavisCategoricalCategorical3,
  datavisCategoricalCategorical4: datavisCategoricalCategorical4,
  datavisCategoricalCategorical5: datavisCategoricalCategorical5,
  datavisCategoricalCategorical6: datavisCategoricalCategorical6,
  datavisCategoricalCategorical7: datavisCategoricalCategorical7,
  datavisCategoricalCategorical8: datavisCategoricalCategorical8,
  datavisCategoricalCategorical9: datavisCategoricalCategorical9,
  datavisCategoricalCategorical10: datavisCategoricalCategorical10,
  datavisDivergingDiverging1: datavisDivergingDiverging1,
  datavisDivergingDiverging2: datavisDivergingDiverging2,
  datavisAlertAlert1: datavisAlertAlert1,
  datavisAlertAlert2: datavisAlertAlert2,
  datavisAlertAlert3: datavisAlertAlert3,
  datavisAlertAlert4: datavisAlertAlert4,
  datavisAlertAlert5: datavisAlertAlert5,
  datavisAlertAlert6: datavisAlertAlert6,
  datavisAlertAlert7: datavisAlertAlert7
});

/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// exported as in JavaScript

var colors = [// Core
'interactive01', 'interactive02', 'interactive03', 'interactive04', 'uiBackground', 'ui01', 'ui02', 'ui03', 'ui04', 'ui05', 'text01', 'text02', 'text03', 'text04', 'text05', 'textError', 'icon01', 'icon02', 'icon03', 'link01', 'link02', 'inverseLink', 'field01', 'field02', 'inverse01', 'inverse02', 'support01', 'support02', 'support03', 'support04', 'inverseSupport01', 'inverseSupport02', 'inverseSupport03', 'inverseSupport04', 'overlay01', 'danger01', 'danger02', // Interactive states
'focus', 'inverseFocusUi', 'hoverPrimary', 'activePrimary', 'hoverPrimaryText', 'hoverSecondary', 'activeSecondary', 'hoverTertiary', 'activeTertiary', 'hoverUI', 'hoverLightUI', 'hoverSelectedUI', 'activeUI', 'activeLightUI', 'selectedUI', 'selectedLightUI', 'inverseHoverUI', 'hoverDanger', 'activeDanger', 'hoverRow', 'visitedLink', 'disabled01', 'disabled02', 'disabled03', 'highlight', 'decorative01', 'buttonSeparator', 'skeleton01', 'skeleton02', // New color tokens
// TO-DO: remove fallback color when v11 is released and assign carbon colors to new tokens
'background', 'layer', 'layerAccent', 'layerAccentHover', 'layerAccentActive', 'field', 'backgroundInverse', 'backgroundBrand', 'interactive', 'borderSubtle', 'borderStrong', 'borderInverse', 'borderInteractive', 'textPrimary', 'textSecondary', 'textPlaceholder', 'textHelper', 'textOnColor', 'textInverse', 'linkPrimary', 'linkSecondary', 'linkVisited', 'linkInverse', 'iconPrimary', 'iconSecondary', 'iconOnColor', 'iconInverse', 'supportError', 'supportSuccess', 'supportWarning', 'supportInfo', 'supportErrorInverse', 'supportSuccessInverse', 'supportWarningInverse', 'supportInfoInverse', 'overlay', 'toggleOff', 'buttonPrimary', 'buttonSecondary', 'buttonTertiary', 'buttonDangerPrimary', 'buttonDangerSecondary', 'backgroundActive', 'layerActive', 'buttonDangerActive', 'buttonPrimaryActive', 'buttonSecondaryActive', 'buttonTertiaryActive', 'focusInset', 'focusInverse', 'backgroundHover', 'layerHover', 'fieldHover', 'backgroundInverseHover', 'linkPrimaryHover', 'buttonDangerHover', 'buttonPrimaryHover', 'buttonSecondaryHover', 'buttonTertiaryHover', 'backgroundSelected', 'backgroundSelectedHover', 'layerSelected', 'layerSelectedHover', 'layerSelectedInverse', 'borderSubtleSelected', 'layerDisabled', 'fieldDisabled', 'borderDisabled', 'textDisabled', 'buttonDisabled', 'iconDisabled', 'textOnColorDisabled', 'iconOnColorDisabled', 'layerSelectedDisabled', 'skeletonBackground', 'skeletonElement', // Deprecated
'brand01', 'brand02', 'brand03', 'active01', 'hoverField', 'danger'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
/**
 * Format a given token into the format expected in CSS/SCSS-based projects.
 * @param {string} token
 * @returns {string}
 */

function formatTokenName(token) {
  var string = '';

  for (var i = 0; i < token.length; i++) {
    // If we run into a number, we hit the scale step at the end of a token name
    // and can safely truncate the rest of the token
    if (numbers.indexOf(token[i]) !== -1) {
      string += '-' + token.slice(i);
      break;
    } // When encountering an uppercase name, we will want to start adding `-`
    // between words


    if (token[i] === token[i].toUpperCase()) {
      // Check backwards to see if previous letter was also capitalized, if so
      // we are in a special case like UI where each piece should be connected
      if (token[i - 1] && token[i - 1] === token[i - 1].toUpperCase()) {
        string += token[i].toLowerCase();
        continue;
      } // Otherwise, just concatenate this new part on to the existing string


      string += '-' + token[i].toLowerCase();
      continue;
    } // By default, we add the current character to the output string


    string += token[i];
  }

  return string;
}
var tokens = {
  colors: colors,
  type: type.unstable_tokens,
  layout: layout.unstable_tokens
};
var unstable__meta = {
  colors: [{
    type: 'core',
    tokens: ['uiBackground', 'interactive01', 'interactive02', 'interactive03', 'interactive04', 'brand01', 'brand02', 'brand03', 'danger', 'danger01', 'danger02', 'ui01', 'ui02', 'ui03', 'ui04', 'ui05', 'text01', 'text02', 'text03', 'text04', 'text05', 'textError', 'link01', 'link02', 'icon01', 'icon02', 'icon03', 'field01', 'field02', 'inverse01', 'inverse02', 'inverseLink', 'support01', 'support02', 'support03', 'support04', 'inverseSupport01', 'inverseSupport02', 'inverseSupport03', 'inverseSupport04', 'overlay01', //new tokens
    'background', 'layer', 'layerAccent', 'layerAccentHover', 'layerAccentActive', 'field', 'backgroundInverse', 'backgroundBrand', 'interactive', 'borderSubtle', 'borderStrong', 'borderInverse', 'borderInteractive', 'textPrimary', 'textSecondary', 'textPlaceholder', 'textHelper', 'textOnColor', 'textInverse', 'linkPrimary', 'linkSecondary', 'linkVisited', 'linkInverse', 'iconPrimary', 'iconSecondary', 'iconOnColor', 'iconInverse', 'supportError', 'supportSuccess', 'supportWarning', 'supportInfo', 'supportErrorInverse', 'supportSuccessInverse', 'supportWarningInverse', 'supportInfoInverse', 'overlay', 'toggleOff', 'buttonPrimary', 'buttonSecondary', 'buttonTertiary', 'buttonDangerPrimary', 'buttonDangerSecondary']
  }, {
    type: 'interactive',
    tokens: ['focus', 'inverseFocusUi', 'hoverPrimary', 'hoverPrimaryText', 'hoverSecondary', 'hoverTertiary', 'hoverUI', 'hoverLightUI', 'hoverSelectedUI', 'hoverDanger', 'hoverRow', 'activePrimary', 'activeSecondary', 'activeTertiary', 'activeUI', 'activeLightUI', 'activeDanger', 'selectedUI', 'selectedLightUI', 'highlight', 'skeleton01', 'skeleton02', 'visitedLink', 'disabled01', 'disabled02', 'disabled03', 'inverseHoverUI', 'active01', 'hoverField', 'decorative01', 'buttonSeparator', // new tokens
    'backgroundActive', 'layerActive', 'buttonDangerActive', 'buttonPrimaryActive', 'buttonSecondaryActive', 'buttonTertiaryActive', 'focusInset', 'focusInverse', 'backgroundHover', 'layerHover', 'fieldHover', 'backgroundInverseHover', 'linkPrimaryHover', 'buttonDangerHover', 'buttonPrimaryHover', 'buttonSecondaryHover', 'buttonTertiaryHover', 'backgroundSelected', 'backgroundSelectedHover', 'layerSelected', 'layerSelectedHover', 'layerSelectedInverse', 'borderSubtleSelected', 'layerDisabled', 'fieldDisabled', 'borderDisabled', 'textDisabled', 'buttonDisabled', 'iconDisabled', 'textOnColorDisabled', 'iconOnColorDisabled', 'layerSelectedDisabled', 'skeletonBackground', 'skeletonElement']
  }],
  deprecated: ['brand01', 'brand02', 'brand03', 'active01', 'danger']
};

/* eslint-disable */

/* Do not edit file! Updated at Mon, 29 Nov 2021 19:56:07 GMT from Figma */
var meta = {
  corporate1: {
    description: "#007DBC (corporate blue)",
    variable: "corporate01",
    former: "Previous token: brand-01",
    hex: "#007dbc",
    rgba: {
      r: 0,
      g: 0.4901960790157318,
      b: 0.7372549176216125,
      a: 1
    },
    category: "Corporate"
  },
  corporate2: {
    description: "#000000 (full black)",
    variable: "corporate02",
    former: "Previous token: none",
    hex: "#000000",
    rgba: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    },
    category: "Corporate"
  },
  corporate3: {
    description: "#FFFFFF (full white)",
    variable: "corporate03",
    former: "Previous token: none",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Corporate"
  },
  corporate4: {
    description: "#36B5C5",
    variable: "corporate04",
    former: "Previous token: none",
    hex: "#36b5c5",
    rgba: {
      r: 0.21176470816135406,
      g: 0.7098039388656616,
      b: 0.772549033164978,
      a: 1
    },
    category: "Corporate"
  },
  corporate5: {
    description: "#00B485",
    variable: "corporate05",
    former: "Previous token: none",
    hex: "#00b485",
    rgba: {
      r: 0,
      g: 0.7058823704719543,
      b: 0.5215686559677124,
      a: 1
    },
    category: "Corporate"
  },
  corporate6: {
    description: "#008868",
    variable: "corporate06",
    former: "Previous token: none",
    hex: "#008868",
    rgba: {
      r: 0,
      g: 0.5333333611488342,
      b: 0.40784314274787903,
      a: 1
    },
    category: "Corporate"
  },
  corporate7: {
    description: "#1A4262",
    variable: "corporate07",
    former: "Previous token: none",
    hex: "#1a4262",
    rgba: {
      r: 0.10196078568696976,
      g: 0.25882354378700256,
      b: 0.3843137323856354,
      a: 1
    },
    category: "Corporate"
  },
  corporate8: {
    description: "#982B56",
    variable: "corporate08",
    former: "Previous token: none",
    hex: "#982b56",
    rgba: {
      r: 0.5960784554481506,
      g: 0.16862745583057404,
      b: 0.33725491166114807,
      a: 1
    },
    category: "Corporate"
  },
  corporate9: {
    description: "#EF404C",
    variable: "corporate09",
    former: "Previous token: none",
    hex: "#ef404c",
    rgba: {
      r: 0.9372549057006836,
      g: 0.250980406999588,
      b: 0.2980392277240753,
      a: 1
    },
    category: "Corporate"
  },
  corporate10: {
    description: "#F47847",
    variable: "corporate10",
    former: "Previous token: none",
    hex: "#f47847",
    rgba: {
      r: 0.95686274766922,
      g: 0.47058823704719543,
      b: 0.27843138575553894,
      a: 1
    },
    category: "Corporate"
  },
  corporate11: {
    description: "#B79F8D",
    variable: "corporate11",
    former: "Previous token: none",
    hex: "#b79f8d",
    rgba: {
      r: 0.7176470756530762,
      g: 0.6235294342041016,
      b: 0.5529412031173706,
      a: 1
    },
    category: "Corporate"
  },
  corporate12: {
    description: "#ECDFBB",
    variable: "corporate12",
    former: "Previous token: none",
    hex: "#ecdfbb",
    rgba: {
      r: 0.9254902005195618,
      g: 0.8745098114013672,
      b: 0.7333333492279053,
      a: 1
    },
    category: "Corporate"
  },
  brand: {
    description: "WFP corporate blue",
    variable: "brand",
    former: "Previous token: brand-01",
    hex: "#007dbc",
    rgba: {
      r: 0,
      g: 0.4901960790157318,
      b: 0.7372549176216125,
      a: 1
    },
    category: "Primary"
  },
  brandDark: {
    description: "WFP corporate dark blue",
    variable: "brandDark",
    former: "Previous token: none",
    hex: "#1a4262",
    rgba: {
      r: 0.10196078568696976,
      g: 0.25882354378700256,
      b: 0.3843137323856354,
      a: 1
    },
    category: "Primary"
  },
  interactive: {
    description: "Interactive color for all non-links and non-buttons elements",
    variable: "interactive",
    former: "Previous token: interactive-01",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Primary"
  },
  overlay: {
    description: "Overlay color",
    variable: "overlay",
    former: "Previous token: none",
    hex: "#0b1923",
    rgba: {
      r: 0.04313725605607033,
      g: 0.09803921729326248,
      b: 0.13725490868091583,
      a: 1
    },
    category: "Primary"
  },
  focus: {
    description: "focus for all interactive tokens",
    variable: "focus",
    former: "Previous token: interactive-01",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Primary"
  },
  focusInverse: {
    description: "focus for all interactive elements \u2028(** to be checked)",
    variable: "focusInverse",
    former: "Previous token: none",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Primary"
  },
  focusInset: {
    description: "Interactive color for all non-links and non-buttons elements",
    variable: "focusInset",
    former: "Previous token: interactive-01",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Primary"
  },
  highlight: {
    description: "Interactive color for all non-links and non-buttons elements",
    variable: "highlight",
    former: "Previous token: interactive-01",
    hex: "#bbe3ff",
    rgba: {
      r: 0.7333333492279053,
      g: 0.8907103538513184,
      b: 1,
      a: 1
    },
    category: "Primary"
  },
  background: {
    description: "Default page background",
    variable: "background",
    former: "Previous token: ui-01",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Background"
  },
  backgroundHover: {
    description: "Hover state to background",
    variable: "backgroundHover",
    former: "Previous token: none",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Background"
  },
  backgroundActive: {
    description: "Active color for background",
    variable: "backgroundActive",
    former: "Previous token: tbc",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Background"
  },
  backgroundInverse: {
    description: "Inverse background\u2028Dark mode background",
    variable: "backgroundInverse",
    former: "Previous token: ui-06",
    hex: "#333945",
    rgba: {
      r: 0.20000000298023224,
      g: 0.2235294133424759,
      b: 0.2705882489681244,
      a: 1
    },
    category: "Background"
  },
  backgroundInverseMax: {
    description: "Inverse background\u2028Dark mode background",
    variable: "backgroundInverseMax",
    former: "Previous token: ui-06",
    hex: "#232831",
    rgba: {
      r: 0.13725490868091583,
      g: 0.1568627506494522,
      b: 0.1921568661928177,
      a: 1
    },
    category: "Background"
  },
  backgroundInverseHover: {
    description: "inverse background hover",
    variable: "backgroundInverseHover",
    former: "Previous token: none",
    hex: "#313c44",
    rgba: {
      r: 0.1944444477558136,
      g: 0.23657405376434326,
      b: 0.2666666805744171,
      a: 1
    },
    category: "Background"
  },
  backgroundSelected: {
    description: "selected background",
    variable: "backgroundSelected",
    former: "Previous token: none",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Background"
  },
  backgroundSelectedHover: {
    description: "Hover to selected background",
    variable: "backgroundSelectedHover",
    former: "Previous token: none",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Background"
  },
  backgroundBrand: {
    description: "Brand background color used in Navigation",
    variable: "backgroundBrand",
    former: "Previous token: brand-01",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Background"
  },
  layer: {
    description: "Secondary page background Container background on background",
    variable: "layer",
    former: "Previous token: ui-02",
    hex: "#ebf1f4",
    rgba: {
      r: 0.9215686321258545,
      g: 0.9450980424880981,
      b: 0.95686274766922,
      a: 1
    },
    category: "Layer"
  },
  layerActive: {
    description: "Missing description",
    variable: "layerActive",
    former: "Previous token: ui-04",
    hex: "#dfe3e6",
    rgba: {
      r: 0.8745098114013672,
      g: 0.8901960849761963,
      b: 0.9019607901573181,
      a: 1
    },
    category: "Layer"
  },
  layerHover: {
    description: "** Hover state to layer",
    variable: "layerHover",
    former: "Previous token: none",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Layer"
  },
  layerSelected: {
    description: "Selected state to token",
    variable: "layerSelected",
    former: "Previous token: none",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Layer"
  },
  layerSelectedHover: {
    description: "Hover state to selected hover token",
    variable: "layerSelectedHover",
    former: "Previous token: none",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Layer"
  },
  layerSelectedInverse: {
    description: "Inverse state to selected layer",
    variable: "layerSelectedInverse",
    former: "Previous token: none",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Layer"
  },
  layerSelectedDisabled: {
    description: "Disabled state to selected layer",
    variable: "layerSelectedDisabled",
    former: "Previous token: none",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Layer"
  },
  layerAccent: {
    description: "** Tertiary background (to be confirmed)",
    variable: "layerAccent",
    former: "Previous token: ui-03 (to be checked)",
    hex: "#d7dfe7",
    rgba: {
      r: 0.843993067741394,
      g: 0.8761631846427917,
      b: 0.9083333611488342,
      a: 1
    },
    category: "Layer"
  },
  layerAccentActive: {
    description: "Missing description",
    variable: "layerAccentActive",
    former: "Previous token: none",
    hex: "#7e8b93",
    rgba: {
      r: 0.4941176474094391,
      g: 0.545098066329956,
      b: 0.5764706134796143,
      a: 1
    },
    category: "Layer"
  },
  layerAccentHover: {
    description: "Hover to accent layer",
    variable: "layerAccentHover",
    former: "Previous token: none",
    hex: "#586b77",
    rgba: {
      r: 0.34611111879348755,
      g: 0.4207407534122467,
      b: 0.46666666865348816,
      a: 1
    },
    category: "Layer"
  },
  layerDisabled: {
    description: "Disabled to layer",
    variable: "layerDisabled",
    former: "Previous token: disabled-01 (**)",
    hex: "#586b77",
    rgba: {
      r: 0.34611111879348755,
      g: 0.4207407534122467,
      b: 0.46666666865348816,
      a: 1
    },
    category: "Layer"
  },
  textPrimary: {
    description: "Primary text, headers, input labels\nHover text color to textSecondary",
    variable: "textPrimary",
    former: "Previous token: text-01",
    hex: "#031c2d",
    rgba: {
      r: 0.0117647061124444,
      g: 0.10980392247438431,
      b: 0.1764705926179886,
      a: 1
    },
    category: "Text"
  },
  textSecondary: {
    description: "Secondary text, optional text",
    variable: "textSecondary",
    former: "Previous token: text-02",
    hex: "#5a6872",
    rgba: {
      r: 0.3529411852359772,
      g: 0.40784314274787903,
      b: 0.4470588266849518,
      a: 1
    },
    category: "Text"
  },
  textPlaceholder: {
    description: "Placeholder text",
    variable: "textPlaceholder",
    former: "Previous token: text-03",
    hex: "#96a2a8",
    rgba: {
      r: 0.5907291769981384,
      g: 0.6360581517219543,
      b: 0.6625000238418579,
      a: 1
    },
    category: "Text"
  },
  textHelper: {
    description: "Helper text, e.g. in input fields",
    variable: "textHelper",
    former: "Previous token: text-02",
    hex: "#5a6872",
    rgba: {
      r: 0.3529411852359772,
      g: 0.40784314274787903,
      b: 0.4470588266849518,
      a: 1
    },
    category: "Text"
  },
  textOnColor: {
    description: "Text on interactive colors like buttons\n(always white across themes)",
    variable: "textOnColor",
    former: "Previous token: text-04",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Text"
  },
  textInverse: {
    description: "Text on dark background\n(high contrast text)",
    variable: "textInverse",
    former: "Previous token: inverse-01",
    hex: "#f3f7f9",
    rgba: {
      r: 0.9546875357627869,
      g: 0.9691342711448669,
      b: 0.9791666865348816,
      a: 1
    },
    category: "Text"
  },
  textDisabled: {
    description: "Disabled text (4.5:1 AA on white bg)",
    variable: "textDisabled",
    former: "Previous token: none",
    hex: "#8c9ba5",
    rgba: {
      r: 0.5490196347236633,
      g: 0.6078431606292725,
      b: 0.6470588445663452,
      a: 1
    },
    category: "Text"
  },
  textError: {
    description: "Error message text",
    variable: "textError",
    former: "Previous token: none",
    hex: "#c5192d",
    rgba: {
      r: 0.772549033164978,
      g: 0.09803921729326248,
      b: 0.1764705926179886,
      a: 1
    },
    category: "Text"
  },
  textWarning: {
    description: "Warning message text",
    variable: "textWarning",
    former: "Previous token: none",
    hex: "#b98407",
    rgba: {
      r: 0.7254902124404907,
      g: 0.5176470875740051,
      b: 0.027450980618596077,
      a: 1
    },
    category: "Text"
  },
  textSuccess: {
    description: "Success message text",
    variable: "textSuccess",
    former: "Previous token: none",
    hex: "#3f600f",
    rgba: {
      r: 0.24705882370471954,
      g: 0.3764705955982208,
      b: 0.05882352963089943,
      a: 1
    },
    category: "Text"
  },
  textInfo: {
    description: "Info message text",
    variable: "textInfo",
    former: "Previous token: none",
    hex: "#085387",
    rgba: {
      r: 0.0313725508749485,
      g: 0.32549020648002625,
      b: 0.529411792755127,
      a: 1
    },
    category: "Text"
  },
  textOnColorDisabled: {
    description: "Missing description",
    variable: "textOnColorDisabled",
    former: "Previous token: none",
    hex: "#5a6872",
    rgba: {
      r: 0.3529411852359772,
      g: 0.40784314274787903,
      b: 0.4470588266849518,
      a: 1
    },
    category: "Text"
  },
  buttonPrimary: {
    description: "Primary button",
    variable: "buttonPrimary",
    former: "Previous token: \nbackground: interactive-01\nlabel: inverse-01",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Button"
  },
  buttonPrimaryHover: {
    description: "Hover state to primary button",
    variable: "buttonPrimaryHover",
    former: "Previous token: \nbackground: interactive-02\nlabel: inverse-01",
    hex: "#085387",
    rgba: {
      r: 0.0313725508749485,
      g: 0.32549020648002625,
      b: 0.529411792755127,
      a: 1
    },
    category: "Button"
  },
  buttonPrimaryActive: {
    description: "Active state to primary button",
    variable: "buttonPrimaryActive",
    former: "Previous token: \nbackground: interactive-01\nlabel: inverse-01",
    hex: "#1a4262",
    rgba: {
      r: 0.10196078568696976,
      g: 0.25882354378700256,
      b: 0.3843137323856354,
      a: 1
    },
    category: "Button"
  },
  buttonSecondary: {
    description: "Secondary button",
    variable: "buttonSecondary",
    former: "Previous token: \nbackground: none (transparent)\nborder and label: interactive-02",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Button"
  },
  buttonSecondaryHover: {
    description: "Hover state to secondary button",
    variable: "buttonSecondaryHover",
    former: "Previous token: \nbackground: none\nborder and label: interactive-02",
    hex: "#085387",
    rgba: {
      r: 0.0313725508749485,
      g: 0.32549020648002625,
      b: 0.529411792755127,
      a: 1
    },
    category: "Button"
  },
  buttonSecondaryActive: {
    description: "Active state to secondary button",
    variable: "buttonSecondaryActive",
    former: "Previous token:\nbackground: none\nborder and label: interactive-01",
    hex: "#1a4262",
    rgba: {
      r: 0.10196078568696976,
      g: 0.25882354378700256,
      b: 0.3843137323856354,
      a: 1
    },
    category: "Button"
  },
  buttonTertiary: {
    description: "Tertiary button",
    variable: "buttonTertiary",
    former: "Previous token:\nbackground: none (transparent)\nborder and label: text-02",
    hex: "#d7dfe7",
    rgba: {
      r: 0.843137264251709,
      g: 0.8745098114013672,
      b: 0.9058823585510254,
      a: 1
    },
    category: "Button"
  },
  buttonTertiaryHover: {
    description: "Hover state to tertiary button",
    variable: "buttonTertiaryHover",
    former: "Previous token: \nbackground: ui-02\nborder: text-02\nlabel: text-01",
    hex: "#c5d0db",
    rgba: {
      r: 0.772656261920929,
      g: 0.817578136920929,
      b: 0.862500011920929,
      a: 1
    },
    category: "Button"
  },
  buttonTertiaryActive: {
    description: "Active state to tertiary button",
    variable: "buttonTertiaryActive",
    former: "Previous token:\nbackground: transparent\nborder: text-02\ntext: ui-05",
    hex: "#c5d0dc",
    rgba: {
      r: 0.772549033164978,
      g: 0.8156862854957581,
      b: 0.8627451062202454,
      a: 1
    },
    category: "Button"
  },
  buttonDangerPrimary: {
    description: "Danger primary button",
    variable: "buttonDangerPrimary",
    former: "Previous token: \nbackground: support-01\nlabel: inverse-01",
    hex: "#c5192d",
    rgba: {
      r: 0.772549033164978,
      g: 0.09803921729326248,
      b: 0.1764705926179886,
      a: 1
    },
    category: "Button"
  },
  buttonDangerSecondary: {
    description: "Danger secondary button",
    variable: "buttonDangerSecondary",
    former: "Previous token: \nbackground: transparent\nlabel: support-01\ncolor: support-01",
    hex: "#c5192d",
    rgba: {
      r: 0.772549033164978,
      g: 0.09803921729326248,
      b: 0.1764705926179886,
      a: 1
    },
    category: "Button"
  },
  buttonDangerHover: {
    description: "Hover state to danger primary and secondary",
    variable: "buttonDangerHover",
    former: "Previous token: none (hardcoded)",
    hex: "#981323",
    rgba: {
      r: 0.5960784554481506,
      g: 0.07450980693101883,
      b: 0.13725490868091583,
      a: 1
    },
    category: "Button"
  },
  buttonDangerActive: {
    description: "Active to danger primary and secondary",
    variable: "buttonDangerActive",
    former: "Previous token: none (hardcoded)",
    hex: "#451e22",
    rgba: {
      r: 0.2705882489681244,
      g: 0.11764705926179886,
      b: 0.13333334028720856,
      a: 1
    },
    category: "Button"
  },
  buttonGhostHover: {
    description: "Hover state to ghost button",
    variable: "buttonGhostHover",
    former: "Previous token: ui-03",
    hex: "#f0f3f6",
    rgba: {
      r: 0.9411764740943909,
      g: 0.9529411792755127,
      b: 0.9647058844566345,
      a: 1
    },
    category: "Button"
  },
  buttonGhostActive: {
    description: "Active state to ghost button",
    variable: "buttonGhostActive",
    former: "Previous token: ui-03",
    hex: "#dde8ed",
    rgba: {
      r: 0.8666666746139526,
      g: 0.9098039269447327,
      b: 0.929411768913269,
      a: 1
    },
    category: "Button"
  },
  buttonInverse: {
    description: "Inverse button",
    variable: "buttonInverse",
    former: "Previous token: inverse-01",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Button"
  },
  buttonInverseHover: {
    description: "Hover state to inverse button",
    variable: "buttonInverseHover",
    former: "Previous token: none",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Button"
  },
  buttonInverseActive: {
    description: "Active and focus states to inverse button",
    variable: "buttonInverseActive",
    former: "Previous token: none",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Button"
  },
  buttonMainNavigation: {
    description: "Button for MainNavigation component",
    variable: "buttonMainNavigation",
    former: "Previous token: none",
    hex: "#3b94d3",
    rgba: {
      r: 0.23137255012989044,
      g: 0.5803921818733215,
      b: 0.8274509906768799,
      a: 1
    },
    category: "Button"
  },
  buttonMainNavigationHover: {
    description: "Hover state to button for MainNavigation component",
    variable: "buttonMainNavigationHover",
    former: "Previous token: none",
    hex: "#509fd8",
    rgba: {
      r: 0.3137255012989044,
      g: 0.6235294342041016,
      b: 0.8470588326454163,
      a: 1
    },
    category: "Button"
  },
  buttonDisabled: {
    description: "Disabled button\nUse with textDisabled token",
    variable: "buttonDisabled",
    former: "Previous token: none",
    hex: "#c5cdd2",
    rgba: {
      r: 0.772549033164978,
      g: 0.8039215803146362,
      b: 0.8235294222831726,
      a: 1
    },
    category: "Button"
  },
  buttonSeparator: {
    description: "Seperator between buttons",
    variable: "buttonSeparator",
    former: "#e0e0e0",
    hex: "#c5192d",
    rgba: {
      r: 0.772549033164978,
      g: 0.09803921729326248,
      b: 0.1764705926179886,
      a: 1
    },
    category: "Button"
  },
  linkPrimary: {
    description: "Primary links, ghost button",
    variable: "linkPrimary",
    former: "Previous token: interactive-01",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Link"
  },
  linkPrimaryHover: {
    description: "Hover to primary links, ghost button",
    variable: "linkPrimaryHover",
    former: "Previous token: interactive-02",
    hex: "#085387",
    rgba: {
      r: 0.0313725508749485,
      g: 0.32549020648002625,
      b: 0.529411792755127,
      a: 1
    },
    category: "Link"
  },
  linkSecondary: {
    description: "Secondary link color for lower contrast backgrounds",
    variable: "linkSecondary",
    former: "Previous token: none",
    hex: "#085387",
    rgba: {
      r: 0.0313725508749485,
      g: 0.32549020648002625,
      b: 0.529411792755127,
      a: 1
    },
    category: "Link"
  },
  linkVisited: {
    description: "Visited links",
    variable: "linkVisited",
    former: "Previous token: interactive-02",
    hex: "#085387",
    rgba: {
      r: 0.0313725508749485,
      g: 0.32549020648002625,
      b: 0.529411792755127,
      a: 1
    },
    category: "Link"
  },
  linkOnColor: {
    description: "Link on backgroundBrand (e.g. main navigation links)",
    variable: "linkOnColor",
    former: "Previous token: none",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Link"
  },
  linkInverse: {
    description: "High contrast links on backgroundInverse color.",
    variable: "linkInverse",
    former: "Previous token: none",
    hex: "#8ccfff",
    rgba: {
      r: 0.550000011920929,
      g: 0.8155736923217773,
      b: 1,
      a: 1
    },
    category: "Link"
  },
  field: {
    description: "Background color for input fields",
    variable: "field",
    former: "Previous token: field-01",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Form"
  },
  fieldHover: {
    description: "**Usage to be specified",
    variable: "fieldHover",
    former: "Previous token: none",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Form"
  },
  fieldBorder: {
    description: "Border color for input fields",
    variable: "fieldBorder",
    former: "Previous token: field-border-01",
    hex: "#77a0b6",
    rgba: {
      r: 0.46666666865348816,
      g: 0.6274510025978088,
      b: 0.7137255072593689,
      a: 1
    },
    category: "Form"
  },
  fieldOptionHover: {
    description: "Hover to dropdown option ",
    variable: "fieldOptionHover",
    former: "Previous token: none",
    hex: "#e0ebfd",
    rgba: {
      r: 0.8784313797950745,
      g: 0.9215686321258545,
      b: 0.9921568632125854,
      a: 1
    },
    category: "Form"
  },
  fieldOptionActive: {
    description: "Selected dropdown options",
    variable: "fieldOptionActive",
    former: "Previous token: ui-04",
    hex: "#dfe3e6",
    rgba: {
      r: 0.8745098114013672,
      g: 0.8901960849761963,
      b: 0.9019607901573181,
      a: 1
    },
    category: "Form"
  },
  fieldDisabled: {
    description: "Default input fields;",
    variable: "fieldDisabled",
    former: "Previous token: disabled01",
    hex: "#f9fbfc",
    rgba: {
      r: 0.9764705896377563,
      g: 0.9843137264251709,
      b: 0.9882352948188782,
      a: 1
    },
    category: "Form"
  },
  toggleOff: {
    description: "3:1 aa element contrast",
    variable: "toggleOff",
    former: "Previous token: none",
    hex: "#8c9ba5",
    rgba: {
      r: 0.5490196347236633,
      g: 0.6078431606292725,
      b: 0.6470588445663452,
      a: 1
    },
    category: "Form"
  },
  iconPrimary: {
    description: "Primary color for icons",
    variable: "iconPrimary",
    former: "Previous token: none",
    hex: "#1d2023",
    rgba: {
      r: 0.11687500029802322,
      g: 0.12925000488758087,
      b: 0.13750000298023224,
      a: 1
    },
    category: "Icon"
  },
  iconSecondary: {
    description: "Secondary color for icons",
    variable: "iconSecondary",
    former: "Previous token: none",
    hex: "#97a2a9",
    rgba: {
      r: 0.5921568870544434,
      g: 0.6352941393852234,
      b: 0.6627451181411743,
      a: 1
    },
    category: "Icon"
  },
  iconTertiary: {
    description: "Tertiary color for icons\nIcons in input fields",
    variable: "iconTertiary",
    former: "Previous token: ui-05",
    hex: "#77a0b6",
    rgba: {
      r: 0.46666666865348816,
      g: 0.6274510025978088,
      b: 0.7137255072593689,
      a: 1
    },
    category: "Icon"
  },
  iconOnColor: {
    description: "White icon on colored background",
    variable: "iconOnColor",
    former: "Previous token: none",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Icon"
  },
  iconOnColorDisabled: {
    description: "Disabled icon on colored background",
    variable: "iconOnColorDisabled",
    former: "Previous token: none",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Icon"
  },
  iconInverse: {
    description: "Inverse icon color",
    variable: "iconInverse",
    former: "Previous token: inverse-01",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Icon"
  },
  iconDisabled: {
    description: "Disabled icon on white background",
    variable: "iconDisabled",
    former: "Previous token: none",
    hex: "#8c9ba5",
    rgba: {
      r: 0.5490196347236633,
      g: 0.6078431606292725,
      b: 0.6470588445663452,
      a: 1
    },
    category: "Icon"
  },
  borderSubtle: {
    description: "Subtle border, e.g. dividers",
    variable: "borderSubtle",
    former: "Previous token: ui-03",
    hex: "#f0f3f6",
    rgba: {
      r: 0.9411764740943909,
      g: 0.9529411792755127,
      b: 0.9647058844566345,
      a: 1
    },
    category: "Border"
  },
  borderStrong: {
    description: "Medium contrast border (3:1 AA)",
    variable: "borderStrong",
    former: "Previous token: ui-04",
    hex: "#d3e1e8",
    rgba: {
      r: 0.8274509906768799,
      g: 0.8823529481887817,
      b: 0.9098039269447327,
      a: 1
    },
    category: "Border"
  },
  borderInverse: {
    description: "High contrast border (4.5:1 AA)",
    variable: "borderInverse",
    former: "Previous token: ui-05",
    hex: "#8c9ba5",
    rgba: {
      r: 0.5490196347236633,
      g: 0.6078431606292725,
      b: 0.6470588445663452,
      a: 1
    },
    category: "Border"
  },
  borderInteractive: {
    description: "3:1 AA contrast\nSelected elements\nActive elements",
    variable: "borderInteractive",
    former: "Previous token: none",
    hex: "#007dbc",
    rgba: {
      r: 0,
      g: 0.4901960790157318,
      b: 0.7372549176216125,
      a: 1
    },
    category: "Border"
  },
  borderSubtleSelected: {
    description: "Subtle border;\nTertiary background (???)",
    variable: "borderSubtleSelected",
    former: "Previous token: none",
    hex: "#f0f3f6",
    rgba: {
      r: 0.9411764740943909,
      g: 0.9529411792755127,
      b: 0.9647058844566345,
      a: 1
    },
    category: "Border"
  },
  borderDisabled: {
    description: "Border for disabled elements, e.g. disabled input fields",
    variable: "borderDisabled",
    former: "Previous token: disabled-02",
    hex: "#dfe6eb",
    rgba: {
      r: 0.8745098114013672,
      g: 0.9019607901573181,
      b: 0.9215686321258545,
      a: 1
    },
    category: "Border"
  },
  supportError: {
    description: "Indicate error or invalid state",
    variable: "supportError",
    former: "Previous token: support-01",
    hex: "#c5192d",
    rgba: {
      r: 0.772549033164978,
      g: 0.09803921729326248,
      b: 0.1764705926179886,
      a: 1
    },
    category: "Support"
  },
  supportSuccess: {
    description: "Indicates succes state",
    variable: "supportSuccess",
    former: "Previous token: support-02",
    hex: "#689e18",
    rgba: {
      r: 0.40784314274787903,
      g: 0.6196078658103943,
      b: 0.0941176488995552,
      a: 1
    },
    category: "Support"
  },
  supportWarning: {
    description: "Indicates warning state",
    variable: "supportWarning",
    former: "Previous token: support-03",
    hex: "#f7b825",
    rgba: {
      r: 0.9686274528503418,
      g: 0.7215686440467834,
      b: 0.14509804546833038,
      a: 1
    },
    category: "Support"
  },
  supportInfo: {
    description: "Indicates information state",
    variable: "supportInfo",
    former: "Previous token: support-04",
    hex: "#007dbc",
    rgba: {
      r: 0,
      g: 0.4901960790157318,
      b: 0.7372549176216125,
      a: 1
    },
    category: "Support"
  },
  supportErrorLight: {
    description: "Low contrast color for error or invalid state",
    variable: "supportErrorLight",
    former: "Previous token: support-light-01",
    hex: "#f1c6cb",
    rgba: {
      r: 0.9450980424880981,
      g: 0.7764706015586853,
      b: 0.7960784435272217,
      a: 1
    },
    category: "Support"
  },
  supportSuccessLight: {
    description: "Low contrast color for success state",
    variable: "supportSuccessLight",
    former: "Previous token: support-light-02",
    hex: "#ccdbcd",
    rgba: {
      r: 0.800000011920929,
      g: 0.8588235378265381,
      b: 0.8039215803146362,
      a: 1
    },
    category: "Support"
  },
  supportWarningLight: {
    description: "Low contrast color for warning state",
    variable: "supportWarningLight",
    former: "Previous token: support-light-03",
    hex: "#fdedc9",
    rgba: {
      r: 0.9921568632125854,
      g: 0.929411768913269,
      b: 0.7882353067398071,
      a: 1
    },
    category: "Support"
  },
  supportInfoLight: {
    description: "Low contrast color for info state",
    variable: "supportInfoLight",
    former: "Previous token: support-info-04",
    hex: "#dae9f4",
    rgba: {
      r: 0.8549019694328308,
      g: 0.9137254953384399,
      b: 0.95686274766922,
      a: 1
    },
    category: "Support"
  },
  supportErrorInverse: {
    description: "Danger in high contrast moments",
    variable: "supportErrorInverse",
    former: "Previous token: none",
    hex: "#ff4056",
    rgba: {
      r: 1,
      g: 0.2541666626930237,
      b: 0.3408915102481842,
      a: 1
    },
    category: "Support"
  },
  supportSuccessInverse: {
    description: "Success in high contrast moments",
    variable: "supportSuccessInverse",
    former: "Previous token: none",
    hex: "#9eea2d",
    rgba: {
      r: 0.6208752989768982,
      g: 0.9208333492279053,
      b: 0.17649304866790771,
      a: 1
    },
    category: "Support"
  },
  supportWarningInverse: {
    description: "Warning in high contrast moments",
    variable: "supportWarningInverse",
    former: "Previous token: none",
    hex: "#ffcf60",
    rgba: {
      r: 1,
      g: 0.8137499094009399,
      b: 0.3791666626930237,
      a: 1
    },
    category: "Support"
  },
  supportInfoInverse: {
    description: "Information in high contrast moments",
    variable: "supportInfoInverse",
    former: "Previous token: none",
    hex: "#17b1ff",
    rgba: {
      r: 0.09166663885116577,
      g: 0.694506824016571,
      b: 1,
      a: 1
    },
    category: "Support"
  },
  skeletonBackground: {
    description: "**Usage to be specified ",
    variable: "background",
    former: "Previous token: none",
    hex: "#8c9ba5",
    rgba: {
      r: 0.5490196347236633,
      g: 0.6078431606292725,
      b: 0.6470588445663452,
      a: 1
    },
    category: "Skeleton"
  },
  skeletonElement: {
    description: "**Usage to be specified",
    variable: "element",
    former: "Previous token: none",
    hex: "#dfe3e6",
    rgba: {
      r: 0.8745098114013672,
      g: 0.8901960849761963,
      b: 0.9019607901573181,
      a: 1
    },
    category: "Skeleton"
  },
  logoWhite: {
    description: "Logos on colored background, full white",
    variable: "white",
    former: "Previous token: none",
    hex: "#ffffff",
    rgba: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    category: "Logo"
  },
  logoBlack: {
    description: "Logos on white background, full black",
    variable: "black",
    former: "Previous token: none",
    hex: "#000000",
    rgba: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    },
    category: "Logo"
  },
  logoBlue: {
    description: "Logos on white background, with corporate blue",
    variable: "blue",
    former: "Previous token: none",
    hex: "#0b77c2",
    rgba: {
      r: 0.04313725605607033,
      g: 0.46666666865348816,
      b: 0.7607843279838562,
      a: 1
    },
    category: "Logo"
  },
  datavisSequentialDefaultSequentialDefault1: {
    description: "Swatch n.1 in the serie",
    variable: "sequential-default-01",
    former: "Previous ",
    hex: "#9deaff",
    rgba: {
      r: 0.615686297416687,
      g: 0.9176470637321472,
      b: 1,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialDefaultSequentialDefault2: {
    description: "Swatch n.2 in the serie",
    variable: "sequential-default-02",
    former: "no former color",
    hex: "#73c3fe",
    rgba: {
      r: 0.45098039507865906,
      g: 0.7647058963775635,
      b: 0.9960784316062927,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialDefaultSequentialDefault3: {
    description: "Swatch n.3 in the serie",
    variable: "sequential-default-03",
    former: "no former color",
    hex: "#4aa1e2",
    rgba: {
      r: 0.29019609093666077,
      g: 0.6313725709915161,
      b: 0.886274516582489,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialDefaultSequentialDefault4: {
    description: "Swatch n.4 in the serie",
    variable: "sequential-default-04",
    former: "no former color",
    hex: "#0780c0",
    rgba: {
      r: 0.027450980618596077,
      g: 0.501960813999176,
      b: 0.7529411911964417,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialDefaultSequentialDefault5: {
    description: "Swatch n.5 in the serie",
    variable: "sequential-default-05",
    former: "no former color",
    hex: "#005f9b",
    rgba: {
      r: 0,
      g: 0.37254902720451355,
      b: 0.6078431606292725,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialDefaultSequentialDefault6: {
    description: "Swatch n.6 in the serie",
    variable: "sequential-default-06",
    former: "no former color",
    hex: "#003f76",
    rgba: {
      r: 0,
      g: 0.24705882370471954,
      b: 0.4627451002597809,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialDefaultSequentialDefault7: {
    description: "Swatch n.7 in the serie",
    variable: "sequential-default-07",
    former: "no former color",
    hex: "#002153",
    rgba: {
      r: 0,
      g: 0.12941177189350128,
      b: 0.32549020648002625,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialSecondarySequentialSecondary1: {
    description: "Swatch n.1 in the serie",
    variable: "sequential-secondary-01",
    former: "no former color",
    hex: "#bdf9c4",
    rgba: {
      r: 0.7411764860153198,
      g: 0.9764705896377563,
      b: 0.7686274647712708,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialSecondarySequentialSecondary2: {
    description: "Swatch n.2 in the serie",
    variable: "sequential-secondary-02",
    former: "no former color",
    hex: "#89eaa8",
    rgba: {
      r: 0.5372549295425415,
      g: 0.9176470637321472,
      b: 0.658823549747467,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialSecondarySequentialSecondary3: {
    description: "Swatch n.3 in the serie",
    variable: "sequential-secondary-03",
    former: "no former color",
    hex: "#5fd79a",
    rgba: {
      r: 0.37254902720451355,
      g: 0.843137264251709,
      b: 0.6039215922355652,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialSecondarySequentialSecondary4: {
    description: "Swatch n.4 in the serie",
    variable: "sequential-secondary-04",
    former: "no former color",
    hex: "#41c196",
    rgba: {
      r: 0.2549019753932953,
      g: 0.7568627595901489,
      b: 0.5882353186607361,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialSecondarySequentialSecondary5: {
    description: "Swatch n.5 in the serie",
    variable: "sequential-secondary-05",
    former: "no former color",
    hex: "#33aa96",
    rgba: {
      r: 0.20000000298023224,
      g: 0.6666666865348816,
      b: 0.5882353186607361,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialSecondarySequentialSecondary6: {
    description: "Swatch n.6 in the serie",
    variable: "sequential-secondary-06",
    former: "no former color",
    hex: "#319298",
    rgba: {
      r: 0.1921568661928177,
      g: 0.572549045085907,
      b: 0.5960784554481506,
      a: 1
    },
    category: "DataVis "
  },
  datavisSequentialSecondarySequentialSecondary7: {
    description: "Swatch n.7 in the serie",
    variable: "sequential-secondary-07",
    former: "no former color",
    hex: "#367a96",
    rgba: {
      r: 0.21176470816135406,
      g: 0.47843137383461,
      b: 0.5882353186607361,
      a: 1
    },
    category: "DataVis "
  },
  datavisCategoricalCategorical1: {
    description: "Swatch n.1 in the serie",
    variable: "categorical-01",
    former: "no former color",
    hex: "#007dbc",
    rgba: {
      r: 0,
      g: 0.4901960790157318,
      b: 0.7372549176216125,
      a: 1
    },
    category: "DataVis "
  },
  datavisCategoricalCategorical2: {
    description: "Swatch n.2 in the serie",
    variable: "categorical-02",
    former: "no former color",
    hex: "#36b5c5",
    rgba: {
      r: 0.21176470816135406,
      g: 0.7098039388656616,
      b: 0.772549033164978,
      a: 1
    },
    category: "DataVis "
  },
  datavisCategoricalCategorical3: {
    description: "Swatch n.3 in the serie",
    variable: "categorical-03",
    former: "no former color",
    hex: "#00b485",
    rgba: {
      r: 0,
      g: 0.7058823704719543,
      b: 0.5215686559677124,
      a: 1
    },
    category: "DataVis "
  },
  datavisCategoricalCategorical4: {
    description: "Swatch n.4 in the serie",
    variable: "categorical-04",
    former: "no former color",
    hex: "#008868",
    rgba: {
      r: 0,
      g: 0.5333333611488342,
      b: 0.40784314274787903,
      a: 1
    },
    category: "DataVis "
  },
  datavisCategoricalCategorical5: {
    description: "Swatch n.5 in the serie",
    variable: "categorical-05",
    former: "no former color",
    hex: "#1a4262",
    rgba: {
      r: 0.10196078568696976,
      g: 0.25882354378700256,
      b: 0.3843137323856354,
      a: 1
    },
    category: "DataVis"
  },
  datavisCategoricalCategorical6: {
    description: "Swatch n.6 in the serie",
    variable: "categorical-06",
    former: "no former color",
    hex: "#982b56",
    rgba: {
      r: 0.5960784554481506,
      g: 0.16862745583057404,
      b: 0.33725491166114807,
      a: 1
    },
    category: "DataVis "
  },
  datavisCategoricalCategorical7: {
    description: "Swatch n.7 in the serie",
    variable: "categorical-07",
    former: "no former color",
    hex: "#ef404c",
    rgba: {
      r: 0.9372549057006836,
      g: 0.250980406999588,
      b: 0.2980392277240753,
      a: 1
    },
    category: "DataVis "
  },
  datavisCategoricalCategorical8: {
    description: "Swatch n.8 in the serie",
    variable: "categorical-08",
    former: "no former color",
    hex: "#f47847",
    rgba: {
      r: 0.95686274766922,
      g: 0.47058823704719543,
      b: 0.27843138575553894,
      a: 1
    },
    category: "DataVis "
  },
  datavisCategoricalCategorical9: {
    description: "Swatch n.9 in the serie",
    variable: "categorical-09",
    former: "no former color",
    hex: "#b79f8d",
    rgba: {
      r: 0.7176470756530762,
      g: 0.6235294342041016,
      b: 0.5529412031173706,
      a: 1
    },
    category: "DataVis "
  },
  datavisCategoricalCategorical10: {
    description: "Swatch n.10 in the serie",
    variable: "categorical-10",
    former: "no former color",
    hex: "#ecdfbb",
    rgba: {
      r: 0.9254902005195618,
      g: 0.8745098114013672,
      b: 0.7333333492279053,
      a: 1
    },
    category: "DataVis "
  },
  datavisDivergingDiverging1: {
    description: "Swatch n.1 in the serie",
    variable: "diverging-01",
    former: "no former color",
    hex: "#73c5d0",
    rgba: {
      r: 0.45098039507865906,
      g: 0.772549033164978,
      b: 0.8156862854957581,
      a: 1
    },
    category: "DataVis "
  },
  datavisDivergingDiverging2: {
    description: "Swatch n.2 in the serie",
    variable: "diverging-02",
    former: "no former color",
    hex: "#ecdfbb",
    rgba: {
      r: 0.9254902005195618,
      g: 0.8745098114013672,
      b: 0.7333333492279053,
      a: 1
    },
    category: "DataVis "
  },
  datavisAlertAlert1: {
    description: "Swatch n.1 in the serie",
    variable: "alert-01",
    former: "no former color",
    hex: "#5fd79a",
    rgba: {
      r: 0.37254902720451355,
      g: 0.843137264251709,
      b: 0.6039215922355652,
      a: 1
    },
    category: "DataVis "
  },
  datavisAlertAlert2: {
    description: "Swatch n.2 in the serie",
    variable: "alert-02",
    former: "no former color",
    hex: "#a0db90",
    rgba: {
      r: 0.6274510025978088,
      g: 0.8588235378265381,
      b: 0.5647059082984924,
      a: 1
    },
    category: "DataVis "
  },
  datavisAlertAlert3: {
    description: "Swatch n.3 in the serie",
    variable: "alert-03",
    former: "no former color",
    hex: "#d0de85",
    rgba: {
      r: 0.8156862854957581,
      g: 0.8705882430076599,
      b: 0.5215686559677124,
      a: 1
    },
    category: "DataVis "
  },
  datavisAlertAlert4: {
    description: "Swatch n.4 in the serie",
    variable: "alert-04",
    former: "no former color",
    hex: "#fbe07a",
    rgba: {
      r: 0.9843137264251709,
      g: 0.8784313797950745,
      b: 0.47843137383461,
      a: 1
    },
    category: "DataVis "
  },
  datavisAlertAlert5: {
    description: "Swatch n.5 in the serie",
    variable: "alert-05",
    former: "no former color",
    hex: "#fbb16a",
    rgba: {
      r: 0.9843137264251709,
      g: 0.6941176652908325,
      b: 0.4156862795352936,
      a: 1
    },
    category: "DataVis "
  },
  datavisAlertAlert6: {
    description: "Swatch n.6 in the serie",
    variable: "alert-06",
    former: "no former color",
    hex: "#f77f5b",
    rgba: {
      r: 0.9686274528503418,
      g: 0.49803921580314636,
      b: 0.35686275362968445,
      a: 1
    },
    category: "DataVis "
  },
  datavisAlertAlert7: {
    description: "Swatch n.7 in the serie",
    variable: "alert-07",
    former: "no former color",
    hex: "#ef404c",
    rgba: {
      r: 0.9372549057006836,
      g: 0.250980406999588,
      b: 0.2980392277240753,
      a: 1
    },
    category: "DataVis "
  }
};
var meta$1 = meta;

/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var themes = {
  white: white,

  /*g10,
  g80,
  g90,
  g100,
  v9,*/
  wfp: wfp
};

Object.defineProperty(exports, 'bodyLong01', {
  enumerable: true,
  get: function () {
    return type.bodyLong01;
  }
});
Object.defineProperty(exports, 'bodyLong02', {
  enumerable: true,
  get: function () {
    return type.bodyLong02;
  }
});
Object.defineProperty(exports, 'bodyShort01', {
  enumerable: true,
  get: function () {
    return type.bodyShort01;
  }
});
Object.defineProperty(exports, 'bodyShort02', {
  enumerable: true,
  get: function () {
    return type.bodyShort02;
  }
});
Object.defineProperty(exports, 'caption01', {
  enumerable: true,
  get: function () {
    return type.caption01;
  }
});
Object.defineProperty(exports, 'caption02', {
  enumerable: true,
  get: function () {
    return type.caption02;
  }
});
Object.defineProperty(exports, 'code01', {
  enumerable: true,
  get: function () {
    return type.code01;
  }
});
Object.defineProperty(exports, 'code02', {
  enumerable: true,
  get: function () {
    return type.code02;
  }
});
Object.defineProperty(exports, 'display01', {
  enumerable: true,
  get: function () {
    return type.display01;
  }
});
Object.defineProperty(exports, 'display02', {
  enumerable: true,
  get: function () {
    return type.display02;
  }
});
Object.defineProperty(exports, 'display03', {
  enumerable: true,
  get: function () {
    return type.display03;
  }
});
Object.defineProperty(exports, 'display04', {
  enumerable: true,
  get: function () {
    return type.display04;
  }
});
Object.defineProperty(exports, 'expressiveHeading01', {
  enumerable: true,
  get: function () {
    return type.expressiveHeading01;
  }
});
Object.defineProperty(exports, 'expressiveHeading02', {
  enumerable: true,
  get: function () {
    return type.expressiveHeading02;
  }
});
Object.defineProperty(exports, 'expressiveHeading03', {
  enumerable: true,
  get: function () {
    return type.expressiveHeading03;
  }
});
Object.defineProperty(exports, 'expressiveHeading04', {
  enumerable: true,
  get: function () {
    return type.expressiveHeading04;
  }
});
Object.defineProperty(exports, 'expressiveHeading05', {
  enumerable: true,
  get: function () {
    return type.expressiveHeading05;
  }
});
Object.defineProperty(exports, 'expressiveHeading06', {
  enumerable: true,
  get: function () {
    return type.expressiveHeading06;
  }
});
Object.defineProperty(exports, 'expressiveParagraph01', {
  enumerable: true,
  get: function () {
    return type.expressiveParagraph01;
  }
});
Object.defineProperty(exports, 'heading01', {
  enumerable: true,
  get: function () {
    return type.heading01;
  }
});
Object.defineProperty(exports, 'heading02', {
  enumerable: true,
  get: function () {
    return type.heading02;
  }
});
Object.defineProperty(exports, 'helperText01', {
  enumerable: true,
  get: function () {
    return type.helperText01;
  }
});
Object.defineProperty(exports, 'helperText02', {
  enumerable: true,
  get: function () {
    return type.helperText02;
  }
});
Object.defineProperty(exports, 'label01', {
  enumerable: true,
  get: function () {
    return type.label01;
  }
});
Object.defineProperty(exports, 'label02', {
  enumerable: true,
  get: function () {
    return type.label02;
  }
});
Object.defineProperty(exports, 'productiveHeading01', {
  enumerable: true,
  get: function () {
    return type.productiveHeading01;
  }
});
Object.defineProperty(exports, 'productiveHeading02', {
  enumerable: true,
  get: function () {
    return type.productiveHeading02;
  }
});
Object.defineProperty(exports, 'productiveHeading03', {
  enumerable: true,
  get: function () {
    return type.productiveHeading03;
  }
});
Object.defineProperty(exports, 'productiveHeading04', {
  enumerable: true,
  get: function () {
    return type.productiveHeading04;
  }
});
Object.defineProperty(exports, 'productiveHeading05', {
  enumerable: true,
  get: function () {
    return type.productiveHeading05;
  }
});
Object.defineProperty(exports, 'productiveHeading06', {
  enumerable: true,
  get: function () {
    return type.productiveHeading06;
  }
});
Object.defineProperty(exports, 'productiveHeading07', {
  enumerable: true,
  get: function () {
    return type.productiveHeading07;
  }
});
Object.defineProperty(exports, 'quotation01', {
  enumerable: true,
  get: function () {
    return type.quotation01;
  }
});
Object.defineProperty(exports, 'quotation02', {
  enumerable: true,
  get: function () {
    return type.quotation02;
  }
});
Object.defineProperty(exports, 'container01', {
  enumerable: true,
  get: function () {
    return layout.container01;
  }
});
Object.defineProperty(exports, 'container02', {
  enumerable: true,
  get: function () {
    return layout.container02;
  }
});
Object.defineProperty(exports, 'container03', {
  enumerable: true,
  get: function () {
    return layout.container03;
  }
});
Object.defineProperty(exports, 'container04', {
  enumerable: true,
  get: function () {
    return layout.container04;
  }
});
Object.defineProperty(exports, 'container05', {
  enumerable: true,
  get: function () {
    return layout.container05;
  }
});
Object.defineProperty(exports, 'fluidSpacing01', {
  enumerable: true,
  get: function () {
    return layout.fluidSpacing01;
  }
});
Object.defineProperty(exports, 'fluidSpacing02', {
  enumerable: true,
  get: function () {
    return layout.fluidSpacing02;
  }
});
Object.defineProperty(exports, 'fluidSpacing03', {
  enumerable: true,
  get: function () {
    return layout.fluidSpacing03;
  }
});
Object.defineProperty(exports, 'fluidSpacing04', {
  enumerable: true,
  get: function () {
    return layout.fluidSpacing04;
  }
});
Object.defineProperty(exports, 'iconSize01', {
  enumerable: true,
  get: function () {
    return layout.iconSize01;
  }
});
Object.defineProperty(exports, 'iconSize02', {
  enumerable: true,
  get: function () {
    return layout.iconSize02;
  }
});
Object.defineProperty(exports, 'layout01', {
  enumerable: true,
  get: function () {
    return layout.layout01;
  }
});
Object.defineProperty(exports, 'layout02', {
  enumerable: true,
  get: function () {
    return layout.layout02;
  }
});
Object.defineProperty(exports, 'layout03', {
  enumerable: true,
  get: function () {
    return layout.layout03;
  }
});
Object.defineProperty(exports, 'layout04', {
  enumerable: true,
  get: function () {
    return layout.layout04;
  }
});
Object.defineProperty(exports, 'layout05', {
  enumerable: true,
  get: function () {
    return layout.layout05;
  }
});
Object.defineProperty(exports, 'layout06', {
  enumerable: true,
  get: function () {
    return layout.layout06;
  }
});
Object.defineProperty(exports, 'layout07', {
  enumerable: true,
  get: function () {
    return layout.layout07;
  }
});
Object.defineProperty(exports, 'size2XLarge', {
  enumerable: true,
  get: function () {
    return layout.size2XLarge;
  }
});
Object.defineProperty(exports, 'sizeLarge', {
  enumerable: true,
  get: function () {
    return layout.sizeLarge;
  }
});
Object.defineProperty(exports, 'sizeMedium', {
  enumerable: true,
  get: function () {
    return layout.sizeMedium;
  }
});
Object.defineProperty(exports, 'sizeSmall', {
  enumerable: true,
  get: function () {
    return layout.sizeSmall;
  }
});
Object.defineProperty(exports, 'sizeXLarge', {
  enumerable: true,
  get: function () {
    return layout.sizeXLarge;
  }
});
Object.defineProperty(exports, 'sizeXSmall', {
  enumerable: true,
  get: function () {
    return layout.sizeXSmall;
  }
});
Object.defineProperty(exports, 'spacing01', {
  enumerable: true,
  get: function () {
    return layout.spacing01;
  }
});
Object.defineProperty(exports, 'spacing02', {
  enumerable: true,
  get: function () {
    return layout.spacing02;
  }
});
Object.defineProperty(exports, 'spacing03', {
  enumerable: true,
  get: function () {
    return layout.spacing03;
  }
});
Object.defineProperty(exports, 'spacing04', {
  enumerable: true,
  get: function () {
    return layout.spacing04;
  }
});
Object.defineProperty(exports, 'spacing05', {
  enumerable: true,
  get: function () {
    return layout.spacing05;
  }
});
Object.defineProperty(exports, 'spacing06', {
  enumerable: true,
  get: function () {
    return layout.spacing06;
  }
});
Object.defineProperty(exports, 'spacing07', {
  enumerable: true,
  get: function () {
    return layout.spacing07;
  }
});
Object.defineProperty(exports, 'spacing08', {
  enumerable: true,
  get: function () {
    return layout.spacing08;
  }
});
Object.defineProperty(exports, 'spacing09', {
  enumerable: true,
  get: function () {
    return layout.spacing09;
  }
});
Object.defineProperty(exports, 'spacing10', {
  enumerable: true,
  get: function () {
    return layout.spacing10;
  }
});
Object.defineProperty(exports, 'spacing11', {
  enumerable: true,
  get: function () {
    return layout.spacing11;
  }
});
Object.defineProperty(exports, 'spacing12', {
  enumerable: true,
  get: function () {
    return layout.spacing12;
  }
});
Object.defineProperty(exports, 'spacing13', {
  enumerable: true,
  get: function () {
    return layout.spacing13;
  }
});
exports.active01 = active01$1;
exports.activeDanger = activeDanger$1;
exports.activeLightUI = activeLightUI$1;
exports.activePrimary = activePrimary$1;
exports.activeSecondary = activeSecondary$1;
exports.activeTertiary = activeTertiary$1;
exports.activeUI = activeUI$1;
exports.background = background$1;
exports.backgroundActive = backgroundActive$1;
exports.backgroundBrand = backgroundBrand$1;
exports.backgroundHover = backgroundHover$1;
exports.backgroundInverse = backgroundInverse$1;
exports.backgroundInverseHover = backgroundInverseHover$1;
exports.backgroundSelected = backgroundSelected$1;
exports.backgroundSelectedHover = backgroundSelectedHover$1;
exports.borderDisabled = borderDisabled$1;
exports.borderInteractive = borderInteractive$1;
exports.borderInverse = borderInverse$1;
exports.borderStrong = borderStrong$1;
exports.borderSubtle = borderSubtle$1;
exports.borderSubtleSelected = borderSubtleSelected$1;
exports.brand01 = brand01$1;
exports.brand02 = brand02$1;
exports.brand03 = brand03$1;
exports.buttonDangerActive = buttonDangerActive$1;
exports.buttonDangerHover = buttonDangerHover$1;
exports.buttonDangerPrimary = buttonDangerPrimary$1;
exports.buttonDangerSecondary = buttonDangerSecondary$1;
exports.buttonDisabled = buttonDisabled$1;
exports.buttonPrimary = buttonPrimary$1;
exports.buttonPrimaryActive = buttonPrimaryActive$1;
exports.buttonPrimaryHover = buttonPrimaryHover$1;
exports.buttonSecondary = buttonSecondary$1;
exports.buttonSecondaryActive = buttonSecondaryActive$1;
exports.buttonSecondaryHover = buttonSecondaryHover$1;
exports.buttonSeparator = buttonSeparator$1;
exports.buttonTertiary = buttonTertiary$1;
exports.buttonTertiaryActive = buttonTertiaryActive$1;
exports.buttonTertiaryHover = buttonTertiaryHover$1;
exports.danger = danger$1;
exports.danger01 = danger01$1;
exports.danger02 = danger02$1;
exports.decorative01 = decorative01$1;
exports.disabled01 = disabled01$1;
exports.disabled02 = disabled02$1;
exports.disabled03 = disabled03$1;
exports.field = field$1;
exports.field01 = field01$1;
exports.field02 = field02$1;
exports.fieldDisabled = fieldDisabled$1;
exports.fieldHover = fieldHover$1;
exports.focus = focus$1;
exports.focusInset = focusInset$1;
exports.focusInverse = focusInverse$1;
exports.formatTokenName = formatTokenName;
exports.highlight = highlight$1;
exports.hoverDanger = hoverDanger$1;
exports.hoverField = hoverField$1;
exports.hoverLightUI = hoverLightUI$1;
exports.hoverPrimary = hoverPrimary$1;
exports.hoverPrimaryText = hoverPrimaryText$1;
exports.hoverRow = hoverRow$1;
exports.hoverSecondary = hoverSecondary$1;
exports.hoverSelectedUI = hoverSelectedUI$1;
exports.hoverTertiary = hoverTertiary$1;
exports.hoverUI = hoverUI$1;
exports.icon01 = icon01$1;
exports.icon02 = icon02$1;
exports.icon03 = icon03$1;
exports.iconDisabled = iconDisabled$1;
exports.iconInverse = iconInverse$1;
exports.iconOnColor = iconOnColor$1;
exports.iconOnColorDisabled = iconOnColorDisabled$1;
exports.iconPrimary = iconPrimary$1;
exports.iconSecondary = iconSecondary$1;
exports.interactive = interactive$1;
exports.interactive01 = interactive01$1;
exports.interactive02 = interactive02$1;
exports.interactive03 = interactive03$1;
exports.interactive04 = interactive04$1;
exports.inverse01 = inverse01$1;
exports.inverse02 = inverse02$1;
exports.inverseFocusUi = inverseFocusUi$1;
exports.inverseHoverUI = inverseHoverUI$1;
exports.inverseLink = inverseLink$1;
exports.inverseSupport01 = inverseSupport01$1;
exports.inverseSupport02 = inverseSupport02$1;
exports.inverseSupport03 = inverseSupport03$1;
exports.inverseSupport04 = inverseSupport04$1;
exports.layer = layer$1;
exports.layerAccent = layerAccent$1;
exports.layerAccentActive = layerAccentActive$1;
exports.layerAccentHover = layerAccentHover$1;
exports.layerActive = layerActive$1;
exports.layerDisabled = layerDisabled$1;
exports.layerHover = layerHover$1;
exports.layerSelected = layerSelected$1;
exports.layerSelectedDisabled = layerSelectedDisabled$1;
exports.layerSelectedHover = layerSelectedHover$1;
exports.layerSelectedInverse = layerSelectedInverse$1;
exports.link01 = link01$1;
exports.link02 = link02$1;
exports.linkInverse = linkInverse$1;
exports.linkPrimary = linkPrimary$1;
exports.linkPrimaryHover = linkPrimaryHover$1;
exports.linkSecondary = linkSecondary$1;
exports.linkVisited = linkVisited$1;
exports.overlay = overlay$1;
exports.overlay01 = overlay01$1;
exports.selectedLightUI = selectedLightUI$1;
exports.selectedUI = selectedUI$1;
exports.skeleton01 = skeleton01$1;
exports.skeleton02 = skeleton02$1;
exports.skeletonBackground = skeletonBackground$1;
exports.skeletonElement = skeletonElement$1;
exports.support01 = support01$1;
exports.support02 = support02$1;
exports.support03 = support03$1;
exports.support04 = support04$1;
exports.supportError = supportError$1;
exports.supportErrorInverse = supportErrorInverse$1;
exports.supportInfo = supportInfo$1;
exports.supportInfoInverse = supportInfoInverse$1;
exports.supportSuccess = supportSuccess$1;
exports.supportSuccessInverse = supportSuccessInverse$1;
exports.supportWarning = supportWarning$1;
exports.supportWarningInverse = supportWarningInverse$1;
exports.text01 = text01$1;
exports.text02 = text02$1;
exports.text03 = text03$1;
exports.text04 = text04$1;
exports.text05 = text05$1;
exports.textDisabled = textDisabled$1;
exports.textError = textError$1;
exports.textHelper = textHelper$1;
exports.textInverse = textInverse$1;
exports.textOnColor = textOnColor$1;
exports.textOnColorDisabled = textOnColorDisabled$1;
exports.textPlaceholder = textPlaceholder$1;
exports.textPrimary = textPrimary$1;
exports.textSecondary = textSecondary$1;
exports.themes = themes;
exports.toggleOff = toggleOff$1;
exports.tokens = tokens;
exports.ui01 = ui01$1;
exports.ui02 = ui02$1;
exports.ui03 = ui03$1;
exports.ui04 = ui04$1;
exports.ui05 = ui05$1;
exports.uiBackground = uiBackground$1;
exports.unstable__meta = unstable__meta;
exports.visitedLink = visitedLink$1;
exports.wfp = wfp;
exports.wfpColorsMeta = meta$1;
