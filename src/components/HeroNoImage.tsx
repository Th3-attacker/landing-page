const HeroNoImage: React.FC = () => {
  return (
    <div className="text-center space-y-6  sm:w-1/2 mx-auto">
      <h1 className="text-3xl sm:text-5xl  font-bold  text-white">
        Our powerful analytics provides invaluable insights.
      </h1>
      <p className="text-gray-500 text-balance">
        Unlock the power of data with our cutting-edge analytics product. Get
        instant insights with our user-friendly Analytics Dashboard, and take
        advantage of our innovative digital credit tokens to reward your
        customers and incentivize engagement.
      </p>
      <button className="hover:bg-white hover:text-black font-bold py-2 px-4 border border-gray-400 bg-transparent rounded-full text-white">
        Download the app
      </button>
    </div>
  );
};
export default HeroNoImage;
