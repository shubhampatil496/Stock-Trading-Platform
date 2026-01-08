import React from "react";
import "../index.css";

export default function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg sticky-top border-bottom"
        style={{ backgroundColor: "#ffffffff", opacity: "0.9" }}
      >
        <div class="container py-2">
          <a class="navbar-brand" href="#">
            <img src="/media/logo.svg" alt="logo" style={{ width: "25%" }} />
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Signup
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Support
                  </a>
                </li>
                 <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <i class="fa-solid fa-bars"></i>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
