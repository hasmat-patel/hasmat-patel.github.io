$(function () {
  var availableTags = [
    "Albany Park, Chicago",
    "Archer Heights, Chicago",
    "Armour Square, Chicago",
    "Ashburn, Chicago",
    "Auburn Gresham, Chicago",
    "Austin, Chicago",
  ];
  $("#autocomplete_01").autocomplete({
    source: availableTags,
  });
});
