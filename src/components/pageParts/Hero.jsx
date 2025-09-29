import { RiArrowDownWideFill } from "react-icons/ri";

function Hero() {
  return (
    <div className="cover-img">
      <div className="cover-text">
        <h1>A Console for Every Workflow</h1>
        <p>Discover the perfect console for yours.</p>
      </div>
      <div className="cover-button">
        <a>
          <RiArrowDownWideFill />
        </a>
      </div>
    </div>
  );
}

export default Hero;
