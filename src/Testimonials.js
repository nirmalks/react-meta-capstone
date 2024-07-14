function Testimonials() {
    return (
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
    );
}

export default Testimonials;