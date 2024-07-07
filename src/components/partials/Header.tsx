import { useState } from "react";

const Header = () => {
    const htmlElement = document.querySelector('html') as HTMLElement;

    const [pass50, setPass50] = useState<boolean>(false);
    const [isHambChanged, setHambChange] = useState<boolean>(false);
    const [isNavActive, setNavActive] = useState<boolean>(false);

    const onScrollUpdate = () => {
        let positionY = window.scrollY;
        if (positionY >= 50) {
            setPass50(true);
        } else {
            setPass50(false);
        }
    }

    const onHamburgerClick = () => {
        setHambChange(!isHambChanged);
        setNavActive(!isNavActive);
        if(isHambChanged === true) {
            htmlElement.style.overflow = "hidden";
        } else {
            htmlElement.style.overflow = "hidden auto";
        }
    }

    const Menu = [
        {
            name: 'story',
            link: '#story'
        },
        {
            name: 'work',
            link: '#work'
        },
        {
            name: 'testimonials',
            link: '#testimonials'
        },
        {
            name: 'contact',
            link: '#contact'
        }
    ]

  return (
    <header id="story" onScroll={onScrollUpdate}>
      <div onClick={onHamburgerClick} className={`menu-btn ${isHambChanged ? 'change' : ''} ${pass50  ? '' : 'hide'}`}>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      <div className="wrapper">
        <a className="logo" href="#banner">
          Adrian
        </a>
        <nav className={`primary-menu ${pass50  ? '' : 'change'}`}>
          <ul>
            {Menu.map((item, key) => (
                <li key={key}>
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
          </ul>
        </nav>
      </div>
      <nav className={`fixed-nav ${isNavActive ? 'active' : ''}`}>
        <ul>
        {Menu.map((item, key) => (
                <li key={key} style={{transitionDelay: `calc(.5s + (.3s*${key}))`}}>
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
