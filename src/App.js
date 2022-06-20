import './App.css';

function App() {
  return (
      <>

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
