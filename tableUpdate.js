$(document).ready(function() {

    // Initialise first time use
    initTable("Robbie");

    $(".btn").click(function (event){
      // Update the data table data
      $('#tabAlbums').DataTable().destroy();
      initTable($(this).text());
    });

    function initTable(key) {
      $('#tabAlbums').DataTable( {
          "searching": false,
          "paging": false,
          data: dataAll[key],
          columns: [
              { title: "Artist" },
              { title: "Album" }
          ]
      } );
      $('#Title').text("The Top 10 Albums in the world ever according to " + key + "!");
    };
} );
