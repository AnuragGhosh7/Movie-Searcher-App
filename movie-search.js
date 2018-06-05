$(document).ready(function(){
	
	var $input = $('.search-bar')   ;                                            			
	var $poster = $('.moviesearch-movie-poster')   ;
	var $title = $('moviesearch-movie-info-title');
	var $year=$('moviesearch-movie-info-year');
	var $plot = $(".moviesearch-movie-info-plot");
	var $director = $(".moviesearch-movie-info-director");
	var $actors = $(".moviesearch-movie-info-actors");
	var $genres = $(".moviesearch-movie-info-genres");
	var $rated = $(".moviesearch-movie-info-rated");


 
        $input.on("keyup", function() {
		console.log("keyup function triggered")
			var title = $input.val();
    
			if(title.length < 3){
					return;
				} 
			
			$.ajax({
			type: "GET",
			url: "https://www.omdbapi.com/?t=" + title + "&apikey=90464078",
						    				                               
			success:function(res){
			console.log(res)	
			if(res!=null){
				   $poster.attr("src", res.Poster);
					$title.html(res.Title);
					$year.html(res.Year);
					$plot.html(res.Plot);
					$director.html("Directed by " + res.Director);
					$actors.html("Starring " + res.Actors);
					$genres.html(res.Genre);
					$rated.html("Rated: " + res.Rated);
			        }
			
				else {
					// Reset all elements with blank values
					$poster.html("src", "");
					$('#poster').attr("src","");
					$title.html("No movie found");
					$year.html("");
					$plot.html("");
					$director.html("");
					$actors.html("");
					$genres.html("");
					$rated.html("");

			
				$('#input').focus(function() {
						if ($(this).val('') < 3) {
							return $(this).val('');
						}
					});
				}
			
		},
		});
	});
});
