
import { Link, useLocation } from 'react-router-dom'



function MyNavbar() {
  const location = useLocation()
    return (

        <nav id='navbar' className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
  
            <Link to="/" className="navbar-brand">
            <div
              className={
                location.pathname === '/'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
               <img src="https://raw.githubusercontent.com/Viserya11/M6-Day-5-Solo-Project/main/assets/netflix_logo.png" className="logo" />
            </div>
          </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to="/" className="navbar-links">
            <div
              className={
                location.pathname === '/'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
             Home
            </div>
          </Link>
                </li>
                <Link to="/tv-shows" className="navbar-links">
            <div
              className={
                location.pathname === '/tv-shows'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Shows
            </div>
          </Link>
                <li className="nav-item">
                  <a className="nav-link" href="#">Movies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Recent</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">List</a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search icon" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">KIDS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-bell-fill icon" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  {/* Example single danger button */}
                  <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" id="avatar" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="http://ubeytdemir.me/netflix-ui/profile.html">
                          <div className="d-flex align-items-center">
                            <img src="./assets/avatar.png" id="avatar-small" />
                            Ubeyt
                          </div>
                        </a></li>
                      <li><a className="dropdown-item" href="http://ubeytdemir.me/netflix-ui/profile.html">Manage Profiles</a></li>
                      <li><a className="dropdown-item" href="http://ubeytdemir.me/netflix-ui/accounts.html">Account</a></li>
                      <li><a className="dropdown-item" href="#">Help Center</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item" href="#">Signout Netflix</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }

export default MyNavbar;