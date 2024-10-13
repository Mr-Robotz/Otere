import Link from "next/link";
import Button from "./button";

const Links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "How tere works",
    href: "/",
  },
  {
    id: 3,
    name: "Tere benefits",
    href: "/",
  },
];

const NavLinks = () => {
  return (
    <div className="flex gap-10 items-center">
      {Links.map((link) => (
        <Link href={link.href} key={link.href}>
          {link.name}
        </Link>
      ))}

      <Button name="Help Center" />
    </div>
  );
};
export default NavLinks;
