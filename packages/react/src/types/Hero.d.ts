import * as React from 'react';
import { HeroKind } from './utils';

declare namespace Hero  {
  interface HeroProps extends Omit<React.HTMLProps<Hero>, 'title'> {
    href?: string
    image?: string
    isExternal?: boolean
    isLink?: boolean
    subTitle?: React.ReactNode
    title?: React.ReactNode
    metadata?: string
    more?: React.ReactNode
    kind?: HeroKind
    url?: string
  }
}

declare class Hero extends React.Component<Hero.HeroProps>{ }
export = Hero
