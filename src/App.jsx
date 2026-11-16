import {BrowserRouter, Routes, Route} from 'react-router';

import Header from './components/common/Header';
import './App.css';
import Footer from './components/common/Footer';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
    
      <Routes>
        <Route path="/" element={<BlogPostsPage />} />
        <Route path="/posts/:id" element={<IndividualPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>


    <Footer />

      
    </BrowserRouter>
  );
}

export default App;
