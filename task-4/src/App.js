import "./style/App.css";
import Navbar from "./components/Navbar";
import Home from "./Page/Home";
import { Route, Routes } from "react-router-dom";
import Listplanet from "./Page/List/Listplanet";
import Listpeople from "./Page/List/Listpeople";
import Listspecies from "./Page/List/Listspecies";
import Detailpeople from "./Page/Detail/Detailpeople";
import Detailplanet from "./Page/Detail/Detailplanet";
import Detailspecies from "./Page/Detail/Detailspecies";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-planet" element={<Listplanet />} />
          <Route path="/list-people" element={<Listpeople />} />
          <Route path="/list-species" element={<Listspecies />} />
          <Route path="/detail-planet" element={<Detailplanet />} />
          <Route path="/detail-people" element={<Detailpeople />} />
          <Route path="/detail-species" element={<Detailspecies />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
