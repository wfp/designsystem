/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { adjustLightness } from './tools';

import {
  // Tools
  rgba,
} from '@carbon/colors';

import * as wfpColors from './wfpColors';
export * from './wfpColors';

// New color tokens
// TO-DO: remove fallback color when v11 is released and assign carbon colors to new tokens
/*export const background = uiBackground;
export const layer = ui01;
export const layerAccent = ui03;
export const layerAccentActive = gray40;
export const layerAccentHover = adjustLightness(layerAccent, -6);
export const field = field01;
export const backgroundInverse = inverse02;
export const backgroundBrand = interactive01;
export const interactive = interactive04;

export const borderSubtle = ui03;
export const borderStrong = ui04;
export const borderInverse = ui05;
export const borderInteractive = interactive04;

export const textPrimary = text01;
export const textSecondary = text02;
export const textPlaceholder = text03;
export const textHelper = text05;
export const textOnColor = text04;
export const textInverse = inverse01;

export const linkPrimary = link01;
export const linkSecondary = link02;
export const linkVisited = visitedLink;
export const linkInverse = inverseLink;

export const iconPrimary = icon01;
export const iconSecondary = icon02;
export const iconOnColor = icon03;
export const iconInverse = inverse01;

export const supportError = support01;
export const supportSuccess = support02;
export const supportWarning = support03;
export const supportInfo = support04;
export const supportErrorInverse = inverseSupport01;
export const supportSuccessInverse = inverseSupport02;
export const supportWarningInverse = inverseSupport03;
export const supportInfoInverse = inverseSupport04;

export const overlay = overlay01;
export const toggleOff = ui04;

export const buttonPrimary = interactive01;
export const buttonSecondary = interactive02;
export const buttonTertiary = interactive03;
export const buttonDangerPrimary = danger01;
export const buttonDangerSecondary = danger02;

export const backgroundActive = activeUI;
export const layerActive = activeUI;

export const buttonDangerActive = activeDanger;
export const buttonPrimaryActive = activePrimary;
export const buttonSecondaryActive = activeSecondary;
export const buttonTertiaryActive = activeTertiary;

export const focusInset = inverse01;
export const focusInverse = inverseFocusUi;

export const backgroundHover = hoverUI;
export const layerHover = hoverUI;
export const fieldHover = hoverUI;
export const backgroundInverseHover = inverseHoverUI;
export const linkPrimaryHover = hoverPrimaryText;
export const buttonDangerHover = hoverDanger;
export const buttonPrimaryHover = hoverPrimary;
export const buttonSecondaryHover = hoverSecondary;
export const buttonTertiaryHover = hoverTertiary;

export const backgroundSelected = selectedUI;
export const backgroundSelectedHover = hoverSelectedUI;
export const layerSelected = selectedUI;
export const layerSelectedHover = hoverSelectedUI;
export const layerSelectedInverse = ui05;
export const borderSubtleSelected = activeUI;

export const layerDisabled = disabled01;
export const fieldDisabled = disabled01;
export const borderDisabled = disabled01;

export const textDisabled = disabled02;
export const buttonDisabled = disabled02;
export const iconDisabled = disabled02;

export const textOnColorDisabled = disabled03;
export const iconOnColorDisabled = disabled03;
export const layerSelectedDisabled = disabled03;

export const skeletonBackground = skeleton01;
export const skeletonElement = skeleton02;*/

//////////////////////////////////////
// Old tokens needed to pass tests  //
//////////////////////////////////////

// TODO: set colors
const gray50 = '#cccccc';
const gray60 = '#cccccc';
const gray70 = '#cccccc';

export const interactive01 = wfpColors.backgroundBrand;
export const interactive02 = wfpColors.buttonSecondary;
export const interactive03 = wfpColors.buttonTertiary;
export const interactive04 = wfpColors.interactive;

export const uiBackground = wfpColors.background;

export const ui01 = wfpColors.layer;
export const ui02 = gray70;
export const ui03 = wfpColors.layerAccent;
export const ui04 = wfpColors.borderStrong;
export const ui05 = wfpColors.borderInverse;

export const text01 = wfpColors.textPrimary;
export const text02 = wfpColors.textSecondary;
export const text03 = wfpColors.textPlaceholder;
export const text04 = wfpColors.textOnColor;
export const text05 = wfpColors.textHelper;

export const icon01 = wfpColors.iconPrimary;
export const icon02 = wfpColors.iconSecondary;
export const icon03 = wfpColors.iconOnColor;

export const link01 = wfpColors.linkPrimary;
export const link02 = wfpColors.linkSecondary;

export const inverseLink = wfpColors.linkInverse;

export const field01 = wfpColors.field;
export const field02 = gray60;

export const inverse01 = wfpColors.textInverse;
export const inverse02 = wfpColors.backgroundInverse;

export const support01 = wfpColors.supportError;
export const support02 = wfpColors.supportSuccess;
export const support03 = wfpColors.supportWarning;
export const support04 = wfpColors.supportInfo;

export const inverseSupport01 = wfpColors.supportErrorInverse;
export const inverseSupport02 = wfpColors.supportSuccessInverse;
export const inverseSupport03 = wfpColors.supportWarningInverse;
export const inverseSupport04 = wfpColors.supportInfoInverse;

export const overlay01 = wfpColors.overlay;

export const danger01 = wfpColors.buttonDangerPrimary;
export const danger02 = wfpColors.buttonDangerSecondary;

// Interaction states
export const inverseFocusUi = wfpColors.focusInverse;

export const hoverPrimary = wfpColors.buttonPrimaryHover;
export const activePrimary = wfpColors.buttonPrimaryActive;

export const hoverPrimaryText = wfpColors.linkPrimaryHover;

export const hoverSecondary = wfpColors.buttonSecondaryHover;
export const activeSecondary = wfpColors.buttonSecondaryActive;

export const hoverTertiary = wfpColors.buttonTertiaryHover;
export const activeTertiary = wfpColors.buttonTertiaryActive;

export const hoverUI = wfpColors.backgroundHover;
export const hoverLightUI = '#5E5E5E';
export const activeUI = wfpColors.backgroundActive;
export const activeLightUI = gray50;
export const selectedUI = wfpColors.backgroundSelected;
export const selectedLightUI = gray50;
export const inverseHoverUI = wfpColors.backgroundInverseHover;

export const hoverSelectedUI = wfpColors.layerSelectedHover;

export const hoverDanger = wfpColors.buttonDangerHover;
export const activeDanger = wfpColors.buttonDangerActive;

export const hoverRow = wfpColors.layerHover;

export const visitedLink = wfpColors.linkVisited;

export const disabled01 = wfpColors.layerDisabled;
export const disabled02 = wfpColors.textDisabled;
export const disabled03 = wfpColors.textOnColorDisabled;

export const decorative01 = gray60;

export const skeleton01 = wfpColors.skeletonBackground;
export const skeleton02 = wfpColors.skeletonElement;

// Type
export {
  caption01,
  caption02,
  label01,
  label02,
  helperText01,
  helperText02,
  bodyShort01,
  bodyLong01,
  bodyShort02,
  bodyLong02,
  code01,
  code02,
  heading01,
  productiveHeading01,
  heading02,
  productiveHeading02,
  productiveHeading03,
  productiveHeading04,
  productiveHeading05,
  productiveHeading06,
  productiveHeading07,
  expressiveHeading01,
  expressiveHeading02,
  expressiveHeading03,
  expressiveHeading04,
  expressiveHeading05,
  expressiveHeading06,
  expressiveParagraph01,
  quotation01,
  quotation02,
  display01,
  display02,
  display03,
  display04,
} from '@wfp/type';

// Layout
// Spacing
export {
  spacing01,
  spacing02,
  spacing03,
  spacing04,
  spacing05,
  spacing06,
  spacing07,
  spacing08,
  spacing09,
  spacing10,
  spacing11,
  spacing12,
  spacing13,
  // Fluid spacing
  fluidSpacing01,
  fluidSpacing02,
  fluidSpacing03,
  fluidSpacing04,
  // Layout
  // Deprecated -- Remove in v11
  layout01,
  layout02,
  layout03,
  layout04,
  layout05,
  layout06,
  layout07,
  // Containers
  container01,
  container02,
  container03,
  container04,
  container05,
  sizeXSmall,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  sizeXLarge,
  size2XLarge,
  // Icon sizes
  iconSize01,
  iconSize02,
} from '@wfp/layout';

// Deprecated ☠️
export const brand01 = interactive01;
export const brand02 = interactive02;
export const brand03 = interactive03;
export const active01 = activeUI;
export const hoverField = hoverUI;
export const danger = danger01;
