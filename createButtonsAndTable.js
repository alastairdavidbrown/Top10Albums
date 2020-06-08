$(document).ready(function() {

    // Initialise first time use
    initPeopleButtons();
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

    function initPeopleButtons(){
      var buttonPre='<div class="btn-group mr-1" role="group" ><button type="button" class="btn btn-primary">'
      var buttonPost='</button></div>'
      // For every person in the data add a button with text that's the key into the data.
      for (var person in dataAll) {
        $('#peopleButtons').append(buttonPre + person + buttonPost);
      }
    }
} );
