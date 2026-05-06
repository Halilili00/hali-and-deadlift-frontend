const config = {
  schemaFile: 'http://localhost:5001/openapi/v1.json',
  apiFile: './src/store/hali-deadlift-api-setup.ts',
  apiImport: 'haliDeadliftApiSetup',
  outputFile: './src/store/api/hali-deadlift-api.ts',
  exportName: 'haliDeadliftApi',
  hooks: true,
  prettierConfigFile: './.prettierrc',
};

export default config;