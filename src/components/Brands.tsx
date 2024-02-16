import dell from "../assets/icons/dell-logo.png";
import lattice from "../assets/icons/lattice-logo.png";
import ncr from "../assets/icons/ncr-logo.png";
import pacific from "../assets/icons/pacific-logo.png";
import rakuten from "../assets/icons/rakuten-logo.png";
import ted from "../assets/icons/ted-logo.png";
import zendesk from "../assets/icons/zendesk-logo.png";

const Brands: React.FC = () => {
  return (
    <div className="w-1/2 mx-auto text-center space-y-6 h-[200px] pt-10">
      <p className="text-gray-300">
        Trusted by teams at over 1,000 of the world’s leading organizations
      </p>
      <div className="flex items-center justify-between mx-auto">
        <img src={dell} alt="dell" />
        <img src={zendesk} alt="zendesk" />
        <img src={rakuten} alt="rakuten" />
        <img src={pacific} alt="pacific" />
        <img src={ncr} alt="ncr" />
        <img src={lattice} alt="lattice" />
        <img src={ted} alt="ted" />
      </div>
    </div>
  );
};
export default Brands;
