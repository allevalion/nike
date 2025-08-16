import { useState } from 'react';

import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/images';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="flex flex-col justify-center w-full min-h-screen gap-10 xl:flex-row max-container"
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collection
        </p>
        <h1
          className="mt-10 font-palanquin
        text-8xl max-sm:text-[72px]
        max-sm:leading-[82px] font-bold"
        >
          <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="inline-block mt-2">
            <span className="inline-block mt-3 text-coral-red">Nike</span> Shoes
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button
          onClick={() => (window.location.href = '#products')}
          label="Shop Now"
          iconURL={arrowRight}
          hoverTransition="red-hover"
          iconHoverTransition="group-hover:translate-x-2"
        />

        <div className="flex flex-wrap items-start justify-start w-full gap-16 mt-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center flex-1 bg-center bg-cover xl:min-h-screen max-xl:py-40 bg-primary">
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe} className="max-sm:hidden">
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
