// Libs
import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"

// Components
import App from "./App"

// Static assets
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
)
