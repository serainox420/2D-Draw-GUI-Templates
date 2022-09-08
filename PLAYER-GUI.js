//   [Enchanted SMP] CUSTOM PLAYER INTERFACE
//         By Silverainox#9452

World.playSound("block.ender_chest.open", 1, 1.2)

///////////////// INITIALIZER /////////////////////////

const screen = Hud.createScreen(" ", false) 
screen.setOnInit(JavaWrapper.methodToJava((s) => {

///////////////// VARIABLE ARRAY  /////////////////////////
let arrVar = [VAR1='xxx', VAR2='yyy', VAR3='zzz']
////////////////////// INFO SIGN /////////////////////////

let arrX = [x=500, y=0, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-47, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-48, 0xC, 200);
s.addText(" - - - - - - - - - - - ", x, y+10, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+10, color, true);
s.addText("PLAYER INTERFACE", x+7, y+20, 0xFFE50A, true);
s.addText("Enchanted SMP [v1]", x+7, y+30, 0xFFE50A, true);
s.addText(" - - - - - - - - - - - ", x, y+40, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+40, color, true);

/////////////////////////////////////////////////
//////////    MODIFY VARIABLES TO     ///////////
/////////     CUSTOMIZE YOUR PANEL   ////////////
//////////////////////////////////////////////////

/////////// CUSTOM BAR  //////////////////
// Set your custom binds here
// ROW 1
const r1cmd1 = () =>Chat.say("TEST");
const r1cmd2 = () =>Chat.say("/warp spawn");
const r1cmd3 = () =>Chat.say("");
const r1cmd4 = () =>Chat.say("");
const r1cmd5 = () =>Chat.say("");
// ROW 2
const r2cmd1 = () =>Chat.say("");
const r2cmd2 = () =>Chat.say("");
const r2cmd3 = () =>Chat.say("");
const r2cmd4 = () =>Chat.say("");
const r2cmd5 = () =>Chat.say("");
// ROW 3
const r3cmd1 = () =>Chat.say("");
const r3cmd2 = () =>Chat.say("");
const r3cmd3 = () =>Chat.say("");
const r3cmd4 = () =>Chat.say("");
const r3cmd5 = () =>Chat.say("");
///////////////////// ROW 1 ///////////////////////////

let arr1 = [x=5, y=5, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx-30, my, 0xC, 200);
s.addText("[WARP]", x+7, y+5, color2, true); 
const cmd0 = () => Chat.say("/warp spawn");
const cmd1 = () => Chat.say("/warp");
const cmd2 = () => Chat.say("/warp"); 
const cmd3 = () => Chat.say("/warp");
s.addButton(x+5, y+20, 60, 12, "SPAWN",  JavaWrapper.methodToJava(cmd0))
s.addButton(x+5, y+35, 60, 12, "CMD 1",  JavaWrapper.methodToJava(cmd1))
s.addButton(x+5, y+50, 60, 12, "CMD 2",  JavaWrapper.methodToJava(cmd2))
s.addButton(x+5, y+65, 60, 12, "CMD 3",  JavaWrapper.methodToJava(cmd3))

/////////////////// ROW 2 ////////////////////////////

let arr2 = [x=80, y=5, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx-30, my, 0xC, 200);
s.addText("[ROW 2]", x+7, y+5, color2, true); 

const a2cmd0 = () => Chat.say(R2CMD0);
const a2cmd1 = () => Chat.say(R2CMD1);
const a2cmd2 = () => Chat.say(R2CMD2); 
const a2cmd3 = () => Chat.say(R2CMD3);
s.addButton(x+5, y+20, 30, 12, "CMD 0",  JavaWrapper.methodToJava(a2cmd0))
s.addButton(x+5, y+35, 30, 12, "CMD 1",  JavaWrapper.methodToJava(a2cmd1))
s.addButton(x+5, y+50, 30, 12, "CMD 2",  JavaWrapper.methodToJava(a2cmd2))
s.addButton(x+5, y+65, 30, 12, "CMD 3",  JavaWrapper.methodToJava(a2cmd3))

const a2cmd4 = () => Chat.say(R2CMD0);
const a2cmd5 = () => Chat.say(R2CMD1);
const a2cmd6 = () => Chat.say(R2CMD2); 
const a2cmd7 = () => Chat.say(R2CMD3);
s.addButton(x+35, y+20, 30, 12, "CMD 4",  JavaWrapper.methodToJava(a2cmd4))
s.addButton(x+35, y+35, 30, 12, "CMD 5",  JavaWrapper.methodToJava(a2cmd5))
s.addButton(x+35, y+50, 30, 12, "CMD 6",  JavaWrapper.methodToJava(a2cmd6))
s.addButton(x+35, y+65, 30, 12, "CMD 7",  JavaWrapper.methodToJava(a2cmd7))

///////////////// WIDE ROW //////////////////////////
let arr3 = [x=500, y=65, mx=175+x, my=y+85]+
s.addRect(x-1, y-1, mx-59, my+6, 0xFF000, 66);
s.addRect(x,y,mx-60,my+5,0xC,999);

s.addText("CUSTOM BAR", x+30, y+3, 0xFF0000, true);

//// BUTTONS /////
// Change "NAME" for something else to be displayed on button

s.addButton(x+5, y+15, 35, 10, "NAME",  JavaWrapper.methodToJava(r1cmd1))
s.addButton(x+5, y+30, 35, 10, "NAME",  JavaWrapper.methodToJava(r1cmd2))
s.addButton(x+5, y+45, 35, 10, "NAME",  JavaWrapper.methodToJava(r1cmd3))
s.addButton(x+5, y+60, 35, 10, "NAME",  JavaWrapper.methodToJava(r1cmd4))
s.addButton(x+5, y+75, 35, 10, "NAME",  JavaWrapper.methodToJava(r1cmd5))

s.addButton(x+40, y+15, 35, 10, "NAME",  JavaWrapper.methodToJava(r2cmd1))
s.addButton(x+40, y+30, 35, 10, "NAME",  JavaWrapper.methodToJava(r2cmd2))
s.addButton(x+40, y+45, 35, 10, "NAME",  JavaWrapper.methodToJava(r2cmd3))
s.addButton(x+40, y+60, 35, 10, "NAME",  JavaWrapper.methodToJava(r2cmd4))
s.addButton(x+40, y+75, 35, 10, "NAME",  JavaWrapper.methodToJava(r2cmd5))

s.addButton(x+75, y+15, 35, 10, "NAME",  JavaWrapper.methodToJava(r3cmd1))
s.addButton(x+75, y+30, 35, 10, "NAME",  JavaWrapper.methodToJava(r3cmd2))
s.addButton(x+75, y+45, 35, 10, "NAME",  JavaWrapper.methodToJava(r3cmd3))
s.addButton(x+75, y+60, 35, 10, "NAME",  JavaWrapper.methodToJava(r3cmd4))
s.addButton(x+75, y+75, 35, 10, "NAME",  JavaWrapper.methodToJava(r3cmd5))

////////////////////////////////////////////////////

}))
Hud.openScreen(screen)
