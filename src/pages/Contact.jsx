const Contact = () => {
  return (
    <div className="w-full min-h-screen flex max-lg:flex-col max-lg:justify-center max-lg:items-center relative bg-neutral-800 px-24 max-md:p-5 py-20 max-md:py-5 overflow-hidden">
      <h1 className="lg:mx-4 lg:absolute lg:h-full lg:top-48 lg:left-12 lg:opacity-20 lg:w-1/2 font-bold py-2 text-9xl max-lg:text-4xl max-lg:text-center bg-gradient-to-r from-accent-pink via-accent-red to-accent-orange bg-clip-text text-transparent opacity-60">
        Tell Me Something <br />I Should Know
      </h1>
      <div className="flex max-lg:flex-col lg:pl-48 w-full gap-8 z-30"></div>
    </div>
  );
};

export default Contact;
