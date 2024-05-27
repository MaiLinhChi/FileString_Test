import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { listRoute } from './routes';
import NotFound from './pages/NotFound';
import { useContext, useEffect } from 'react';
import { GlobalStateContext } from './contexts/GlobalState';
import { getLocalStorage } from './utils';

function App() {
    const { states, setStates } = useContext(GlobalStateContext);
    useEffect(() => {
        const user = JSON.parse(getLocalStorage('user'));
        setStates({ ...states, user });
    }, []);
    console.log(states);
    return (
        <BrowserRouter>
            <Routes>
                {listRoute.map((item, index) => {
                    const Page = item.page;
                    const Type = item.type;
                    const Layout = item.layout;

                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <Layout>
                                    <Type>
                                        <Page />
                                    </Type>
                                </Layout>
                            }
                        />
                    );
                })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
