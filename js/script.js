function test(e) {
    e.parentNode.classList.remove("row-left");
    e.parentNode.classList.remove("row-right");
    var entity = e.className.toString();
    if(entity.match('tile2|tile3|tile4|tile5')) {
        e.parentNode.classList.add("row-left");
    }
    if(entity.match('tile6')) {
        e.parentNode.classList.add("row-right");
    }
}

function removeHover(e) {
        e.classList.add("row-inactive");
        e.classList.remove("row-left");
        e.classList.remove("row-right");
}