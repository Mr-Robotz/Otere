import Logo from "./ui/logo";
import NavLinks from "./ui/nav-links";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="flex justify-between items-center  py-10">
          <Logo />
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
