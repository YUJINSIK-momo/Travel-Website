import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Home from './components/pages/Home';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </LanguageProvider>
  );
}

export default App;
