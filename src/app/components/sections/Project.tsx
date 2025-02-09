export default function App() {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  sm:px-16 px-0">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="bg-green-500 text-white p-6 text-center h-96"
        >
          Auto Item {index + 1}
        </div>
      ))}
    </div>
  );
}
