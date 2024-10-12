import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:paddind-x pt-28">
        <p>Our summer collection</p>
        <h1>
          <span>The New Arrivals</span>
          <br />
          <span>Nike</span>
          shoes
        </h1>
        <p>
          Discover stylish qualith comfort, and innovation for your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
