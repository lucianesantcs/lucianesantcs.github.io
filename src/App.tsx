import "./App.css";
import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="container min-h-dvh px-3 md:px-10 lg:px-20"></main>
      <Footer />
    </>
  );
}

export default App;
