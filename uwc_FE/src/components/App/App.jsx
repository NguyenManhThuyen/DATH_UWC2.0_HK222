import './App.css';
import Sidebar from './sidebar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { publicRoutes } from '../../routes';
import DefaultLayout from './Layout/DefaultLayout';
import LoginLayout from './Layout/LoginLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <Routes>
          {
            publicRoutes.map((route, index) =>{
              
              const Content = route.component;
              // const LoginLayout = route.layout;
              // const Layout = DefaultLayout;
              return (
                <Route
                key={index}
                path={route.path}
                element ={
  
                    <Content/>
        
                }
                >

                </Route>
              )
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
