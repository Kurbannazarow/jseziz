const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const raz1 = prompt("Один из последных просмотренных фильмов?", ""),
    raz2 = prompt("На сколько оцените его?", ""),
    raz1_2 = prompt("Один из последных просмотренных фильмов?", ""),
    raz2_2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[raz1] = raz2;
personalMovieDB.movies[raz1_2] = raz2_2;