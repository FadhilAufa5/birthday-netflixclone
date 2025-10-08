import { Bell, ChevronDown, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import detogd from "../assets/pics/detogd.jpg";


const NotificationBell = () => {
  const [showNotif, setShowNotif] = useState(false);

  return (
    <div className="relative">
     
      <Bell
        size={22}
        className="cursor-pointer hover:text-red-500 duration-200"
        onClick={() => setShowNotif(!showNotif)}
      />
    
      <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
        1
      </span>

    
      <AnimatePresence>
        {showNotif && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 mt-3 bg-black/90 backdrop-blur-md rounded-lg text-sm text-white w-64 shadow-lg border border-white/10 p-3 z-50"
          >
            <div className="flex items-start gap-3">
              <div className="bg-red-600/70 rounded-full w-8 h-8 flex items-center justify-center">
                
              </div>
              <div className="flex-1">
                <p className="font-semibold text-red-400">detooseto</p>
                <p className="text-xs text-gray-300 mt-1">
                  Happy Birthday, Pyo Ye-jin, semoga harimu penuh kebahagiaan! 
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowNotif(false)}
              className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white text-xs py-1.5 rounded-md duration-200"
            >
              Tutup
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const menus = ["Home", "Series", "Movies", "New & Popular", "My List"];
  const profileMenus = ["Profile", "Settings", "Logout"];

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
            {menus.map((title) => (
              <a
                href="#"
                key={title}
                className="hover:text-red-500 duration-300 ease-in-out"
              >
                {title}
              </a>
            ))}
          </nav>
        </div>

        
        <div className="right flex items-center gap-5 text-white">
         
          <motion.div
            animate={{
              boxShadow: isFocused
                ? "0 0 10px 2px rgba(255,0,0,0.7)"
                : "0 0 0px rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.3 }}
            className="hidden sm:flex items-center gap-2 bg-[#222]/60 px-3 py-1 rounded-full backdrop-blur-md border border-transparent focus-within:border-red-500"
          >
            <Search size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm focus:outline-none text-white placeholder:text-gray-400 w-28 lg:w-48"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </motion.div>

          
          <div className="sm:hidden relative">
            <Search
              size={22}
              className="cursor-pointer"
              onClick={() => setShowSearch(true)}
            />
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -left-24 top-10 flex items-center bg-black/90 px-3 py-2 rounded-full w-[200px] border border-red-600 shadow-[0_0_10px_rgba(255,0,0,0.7)]"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent text-sm focus:outline-none text-white placeholder:text-gray-400 flex-1"
                  />
                  <X
                    size={12}
                    className="cursor-pointer xl-5 text-gray-400"
                    onClick={() => setShowSearch(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

         
          <NotificationBell />

         
          <div className="relative">
            <button
              onClick={() => setOpenProfile(!openProfile)}
              className="flex gap-2 items-center cursor-pointer"
            >
              <img
                src={detogd}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-red-500"
              />
              <ChevronDown
                size={20}
                className={`duration-300 ${openProfile ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {openProfile && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 bg-black/80 backdrop-blur-lg rounded-lg text-sm text-white w-40 shadow-lg border border-white/10"
                >
                  {profileMenus.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-5 py-2 hover:bg-red-600/70 rounded-md duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </header>
  );
};

export default Navbar;
