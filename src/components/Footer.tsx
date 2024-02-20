import logo from "../assets/icons/logo.png";
const Footer: React.FC = () => {
  return (
    <footer className=" sm:flex p-10 sm:p-20 justify-between space-y-8 text-center sm:text-left">
      <div className="column1 space-y-8">
        <div className="text-gray-500 space-y-2">
          <h2 className="text-white font-bold text-2xl">Contact</h2>
          <p>
            <a href="">Work inquires: work@vaultflow.com</a>
          </p>
          <p>
            <a href="">PR and speaking: press@vaultflow.com</a>
          </p>
          <p>
            <a href="">New business: newbusiness@vaultflow.com</a>
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-white">Careers</h2>
          <p className="text-gray-500">Careers@vaultflow.com</p>
        </div>
        <p className="text-gray-500">@2023 Vaultflow. All Rights Reserved.</p>
      </div>
      <div className="column1 space-y-8">
        <div className="text-gray-500 space-y-2">
          <h2 className="text-white font-bold text-2xl">Address</h2>
          <p>
            <a href="">396 11th Street, Floor 2</a>
          </p>
          <p>
            <a href="">San Francisco. CA 94103</a>
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-white">Social</h2>
          <p className="text-gray-500">Twitter</p>
          <p className="text-gray-500">Instagram</p>
          <p className="text-gray-500">Tik Tok</p>
        </div>
      </div>
      <div className="flex place-items-end">
        <div className="flex space-x-2 items-center">
          <img src={logo} alt="logo" className="h-5 w-5" />
          <h2 className="text-white font-bold text-xl">Vaultflow</h2>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
