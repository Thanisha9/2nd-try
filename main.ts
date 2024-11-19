game.startCountdown(15000)
let score = 0
let dot_x = 2
let dot_y = 2
let player_x = 0
let player_y = 0
led.plot(dot_x, dot_y)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        led.toggle(player_x, player_y)
        player_x += 1
    } else {
    	
    }
})
