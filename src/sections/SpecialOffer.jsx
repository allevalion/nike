import { offer } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className="flex items-center gap-10 justify-wrap max-xl:flex-col-reverse max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          <span className="inline-block mt-2">
            <span className="text-coral-red ">Special </span>
          </span>{' '}
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-wrap gap-4 mt-11 max-sm:justify-center">
          <Button
            onClick={() => (window.location.href = '#products')}
            label="Shop Now"
            iconURL={arrowRight}
            hoverTransition="red-hover"
            iconHoverTransition="group-hover:translate-x-2"
          />
          <Button
            onClick={() => (window.location.href = '/')}
            label="Learn More"
            hoverTransition="gray-hover"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
