////////////// MAIN SCREEN POP UP //////////////

const draw = Hud.createDraw2D()
draw.setOnInit(JavaWrapper.methodToJava((d) => {

World.playSound("entity.mooshroom.shear", 100)

const PITCH = Player.getPlayer().getPitch().toFixed(2)
let arr = [x=250, y=10, mx=x+100, my=y+100]
    d.addRect(x, y, mx, my, 0xC, 199)
    d.addText(PITCH, x+10, y+20, 0xFF0000, true);
    
}))
Hud.registerDraw2D(draw)

Client.waitTick(100)
Hud.clearDraw2Ds()
