import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Form from "./pages/Form";
import ShowTableDB from "./pages/ShowTableDB";
import NoPage from "./pages/NoPage";


function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="ShowTableDB" element={<ShowTableDB />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default  Routing;