function Main() {
  return (
    <main>
      <section className="hero-section">
        <div>
          <h2 className="primary-yellow margin-bottom-025em">Little Lemon</h2>
          <h4 className="no-padding">Chicago</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
          <button className="primary-btn">Reserve a Table</button>
        </div>
        <div className="self-center">
          <img
            src="restauranfood.jpg"
            alt="waiter bringing food"
            className="image-responsive hero-image"
          ></img>
        </div>
      </section>
      <section className="flex-column">
        <div className="flex-row">
          <h2>This Week's Specials!</h2>
          <button className="primary-btn">Online Menu</button>
        </div>
        <div className="flex-row space-between">
          <section className="grey-background flex-column">
            <img
              src="greek_salad.jpg"
              alt="Greek salad food"
              className="image-responsive"
            ></img>
            <div className="flex-row">
              <h3>Greek Salad</h3>
              <span className="orange-color">$12.99</span>
            </div>
            <p className="primary-green">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="bold-text">
              Order a delivery{" "}
              <img
                className="button-img"
                src="cart-icon.jpg"
                width="30"
                height="10"
                alt="delivery icon"
              />
            </span>
          </section>

          <section className="grey-background flex-column">
            <img
              src="bruchetta.jpg"
              alt="brucheta food"
              className="image-responsive"
            ></img>
            <div className="flex-row">
              <h3>Brucheta</h3>
              <span className="orange-color">$5.99</span>
            </div>
            <p className="primary-green">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="bold-text">
              Order a delivery{" "}
              <img
                className="button-img"
                src="cart-icon.jpg"
                width="30"
                height="10"
                alt="delivery icon"
              />
            </span>
          </section>
          <section className="grey-background flex-column">
            <img
              src="lemon_dessert.jpg"
              alt="lemon dessert food"
              className="image-responsive"
            ></img>
            <div className="flex-row">
              <h3>Lemon Dessert</h3>
              <span className="orange-color">$5.00</span>
            </div>
            <p className="primary-green">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="bold-text">
              Order a delivery{" "}
              <img
                className="button-img"
                src="cart-icon.jpg"
                width="30"
                height="10"
                alt="delivery icon"
              />
            </span>
          </section>
        </div>
      </section>
      <section className="primary-yellow-bg flex-column border-radius-1em">
        <h2 className="text-align-center">Testimonials</h2>
        <div className="flex-row space-between">
          <section>
            <h3>Rating - 5/5</h3>
            <img
              src="Mario-and-Adrian-A.jpg"
              alt="user pic"
              className="image-testimonial"
            ></img>
            <span className="margin-left-1em">Ram</span>
            <p className="primary-green">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>

          <section>
            <h3>Rating - 4.5/5</h3>
            <img
              src="Mario-and-Adrian-A.jpg"
              alt="user pic"
              className="image-testimonial"
            ></img>
            <span className="margin-left-1em">Orton</span>
            <p className="primary-green">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>

          <section>
            <h3>Rating - 4/5</h3>
            <img
              src="Mario-and-Adrian-A.jpg"
              alt="user pic"
              className="image-testimonial"
            ></img>
            <span className="margin-left-1em">Undertaker</span>
            <p className="primary-green">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
        </div>
      </section>
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
    </main>
  );
}

export default Main;