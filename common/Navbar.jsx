"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import FlightEnquiryModal from "../component/FlightEnquiryModal";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  const handleclick = () => {
    setLoading(true);
    setOpenMenu(false);
    router.push("/");
    setTimeout(() => setLoading(false), 700);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen fixed inset-0 bg-white backdrop-blur-sm z-50">
        <DotLottieReact
          src="https://lottie.host/ae5fb18b-4cf0-4446-800f-111558cf9122/InmwUHkQVs.lottie"
          loop
          autoplay
          style={{ width: 100, height: 100 }}
        />
      </div>
    );
  }

  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-40">
        <div className="flex items-center justify-between px-6 md:px-10 py-4">
          {/* Logo */}
          <p
            onClick={handleclick}
            className="
    text-xl md:text-2xl font-extrabold cursor-pointer
    bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600
    bg-clip-text text-transparent
    tracking-wide
    hover:scale-105 transition
  "
          >
            TheEliteTravel
          </p>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center gap-10 text-[17px]">
            <button
              onClick={handleclick}
              className="text-gray-700 hover:text-blue-500 transition"
            >
              Flights
            </button>

            <button
              onClick={() => {
                setLoading(true);
                router.push("/deal");
                setTimeout(() => setLoading(false), 700);
              }}
              className="border border-blue-400 text-blue-500 px-4 py-1 rounded-full
  hover:bg-blue-500 hover:text-white transition"
            >
              Deals
            </button>

            <button
              onClick={() => router.push("/about-us")}
              className="text-gray-700 hover:text-blue-500 transition"
            >
              About Us
            </button>
          </div>

          {/* Sign For Inquiry (Right) */}
          <div className="hidden md:flex">
            <button
              onClick={() => setOpenModal(true)}
              className="border border-blue-400 text-blue-500 px-5 py-1.5 rounded-xl
              hover:bg-blue-500 hover:text-white transition"
            >
              Sign For Inquiry
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-black"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {openMenu && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-[16px]">
            <button
              onClick={handleclick}
              className="block w-full text-left text-gray-700 hover:text-blue-500 transition"
            >
              Flights
            </button>

            <button
              onClick={() => {
                router.push("/about-us");
                setOpenMenu(false);
              }}
              className="block w-full text-left text-gray-700 hover:text-blue-500 transition"
            >
              About Us
            </button>

            <button
              className="w-full border border-blue-400 text-blue-500 px-4 py-2 rounded-full
              hover:bg-blue-500 hover:text-white transition"
            >
              Deals
            </button>

            <button
              onClick={() => {
                setOpenModal(true);
                setOpenMenu(false);
              }}
              className="w-full border border-blue-400 text-blue-500 px-4 py-2 rounded-xl
              hover:bg-blue-500 hover:text-white transition"
            >
              Sign For Inquiry
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      <FlightEnquiryModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
