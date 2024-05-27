import routes from '@/configs/routes';
import { getLocalStorage } from '@/utils';
import { Link } from 'react-router-dom';

const Header = () => {
    const accessToken = getLocalStorage('accessToken');
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
    };
    return (
        <header className="bg-white">
            <div className="mx-auto">
                <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-16 lg:px-8 lg:py-6">
                    <div className="flex-shrink-0">
                        <Link to={routes.home} title="Home" className="flex">
                            <img
                                className="w-auto h-8 lg:h-10"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                                alt=""
                            />
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>

                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:space-x-10">
                        {accessToken ? (
                            <Link
                                to={routes.signIn}
                                title=""
                                onClick={handleLogout}
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {' '}
                                Logout{' '}
                            </Link>
                        ) : (
                            <>
                                <Link
                                    to={routes.signUp}
                                    title=""
                                    className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                >
                                    {' '}
                                    Sign up{' '}
                                </Link>

                                <Link
                                    to={routes.signIn}
                                    title=""
                                    className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                >
                                    {' '}
                                    Sign in{' '}
                                </Link>
                            </>
                        )}
                    </div>
                </nav>

                <nav className="flex flex-col space-y-2 lg:hidden">
                    {accessToken ? (
                        <Link
                            to={routes.signIn}
                            title=""
                            onClick={handleLogout}
                            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                            {' '}
                            Logout{' '}
                        </Link>
                    ) : (
                        <>
                            <Link
                                to={routes.signUp}
                                title=""
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {' '}
                                Sign up{' '}
                            </Link>

                            <Link
                                to={routes.signIn}
                                title=""
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {' '}
                                Sign in{' '}
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
