import * as React from 'react';

declare namespace ModuleHeader  {
  interface ModuleHeaderProps extends React.HTMLProps<ModuleHeader> {
    children?: React.ReactNode
  }
}

declare class ModuleHeader extends React.Component<ModuleHeader.ModuleHeaderProps>{ }
export = ModuleHeader
