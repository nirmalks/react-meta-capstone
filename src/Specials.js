function Specials() {
    return (
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
    );
}

export default Specials;