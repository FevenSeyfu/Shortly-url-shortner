import HeroImage from '../../assets/images/illustration-working.svg';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col">
        <h1>More than just shorter links</h1>

        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <button>Get Started</button>
      </div>
      <div>
        <img src={HeroImage} alt="hero illustration" />
      </div>
    </div>
  );
};

export default Hero;
