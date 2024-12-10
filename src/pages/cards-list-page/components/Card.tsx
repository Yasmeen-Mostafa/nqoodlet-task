import ImagesSrc from "../../../common/utils/ImagesSrc";

type CardTypes = {
  lastFour: string;
  isPhysical: boolean;
  status: "active" | "inactive" | "terminated";
};

const Card = ({ lastFour, isPhysical, status }: CardTypes) => {
  const getBackgroundImage = () => {
    if (isPhysical) {
      return `url(${ImagesSrc.physicalCard})`;
    }
    return `url(${ImagesSrc.virtualCard})`;
  };

  const getStatusStyles = (): string => {
    const baseStyles = "transition-transform duration-300 hover:-translate-y-2";

    switch (status) {
      case "active":
        return `${baseStyles} text-white`;
      case "terminated":
        return `${baseStyles} text-gray-700 grayscale`;
      case "inactive":
        return `${baseStyles} text-gray-700 blur-[1.2px]`;
      default:
        return baseStyles;
    }
  };

  return (
    <div
      className={`relative w-80 h-48 rounded-lg shadow-md p-6 flex flex-col justify-between bg-cover bg-center ${getStatusStyles()}`}
      style={{ backgroundImage: getBackgroundImage() }}
    >
      <div className="flex justify-end items-end">
        <img
          src={ImagesSrc.prepaidBankLogo}
          alt="prepaid-logo"
          className="h-6"
        />
      </div>
      <div className="flex items-center justify-between">
        <div
          className={`text-xl font-bold z-100 ${
            isPhysical ? "text-white" : "text-gray-700"
          }`}
        >
          {lastFour}
        </div>
        <img src={ImagesSrc.mastercardLogo} alt="Mastercard" className="h-6" />
      </div>

      {status === "inactive" && (
        <span className="absolute inset-0 flex items-center justify-center">
          <img
            src={ImagesSrc.lock}
            alt="Lock Icon"
            className="h-12 w-12 text-gray-900"
          />
        </span>
      )}
    </div>
  );
};

export default Card;
