import { useParams } from "react-router-dom";
import TopRattedSeries from "./topRattedSeries";
import TopRattedMovies from "./TopRattedMovies";
function TopRattedContent() {
  const { topRatted } = useParams();
  //   console.log(topRatted);

  return (
    <div>{topRatted === "tv" ? <TopRattedSeries /> : <TopRattedMovies />}</div>
  );
}

export default TopRattedContent;
