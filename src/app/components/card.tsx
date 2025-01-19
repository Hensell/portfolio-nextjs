import React from "react";
import Link from "next/link";
type CustomCardProps = {
  footer: React.ReactNode;
  imageUrl: string;
  navigateTo: string;
};

const CustomCard: React.FC<CustomCardProps> = ({
  footer,
  imageUrl,
  navigateTo,
}) => {
  return (
    <Link href={navigateTo}>
      <div
        className="relative rounded-lg overflow-hidden shadow-lg min-h-[300px]  min-w-[300px]"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="backdrop-blur-sm backdrop-saturate-[111%] bg-white bg-opacity-20 p-4 rounded-lg absolute bottom-0 w-full z-10">
          {footer}
        </div>
      </div>
    </Link>
  );
};

export default CustomCard;
