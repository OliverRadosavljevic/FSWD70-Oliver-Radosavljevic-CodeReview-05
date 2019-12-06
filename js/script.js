$(document).ready(function() {

        for (let i = 0; i < movies.length; i++) {
            console.log(movies[i].likes);
            $(".row").append(`<div class="col-lg-6">
        
        <div class="movieCard">
        
        <div class="divLeft">
        <img class="card-img-left" src="${movies[i].image}">
        </div>
        <div class="divRight">
        <p class="movieName">${movies[i].name}</p> <br>
        <p>${movies[i].description}</p>
        
        <div class="likeButton">
        <button class="button like"><img src="img/like.png" alt="likes" width=20%>Like</button>
        Likes: <p id="showLikes">${movies[i].likes}</p>
        </div>
		</div>
        </div> 
        </div>`);

        };
 

$(".like").on("click", function(){
		var countLikes = $(this).siblings("p").text();
		console.log(countLikes);
        $(this).siblings("p").text(Number(countLikes) + 1);
		// console.log(countLikes);
//$(this).siblings("p").val() = countLikes;
	});

});