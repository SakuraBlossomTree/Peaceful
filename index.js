document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("searchInput").addEventListener('keydown', function(event) {

        if(event.key == 'Enter'){

            var input = document.getElementById("searchInput").value;
            var result = 'https://www.google.com/search?q=' + encodeURIComponent(input);
            window.location = result;

        }

    });

});