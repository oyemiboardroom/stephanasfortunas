import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SolutionPage from './pages/SolutionPage.jsx';
import InsightPage from './pages/InsightPage.jsx';
import NotFound from './pages/NotFound.jsx';
import CornerChrome from './components/site/CornerChrome.jsx';
import Drawer from './components/site/Drawer.jsx';
import CursorDot from './components/site/CursorDot.jsx';
import { DrawerProvider } from './context/DrawerContext.jsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <DrawerProvider>
      <ScrollToTop />
      <CursorDot />
      <CornerChrome />
      <Drawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions/:slug" element={<SolutionPage />} />
        <Route path="/insights/:slug" element={<InsightPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DrawerProvider>
  );
}
