import './App.css';

function App() {
  return (
      <>
          <header>
                <nav className="">
                    <ul className="nav-links">
                        <img src="./assets/platform-logo.png" alt="platform logo"/>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Magazine</a></li>
                        <li><a href="#">Contact</a></li>
                        <button type="button" className="sign-up-button">Sign Up</button>
                        <button type="button" className="log-in-button">Log In</button>
                    </ul>
                </nav>
          </header>
          <main>
                <section className="main-section">
                    <div>Latest</div>
                </section>
                <section className="sub-section">
                    <div className="join-platform">Join our Platform</div>
                    <input placeholder="Email address"/>
                    <button className="sub-button" type="button" href="#" >Subscribe</button>
                </section>
                <section className="about-us-section">
                    <div>About us</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae deserunt et id inventore iure molestiae nam nobis recusandae suscipit?</div>
                </section>
          </main>
          <footer className="footer-style">
              Platform - 2022
          </footer>
      </>
  );
}

export default App;
