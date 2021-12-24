import { Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { TransitionGroup } from 'react-transition-group';

import Timer from './components/Timer';
import Wish from './components/Wish';
import Cards from './components/cards';
import Cake from './components/Cake';
import Gift from './components/Gift';
import Write from './components/Write';


import { AiFillAppstore } from "react-icons/ai";
import { BsClock, BsGift } from 'react-icons/bs';
import { BiCreditCardFront } from 'react-icons/bi';
import { HiOutlineCake, HiOutlineBookOpen } from 'react-icons/hi';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const location = useLocation();

  const Redirect = () => {
    return <Navigate to="/happybirthday/page-00" />
  }

  return (
    <div>
      <nav className="navbar navbar-expand fixed-bottom text-white navbar-dark">
        <ul className="navbar-nav nav-justified w-100">
          <li className="nav-item"><NavLink className="nav-link" to="/happybirthday/page-00"><BsClock /></NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/happybirthday/page-01"><AiFillAppstore /></NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/happybirthday/page-02"><BiCreditCardFront /></NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/happybirthday/page-03"><HiOutlineCake /></NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/happybirthday/page-04"><BsGift /></NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/happybirthday/page-05"><HiOutlineBookOpen /></NavLink></li>
        </ul>
      </nav>
      <TransitionGroup>
        <div className="App">
          <div className="Window">
            <AnimatePresence exitBeforeEnter>
              <Routes location={location.pathname}>
                <Route path="/happybirthday" element={<Redirect />} />
                <Route path="/happybirthday/page-00" element={<Timer />} />
                <Route path="/happybirthday/page-01" element={<Wish />} />
                <Route path="/happybirthday/page-02" element={<Cards />} />
                <Route path="/happybirthday/page-03" element={<Cake />} />
                <Route path="/happybirthday/page-04" element={<Gift />} />
                <Route path="/happybirthday/page-05" element={<Write />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </TransitionGroup>
    </div>
  );
}

export default App;
