import * as React from 'react';

declare namespace ModuleFooter  {
  interface ModuleFooterProps extends React.HTMLProps<ModuleFooter> {
    children?: React.ReactNode
  }
}

declare class ModuleFooter extends React.Component<ModuleFooter.ModuleFooterProps>{ }
export = ModuleFooter
