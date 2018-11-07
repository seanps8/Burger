$(function() {
    $(".eat-btn").on("click", function(event) {
        var id = $(this).data("id");
        var beenDevoured = {
            devoured: true
        };

        //Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: beenDevoured
        }).then(
            function() {
                console.log("changed devoured to True");
                //Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#submit-btn").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        };

        //Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
})