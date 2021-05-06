import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import ProductApp from './containers/productsList/index';
import store from './store';
import GlobalStyles, { themeLight, themeNight } from './theme/globalStyles.js';
import EditForm from './containers/editForm';
import { Switcher } from './components/common';

const Header = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    box-shadow: ${(props) => props.theme.boxShadow.componentShadow};
    background: ${(props) => props.theme.colors.secondary_background};
    padding: 20px;
    z-index: 10;
`;

const App = (props) => {
    const [theme, setTheme] = useState('dark');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const themeMode = theme === 'light' ? themeLight : themeNight;
    const themeText = theme === 'light' ? 'Dark Mode' : 'Light Mode';

    return (
        <ThemeProvider theme={themeMode}>
            <React.StrictMode>
                <Header>
                    {' '}
                    <Switcher themeToggler={themeToggler} />
                </Header>
                <Provider store={store}>
                    <GlobalStyles />{' '}
                    <Router>
                        <Switch>
                            <Route exact path="/" component={ProductApp} />
                            <Route exact path="/edit/:id" component={EditForm} />
                        </Switch>
                    </Router>
                </Provider>

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
                <ToastContainer />
            </React.StrictMode>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
