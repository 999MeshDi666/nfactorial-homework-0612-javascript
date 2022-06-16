
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";

//массив данных ссылок
const swLinks = [
  {
    url: "https://www.youtube.com/watch?v=c2LuRgzvgtI",
    name: "Anakin vs Obi Wan",
    component: <YoutubeLogoSVG />,
  },
  {
    url: "https://youtu.be/AmR5LoyZ4jw",
    name: "lightsaber fight",
    component: <YoutubeLogoSVG />,
  },
];
export const Footer = () =>{
    return(
    <footer className="footer">
      <div className="links-layout footer-links">
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
      </div>
      <p className="footer-text">Star wars</p>
        
      
    </footer>

    )
}