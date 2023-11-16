$("#search-text").on("keyup", function (e) {
  if (e.keyCode == 13) {
    get_movie();
  }
});

function get_movie() {
  fetch("http://www.omdbapi.com?apikey=88579e37&s=" + $("#search-text").val())
    .then((response) => response.json())
    .then((result) => {
      let movies = result.Search;
      $("#movie-list").html("");
      if (result.Response == "True") {
        $.each(movies, function (i, data) {
          $("#movie-list").append(
            `<div class="col-md-3 mb-3 ">
                          <div class="card" style="width: 15rem;">
                          <img src="` +
              data.Poster +
              `" class="card-img-top" height="300px">
                          <div class="card-body"><h5 class="card-title">` +
              data.Title +
              `</h5>
                          <p class="card-text">Year : ` +
              data.Year
          );
        });
      } else {
        $("#movie-list").append(
          `
                      <div class="col-sm-12 text-center">
                          <h5>` +
            "Please input a movie title!" +
            `</h5>
                      </div>
                  `
        );
      }
    })
    .catch((error) => console.log(error));
  $("#search-text").val("");
}
