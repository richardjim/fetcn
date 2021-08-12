$(document).ready(() => {
  $("#searchForm").on("submit", (e) => {
    let searchText = $("#searchText").val();
    getPicture(searchText);
    e.preventDefault();
  });
});

function getPicture(searchText) {
  axios
    .get(
      "https://pixabay.com/api/?key=22894566-4e17b23e8144e49c421bbf7f0&q=" +
        searchText
    )
    .then((response) => {
      console.log(response);
      let images = response.data.hits;
      let output = "";
      $.each(images, (index,pics ) => {
        output += `
        <div class= "col-md-3">
        <div class= "text-center" >
        <img src="${pics.userImageURL}" />  
        </div>
        
        </div>
        
        `;
      });

      $("#pictures").html(output);
    })

    .catch(function (error) {
      console.log(error);
    });
}
