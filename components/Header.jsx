// import { Navigation } from "./Navigation";
import { Logo } from "./Logo";

export const Header = () => (
  <div
    className={`flex z-10 justify-between mr-4 mr-4 md:mr-0 md:ml-0 pt-4 h-14 fixed md:relative top-0 pl-4 md:pl-16 pr-4 md:pr-16 md:pt-12 md:mb-8 w-full md:h-28`}
  >
    <h1 className="uppercase text-2xl">arc-ggd</h1>
    <div>
      <Logo />
    </div>
  </div>
);
