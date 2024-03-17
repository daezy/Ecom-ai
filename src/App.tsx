import { Route, Routes } from "react-router-dom";
import "./App.css";
import Stats from "./components/Stats";
import TabBar from "./components/TabBar";
import TopBar from "./components/TopBar";
import AllStores from "./pages/AllStores";
import LiveStores from "./pages/LiveStores";
import RevShare from "./pages/RevShare";

function App() {
  return (
    <>
      <TopBar />
      <Stats />

      <section className="tabs my-5 container mx-auto px-4">
        <TabBar />
        <div className="bg-[#161E0C] ">
          <Routes>
            <Route path="/" element={<AllStores />} />
            <Route path="/liveStores" element={<LiveStores />} />
            <Route path="/revShare" element={<RevShare />} />
          </Routes>
        </div>
      </section>

      <img
        src="./img/top-abs.png"
        className="absolute top-0 left-0 -z-10"
        alt=""
      />
    </>
  );
}

export default App;
