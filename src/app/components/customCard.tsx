import React from "react";

type CustomCardProps = {
  footer: React.ReactNode;
  imageUrl: string;
  onClick?: () => void; 
};

const CustomCard: React.FC<CustomCardProps> = ({ footer, imageUrl, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative rounded-lg overflow-hidden shadow-lg min-h-[300px] min-w-[300px] cursor-pointer"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="backdrop-blur-sm backdrop-saturate-[111%] bg-white bg-opacity-20 p-4 rounded-lg absolute bottom-0 w-full z-10 flex justify-items-center items-center">
        <p>{footer}</p>
      </div>
    </div>
  );
};

export default CustomCard;
