function HeroSection() {
  return (
    <div className="bg-gray-800 overflow-hidden">
      <div className="max-w-7xl 2xl:px-0 xl:px-5 md:px-8 px-10 mx-auto py-12 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl leading-10 tracking-tight font-bold text-gray-100 sm:text-5xl sm:leading-none md:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
              Breaking News
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            The latest news from around the world delivered to you in real-time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
