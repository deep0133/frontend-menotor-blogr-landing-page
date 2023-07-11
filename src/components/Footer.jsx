function Footer() {
  return (
    <section className="footer min-[601px]:pt-16 text-white flex flex-col min-[601px]:flex-row justify-center items-  rounded-tr-[70px] pb-16 bg-[hsl(240,_10%,_16%)]">
      <h1 className="text-4xl min-[601px]:basis-[30%] basis-0 py-16 min-[600px]:py-0 text-center font-bold">
        Blogr
      </h1>
      <div className="links text-center min-[601px]:text-start min-[601px]:basis-[70%] flex flex-col min-[601px]:flex-row min-[601px]:justify-evenly justify-center ">
        <div className="list-1">
          <h3 className="mt-0 mb-6 font-semibold text-lg">Product</h3>
          <ul className="space-y-2">
            <li className="hover:underline hover:cursor-pointer">Overview</li>
            <li className="hover:underline hover:cursor-pointer">Pricing</li>
            <li className="hover:underline hover:cursor-pointer">
              MarketPlace
            </li>
            <li className="hover:underline hover:cursor-pointer">Features</li>
            <li className="hover:underline hover:cursor-pointer">
              Integrations
            </li>
          </ul>
        </div>
        <div className="list-2">
          <h3 className="mt-10 min-[600px]:mt-0 mb-4 font-semibold text-lg">
            Company
          </h3>
          <ul className="space-y-2">
            <li className="hover:underline hover:cursor-pointer">About</li>
            <li className="hover:underline hover:cursor-pointer">Team</li>
            <li className="hover:underline hover:cursor-pointer">Blog</li>
            <li className="hover:underline hover:cursor-pointer">Careers</li>
          </ul>
        </div>
        <div className="list-3">
          <h3 className="mt-10 min-[600px]:mt-0 mb-4  font-semibold text-lg">
            Connect
          </h3>
          <ul className="space-y-2">
            <li className="hover:underline hover:cursor-pointer">Contact</li>
            <li className="hover:underline hover:cursor-pointer">Newsletter</li>
            <li className="hover:underline hover:cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
