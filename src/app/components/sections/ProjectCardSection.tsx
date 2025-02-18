import Image from "next/image";

export default function App() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 w-screen h-auto bg-secondarybg">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="relative w-full h-64 overflow-hidden group">
          <div className="font-robotoSerif absolute inset-0 bg-secondarybg flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
            <h3 className="text-xl font-bold mb-2">QUANTIX {index + 1}</h3>
            <p className=" text-sm">QUANTIX WEBSITE {index + 1}</p>
          </div>

          <Image
            src={`/projects/quantixPage.png`}
            alt={`project ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity duration-1000"
          />
        </div>
      ))}
    </section>
  );
}
