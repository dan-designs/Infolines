/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import History from "./pages/History";
import Features from "./pages/Features";
import Manifesto from "./pages/Manifesto";
import AppStore from "./pages/AppStore";
import Support from "./pages/Support";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import DynamicPage from "./pages/DynamicPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="features" element={<Features />} />
          <Route path="manifesto" element={<Manifesto />} />
          <Route path="app-store" element={<AppStore />} />
          <Route path="support" element={<Support />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          {/* Dynamic Route Catch-all for scalable content */}
          <Route path=":slug" element={<DynamicPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
