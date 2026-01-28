import React, { useRef } from "react";

const Search = ({ search, onSearch }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    onSearch(value);

    const timeRef = useRef(null);

    timeRef.current = setTimeout(() => {
      console.log("this will appear after 3 seconds");
    }, 3000);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={handleChange}
        className="h-10 w-full px-4 py-1 shadow-lg shadow-slate-200 mb-8 focus:outline-1 focus:outline-amber-400"
      />
    </div>
  );
};

export default Search;
