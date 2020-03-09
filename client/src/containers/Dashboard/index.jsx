import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const Login = React.lazy(() => import('./screens/Login'));
const Manage = React.lazy(() => import('./screens/Manage'));

const App = () => {
  return (
    <Router>
      <React.Suspense fallback="">
        <Route path="/login" component={Login} />
        <Route path="/manage" component={Manage} />
      </React.Suspense>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
