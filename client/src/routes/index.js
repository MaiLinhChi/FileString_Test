import { useNavigate } from 'react-router-dom';

import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';

import routes from '@/configs/routes';
import Default from '@/layouts/Default';
import { getLocalStorage } from '@/utils';
import { useEffect } from 'react';

export const PublicRoute = ({ children }) => {
    return children;
};

export const AuthRoute = ({ children }) => {
    const accessToken = getLocalStorage('accessToken');
    const navigate = useNavigate();

    useEffect(() => {
        if (accessToken) {
            return navigate(routes.home);
        }
    }, [accessToken, navigate]);
    return children;
};

export const ProtectedRoute = ({ children }) => {
    const accessToken = getLocalStorage('accessToken');
    const navigate = useNavigate();

    useEffect(() => {
        if (!accessToken) {
            return navigate(routes.signIn);
        }
    }, [accessToken, navigate]);
    return children;
};

export const listRoute = [
    { path: routes.home, page: Home, layout: Default, type: ProtectedRoute },
    { path: routes.signIn, page: SignIn, layout: Default, type: AuthRoute },
    { path: routes.signUp, page: SignUp, layout: Default, type: AuthRoute },
];
