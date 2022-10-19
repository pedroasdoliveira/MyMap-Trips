import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-sa-east-1.hygraph.com/v2/cl9ejt0i408eq01t46vzr916b/master',
  documents: 'src/graphql/queries.ts',
  generates: {
    'src/graphql/generated/types': {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-resolvers',
        'named-operations-object'
      ]
    }
  }
}

export default config
