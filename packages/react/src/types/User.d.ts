import * as React from 'react';

declare namespace User  {
  interface UserProps extends React.HTMLProps<User> {
    alt?: string
    ellipsis?: boolean
    description?: React.ReactNode
    extendedDescription?: React.ReactNode
    missingImage?: 'avatar' | 'letter'
    image?: string
    showName?: boolean
  }
}

declare class User extends React.Component<User.UserProps>{ }
export = User
