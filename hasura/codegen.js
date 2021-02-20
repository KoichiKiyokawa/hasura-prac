module.exports = {
  schema: [
      {
          'http://localhost:8080/v1/graphql': {
              // headers: {
              //     Authorization: 'Bearer ' + process.env.AUTH_TOKEN,
              // },
          },
      },
  ],
  // documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
      './src/generated/graphql.ts': {
          plugins: [
              'typescript',
              'typescript-operations',
          ],
      },
      './graphql.schema.json': {
          plugins: ['introspection'],
      },
  },
};