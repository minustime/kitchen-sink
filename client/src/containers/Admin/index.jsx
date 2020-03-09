import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Route, BrowserRouter as Router } from 'react-router-dom';
// import '../../styles/care-portal/care-portal.scss';

// const PageWrapper = React.lazy(() => import('./components/page-wrapper'));

// const App = () => {
//   return (
//     <Router>
//       <React.Suspense fallback="">
//         <Route path="/manage/pay" component={PageWrapper} />
//       </React.Suspense>
//     </Router>
//   );
// };

const App = () => {
  return <h1>Hello admin!</h1>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
