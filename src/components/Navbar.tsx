import { HomeIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/16/solid";
import { AcademicCapIcon } from "@heroicons/react/16/solid";
import { CommandLineIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  return (
    <div className="navbar-container flex items-center mt-8 w-full justify-center">
      <div className="navbar-desktop h-20 w-20 flex fixed top-6 z-10">
        <div className="border rounded-full w-fit h-full flex gap-10 px-8 navbar-backdrop">
          <div className="option h-full flex items-center">
            <a href="#home" className="w-full h-full flex items-center">
              <HomeIcon className="fill-white h-2/4" />
            </a>
          </div>
          <div className="option h-full flex items-center">
            <a href="#about" className="w-full h-full flex items-center">
              <UserIcon className="fill-white h-2/4" />
            </a>
          </div>
          <div className="option h-full flex items-center">
            <a href="#timeline" className="w-full h-full flex items-center">
              <AcademicCapIcon className="fill-white h-2/4" />
            </a>
          </div>
          <div className="option h-full flex items-center">
            <a href="#projects" className="w-full h-full flex items-center">
              <CommandLineIcon className="fill-white h-2/4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
