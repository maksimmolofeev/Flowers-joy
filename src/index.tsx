import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "@mui/material";
import { theme } from "app/providers/ThemeProvider";

const domNode = document.getElementById('root');
const root = createRoot(domNode);


root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>
)