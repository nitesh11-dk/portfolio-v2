import { FaGithub, FaLinkedin, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { Links } from "../constants/index";

const socialIcons = [
  { icon: <FaGithub />, link: Links.github },
  { icon: <FaLinkedin />, link: Links.linkedin },
  { icon: <FaDiscord />, link: Links.discord },
  { icon: <FaWhatsapp />, link: Links.whatsapp },
];

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3 text-white text-xl">
        {socialIcons.map((item, index) => (
          <a className="social-icon" key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        ))}
      </div>

      <p className="text-white-500">© 2025 Nitesh Kushwaha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
