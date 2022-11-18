import React from "react";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={style.navbar}>
        <div className={style["navbar-items"]}>
          <ul>
            <div>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </div>
            <div>
              <span className={style.icon}>Landie</span>
            </div>
            <div>
              <button className={style.buynowbutton}>Buy Now</button>
            </div>
          </ul>
        </div>
      </div>

      <details className={style.details}>
        <summary className={style.summary}></summary>
        <nav class={style.menu}>
          <a className={style.menuicon}> Landie</a>
          <a href="#link">Home</a>
          <a href="#link">About</a>
          <a href="#link">Contact</a>
        </nav>
      </details>
    </>
  );
};

export default Navbar;
