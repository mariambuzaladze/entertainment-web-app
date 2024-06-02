import SearchIcon from "/assets/icon-search.svg";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex gap-4">
      <img src={SearchIcon} alt="search icon" />
      <input
        type="text"
        className="bg-[#10141E] w-full"
        placeholder={placeholder}
      />
    </div>
  );
}
