import React from "react";

function Home() {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <h1 className="masthead-heading text-uppercase mb-0">
          Welcome To LOGO
        </h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">
          Welcome to our pet adoption website, where finding your new furry
          friend is just a click away!
        </p>
        <p className="masthead-subheading font-weight-light mb-0">
          By adopting from us, not only will you gain a loyal companion, but
          you'll also be making a positive impact on the lives of animals in
          need. Join us in our mission to give these animals the loving homes
          they deserve.
        </p>
      </div>
    </header>
  );
}

export default Home;
