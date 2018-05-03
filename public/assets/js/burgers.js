// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  console.log("inside jquery function");
  $(".create-form").on("submit", function(event) {
    console.log("inside form fire");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgerText").val().trim(),
    };

    console.log("Burger Name: " + newBurger.name);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Added a Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //when devoured is clicked, it moves the burger to other list
  //it will behave more like an update changing the state
  $(".devour-it").on("click", function(event){
    //get the id of the clicked burger
    const id = $(this).data("id");
    const eaten = {devoured: true};

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eaten
    }).then(function(){
      console.log("changed id: " + id + "to " + eaten.devoured);
      location.reload();
    });

  });
});
