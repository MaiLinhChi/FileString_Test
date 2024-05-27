import httpRequest from '@/utils/httpRequest';

export const SignUp = async (user) => {
    const res = await httpRequest.post(`/auth/sign-up`, user);
    return res.data || res;
};

export const SignIn = async (user) => {
    const res = await httpRequest.post(`/auth/sign-in`, user);
    return res.data || res;
};
