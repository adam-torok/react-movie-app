import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/nav/Header';
import WelcomeDialog from './components/common/Dialog';
import Landing from './components/pages/Landing';
import Movies from './components/pages/Movies';
import './app.css';
import Footer from './components/nav/Footer';
import 'flowbite';

const App = () => {
    return (
        <>
            <Router>
            <Header />
            <WelcomeDialog />
                <Routes>
                    <Route exact path='/' element={<Landing />}></Route>
                    <Route exact path='/movies' element={<Movies />}></Route>
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;