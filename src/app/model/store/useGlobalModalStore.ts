import { createModalsStore } from 'shared/config/project/createModalsStore';

export const useGlobalModalStore = createModalsStore(['Logout'], 'SharedModalStore');
