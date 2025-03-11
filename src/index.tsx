import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/index.css';
import App from './App';
import StoreProvider from './features/crypto/model/StoreProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
);