import NavBar from "./NavBar";
import bgMobile from "../assets/images/bg-pattern-intro-mobile.svg";
import bgDesktop from "../assets/images/bg-pattern-intro-desktop.svg";

import { useCallback, useState } from "react";

function Header() {
  const [bg, setBg] = useState(window.innerWidth >= 600 ? bgDesktop : bgMobile);

  const handleResize = useCallback(() => {
    setBg(window.innerWidth >= 600 ? bgDesktop : bgMobile);
  }, []);

  window.addEventListener("resize", handleResize);
  return (
    <header
      className={`bg-[hsl(13,_100%,_72%)] border overflow-hidden text-white pb-10 rounded-bl-[80px]`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundBlendMode: "soft-light",
        backgroundSize: "autos",
      }}>
      <NavBar />

      <main className="my-8 text-center">
        <h1 className=" text-3xl w-[270px] min-[600px]:w-auto font-medium min-[700px]:font-semibold min-[800px]:font-bold box-border mx-auto">
          A modern publishing platform
        </h1>
        <p className="py-3">Grow your audience and build your online brand</p>
        <div className="btn space-x-5 mt-5 font-medium text-sm">
          <button className=" bg-white  hover:text-white hover:bg-[#fd7d86] text-black px-4 rounded-full py-2">
            Start for Free
          </button>
          <button className="border px-4 py-2 rounded-full hover:text-[#fd7d86] hover:bg-white">
            Learn More
          </button>
        </div>
      </main>
    </header>
  );
}

export default Header;
