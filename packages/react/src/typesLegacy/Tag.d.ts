import * as React from 'react'
import { TagType } from './utils'

declare namespace Tag {
  interface TagProps extends Omit<React.HTMLProps<Tag>, 'wrap'> {
    children?: React.ReactNode
    type: TagType
    wrap?: boolean
  }
}

declare class Tag extends React.Component<Tag.TagProps> { }
export = Tag
