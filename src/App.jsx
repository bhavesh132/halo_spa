import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
      <Footer />
    </div>
  );
}
