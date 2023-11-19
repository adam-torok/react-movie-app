import ReactDOM from "react-dom/client";
import store from "./redux/store.js"
import { Provider } from 'react-redux'
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)