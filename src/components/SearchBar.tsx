import SearchIcon from "/assets/icon-search.svg";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div>
      <img src={SearchIcon} alt="search icon" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
