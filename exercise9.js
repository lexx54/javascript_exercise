class Pelicula {
  constructor({ id, title, director, year, country, genre, calification }) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.year = year;
    this.country = country;
    this.genre = genre;
    this.calification = calification;

    this.validarImdb(id);
    this.validarTitulo(title);
    this.validarDirector(director);
    this.validarYear(year);
    this.validarPais(country);
    this.validarGenres(genre);
    this.validarCalification(calification);
  }

  static get genreList() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film noir",
      "Game-show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-fi",
      "Short",
      "Sport",
      "Talk-show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static genreAccepted() {
    return console.info(
      `the accepted genres are ${Pelicula.genreList.join(", ")}`
    );
  }

  validarCadena(property, value) {
    if (!value) return console.log(`${property} "${value}" is empty`);
    if (typeof value !== "string")
      return console.log(`${property} "${value}" entered is NOT a string`);
    return true;
  }

  validarTamano(property, value, longitud) {
    if (value.length > longitud)
      return console.error(
        `${property} "${value}" exced the allowed number of character ${longitud}`
      );
    return true;
  }

  validarNumero(property, value) {
    if (!value) return console.warn(`${property} "${value}" is empty`);
    if (typeof value !== "number")
      return console.error(`${property} "${value}" is not a number`);
    return true;
  }

  validarArreglo(property, value) {
    if (!value) return console.warn(`${property} "${value}" is empty`);
    if (!(value instanceof Array))
      return console.error(`${property} "${value}" entered, IS NOT an array`);
    if (value.length === 0)
      return console.error(`${property} "${value}" has no data`);
    for (let chain of value) {
      if (typeof chain !== "string")
        return console.error(`the value "${chain}" entered, IS NOT a string`);
    }
    return true;
  }

  validarImdb(id) {
    if (this.validarCadena("IMDB ID", id)) {
      if (!/^(\D){2}(\d){7}$/.test(id))
        return console.log(
          `IMDB id "${id} no es valido, debe tener 9 caracteres, los 2 primeros letras y los 7 restante numeros`
        );
    }
  }
  validarTitulo(title) {
    if (this.validarCadena("titulo", title)) {
      this.validarTamano("titulo", title, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena("director", director)) {
      this.validarTamano("director", director, 50);
    }
  }

  validarYear(year) {
    if (this.validarNumero("year", year)) {
      if (!/^(\d){4}$/.test(year))
        return console.warn(
          `${year} is not valid, it must be a 4 digit number`
        );
    }
  }

  validarPais(pais) {
    this.validarArreglo("pais", pais);
  }

  validarGenres(genres) {
    if (this.validarArreglo("Genre", genres)) {
      for (const genre of genres) {
        if (!Pelicula.genreList.includes(genre)) {
          console.error(`Genres Incorrect "${genres.join(", ")}"`);
          Pelicula.genreAccepted();
        }
      }
    }
  }

  validarCalification(calification) {
    if (this.validarNumero("Calification", calification)) {
      return calification < 0 || calification > 10
        ? console.error(`the calification must be between 0 and 10`)
        : (this.calification = calification.toFixed(1));
    }
  }

  showInfo() {
    console.info(
      `Information:\nTitle: "${this.title}:\nDirector: "${
        this.director
      }"\nYear: "${this.year}"\nCountries: "${this.country.join(
        ", "
      )}"\nGenres: "${this.genre.join(", ")}"\Calification: "${
        this.calification
      }"\nIMDB id: "${this.id}"`
    );
  }
}

//Pelicula.genreAccepted();

const allMovie = [
  {
    id: "tt1045647",
    title: "lion king",
    director: "mufasa",
    year: 2005,
    country: ["united stated"],
    genre: ["Family", "Animation"],
    calification: 9.5,
  },
  {
    id: "tl0101999",
    title: "Maria's adventures",
    director: "lexigton",
    year: 2020,
    country: ["venezuela", "france", "united state"],
    genre: ["Romance", "Biography"],
    calification: 10,
  },
  {
    id: "tt1234567",
    title: "avengers",
    director: "joshep",
    year: 2019,
    country: ["mexico", "france"],
    genre: ["Comedy"],
    calification: 7.789,
  },
];

const movieEx1 = new Pelicula(allMovie[0]),
  movieEx2 = new Pelicula(allMovie[1]),
  movieEx3 = new Pelicula(allMovie[2]);

movieEx1.showInfo();
movieEx2.showInfo();
movieEx3.showInfo();
console.info("finished");
