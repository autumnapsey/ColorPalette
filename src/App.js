import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import styles from './style.css';
import store from './store';
import Header from './components/Header';
import List from './components/List';
import Cart from './components/Cart';

const browserHistory = createBrowserHistory();

const App = () => (
    <main>
        <Provider store={store}>
            <Router history={browserHistory}>
            <div className={styles.app}>
                <Header/>
                <div className={styles.body}>
                    <Route exact path="/" component={List} />
                    <Route exact path="/cart" component={Cart} />
                </div>
            </div>
            </Router>
        </Provider>
    </main>
);

export default App;