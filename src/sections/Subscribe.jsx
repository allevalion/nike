import Button from '../components/Button';

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex items-center justify-between gap-10 max-container max-lg:flex-col"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold text-center">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <label htmlFor="subscribe-email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="subscribe-email"
          name="email"
          placeholder="subscribe@nike.com"
          autoComplete="email"
          className="input"
        />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button
            onClick={() => (window.location.href = '/')}
            label="Sign Up"
            hoverTransition="red-hover"
            fullWidth
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
