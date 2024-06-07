import SearchIcon from "/assets/icon-search.svg";
import { ChangeEventHandler } from "react";

export default function SearchBar({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}) {
  return (
    <div className="flex gap-4">
      <img src={SearchIcon} alt="search icon" />
      <input
        type="text"
        className="bg-[#10141E] w-full text-white md:text-lg"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
