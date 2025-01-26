import React from "react";

interface SubTitleProps {
  text: string; 
}

const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  return (
    <h2 className="text-[clamp(0.5rem,calc(2.5vw+1rem),2.5rem)] font-medium text-center md:text-left mb-10">
      {text}
    </h2>
  );
};

export default SubTitle;
