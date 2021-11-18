import * as React from 'react';

declare namespace Loading  {
  interface LoadingProps extends React.HTMLProps<Loading> {
    active?: boolean
    withOverlay?: boolean
    small?: boolean
  }
}

declare class Loading extends React.Component<Loading.LoadingProps>{ }
export = Loading