import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-800 flex justify-center items-center">
      <Navbar />
      <h1 className="text-3xl font-bold text-white">Hello world!</h1>;
    </div>
  );
}
