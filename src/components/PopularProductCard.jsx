import React from 'react';
import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, rating, name, price }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full max-sm:w-full">
      <img src={imgURL} alt={name} width={280} height={280} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="" width={24} height={24} />
        <p className="text-xl leading-normal font-montserrat text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-3xl font-semibold leading-normal font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
