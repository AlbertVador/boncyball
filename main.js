WIDTH = HEIGHT = 500

function getPos() {
    y = window.screenTop
    x = window.screenLeft
    return (x,y)
}

function showPos() {
    x,y = getPos()
    document.getElementById("x").innerHTML = x
    document.getElementById("y").innerHTML = y
}

setInterval(showPos(),1000)