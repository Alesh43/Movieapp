import React, { useState } from "react";
import AllMovies from "../../component/Movies/All-Movies";
import ViewDetails from "../../component/Movies/View-details";

interface Props{
    movieId:number
}
const DiscoverPage = () => {
  const [movieId, setMovieID] = useState<number | null>(null);
  return (
    <div className="flex">
      <AllMovies setMovieId={setMovieID} movieId={movieId} />
      <div className="w-[300px] shrink-0 h-[600px] sticky right-0 top-20">
        {movieId && <ViewDetails movieId={movieId} />}
      </div>
    </div>
  );
};

export default DiscoverPage;
