import * as React from 'react';
import { UnitType } from './utils';

declare namespace Unit  {
  interface UnitProps extends React.HTMLProps<Unit> {
    children?: string | number
    from?: string | number
    hideEmpty?: boolean
    minimumFractionDigits?: number
    maximumSignificantDigits?: number
    maximumFractionDigits?: number
    locale?: string
    svg?: boolean
    type: UnitType
  }
}

declare class Unit extends React.Component<Unit.UnitProps>{ }
export = Unit
