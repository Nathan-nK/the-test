let render = new Renderer()

$('#showRecipes').on('click', function(){
    let ingrInput = $('#ingrInput').val()
    $('.container').empty()
    $.get(`/recipes/${ingrInput}`, function(res) {
        render.renderData({data: res})
        $('.container').on('click', '.img', function(){
            console.log(this.closest(".temp-item"))
        })
    })
    
})

