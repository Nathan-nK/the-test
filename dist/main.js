$('#showRecipes').on('click', function(){
    let ingrInput = $('#ingrInput').val()
    $('.container').empty()
    $.get(`/recipes/${ingrInput}`, function(res) {
        res.send(res)
    })
})
       

















// $('#showTeam').on('click', function(){
//     let teamInput = $('#teamInput').val()
//     $('.container').empty()
//     $.get(`/teams/${teamInput}`, function(res) {
//         for(let i in res){
//         $('.container').append(`<div class='player'><div>${res[i].firstName} ${res[i].lastName}</div> 
//         <div>${res[i].jersey}</div>
//         <img id='img' src='https://nba-players.herokuapp.com/players/${res[i].lastName}/${res[i].firstName}'>
//         <div>${res[i].pos}</div></div>`)
//     }     })
// })
