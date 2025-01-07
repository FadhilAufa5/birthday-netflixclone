import { Bell, ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  const menus = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Series",
    },
    {
      id: 3,
      title: "Movies",
    },
    {
      id: 4,
      title: "New and Popular",
    },
    {
      id: 5,
      title: "My List",
    },
  ];

  const profileMenus = [
    {
      id: 1,
      title: "Profile",
    },
    {
      id: 2,
      title: "Settings",
    },
    {
      id: 1,
      title: "Logout",
    },
  ];
  return (
    <header className="flex w-full bg-gradient-to-b from-[#000]/90 fixed top-0 z-20 justify-center">
      <main className="flex items-center justify-between w-full p-5 lg:py-7 lg:px-10 max-w-screen-2xl">
        <div className="left flex items-center gap-10">
          <a className="logo-container w-[100px]" href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt="logo"
            />
          </a>
          <nav className="menus text-white lg:flex items-center gap-5 text-sm font-medium hidden">
            {menus.map((menu) => (
              <a
                href="#"
                key={menu.id}
                className="hover:text-red-500 duration-300 ease-in-out"
              >
                {menu.title}
              </a>
            ))}
          </nav>
        </div>
        <div className="right flex items-center gap-5 text-white">
          <Search size={20} cursor={"pointer"} />
          <Bell size={20} cursor={"pointer"} />
          <button className="profile flex gap-2 items-center cursor-pointer group relative">
            <img
              src="data:image/jpeg;base64,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"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover "
            />
            <ChevronDown size={20} />
            <div className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-300 ease-in-out top-full bg-black/70 right-0 py-3 mt-3  rounded-md flex flex-col gap-2 text-sm font-medium">
              {profileMenus.map((menu) => (
                <a
                  href="#"
                  className="hover:text-red-500 duration-300 ease-in-out px-10"
                >
                  {menu.title}
                </a>
              ))}
            </div>
          </button>
        </div>
      </main>
    </header>
  );
};

export default Navbar;
