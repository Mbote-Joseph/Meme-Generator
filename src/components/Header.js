import trollImage from "./Troll.png";
import "./Header.css";

let Header = () => {
  return (
    <header>
      <div className="image">
        <img src={trollImage} alt="_blank" />
        <h2>Meme Generator</h2>
      </div>
      <h4>Mbote Joseph</h4>
    </header>
  );
};

export default Header;
