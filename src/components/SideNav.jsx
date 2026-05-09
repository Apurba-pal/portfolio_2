import React, { useState, useEffect } from "react";
import { FaHome, FaBriefcase, FaProjectDiagram, FaEnvelope, FaTools } from "react-icons/fa";

const NAV_ITEMS = [
  { id: "home",       icon: FaHome,          label: "Home"       },
  { id: "experience", icon: FaBriefcase,      label: "Experience" },
  { id: "skills",     icon: FaTools,          label: "Skills"     },
  { id: "projects",   icon: FaProjectDiagram, label: "Projects"   },
  { id: "contact",    icon: FaEnvelope,       label: "Contact"    },
];

const SideNav = () => {
  const [active, setActive]   = useState("home");
  const [hovered, setHovered] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.35 }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      {NAV_ITEMS.map(({ id, icon: Icon, label }) => {
        const isActive  = active  === id;
        const isHovered = hovered === id;

        return (
          <div key={id} className="relative flex items-center">
            {/* Tooltip */}
            <div
              className={`
                absolute right-8 px-2.5 py-1 rounded-full
                text-[11px] font-semibold whitespace-nowrap
                bg-black/85 border border-white/10 text-yellow-400
                pointer-events-none select-none
                transition-all duration-200
                ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"}
              `}
            >
              {label}
            </div>

            {/* Icon button */}
            <button
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={label}
              className={`
                 flex items-center justify-center rounded-full
                border transition-all duration-250
                ${isActive
                  ? "bg-yellow-500 border-yellow-500 text-black shadow-[0_0_10px_3px_rgba(234,179,8,0.45)]"
                  : "bg-transparent border-white/20 text-gray-500 hover:border-yellow-500/60 hover:text-yellow-400"
                }
              `}
            >
              <Icon size={11} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
