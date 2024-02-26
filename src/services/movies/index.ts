import { popular } from './popular/index';
import { trending } from './trending/index';
import { movie } from './movie/index';
import { credits } from './credits'
import { recommendations } from './recommendations'
import { search } from './search'



const movieService = {
    popular,
    trending,
    movie,
    credits,
    recommendations,
    search
};

export default movieService;