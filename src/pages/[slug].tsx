import client from 'graphql/client'
import {
  GetPageBySlugQuery,
  GetPagesQuery
} from 'graphql/generated/types/graphql'
import { GET_PAGES, GET_PAGE_BY_QUERY } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageTemplates, { PageTemplateProps } from 'templates/Pages'

const Page = ({ heading, body }: PageTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return <PageTemplates heading={heading} body={body} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_QUERY, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

export default Page
