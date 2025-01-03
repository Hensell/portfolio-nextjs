

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-[16px] backdrop-saturate-[200%] bg-[#E2E2DC] bg-opacity-10 py-6">
    <div className="container mx-auto flex justify-between items-center text-black">
      <h1 className="text-xl font-bold">Hensell</h1>
      <ul className="flex space-x-4">
        <li><a href="/" className="">Home</a></li>
        <li><a href="/about" className="">About</a></li>
        <li><a href="/contact" className="">Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}
