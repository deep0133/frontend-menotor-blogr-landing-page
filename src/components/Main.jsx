import { useState, useCallback } from "react";
import imageMobile from "../assets/images/illustration-editor-mobile.svg";
import imageDesktop from "../assets/images/illustration-editor-desktop.svg";
import laptopMobile from "../assets/images/illustration-laptop-mobile.svg";
import laptopDesktop from "../assets/images/illustration-laptop-desktop.svg";
import bgMobilePattern from "../assets/images/bg-pattern-circles.svg";
import phones from "../assets/images/illustration-phones.svg";

export default function Main() {
  const [laptop, setLaptop] = useState({
    laptop: window.innerWidth >= 600 ? laptopDesktop : laptopMobile,
    image: window.innerWidth >= 600 ? imageDesktop : imageMobile,
  });

  const handleResize = useCallback(() => {
    setLaptop(
      window.innerWidth >= 601
        ? {
            laptop: laptopDesktop,
            image: imageDesktop,
          }
        : {
            laptop: laptopMobile,
            image: imageMobile,
          }
    );
  }, []);

  window.addEventListener("resize", handleResize);

  return (
    <>
      <section className="future-design py-8 flex flex-col">
        <h1 className="text-xl p-5 basis-full text-center">
          Designed for the future
        </h1>
        <div className="flex flex-col overflow-hidden min-[601px]:flex-row basis-full">
          <div className="relative min-[601px]:basis-[60%] min-[700px]:basis-[50%] min-[800px]:basis-[40%] min-[601px]:left-12 order-first min-[601px]:order-last">
            <img
              src={laptop.image}
              className="object-contain relative mx-auto min-[601px]:float-right"
              alt=""
            />
          </div>
          <div className="mx-auto px-10 min-[600px]:pr-10 min-[601px]:flex min-[601px]:justify-center min-[601px]:items-center min-[601px]:flex-col text-center min-[601px]:text-start min-[601px]:basis-1/2">
            <div>
              <h2 className="text-xl  mx-auto px-5 min-[601px]:px-0 py-3">
                Introducing an extensible editor
              </h2>
              <p className="text-xs text-gray-600 font-extralight">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div>
              <h2 className="text-xl  mx-auto px-5 pt-8 min-[601px]:px-0  pb-3">
                Robust content management
              </h2>
              <p className="text-xs text-gray-600 font-extralight">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="phones relative mt-16 min-[270px]:mt-28 min-[450px]:mt-32  ">
        <div className="background min-[600px]:flex rounded-tr-[90px] relative bg-gradient-to-b from-[hsl(237,_17%,_21%)] to-[hsl(237,_23%,_32%)] rounded-bl-[90px]">
          <div className="mobiles mx-auto">
            <div className="pattern-img min-[601px]:h-[250px] overflow-hidden">
              <img
                src={bgMobilePattern}
                className="relative -top-28 min-[601px]:-top-20"
                alt=""
              />
            </div>
            <img
              src={phones}
              className="absolute left-[15%] w-[70%] min-[601px]:w-auto min-[601px]:max-h-[22rem] min-[750px]:w-[24rem] min-[601px]:left-2 -top-20 min-[270px]:-top-24 min-[320px]:-top-28 min-[450px]:-top-36 min-[601px]:-top-10 min-[1000px]:-top-11"
              alt=""
            />
          </div>
          <div className="art-content px-10 -mt-36 min-[601px]:flex min-[601px]:flex-col min-[601px]:justify-center min-[601px]:mt-10 min-[601px]:ml-20 min-[280px]:-mt-40 min-[350px]:-mt-44 min-[400px]:-mt-[40%] text-white space-y-3 text-center min-[601px]:text-start pb-10">
            <h1 className="text-3xl font-medium">
              State of the Art Infrastructure
            </h1>
            <p className="text-xs">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </section>

      <section className="laptop py-8 flex flex-col min-[601px]:flex-row">
        <div className=" relative min-[601px]:basis-[60%] min-[700px]:basis-[50%] min-[800px]:basis-[40%] min-[601px]:-left-24">
          <img
            src={laptop.laptop}
            className="object-contain relative mx-auto min-[601px]:float-left"
            alt="laptop"
          />
        </div>
        <div className="mx-auto px-10 min-[601px]:pr-16 min-[600px]:pr-10 min-[601px]:flex min-[601px]:justify-center min-[601px]:items-center min-[601px]:flex-col text-center min-[601px]:text-start min-[601px]:basis-1/2">
          <div>
            <h2 className="text-xl  mx-auto px-5 min-[601px]:px-0 py-3">
              Free, open, simple
            </h2>
            <p className="text-xs text-gray-600 font-extralight">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div>
            <h2 className="text-xl  mx-auto px-5 pt-8 min-[601px]:px-0  pb-3">
              Powerful tooling
            </h2>
            <p className="text-xs text-gray-600 font-extralight">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
