//   [COMMAND CRAFT] CUSTOM INTERFACE
//         By Silverainox#9452

const screen = Hud.createScreen(" ", false) 
screen.setOnInit(JavaWrapper.methodToJava((s) => {

//const PITCH = Player.getPlayer().getPitch().toFixed(2)

////////////////////////////////////////////////////
//                   VARIABLES

var CMD1 = '/spawn'
var CMD2 = '/kill @e[type=!player]'

var CMD3 = '/kill '
var NAM = '@a[name='
var NICK = 'Serainox420'

var END = ']'

//const gm0 = () => Chat.say(CMD3+NAM+NICK+END)

////////////////////////////////////////////////////

let arr7 = [x=10, y=5, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-47, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-48, 0xC, 200);

//s.addText("[EXPERIMENTAL]", x+10, y+10, 0xFFFFF, true);
//s.addText("[TEST PANEL]", x+10, y+20, 0xFFFFF, true);

s.addText(" - - - - - - - - - - - ", x, y+10, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+10, color, true);
s.addText("HELP PANEL", x+7, y+20, 0xFFE50A, true);
s.addText("Silverainox#9452", x+7, y+30, 0xFFE50A, true);
s.addText(" - - - - - - - - - - - ", x, y+40, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+40, color, true);
////////////////////////////////////////////////////

let arr1 = [x=5, y=70, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx-30, my, 0xC, 200);
s.addText("[GAMEMODE]", x+7, y+5, color2, true); 
const gm0 = () => Chat.say(CMD3+NAM+NICK+END)
const gm1 = () => Chat.say("/gamemode creative")
const gm2 = () => Chat.say("/gamemode adventure") 
const gm3 = () => Chat.say("/gamemode spectator")
s.addButton(x+5, y+20, 60, 12, "SURVIVAL",  JavaWrapper.methodToJava(gm0))
s.addButton(x+5, y+35, 60, 12, "CREATIVE",  JavaWrapper.methodToJava(gm1))
s.addButton(x+5, y+50, 60, 12, "ADVENTURE",  JavaWrapper.methodToJava(gm2))
s.addButton(x+5, y+65, 60, 12, "SPECTATOR",  JavaWrapper.methodToJava(gm3))

////////////////////////////////////////////////////

let arrA = [x=80, y=70, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx-30, my, 0xC, 200);
s.addText("[OPERATOR]", x+7, y+5, color2, true); 
const a1 = () => Chat.say("/reload")||Chat.say("/reload confirm")
const a2 = () => Chat.say("/restart")
const a3 = () => Chat.say("/stop") 
const a4 = () => Chat.say("/save-all")
s.addButton(x+5, y+20, 60, 12, "RELOAD",  JavaWrapper.methodToJava(a1))
s.addButton(x+5, y+35, 60, 12, "RESTART",  JavaWrapper.methodToJava(a2))
s.addButton(x+5, y+50, 60, 12, "STOP",  JavaWrapper.methodToJava(a3))
s.addButton(x+5, y+65, 60, 12, "SAVE ALL",  JavaWrapper.methodToJava(a4))

////////////////////////////////////////////////////

let arrB = [x=155, y=70, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx-30, my, 0xC, 200);
s.addText("[TIME / WTR]", x+5, y+5, color2, true); 
const b1 = () => Chat.say("/time set 0")
const b2 = () => Chat.say("/time set noon")
const b3 = () => Chat.say("/time set midnight") 
const b4 = () => Chat.say("/weather clear")
s.addButton(x+5, y+20, 60, 12, "SET 0",  JavaWrapper.methodToJava(b1))
s.addButton(x+5, y+35, 60, 12, "DAY",  JavaWrapper.methodToJava(b2))
s.addButton(x+5, y+50, 60, 12, "NIGHT",  JavaWrapper.methodToJava(b3))
s.addButton(x+5, y+65, 60, 12, "W CLEAR",  JavaWrapper.methodToJava(b4))

////////////////////////////////////////////////////

const draw = () => [x=360, y=75, mx=x+55, my=y+50, l=25, w=10]+
World.playSound("block.ender_chest.open", 100)+
s.addRect(x-5, y-5, mx, my, 0xC, 200)+
s.addText("[EXAMPLE]", x, y, 0xFF0000, true)+
s.addText("[DRAWING]", x, y+10, 0xFF0000, true)+
s.addButton(x, y+20, l, w, "XXX", JavaWrapper.methodToJava(draw))+
s.addButton(x+25, y+20, l, w, "ZZZ", JavaWrapper.methodToJava(draw));
const reset = () => Hud.openScreen(screen)+World.playSound("block.ender_chest.open", 100)

/////////////////////////////////////////////////
const positions = () => [x=10, y=10, mx=x+605, my=y+320, l=25, w=10]+
World.playSound("block.ender_chest.open", 100)+
s.addRect(x-5, y-5, mx, my, 0xC, 999)+
s.addText("[X/Y 10]", x, y, 0xFF0000, true)+
s.addText("[X 10] [Y 20]", x, y+10, 0xFF0000, true)+
s.addText("[Y 100]", x, y+90, 0xFF0000, true)+
s.addText("[Y 200]", x, y+190, 0xFF0000, true)+
s.addText("[X 200]", x+190, y, 0xFF0000, true)+
s.addText("[X 300]", x+190, y, 0xFF0000, true)+
s.addText("[X 400]", x+390, y, 0xFF0000, true)+
s.addText("[X 500]", x+490, y, 0xFF0000, true)+
s.addText("[X 600]", x+590, y, 0xFF0000, true)+
s.addText("[Y 300]", x, y+290, 0xFF0000, true)+
s.addText("[X 100]", x+90, y, 0xFF0000, true);
const reset1 = () => Hud.openScreen(screen)+World.playSound("block.ender_chest.open", 100)

//////// DRAW BUTTONS ////////////
let arrXY = [x=135, y=5, mx=x+40, my=y+50]
s.addRect(x-5, y+5, mx, my, 0xC, 100) 
s.addText("[X/Y]", x+2, y+10, 0xc666, true);
   s.addButton(x, y+25, 35, 10, "DRAW", JavaWrapper.methodToJava(positions))
   s.addButton(x, y+35, 35, 10, "RESET", JavaWrapper.methodToJava(reset)) 
   
//////////////// CENTRAL WINDOW /////////////////////////////////////////////////

let arrDR = [x=235, y=5, mx=x+40, my=y+50]
s.addRect(x-5, y+5, mx, my, 0xC, 100) 
s.addText("[DRAW]", x+2, y+10, 0xc666, true);
   s.addButton(x, y+25, 35, 10, "DRAW", JavaWrapper.methodToJava(draw))
   s.addButton(x, y+35, 35, 10, "RESET", JavaWrapper.methodToJava(reset)) 
   
////////////////// TEST ///////////////////////

const test = () => [x=10, y=10, mx=x+605, my=y+320, l=25, w=10]+
s.addRect(x+50, y+50, mx, my, 0xC, 99);

//////////////// DRAW TEST ///////////////////////////

let arrTEST = [x=335, y=50, mx=x+40, my=y+50]+
s.addRect(x-5, y+5, mx, my, 0xC, 100)+
s.addText("[TEST]", x+2, y+10, 0xc666, true)+
   s.addButton(x, y+25, 35, 10, "DRAW", JavaWrapper.methodToJava(test))+
   s.addButton(x, y+35, 35, 10, "RESET", JavaWrapper.methodToJava(reset)); 
   
/////////////////////////////////////////////////


var N2 = 'serainox'//'SuperSilverDOOM'
let arr4 = [x=10, y=10, mx=220, my=330]
//s.addRect(x, y, mx-110, my-290, 0xC, 100) 
   const back = () => JsMacros.runScript("RC/RC-HUD.js")
//   s.addButton(x+05, y+05, 33, 20, "BACK", JavaWrapper.methodToJava(back))
   
}))
Hud.openScreen(screen)
