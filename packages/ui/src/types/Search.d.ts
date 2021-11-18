import * as React from 'react';
import { InputProps } from './Input'

declare namespace Search  {
  interface SearchProps extends InputProps {
    id?: string
  }
}

declare class Search extends React.Component<Search.SearchProps>{ }
export = Search