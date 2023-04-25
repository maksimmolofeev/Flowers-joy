import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { StoreProvider } from "app/providers/StoreProvider";

const domNode = document.getElementById('root');
const root = createRoot(domNode);


root.render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>
)