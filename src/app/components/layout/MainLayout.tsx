import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage: `url('/background.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};
