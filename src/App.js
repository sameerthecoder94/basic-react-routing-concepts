import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ThankYouPage from './pages/ThankYouPage';
import './index.css';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import MusicPage from './pages/MusicPage';
import LoginPage from './pages/LoginPage';
import AuthContextProvider from './context/AuthContext';
import AuthChecker from './pages/AuthChecker';
const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicyPage')
);

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
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
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PrivacyPolicyPage />
              </Suspense>
            }
          />

          <Route
            path='/music-page'
            element={
              <AuthChecker>
                <MusicPage />
              </AuthChecker>
            }
          />
          <Route path='/login' element={<LoginPage />} />

          {/* else if the route/url path is "/thank-you" then show us the ThankYouPage */}
          <Route path='/thank-you' element={<ThankYouPage />} />
          {/* else if the route/url path is "/blog" then show us the BlogPage */}
          <Route path='/blog' element={<BlogPage />} />
          {/* Dynamic Routes */}
          <Route
            path='/blog/:dynamicID'
            element={<BlogDetailPage />}
          />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
