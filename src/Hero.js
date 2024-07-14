import { Link } from "react-router-dom";
function Hero() {
    return (
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
          <button className="primary-btn"><Link to={"/booking"}>Reserve a Table</Link></button>
        </div>
        <div className="self-center">
          <img
            src="restauranfood.jpg"
            alt="waiter bringing food"
            className="image-responsive hero-image"
          ></img>
        </div>
      </section>
    );
}

export default Hero;