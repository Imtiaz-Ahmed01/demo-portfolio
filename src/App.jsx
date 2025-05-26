import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Routing from "./router/Routing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routing />
    </>
  );
}

export default App;
