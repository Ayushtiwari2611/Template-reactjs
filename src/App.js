import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homescreen from './Components/Homescreen';
import Dashboard from './Components/Dashboard';
import Nopage from './Pages/Nopage';
import Addapplication from './Pages/Addapplication';
import Processapplication from './Pages/Processapplication';
import Alerts from './Pages/Alerts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />}>
            <Route index element={<Dashboard/>} />
            <Route path="/card-production/add-application" element={<Addapplication />} />
            <Route path="/card-production/process-application" element={<Processapplication />} />
            <Route path="/components/alerts" element={<Alerts />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
