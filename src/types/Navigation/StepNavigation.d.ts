import * as React from 'react';

declare namespace StepNavigation {
  interface StepNavigationProps extends React.HTMLProps<StepNavigation> {
    children?: React.ReactNode;
    small?: boolean;
    vertical?: boolean;
    role: string;
    onSelectionChange?: React.FormEventHandler<StepNavigation>;
    selectedPage?: number;
  }
}

declare class StepNavigation extends React.Component<StepNavigation.StepNavigationProps> {}
export = StepNavigation;
