//   [COMMAND CRAFT] CUSTOM INTERFACE
//         By Silverainox#9452

/////// SOUND EFFECT ////////////////////////
World.playSound("block.beehive.enter", 100,2)
//////////////////////////////////////

//////////////////////// INITIATOR ////////
const screen = Hud.createScreen(" ", false) 
screen.setOnInit(JavaWrapper.methodToJava((s) => {
/////////////////////////////////////////////////////////

/////////////////// VARIABLES ///////////////////

let arrVar = [VAR1='xxx', VAR2='yyy']


////////////////////////////////////////////////////

let arr7 = [x=10, y=5, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-47, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-48, 0xC, 200);

//s.addText("[EXPERIMENTAL]", x+10, y+10, 0xFFFFF, true);
//s.addText("[TEST PANEL]", x+10, y+20, 0xFFFFF, true);
const back = () => JsMacros.runScript("BLANK-GUI.js")
s.addText(" - - - - - - - - - - - ", x, y+10, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+10, color, true);
s.addText("SUB PANEL", x+7, y+20, 0xFFE50A, true);
s.addText("REDIRECT", x+7, y+30, 0xFFE50A, true);
s.addText(" - - - - - - - - - - - ", x, y+40, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+40, color, true);
s.addButton(x+65, y+17, 40, 20, "BACK",  JavaWrapper.methodToJava(back))

////////////////////////////////////////////////////

let arr1 = [x=5, y=70, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx-30, my, 0xC, 200);
s.addText("[STUFF]", x+7, y+5, color2, true); 
const gm0 = () => Chat.say(CMD3+NAM+NICK+END)
const gm1 = () => Chat.say(VAR1)
const gm2 = () => Chat.say(VAR2) 
const gm3 = () => Chat.say("/gamemode spectator")
s.addButton(x+5, y+20, 60, 12, "VAR COMBO",  JavaWrapper.methodToJava(gm0))
s.addButton(x+5, y+35, 60, 12, "VAR1",  JavaWrapper.methodToJava(gm1))
s.addButton(x+5, y+50, 60, 12, "VAR2",  JavaWrapper.methodToJava(gm2))
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




var N2 = 'serainox'//'SuperSilverDOOM'
let arr4 = [x=10, y=10, mx=220, my=330]
//s.addRect(x, y, mx-110, my-290, 0xC, 100) 
//   const back = () => JsMacros.runScript("RC/RC-HUD.js")
//   s.addButton(x+05, y+05, 33, 20, "BACK", JavaWrapper.methodToJava(back))
   
}))
Hud.openScreen(screen)
