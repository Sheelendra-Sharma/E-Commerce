import { FcSearch } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CardcountBedge from "./CardcountBedge";

function Navbar() {
  return (
    <div className="container">
    <div className="flex flex-col sm:flex-row justify-between items-center pt-8 px-4 sm:px-8">
      <img className="w-[120px] h-[30px] mb-4 sm:mb-0" src="/Logo.webp" alt="D-Mart" />

      <div className="relative w-full max-w-[500px] mb-4 sm:mb-0">
        <input
          className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
          type="text"
          placeholder="Search Products..."
        />
        <FcSearch
          className="absolute top-0 right-0 mt-4 mr-5 text-grey-500"
          size={20}
        />
      </div>

      <div className="flex gap-4 cursor-pointer">
        <div className="icon___wrapper hover:bg-slate-300">
          <AiOutlineUser />
        </div>
        <div className="icon___wrapper relative hover:bg-slate-300">
          <AiOutlineShoppingCart />
          <CardcountBedge size="w-[25px] h-[25px]" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
