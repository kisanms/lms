import { Search } from 'lucide-react';
import React from 'react';

function SearchBar() {
  return (
    <div className="flex gap-3 text-[14px] items-center border p-2 rounded-md bg-gray-50 text-gray-500">
      <Search height={20} />
      <input
        type="text"
        placeholder="Search Courses"
        className="bg-transparent outline-none"
      ></input>
    </div>
  );
}

export default SearchBar;