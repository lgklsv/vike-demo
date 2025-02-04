import { Movie } from '../types';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function Page() {
  const query = useSuspenseQuery({
    queryKey: ['movies'],
    queryFn: () => fetch('https://star-wars.brillout.com/api/films.json').then((res) => res.json()),
  });

  const movies = query.data as unknown as { results: Movie[] };

  console.log(movies.results);
  return (
    <>
      <h1>Star Wars Movies</h1>
      <ol>
        {movies.results?.map(({ id, title, release_date }, idx) => (
          <li key={idx} className="bg-red-50">
            <a href={`/star-wars/${id}`}>{title}</a> ({release_date})
          </li>
        ))}
      </ol>
      <p>
        Source: <a href="https://brillout.github.io/star-wars">brillout.github.io/star-wars</a>.
      </p>
    </>
  );
}
