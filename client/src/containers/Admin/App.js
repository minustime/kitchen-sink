import * as React from 'react';
import { Provider } from 'mobx-react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import UploadStore from '../../stores/UploadStore';

const Login = React.lazy(() => import('./Login'));
const Uploads = React.lazy(() => import('./Uploads'));

const App = () => {
  return (
    <Provider uploadStore={new UploadStore()}>
      <Router>
        <React.Suspense fallback="">
          <Route path="/admin/login" component={Login} />
          <Route path="/admin/uploads" component={Uploads} />
        </React.Suspense>
      </Router>
    </Provider>
  );
};

export default App;
