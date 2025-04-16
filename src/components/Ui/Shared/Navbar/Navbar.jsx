import Container from "../Container/Container";
import NavItem from "./NavItem";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      pageName: "Home",
    },
    {
      path: "/about",
      pageName: "About",
    },
    {
      path: "/blog",
      pageName: "Blog",
    },
  ];

  return (
    <div className="bg-sky-800 text-white  sticky top-0 z-[1000]">
      <Container>
        <div className="flex items-center justify-between h-[60px] ">
          <h3 className="text-3xl font-extrabold uppercase ">
            <span className="text-red-400">Port</span>follio
          </h3>
          <ul className="flex items-center gap-5 h-full ">
            {navItems.map((item) => (
              <NavItem key={item.pageName} item={item} />
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
