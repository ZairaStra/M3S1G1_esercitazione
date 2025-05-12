import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="banner">
        <div className="header-container">
          <img
            src="https://img.freepik.com/vettori-gratuito/vettore-di-gradiente-del-logo-colorato-uccello_343694-1365.jpg?semt=ais_hybrid&w=740"
            alt="logo"
            width="60"
            height="60"
          />

          <ul>
            <li>Home</li>
            <li>Account</li>
            <li>Settings</li>
          </ul>
        </div>
      </header>
    );
  }
}
export default Header;
