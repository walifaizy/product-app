import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ProductApp from './containers/productsList/index';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyles from './theme/globalStyles.js';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditForm from './containers/editForm';

ReactDOM.render(
    <React.StrictMode>
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
    </React.StrictMode>,
    document.getElementById('root'),
);
