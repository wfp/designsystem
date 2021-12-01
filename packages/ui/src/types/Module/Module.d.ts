import * as React from 'react';

declare namespace Module  {
  interface ModuleProps extends React.HTMLProps<Module> {
    children?: React.ReactNode
    noMargin?: boolean
    fullHeight?: boolean
    light?: boolean
    dark?: boolean
    withHover?: boolean
  }
}

declare class Module extends React.Component<Module.ModuleProps>{ }
export = Module