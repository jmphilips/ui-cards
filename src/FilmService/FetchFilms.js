const FetchFilms = () => {
  return fetch("https://ghibliapi.herokuapp.com/films")
    .then(results => {
      return results.json();
    })
    .then(data => {
      return data;
    });
};

export default FetchFilms;
