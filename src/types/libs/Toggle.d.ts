import * as React from 'react';

declare namespace Toggle  {
  interface ToggleProps extends React.HTMLProps<Toggle> {
    defaultToggled?: boolean
    toggled?: boolean
    labelA: string
    labelB: string
    onToggle?: () => void
  }
}

declare class Toggle extends React.Component<Toggle.ToggleProps>{ }
export = Toggle
