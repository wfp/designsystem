declare type ScreenSize = 'full' | 'lg' | 'md' | 'sm';

declare type StatusKind = 'info' | 'error' | 'warning' | 'success';

declare type ButtonKind =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'danger'
  | 'ghost'
  | 'inverse--primary'
  | 'inverse'
  | 'danger--primary'
  | 'tertiary'
  | 'navigation';

declare type InputModes =
  | 'none'
  | 'text'
  | 'tel'
  | 'url'
  | 'email'
  | 'numeric'
  | 'decimal'
  | 'search'
  | undefined;

declare interface IIcon {
  name?: string;
  tags?: string;
  styles?: string;
  width?: string;
  height?: string;
  viewBox: string;
  svgData: React.ReactSVG | React.ReactSVGElement;
}

declare type CardKind = 'simple-card' | 'overlay';

declare type HeroKind =
  | 'landscape'
  | 'landscape-light'
  | 'emergencies'
  | 'split'
  | 'hero'
  | 'splash'
  | 'splash-image'
  | 'splash-compact'
  | 'related';

declare type NotificationType = 'toast' | 'inline';
declare type NotificationKind =
  | 'error'
  | 'success'
  | 'warning'
  | 'warning-alt'
  | 'info';

declare type TagType = 'info' | 'error' | 'success' | 'warning' | 'custom';

declare type TextKind =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'title'
  | 'subtitle'
  | 'p'
  | 'caption'
  | 'code';

declare type Spacing =
  | '3xs'
  | '2xs'
  | 'xs'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';

declare type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

declare type UnitType =
  | 'none'
  | 'usd'
  | 'partners'
  | 'beneficiaries'
  | 'households'
  | 'months'
  | 'mt'
  | 'metricTons'
  | 'kg'
  | 'num'
  | 'yearMonth'
  | 'level'
  | 'people'
  | 'countries'
  | 'percentage';

export {
  ScreenSize,
  StatusKind,
  IIcon,
  ButtonKind,
  InputModes,
  CardKind,
  HeroKind,
  NotificationType,
  NotificationKind,
  TagType,
  TextKind,
  Spacing,
  Placement,
  UnitType,
};
