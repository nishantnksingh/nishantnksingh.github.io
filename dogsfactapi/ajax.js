$(function (){
$.ajax({
    type:'GET',
    url:'all.json',
    success:function(data){
        $.each(data,function(i,eachdata){
            $('#factlist').append('<li>'+i+'<br>'+eachdata.fact+'</li>');
            console.log(i);

        });
    }
})
});