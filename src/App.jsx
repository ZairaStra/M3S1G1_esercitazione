import "./App.css";
import ButtonComponent from "./components/ButtonComponent.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/header.jsx";
import ImageComponent from "./components/ImageComponent.jsx";
import Section from "./components/Section.jsx";
import Main from "./Title.jsx";

function App() {
  return (
    <>
      <Header />
      <Main title="Funny Animals" subtitle="and where to find them" />
      <Section>
        <div className="img-div">
          <img
            src="https://images.unsplash.com/photo-1746645012316-39ef59320d9b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image-description"
          />
          <div className="card-body">
            <h3>Swaggy Bulldog</h3>
            <button className="btn">Hi Bulldog!</button>
          </div>
        </div>
        <div className="img-div">
          <img
            src="https://plus.unsplash.com/premium_photo-1664299631876-f143dc691c4d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image-description"
          />
          <div className="card-body">
            <h3>Smiling Monkey</h3>
            <button className="btn">Hi Monkey!</button>
          </div>
        </div>
        <div className="img-div">
          <img
            src="https://images.unsplash.com/photo-1689798539859-0220687e77a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZ1bm55JTIwYW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="image-description"
          />
          <div className="card-body">
            <h3>Hungry Giraffe</h3>
            <button className="btn">Hi Giraffe!</button>
          </div>
        </div>
        <div className="img-div">
          <img
            src="https://images.unsplash.com/photo-1628148061873-13b9340f763b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image-description"
          />
          <div className="card-body">
            <h3>Hairy Sheep</h3>
            <button className="btn">Hi Sheep!</button>
          </div>
        </div>
      </Section>
      <Section></Section>

      <ImageComponent imgSrc="https://images.unsplash.com/photo-1746645012316-39ef59320d9b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <ButtonComponent buttonContent="Bottone React" />
      <Footer />
    </>
  );
}

export default App;
