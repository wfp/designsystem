import * as React from 'react';

declare namespace ModuleBody  {
  interface ModuleBodyProps extends React.HTMLProps<ModuleBody> {
    children?: React.ReactNode
    centered?: boolean
    noPadding?: boolean
  }
}

declare class ModuleBody extends React.Component<ModuleBody.ModuleBodyProps>{ }
export = ModuleBody