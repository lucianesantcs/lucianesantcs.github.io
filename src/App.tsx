import "./App.css";
import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";
import Contato from "./sections/Contato";
import Experiencia from "./sections/Experiencia";
import Feedbacks from "./sections/Feedbacks";
import Sobre from "./sections/Sobre";
import Trabalhos from "./sections/Trabalhos";

function App() {
  return (
    <>
      <Header className="mb-28" />
      <main className="container max-w-144 mx-auto flex flex-col gap-14 min-h-dvh px-3 md:px-10 lg:px-20">
        <Sobre className="py-20 items-center" />
        <Experiencia className="py-20" />
        <Trabalhos className="py-20" />
        <Feedbacks className="py-10" />
        <Contato className="py-20" />
      </main>
      <Footer />
    </>
  );
}

export default App;
