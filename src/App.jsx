import "./App.css";
import ButtonComponent from "./components/ButtonComponent.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/header.jsx";
import ImageComponent from "./components/ImageComponent.jsx";
import Main from "./Title.jsx";

function App() {
  return (
    <>
      <Header />
      <Main title="Funny Animals" subtitle="and where to find them">
        <div className="img-div">
          <img
            src="https://images.unsplash.com/photo-1746645012316-39ef59320d9b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image-description"
          />
          <h3>Bulldog swag</h3>
        </div>
      </Main>
      <ImageComponent imgSrc="https://images.unsplash.com/photo-1746645012316-39ef59320d9b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <ButtonComponent buttonContent="Bottone React" />
      <Footer />
    </>
  );
}

export default App;
