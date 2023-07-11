import Hambergur from "../assets/images/icon-hamburger.svg";
import CrossIcon from "../assets/images/icon-close.svg";
import dropDark from "../assets/images/icon-arrow-dark.svg";
import dropLight from "../assets/images/icon-arrow-light.svg";
import { useCallback, useState } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubList, setShowSubList] = useState({
    product: false,
    company: false,
    connect: false,
  });

  const [dropIcon, setDropIcon] = useState(
    window.innerWidth >= 600 ? dropLight : dropLight
  );

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const showSubListHandler = (val) => {
    if (val === "product") {
      setShowSubList({
        product: !showSubList.product,
        company: false,
        connect: false,
      });
    } else if (val === "company") {
      setShowSubList({
        product: false,
        company: !showSubList.company,
        connect: false,
      });
    } else if (val === "connect") {
      setShowSubList({
        product: false,
        company: false,
        connect: !showSubList.connect,
      });
    }
  };

  const resizeHandler = useCallback(() => {
    setDropIcon(window.innerWidth >= 600 ? dropLight : dropDark);
  }, []);

  window.addEventListener("resize", resizeHandler);

  return (
    <div className="flex relative justify-between items-center py-6 px-5">
      <h1 className="logo min-[600px]:hidden text-xl font-bold">BLOGR</h1>
      {/* Destop Menu */}
      <div className="desktop-menu w-full px-2 min-[700px]:px-[5%] hidden min-[600px]:block">
        <div className="links flex justify-between">
          <div className="nav-link py-2 text-white gap-8 flex rounded-md text-center">
            <h1 className="logo flex text-xl font-bold">BLOGR</h1>
            <ul className=" space-x-4 min-[700px]:space-x-6 flex">
              <li
                className="w-[90%] mx-auto  relative"
                onClick={() => {
                  showSubListHandler("product");
                }}>
                <div className="flex justify-center items-center space-x-2 hover:cursor-pointer hover:underline">
                  <p>Product</p>
                  <img
                    src={dropIcon}
                    className={` ${
                      showSubList.product ? "rotate-180" : "rotate-0"
                    }`}
                    alt=""
                  />
                </div>
                <ul
                  className={`${
                    showSubList.product ? "block" : "hidden"
                  } space-y-3 bg-slate-100 absolute text-start min-[600px]:text-black px-6 py-3 my-3 rounded-md`}>
                  <li className="hover:cursor-pointer hover:font-medium">
                    Overview
                  </li>
                  <li className="hover:cursor-pointer hover:font-medium">
                    Pricing
                  </li>
                  <li className="hover:cursor-pointer hover:font-medium">
                    Marketplace
                  </li>
                  <li className="hover:cursor-pointer hover:font-medium">
                    Features
                  </li>
                  <li className="hover:cursor-pointer hover:font-medium">
                    Integrations
                  </li>
                </ul>
              </li>
              <li
                className="w-[90%] mx-auto relative"
                onClick={() => {
                  showSubListHandler("company");
                }}>
                <div className="flex justify-center items-center space-x-2 hover:cursor-pointer hover:underline">
                  <p>Company</p>
                  <img
                    src={dropIcon}
                    className={` ${
                      showSubList.company ? "rotate-180" : "rotate-0"
                    }`}
                    alt=""
                  />
                </div>
                <ul
                  className={`${
                    showSubList.company ? "block" : "hidden"
                  } space-y-3 bg-slate-100 absolute min-[600px]:text-black text-start px-5 py-3 my-3 rounded-md`}>
                  <li className="hover:cursor-pointer hover:font-medium">
                    About
                  </li>
                  <li className="hover:cursor-pointer hover:font-medium">
                    Team
                  </li>
                  <li className="hover:cursor-pointer hover:font-medium">
                    Blog
                  </li>
                  <li className="hover:cursor-pointer hover:font-medium">
                    Careers
                  </li>
                </ul>
              </li>
              <li
                className="w-[90%] mx-auto relative"
                onClick={() => {
                  showSubListHandler("connect");
                }}>
                <div className="flex justify-center items-center space-x-2 hover:cursor-pointer hover:underline">
                  <p>Connect</p>
                  <img
                    src={dropIcon}
                    className={` ${
                      showSubList.connect ? "rotate-180" : "rotate-0"
                    }`}
                    alt=""
                  />
                </div>
                <ul
                  className={` ${
                    showSubList.connect ? "block" : "hidden"
                  } space-y-3 absolute min-[600px]:text-black text-start px-5  bg-slate-100 py-3 my-3 rounded-md`}>
                  <li className="hover:cursor-pointer hover:font-medium">
                    Contact
                  </li>
                  <li className="hover:cursor-pointer hover:font-medium">
                    Newsletter
                  </li>
                  <li className="hover:cursor-pointer hover:font-medium">
                    LinkedIn
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="login-signup-btn flex gap-5">
            <button className="">Login</button>
            <button className="mx-auto px-6 rounded-full bg-white text-black hover:bg-[#fd7d86] hover:text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="mobile-menu shadow-2xl min-[600px]:hidden overflow-auto z-50">
        <div className="hambergerIcon-links w-full ">
          {!showMenu ? (
            <img
              src={Hambergur}
              alt="hambergur-icon"
              onClick={showMenuHandler}
              className="hambergur-icon hover:cursor-pointer"
            />
          ) : (
            <>
              <div className="links overflow-auto">
                <img
                  src={CrossIcon}
                  alt="cross-icon"
                  onClick={showMenuHandler}
                  className={`hambergur-icon hover:cursor-pointer`}
                />
                <div className="nav-link py-5 border bg-white text-black absolute left-[5%] w-[90%] top-16 rounded-md text-center">
                  <ul className="space-y-5">
                    <li
                      className="w-[90%] mx-auto relative"
                      onClick={() => {
                        showSubListHandler("product");
                      }}>
                      <div className="flex justify-center items-center space-x-2 hover:cursor-pointer hover:underline">
                        <p>Product</p>
                        <img
                          src={dropIcon}
                          className={` ${
                            showSubList.product ? "rotate-180" : "rotate-0"
                          }`}
                          alt=""
                        />
                      </div>
                      <ul
                        className={`${
                          showSubList.product ? "block" : "hidden"
                        } space-y-3 bg-slate-100 py-3 my-3 rounded-md`}>
                        <li className="hover:cursor-pointer hover:font-medium">
                          Overview
                        </li>
                        <li className="hover:cursor-pointer hover:font-medium">
                          Pricing
                        </li>
                        <li className="hover:cursor-pointer hover:font-medium">
                          Marketplace
                        </li>
                        <li className="hover:cursor-pointer hover:font-medium">
                          Features
                        </li>
                        <li className="hover:cursor-pointer hover:font-medium">
                          Integrations
                        </li>
                      </ul>
                    </li>
                    <li
                      className="w-[90%] mx-auto relative"
                      onClick={() => {
                        showSubListHandler("company");
                      }}>
                      <div className="flex justify-center items-center space-x-2 hover:cursor-pointer hover:underline">
                        <p>Company</p>
                        <img
                          src={dropIcon}
                          className={` ${
                            showSubList.company ? "rotate-180" : "rotate-0"
                          }`}
                          alt=""
                        />
                      </div>
                      <ul
                        className={`${
                          showSubList.company ? "block" : "hidden"
                        } space-y-3 bg-slate-100 py-3 my-3 rounded-md`}>
                        <li className="hover:cursor-pointer hover:font-medium">
                          About
                        </li>
                        <li className="hover:cursor-pointer hover:font-medium">
                          Team
                        </li>
                        <li className="hover:cursor-pointer hover:font-medium">
                          Blog
                        </li>
                        <li className="hover:cursor-pointer hover:font-medium">
                          Careers
                        </li>
                      </ul>
                    </li>
                    <li
                      className="w-[90%] mx-auto relative"
                      onClick={() => {
                        showSubListHandler("connect");
                      }}>
                      <div className="flex  justify-center items-center space-x-2">
                        <p>Connect</p>
                        <img
                          src={dropIcon}
                          className={` ${
                            showSubList.connect ? "rotate-180" : "rotate-0"
                          }`}
                          alt=""
                        />
                      </div>
                      <ul
                        className={` ${
                          showSubList.connect ? "block" : "hidden"
                        } space-y-3 bg-slate-100 py-3 my-3 rounded-md`}>
                        <li className="hover:cursor-pointer hover:font-medium">
                          Contact
                        </li>
                        <li className="hover:cursor-pointer hover:font-medium">
                          Newsletter
                        </li>
                        <li className="hover:cursor-pointer hover:font-medium">
                          LinkedIn
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <hr className="my-5 w-[90%] mx-auto" />
                  <div className="login-signup-btn flex flex-col gap-5">
                    <button>Login</button>
                    <button className=" border w-fit mx-auto px-8 rounded-full bg-gradient-to-r from-[hsl(13,_100%,_72%)] to-[hsl(353,_100%,_62%)] text-white py-2 hover:bg-[#fd7d86]">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
