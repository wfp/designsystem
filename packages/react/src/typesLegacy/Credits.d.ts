import * as React from 'react';

declare namespace Credits  {
  interface CreditsProps extends React.HTMLProps<Credits> {
    info?: string
    children?: React.ReactNode
  }
}

declare class Credits extends React.Component<Credits.CreditsProps>{ }
export = Credits
