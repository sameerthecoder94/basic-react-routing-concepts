import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ThankYouPage from './pages/ThankYouPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* if the route/url path is "/" then show us the HomePage */}
        <Route path='/' element={<HomePage />} />
        {/* else if the route/url path is "/about" then show us the AboutPage */}
        <Route path='/about' element={<AboutPage />} />
        {/* else if the route/url path is "/contact" then show us the ContactPage */}
        <Route path='/contact' element={<ContactPage />} />
        {/* else if the route/url path is "/privacy-policy" then show us the PrivacyPolicyPage */}
        <Route
          path='/privacy-policy'
          element={<PrivacyPolicyPage />}
        />
        {/* else if the route/url path is "/thank-you" then show us the ThankYouPage */}
        <Route path='/thank-you' element={<ThankYouPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
