import "../index.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg sticky-top border-bottom"
        style={{ backgroundColor: "#ffffffff"}}
      >
        <div class="container py-2">
          <Link class="navbar-brand" to='/'>
            <img src="/media/logo.svg" alt="logo" style={{ width: "25%" }} />
          </Link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to='/signup'>
                    Signup
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to='/about'>
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to='/products'>
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to='/pricing'>
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to='/support'>
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
