import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'AssetArray',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44337/',
    redirectUri: baseUrl,
    clientId: 'AssetArray_App',
    responseType: 'code',
    scope: 'offline_access AssetArray',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44337',
      rootNamespace: 'AssetArray',
    },
  },
} as Environment;
