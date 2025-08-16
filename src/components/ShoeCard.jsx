const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red cursor-default' : 'border-transparent cursor-pointer'}  max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-[image:var(--bg-card)] bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 overflow-hidden">
        <img
          src={imgURL.thumbnail}
          aria-hidden="true"
          alt=""
          width={127}
          height={103}
          className={`object-contain transition-transform duration-200 ease-in-out
          ${bigShoeImg !== imgURL.bigShoe ? 'hover:rotate-10 hover:scale-105' : ''}`}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
