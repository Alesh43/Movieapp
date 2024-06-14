import { useEffect, useState } from "react";
import { IDetails } from "../../interface/iMovieDetails";
import { getViewDetails } from "../../Api/movie";

interface Props {
  movieId: number;
}
const ViewDetails = ({ movieId }: Props) => {
  const [detail, setDetail] = useState<IDetails>();

  useEffect(() => {
    getViewDetails(movieId)
      .then((res) => setDetail(res))
      .catch((error) => console.log(error));
  }, [movieId]);
  return (
    <div className="bg-no-repeat bg-cover bg-center text-white flex flex-col justify-between h-full gap-10 p-5 "
    style={{
      
      backgroundImage:`linear-gradient(rgba(44, 40, 45, 0.6), rgba(44, 40, 45, 0.6)),url(https://image.tmdb.org/t/p/w500/${detail?.poster_path})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
     
      }}>
      <div className="font-bold text-center text-3xl">
        <p>{detail?.title}</p>
      </div>

      <div className=" flex items-center justify-center gap-10" >
        <div>
          <h5 className="font-bold">Release Date</h5>

          <p>{detail?.release_date}</p>
        </div>
        <div>
          <h5 className="font-bold">Duration</h5>
          <p>{detail?.runtime}</p>
        </div>
      </div>

      <div>
          <h5 className="font-bold">Tagline</h5>
          <p>{detail?.tagline}</p>
        </div>      

      <div >
        <h5 className="text-center font-bold ">Genres</h5>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {detail?.genres.map((genre) => (
            <p className="border rounded-full px-2 py-1 border-primary-900 ">{genre.name}</p>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default ViewDetails;
