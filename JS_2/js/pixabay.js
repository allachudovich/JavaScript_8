$(function() {
    var search_image = function() {
        var searchForm = document.getElementById("search").value;
        var API_KEY = '4630633-2333e87d4d7497c3e9627d57e';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + searchForm + "&image_type=photo&pretty=true";
        $.getJSON(URL, function(data) {
            if (parseInt(data.totalHits) > 0)
                var ul = document.createElement("ul");
            $.each(data.hits, function(i, hit) {
                var li = document.createElement("li");
                var inner = '<img src=' + hit.webformatURL + '>';
                li.innerHTML = inner;
                ul.appendChild(li);
                $('#results').html(ul);
            })
        });
    };

    $('#search-button').on('click', function() {
        search_image();
    });

    $("#search").keypress(function(e) {
        if (e.which === 13) {
            search_image();
        }
    })

});
