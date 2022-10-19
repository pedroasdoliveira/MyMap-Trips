import LinkWrapper from 'components/LinkWrapper'
import * as Style from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplates = ({ heading, body }: PageTemplateProps) => {
  return (
    <Style.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <Style.Heading>{heading}</Style.Heading>

      <Style.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Style.Body>
    </Style.Content>
  )
}

export default PageTemplates
