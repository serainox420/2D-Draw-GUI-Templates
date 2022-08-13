let arrSC = [x=250, y=55, mx=115+x, my=y+200, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+140, mx+1, my+55, 0xC, 200);

////////////////////// " SCARF " ///////////////////////////
const draw2 = () => [x=250, y=55, mx=115+x, my=y+200, color=0xFFFFFF, color2=0xc676]
const draw1 = () => [x=250, y=55, mx=115+x, my=y+200, color=0xFFFFFF, color2=0xc676]+
//let arrSC = [x=250, y=55, mx=115+x, my=y+200, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+140, mx+1, my+55, 0xC, 200);+
s.addText(" ---------- - - - - - ", x, y+143, color, true);+
s.addText("||_JSM_||| || - - - -  ", x+5, y+148, color, true);+
s.addText(" |      |- -||- - - -  ", x+1, y+153, color, true);+
s.addText("| x NAXA ||- - - - - - -  ", x+5, y+158, color, true);+
s.addText(" --------- - x - - - - ", x, y+163, color, true);+
s.addText(" - - - - - - - - - -  ", x+5, y+168, color, true);+
s.addText(" - - - - - x - - - - - ", x, y+173, color2, true);+
s.addText(" - - - - - - - _ - -  ", x+5, y+179, color, true);+
s.addText(" - - - - - - - _ - - - ", x, y+185, color2, true);+
s.addText(" - x - - - - - _ - -  ", x+5, y+191, color, true);+
s.addText(" - - - - - - x _ - - - ", x, y+197, color2, true);+
s.addText(" - - - - - - - _ - -  ", x+5, y+203, color, true);+
s.addText(" - - - _ - - - _ - - - ", x, y+209, color2, true);+
s.addText(" - - - - - - - - - -  ", x+5, y+215, color, true);+
s.addText(" - - - - x - - - x - - ", x, y+221, color2, true);+
s.addText(" - - - - - - - - - -  ", x+5, y+227, color, true);+
s.addText(" - - - - - - - - - - - ", x, y+233, color2, true);+
s.addText(" - x - - - - - x - -  ", x+5, y+240, color, true);+
s.addText(" - - - - - - - - - - - ", x, y+247, color2, true);

////////////////////// INFO SIGN /////////////////////////

let arrX = [x=500, y=0, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-47, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-48, 0xC, 200);
s.addText(" - - - - - - - - - - - ", x, y+10, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+10, color, true);
s.addText("BLANK GUI [1.0]", x+7, y+20, 0xFFE50A, true);
s.addText("Silverainox#9452", x+7, y+30, 0xFFE50A, true);
s.addText(" - - - - - - - - - - - ", x, y+40, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+40, color, true);

/////////// HELP & ABOUT //////////////////

const xxx0 = () => Chat.say(CMD0);
const xxx1 = () => Chat.say(CMD0);
const xxx2 = () => Chat.say(CMD0);
const xxx3 = () => Chat.say(CMD0);

let arrXB = [x=500, y=55, mx=115+x, my=y+200, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-100, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-101, 0xC, 200);
s.addText(" - - - - - - - - - - - ", x, y+5, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+5, color, true);
s.addText("HELP & ABOUT", x+7, y+15, 0xFFE50A, true);
s.addText(" - - - - - - - - - - - ", x, y+30, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+30, color, true);

s.addButton(x+3, y+35, 25, 15, "WIKI",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+28, y+35, 40, 15, "GITHUB",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+69, y+35, 45, 15, "DISCORD",  JavaWrapper.methodToJava(xxx0));

s.addText(" - - - - - - - - - - - ", x, y+50, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+50, color, true);

s.addButton(x+5, y+55, 35, 15, "SHARE",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+40, y+55, 35, 15, "MORE",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+75, y+55, 35, 15, "ABOUT",  JavaWrapper.methodToJava(xxx0));

s.addText(" - - - - - - - - - - - ", x, y+70, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+70, color, true);

s.addButton(x+3, y+75, 35, 15, "NAXA",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+38, y+75, 45, 15, "JOIN US",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+83, y+75, 30, 15, "FAQ",  JavaWrapper.methodToJava(xxx0));

s.addText(" - - - - - - - - - - - ", x, y+90, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+90, color, true);

s.addRect(x-1, y+60 ,mx+1 ,my ,0xc666 ,200)
s.addButton(x+5, y+20, 60, 12, "CMD 0",  JavaWrapper.methodToJava(r2cmd0))

///////////////////// ROW 1 ///////////////////////////

let arr1 = [x=5, y=5, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx-30, my, 0xC, 200);
s.addText("[ROW 1]", x+7, y+5, color2, true); 
const cmd0 = () => Chat.say(CMD0);
const cmd1 = () => Chat.say(CMD1);
const cmd2 = () => Chat.say(CMD2); 
const cmd3 = () => Chat.say(CMD3);
s.addButton(x+5, y+20, 60, 12, "CMD 0",  JavaWrapper.methodToJava(cmd0))
s.addButton(x+5, y+35, 60, 12, "CMD 1",  JavaWrapper.methodToJava(cmd1))
s.addButton(x+5, y+50, 60, 12, "CMD 2",  JavaWrapper.methodToJava(cmd2))
s.addButton(x+5, y+65, 60, 12, "CMD 3",  JavaWrapper.methodToJava(cmd3))

/////////////////// ROW 2 ////////////////////////////

let arr2 = [x=80, y=5, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx-30, my, 0xC, 200);
s.addText("[ROW 2]", x+7, y+5, color2, true); 
const r2cmd0 = () => Chat.say(R2CMD0);
const r2cmd1 = () => Chat.say(R2CMD1);
const r2cmd2 = () => Chat.say(R2CMD2); 
const r2cmd3 = () => Chat.say(R2CMD3);
s.addButton(x+5, y+20, 60, 12, "CMD 0",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+5, y+35, 60, 12, "CMD 1",  JavaWrapper.methodToJava(r2cmd1))
s.addButton(x+5, y+50, 60, 12, "CMD 2",  JavaWrapper.methodToJava(r2cmd2))
s.addButton(x+5, y+65, 60, 12, "CMD 3",  JavaWrapper.methodToJava(r2cmd3))

///////////////// WIDE ROW //////////////////////////
let arr3 = [x=5, y=95, mx=175+x, my=y+85]+
s.addRect(x, y, mx-30, my+5, 0xC, 200)+
s.addText("WIDE ROW", x+45, y+3, 0xFF0000, true);

//// BUTTONS /////

s.addButton(x+5, y+15, 35, 10, "CMD 1",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+5, y+30, 35, 10, "CMD 1",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+5, y+45, 35, 10, "CMD 1",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+5, y+60, 35, 10, "CMD 1",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+5, y+75, 35, 10, "CMD 1",  JavaWrapper.methodToJava(r2cmd0))

s.addButton(x+40, y+15, 35, 10, "CMD 2",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+40, y+30, 35, 10, "CMD 2",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+40, y+45, 35, 10, "CMD 2",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+40, y+60, 35, 10, "CMD 2",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+40, y+75, 35, 10, "CMD 2",  JavaWrapper.methodToJava(r2cmd0))

s.addButton(x+75, y+15, 35, 10, "CMD 3",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+75, y+30, 35, 10, "CMD 3",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+75, y+45, 35, 10, "CMD 3",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+75, y+60, 35, 10, "CMD 3",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+75, y+75, 35, 10, "CMD 3",  JavaWrapper.methodToJava(r2cmd0))

s.addButton(x+115, y+15, 15, 10, "X1",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+130, y+15, 10, 10, "X2",  JavaWrapper.methodToJava(r2cmd0))

s.addButton(x+115, y+30, 10, 10, "Y1",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+125, y+30, 15, 10, "Y2",  JavaWrapper.methodToJava(r2cmd0))

s.addButton(x+115, y+45, 25, 15, "XX",  JavaWrapper.methodToJava(r2cmd0))

s.addButton(x+115, y+65, 25, 20, "YY",  JavaWrapper.methodToJava(r2cmd0))

////////////////////////////////////////////////////

let arr7 = [x=500, y=0, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-47, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-48, 0xC, 200);

/////////////////////////////////////////////////////////

s.addText(" - - - - - - - - - - - ", x, y+10, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+10, color, true);
s.addText("CMD Construct [1.0]", x+7, y+20, 0xFFE50A, true);
s.addText("Silverainox#9452", x+7, y+30, 0xFFE50A, true);
s.addText(" - - - - - - - - - - - ", x, y+40, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+40, color, true);
////////////////////////////////////////////////////

let arr1 = [x=5, y=5, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
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

let arrA = [x=80, y=5, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
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

let arrB = [x=155, y=5, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
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
//////// DRAW BUTTONS ////////////
//const reset = () => Hud.openScreen(screen)+World.playSound("block.ender_chest.open", 100)

let arrDR = [x=200, y=10, mx=x+40, my=y+50]
s.addRect(x-5, y+5, mx, my, 0xC, 100) 
s.addText("[DRAW]", x+2, y+10, 0xc666, true);
   s.addButton(x, y+25, 35, 10, "DRAW", JavaWrapper.methodToJava(draw))
   s.addButton(x, y+35, 35, 10, "RESET", JavaWrapper.methodToJava(reset))  
//////////////// CENTRAL WINDOW /////////////////////////////////////////////////
////    REDIRECT
const redirect = () => JsMacros.runScript("redirected.js")
s.addButton(x+205, y+105, 65, 15, "SUB-SCRIPT", JavaWrapper.methodToJava(redirect))
/////////////
   
////////////////////////////////////////////////////

let arrR = [x=5,y=190,mx=mx+x,my=y+100]
s.addRect(x-1,y-1,mx-34,my+1,0xFF000,66);
s.addRect(x,y,mx-35,my,0xC,2000);

s.addText("SPECIAL / MISC / XXX?", x+7, y+6, color2, true);
s.addText("SPECIAL / MISC / XXX?|", x+8, y+5, 0xFF00, true); 

 s.addText(",SUPER sEkkReT SettingZ", x+11, y+16, color2, true);
s.addText("SUPER sEkkReT SettingZ|", x+11, y+16, 0xFF00, true); 
const redirect = () => JsMacros.runScript("redirected.js");
s.addButton(x+5, y+35, 65, 15, "SUB-SCRIPT", JavaWrapper.methodToJava(redirect));

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
/////////// HELP & ABOUT //////////////////

const xxx0 = () => Chat.open(CMD0);
const xxx1 = () => Chat.open();
const xxx2 = () => Chat.say(CMD0);
const xxx3 = () => Chat.say(CMD0);

let arrXB = [x=500, y=55, mx=115+x, my=y+200, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-100, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-101, 0xC, 200);
s.addText(" - - - - - - - - - - - ", x, y+5, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+5, color, true);
s.addText("HELP / ABOUT / DOCS", x+5, y+15, 0xFFE50A, true);
s.addText(" - - - - - - - - - - - ", x, y+25, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+25, color, true);

s.addButton(x+3, y+35, 25, 15, "DOCS",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+28, y+35, 40, 15, "GITHUB",  JavaWrapper.methodToJava(xxx1));
s.addButton(x+69, y+35, 45, 15, "DISCORD",  JavaWrapper.methodToJava(xxx0));

s.addText(" - - - - - - - - - - - ", x, y+50, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+50, color, true);

s.addButton(x+5, y+55, 35, 15, "SHARE",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+40, y+55, 35, 15, "MORE",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+75, y+55, 35, 15, "ABOUT",  JavaWrapper.methodToJava(xxx0));

s.addText(" - - - - - - - - - - - ", x, y+70, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+70, color, true);

s.addButton(x+3, y+75, 35, 15, "NAXA",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+38, y+75, 45, 15, "JOIN US",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+83, y+75, 30, 15, "FAQ",  JavaWrapper.methodToJava(xxx0));

s.addText(" - - - - - - - - - - - ", x, y+90, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+90, color, true);

//////////////////////////////////////////////////////////

//const draw = () => [x=360, y=75, mx=x+55, my=y+50, l=25, w=10]+
//World.playSound("block.ender_chest.open", 100)+
//s.addRect(x-5, y-5, mx, my, 0xC, 200)+
//s.addText("[EXAMPLE]", x, y, 0xFF0000, true)+
//s.addText("[DRAWING]", x, y+10, 0xFF0000, true)+
//s.addButton(x, y+20, l, w, "XXX", JavaWrapper.methodToJava(draw))+
//s.addButton(x+25, y+20, l, w, "ZZZ", JavaWrapper.methodToJava(draw));


//////// DRAW BUTTONS ////////////
//const reset = () => Hud.openScreen(screen)+World.playSound("block.ender_chest.open", 100)

//let arrDR = [x=200, y=10, mx=x+40, my=y+50]
//s.addRect(x-5, y+5, mx, my, 0xC, 100) 
//s.addText("[DRAW]", x+2, y+10, 0xc666, true);
//   s.addButton(x, y+25, 35, 10, "DRAW", JavaWrapper.methodToJava(draw))
//   s.addButton(x, y+35, 35, 10, "RESET", JavaWrapper.methodToJava(reset))  
//////////////// CENTRAL WINDOW /////////////////////////////////////////////////
