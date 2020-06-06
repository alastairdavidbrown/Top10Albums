var dataTable1 = [
    [ "Radiojhead", "The Bends"],
    [ "Radiojhead", "The Bends"],
    [ "Radiojhead", "The Bends"],
    [ "Radiojhead", "The Bends"]

  ];

var dataAll =
{
   "Graham": [
    [ "StoneRoese", "To follow"],
    [ "Oasis", "To follow"],
    [ "Prodidgy", "To follow"],
    [ "David Bowie", "To follow"],
    [ "Primal Screem", "To follow"],
    [ "Bruce Springsteen", "To follow"],
    [ "Shed Seven", "To follow"],
    [ "StoneRoese", "To follow"],
    [ "StoneRoese", "To follow"]
  ],
   "Robbie": [
      [ "Kasabian", "Kasabian"],
      [ "Artic Monkeys", "Artic Monkeys"],
      [ "The Stone Roses", "The Stone Roses"],
      [ "The Streets", "Original Pirate Material"],
      [ "Baby Shambles", "Down in Albion"],
      [ "Artic Monkeys", "AM"],
      [ "Oasis", "Definately Maybe"],
      [ "Daniel Avery", "Drone Logic"],
      [ "The Libertines", "The Libertines"],
      [ "Kings of Leon", "Only By The Night"]
    ]
};

dataTable = dataAll["Robbie"];

$(document).ready(function() {
    var tabAlbums = $('#tabAlbums').DataTable( {
        "searching": false,
        "paging": false,
        data: dataTable,
        columns: [
            { title: "Artist" },
            { title: "Album" }
        ]
    } );

    $("#presonButton").click(function (){
        var sleepTime =$(this).attr('sleepTime');
                setTimeout(function() {
        console.log('will get printed after 2 seconds');
        console.log(dataTable);
        dataTable = dataAll["Graham"];
        console.log(dataTable);
        console.log((tabAlbums));
        tabAlbums.ajax.reload();
      }, sleepTime);
    });


} );
