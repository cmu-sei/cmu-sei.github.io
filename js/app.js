$(document).foundation();

$(document).ready(function() {

  // Initializes the Owl Carousel

  $("#hero-carousel").owlCarousel({

      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true
  });

  // Sets a variable for the Owl Carousel
  var owl = $("#hero-carousel").data('owlCarousel');

  // Binds the click even to handle previous and next transitions via arrows

  $( ".hero-control-prev" ).bind( "click", function() {
    owl.prev();
  });

  $( ".hero-control-next" ).bind( "click", function() {
    owl.next();
  });

});