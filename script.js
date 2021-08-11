$(document).ready(() => {
  $("#searchForm").on("submit", (e) => {
    let searchText = $("#searchText").val();
    getPicture(searchText);
    e.preventDefault();
  });
});

function getPicture(searchText) {
  axios.get("https://pixabay.com/service/about/api/?s=" + searchText)
    .then((response) => {
      console.log(response);
      let images = response.data.Search;
      let output = "";
      $.each(images, (index, pics) => {
        output += `
        <div class= "col-md-3">
        </div>
        
        `;
      });

      $("#pictures").html(output);
    })

    .catch(function (error) {
      console.log(error);
    });
}
