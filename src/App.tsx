import "./App.css";
import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";
import Sobre from "./sections/Sobre";

function App() {
  return (
    <>
      <Header />
      <main className="container min-h-dvh px-3 md:px-10 lg:px-20">
        <Sobre />
      </main>
      <Footer />
    </>
  );
}

export default App;
