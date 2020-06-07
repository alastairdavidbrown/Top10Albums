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
    ],
    "Colin": [
      [ "Joy Division", "Unknown Pleasures"],
      [ "Joy Division", "Closer"],
      [ "Siouxsie and the Banshees", "Nocturne (Live)"],
      [ "Led Zepplin", "IV"],
      [ "ELO", "Out of the Blue"],
      [ "Dire Straits", "Dire Straits"],
      [ "Kate Rusby", "Underneath the Stars"],
      [ "Tallis Scholars", "Allegri's Miserere"],
      [ "Runrig", "The Cutter and the Clan"],
      [ "Waterboys", "Fisherman's Blues"]
    ],
    "Prav": [
      [ "My Beautiful Dark Twisted Fantasy", "Kanye West"],
      [ "Channel Orange", "Frank Ocean"],
      [ "In search Of", "NERD"],
      [ "Discovery", "Daft Punk"],
      [ "Watch the throne", "Jay Z & Kanye West"],
      [ "Aha Shake Heartbreak", "Kings Of Leon"],
      [ "Empire", "Kasabian"],
      [ "Ready to Die", "BIG"],
      [ "Whatever People Say I am, Thats what I’m not", "Arctic Monkeys"],
      [ "Original Pirate Material", "The Streets"]
    ],
    "Andy": [
      [ "The Stone Roses", "The Stone Roses"],
      [ "Fleetwood Mac", "Rumours"],
      [ "Alabama 3", "Exile in Coldharbour Lane"],
      [ "ACDC", "Back in Black"],
      [ "Fatboy Slim", "Better living through Chemistry"],
      [ "Orbital", "Orbital"],
      [ "Faithless", "Reverence"],
      [ "Doves", "Last Broadcast"],
      [ "Queen", "A Kind of Magic (as proxy for Greatest Hits I & II)"],
      [ "Elbow", "Leaders of the Free World"]
    ],
    "Dave": [
      [ "Credit to the nation", "Take Dis"],
      [ "Carter USM", "30 Something"],
      [ "Barenaked Ladies", "This is Barenaked ladies"],
      [ "Stone Roses ", "One Love"],
      [ "Family Foundation", "One Blood"],
      [ "Utah Saints", "Utah Saints"],
      [ "Nick Helm", "Hot n Heavy"],
      [ "NWA", "100 miles and runnin"],
      [ "Pink", "Funhouse"],
      [ "Ratpack Fantasia", "One step beyond"]
    ],
    "Kev": [
      [ "Primal Scream", "Screamadelica"],
      [ "The Charlatans", "Tellin’ stories"],
      [ "De La Soul", "3 feet high and rising"],
      [ "Gangstarr", "Step into the arena"],
      [ "NWA", "Straight outa Compton"],
      [ "Marvin Gaye", "Whats going on"],
      [ "The Beatles", "Rubber Soul"],
      [ "Arab Strap", "The week never starts round here"],
      [ "Led Zeppelin", "IV"],
      [ "Stevie Wonder", "Songs in the key of life"]
    ],
    "Lucy": [
      [ "Radiohead", "The Bends"],
      [ "Arctic Monkeys", "Whatever people say I am, thats what Im not"],
      [ "Kasabian", "For crying out loud"],
      [ "Amy Winehouse", "Back to black"],
      [ "The Stone Roses", "The Stone Roses"],
      [ "Pulp", "Different Class"],
      [ "The Vaccines", "What did you expect from the vaccines?"],
      [ "Oasis", "Definitely Maybe"],
      [ "The Blinders", "Columbia"],
      [ "DMAs","Hills End"]
    ],
    "Lou": [
      ["The Chameleons", "Strange Times"],
      ["The Stone Roses", "The Stone Roses"],
      ["Hunkydory", "David Bowie"],
      [ "Pulp", "Different Class"],
      [ "Arctic Monkeys", "Whatever people say I am, thats what Im not"],
      [ "Kasabian", "For crying out loud"],
      [ "Soft Cell", "Non Stop Erotic Cabaret"]
    ],
    "Alex": [
      [ "Metallica", "Master of Puppets"],
      [ "Public Enemy", "It takes a nation of millions to hold us back"],
      [ "LTJ Bukem", "Producer 01"],
      [ "Autchre", "Amber"],
      [ "The Jesus and Mary Chain", "Stoned and Dethroned"],
      [ "Orbital", "Snivelisation"],
      [ "Underworld", "Second toughest in the Infants"],
      [ "Mogwai", "Rave Tapes"],
      [ "The Flaming Lips", "Yoshimi Battles the Pink Robots"],
      [ "The Brian Jonestown Massacre", "Their Satanic Majectic Second Request"]
    ]
};

dataTable = dataAll["Robbie"];

$(document).ready(function() {

    // Initialise first time use
    var i = initTable();

    $(".btn").click(function (event){
      // Update the data table data
      dataTable = dataAll[$(this).text()];
      $('#tabAlbums').DataTable().destroy();
      initTable();
      // Set the heading
      $('#Title').text("The Top 10 Albums in the world ever according to " + $(this).text() + "!");
    });

    function initTable() {
      $('#tabAlbums').DataTable( {
          "searching": false,
          "paging": false,
          data: dataTable,
          columns: [
              { title: "Artist" },
              { title: "Album" }
          ]
      } );
    };

} );
