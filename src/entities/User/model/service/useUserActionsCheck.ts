import type { User } from 'entities/User';
import { useUser } from 'entities/User/api/swr/useUser';

export const useUserActionsCheck = (user: User) => {
    const { id } = user ?? {};
    const { data } = useUser();
    const { id: currentUserId } = data ?? {};
    const isCurrentUser = currentUserId === id;

    return {
        isCurrentUser,
    };
};
