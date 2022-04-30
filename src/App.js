import './App.css'
import {Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Course from './components/Course'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={Course} />
    <Route component={NotFound} />
  </Switch>
)

export default App
