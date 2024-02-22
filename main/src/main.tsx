'use strict';
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Router from './app/router'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Router />
    </Provider>
)