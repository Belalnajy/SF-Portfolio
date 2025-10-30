import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import HomePage from './pages/MainPage';
import StorePage from './pages/MainPageStore';
import InvestMainPage from './pages/MainPageInvest';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StorePageForm from './pages/StorePageForm';
import InvestPage from './pages/InvestPage';
import EmployeeForm from './pages/EmployeeForm';
import SuccessPage from './pages/SuccessPage';
import ArticlePage from './pages/ArticlePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/invest-main" element={<InvestMainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/store-form" element={<StorePageForm />} />
          <Route path="/invest" element={<InvestPage />} />
          <Route path="/employee" element={<EmployeeForm />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}
