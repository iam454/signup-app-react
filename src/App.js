import "./App.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
import FontControlBox from "./components/FontControlBox";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <section className="form-wrapper">
        <Form />
        <Footer />
      </section>
      <FontControlBox />
      <Modal />
    </>
  );
}

export default App;
