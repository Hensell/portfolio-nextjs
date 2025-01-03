import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-[200vh] bg-gray-100">
        <h1 className="text-center text-2xl font-bold pt-10">Home page</h1>
        <p className="text-center mt-6">Scroll down to test the scrolling behavior!</p>
        <div className="mt-10 space-y-4">
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i} className="text-center text-black">
              This is line {i + 1} of content.
            </p>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
