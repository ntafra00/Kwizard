import React, { PropsWithChildren } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { NotAuthorized } from './NotAuthorized';

export function AuthorizedRoute({ children }: PropsWithChildren) {
    const { currentUser } = useAuth();

    if (currentUser) {
        return children;
    }

    return <NotAuthorized />;
}