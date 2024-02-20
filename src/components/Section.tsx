import card1 from "../assets/icons/card1.png";
import card2 from "../assets/icons/card2.png";
import card3 from "../assets/icons/card3.png";
import wrapperImage from "../assets/images/wrapper-image.png";
export const Section: React.FC = () => {
  return (
    <div className="px-10 py-4 sm:px-32 sm:py-10 text-white text-center mx-auto ">
      <div className="sm:w-1/2 mx-auto space-y-6 mb-10">
        <h1 className="text-4xl sm:text-7xl font-bold ">
          Features that work for your future.
        </h1>
        <p className="text-md">
          check out our amazing features and experience the power of Vaultflow
          for yourself.
        </p>
      </div>
      <div className="grid items-center mx-auto text-start gap-10 sm:grid-cols-2 grid-cols-1">
        <div className="card p-10 space-y-8 ">
          <img src={card1} alt="" className="w-12 h-12" />
          <h2 className="text-left text-4xl font-bold">Analytics Dashboard</h2>
          <p className="text-sm text-justify text-gray-500 mb-8">
            Our Analytics Dashboard provides a clear and intuitive interface for
            you to easily analyze your data. From customizable graphs to
            real-time data updates, our dashboard offers everything you need to
            gain valuable insights.
          </p>
          <button className="">
            <a href="#" className="border-b">
              view dashboard
            </a>
          </button>
        </div>
        <div className="card p-10 space-y-8 ">
          <img src={card2} alt="" className="w-12 h-12" />
          <h2 className="text-left text-4xl font-bold">
            Digital Credit Tokens
          </h2>
          <p className="text-base sm:text-sm text-justify text-gray-500 mb-8">
            Reward your customers and incentivize engagement with our innovative
            digital credit tokens. Our tokens can be customized to match your
            branding, and are a flexible and scalable way to drive customer
            loyalty and encourage repeat business.
          </p>
          <button className="">
            <a href="#" className="border-b">
              view Tokens
            </a>
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-10 text-start ">
        <div className="card p-10 space-y-8 ">
          <img src={card3} alt="" className="w-12 h-12" />
          <h2 className="text-left text-4xl font-bold">Code collaboration</h2>
          <p className="text-sm text-justify text-gray-500 mb-8">
            Our advanced code synchronization technology ensures that your data
            is always up-to-date and accurate, no matter where it's coming from.
            Whether you're integrating data from multiple sources or working
            with a team of developers, our synchronization technology makes it
            easy to collaborate and ensure that your data is consistent and
            reliable.
          </p>
          <button className="">
            <a href="#" className="border-b">
              View code collaboration
            </a>
          </button>
        </div>
        <img src={wrapperImage} alt="" className="hover:animate-bounce" />
      </div>
    </div>
  );
};
