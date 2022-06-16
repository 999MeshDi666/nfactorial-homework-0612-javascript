//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";
// import { useEffect } from "react";
import { SearchBar } from "../sw-search";
// import { ThemeContext } from "../../Context";


//массив данных ссылок
const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];


export const Header = ({ fan, handleSetDarkTheme, handleSetLightTheme, theme}) => {
  // const { backGroundTheme } = useContext(ThemeContext);
 
  return (
    <header className = {theme}>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}

        <div className="theme-mode">
          <button className="theme-btn" onClick={handleSetLightTheme}>Red</button>
          <button className="theme-btn" onClick={handleSetDarkTheme}>Dark</button>


        </div>
      </div>
      <StarWarsLogoSVG />
      <div className="search-layout">
        
       <SearchBar> Search Star Wars </SearchBar>
        <div style={{ color: "white", paddingTop: "1rem" }}>
          I am fan of: {fan}
      </div>
      </div>
      
    </header>
  );
};
