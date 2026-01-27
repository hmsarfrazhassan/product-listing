import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-20 bg-amber-300 mb-8 text-white flex justify-start gap-4 items-center px-4 sticky top-0">
      <Link to="/" className="text-4xl">
        My store
      </Link>
    </div>
  );
};

export default Navbar;
