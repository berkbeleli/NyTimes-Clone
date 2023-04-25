import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SectionsProvider } from "./contexts/SectionsContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { QueryArticlesProvider } from "./contexts/QueryArticlesContext";
import { Header, Sidebar, Footer } from "./components";
import * as Pages from "./pages";
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <SectionsProvider>
    <SidebarProvider>
      <QueryArticlesProvider>
        <Router>
        <Analytics />
          <div className="app">
            <Header />
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Pages.Home />} />
              <Route
                exact
                path="/query/:searchTerm"
                element={<Pages.QueryArticles />}
              />
              <Route
                exact
                path="/section/:section"
                element={<Pages.SectionArticles />}
              />
              <Route path="*" element={<Pages.ErrorPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </QueryArticlesProvider>
    </SidebarProvider>
  </SectionsProvider>
  );
}

export default App;
