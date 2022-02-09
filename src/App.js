import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function App() {
    return (
        <Router>
            <div className="flex flex-col justify-between h-screen bg-gray-100">
                <Navbar />
                <main>Content</main>
            </div>
        </Router>
    );
}

export default App;
