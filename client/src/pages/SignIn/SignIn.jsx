import { SignIn } from '@/apis/auth';
import routes from '@/configs/routes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const handleSignIn = async () => {
        try {
            const res = await SignIn(user);
            if (res) {
                localStorage.setItem('accessToken', res.accessToken);
                localStorage.setItem('user', JSON.stringify(res.info));
                return navigate(routes.home);
            }
        } catch (error) {
            alert(error?.response?.data?.message ? error?.response?.data?.message : error?.response?.data);
        }
    };
    return (
        <div
            className="h-full flex w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
            style={{
                backgroundImage:
                    'url(https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80)',
            }}
        >
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <img
                            className="w-auto h-8 lg:h-10"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                            alt=""
                        />
                        <span className="text-gray-300">Enter sign in details</span>
                    </div>
                    <div>
                        <div className="mb-4 text-lg">
                            <input
                                className="w-full rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="email"
                                name="name"
                                placeholder="Email"
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="mb-4 text-lg">
                            <input
                                className="w-full rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="Password"
                                name="name"
                                placeholder="Password"
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mt-8 flex justify-center text-lg text-black">
                            <button
                                onClick={handleSignIn}
                                className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
