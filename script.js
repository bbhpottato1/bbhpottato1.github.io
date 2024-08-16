document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.gallery');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.item',
        columnWidth: '.item',
        percentPosition: true,
        gutter: 10
    });
})