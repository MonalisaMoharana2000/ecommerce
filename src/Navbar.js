import React from "react";
import logo from "./munu/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} style={{ width: 100, height: 60 }} alt="..." />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catagory
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/menaccesory">
                      Men Accesory
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/womenaccesory">
                      Women Accesory
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/jewelery">
                      Jewelery
                    </a>
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="signup"
                  style={{
                    borderColor: "yellow",
                    borderWidth: "1",
                    borderStyle: "solid",
                    padding: "0.35657rem 0.5rem",
                    borderRadius: 3,
                    marginLeft: 6,
                  }}
                >
                  SIGNUP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
