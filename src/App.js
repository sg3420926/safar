
import './App.css';
import Study from './components/Study';
import FrontPage from './components/FrontPage';
import { Route, Switch } from 'react-router-dom';
import Work from './components/Work';
import News from './components/News'
import Random from './components/Random'
import Social from './components/Social';
import Blog from './components/Blog'
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route  exact path='/' component={FrontPage} />
        <Route exact path='/ram' component={Study} />
        <Route exact path='/mira' component={Work} />
        <Route exact path='/saurabh' component={News} />
        <Route exact path='/mira/shyam' component={Random} />
        <Route exact path='/kanha' component={Social} />
        <Route exact path='/shiv' component={Blog} />
      </Switch>
    </div>
  );
}

export default App;
