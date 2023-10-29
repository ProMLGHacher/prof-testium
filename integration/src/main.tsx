import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store/store.ts'
import App from './app/App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
