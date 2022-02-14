import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Win from './pages/Win';
import MinePage from './pages/MinePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ResetPassword  from './pages/ResetPassword';
import AddAddress from './pages/AddAddress';
import AddBankCard from './pages/AddBankCard';
import Withdrawal from './pages/Withdrawal';
import Orders from './pages/Orders';
import ComplaintsSuggestions from './pages/ComplaintsSuggestions';
import Promotion from './pages/Promotion';
import Transactions from './pages/Transactions';
import RiskDisclosureAgreement from './pages/RiskDisclosureAgreement';
import Recharge from './pages/Recharge';
import AuthUser from "./AuthUser";
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route path='/reset/password' element={<ResetPassword/>}/>
          <Route path='/home' element={<Home/>}/>



          {/* User Auth */}

          <Route path='/win' element={<AuthUser cmp={Win} />}/>
          <Route path='/mine' element={<AuthUser cmp={MinePage}/>}/>
          <Route path='/privacy/policy' element={<AuthUser cmp={PrivacyPolicy}/>}/>
          {/* <Route path='/reset/password' element={<AuthUser cpm={ResetPassword}/>}/> */}
          <Route path='/add/address' element={<AuthUser cmp={AddAddress}/>}/>
          <Route path='/add/bank' element={<AuthUser cmp={AddBankCard}/>}/>
          <Route path='/withdrawal' element={<AuthUser cmp={Withdrawal}/>}/>
          <Route path='/orders' element={<AuthUser cmp={Orders}/>}/>
          <Route path='/ComplaintsSuggestions' element={<AuthUser cmp={ComplaintsSuggestions}/>}/>
          <Route path='/promotion' element={<AuthUser cmp={Promotion}/>}/>
          <Route path='/transactions' element={<AuthUser cmp={Transactions}/>}/>
          <Route path='/RiskDisclosure' element={<AuthUser cmp={RiskDisclosureAgreement}/>}/>
          <Route path='/recharge' element={<AuthUser cmp={Recharge}/>}/>
      </Routes>
        
    </>
  );
}

export default App;
