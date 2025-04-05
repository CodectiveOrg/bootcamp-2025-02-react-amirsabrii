import { Route, Routes } from "react-router";

import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import RootLayuots from "./layuots/Layuots.tsx";
import AttractionDetails from "./pages/AttractionDetails/AttractionDetails.tsx";

import "./App.css";
import QueryProvider from "./Providers/QueryProvider.tsx";

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route element={<RootLayuots />}>
          <Route index element={<Home />} />
          <Route path={"attraction/:id"} element={<AttractionDetails />} />
          <Route path={"about"} element={<About />} />
        </Route>
      </Routes>
    </QueryProvider>
  );
}

export default App;
