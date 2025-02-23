import "./App.css";

import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Result from "./components/Result/Result.tsx";
import CreateModal from "./components/CreateModal/CreateModal.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <Result />
      </main>
      <CreateModal />
    </>
  );
}

export default App;
