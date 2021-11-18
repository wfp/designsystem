import * as React from 'react';

declare namespace InlineLoading  {
  interface InlineLoadingProps extends React.HTMLProps<InlineLoading> {
    success?: boolean
    description?: string
    successDelay?: number
    onSuccess?: () => void
  }
}

declare class InlineLoading extends React.Component<InlineLoading.InlineLoadingProps>{ }
export = InlineLoading