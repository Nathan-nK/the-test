class Renderer {
    renderData(data) {
        $('.container').empty()
        const source = $('#recipe-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
        $('.container').append(newHTML);
    }
}