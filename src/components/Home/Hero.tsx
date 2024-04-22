import HeroImage from '../../assets/images/illustration-working.svg';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse gap-2 md:flex-row pl-8 md:pl-24 pt-8 md:p-12">
      <div className="flex flex-col justify-center text-center items-center pr-8 md:items-start md:text-left gap-8">
        <h1 className='font-extrabold text-3xl md:text-6xl text-neutral-very-dark-blue'>More than just shorter links</h1>
        <p className='text-neutral-grayish-violet font-bold'>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>
      <div className='mb-8'>
        <img src={HeroImage} alt="hero illustration" />
      </div>
    </div>
  );
};

export default Hero;
