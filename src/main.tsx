import App from '@app/index.tsx';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '@shared/styles/index.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
