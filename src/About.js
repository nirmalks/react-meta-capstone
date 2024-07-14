function About() {
    return (
        <section className="hero-section about-section flex-column">
        <h2 className="primary-yellow margin-bottom-025em">
          About Little Lemon
        </h2>
        <h4 className="no-padding">Chicago</h4>
        <div className="flex-row">
          <p className="width-50-percent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img
            src="Mario-and-Adrian-b.jpg"
            alt="Mario and adrian aside each other"
            className="image-responsive width-50-percent"
          ></img>
          <img
            src="Mario-and-Adrian-A.jpg"
            alt="Mario and adrian aside each other"
            className="image-responsive second-about-image width-50-percent"
          ></img>
        </div>
      </section>
    );
}

export default About;