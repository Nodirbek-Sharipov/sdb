import react from "react";
import Navbar from "./components/navbar/Navbar";
import './assets/style/style.scss'
import AppRouter from "./components/appRouter/AppRouter";
function App() {
  return (
    <div className="wrapper">
        <Navbar/>
        <AppRouter/>

    </div>
  );
}

export default App;
