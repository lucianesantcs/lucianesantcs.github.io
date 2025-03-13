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
      <Header className="md:mb-28" />
      <main className="container max-w-144 mx-auto flex flex-col gap-14 min-h-dvh px-3 md:px-10 lg:px-20">
        <Sobre id="sobre" className="py-6 md:py-8 lg:py-20 items-center gap-8" />
        <Experiencia id="experiencia" className="py-6 md:py-8 lg:py-20" />
        <Trabalhos id="trabalhos" className="py-6 md:py-8 lg:py-20" />
        <Feedbacks id="feedbacks" className="py-6 md:py-8 lg:py-20" />
        <Contato id="contato" className="py-6 md:py-8 lg:py-20" />
      </main>
      <Footer />
    </>
  );
}

export default App;
