import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap justify-between gap-20 itmes-center max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
            <span className="sr-only">Home</span>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <a
                href={icon.link}
                key={icon.alt}
                className="flex items-center justify-center w-12 h-12 transition-colors duration-300 bg-white rounded-full cursor-pointer hover:bg-white-400"
              >
                <img src={icon.src} alt={icon.alt} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between flex-1 gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-2xl font-medium leading-normal text-white font-montserrat">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="text-base leading-normal transition-colors duration-300 cursor-pointer text-white-400 font-montserrat hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <a
          className="flex items-center justify-start flex-1 gap-2 cursor-pointer font-montserrat hover:underline"
          href="/"
        >
          <img
            src={copyrightSign}
            alt=""
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </a>
        <a href="/" className="cursor-pointer font-montserrat hover:underline">
          Terms & Conditions
        </a>
      </div>
      <div>
        <p className="text-white-400 mt-10 font-montserrat max-w-[70%] max-sm:justify-self-center max-sm:text-center">
          This project is a personal, non-commercial educational project created
          for learning purposes only. It is not affiliated with, endorsed by, or
          connected to Nike, Inc. in any way. All trademarks, logos, and brand
          names are the property of their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
