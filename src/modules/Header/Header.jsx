/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div className="container">
            <main className="top">
              <img src="/img/logo.png" alt="logo" className="top__logo" />
              <div className="top__news"></div>
            </main>
          </div>
          <nav className="navbar">
            <div className="container">
              <div className="navbar-wrapper">
                <div className="navbar-link">
                  <Link href="#" className="navbar-link__item">
                    dfjjgj
                  </Link>
                  <Link href="#" className="navbar-link__item">
                    ghjdgh
                  </Link>
                  <Link href="#" className="navbar-link__item">
                    fgjgj
                  </Link>
                  <Link href="#" className="navbar-link__item">
                    fghfg
                  </Link>
                  <Link href="#" className="navbar-link__item">
                    fghfghfth
                  </Link>
                </div>
                {/* <div className="navbar-icon">
                  <Link
                    href="#"
                    className="navbar-icon__item navbar-icon__telegram"
                  ></Link>
                  <Link
                    href="#"
                    className="navbar-icon__item navbar-icon__instagram"
                  ></Link>
                  <Link
                    href="#"
                    className="navbar-icon__item navbar-icon__youtube"
                  ></Link>
                  <Link
                    href="#"
                    className="navbar-icon__item navbar-icon__vk"
                  ></Link>
                </div> */}
                <button className="navbar-login__button">Login</button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
