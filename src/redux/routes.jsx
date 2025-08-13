import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Coinbase from '../pages/Platforms/Coinbase/Coinbase';
import Paypal from '../pages/Platforms/Paypal/Paypal';
import Robinhood from '../pages/Platforms/Robinhood/Robinhood';
import Bitpay from '../pages/Platforms/Bitpay/Bitpay';
import CharlesSchwab from '../pages/Platforms/CharlesSchwab/CharlesSchwab';
import CashApp from '../pages/Platforms/CashApp/CashApp';
import LoginIssues from '@/pages/HelpCategories/LoginIssues/LoginIssues';
import PaymentIssues from '@/pages/HelpCategories/PaymentIssues/PaymentIssues';
import KYCProblem from '@/pages/HelpCategories/KYCProblems/KYCProblem';
import WithdrawalIssue from '@/pages/HelpCategories/WithdrawalIssue/WithdrawalIssue';
import Security2FA from '@/pages/HelpCategories/Security2FA/Security2FA';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coinbase" element={<Coinbase />} />
      <Route path="/paypal" element={<Paypal />} />
      <Route path="/robinhood" element={<Robinhood />} />
      <Route path="/bitpay" element={<Bitpay />} />
      <Route path="/charlesschwab" element={<CharlesSchwab />} />
      <Route path="/cashapp" element={<CashApp />} />

      <Route path="/help-center/login-issues" element={<LoginIssues />} />
      <Route path="/help-center/payment-issues" element={<PaymentIssues />} />
      <Route path="/help-center/kyc-issues" element={<KYCProblem />} />
      <Route path="/help-center/withdrawal-issues" element={<WithdrawalIssue />} />
      <Route path="/help-center/security-2fa" element={<Security2FA />} />
    </Routes>
  );
};

export default AppRoutes;
