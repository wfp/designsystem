declare type ScreenSize = 'full' | 'lg' | 'md' | 'sm'

declare type StatusKind = 'info' | 'error' | 'warning' | 'success'

declare type ButtonKind = 'primary'
  | 'secondary'
  | 'accent'
  | 'danger'
  | 'ghost'
  | 'inverse--primary'
  | 'inverse'
  | 'danger--primary'
  | 'tertiary'
  | 'navigation'

declare type InputModes = 'none'
 | 'text'
 | 'tel'
 | 'url'
 | 'email'
 | 'numeric'
 | 'decimal'
 | 'search'
 | undefined

declare interface IIcon  {
  width?: string
  height?: string
  viewBox: string
  svgData: React.ReactSVG | React.ReactSVGElement
}

declare type CardKind = '' | ''

export {
  ScreenSize,
  StatusKind,
  IIcon,
  ButtonKind,
  InputModes,
  CardKind,
}
