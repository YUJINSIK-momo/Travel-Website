import './App.css';
import { useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import DestinationsPage from './components/pages/DestinationsPage';
import PackagesPage from './components/pages/PackagesPage';
import GalleryPage from './components/pages/GalleryPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/destinations" component={DestinationsPage} />
          <Route path="/packages" component={PackagesPage} />
          <Route path="/gallery" component={GalleryPage} />
        </Switch>
      </Router>
    </LanguageProvider>
  );
}

export default App;
