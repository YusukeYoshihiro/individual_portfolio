import GlobalStyle from './globalStyles';
import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './pages';
import WorkDesc from './components/WorkDescription/WorkDesc';
import WorkDesc2 from './components/WorkDescription/WorkDesc2';
import WorkDesc3 from './components/WorkDescription/WorkDesc3';
import WorkDesc4 from './components/WorkDescription/WorkDesc4';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function App() {
  
  return (
     // add " basename={process.env.PUBLIC_URL} " to deploy on GitHub pages
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cricket" component={WorkDesc} />
        <Route path="/lacrosse" component={WorkDesc2} />
        <Route path="/movieApp" component={WorkDesc3}  />
        <Route path="/ecommerce" component={WorkDesc4}  />
      </Switch>
    </>
  );
}

export default App;
