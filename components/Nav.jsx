import Link from "next/link";

const Nav = () => {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" href="/" passHref>
                    malorama
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/" passHref>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/projects" passHref>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/bio" passHref>
                                Bio
                            </Link>
                        </li>
                    </ul>
                    <Link className="m-3" href="https://www.linkedin.com"><i className="bi bi-linkedin" style={{ fontSize: '24px' }} /></Link>
                    <Link className="m-3" href="https://www.github.com"><i className="bi bi-github" style={{ fontSize: '24px' }} /></Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav