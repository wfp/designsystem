import * as React from 'react'

declare namespace AuthLayout {
  interface AuthLayoutProps extends React.HTMLProps<AuthLayout> {
    children: React.ReactNode
    image?: React.ReactNode
    backgroundContent?: React.ReactNode
  }
}

declare class AuthLayout extends React.Component<AuthLayout.AuthLayoutProps> { }
export = AuthLayout