// Libs
import { Routes, Route, Navigate } from "react-router-dom"

// Components
import Crew from "./components/Crew.js"
import CrewMember from './components/CrewMember.js'

// Static assets
import "./App.css"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate to="crew" />} />
                <Route path="/crew/" element={<Crew />} />
                <Route path="/crew/:id" element={<CrewMember />} />
            </Routes>
        </div>
    )
}

export default App
