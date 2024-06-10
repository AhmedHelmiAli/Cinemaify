function MovieImage({ movieImage }: { movieImage: string }) {
  return (
    <div className="w-full h-96">
      <img
        className="block object-cover w-full h-full aspect-auto rounded-t-lggroup-hover:opacity-50"
        src={
          movieImage
            ? `https://image.tmdb.org/t/p/w500${movieImage}`
            : "/favicon.webp"
        }
        alt="movie-image"
      />
    </div>
  );
}

export default MovieImage;
