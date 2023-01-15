import "./index.css";
import Navbar from "./Navbar";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
