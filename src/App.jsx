import React from 'react';
import Nav from './components/Nav';
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from './sections';

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <div className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </div>
      <div className="padding">
        <PopularProducts />
      </div>
      <div className="padding">
        <SuperQuality />
      </div>
      <div className="padding">
        <Services />
      </div>
      <div className="py-10 padding-x">
        <SpecialOffer />
      </div>
      <div className="padding bg-pale-blue">
        <CustomerReviews />
      </div>
      <div className="w-full py-16 padding-x sm:py-32">
        <Subscribe />
      </div>
      <div className="pb-8 bg-black padding-x padding-t">
        <Footer />
      </div>
    </main>
  );
};

export default App;
