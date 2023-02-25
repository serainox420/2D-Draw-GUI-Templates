///////////////////////////////////////////
//
//  [EMOTE PANEL V2] - [BY SILVERAINOX]
//  GET MORE PANELS ON - <Star if you like it>
//  https://github.com/serainox420/2D-Draw-GUI-Templates
//
///////////////// SCREEN INIT ////////////////////
const emo = Hud.createScreen("===========================", false)
emo.setOnInit(JavaWrapper.methodToJava((s) => {

/////////////////////// TEST ASCII //////////////////////////////
let arremotet = [x=10, y=225, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc676]

s.addText("███████╗███╗░░░███╗░█████╗░███████╗ ███████╗████████╗", x+5, y+40, color, true);
s.addText("██╔════╝████╗░████║██╔══██╗╚══██╔═╝ ██╔════╝╚══██╔══╝", x+5, y+50, color, true);
s.addText("█████╗░░██╔████╔██║██║░░██║░░░██║░░░█████╗░░░░░██║░░░", x+6, y+60, color, true);
s.addText("██╔══╝░░██║╚██╔╝██║██║░░██║░░░██║░░░██╔══╝░░░░░██║░░░", x+6, y+70, color, true);
s.addText("███████╗██║░╚═╝░██║╚█████╔╝░░░██║░░░███████╗░░░██║░░░", x+5, y+80, color, true);
s.addText("╚══════╝╚═╝░░░░░╚═╝░╚════╝░░░░╚═╝░░░╚══════╝░░░╚═╝░░░", x+5, y+90, color, true);

////////////////////////////////////////////////////////

////////////// EXTRA VARIABLE ARRAY  //////////////////////
let arrVar = [VAR1='xxx', VAR2='yyy', VAR3='zzz']

////////////////////// JSFETCH /////////////////////////

let arrX = [x=10, y=10+3, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-47, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-48, 0xC, 200);
s.addText(" - - - - - - - - - - - ", x, y+10, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+10, color, true);
s.addText("EMOTE PANEL V2", x+7, y+20, 0xFFE50A, true);
s.addText("SILVER-X [Δ-Aix]", x+7, y+30, 0xFFE50A, true);
s.addText(" - - - - - - - - - - - ", x, y+40, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+40, color, true);

////////////////////////////////////////////////////////
//                     VARIABLES 
////////////////////////////////////////////////////////

const b1e1 = () => Chat.say("☠")
const b1e2 = () => Chat.say("✌")
const b1e3 = () => Chat.say("☢")
const b1e4 = () => Chat.say("✯")
const b1e5 = () => Chat.say("⛏")
const b1e6 = () => Chat.say("☭")
const b1e7 = () => Chat.say("⚛")
const b1e8 = () => Chat.say("☢")
const b1e9 = () => Chat.say("❤")
const b1e10 = () => Chat.say("☃")

////////////////////////////////////////////////////////
//                       BAR I 
////////////////////////////////////////////////////////

let arrR1 = [x=10, y=65, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-47+3, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-48+3, 0xC, 200);

s.addButton(x+5+2, y+10, 20, 20, "☠", JavaWrapper.methodToJava(b1e1))
s.addButton(x+5+2, y+30, 20, 20, "✌", JavaWrapper.methodToJava(b1e2))
s.addButton(x+25+2, y+10, 20, 20, "☢", JavaWrapper.methodToJava(b1e3))
s.addButton(x+25+2, y+30, 20, 20, "✯", JavaWrapper.methodToJava(b1e4))
s.addButton(x+45+2, y+10, 20, 20, "⛏", JavaWrapper.methodToJava(b1e5))
s.addButton(x+45+2, y+30, 20, 20, "☭", JavaWrapper.methodToJava(b1e6))
s.addButton(x+65+2, y+10, 20, 20, "⚛", JavaWrapper.methodToJava(b1e7))
s.addButton(x+65+2, y+30, 20, 20, "☢", JavaWrapper.methodToJava(b1e8))
s.addButton(x+85+2, y+10, 20, 20, "❤", JavaWrapper.methodToJava(b1e9))
s.addButton(x+85+2, y+30, 20, 20, "☃", JavaWrapper.methodToJava(b1e10))

////////////////////////////////////////////////////////
//                       BAR 2 
////////////////////////////////////////////////////////

let arrR2 = [x=10, y=120, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-47+3, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-48+3, 0xC, 200);

// ADD BUTTONS 
//s.addButton(x+5+2, y+10, 20, 20, "☠", JavaWrapper.methodToJava(b1e1))

////////////////////////////////////////////////////////
//                       BAR 3 
////////////////////////////////////////////////////////

let arrR3 = [x=10, y=175, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-47+3, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-48+3, 0xC, 200);

// ADD BUTTONS 
//s.addButton(x+5+2, y+10, 20, 20, "☠", JavaWrapper.methodToJava(b1e1))

////////////////////////////////////////////////////////
//                     BAR 4 WiDE 
////////////////////////////////////////////////////////

let arrR4 = [x=130, y=30, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1+175, my-47+3+145, 0xc666, 200);
s.addRect(x, y+5, mx=mx+175, my-48+3+145, 0xC, 200);

// ADD BUTTONS 
//s.addButton(x+5+2, y+10, 20, 20, "☠", JavaWrapper.methodToJava(b1e1))

}))
Hud.openScreen(emo)
//
//    ┌─┐  ─┐
//    │▒│ /▒/
//    │▒│/▒/
//    │▒ /▒/─┬─┐
//    │▒│▒|▒│▒│
//    ┌┴─┴─┐-┘─┘
//    │▒┌──┘▒▒▒│
//    └┐▒▒▒▒▒▒┌┘
//     └┐▒▒▒▒┌
//
// 
