import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

const App = () => {
  return (
    <div>
      <Header title={"The Job Board"} />
      <Jobs />
      <Footer />
    </div>
  );
};

export default App;
