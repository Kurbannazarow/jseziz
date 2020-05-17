let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последных просмотренных фильмов?", "");
    const b = prompt("На сколько оцените его?", "");
    if (
      a != "" &&
      a != " " &&
      a != null &&
      a.length < 50 &&
      b != "" &&
      b != " " &&
      b != null
    ) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}
function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов!");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель!");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман!");
  } else {
    alert("Произошла ошибка!");
  }
}
detectPersonalLevel();
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let answer = prompt(`Ваш любимый жанр под номером ${i} .`, '');
    while (answer == "" || answer == null ) {
      answer = prompt(`Ваш любимый жанр под номером ${i} .`, '');
    }
    personalMovieDB.genres.push(answer);
  }
}
writeYourGenres()