WIDTH = HEIGHT = 500

function getPos(win) {
    let y = win.screenTop
    let x = win.screenLeft
    return [x,y]
}

function getSpeed(x1,y1,x2,y2) {
    let xSpd = (x2-x1)
    let ySpd = (y2-y1)
    return [xSpd,ySpd]
}

function showPos(x,y,doc,win) {
    console.log([x,y])
    doc.getElementById("x").innerHTML = x
    doc.getElementById("y").innerHTML = y
}

function showSpeed(x,y,doc) {
    console.log([x,y])
    doc.getElementById("x").innerHTML = x
    doc.getElementById("y").innerHTML = y
}

function main(pos1,lastSpeed,win) {
    let pos2 = getPos(win)
    speed = getSpeed(pos1[0],pos1[1],pos2[0],pos2[1])
    showSpeed(speed[0],speed[1],document)
    if (!ass.closed) {
        console.log(Math.abs(speed[0])+Math.abs(speed[1]) == 0)
        if (Math.abs(speed[0])+Math.abs(speed[1]) == 0) {
        }
        requestAnimationFrame(() => {
            sleep(100).then(()=>{
                main(pos2,speed,win)
            })
        })
    }
}

function yo(lastSpeed,iterations) {
    iterations++
    ass.moveBy(lastSpeed[0]/50, lastSpeed[1]/20)
    if (iterations != 20) {requestAnimationFrame(() => {yo(lastSpeed,iterations)})}
}

function totalSpeed(speed) {
    return Math.abs(speed[0]) + Math.abs(speed[1])
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

let ass = window.open("about:blank", "a", "width=1,height=1")

// setInterval(yo,100)

// requestAnimationFrame(() => {
//     main(getPos(ass),0,ass)
// })

function test(pos1,lastSpeed,win) {
    let pos2 = getPos(win) // position de la fenêtre spawned in
    let speed = getSpeed(pos1[0],pos1[1],pos2[0],pos2[1]) // sa vitesse
    showSpeed(speed[0],speed[1],document)

    if (totalSpeed(speed) == 0 && totalSpeed(lastSpeed) != 0 && !win.closed) { // si n'est plus en train de bouger
        win.moveBy(lastSpeed[0],lastSpeed[1]) // bouger l'autre fenêtre en s'accordant à la vitesse
    }
    requestAnimationFrame(() => {
        sleep(100).then(() => {test(pos2,speed,win)})
    })
}

requestAnimationFrame(() => {
    test(getPos(ass),0,ass)
})