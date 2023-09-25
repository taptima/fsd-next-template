import FrontendApiClient from 'shared/lib/api/client/FrontendApiClient';
import BackendApiClient from 'shared/lib/api/client/BackendApiClient';

export const backendApiClient = new BackendApiClient();

export const frontendApiClient = new FrontendApiClient();
