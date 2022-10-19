import Link from 'next/link'
import { ReactNode } from 'react'
import * as Style from './styles'

type LinkWrapperProps = {
  href: string
  children: ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  return (
    <Style.Wrapper>
      <Link href={href}>{children}</Link>
    </Style.Wrapper>
  )
}

export default LinkWrapper
