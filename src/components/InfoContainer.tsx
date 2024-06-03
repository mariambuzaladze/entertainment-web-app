import MoviesIcon from "/assets/icon-category-movie.svg";
import TVSeriesIcon from "/assets/icon-category-tv.svg";

interface IData {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export default function InfoContainer({ item }: { item: IData }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3 text-sm text-white opacity-75 mr-[90px] w-max">
        <p>{item.year}</p>
        <img
          src={item.category === "Movie" ? MoviesIcon : TVSeriesIcon}
          alt="category icon"
        />
        <p>{item.category}</p>
        <p>{item.rating}</p>
      </div>

      <p className="text-white">{item.title}</p>
    </div>
  );
}
