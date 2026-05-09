import React, { useState, useEffect } from "react";
import { FaHome, FaBriefcase, FaProjectDiagram, FaEnvelope, FaTools } from "react-icons/fa";

const NAV_ITEMS = [
  { id: "home",       icon: FaHome,            label: "Home"       },
  { id: "experience", icon: FaBriefcase,        label: "Experience" },
  { id: "skills",     icon: FaTools,            label: "Skills"     },
  { id: "projects",   icon: FaProjectDiagram,   label: "Projects"   },
  { id: "contact",    icon: FaEnvelope,         label: "Contact"    },
];

const MobileNav = () => {
  const [active, setActive] = useState("home");

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      {/* Frosted glass bar */}
      <div className="mx-3 mb-3 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl shadow-[0_-4px_30px_rgba(0,0,0,0.5)] px-2 py-2 flex items-center justify-around">
        {NAV_ITEMS.map(({ id, icon: Icon, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-200 relative"
            >
              {isActive && (
                <span className="absolute inset-0 rounded-xl bg-yellow-500/15" />
              )}
              <Icon
                size={18}
                className={`relative z-10 transition-colors duration-200 ${
                  isActive ? "text-yellow-400" : "text-gray-500"
                }`}
              />
              <span
                className={`relative z-10 text-[10px] font-semibold tracking-wide transition-colors duration-200 ${
                  isActive ? "text-yellow-400" : "text-gray-600"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
