$(function () {
    $.ajax(
        {
            url:"https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
            type:"GET",
            success:function(data) {
                $.each(data.results,function(i,eachdata) {
                   console.log(eachdata.title); 
                   $(".container").append('<div class="card" style="display:inline-block; margin:16px; width: 18rem;"><img id="movieimg" class="card-img-top" src="https://image.tmdb.org/t/p/original/'+eachdata.poster_path+'" alt="Card image cap"><div class="card-body"><h5 id="movietitle" class="card-title">'+eachdata.title.slice(0,20)+'</h5><p class="card-text"><b>Popularity:</b> '+eachdata.popularity+'<br><b>Release Date: </b>'+eachdata.release_date+'<br>'+eachdata.overview.slice(0, 120) + (eachdata.overview.length > 150 ? "..." : "")+'</p><a href="#" class="btn btn-primary">Download</a><span><b>  Voting</b> '+eachdata.vote_average+'</span></div></div>')
                   $("movietile").text(eachdata.title)
                })
            }
        }
    )
});