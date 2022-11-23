

import ReactStars from "react-rating-stars-component";

import toast from "react-hot-toast";
import { fench } from "../../services/fench";
import { imgUrl } from "../../helpers/imgUrl";

export default function Movie() {
 
  



  useEffect(() => {
    if (movie && favoriteMovies.length) {
      const favMovie = favoriteMovies.find((f) => f.id === movie?.id);

      setIsFavorite(Boolean(favMovie));
    }
  }, [movie, favoriteMovies]);

 




  async function ratingChanged(rate) {
    await fench.post(`movie/${movie.id}/rating`, { value: rate * 2 });
    toast.success(`Your vote is submitted.`);
  }



  return (
    <div className="-mt-[320px]">
      {movie ? (
        <div className="container grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <img src={imgUrl(movie.poster_path)} alt={movie.title} />
          </div>
          <div className="col-span-3">
            <div className="flex gap-3 items-center">
              <h1 className="text-3xl">{movie.title}</h1>
              <time className="text-slate-500">
                {movie.release_date.split("-")[0]}
              </time>
            </div>
          
              <button
                className="flex items-center gap-2"
                onClick={handleFavorite}
              >
                <p >
                  {isFavorite ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  ) : (
                
                  )}
                </p>
                <span>{isFavorite ? "Remove from" : "Add to"} favorite</span>
              </button> 
          

            <div className="grid grid-cols-4 border-slate-500 border-t-2 border-b-2 mt-8">
              <div className="col-span-1 border-r-2 py-1 text-slate-300">
                <div className="flex items-center gap-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="text-yellow-500"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>{parseInt(movie.vote_average)} / 10</div>
                    <div>{movie.vote_count} reviews</div>
                  </div>
                </div>
              </div>

              <div className="col-span-3 pl-4 flex gap-4 items-center py-2">
                <p className="text-slate-300 text-lg">Rate this movie: </p>
                <div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    value={parseInt(movie.vote_average) / 2}
                    emptyIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="mx-2"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    }
                    filledIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="mx-2"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    }
                    activeColor="#ffd700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}