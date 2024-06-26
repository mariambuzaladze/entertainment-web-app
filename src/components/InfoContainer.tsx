import MoviesIcon from "/assets/icon-category-movie.svg";
import TVSeriesIcon from "/assets/icon-category-tv.svg";

export default function InfoContainer({ item }: { item: IData }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3 text-sm text-white opacity-75 mr-[90px] w-max md:mr-[12rem]">
        <p>{item.year}</p>
        <img
          src={item.category === "Movie" ? MoviesIcon : TVSeriesIcon}
          alt="category icon"
        />
        <p>{item.category}</p>
        <p>{item.rating}</p>
      </div>

      <p className="text-white md:text-xl">{item.title}</p>
    </div>
  );
}
