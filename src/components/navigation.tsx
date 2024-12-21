"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AxeIcon, Menu } from "lucide-react";

const routes = [
  { name: "Chat", path: "/", icon: "💬" },
  { name: "Generate Image", path: "/image", icon: "🖼️" },
  { name: "Generate Audio", path: "/audio", icon: "🎵" },
  { name: "Settings", path: "/settings", icon: "⚙️" },
];

function NavContent() {
  const pathname = usePathname();

  return (
    <>
      <div className="px-2 py-4 flex flex-row gap-4">
        <AxeIcon className="w-8 h-8 text-blue-500 mb-2" />
        <h1 className="text-2xl font-bold">ZebAI</h1>
      </div>
      <div className="flex-1 space-y-1">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={`flex items-center p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
              pathname === route.path ? "bg-gray-200 dark:bg-gray-700" : ""
            }`}
          >
            <span className="mr-2">{route.icon}</span>
            {route.name}
          </Link>
        ))}
      </div>
    </>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Icon for Small Screens */}
<button
  onClick={() => setIsOpen(true)}
  className="md:hidden p-2 text-gray-700 dark:text-gray-300"
>
  <Menu size={24} />
</button>

{/* Sidebar for Larger Screens */}
<div className="hidden md:flex flex-col gap-2 p-4 border-r min-h-screen w-64">
  <NavContent />
</div>

{/* Drawer Menu for Small Screens */}
{isOpen && (
  <div className="fixed inset-0 z-50 flex">
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black bg-opacity-50"
      onClick={() => setIsOpen(false)}
    ></div>

    {/* Drawer */}
    <div className="relative bg-white dark:bg-gray-800 w-64 h-screen p-4 shadow-lg">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-gray-700 dark:text-gray-300"
      >
        <Menu size={24} />
      </button>
      <NavContent />
    </div>
  </div>
)}

    </div>
  );
}
