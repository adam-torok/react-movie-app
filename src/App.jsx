import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/nav/Navbar';
import WelcomeDialog from './components/common/Dialog';
import Footer from './components/nav/Footer';
import Landing from './pages/Landing';
import Movies from './pages/Movies';
import About from './pages/About';
import './app.css';
import 'flowbite';

const App = () => {
    return (
        <>
            <Router>
            <Navbar />
            <WelcomeDialog />
                <Routes>
                    <Route exact path='/' element={<Landing />}></Route>
                    <Route exact path='/movies' element={<Movies />}></Route>
                    <Route exact path='/about' element={<About />}></Route>
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;