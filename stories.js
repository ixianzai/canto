/* 中华故事三语口语课 · 故事数据
   字段：cat 分类 / name{man,manR,yue,yueR,eng} 三语标题 /
   beats[6] 每句{man,manR,yue,yueR,eng,engR} / words[10] [普通话,拼音,粤语,粤拼,English] /
   hints 基础提示词 / hintsC 挑战提示词 / roles[] [角色,普通话,拼音,粤语,粤拼,English] /
   discuss{basic:[],challenge:[]} 每项[问题,英文,参考] / culture{} */
const STORIES = [

/* ============ 成语 10 ============ */
{
 cat:'成语',
 name:{man:'狐假虎威',manR:'hú jiǎ hǔ wēi',yue:'狐假虎威',yueR:'wu4 gaa2 fu2 wai1',eng:"The Fox Borrows the Tiger's Might"},
 art:['scene','scene','scene'],
 beats:[
  {man:'一只老虎在森林里找食物。',manR:'yī zhī lǎo hǔ zài sēn lín lǐ zhǎo shí wù。',yue:'一只老虎喺森林度搵食。',yueR:'jat1 zek3 lou5 fu2 hai2 sam1 lam4 dou6 wan2 sik6。',eng:'A tiger was looking for food in the forest.'},
  {man:'他抓到了一只狐狸。',manR:'tā zhuā dào le yī zhī hú li。',yue:'佢捉到一只狐狸。',yueR:'keoi5 zuk3 dou2 jat1 zek3 wu4 lei4。',eng:'He caught a fox.'},
  {man:'狐狸说：你别吃我，我是百兽之王。',manR:'hú li shuō：nǐ bié chī wǒ，wǒ shì bǎi shòu zhī wáng。',yue:'狐狸话：你唔好食我，我系百兽之王。',yueR:'wu4 lei4 waa6：nei5 m4 hou2 sik6 ngo5，ngo5 hai6 baak3 sau6 zi1 wong4。',eng:'The fox said: Do not eat me, I am the king of all animals.'},
  {man:'你要是不信，跟我走一趟看看。',manR:'nǐ yào shi bù xìn，gēn wǒ zǒu yī tàng kàn kan。',yue:'你如果唔信，跟我行一趟睇下。',yueR:'nei5 jyu4 gwo2 m4 seon3，gan1 ngo5 haang4 jat1 tong3 tai2 haa5。',eng:'If you do not believe me, come with me and see.'},
  {man:'狐狸走前面，老虎跟后面。',manR:'hú li zǒu zài qián miàn，lǎo hǔ gēn zài hòu miàn。',yue:'狐狸行喺前面，老虎跟喺后面。',yueR:'wu4 lei4 haang4 hai2 cin4 min6，lou5 fu2 gan1 hai2 hau6 min6。',eng:'The fox walked in front and the tiger followed behind.'},
  {man:'野兽都吓跑了，怕的是老虎，不是狐狸。',manR:'yě shòu dōu xià pǎo le，pà de shì lǎo hǔ，bú shì hú li。',yue:'啲野兽都走晒，怕嘅系老虎，唔系狐狸。',yueR:'di1 je5 sau6 dou1 zau2 saai3，pa3 ge3 hai6 lou5 fu2，m4 hai6 wu4 lei4。',eng:'The animals all ran away—afraid of the tiger, not the fox.'}
 ],
 words:[['老虎','lǎo hǔ','老虎','lou5 fu2','tiger'],['狐狸','hú li','狐狸','wu4 lei4','fox'],['森林','sēn lín','森林','sam1 lam4','forest'],['食物','shí wù','食物','sik6 mat6','food'],['百兽之王','bǎi shòu zhī wáng','百兽之王','baak3 sau6 zi1 wong4','king of animals'],['相信','xiāng xìn','信','seon3','believe'],['前面','qián miàn','前面','cin4 min6','in front'],['后面','hòu miàn','后面','hau6 min6','behind'],['逃跑','táo pǎo','走','zau2','run away'],['害怕','hài pà','怕','pa3','afraid']],
 hints:['老虎','找食物','抓到狐狸','别吃我','跟我走','前面后面','野兽逃跑','怕的是谁'],
 hintsC:['狐假虎威','百兽之王','半信半疑','狐步虎趋','真相'],
 roles:[
  ['tiger','站住！我要吃你！','zhàn zhù！wǒ yào chī nǐ！','企住！我要食你！','kei5 zyu6！ngo5 jiu3 sik6 nei5！',"Stop! I'm going to eat you!"],
  ['fox','别吃我！我是百兽之王。','bié chī wǒ！wǒ shì bǎi shòu zhī wáng。','唔好食我！我系百兽之王。','m4 hou2 sik6 ngo5！ngo5 hai6 baak3 sau6 zi1 wong4。','Do not eat me! I am king of the animals.'],
  ['tiger','我不信，你带我去看看。','wǒ bù xìn，nǐ dài wǒ qù kàn kan。','我唔信，你带我去看下。','ngo5 m4 seon3，nei5 daai3 ngo5 heoi3 tai2 haa5。',"I don't believe you. Show me."],
  ['fox','跟我来，看它们怕不怕。','gēn wǒ lái，kàn tā men pà bu pà。','跟我嚟，睇下佢哋怕唔怕。','gan1 ngo5 lai4，tai2 haa5 keoi5 dei6 pa3 m4 pa3。','Follow me and see if they are afraid.']
 ],
 discuss:{basic:[
  ['故事里有谁？谁最聪明？','Who is in the story? Who is cleverest?','有老虎和狐狸。狐狸最聪明。'],
  ['你喜欢狐狸吗？为什么？','Do you like the fox? Why?','喜欢，因为它很聪明；或：不喜欢，因为它骗人。'],
  ['野兽怕的是谁？','Who were the animals afraid of?','怕的是老虎，不是狐狸。']
 ],challenge:[
  ['如果你是老虎，知道真相后会怎么做？','If you were the tiger, what would you do?','我会再生气，也记住这次教训。'],
  ['生活中有没有「狐假虎威」的人？','Is there anyone like this in real life?','有人仗着父母或老板的厉害去吓唬别人。'],
  ['给故事编一个新结尾。','Make a new ending.','老虎找到狐狸，狐狸只好承认自己撒了谎。']
 ]},
 culture:{m:'借别人的威势来吓唬人；自己没本事，靠别人撑腰。',en:"To borrow someone else's power to intimidate others.",near:'狗仗人势',opp:'独当一面',use:{man:'他不过是狐假虎威，大家不用怕他。',manR:'tā bù guò shì hú jiǎ hǔ wēi，dà jiā bù yòng pà tā。',yue:'佢只系狐假虎威，唔使惊佢。',yueR:'keoi5 zi2 hai6 wu4 gaa2 fu2 wai1，m4 sai2 geng1 keoi5。',eng:'He is just borrowing the tiger\'s might—do not be afraid.'}}
},
{
 cat:'成语',
 name:{man:'守株待兔',manR:'shǒu zhū dài tù',yue:'守株待兔',yueR:'sau2 zyu1 doi6 tou3',eng:'Waiting by the Stump for a Rabbit'},
 art:['animals','animals','tiger'],
 beats:[
  {man:'从前有个农夫，每天在田里干活。',manR:'cóng qián yǒu gè nóng fū，měi tiān zài tián lǐ gàn huó。',yue:'从前有个农夫，每日喺田度做嘢。',yueR:'cung4 cin4 jau5 go3 nung4 fu1，mui5 jat6 hai2 tin4 dou6 zou6 je5。',eng:'Long ago there was a farmer who worked in his field every day.'},
  {man:'一只兔子跑太快，撞在树桩上死了。',manR:'yī zhī tù zi pǎo tài kuài，zhuàng zài shù zhuāng shàng sǐ le。',yue:'一只兔走得太快，撞喺树桩上死咗。',yueR:'jat1 zek3 tou3 zau2 dak1 taai3 faai3，zong3 hai2 syu6 zong1 soeng6 sei2 zo2。',eng:'A rabbit ran so fast that it hit a tree stump and died.'},
  {man:'农夫白捡了一只兔子，非常高兴。',manR:'nóng fū bái jiǎn le yī zhī tù zi，fēi cháng gāo xìng。',yue:'农夫白攞咗只兔，好开心。',yueR:'nung4 fu1 baak6 lo2 zo2 zek3 tou3，hou2 hoi1 sam1。',eng:'The farmer got a free rabbit and was very happy.'},
  {man:'从此他放下锄头，天天守着树桩。',manR:'cóng cǐ tā fàng xià chú tóu，tiān tiān shǒu zhe shù zhuāng。',yue:'从此佢放下锄头，日日守住个树桩。',yueR:'cung4 ci2 keoi5 fong3 haa6 cou4 tau4，jat6 jat6 sau2 zyu6 go3 syu6 zong1。',eng:'From then on he put down his hoe and waited by the stump every day.'},
  {man:'田里长了草，他也不管。',manR:'tián lǐ zhǎng le cǎo，tā yě bù guǎn。',yue:'田度生咗草，佢都唔理。',yueR:'tin4 dou6 saang1 zo2 cou2，keoi5 dou1 m4 lei5。',eng:'Weeds grew in the field but he did not care.'},
  {man:'再也没有兔子撞上来，他什么也没等到。',manR:'zài yě méi yǒu tù zi zhuàng shàng lái，tā shén me yě méi děng dào。',yue:'再冇兔撞埋嚟，佢乜都等唔到。',yueR:'zoi3 mou5 tou3 zong3 maai4 lai4，keoi5 mat1 dou1 dang2 m4 dou2。',eng:'No more rabbits came, and he got nothing.'}
 ],
 words:[['农夫','nóng fū','农夫','nung4 fu1','farmer'],['兔子','tù zi','兔','tou3','rabbit'],['树桩','shù zhuāng','树桩','syu6 zong1','tree stump'],['田地','tián dì','田','tin4','field'],['锄头','chú tóu','锄头','cou4 tau4','hoe'],['撞','zhuàng','撞','zong3','hit'],['等待','děng dài','等','dang2','wait'],['干活','gàn huó','做嘢','zou6 je5','work'],['杂草','zá cǎo','草','cou2','weed'],['运气','yùn qi','运气','wan6 hei3','luck']],
 hints:['农夫','兔子','树桩','撞死','放下锄头','天天等','田荒了','没等到'],
 hintsC:['守株待兔','不劳而获','偶然','必然','反省'],
 roles:[
  ['other','我今天捡到一只兔子！','wǒ jīn tiān jiǎn dào yī zhī tù zi！','我今日攞到只兔！','ngo5 gam1 jat6 lo2 dou2 zek3 tou3！','I found a rabbit today!'],
  ['other','明天一定还有兔子。','míng tiān yī dìng hái yǒu tù zi。','听日一定仲有兔。','ting1 jat6 jat1 ding6 zung6 jau5 tou3。','There will be another rabbit tomorrow.'],
  ['other','你为什么不去种田？','nǐ wèi shén me bú qù zhòng tián？','你点解唔去种田？','nei5 dim2 gaai2 m4 heoi3 zung3 tin4？',"Why don't you farm?"],
  ['other','等都等不到，我太傻了。','děng yě děng bu dào，wǒ tài shǎ le。','等都等唔到，我太傻咗。','dang2 dou1 dang2 m4 dou2，ngo5 taai3 so4 zo2。','Waiting got me nothing. I was foolish.']
 ],
 discuss:{basic:[
  ['农夫为什么停下工作？','Why did the farmer stop working?','因为他捡到一只撞死的兔子。'],
  ['兔子还会再来吗？','Will another rabbit come?','不会，那只是巧合。'],
  ['这个故事告诉我们什么？','What does the story teach us?','不能靠运气，要踏实工作。']
 ],challenge:[
  ['生活中有「守株待兔」的人吗？','Is there anyone like this in real life?','有人不努力，只等好运降临。'],
  ['如果你是农夫的朋友，会怎么劝他？','If you were his friend, what would you say?','我会说：机会不会天天来，快回去种田。'],
  ['「运气」和「努力」哪个更重要？','Which matters more, luck or effort?','努力更重要，运气只是加分。']
 ]},
 culture:{m:'死守狭隘经验，妄想不劳而获；比喻心存侥幸，不知变通。',en:'To wait idly for gains without effort; to rely on luck instead of hard work.',near:'不劳而获',opp:'脚踏实地',use:{man:'想考好又不读书，简直是守株待兔。',manR:'xiǎng kǎo hǎo yòu bù dú shū，jiǎn zhí shì shǒu zhū dài tù。',yue:'想考好又唔读书，简直系守株待兔。',yueR:'soeng2 haau2 hou2 jau6 m4 duk6 syu1，gaan2 zik6 hai6 sau2 zyu1 doi6 tou3。',eng:'Wanting good grades without studying is waiting by the stump.'}}
},
{
 cat:'成语',
 name:{man:'画蛇添足',manR:'huà shé tiān zú',yue:'画蛇添足',yueR:'waa2 se4 tim1 zuk1',eng:'Drawing a Snake and Adding Feet'},
 art:['scene','scene','animals'],
 beats:[
  {man:'古时候，几个人比赛画蛇。',manR:'gǔ shí hou，jǐ gè rén bǐ sài huà shé。',yue:'古时候，几个人比赛画蛇。',yueR:'gu2 si4 hau6，gei2 go3 jan4 bei2 saai3 waa2 se4。',eng:'Long ago, some men competed to draw a snake.'},
  {man:'谁先画完，谁就能喝那壶酒。',manR:'shuí xiān huà wán，shuí jiù néng hē nà hú jiǔ。',yue:'边个先画完，就饮到嗰壶酒。',yueR:'bin1 go3 sin1 waa2 jyun4，zau6 jam2 dou2 go2 wu4 zau2。',eng:'Whoever finished first could drink the wine.'},
  {man:'有个人先画好了，非常得意。',manR:'yǒu gè rén xiān huà hǎo le，fēi cháng dé yì。',yue:'有个人先画好咗，好得意。',yueR:'jau5 go3 jan4 sin1 waa2 hou2 zo2，hou2 dak1 ji3。',eng:'One man finished first and felt very proud.'},
  {man:'他左手拿着酒，右手给蛇添上脚。',manR:'tā zuǒ shǒu ná zhe jiǔ，yòu shǒu gěi shé tiān shàng jiǎo。',yue:'佢左手揸住酒，右手畀条蛇添脚。',yueR:'keoi5 zo2 sau2 zaa1 zyu6 zau2，jau6 sau2 bei2 tiu4 se4 tim1 goek3。',eng:'Holding the wine, he added feet to his snake.'},
  {man:'另一个人画完了，一把抢过酒。',manR:'lìng yī gè rén huà wán le，yī bǎ qiǎng guò jiǔ。',yue:'另一个人画完咗，一手抢过杯酒。',yueR:'ling6 jat1 go3 waa2 jyun4 zo2，jat1 sau2 coeng2 gwo3 bui1 zau2。',eng:'Another man finished and snatched the wine.'},
  {man:'蛇本来没有脚，你多此一举！',manR:'shé běn lái méi yǒu jiǎo，nǐ duō cǐ yī jǔ！',yue:'蛇本来就冇脚，你多此一举！',yueR:'se4 bun2 loi4 zau6 mou5 goek3，nei5 do1 ci2 jat1 geoi2！',eng:'Snakes have no feet! That was unnecessary.'}
 ],
 words:[['蛇','shé','蛇','se4','snake'],['画','huà','画','waa2','draw'],['脚','jiǎo','脚','goek3','foot'],['酒','jiǔ','酒','zau2','wine'],['先','xiān','先','sin1','first'],['完成','wán chéng','画完','waa2 jyun4','finish'],['得意','dé yì','得意','dak1 ji3','proud'],['抢','qiǎng','抢','coeng2','snatch'],['多余','duō yú','多余','do1 jyu4','extra'],['比赛','bǐ sài','比赛','bei2 saai3','competition']],
 hints:['画蛇','比赛','喝酒','先画完','添脚','被抢酒','蛇无脚','多此一举'],
 hintsC:['画蛇添足','弄巧反拙','恰到好处','过犹不及'],
 roles:[
  ['other','我画好了，先喝为敬！','wǒ huà hǎo le，xiān hē wéi jìng！','我画好咗，先饮为敬！','ngo5 waa2 hou2 zo2，sin1 jam2 wai4 ging3！',"I'm done. Cheers!"],
  ['other','蛇怎么能有脚呢？','shé zěn me néng yǒu jiǎo ne？','蛇点可能会有脚？','se4 dim2 ho2 nang4 jau5 goek3？','How can a snake have feet?'],
  ['other','你还没画完，酒是我的了。','nǐ hái méi huà wán，jiǔ shì wǒ de le。','你仲未画完，酒系我㗎啦。','nei5 zung6 mei6 waa2 jyun4，zau2 hai6 ngo5 gaa3 laa1。','You are not done; the wine is mine.'],
  ['other','我真是多此一举。','wǒ zhēn shì duō cǐ yī jǔ。','我真系多此一举。','ngo5 zan1 hai6 do1 ci2 jat1 geoi2。','That was indeed unnecessary.']
 ],
 discuss:{basic:[
  ['谁先喝到酒？','Who drank the wine first?','第二个人。'],
  ['第一个人做错了什么？','What did the first man do wrong?','给蛇添了脚。'],
  ['蛇有脚吗？','Do snakes have feet?','没有。']
 ],challenge:[
  ['「画蛇添足」和「弄巧反拙」有什么不同？','What is the difference between these idioms?','都指做多余的事反而坏了事。'],
  ['你有没有做过画蛇添足的事？','Have you ever done something like this?','例如给已经很好的作文又乱加一段。'],
  ['什么时候「多加一点」是好的？','When is adding extra a good thing?','本来不完整时，补充才有帮助。']
 ]},
 culture:{m:'做了多余的事，反而不恰当；比喻多此一举、弄巧成拙。',en:'To add something unnecessary and spoil the effect; to overdo it.',near:'多此一举',opp:'恰到好处',use:{man:'文章已经很好，你再加这段就是画蛇添足。',manR:'wén zhāng yǐ jīng hěn hǎo，nǐ zài jiā zhè duàn jiù shì huà shé tiān zú。',yue:'篇文章已经好好，你再加呢段就系画蛇添足。',yueR:'bun1 pin1 zoeng1 ji5 ging1 hou2 hou2，nei5 zoi3 gaa1 ni1 dyun6 zau6 hai6 waa2 se4 tim1 zuk1。',eng:'The essay was already good; adding this part is drawing feet on a snake.'}}
},
{
 cat:'成语',
 name:{man:'亡羊补牢',manR:'wáng yáng bǔ láo',yue:'亡羊补牢',yueR:'mong4 joeng4 bou2 lou4',eng:'Mend the Fold After the Sheep Are Lost'},
 art:['animals','animals','animals'],
 beats:[
  {man:'从前有个牧羊人，养了一群羊。',manR:'cóng qián yǒu gè mù yáng rén，yǎng le yī qún yáng。',yue:'从前有个牧羊人，养咗一群羊。',yueR:'cung4 cin4 jau5 go3 muk6 joeng4 jan4，joeng5 zo2 jat1 kwan4 joeng4。',eng:'Long ago a shepherd raised a flock of sheep.'},
  {man:'一天早上，他发现少了一只羊。',manR:'yī tiān zǎo shang，tā fā xiàn shǎo le yī zhī yáng。',yue:'一日朝早，佢发现少咗只羊。',yueR:'jat1 jat6 ziu1 zou2，keoi5 faat3 jin6 siu2 zo2 zek3 joeng4。',eng:'One morning he found one sheep missing.'},
  {man:'原来羊圈破了个洞，狼叼走了羊。',manR:'yuán lái yáng juàn pò le gè dòng，láng diāo zǒu le yáng。',yue:'原来羊圈烂咗个窿，狼叼走咗只羊。',yueR:'jyun4 loi4 joeng4 hyun6 laan6 zo2 go3 lung1，long4 diu1 zau2 zo2 zek3 joeng4。',eng:'The pen had a hole and a wolf took the sheep.'},
  {man:'邻居劝他快修羊圈，他不听。',manR:'lín jū quàn tā kuài xiū yáng juàn，tā bù tīng。',yue:'邻居劝佢快修羊圈，佢唔听。',yueR:'ling4 geoi1 hyun3 keoi5 faai3 sau1 joeng4 hyun6，keoi5 m4 ting1。',eng:'His neighbour urged him to fix it, but he would not listen.'},
  {man:'第二天又少了一只羊，他后悔了。',manR:'dì èr tiān yòu shǎo le yī zhī yáng，tā hòu huǐ le。',yue:'第二日又少咗只羊，佢后悔咗。',yueR:'dai6 ji6 jat6 jau6 siu2 zo2 zek3 joeng4，keoi5 hau6 fui2 zo2。',eng:'The next day another sheep was gone. He regretted it.'},
  {man:'他赶快补好洞，从此再没丢过羊。',manR:'tā gǎn kuài bǔ hǎo dòng，cóng cǐ zài méi diū guò yáng。',yue:'佢赶住补好个窿，从此再冇唔见过羊。',yueR:'keoi5 gon2 zyu6 bou2 hou2 go3 lung1，cung4 ci2 zoi3 mou5 m4 gin3 gwo3 joeng4。',eng:'He quickly mended the hole and never lost another sheep.'}
 ],
 words:[['羊','yáng','羊','joeng4','sheep'],['狼','láng','狼','long4','wolf'],['羊圈','yáng juàn','羊圈','joeng4 hyun6','sheepfold'],['洞','dòng','窿','lung1','hole'],['修补','xiū bǔ','修补','sau1 bou2','mend'],['邻居','lín jū','邻居','ling4 geoi1','neighbour'],['劝','quàn','劝','hyun3','advise'],['后悔','hòu huǐ','后悔','hau6 fui2','regret'],['丢失','diū shī','唔见','m4 gin3','lose'],['及时','jí shí','及时','zap1 si4','in time']],
 hints:['牧羊人','羊圈','破洞','狼','丢羊','邻居劝','补牢','不再丢'],
 hintsC:['亡羊补牢','为时未晚','吸取教训','防患未然'],
 roles:[
  ['other','我的羊少了一只！','wǒ de yáng shǎo le yī zhī！','我嘅羊少咗只！','ngo5 ge3 joeng4 siu2 zo2 zek3！','One of my sheep is gone!'],
  ['other','快把羊圈修好吧。','kuài bǎ yáng juàn xiū hǎo ba。','快啲修好个羊圈啦。','faai3 di1 sau1 hou2 go3 joeng4 hyun6 laa1。','Fix the sheepfold quickly.'],
  ['other','没关系，才丢一只。','méi guān xi，cái diū yī zhī。','唔紧要，先至少一只。','m4 gan2 jiu3，sin1 zai2 siu2 jat1 zek3。','It is fine, only one is gone.'],
  ['other','又丢了！早该听你的。','yòu diū le！zǎo gāi tīng nǐ de。','又少咗！早该听你话。','jau6 siu2 zo2！zou2 goi1 ting1 nei5 waa6。','Another is gone! I should have listened.']
 ],
 discuss:{basic:[
  ['羊为什么会丢？','Why did the sheep go missing?','羊圈破了个洞。'],
  ['邻居说了什么？','What did the neighbour say?','劝他快修羊圈。'],
  ['最后还丢羊吗？','Did he lose more sheep?','没有，他补好了洞。']
 ],challenge:[
  ['「亡羊补牢」是早还是晚？','Is mending the fold too late?','不算晚，及时补救还不晚。'],
  ['你有一次「知错就改」的经历吗？','Tell us about a time you corrected a mistake.','例如考试后认真改错，下次进步。'],
  ['怎样「未亡羊先补牢」？','How can we prevent problems before they happen?','平时就检查、做好准备。']
 ]},
 culture:{m:'羊丢了再修羊圈也不算晚；比喻出了问题及时补救，可以防止继续损失。',en:'It is not too late to mend the fold after losing a sheep; correct a mistake in time.',near:'知错就改',opp:'一错再错',use:{man:'发现问题就改，亡羊补牢，为时未晚。',manR:'fā xiàn wèn tí jiù gǎi，wáng yáng bǔ láo，wéi shí wèi wǎn。',yue:'发现问题就改，亡羊补牢，为时未晚。',yueR:'faat3 jin6 man6 tai4 zau6 goi2，mong4 joeng4 bou2 lou4，wai4 si4 mei6 maan5。',eng:'Fix it as soon as you find the problem—better late than never.'}}
},
{
 cat:'成语',
 name:{man:'掩耳盗铃',manR:'yǎn ěr dào líng',yue:'掩耳盗铃',yueR:'jim2 ji5 dou6 ling4',eng:'Covering One\'s Ears While Stealing a Bell'},
 art:['tiger','tiger','tiger'],
 beats:[
  {man:'从前有个人，看见一口大钟。',manR:'cóng qián yǒu gè rén，kàn jiàn yī kǒu dà zhōng。',yue:'从前有个人，见到一口大钟。',yueR:'cung4 cin4 jau5 go3 jan4，gin3 dou2 jat1 hau2 daai6 zung1。',eng:'Long ago a man saw a big bell.'},
  {man:'钟很漂亮，他想把它偷走。',manR:'zhōng hěn piào liang，tā xiǎng bǎ tā tōu zǒu。',yue:'钟好靓，佢想将佢偷走。',yueR:'zung1 hou2 leng3，keoi5 soeng2 zoeng1 keoi5 tau1 zau2。',eng:'The bell was beautiful and he wanted to steal it.'},
  {man:'可是钟太重，背不动。',manR:'kě shì zhōng tài zhòng，bēi bu dòng。',yue:'不过钟太重，背唔郁。',yueR:'bat1 gwo3 zung1 taai3 cung5，bui6 m4 juk1。',eng:'But the bell was too heavy to carry.'},
  {man:'他想起一个办法：把钟敲碎。',manR:'tā xiǎng qǐ yī gè bàn fǎ：bǎ zhōng qiāo suì。',yue:'佢谂起个办法：将个钟敲碎。',yueR:'keoi5 nam2 hei2 go3 baan6 faat3：zoeng1 go3 zung1 hiu1 seoi3。',eng:'He thought of an idea: break the bell into pieces.'},
  {man:'敲钟会响，他赶紧捂住自己的耳朵。',manR:'qiāo zhōng huì xiǎng，tā gǎn jǐn wǔ zhù zì jǐ de ěr duo。',yue:'敲钟会响，佢赶住揞住自己耳仔。',yueR:'hiu1 zung1 wui5 hoeng2，keoi5 gon2 zyu6 ngam2 zyu6 zi6 gei2 ji5 zai2。',eng:'The bell would ring, so he covered his own ears.'},
  {man:'他以为听不见，别人也就听不见了。',manR:'tā yǐ wéi tīng bu jiàn，bié rén yě jiù tīng bu jiàn le。',yue:'佢以为听唔见，人哋都听唔见。',yueR:'keoi5 ji5 wai4 ting1 m4 gin3，jan4 dei6 dou1 ting1 m4 gin3。',eng:'He thought if he could not hear it, no one else could.'}
 ],
 words:[['钟','zhōng','钟','zung1','bell'],['偷','tōu','偷','tau1','steal'],['耳朵','ěr duo','耳仔','ji5 zai2','ear'],['捂住','wǔ zhù','揞住','ngam2 zyu6','cover'],['响声','xiǎng shēng','声音','seng1 jam1','sound'],['敲','qiāo','敲','hiu1','strike'],['碎','suì','碎','seoi3','break'],['办法','bàn fǎ','办法','baan6 faat3','method'],['以为','yǐ wéi','以为','ji5 wai4','think'],['自己','zì jǐ','自己','zi6 gei2','oneself']],
 hints:['大钟','想偷','太重','敲碎','捂耳朵','以为听不见','被人发现','自欺欺人'],
 hintsC:['掩耳盗铃','自欺欺人','一厢情愿','客观事实'],
 roles:[
  ['other','这口钟真漂亮！','zhè kǒu zhōng zhēn piào liang！','呢口钟真系靓！','ni1 hau2 zung1 zan1 hai6 leng3！','What a beautiful bell!'],
  ['other','我把它偷回家。','wǒ bǎ tā tōu huí jiā。','我将佢偷返屋企。','ngo5 zoeng1 keoi5 tau1 faan1 uk1 kei2。','I will steal it home.'],
  ['other','我捂住耳朵就听不见了。','wǒ wǔ zhù ěr duo jiù tīng bu jiàn le。','我揞住耳仔就听唔见。','ngo5 ngam2 zyu6 ji5 zai2 zau6 ting1 m4 gin3。','If I cover my ears I cannot hear it.'],
  ['other','大家都听见了，你被骗了自己。','dà jiā dōu tīng jiàn le，nǐ piàn le zì jǐ。','大家都听到，你呃咗自己。','daai6 gaa1 dou1 ting1 gin3 zo2，nei5 ngak1 zo2 zi6 gei2。','Everyone heard it; you only fooled yourself.']
 ],
 discuss:{basic:[
  ['他想偷什么？','What did he want to steal?','一口大钟。'],
  ['他为什么捂住耳朵？','Why did he cover his ears?','他以为别人也听不见。'],
  ['别人听见了吗？','Did others hear it?','听见了。']
 ],challenge:[
  ['这个人和「狐假虎威」的狐狸像吗？','Is he like the fox in the earlier story?','都以为骗得了别人，其实只骗了自己。'],
  ['生活中有「掩耳盗铃」的事吗？','Any real-life examples?','明明做错了却装作没事。'],
  ['怎样才算勇敢面对问题？','What does it mean to face a problem bravely?','承认错误，想办法解决。']
 ]},
 culture:{m:'捂住耳朵偷钟，以为别人听不见；比喻自己欺骗自己，明明掩盖不住的事偏要掩盖。',en:'Covering one\'s ears while stealing a bell; self-deception—hiding what cannot be hidden.',near:'自欺欺人',opp:'实事求是',use:{man:'成绩单藏起来也没用，这不是掩耳盗铃吗？',manR:'chéng jì dān cáng qǐ lái yě méi yòng，zhè bú shì yǎn ěr dào líng ma？',yue:'成绩单收埋都冇用，呢个咪掩耳盗铃？',yueR:'sing4 zik1 daan1 sau1 maai4 dou1 mou5 jung6，ni1 go3 mai5 jim2 ji5 dou6 ling4？',eng:'Hiding your report card is just covering your ears while stealing a bell.'}}
},
{
 cat:'成语',
 name:{man:'井底之蛙',manR:'jǐng dǐ zhī wā',yue:'井底之蛙',yueR:'zeng2 dai2 zi1 waa1',eng:'The Frog at the Bottom of the Well'},
 art:['animals','animals','scene'],
 beats:[
  {man:'一只青蛙住在井里。',manR:'yī zhī qīng wā zhù zài jǐng lǐ。',yue:'一只青蛙住喺井入面。',yueR:'jat1 zek3 cing1 waa1 zyu6 hai2 zeng2 jap6 min6。',eng:'A frog lived in a well.'},
  {man:'它每天看见的，只有井口那么大的天。',manR:'tā měi tiān kàn jiàn de，zhǐ yǒu jǐng kǒu nà me dà de tiān。',yue:'佢每日见到嘅，只有井口咁大嘅天。',yueR:'keoi5 mui5 jat6 gin3 dou2 ge3，zi2 jau5 zeng2 hau2 gam2 daai6 ge3 tin1。',eng:'All it saw each day was the sky the size of the well opening.'},
  {man:'它觉得世界就这么大，非常满足。',manR:'tā jué de shì jiè jiù zhè me dà，fēi cháng mǎn zú。',yue:'佢觉得世界就咁大，好满足。',yueR:'keoi5 gyut3 dak1 sai3 gaai3 zau6 gam2 daai6，hou2 mun5 zuk1。',eng:'It thought the world was only that big and felt content.'},
  {man:'一只海龟路过，停下来跟它说话。',manR:'yī zhī hǎi guī lù guò，tíng xià lái gēn tā shuō huà。',yue:'一只海龟经过，停低同佢讲嘢。',yueR:'jat1 zek3 hoi2 gwai1 ging1 gwo3，ting4 dai1 tung4 keoi5 gong2 je5。',eng:'A sea turtle passed by and stopped to talk.'},
  {man:'海龟说：大海无边无际，才叫大。',manR:'hǎi guī shuō：dà hǎi wú biān wú jì，cái jiào dà。',yue:'海龟话：大海无边无际，先叫大。',yueR:'hoi2 gwai1 waa6：daai6 hoi2 mou4 bin1 mou4 zai3，sin1 giu3 daai6。',eng:'The turtle said: The sea is boundless—that is what big means.'},
  {man:'青蛙听了，第一次知道自己太渺小。',manR:'qīng wā tīng le，dì yī cì zhī dào zì jǐ tài miǎo xiǎo。',yue:'青蛙听咗，第一次知道自己太渺小。',yueR:'cing1 waa1 ting1 zo2，dai6 jat1 ci3 zi1 dou2 zi6 gei2 taai3 miu5 siu2。',eng:'Hearing this, the frog first realised how small it was.'}
 ],
 words:[['青蛙','qīng wā','青蛙','cing1 waa1','frog'],['井','jǐng','井','zeng2','well'],['天','tiān','天','tin1','sky'],['世界','shì jiè','世界','sai3 gaai3','world'],['海龟','hǎi guī','海龟','hoi2 gwai1','sea turtle'],['大海','dà hǎi','大海','daai6 hoi2','sea'],['无边无际','wú biān wú jì','无边无际','mou4 bin1 mou4 zai3','boundless'],['满足','mǎn zú','满足','mun5 zuk1','content'],['渺小','miǎo xiǎo','渺小','miu5 siu2','tiny'],['见识','jiàn shi','见识','gin3 sik1','knowledge']],
 hints:['青蛙','井里','井口的天','很满足','海龟','大海','才知道','太渺小'],
 hintsC:['井底之蛙','坐井观天','见识短浅','开阔眼界'],
 roles:[
  ['other','我的天最大，世界就这么大！','wǒ de tiān zuì dà，shì jiè jiù zhè me dà！','我嘅天最大，世界就咁大！','ngo5 ge3 tin1 zeoi3 daai6，sai3 gaai3 zau6 gam2 daai6！','My sky is the biggest; the world is this big!'],
  ['other','你出来看看大海吧。','nǐ chū lái kàn kan dà hǎi ba。','你出嚟睇下大海啦。','nei5 ceot1 lai4 tai2 haa5 daai6 hoi2 laa1。','Come out and see the sea.'],
  ['other','大海有多大？','dà hǎi yǒu duō dà？','大海有几大？','daai6 hoi2 jau5 gei2 daai6？','How big is the sea?'],
  ['other','无边无际，你我都太渺小了。','wú biān wú jì，nǐ wǒ dōu tài miǎo xiǎo le。','无边无际，你我都太渺小。','mou4 bin1 mou4 zai3，nei5 ngo5 dou1 taai3 miu5 siu2。','Boundless—we are both so small.']
 ],
 discuss:{basic:[
  ['青蛙住在哪里？','Where does the frog live?','住在井里。'],
  ['青蛙以为世界有多大？','How big did the frog think the world was?','只有井口那么大。'],
  ['海龟说了什么？','What did the turtle say?','大海无边无际。']
 ],challenge:[
  ['你有没有像井底之蛙的时候？','When have you been like the frog?','只知道自己身边的事，不知道外面。'],
  ['怎样开阔自己的眼界？','How can we widen our horizons?','多读书、多旅行、听别人说。'],
  ['「知道得少」和「骄傲」有什么关系？','How are ignorance and pride linked?','知道得少的人反而容易骄傲。']
 ]},
 culture:{m:'井底的青蛙只看见井口大的天；比喻见识狭窄、自以为了不起的人。',en:'A frog at the bottom of a well; someone with a narrow view who thinks they know everything.',near:'坐井观天',opp:'见多识广',use:{man:'他没出过国就笑别人，真是井底之蛙。',manR:'tā méi chū guò guó jiù xiào bié rén，zhēn shì jǐng dǐ zhī wā。',yue:'佢冇出过国就笑人，真系井底之蛙。',yueR:'keoi5 mou5 ceot1 gwo3 gwok3 zau6 siu3 jan4，zan1 hai6 zeng2 dai2 zi1 waa1。',eng:'He has never travelled yet laughs at others—a frog at the bottom of a well.'}}
},
{
 cat:'成语',
 name:{man:'刻舟求剑',manR:'kè zhōu qiú jiàn',yue:'刻舟求剑',yueR:'hak1 zau1 kau4 gim3',eng:'Marking the Boat to Find a Sword'},
 art:['animals','animals','animals'],
 beats:[
  {man:'有个人坐船过河。',manR:'yǒu gè rén zuò chuán guò hé。',yue:'有个人坐船过河。',yueR:'jau5 go3 jan4 co5 syun4 gwo3 ho4。',eng:'A man was crossing a river by boat.'},
  {man:'他的剑不小心掉进水里。',manR:'tā de jiàn bù xiǎo xīn diào jìn shuǐ lǐ。',yue:'佢把剑唔小心跌落水。',yueR:'keoi5 baa2 gim3 m4 siu2 sam1 dit3 luk6 seoi2。',eng:'His sword accidentally fell into the water.'},
  {man:'他在船边刻了一个记号。',manR:'tā zài chuán biān kè le yī gè jì hao。',yue:'佢喺船边刻咗个记号。',yueR:'keoi5 hai2 syun4 bin1 hak1 zo2 go3 gei3 hou6。',eng:'He carved a mark on the side of the boat.'},
  {man:'他说：我的剑就是从这里掉下去的。',manR:'tā shuō：wǒ de jiàn jiù shì cóng zhè lǐ diào xià qù de。',yue:'佢话：我嘅剑系由呢度跌落去嘅。',yueR:'keoi5 waa6：ngo5 ge3 gim3 hai6 jau4 ni1 dou6 dit3 luk6 heoi3 ge3。',eng:'He said: My sword fell from right here.'},
  {man:'船靠岸了，他照着记号跳下水去找。',manR:'chuán kào àn le，tā zhào zhe jì hao tiào xià shuǐ qù zhǎo。',yue:'船埋岸咗，佢按住个记号跳落水去搵。',yueR:'syun4 maai4 ngon5 zo2，keoi5 on3 zyu6 go3 gei3 hou6 tiu3 luk6 seoi2 heoi3 wan2。',eng:'When the boat landed, he dived in at the mark to look.'},
  {man:'船走了，剑却不会跟着走，怎么找得到？',manR:'chuán zǒu le，jiàn què bú huì gēn zhe zǒu，zěn me zhǎo de dào？',yue:'船行咗，剑又唔会跟住行，点搵得到？',yueR:'syun4 haang4 zo2，gim3 jau6 m4 wui5 gan1 zyu6 haang4，dim2 wan2 dak1 dou2？',eng:'The boat moved but the sword did not. How could he find it?'}
 ],
 words:[['船','chuán','船','syun4','boat'],['剑','jiàn','剑','gim3','sword'],['河','hé','河','ho4','river'],['掉','diào','跌','dit3','fall'],['记号','jì hao','记号','gei3 hou6','mark'],['刻','kè','刻','hak1','carve'],['岸','àn','岸','ngon5','bank'],['找','zhǎo','搵','wan2','look for'],['水','shuǐ','水','seoi2','water'],['办法','bàn fǎ','办法','baan6 faat3','way']],
 hints:['坐船','剑落水','刻记号','船靠岸','照记号找','找不到','船动剑不动','死板'],
 hintsC:['刻舟求剑','墨守成规','随机应变','情况会变'],
 roles:[
  ['other','不好，我的剑掉水里了！','bù hǎo，wǒ de jiàn diào shuǐ lǐ le！','唔好，我嘅剑跌落水啦！','m4 hou2，ngo5 ge3 gim3 dit3 luk6 seoi2 laa1！','Oh no, my sword fell in the water!'],
  ['other','我在这里刻个记号。','wǒ zài zhè lǐ kè gè jì hao。','我喺呢度刻个记号。','ngo5 hai2 ni1 dou6 hak1 go3 gei3 hou6。','I will mark this spot.'],
  ['other','到岸了，快下去找！','dào àn le，kuài xià qù zhǎo！','到岸啦，快啲落去搵！','dou3 ngon5 laa1，faai3 di1 luk6 heoi3 wan2！','We have landed—go and find it!'],
  ['other','船走了，剑不会跟着走呀。','chuán zǒu le，jiàn bú huì gēn zhe zǒu ya。','船行咗，剑唔会跟住行㗎。','syun4 haang4 zo2，gim3 m4 wui5 gan1 zyu6 haang4 gaa3。','The boat moved; the sword did not.']
 ],
 discuss:{basic:[
  ['剑掉到哪里去了？','Where did the sword fall?','掉进水里了。'],
  ['他在船上做了什么？','What did he do on the boat?','刻了一个记号。'],
  ['他找到剑了吗？','Did he find the sword?','没有。']
 ],challenge:[
  ['他错在哪里？','What was his mistake?','船在动，剑不动，情况变了。'],
  ['生活中有「刻舟求剑」的人吗？','Any real-life examples?','用旧办法解决新问题，不知道变通。'],
  ['遇到变化该怎么办？','What should we do when things change?','随机应变，想新办法。']
 ]},
 culture:{m:'在船上刻记号找落水的剑；比喻死守旧办法，不懂得情况已经变化。',en:'Marking a moving boat to find a sunken sword; sticking to old methods when things have changed.',near:'墨守成规',opp:'随机应变',use:{man:'情况变了还用老办法，等于刻舟求剑。',manR:'qíng kuàng biàn le hái yòng lǎo bàn fǎ，děng yú kè zhōu qiú jiàn。',yue:'情况变咗仲用旧办法，等于刻舟求剑。',yueR:'cing4 fong3 bin3 zo2 zung6 jung6 gau6 baan6 faat3，dang2 jyu1 hak1 zau1 kau4 gim3。',eng:'Using old methods after things change is marking the boat to find a sword.'}}
},
{
 cat:'成语',
 name:{man:'自相矛盾',manR:'zì xiāng máo dùn',yue:'自相矛盾',yueR:'zi6 soeng1 maau4 teon4',eng:'The Spear and the Shield'},
 art:['scene','scene','scene'],
 beats:[
  {man:'有个人在街上卖矛和盾。',manR:'yǒu gè rén zài jiē shàng mài máo hé dùn。',yue:'有个人喺街度卖矛同盾。',yueR:'jau5 go3 jan4 hai2 gaai1 dou6 maai6 maau4 tung4 teon5。',eng:'A man was selling spears and shields in the market.'},
  {man:'他举起盾说：我的盾最坚固，什么都刺不破。',manR:'tā jǔ qǐ dùn shuō：wǒ de dùn zuì jiān gù，shén me dōu cì bu pò。',yue:'佢举起盾话：我嘅盾最实净，乜都刺唔穿。',yueR:'keoi5 geoi2 hei2 teon5 waa6：ngo5 ge3 teon5 zeoi3 sat6 zing6，mat1 dou1 ci3 m4 cyun1。',eng:'He held up his shield: My shield is the strongest; nothing can pierce it.'},
  {man:'他又举起矛说：我的矛最锋利，什么都能刺破。',manR:'tā yòu jǔ qǐ máo shuō：wǒ de máo zuì fēng lì，shén me dōu néng cì pò。',yue:'佢又举起矛话：我嘅矛最利，乜都刺到穿。',yueR:'keoi5 jau6 geoi2 hei2 maau4 waa6：ngo5 ge3 maau4 zeoi3 lei6，mat1 dou1 ci3 dou2 cyun1。',eng:'Then he held up his spear: My spear is the sharpest; it can pierce anything.'},
  {man:'有人问：用你的矛刺你的盾，会怎样？',manR:'yǒu rén wèn：yòng nǐ de máo cì nǐ de dùn，huì zěn yàng？',yue:'有人问：用你嘅矛刺你嘅盾，会点？',yueR:'jau5 jan4 man6：jung6 nei5 ge3 maau4 ci3 nei5 ge3 teon5，wui5 dim2？',eng:'Someone asked: What happens if your spear hits your shield?'},
  {man:'那个人张口结舌，一句话也答不上来。',manR:'nà gè rén zhāng kǒu jié shé，yī jù huà yě dá bu shàng lái。',yue:'嗰个人张口结舌，一句都答唔到。',yueR:'go2 go3 jan4 zoeng1 hau2 git3 sit3，jat1 geoi3 dou1 daap3 m4 dou2。',eng:'The man opened his mouth but could not answer.'},
  {man:'矛和盾不能都最厉害，他的话前后冲突了。',manR:'máo hé dùn bù néng dōu zuì lì hai，tā de huà qián hòu chōng tū le。',yue:'矛同盾唔可能都最叻，佢嘅话前后冲突。',yueR:'maau4 tung4 teon5 m4 ho2 nang4 dou1 zeoi3 lek1，keoi5 ge3 waa6 cin4 hau6 cung1 tat6。',eng:'Both cannot be the best; his words contradicted themselves.'}
 ],
 words:[['矛盾','máo dùn','矛盾','maau4 teon5','contradiction'],['矛','máo','矛','maau4','spear'],['盾','dùn','盾','teon5','shield'],['坚固','jiān gù','实净','sat6 zing6','solid'],['锋利','fēng lì','利','lei6','sharp'],['刺','cì','刺','ci3','pierce'],['卖','mài','卖','maai6','sell'],['问','wèn','问','man6','ask'],['回答','huí dá','答','daap3','answer'],['冲突','chōng tū','冲突','cung1 tat6','conflict']],
 hints:['卖矛和盾','盾最坚固','矛最锋利','有人发问','答不上来','前后冲突','自相矛盾'],
 hintsC:['自相矛盾','前后不一','逻辑','漏洞','圆其说'],
 roles:[
  ['other','我的盾最坚固，什么都刺不破！','wǒ de dùn zuì jiān gù，shén me dōu cì bu pò！','我嘅盾最实净，乜都刺唔穿！','ngo5 ge3 teon5 zeoi3 sat6 zing6，mat1 dou1 ci3 m4 cyun1！','My shield is unbreakable!'],
  ['other','我的矛最锋利，什么都能刺破！','wǒ de máo zuì fēng lì，shén me dōu néng cì pò！','我嘅矛最利，乜都刺到穿！','ngo5 ge3 maau4 zeoi3 lei6，mat1 dou1 ci3 dou2 cyun1！','My spear can pierce anything!'],
  ['other','用你的矛刺你的盾呢？','yòng nǐ de máo cì nǐ de dùn ne？','用你嘅矛刺你嘅盾呢？','jung6 nei5 ge3 maau4 ci3 nei5 ge3 teon5 ne1？','What if your spear hits your shield?'],
  ['other','这……这个嘛……','zhè……zhè gè ma……','呢……呢个嘛……','ni1……ni1 go3 maa3……','Well...er...']
 ],
 discuss:{basic:[
  ['这个人卖什么？','What was the man selling?','矛和盾。'],
  ['他说盾怎么样？','What did he say about the shield?','最坚固，什么都刺不破。'],
  ['他答不上来，为什么？','Why could he not answer?','因为两句话互相冲突。']
 ],challenge:[
  ['「自相矛盾」是什么意思？','What does self-contradiction mean?','前后说法不一致，互相打架。'],
  ['你听过别人说话前后矛盾吗？','Have you heard someone contradict themselves?','例如说从不迟到，却天天迟到。'],
  ['说话怎样才前后一致？','How can we speak consistently?','想清楚再说，不夸大。']
 ]},
 culture:{m:'自己的矛和自己的盾互相抵触；比喻说话做事前后不一致，互相冲突。',en:'One\'s spear against one\'s own shield; contradicting oneself.',near:'前后不一',opp:'自圆其说',use:{man:'他一会儿说去、一会儿说不去，太自相矛盾了。',manR:'tā yī huì er shuō qù、yī huì er shuō bú qù，tài zì xiāng máo dùn le。',yue:'佢一阵话去、一阵话唔去，太自相矛盾。',yueR:'keoi5 jat1 zan6 waa6 heoi3、jat1 zan6 waa6 m4 heoi3，taai3 zi6 soeng1 maau4 teon4。',eng:'First he says yes, then no—totally self-contradictory.'}}
},
{
 cat:'成语',
 name:{man:'拔苗助长',manR:'bá miáo zhù zhǎng',yue:'拔苗助长',yueR:'bat6 miu4 zo6 zoeng2',eng:'Pulling Up Seedlings to Help Them Grow'},
 art:['animals','animals','animals'],
 beats:[
  {man:'有个农夫种了一片禾苗。',manR:'yǒu gè nóng fū zhòng le yī piàn hé miáo。',yue:'有个农夫种咗一片禾苗。',yueR:'jau5 go3 nung4 fu1 zung3 zo2 jat1 pin3 wo4 miu4。',eng:'A farmer planted a field of young shoots.'},
  {man:'他天天去看，觉得禾苗长得太慢。',manR:'tā tiān tiān qù kàn，jué de hé miáo zhǎng de tài màn。',yue:'佢日日去睇，觉得禾苗生得太慢。',yueR:'keoi5 jat6 jat6 heoi3 tai2，gyut3 dak1 wo4 miu4 saang1 dak1 taai3 maan6。',eng:'He checked every day and thought they grew too slowly.'},
  {man:'他想出一个办法：把苗往上拔一拔。',manR:'tā xiǎng chū yī gè bàn fǎ：bǎ miáo wǎng shàng bá yī bá。',yue:'佢谂出个办法：将啲苗向上拔一拔。',yueR:'keoi5 nam2 ceot1 go3 baan6 faat3：zoeng1 di1 miu4 hoeng3 soeng6 bat6 jat1 bat6。',eng:'He thought of a way: pull the shoots upward a little.'},
  {man:'忙了一整天，他累得腰酸背痛。',manR:'máng le yī zhěng tiān，tā lèi de yāo suān bèi tòng。',yue:'忙咗成日，佢攰到腰酸背痛。',yueR:'mong4 zo2 seng4 jat6，keoi5 geoi6 dou2 jiu1 syun1 bui6 tung3。',eng:'He worked all day and his back ached.'},
  {man:'他高兴地说：禾苗一下长高了一大截！',manR:'tā gāo xìng de shuō：hé miáo yī xià zhǎng gāo le yī dà jié！',yue:'佢开心咗话：禾苗一下生高咗一大截！',yueR:'keoi5 hoi1 sam1 zo2 waa6：wo4 miu4 jat1 haa6 saang1 gou1 zo2 jat1 daai6 zit3！',eng:'He said happily: The shoots grew taller all at once!'},
  {man:'第二天，禾苗全都枯死了。',manR:'dì èr tiān，hé miáo quán dōu kū sǐ le。',yue:'第二日，禾苗全部枯死咗。',yueR:'dai6 ji6 jat6，wo4 miu4 cyun4 bou1 fu1 sei2 zo2。',eng:'The next day, all the shoots had withered and died.'}
 ],
 words:[['禾苗','hé miáo','禾苗','wo4 miu4','young shoot'],['农夫','nóng fū','农夫','nung4 fu1','farmer'],['拔','bá','拔','bat6','pull up'],['长高','zhǎng gāo','生高','saang1 gou1','grow taller'],['慢慢','màn màn','慢慢','maan6 maan6','slowly'],['着急','zháo jí','心急','sam1 gap1','anxious'],['办法','bàn fǎ','办法','baan6 faat3','method'],['累','lèi','攰','geoi6','tired'],['枯死','kū sǐ','枯死','fu1 sei2','wither'],['规律','guī lǜ','规律','kwai1 leot6','rule']],
 hints:['农夫','禾苗','长得慢','拔苗','很累','以为长高','第二天','全枯死'],
 hintsC:['拔苗助长','急于求成','循序渐进','欲速不达'],
 roles:[
  ['other','禾苗长得太慢了！','hé miáo zhǎng de tài màn le！','禾苗生得太慢啦！','wo4 miu4 saang1 dak1 taai3 maan6 laa1！','The shoots grow too slowly!'],
  ['other','我来帮它们长高。','wǒ lái bāng tā men zhǎng gāo。','我嚟帮佢哋生高。','ngo5 lai4 bong1 keoi5 dei6 saang1 gou1。','I will help them grow taller.'],
  ['other','看，长高了一大截！','kàn，zhǎng gāo le yī dà jié！','睇，生高咗一大截！','tai2，saang1 gou1 zo2 jat1 daai6 zit3！','Look, they grew so much!'],
  ['other','怎么全枯死了？','zěn me quán dōu kū sǐ le？','点解全部枯死咗？','dim2 gaai2 cyun4 bou1 fu1 sei2 zo2？','Why did they all wither?']
 ],
 discuss:{basic:[
  ['农夫为什么着急？','Why was the farmer anxious?','觉得禾苗长得太慢。'],
  ['他做了什么？','What did he do?','把禾苗往上拔。'],
  ['结果怎样？','What happened in the end?','禾苗全枯死了。']
 ],challenge:[
  ['禾苗为什么会死？','Why did the shoots die?','根被拔坏了，违反生长规律。'],
  ['学习中有哪些「拔苗助长」？','Where do we rush things in study?','一天背太多、不复习就想考好。'],
  ['怎样才叫「循序渐进」？','What does step-by-step mean?','每天进步一点，打好基础。']
 ]},
 culture:{m:'把苗拔高想帮它长，反而害死了它；比喻违反规律、急于求成，结果更糟。',en:'Pulling seedlings to make them grow; ruining things by impatiently forcing quick results.',near:'急于求成',opp:'循序渐进',use:{man:'孩子才五岁就逼他学代数，未免拔苗助长。',manR:'hái zi cái wǔ suì jiù bī tā xué dài shù，wèi miǎn bá miáo zhù zhǎng。',yue:'仔先五岁就逼佢学代数，未免拔苗助长。',yueR:'zai2 sin1 ng5 seoi3 zau6 bik1 keoi5 hok6 doi6 syu3，mei6 min5 bat6 miu4 zo6 zoeng2。',eng:'Forcing a five-year-old to learn algebra is pulling up seedlings.'}}
},
{
 cat:'成语',
 name:{man:'对牛弹琴',manR:'duì niú tán qín',yue:'对牛弹琴',yueR:'deoi3 ngau4 daan4 kam4',eng:'Playing the Lute to a Cow'},
 art:['animals','animals','animals'],
 beats:[
  {man:'古时候有位琴师，弹琴弹得很好。',manR:'gǔ shí hou yǒu wèi qín shī，tán qín tán de hěn hǎo。',yue:'古时候有位琴师，弹琴弹得好。',yueR:'gu2 si4 hau6 jau5 wai2 kam4 si1，daan4 kam4 daan4 dak1 hou2。',eng:'Long ago there was a musician who played the lute very well.'},
  {man:'一天，他看见一头牛在吃草。',manR:'yī tiān，tā kàn jiàn yī tóu niú zài chī cǎo。',yue:'一日，佢见到一头牛食紧草。',yueR:'jat1 jat6，keoi5 gin3 dou2 jat1 tau4 ngau4 sik6 gan2 cou2。',eng:'One day he saw a cow eating grass.'},
  {man:'他心血来潮，对着牛弹了一首名曲。',manR:'tā xīn xuè lái cháo，duì zhe niú tán le yī shǒu míng qǔ。',yue:'佢心血来潮，对住头牛弹咗首名曲。',yueR:'keoi5 sam1 hyut3 loi4 ciu4，deoi3 zyu6 tau4 ngau4 daan4 zo2 sau2 ming4 kuk1。',eng:'On a whim, he played a famous piece for the cow.'},
  {man:'曲子再美，牛还是低头吃草。',manR:'qǔ zi zài měi，niú hái shì dī tóu chī cǎo。',yue:'首曲再靓，牛都系低头食草。',yueR:'sau2 kuk1 zoi3 leng3，ngau4 dou1 hai6 dai1 tau4 sik6 cou2。',eng:'However beautiful the music, the cow kept eating.'},
  {man:'琴师很失望，收起琴走了。',manR:'qín shī hěn shī wàng，shōu qǐ qín zǒu le。',yue:'琴师好失望，收起琴走咗。',yueR:'kam4 si1 hou2 sat1 mong6，sau1 hei2 kam4 zau2 zo2。',eng:'The musician was disappointed and put away his lute.'},
  {man:'不是琴弹得不好，是牛听不懂啊。',manR:'bú shì qín tán de bù hǎo，shì niú tīng bu dǒng a。',yue:'唔系琴弹得唔好，系牛听唔明咋。',yueR:'m4 hai6 kam4 daan4 dak1 m4 hou2，hai6 ngau4 ting1 m4 ming4 zaa3。',eng:'It was not bad music—the cow simply could not understand.'}
 ],
 words:[['琴','qín','琴','kam4','lute'],['弹','tán','弹','daan4','play (string)'],['牛','niú','牛','ngau4','cow'],['吃草','chī cǎo','食草','sik6 cou2','graze'],['名曲','míng qǔ','名曲','ming4 kuk1','famous tune'],['低头','dī tóu','低头','dai1 tau4','lower head'],['失望','shī wàng','失望','sat1 mong6','disappointed'],['听懂','tīng dǒng','听明','ting1 ming4','understand'],['白费','bái fèi','白费','baak6 fai3','waste'],['对象','duì xiàng','对象','deoi3 zoeng6','audience']],
 hints:['琴师','弹琴','一头牛','对牛弹琴','牛吃草','不理会','听不懂','白费功夫'],
 hintsC:['对牛弹琴','因人而异','看对象','沟通方式','白费口舌'],
 roles:[
  ['other','听我弹一首名曲吧！','tīng wǒ tán yī shǒu míng qǔ ba！','听我弹首名曲啦！','ting1 ngo5 daan4 sau2 ming4 kuk1 laa1！','Listen to my famous tune!'],
  ['other','（牛）哞——还是草好吃。','（niú）mōu——hái shì cǎo hǎo chī。','（牛）哞——都系草好食。','（ngau4）ngau4——dou1 hai6 cou2 hou2 sik6。','(Cow) Moo—grass tastes better.'],
  ['other','你怎么不理我？','nǐ zěn me bù lǐ wǒ？','你点解唔理我？','nei5 dim2 gaai2 m4 lei5 ngo5？',"Why don't you pay attention?"],
  ['other','不是你弹得差，是它听不懂。','bú shì nǐ tán de chà，shì tā tīng bu dǒng。','唔系你弹得差，系佢听唔明。','m4 hai6 nei5 daan4 dak1 caa1，hai6 keoi5 ting1 m4 ming4。','It is not your playing—it just cannot understand.']
 ],
 discuss:{basic:[
  ['琴师给谁弹琴？','Who did the musician play for?','给一头牛。'],
  ['牛有听吗？','Did the cow listen?','没有，继续吃草。'],
  ['是琴弹得不好吗？','Was the music bad?','不是，是牛听不懂。']
 ],challenge:[
  ['「对牛弹琴」用在哪里？','When do we use this idiom?','对不懂的人讲深奥的话，白费功夫。'],
  ['怎样才算「看对象说话」？','How do we speak to the right audience?','用对方听得懂的方式和词。'],
  ['老师讲课也要「看对象」吗？','Should teachers adapt to students?','要，按学生程度调整。']
 ]},
 culture:{m:'对着牛弹琴，牛听不懂；比喻对不懂的人讲深奥道理，白费口舌，也提醒说话要看对象。',en:'Playing the lute to a cow; wasting words on someone who cannot understand, or speaking without considering the audience.',near:'白费口舌',opp:'有的放矢',use:{man:'跟他讲这么多专业术语，简直是对牛弹琴。',manR:'gēn tā jiǎng zhè me duō zhuān yè shù yǔ，jiǎn zhí shì duì niú tán qín。',yue:'同佢讲咁多专业术语，简直系对牛弹琴。',yueR:'tung4 keoi5 gong2 gam2 do1 zyun1 jip6 syu6 jyu5，gaan2 zik6 hai6 deoi3 ngau4 daan4 kam4。',eng:'Explaining so many technical terms to him is playing the lute to a cow.'}}
},

/* ============ 神话 7 ============ */
{
 cat:'神话',
 name:{man:'女娲补天',manR:'nǚ wā bǔ tiān',yue:'女娲补天',yueR:'neoi5 waa1 bou2 tin1',eng:'Nuwa Mends the Sky'},
 art:['scene','scene','scene'],
 beats:[
  {man:'很久很久以前，天忽然破了一个大洞。',manR:'hěn jiǔ hěn jiǔ yǐ qián，tiān hū rán pò le yī gè dà dòng。',yue:'好耐好耐之前，天忽然烂咗个大窿。',yueR:'hou2 noi6 hou2 noi6 zi1 cin4，tin1 fat1 jin4 laan6 zo2 go3 daai6 lung1。',eng:'Long, long ago, a big hole suddenly appeared in the sky.'},
  {man:'大雨下个不停，洪水淹没了大地。',manR:'dà yǔ xià gè bù tíng，hóng shuǐ yān mò le dà dì。',yue:'大雨落唔停，洪水淹没咗大地。',yueR:'daai6 jyu5 lok6 m4 ting4，hung4 seoi2 jim1 mut6 zo2 daai6 dei6。',eng:'Rain poured without stopping and floods covered the land.'},
  {man:'女娲看见人们受苦，决心把天补好。',manR:'nǚ wā kàn jiàn rén men shòu kǔ，jué xīn bǎ tiān bǔ hǎo。',yue:'女娲见到人们受苦，决心将天补好。',yueR:'neoi5 waa1 gin3 dou2 jan4 dei6 sau6 fu2，gyut3 sam1 zoeng1 tin1 bou2 hou2。',eng:'Seeing people suffer, Nuwa decided to mend the sky.'},
  {man:'她找来五种颜色的石头，用火熔成浆。',manR:'tā zhǎo lái wǔ zhǒng yán sè de shí tou，yòng huǒ róng chéng jiāng。',yue:'佢搵嚟五种颜色嘅石，用火熔成浆。',yueR:'keoi5 wan2 lai4 ng5 zung2 ngaan4 sik1 ge3 sek6，jung6 fo2 jung4 sing4 zoeng1。',eng:'She gathered stones of five colours and melted them.'},
  {man:'她把石浆一点点填进天上的窟窿。',manR:'tā bǎ shí jiāng yī diǎn diǎn tián jìn tiān shàng de kū long。',yue:'佢将石浆一啲啲填入天上嘅窿。',yueR:'keoi5 zoeng1 sek6 zoeng1 jat1 di1 di1 tin4 jap6 tin1 soeng6 ge3 lung1。',eng:'Little by little she filled the hole in the sky.'},
  {man:'天补好了，风雨停了，人们又能安心生活。',manR:'tiān bǔ hǎo le，fēng yǔ tíng le，rén men yòu néng ān xīn shēng huó。',yue:'天补好咗，风雨停咗，人们又可以安心生活。',yueR:'tin1 bou2 hou2 zo2，fung1 jyu5 ting4 zo2，jan4 dei6 jau6 ho2 naai5 sam1 saang1 wut6。',eng:'The sky was mended, the storm stopped, and people lived in peace.'}
 ],
 words:[['女娲','nǚ wā','女娲','neoi5 waa1','Nuwa'],['天空','tiān kōng','天空','tin1 hung1','sky'],['窟窿','kū long','窿','lung1','hole'], ['石头','shí tou','石','sek6','stone'],['颜色','yán sè','颜色','ngaan4 sik1','colour'],['火','huǒ','火','fo2','fire'],['洪水','hóng shuǐ','洪水','hung4 seoi2','flood'],['补','bǔ','补','bou2','mend'],['大雨','dà yǔ','大雨','daai6 jyu5','heavy rain'],['平静','píng jìng','平静','ping4 zing6','peace']],
 hints:['天破了洞','大雨洪水','女娲','五彩石','用火熔','补天空','风雨停','人们安心'],
 hintsC:['女娲补天','炼石补天','无私奉献','拯救苍生'],
 roles:[
  ['other','天破了，大家快躲起来！','tiān pò le，dà jiā kuài duǒ qǐ lái！','天烂咗，大家快啲避一避！','tin1 laan6 zo2，daai6 gaa1 faai3 di1 bei6 jat1 bei6！','The sky is broken—everyone take cover!'],
  ['other','我要找到五彩石把天补好。','wǒ yào zhǎo dào wǔ cǎi shí bǎ tiān bǔ hǎo。','我要搵到五彩石将天补好。','ngo5 jiu3 wan2 dou2 ng5 coi2 sek6 zoeng1 tin1 bou2 hou2。','I will find the five-coloured stones to mend the sky.'],
  ['other','火够了，石浆熔好了！','huǒ gòu le，shí jiāng róng hǎo le！','火够咗，石浆熔好啦！','fo2 gau3 zo2，sek6 zoeng1 jung4 hou2 laa1！','The fire is hot and the stone paste is ready!'],
  ['other','天补好了，谢谢女娲！','tiān bǔ hǎo le，xiè xie nǚ wā！','天补好咗，多谢女娲！','tin1 bou2 hou2 zo2，do1 ze6 neoi5 waa1！','The sky is mended. Thank you, Nuwa!']
 ],
 discuss:{basic:[
  ['天上发生了什么事？','What happened to the sky?','破了一个大洞，下大雨。'],
  ['女娲用什么补天？','What did Nuwa use to mend the sky?','五种颜色的石头。'],
  ['最后人们怎样了？','What happened to the people in the end?','风雨停了，安心生活。']
 ],challenge:[
  ['女娲是个怎样的人？','What kind of person was Nuwa?','勇敢、善良、愿意牺牲。'],
  ['故事里哪一点最神奇？','Which part is most magical?','用五彩石浆补好了天。'],
  ['生活中有「补天」的人吗？','Are there people who "mend the sky" today?','医生、消防员在危难时帮助大家。']
 ]},
 culture:{m:'女娲熔炼五彩石补好破裂的天空；比喻挺身而出、拯救大家于危难之中。',en:'Nuwa melted coloured stones to mend the broken sky; someone who steps forward to save others in danger.',near:'舍己为人',opp:'袖手旁观',use:{man:'危难时刻总有人像女娲补天一样站出来。',manR:'wēi nàn shí kè zǒng yǒu rén xiàng nǚ wā bǔ tiān yī yàng zhàn chū lái。',yue:'危难时总有人好似女娲补天咁企出嚟。',yueR:'ngai4 naan6 si4 zung2 jau5 jan4 hou2 ci5 neoi5 waa1 bou2 tin1 gam2 kei5 ceot1 lai4。',eng:'In times of crisis, someone always steps forward like Nuwa mending the sky.'}}
},
{
 cat:'神话',
 name:{man:'后羿射日',manR:'hòu yì shè rì',yue:'后羿射日',yueR:'hau6 ngai6 se6 jat6',eng:'Houyi Shoots the Suns'},
 art:['scene','scene','scene'],
 beats:[
  {man:'从前，天上有十个太阳。',manR:'cóng qián，tiān shàng yǒu shí gè tài yáng。',yue:'从前，天上有十个太阳。',yueR:'cung4 cin4，tin1 soeng6 jau5 sap6 go3 taai3 joeng4。',eng:'Long ago there were ten suns in the sky.'},
  {man:'十个太阳一起出来，大地热得像火炉。',manR:'shí gè tài yáng yī qǐ chū lái，dà dì rè de xiàng huǒ lú。',yue:'十个太阳一齐出嚟，大地热到似火炉。',yueR:'sap6 go3 taai3 joeng4 jat1 cai4 ceot1 lai4，daai6 dei6 jit6 dou2 ci5 fo2 lou4。',eng:'All ten came out at once and the earth burned like an oven.'},
  {man:'河水干了，庄稼枯死，人们热得受不了。',manR:'hé shuǐ gān le，zhuāng jia kū sǐ，rén men rè de shòu bu liǎo。',yue:'河水干咗，庄稼枯死，人们热到捱唔住。',yueR:'ho4 seoi2 gon1 zo2，zong1 gaa3 fu1 sei2，jan4 dei6 jit6 dou2 ngaai4 m4 zyu6。',eng:'Rivers dried up, crops withered, and people could not bear the heat.'},
  {man:'神箭手后羿决心帮助大家。',manR:'shén jiàn shǒu hòu yì jué xīn bāng zhù dà jiā。',yue:'神箭手后羿决心帮大家。',yueR:'san4 zin3 sau2 hau6 ngai6 gyut3 sam1 bong1 daai6 gaa1。',eng:'The great archer Houyi decided to help.'},
  {man:'他爬上高山，拉开神弓，射下九个太阳。',manR:'tā pá shàng gāo shān，lā kāi shén gōng，shè xià jiǔ gè tài yáng。',yue:'佢爬上高山，拉开神弓，射落九个太阳。',yueR:'keoi5 paa4 soeng6 gou1 saan1，laai1 hoi1 san4 gung1，se6 luk6 gau2 go3 taai3 joeng4。',eng:'He climbed a high mountain, drew his bow, and shot down nine suns.'},
  {man:'他留下一个太阳，从此白天有光，夜晚有凉。',manR:'tā liú xià yī gè tài yáng，cóng cǐ bái tiān yǒu guāng，yè wǎn yǒu liáng。',yue:'佢留低一个太阳，从此日头有光，夜晚有凉。',yueR:'keoi5 lau4 dai1 jat1 go3 taai3 joeng4，cung4 ci2 jat6 tau4 jau5 gwong1，je6 maan5 jau5 loeng4。',eng:'He left one sun, so there is light by day and cool by night.'}
 ],
 words:[['太阳','tài yáng','太阳','taai3 joeng4','sun'],['后羿','hòu yì','后羿','hau6 ngai6','Houyi'],['射箭','shè jiàn','射箭','se6 zin3','shoot arrows'],['弓','gōng','弓','gung1','bow'],['高山','gāo shān','高山','gou1 saan1','high mountain'],['干涸','gān hé','干','gon1','dry up'],['庄稼','zhuāng jia','庄稼','zong1 gaa3','crops'],['炎热','yán rè','热','jit6','hot'],['帮助','bāng zhù','帮','bong1','help'],['夜晚','yè wǎn','夜晚','je6 maan5','night']],
 hints:['十个太阳','大地炎热','河水干','后羿','爬高山','射下九个','留下一个','昼夜分明'],
 hintsC:['后羿射日','为民除害','神箭手','勇敢担当'],
 roles:[
  ['other','十个太阳，太热啦！','shí gè tài yáng，tài rè la！','十个太阳，热死啦！','sap6 go3 taai3 joeng4，jit6 sei2 laa1！','Ten suns—it is too hot!'],
  ['other','我来射下多余的太阳。','wǒ lái shè xià duō yú de tài yáng。','我嚟射落多余嘅太阳。','ngo5 lai4 se6 luk6 do1 jyu4 ge3 taai3 joeng4。','I will shoot down the extra suns.'],
  ['other','留一个就够了，不然会太冷。','liú yī gè jiù gòu le，bù rán huì tài lěng。','留一个就够，唔系会太冻。','lau4 jat1 go3 zau6 gau3 zo2，m4 hai6 wui5 taai3 dung3。','Leave one, or it will be too cold.'],
  ['other','谢谢您，我们得救了！','xiè xie nín，wǒ men dé jiù le！','多谢您，我哋得救啦！','do1 ze6 nei5，ngo5 dei6 dak1 gau3 laa1！','Thank you—we are saved!']
 ],
 discuss:{basic:[
  ['原来有几个太阳？','How many suns were there?','十个。'],
  ['后羿射下了几个？','How many did Houyi shoot down?','九个。'],
  ['为什么留一个？','Why leave one?','白天要有光和温暖。']
 ],challenge:[
  ['后羿为什么要射日？','Why did Houyi shoot the suns?','为了救受苦的人们。'],
  ['如果你是后羿，会留下几个？','If you were Houyi, how many would you leave?','一个，刚刚好。'],
  ['「过多」和「太少」都不好，举例说说。','Give examples where too much or too little is bad.','水太多会淹，太少会旱。']
 ]},
 culture:{m:'后羿射下多余的太阳，拯救百姓；比喻为民除害、勇敢解决大家共同的困难。',en:'Houyi shot down the extra suns to save the people; ridding the world of a common harm.',near:'为民除害',opp:'漠不关心',use:{man:'这位医生像后羿射日，救了许多病人。',manR:'zhè wèi yī shēng xiàng hòu yì shè rì，jiù le xǔ duō bìng rén。',yue:'呢位医生好似后羿射日，救咗好多病人。',yueR:'ni1 wai2 ji1 saang1 hou2 ci5 hau6 ngai6 se6 jat6，gau3 zo2 hou2 do1 beng6 jan4。',eng:'This doctor was like Houyi shooting the suns, saving many patients.'}}
},
{
 cat:'神话',
 name:{man:'夸父追日',manR:'kuā fù zhuī rì',yue:'夸父追日',yueR:'kwaa1 fu6 zeoi1 jat6',eng:'Kua Fu Chases the Sun'},
 art:['scene','scene','scene'],
 beats:[
  {man:'远古时候，有个巨人叫夸父。',manR:'yuǎn gǔ shí hou，yǒu gè jù rén jiào kuā fù。',yue:'远古时候，有个巨人叫夸父。',yueR:'jyun5 gu2 si4 hau6，jau5 go3 geoi6 jan4 giu3 kwaa1 fu6。',eng:'In ancient times there was a giant named Kua Fu.'},
  {man:'他看见太阳落山，就想把它追回来。',manR:'tā kàn jiàn tài yáng luò shān，jiù xiǎng bǎ tā zhuī huí lái。',yue:'佢见到太阳落山，就想将佢追返嚟。',yueR:'keoi5 gin3 dou2 taai3 joeng4 luk6 saan1，zau6 soeng2 zoeng1 keoi5 zeoi1 faan1 lai4。',eng:'When he saw the sun set, he wanted to chase it back.'},
  {man:'他迈开大步，向着太阳一直跑。',manR:'tā mài kāi dà bù，xiàng zhe tài yáng yī zhí pǎo。',yue:'佢迈开大步，向住太阳一路跑。',yueR:'keoi5 maai6 hoi1 daai6 bou6，hoeng3 zyu6 taai3 joeng4 jat1 lou6 pau2。',eng:'He strode forward and ran toward the sun.'},
  {man:'跑了很久，他又渴又累，喝干了黄河的水。',manR:'pǎo le hěn jiǔ，tā yòu kě yòu lèi，hē gān le huáng hé de shuǐ。',yue:'跑咗好耐，佢又渴又攰，饮干咗黄河嘅水。',yueR:'pau2 zo2 hou2 noi6，keoi5 jau6 hot3 jau6 geoi6，jam2 gon1 zo2 wong4 ho4 ge3 seoi2。',eng:'After a long run, thirsty and tired, he drank the Yellow River dry.'},
  {man:'他还是没追上太阳，倒在半路上。',manR:'tā hái shi méi zhuī shàng tài yáng，dǎo zài bàn lù shàng。',yue:'佢都系追唔上太阳，倒喺半路。',yueR:'keoi5 dou1 hai6 zeoi1 m4 soeng6 taai3 joeng4，dou2 hai2 bun3 lou6 soeng6。',eng:'He still could not catch the sun and fell on the way.'},
  {man:'他的手杖化作桃林，为后来的人遮阴解渴。',manR:'tā de shǒu zhàng huà zuò táo lín，wèi hòu lái de rén zhē yīn jiě kě。',yue:'佢嘅手杖变成桃林，为后来嘅人遮阴解渴。',yueR:'keoi5 ge3 sau2 zoeng6 bin3 sing4 tou4 lam4，wai6 hau6 loi4 ge3 jan4 ze1 jam1 gaai2 hot3。',eng:'His staff became a peach grove, giving shade and fruit to later travellers.'}
 ],
 words:[['夸父','kuā fù','夸父','kwaa1 fu6','Kua Fu'],['太阳','tài yáng','太阳','taai3 joeng4','sun'],['追赶','zhuī gǎn','追','zeoi1','chase'],['巨人','jù rén','巨人','geoi6 jan4','giant'],['奔跑','bēn pǎo','跑','pau2','run'],['口渴','kǒu kě','渴','hot3','thirsty'],['黄河','huáng hé','黄河','wong4 ho4','Yellow River'],['手杖','shǒu zhàng','手杖','sau2 zoeng6','staff'],['桃林','táo lín','桃林','tou4 lam4','peach grove'],['坚持','jiān chí','坚持','gaan1 ci4','persist']],
 hints:['巨人夸父','太阳落山','去追赶','一直跑','又渴又累','喝干黄河','没追上','化作桃林'],
 hintsC:['夸父追日','坚持不懈','虽败犹荣','追求理想'],
 roles:[
  ['other','我要把太阳追回来！','wǒ yào bǎ tài yáng zhuī huí lái！','我要将太阳追返嚟！','ngo5 jiu3 zoeng1 taai3 joeng4 zeoi1 faan1 lai4！','I will chase the sun back!'],
  ['other','太阳跑得太快了。','tài yáng pǎo de tài kuài le。','太阳走得太快。','taai3 joeng4 zau2 dak1 taai3 faai3 zo2。','The sun runs too fast.'],
  ['other','我好渴，水呢？','wǒ hǎo kě，shuǐ ne？','我好渴，水呢？','ngo5 hou2 hot3，seoi2 ne1？','I am so thirsty—where is water?'],
  ['other','虽然没追上，他留下了桃林。','suī rán méi zhuī shàng，tā liú xià le táo lín。','虽然追唔上，佢留低咗桃林。','seoi1 jin4 zeoi1 m4 soeng6，keoi5 lau4 dai1 zo2 tou4 lam4。','Though he failed, he left a peach grove.']
 ],
 discuss:{basic:[
  ['夸父想做什么？','What did Kua Fu want to do?','追回太阳。'],
  ['他追上了吗？','Did he catch it?','没有。'],
  ['他的手杖变成了什么？','What did his staff become?','桃林。']
 ],challenge:[
  ['夸父失败了吗？','Did Kua Fu fail?','没追上，但精神感人，留下桃林。'],
  ['你有过「追日」般坚持的经历吗？','Tell us about a time you persisted.','练琴、跑步，坚持很久。'],
  ['目标和能力差很远时怎么办？','What if a goal seems out of reach?','尽力而为，过程中也会收获。']
 ]},
 culture:{m:'夸父追逐太阳，虽未成功却留下桃林造福后人；比喻有宏大志向、坚持不懈、虽败犹荣。',en:'Kua Fu chased the sun and, though he failed, left a peach grove; admirable persistence and a noble spirit.',near:'坚持不懈',opp:'半途而废',use:{man:'虽然没拿第一，但他像夸父追日，值得敬佩。',manR:'suī rán méi ná dì yī，dàn tā xiàng kuā fù zhuī rì，zhí dé jìng pèi。',yue:'虽然攞唔到第一，但佢好似夸父追日，值得敬佩。',yueR:'seoi1 jin4 lo2 m4 dou2 dai6 jat1，daan6 keoi5 hou2 ci5 kwaa1 fu6 zeoi1 jat6，zik6 dak1 ging3 pui3。',eng:'He did not come first, but like Kua Fu chasing the sun, he earned respect.'}}
},
{
 cat:'神话',
 name:{man:'精卫填海',manR:'jīng wèi tián hǎi',yue:'精卫填海',yueR:'zing1 wai6 tin4 hoi2',eng:'Jingwei Fills the Sea'},
 art:['animals','animals','scene'],
 beats:[
  {man:'传说炎帝有个女儿，名叫女娃。',manR:'chuán shuō yán dì yǒu gè nǚ ér，míng jiào nǚ wá。',yue:'传说炎帝有个女，名叫女娃。',yueR:'cyun4 syo3 jim4 dai3 jau5 go3 neoi5，ming4 giu3 neoi5 waa1。',eng:'Legend says the Emperor Yan had a daughter named Nüwa.'},
  {man:'她到东海游玩，不幸被海浪卷走。',manR:'tā dào dōng hǎi yóu wán，bú xìng bèi hǎi làng juǎn zǒu。',yue:'佢去东海游玩，唔好彩畀海浪卷走。',yueR:'keoi5 heoi3 dung1 hoi2 jau4 waan2，m4 hou2 coi2 bei2 hoi2 long6 gyun2 zau2。',eng:'She went to the East Sea and was swept away by a wave.'},
  {man:'女娃化成一只小鸟，名叫精卫。',manR:'nǚ wá huà chéng yī zhī xiǎo niǎo，míng jiào jīng wèi。',yue:'女娃变成一只小鸟，名叫精卫。',yueR:'neoi5 waa1 bin3 sing4 jat1 zek3 siu2 niu5，ming4 giu3 zing1 wai6。',eng:'She became a little bird called Jingwei.'},
  {man:'精卫每天衔来石子和树枝。',manR:'jīng wèi měi tiān xián lái shí zǐ hé shù zhī。',yue:'精卫每日衔嚟石仔同树枝。',yueR:'zing1 wai6 mui5 jat6 haam4 lai4 sek6 zai2 tung4 syu6 zi1。',eng:'Every day Jingwei carried pebbles and twigs.'},
  {man:'她把它们投入大海，想把海填平。',manR:'tā bǎ tā men tóu rù dà hǎi，xiǎng bǎ hǎi tián píng。',yue:'佢将佢哋投入大海，想将海填平。',yueR:'keoi5 zoeng1 keoi5 dei6 tau4 jap6 daai6 hoi2，soeng2 zoeng1 hoi2 tin4 ping4。',eng:'She dropped them into the sea, hoping to fill it up.'},
  {man:'大海笑她傻，她说：我永远不停。',manR:'dà hǎi xiào tā shǎ，tā shuō：wǒ yǒng yuǎn bù tíng。',yue:'大海笑佢傻，佢话：我永远唔停。',yueR:'daai6 hoi2 siu3 keoi5 so4，keoi5 waa6：ngo5 wing5 jyun5 m4 ting4。',eng:'The sea laughed at her. She said: I will never stop.'}
 ],
 words:[['精卫','jīng wèi','精卫','zing1 wai6','Jingwei'],['大海','dà hǎi','大海','daai6 hoi2','sea'],['小鸟','xiǎo niǎo','小鸟','siu2 niu5','little bird'],['石子','shí zǐ','石仔','sek6 zai2','pebble'],['树枝','shù zhī','树枝','syu6 zi1','twig'],['填','tián','填','tin4','fill'],['卷走','juǎn zǒu','卷走','gyun2 zau2','sweep away'],['每天','měi tiān','每日','mui5 jat6','every day'],['永远','yǒng yuǎn','永远','wing5 jyun5','forever'],['坚持','jiān chí','坚持','gaan1 ci4','persist']],
 hints:['女娃','东海','海浪','变成小鸟','精卫','衔石子','填海','永不停止'],
 hintsC:['精卫填海','持之以恒','意志坚定','明知不可为'],
 roles:[
  ['other','大海，我要把你填平！','dà hǎi，wǒ yào bǎ nǐ tián píng！','大海，我要将你填平！','daai6 hoi2，ngo5 jiu3 zoeng1 nei5 tin4 ping4！','Sea, I will fill you up!'],
  ['other','你这么小，怎么填得满？','nǐ zhè me xiǎo，zěn me tián de mǎn？','你咁细，点填满？','nei5 gam2 sai3，dim2 tin4 mun5？','You are so small—how can you fill me?'],
  ['other','我一片一片，总有一天填满。','wǒ yī piàn yī piàn，zǒng yǒu yī tiān tián mǎn。','我一粒一粒，总有一日填满。','ngo5 jat1 lap6 jat1 lap6，zung2 jau5 jat1 jat6 tin4 mun5。','Piece by piece, one day I will.'],
  ['other','好顽强的精卫！','hǎo wán qiáng de jīng wèi！','好坚韧嘅精卫！','hou2 gaan1 jan6 ge3 zing1 wai6！','What a determined Jingwei!']
 ],
 discuss:{basic:[
  ['精卫原来是谁？','Who was Jingwei before?','炎帝的女儿女娃。'],
  ['精卫每天做什么？','What did Jingwei do every day?','衔石子和树枝填海。'],
  ['大海笑她，她说什么？','What did she say when the sea laughed?','我永远不停。']
 ],challenge:[
  ['精卫填得满海吗？','Can Jingwei really fill the sea?','几乎不可能，但她不放弃。'],
  ['为什么还要称赞她？','Why do we still praise her?','赞她意志坚定、不懈努力。'],
  ['你坚持最久的一件事是什么？','What have you stuck with the longest?','学乐器、练字、运动等。']
 ]},
 culture:{m:'精卫小鸟不断衔石填海；比喻意志坚强、不畏艰难、持之以恒，即使希望渺小也不放弃。',en:'The bird Jingwei endlessly fills the sea with pebbles; unyielding determination against great odds.',near:'持之以恒',opp:'知难而退',use:{man:'他每天背十个单词，像精卫填海一样坚持。',manR:'tā měi tiān bèi shí gè dān cí，xiàng jīng wèi tián hǎi yī yàng jiān chí。',yue:'佢每日背十个字，好似精卫填海咁坚持。',yueR:'keoi5 mui5 jat6 bui6 sap6 go3 zi6，hou2 ci5 zing1 wai6 tin4 hoi2 gam2 gaan1 ci4。',eng:'He learns ten words a day, persisting like Jingwei filling the sea.'}}
},
{
 cat:'神话',
 name:{man:'盘古开天',manR:'pán gǔ kāi tiān',yue:'盘古开天',yueR:'pun4 gu2 hoi1 tin1',eng:'Pangu Separates Heaven and Earth'},
 art:['scene','scene','scene'],
 beats:[
  {man:'很久以前，天地像一个大鸡蛋，黑漆漆的。',manR:'hěn jiǔ yǐ qián，tiān dì xiàng yī gè dà jī dàn，hēi qī qī de。',yue:'好耐之前，天地似一只大鸡蛋，黑妈妈。',yueR:'hou2 noi6 zi1 cin4，tin1 dei6 ci5 jat1 zek3 daai6 gai1 daan2，hak1 maa1 maa1。',eng:'Long ago, heaven and earth were like a dark egg.'},
  {man:'巨人盘古睡在里面，一睡就是一万八千年。',manR:'jù rén pán gǔ shuì zài lǐ miàn，yī shuì jiù shì yī wàn bā qiān nián。',yue:'巨人盘古瞓喺入面，一瞓就一万八千年。',yueR:'geoi6 jan4 pun4 gu2 fan3 hai2 jap6 min6，jat1 fan3 zau6 jat1 maan6 baat3 cin1 nin4。',eng:'The giant Pangu slept inside for eighteen thousand years.'},
  {man:'他醒来，拿起斧头用力一劈。',manR:'tā xǐng lái，ná qǐ fǔ tóu yòng lì yī pī。',yue:'佢醒嚟，攞起斧头用力一劈。',yueR:'keoi5 seng2 lai4，lo2 hei2 fu2 tau4 jung6 lik6 jat1 pek3。',eng:'He woke, took an axe, and struck hard.'},
  {man:'轻的东西上升成了天，重的东西下沉成了地。',manR:'qīng de dōng xi shàng shēng chéng le tiān，zhòng de dōng xi xià chén chéng le dì。',yue:'轻嘅嘢上升变成天，重嘅嘢下沉变成地。',yueR:'hing1 ge3 je5 soeng6 sing1 bin3 sing4 tin1，cung5 ge3 je5 haa6 cam4 bin3 sing4 dei6。',eng:'The light rose to become the sky, the heavy sank to become the earth.'},
  {man:'盘古怕它们合拢，就头顶天、脚踩地。',manR:'pán gǔ pà tā men hé lǒng，jiù tóu dǐng tiān、jiǎo cǎi dì。',yue:'盘古怕佢哋埋返，就头顶天、脚踩地。',yueR:'pun4 gu2 pa3 keoi5 dei6 maai4 faan1，zau6 tau4 ding2 tin1、goek3 caai2 dei6。',eng:'Afraid they would rejoin, Pangu held up the sky with his head and stood on the earth.'},
  {man:'他倒下后，身体变成了山川、河流和日月。',manR:'tā dǎo xià hòu，shēn tǐ biàn chéng le shān chuān、hé liú hé rì yuè。',yue:'佢倒下之后，身体变成山川、河流同日月。',yueR:'keoi5 dou2 haa6 zi1 hau6，san1 tai2 bin3 sing4 saan1 cyun1、ho4 lau4 tung4 jat6 jyut6。',eng:'When he fell, his body became mountains, rivers, the sun and moon.'}
 ],
 words:[['盘古','pán gǔ','盘古','pun4 gu2','Pangu'],['天地','tiān dì','天地','tin1 dei6','heaven and earth'],['斧头','fǔ tóu','斧头','fu2 tau4','axe'],['上升','shàng shēng','上升','soeng6 sing1','rise'],['下沉','xià chén','下沉','haa6 cam4','sink'],['天空','tiān kōng','天','tin1','sky'],['大地','dà dì','地','dei6','earth'],['身体','shēn tǐ','身体','san1 tai2','body'],['山川','shān chuān','山川','saan1 cyun1','mountains'],['宇宙','yǔ zhòu','宇宙','jyu5 zau6','universe']],
 hints:['大鸡蛋','盘古','睡一万八千年','斧头一劈','天升地沉','头顶天脚踩地','倒下','化万物'],
 hintsC:['盘古开天','开天辟地','化生万物','创世神话'],
 roles:[
  ['other','这里太黑了，我要劈开它！','zhè lǐ tài hēi le，wǒ yào pī kāi tā！','呢度太黑，我要劈开佢！','ni1 dou6 taai3 hak1 zo2，ngo5 jiu3 pek3 hoi1 keoi5！','It is so dark—I will split it open!'],
  ['other','轻的上升，重的下沉。','qīng de shàng shēng，zhòng de xià chén。','轻嘅上升，重嘅下沉。','hing1 ge3 soeng6 sing1，cung5 ge3 haa6 cam4。','The light rises, the heavy sinks.'],
  ['other','我要撑住，不让它们合上。','wǒ yào chēng zhù，bú ràng tā men hé shàng。','我要撑住，唔畀佢哋埋返。','ngo5 jiu3 caang3 zyu6，m4 bei2 keoi5 dei6 maai4 faan1。','I will hold them apart.'],
  ['other','他的身体变成了美丽的世界。','tā de shēn tǐ biàn chéng le měi lì de shì jiè。','佢嘅身体变成美丽嘅世界。','keoi5 ge3 san1 tai2 bin3 sing4 mei5 lai6 ge3 sai3 gaai3。','His body became a beautiful world.']
 ],
 discuss:{basic:[
  ['天地原来像什么？','What were heaven and earth like?','像一个大鸡蛋。'],
  ['盘古用什么劈开？','What did Pangu use to split it?','一把斧头。'],
  ['他的身体变成了什么？','What did his body become?','山川、河流、日月。']
 ],challenge:[
  ['为什么说盘古很伟大？','Why was Pangu great?','他牺牲自己，创造了世界。'],
  ['你还知道哪些创世故事？','What other creation stories do you know?','女娲造人、上帝创造世界等。'],
  ['「开天辟地」现在怎么用？','How is "creating heaven and earth" used today?','形容有史以来第一次、前所未有的大事。']
 ]},
 culture:{m:'盘古劈开混沌、身体化为万物；比喻有史以来第一次、前所未有的伟大开创。',en:'Pangu split the chaos and his body became the world; an unprecedented, ground-breaking creation.',near:'开天辟地',opp:'因循守旧',use:{man:'这家公司开创了行业新局面，堪称开天辟地。',manR:'zhè jiā gōng sī kāi chuàng le háng yè xīn jú miàn，kān chēng kāi tiān pì dì。',yue:'呢间公司开创咗行业新局面，堪称开天辟地。',yueR:'ni1 gaan1 gung1 si1 hoi1 cong3 zo2 hong4 jip6 san1 guk6 min6，ham1 cing1 hoi1 tin1 pek3 dei6。',eng:'This company created a new era in its industry—truly ground-breaking.'}}
},
{
 cat:'神话',
 name:{man:'嫦娥奔月',manR:'cháng é bēn yuè',yue:'嫦娥奔月',yueR:'soeng4 ngo4 ban1 jyut6',eng:"Chang'e Flies to the Moon"},
 art:['scene','scene','scene'],
 beats:[
  {man:'很久以前，天上有十个太阳，后羿射下了九个。',manR:'hěn jiǔ yǐ qián，tiān shàng yǒu shí gè tài yáng，hòu yì shè xià le jiǔ gè。',yue:'好耐以前，天上有十个太阳，后羿射落咗九个。',yueR:'hou2 noi6 ji5 cin4，tin1 soeng6 jau5 sap6 go3 taai3 joeng4，hau6 ngai6 se6 luk6 zo2 gau2 go3。',eng:'Long ago there were ten suns, and Houyi shot down nine.'},
  {man:'有人送给他一瓶长生不老药。',manR:'yǒu rén sòng gěi tā yī píng cháng shēng bù lǎo yào。',yue:'有人送咗樽长生不老药畀佢。',yueR:'jau5 jan4 sung3 zo2 zeon1 coeng4 saang1 bat1 lou5 joek6 bei2 keoi5。',eng:'Someone gave him a bottle of elixir of life.'},
  {man:'他把药交给妻子嫦娥保管。',manR:'tā bǎ yào jiāo gěi qī zi cháng é bǎo guǎn。',yue:'佢将药交畀太太嫦娥保管。',yueR:'keoi5 zoeng1 joek6 gaau1 bei2 taai3 taai3 soeng4 ngo4 bou2 gun2。',eng:'He gave the elixir to his wife Chang\'e to keep.'},
  {man:'坏人逢蒙想偷走仙药，逼嫦娥交出来。',manR:'huài rén féng méng xiǎng tōu zǒu xiān yào，bī cháng é jiāo chū lái。',yue:'坏人逢蒙想偷仙药，逼嫦娥交出嚟。',yueR:'waai6 jan4 fung4 mang4 soeng2 tau1 sin1 joek6，bik1 soeng4 ngo4 gaau1 ceot1 lai4。',eng:'A bad man wanted the elixir and forced Chang\'e to hand it over.'},
  {man:'嫦娥为了不让药落入坏人手中，一口吞下。',manR:'cháng é wèi le bú ràng yào luò rù huài rén shǒu zhōng，yī kǒu tūn xià。',yue:'嫦娥为咗唔畀药落入坏人手中，一口吞咗。',yueR:'soeng4 ngo4 wai6 zo2 m4 bei2 joek6 luk6 jap6 waai6 jan4 sau2 zung1，jat1 hau2 tan1 zo2。',eng:'To keep it from the villain, Chang\'e swallowed it whole.'},
  {man:'她轻轻飞上月亮，从此住在月宫里。',manR:'tā qīng qīng fēi shàng yuè liang，cóng cǐ zhù zài yuè gōng lǐ。',yue:'佢轻轻飞上月亮，从此住喺月宫入面。',yueR:'keoi5 hing1 hing1 fei1 soeng6 jyut6 loeng6，cung4 ci2 zyu6 hai2 jyut6 gung1 jap6 min6。',eng:'She floated up to the moon and lived there ever after.'}
 ],
 words:[['嫦娥','cháng é','嫦娥','soeng4 ngo4',"Chang'e"],['月亮','yuè liang','月亮','jyut6 loeng6','moon'],['后羿','hòu yì','后羿','hau6 ngai6','Houyi'],['仙药','xiān yào','仙药','sin1 joek6','elixir'],['长生不老','cháng shēng bù lǎo','长生不老','coeng4 saang1 bat1 lou5','immortal'],['飞','fēi','飞','fei1','fly'],['坏人','huài rén','坏人','waai6 jan4','villain'],['吞','tūn','吞','tan1','swallow'],['月宫','yuè gōng','月宫','jyut6 gung1','moon palace'],['中秋','zhōng qiū','中秋','zung1 cau1','Mid-Autumn']],
 hints:['后羿','长生药','嫦娥保管','坏人逢蒙','吞下仙药','飞上月亮','住在月宫','中秋节'],
 hintsC:['嫦娥奔月','中秋节','思念','月宫仙子'],
 roles:[
  ['other','这药请好好保管。','zhè yào qǐng hǎo hǎo bǎo guǎn。','呢樽药请好好保管。','ni1 zeon1 joek6 cing2 hou2 hou2 bou2 gun2。','Please keep this elixir safe.'],
  ['other','快把药交出来！','kuài bǎ yào jiāo chū lái！','快啲将药交出嚟！','faai3 di1 zoeng1 joek6 gaau1 ceot1 lai4！','Hand over the elixir now!'],
  ['other','我绝不会给你。','wǒ jué bú huì gěi nǐ。','我绝唔会畀你。','ngo5 zyut3 m4 wui5 bei2 nei5。','I will never give it to you.'],
  ['other','嫦娥飞上了月亮，我们想念她。','cháng é fēi shàng le yuè liang，wǒ men xiǎng niàn tā。','嫦娥飞上咗月亮，我哋挂念佢。','soeng4 ngo4 fei1 soeng6 zo2 jyut6 loeng6，ngo5 dei6 gwaa3 nim6 keoi5。',"Chang'e flew to the moon; we miss her."]
 ],
 discuss:{basic:[
  ['谁射下了九个太阳？','Who shot down nine suns?','后羿。'],
  ['嫦娥为什么吞下仙药？','Why did Chang\'e swallow the elixir?','不让坏人拿走。'],
  ['嫦娥飞到了哪里？','Where did Chang\'e fly?','月亮上。']
 ],challenge:[
  ['嫦娥做得对吗？为什么？','Did Chang\'e do the right thing? Why?','对，保护了仙药不落入坏人手。'],
  ['你知道中秋节的传说吗？','Do you know the Mid-Autumn legend?','赏月、吃月饼、想念亲人。'],
  ['「嫦娥奔月」今天的用法？','How is the phrase used today?','常指飞向太空，如嫦娥探测器。']
 ]},
 culture:{m:'嫦娥吞下仙药飞上月亮；与中秋节有关，寄托人们对亲人的思念，也用来指飞向太空。',en:"Chang'e flew to the moon after swallowing the elixir; linked to the Mid-Autumn Festival and longing for loved ones.",near:'月下思亲',opp:'阖家团圆',use:{man:'中国的探月工程就叫「嫦娥工程」。',manR:'zhōng guó de tàn yuè gōng chéng jiù jiào cháng é gōng chéng。',yue:'中国嘅探月工程就叫「嫦娥工程」。',yueR:'zung1 gwok3 ge3 taam3 jyut6 gung1 sing4 zau6 giu3 soeng4 ngo4 gung1 sing4。',eng:"China's lunar exploration programme is called the Chang'e programme."}}
},
{
 cat:'神话',
 name:{man:'大禹治水',manR:'dà yǔ zhì shuǐ',yue:'大禹治水',yueR:'daai6 jyu5 zi6 seoi2',eng:'Da Yu Tames the Flood'},
 art:['animals','animals','animals'],
 beats:[
  {man:'远古时候，洪水泛滥，淹了田地和房屋。',manR:'yuǎn gǔ shí hou，hóng shuǐ fàn làn，yān le tián dì hé fáng wū。',yue:'远古时候，洪水泛滥，淹没咗田同屋。',yueR:'jyun5 gu2 si4 hau6，hung4 seoi2 faan6 laan6，jim1 mut6 zo2 tin4 tung4 uk1。',eng:'In ancient times, floods spread over fields and homes.'},
  {man:'鲧用堵的办法，九年也没治好。',manR:'gǔn yòng dǔ de bàn fǎ，jiǔ nián yě méi zhì hǎo。',yue:'鲧用堵嘅办法，九年都治唔好。',yueR:'gwan2 jung6 dou2 ge3 baan6 faat3，gau2 nin4 dou1 zi6 m4 hou2。',eng:'Gun tried damming the water, but after nine years it still failed.'},
  {man:'他的儿子大禹接过任务，改变方法。',manR:'tā de ér zi dà yǔ jiē guò rèn wu，gǎi biàn fāng fǎ。',yue:'佢个仔大禹接过任务，改变方法。',yueR:'keoi5 go3 zai2 daai6 jyu5 zip3 gwo3 jam6 mou6，goi2 bin3 fong1 faat3。',eng:'His son Da Yu took over and changed the method.'},
  {man:'大禹用疏通的办法，挖河道把水引走。',manR:'dà yǔ yòng shū tōng de bàn fǎ，wā hé dào bǎ shuǐ yǐn zǒu。',yue:'大禹用疏通嘅办法，挖河道将水引走。',yueR:'daai6 jyu5 jung6 syu1 tung1 ge3 baan6 faat3，waai3 ho4 dou6 zoeng1 seoi2 jan5 zau2。',eng:'Da Yu dug channels to guide the water away.'},
  {man:'他忙得三次经过家门都没有进去。',manR:'tā máng de sān cì jīng guò jiā mén dōu méi yǒu jìn qù。',yue:'佢忙到三次经过屋企都冇入去。',yueR:'keoi5 mong4 dou2 saam1 ci3 ging1 gwo3 uk1 kei2 dou1 mou5 jap6 heoi3。',eng:'He was so busy that he passed his home three times without entering.'},
  {man:'十三年后，洪水终于治好，百姓安居乐业。',manR:'shí sān nián hòu，hóng shuǐ zhōng yú zhì hǎo，bǎi xìng ān jū lè yè。',yue:'十三年后，洪水终于治好，百姓安居乐业。',yueR:'sap6 saam1 nin4 hau6，hung4 seoi2 zung1 jyu1 zi6 hou2，baak3 sing3 on1 geoi1 lok6 jip6。',eng:'After thirteen years the flood was tamed and people lived in peace.'}
 ],
 words:[['洪水','hóng shuǐ','洪水','hung4 seoi2','flood'],['大禹','dà yǔ','大禹','daai6 jyu5','Da Yu'],['治水','zhì shuǐ','治水','zi6 seoi2','tame floods'],['堵','dǔ','堵','dou2','block'],['疏通','shū tōng','疏通','syu1 tung1','dredge'],['河道','hé dào','河道','ho4 dou6','river channel'],['挖掘','wā jué','挖','waai3','dig'],['家门','jiā mén','屋企门','uk1 kei2 mun4','home'],['百姓','bǎi xìng','百姓','baak3 sing3','people'],['安居乐业','ān jū lè yè','安居乐业','on1 geoi1 lok6 jip6','live in peace']],
 hints:['洪水泛滥','鲧用堵','失败九年','大禹','改用疏通','挖河道','三过家门','治水成功'],
 hintsC:['大禹治水','三过家门','因势利导','无私奉献'],
 roles:[
  ['other','洪水太严重了！','hóng shuǐ tài yán zhòng le！','洪水太严重啦！','hung4 seoi2 taai3 jim4 cung6 laa1！','The flood is terrible!'],
  ['other','堵不住，要改用疏通。','dǔ bu zhù，yào gǎi yòng shū tōng。','堵唔住，要改用疏通。','dou2 m4 zyu6，jiu3 goi2 jung6 syu1 tung1。','Damming fails; we must guide the water.'],
  ['other','我三次经过家门都没进去。','wǒ sān cì jīng guò jiā mén dōu méi jìn qù。','我三次经过屋企都冇入去。','ngo5 saam1 ci3 ging1 gwo3 uk1 kei2 dou1 mou5 jap6 heoi3。','I passed my home three times without going in.'],
  ['other','水退了，大家可以回家了！','shuǐ tuì le，dà jiā kě yǐ huí jiā le！','水退咗，大家可以返屋企啦！','seoi2 teoi3 zo2，daai6 gaa1 ho2 ji5 faan1 uk1 kei2 laa1！','The water has receded—you can go home!']
 ],
 discuss:{basic:[
  ['洪水造成了什么？','What did the flood cause?','淹没田地和房屋。'],
  ['鲧用什么办法？','What method did Gun use?','用堵的。'],
  ['大禹用什么办法？','What method did Da Yu use?','用疏通的。']
 ],challenge:[
  ['为什么堵不如疏？','Why is guiding better than blocking?','水要流走，堵只会越积越多。'],
  ['「三过家门而不入」说明什么？','What does passing home three times show?','公而忘私，以大家为重。'],
  ['生活里有什么事要「疏通」而不是「堵」？','What in life needs guiding rather than blocking?','情绪、交通，都要疏导。']
 ]},
 culture:{m:'大禹治水，改堵为疏，三过家门而不入；比喻做事要顺势引导、公而忘私。',en:'Da Yu tamed the flood by guiding rather than damming; selfless dedication and working with the flow.',near:'因势利导',opp:'一意孤行',use:{man:'解决问题要像大禹治水，找到根源去疏导。',manR:'jiě jué wèn tí yào xiàng dà yǔ zhì shuǐ，zhǎo dào gēn yuán qù shū dǎo。',yue:'解决问题要好似大禹治水，搵到根源去疏导。',yueR:'gaai2 kyut3 man6 tai4 jiu3 hou2 ci5 daai6 jyu5 zi6 seoi2，wan2 dou2 gan1 jyun4 heoi3 syu1 dou6。',eng:'Solve problems like Da Yu did—find the root and guide it.'}}
},

/* ============ 寓言 7 ============ */
{
 cat:'寓言',
 name:{man:'叶公好龙',manR:'yè gōng hào lóng',yue:'叶公好龙',yueR:'jip6 gung1 hou3 lung4',eng:'Lord Ye Loves Dragons'},
 art:['scene','scene','scene'],
 beats:[
  {man:'从前有位叶公，非常喜欢龙。',manR:'cóng qián yǒu wèi yè gōng，fēi cháng xǐ huan lóng。',yue:'从前有位叶公，好钟意龙。',yueR:'cung4 cin4 jau5 wai2 jip6 gung1，hou2 zung1 ji3 lung4。',eng:'Long ago there was Lord Ye who loved dragons very much.'},
  {man:'他家里到处都画着龙、刻着龙。',manR:'tā jiā lǐ dào chù dōu huà zhe lóng、kè zhe lóng。',yue:'佢屋企周围都画住龙、刻住龙。',yueR:'keoi5 uk1 kei2 zau1 wai4 dou1 waa2 zyu6 lung4、hak1 zyu6 lung4。',eng:'His house was full of dragon paintings and carvings.'},
  {man:'天上的真龙听说了，决定来看看他。',manR:'tiān shàng de zhēn lóng tīng shuō le，jué dìng lái kàn kan tā。',yue:'天上嘅真龙听到，决定嚟睇下佢。',yueR:'tin1 soeng6 ge3 zan1 lung4 ting1 syut3 zo2，gyut3 ding6 lai4 tai2 haa5 keoi5。',eng:'The real dragon in heaven heard about it and came to visit.'},
  {man:'真龙把头伸进窗户，叶公吓得脸都白了。',manR:'zhēn lóng bǎ tóu shēn jìn chuāng hu，yè gōng xià de liǎn dōu bái le。',yue:'真龙将头伸入窗，叶公惊到面都白晒。',yueR:'zan1 lung4 zoeng1 tau4 san1 jap6 coeng1，jip6 gung1 geng1 dou2 min6 dou1 baak6 saai3。',eng:'The dragon poked its head in; Ye turned pale with fear.'},
  {man:'他拔腿就跑，连鞋都跑掉了一只。',manR:'tā bá tuǐ jiù pǎo，lián xié dōu pǎo diào le yī zhī。',yue:'佢拔腿就走，连鞋都走甩咗只。',yueR:'keoi5 bat6 teoi2 zau6 zau2，lin4 haai4 dou1 zau2 lat3 zo2 zek3。',eng:'He ran off at once, even losing a shoe.'},
  {man:'原来他喜欢的不是真龙，只是像龙的东西。',manR:'yuán lái tā xǐ huan de bú shì zhēn lóng，zhǐ shì xiàng lóng de dōng xi。',yue:'原来佢钟意嘅唔系真龙，只系似龙嘅嘢。',yueR:'jyun4 loi4 keoi5 zung1 ji3 ge3 m4 hai6 zan1 lung4，zi2 hai6 ci5 lung4 ge3 je5。',eng:'He loved not real dragons, only things that looked like dragons.'}
 ],
 words:[['龙','lóng','龙','lung4','dragon'],['叶公','yè gōng','叶公','jip6 gung1','Lord Ye'],['喜欢','xǐ huan','钟意','zung1 ji3','like'],['画','huà','画','waa2','paint'],['刻','kè','刻','hak1','carve'],['窗户','chuāng hu','窗','coeng1','window'],['害怕','hài pà','惊','geng1','afraid'],['逃跑','táo pǎo','走','zau2','run away'],['真的','zhēn de','真','zan1','real'],['表面','biǎo miàn','表面','biu2 min6','surface']],
 hints:['叶公','喜欢龙','画龙刻龙','真龙来了','伸头进窗','吓得脸白','拔腿就跑','不是真喜欢'],
 hintsC:['叶公好龙','口是心非','表面爱好','言行不一'],
 roles:[
  ['other','我最喜欢龙了！','wǒ zuì xǐ huan lóng le！','我最钟意龙啦！','ngo5 zeoi3 zung1 ji3 lung4 laa1！','I love dragons most of all!'],
  ['other','听说有人喜欢我，我去看看。','tīng shuō yǒu rén xǐ huan wǒ，wǒ qù kàn kan。','听说有人钟意我，我去睇下。','ting1 syut3 jau5 jan4 zung1 ji3 ngo5，ngo5 heoi3 tai2 haa5。','I hear someone likes me—let me see.'],
  ['other','啊！是真龙，快跑！','a！shì zhēn lóng，kuài pǎo！','啊！系真龙，快走！','aa3！hai6 zan1 lung4，faai3 zau2！','Ah! A real dragon—run!'],
  ['other','他喜欢的只是画上的龙。','tā xǐ huan de zhǐ shì huà shàng de lóng。','佢钟意嘅只系画上嘅龙。','keoi5 zung1 ji3 ge3 zi2 hai6 waa2 soeng6 ge3 lung4。','He only liked dragons in pictures.']
 ],
 discuss:{basic:[
  ['叶公喜欢什么？','What did Lord Ye like?','龙。'],
  ['真龙来了他怎样？','What happened when the real dragon came?','吓得跑了。'],
  ['他真的喜欢龙吗？','Did he really like dragons?','不是，只喜欢假的。']
 ],challenge:[
  ['「叶公好龙」说什么人？','What kind of person does this describe?','嘴上说喜欢，其实怕真东西。'],
  ['你有没有嘴上说喜欢、其实不然的事？','Have you said you liked something but did not?','说喜欢运动却从不运动。'],
  ['怎样才算真的喜欢？','What is true liking?','愿意花时间，真正去了解和行动。']
 ]},
 culture:{m:'叶公嘴上爱龙，真龙来了却吓跑；比喻嘴上爱好某事物，实际上并不真爱，甚至害怕。',en:'Lord Ye claimed to love dragons but fled from a real one; loving something only in words, not in reality.',near:'口是心非',opp:'言行一致',use:{man:'他说爱爬山，一叫他就推，真是叶公好龙。',manR:'tā shuō ài pá shān，yī jiào tā jiù tuī，zhēn shì yè gōng hào lóng。',yue:'佢话钟意行山，一叫就推，真系叶公好龙。',yueR:'keoi5 waa6 zung1 ji3 haang4 saan1，jat1 giu3 zau6 teoi1，zan1 hai6 jip6 gung1 hou3 lung4。',eng:'He says he loves hiking but always declines—Lord Ye loving dragons.'}}
},
{
 cat:'寓言',
 name:{man:'愚公移山',manR:'yú gōng yí shān',yue:'愚公移山',yueR:'jyu4 gung1 ji4 saan1',eng:'Yu Gong Moves the Mountains'},
 art:['scene','scene','scene'],
 beats:[
  {man:'从前有位老人叫愚公，快九十岁了。',manR:'cóng qián yǒu wèi lǎo rén jiào yú gōng，kuài jiǔ shí suì le。',yue:'从前有位老人叫愚公，就快九十岁。',yueR:'cung4 cin4 jau5 wai2 lou5 jan4 giu3 jyu4 gung1，zau6 faai3 gau2 sap6 seoi3 zo2。',eng:'Long ago there was an old man called Yu Gong, nearly ninety.'},
  {man:'他家门口有两座大山，出门很不方便。',manR:'tā jiā mén kǒu yǒu liǎng zuò dà shān，chū mén hěn bù fāng biàn。',yue:'佢屋企门口有两座大山，出门好唔方便。',yueR:'keoi5 uk1 kei2 mun4 hau2 jau5 loeng5 zo6 daai6 saan1，ceot1 mun4 hou2 m4 fong1 bin6。',eng:'Two big mountains blocked his doorway, making travel hard.'},
  {man:'愚公决定带家人把山挖走。',manR:'yú gōng jué dìng dài jiā rén bǎ shān wā zǒu。',yue:'愚公决定带屋企人将座山挖走。',yueR:'jyu4 gung1 gyut3 ding6 daai3 uk1 kei2 jan4 zoeng1 zo6 saan1 waai3 zau2。',eng:'Yu Gong decided to dig the mountains away with his family.'},
  {man:'有人笑他：这么老，怎么挖得完？',manR:'yǒu rén xiào tā：zhè me lǎo，zěn me wā de wán？',yue:'有人笑佢：咁老，点挖得完？',yueR:'jau5 jan4 siu3 keoi5：gam2 lou5，dim2 waai3 dak1 jyun4？',eng:'Someone laughed: At your age, how can you finish?'},
  {man:'愚公说：我挖不完，还有儿子、孙子接着挖。',manR:'yú gōng shuō：wǒ wā bu wán，hái yǒu ér zi、sūn zi jiē zhe wā。',yue:'愚公话：我挖唔完，仲有仔、孙接住挖。',yueR:'jyu4 gung1 waa6：ngo5 waai3 m4 jyun4，zung6 jau5 zai2、syun1 zip3 zyu6 waai3。',eng:'Yu Gong said: I may not finish, but my sons and grandsons will continue.'},
  {man:'天帝被他的诚心感动，派神仙把山搬走了。',manR:'tiān dì bèi tā de chéng xīn gǎn dòng，pài shén xiān bǎ shān bān zǒu le。',yue:'天帝畀佢嘅诚心感动，派神仙将山搬走咗。',yueR:'tin1 dai3 bei2 keoi5 ge3 sing4 sam1 gam2 dung6，paai3 san4 sin1 zoeng1 saan1 bun1 zau2 zo2。',eng:'The Heavenly Emperor was moved and sent immortals to move the mountains.'}
 ],
 words:[['愚公','yú gōng','愚公','jyu4 gung1','Yu Gong'],['山','shān','山','saan1','mountain'],['挖','wā','挖','waai3','dig'],['搬家','bān jiā','搬家','bun1 gaa1','move'],['老人','lǎo rén','老人','lou5 jan4','old man'],['儿子','ér zi','仔','zai2','son'],['孙子','sūn zi','孙','syun1','grandson'],['方便','fāng biàn','方便','fong1 bin6','convenient'],['感动','gǎn dòng','感动','gam2 dung6','move (emotion)'],['坚持','jiān chí','坚持','gaan1 ci4','persist']],
 hints:['愚公','两座大山','出门不便','带家人挖','被人笑','子子孙孙','诚心','神仙搬山'],
 hintsC:['愚公移山','持之以恒','人定胜天','子子孙孙'],
 roles:[
  ['other','这两座山太挡路了！','zhè liǎng zuò shān tài dǎng lù le！','呢两座山太阻路啦！','ni1 loeng5 zo6 saan1 taai3 zo2 lou6 laa1！','These mountains block the way!'],
  ['other','我们一起来挖。','wǒ men yī qǐ lái wā。','我哋一齐嚟挖。','ngo5 dei6 jat1 cai4 lai4 waai3。','Let us dig together.'],
  ['other','你这么老，挖得完吗？','nǐ zhè me lǎo，wā de wán ma？','你咁老，挖得完吗？','nei5 gam2 lou5，waai3 dak1 jyun4 maa3？','You are so old—will you finish?'],
  ['other','我还有儿子孙子接着挖。','wǒ hái yǒu ér zi sūn zi jiē zhe wā。','我仲有仔孙接住挖。','ngo5 zung6 jau5 zai2 syun1 zip3 zyu6 waai3。','My sons and grandsons will carry on.']
 ],
 discuss:{basic:[
  ['愚公为什么要移山？','Why did Yu Gong move the mountains?','出门不方便。'],
  ['谁笑他？','Who laughed at him?','有人笑他太老。'],
  ['最后谁帮了他？','Who helped in the end?','神仙搬走了山。']
 ],challenge:[
  ['愚公真的傻吗？','Was Yu Gong foolish?','不傻，他有恒心和远见。'],
  ['你做过最难坚持的事是什么？','What was the hardest thing you stuck with?','练琴、减肥、学语言等。'],
  ['「愚公移山」今天怎么用？','How is the phrase used today?','形容不怕困难、坚持到底。']
 ]},
 culture:{m:'愚公坚持不懈要挖走大山，最终感动天帝；比喻有恒心、不怕困难，坚持就能成功。',en:'Yu Gong persisted in moving mountains; with determination, even impossible tasks can succeed.',near:'持之以恒',opp:'知难而退',use:{man:'只要像愚公移山一样坚持，总有完成的一天。',manR:'zhǐ yào xiàng yú gōng yí shān yī yàng jiān chí，zǒng yǒu wán chéng de yī tiān。',yue:'只要好似愚公移山咁坚持，总有一日完成。',yueR:'zi2 jiu3 hou2 ci5 jyu4 gung1 ji4 saan1 gam2 gaan1 ci4，zung2 jau5 jat1 jat6 jyun4 sing4。',eng:'If we persist like Yu Gong, we will finish one day.'}}
},
{
 cat:'寓言',
 name:{man:'杞人忧天',manR:'qǐ rén yōu tiān',yue:'杞人忧天',yueR:'kei5 jan4 jau1 tin1',eng:'The Man of Qi Worried About the Sky'},
 art:['scene','scene','scene'],
 beats:[
  {man:'从前杞国有个人，整天胡思乱想。',manR:'cóng qián qǐ guó yǒu gè rén，zhěng tiān hú sī luàn xiǎng。',yue:'从前杞国有个人，成日胡思乱想。',yueR:'cung4 cin4 kei5 gwok3 jau5 go3 jan4，seng4 jat6 wu4 si1 lyun6 soeng2。',eng:'Long ago a man in the state of Qi worried all day.'},
  {man:'他怕天会塌下来，地会陷下去。',manR:'tā pà tiān huì tā xià lái，dì huì xiàn xià qù。',yue:'佢怕天会塌落嚟，地会陷落去。',yueR:'keoi5 pa3 tin1 wui5 taap3 luk6 lai4，dei6 wui5 ham6 luk6 heoi3。',eng:'He feared the sky would fall and the earth would sink.'},
  {man:'他愁得吃不下饭，睡不着觉。',manR:'tā chóu de chī bu xià fàn，shuì bu zháo jiào。',yue:'佢愁到食唔落饭，瞓唔着觉。',yueR:'keoi5 sau4 dou2 sik6 m4 luk6 faan6，fan3 m4 zoek6 gaau3。',eng:'He was so worried he could not eat or sleep.'},
  {man:'朋友劝他：天只是气，怎么会塌呢？',manR:'péng you quàn tā：tiān zhǐ shì qì，zěn me huì tā ne？',yue:'朋友劝佢：天只系气，点会塌？',yueR:'pang4 jau5 hyun3 keoi5：tin1 zi2 hai6 hei3，dim2 wui5 taap3 ne1？',eng:'A friend said: The sky is just air—how can it fall?'},
  {man:'太阳月亮也是气，掉下来也砸不到人。',manR:'tài yáng yuè liang yě shì qì，diào xià lái yě zá bu dào rén。',yue:'太阳月亮都系气，跌落嚟都砸唔到人。',yueR:'taai3 joeng4 jyut6 loeng6 dou1 hai6 hei3，dit3 luk6 lai4 dou1 zaap3 m4 dou2 jan4。',eng:'The sun and moon are air too; even if they fell, no one would be hurt.'},
  {man:'杞人这才放下心，重新开心起来。',manR:'qǐ rén zhè cái fàng xià xīn，chóng xīn kāi xīn qǐ lái。',yue:'杞人至呢先放心，重新开心起嚟。',yueR:'kei5 jan4 zi3 ni1 sin1 fong3 sam1，cung4 san1 hoi1 sam1 hei2 lai4。',eng:'Only then did the man relax and become happy again.'}
 ],
 words:[['杞人','qǐ rén','杞人','kei5 jan4','man of Qi'],['天','tiān','天','tin1','sky'],['塌','tā','塌','taap3','collapse'],['地','dì','地','dei6','earth'],['担心','dān xīn','担心','daam1 sam1','worry'],['朋友','péng you','朋友','pang4 jau5','friend'],['劝','quàn','劝','hyun3','persuade'],['吃饭','chī fàn','食饭','sik6 faan6','eat'],['睡觉','shuì jiào','瞓觉','fan3 gaau3','sleep'],['放心','fàng xīn','放心','fong3 sam1','relax']],
 hints:['杞国人','怕天塌','怕地陷','吃不下','睡不着','朋友劝','天只是气','终于放心'],
 hintsC:['杞人忧天','庸人自扰','无谓担忧','实事求是'],
 roles:[
  ['other','天要塌下来了！','tiān yào tā xià lái le！','天要塌落嚟啦！','tin1 jiu3 taap3 luk6 lai4 laa1！','The sky is going to fall!'],
  ['other','地也要陷下去了！','dì yě yào xiàn xià qù le！','地都要陷落去啦！','dei6 dou1 jiu3 ham6 luk6 heoi3 laa1！','The earth is sinking too!'],
  ['other','天只是气，不会塌的。','tiān zhǐ shì qì，bú huì tā de。','天只系气，唔会塌。','tin1 zi2 hai6 hei3，m4 wui5 taap3 ge3。','The sky is air; it will not fall.'],
  ['other','我想太多了，放心啦。','wǒ xiǎng tài duō le，fàng xīn la。','我谂太多，放心啦。','ngo5 nam2 taai3 do1 zo2，fong3 sam1 laa1。','I worried too much. Never mind.']
 ],
 discuss:{basic:[
  ['杞人怕什么？','What did the man of Qi fear?','怕天塌地陷。'],
  ['他愁得怎样？','How worried was he?','吃不下、睡不着。'],
  ['朋友怎么劝？','How did his friend comfort him?','天只是气，不会塌。']
 ],challenge:[
  ['「杞人忧天」用来说什么人？','What kind of person does this describe?','担心不可能发生的事。'],
  ['你有没有无谓担心的时候？','Have you worried needlessly?','考试前一直怕考砸。'],
  ['担心太多怎么办？','What to do if you worry too much?','找事实、问别人、做点准备。']
 ]},
 culture:{m:'杞国人担心天塌地陷，愁得吃不下睡不好；比喻不必要的、没有根据的担忧。',en:'The man of Qi feared the sky would fall; worrying needlessly about impossible things.',near:'庸人自扰',opp:'高枕无忧',use:{man:'事情还没发生，别杞人忧天了。',manR:'shì qing hái méi fā shēng，bié qǐ rén yōu tiān le。',yue:'事还未发生，唔好杞人忧天啦。',yueR:'si6 cing4 zung6 mei6 faat3 saang1，m4 hou2 kei5 jan4 jau1 tin1 laa1。',eng:'It has not happened yet—stop worrying about the sky falling.'}}
},
{
 cat:'寓言',
 name:{man:'邯郸学步',manR:'hán dān xué bù',yue:'邯郸学步',yueR:'hon4 daan1 hok6 bou6',eng:'Learning to Walk in Handan'},
 art:['scene','scene','scene'],
 beats:[
  {man:'从前有个燕国人，到邯郸去。',manR:'cóng qián yǒu gè yān guó rén，dào hán dān qù。',yue:'从前有个燕国人，去邯郸。',yueR:'cung4 cin4 jau5 go3 jin1 gwok3 jan4，heoi3 hon4 daan1。',eng:'Long ago a man from Yan went to Handan.'},
  {man:'他看见那里的人走路姿势很美。',manR:'tā kàn jiàn nà lǐ de rén zǒu lù zī shì hěn měi。',yue:'佢见到嗰度嘅人行路姿势好靓。',yueR:'keoi5 gin3 dou2 go2 dou6 ge3 jan4 haang4 lou6 zi1 sai3 hou2 leng3。',eng:'He saw that people there walked beautifully.'},
  {man:'他就跟着学，一步一模仿。',manR:'tā jiù gēn zhe xué，yī bù yī mó fǎng。',yue:'佢就跟住学，一步一模仿。',yueR:'keoi5 zau6 gan1 zyu6 hok6，jat1 bou6 jat1 mo4 fong2。',eng:'He began to copy them, step by step.'},
  {man:'可是学来学去，怎么也不像。',manR:'kě shì xué lái xué qù，zěn me yě bú xiàng。',yue:'不过学嚟学去，点都唔似。',yueR:'bat1 gwo3 hok6 lai4 hok6 heoi3，dim2 dou1 m4 ci5。',eng:'But no matter how much he practised, he could not get it right.'},
  {man:'他把自己原来的走法也忘了。',manR:'tā bǎ zì jǐ yuán lái de zǒu fǎ yě wàng le。',yue:'佢将自己原来嘅行法都忘咗。',yueR:'keoi5 zoeng1 zi6 gei2 jyun4 loi4 ge3 haang4 faat3 dou1 mong4 zo2。',eng:'He even forgot his own way of walking.'},
  {man:'最后他只好爬着回家去了。',manR:'zuì hòu tā zhǐ hǎo pá zhe huí jiā qù le。',yue:'最后佢唯有爬住返屋企。',yueR:'zeoi3 hau6 keoi5 wai6 jau5 paa4 zyu6 faan1 uk1 kei2。',eng:'In the end he had to crawl home.'}
 ],
 words:[['邯郸','hán dān','邯郸','hon4 daan1','Handan'],['学步','xué bù','学行','hok6 haang4','learn to walk'],['走路','zǒu lù','行路','haang4 lou6','walk'],['姿势','zī shì','姿势','zi1 sai3','posture'],['模仿','mó fǎng','模仿','mo4 fong2','imitate'],['美','měi','靓','leng3','beautiful'],['忘记','wàng jì','忘记','mong4 gei3','forget'],['原来','yuán lái','原来','jyun4 loi4','original'],['爬','pá','爬','paa4','crawl'],['自己','zì jǐ','自己','zi6 gei2','oneself']],
 hints:['燕国人','去邯郸','走路姿势美','跟着学','学不像','忘了本来的走法','爬着回家','盲目模仿'],
 hintsC:['邯郸学步','东施效颦','盲目模仿','失去自我'],
 roles:[
  ['other','他们走路真好看！','tā men zǒu lù zhēn hǎo kàn！','佢哋行路真系好靓！','keoi5 dei6 haang4 lou6 zan1 hai6 hou2 leng3！','They walk so beautifully!'],
  ['other','我也要这样走。','wǒ yě yào zhè yàng zǒu。','我都要咁行。','ngo5 dou1 jiu3 gam2 haang4。','I want to walk like that too.'],
  ['other','怎么学都不像。','zěn me xué dōu bú xiàng。','点学都唔似。','dim2 hok6 dou1 m4 ci5。','I cannot get it right.'],
  ['other','我连自己怎么走都忘了！','wǒ lián zì jǐ zěn me zǒu dōu wàng le！','我连自己点行都忘咗！','ngo5 lin4 zi6 gei2 dim2 haang4 dou1 mong4 zo2！','I forgot how I used to walk!']
 ],
 discuss:{basic:[
  ['这个人去哪里？','Where did the man go?','去邯郸。'],
  ['他学什么？','What did he learn?','学那里的人走路。'],
  ['最后他怎么回家？','How did he go home?','爬着回去。']
 ],challenge:[
  ['他错在哪里？','What was his mistake?','只模仿别人，忘了自己。'],
  ['模仿别人好不好？','Is copying others good?','学优点好，但完全照搬不好。'],
  ['怎样「学别人而不丢自己」？','How to learn from others without losing yourself?','取长补短，保留自己的特色。']
 ]},
 culture:{m:'到邯郸学别人走路，结果连自己的走法也忘了；比喻盲目模仿别人，反而丢了原来的本领。',en:'Copying others\' walk until forgetting one\'s own; blindly imitating and losing one\'s original self.',near:'东施效颦',opp:'独树一帜',use:{man:'学别人穿衣可以，全盘照搬就成邯郸学步了。',manR:'xué bié rén chuān yī kě yǐ，quán pán zhào bān jiù chéng hán dān xué bù le。',yue:'学人穿衣可以，全部照搬就变邯郸学步。',yueR:'hok6 jan4 cyun1 ji1 ho2 ji5，cyun4 bun4 ziu3 baan1 zau6 bin3 hon4 daan1 hok6 bou6。',eng:'Learning others\' style is fine; copying everything is learning to walk in Handan.'}}
},
{
 cat:'寓言',
 name:{man:'鹬蚌相争',manR:'yù bàng xiāng zhēng',yue:'鹬蚌相争',yueR:'jut6 pong5 soeng1 zang1',eng:'The Snipe and the Clam'},
 art:['animals','animals','animals'],
 beats:[
  {man:'一只河蚌张开壳，在河边晒太阳。',manR:'yī zhī hé bàng zhāng kāi ké，zài hé biān shài tài yáng。',yue:'一只河蚌打开壳，喺河边晒太阳。',yueR:'jat1 zek3 ho4 pong5 hoi1 hoi2 kok3，hai2 ho4 bin1 saai3 taai3 joeng4。',eng:'A clam opened its shell to sun itself by the river.'},
  {man:'一只鹬鸟飞过来，伸出长嘴去啄它。',manR:'yī zhī yù niǎo fēi guò lái，shēn chū cháng zuǐ qù zhuó tā。',yue:'一只鹬雀飞埋嚟，伸出长嘴去啄佢。',yueR:'jat1 zek3 jut6 zoek3 fei1 maai4 lai4，san1 ceot1 coeng4 zeoi2 heoi3 doek3 keoi5。',eng:'A snipe flew over and pecked at it with its long beak.'},
  {man:'河蚌立刻合上壳，夹住了鹬的嘴。',manR:'hé bàng lì kè hé shàng ké，jiā zhù le yù de zuǐ。',yue:'河蚌即刻合上壳，夹住咗鹬嘅嘴。',yueR:'ho4 pong5 zik1 hak1 hap6 soeng6 kok3，gaap3 zyu6 zo2 jut6 ge3 zeoi2。',eng:'The clam shut its shell and caught the snipe\'s beak.'},
  {man:'鹬说：你不松口，今天你别想喝水。',manR:'yù shuō：nǐ bù sōng kǒu，jīn tiān nǐ bié xiǎng hē shuǐ。',yue:'鹬话：你唔松口，今日你唔好想饮水。',yueR:'jut6 waa6：nei5 m4 sung1 hau2，gam1 jat6 nei5 m4 hou2 soeng2 jam2 seoi2。',eng:'The snipe said: If you do not let go, you will not drink today.'},
  {man:'蚌说：我不松，你也拔不出嘴，明天你就死了。',manR:'bàng shuō：wǒ bù sōng，nǐ yě bá bu chū zuǐ，míng tiān nǐ jiù sǐ le。',yue:'蚌话：我唔松，你都拔唔出嘴，听日你就死。',yueR:'pong5 waa6：ngo5 m4 sung1，nei5 dou1 bat6 m4 ceot1 zeoi2，ting1 jat6 nei5 zau6 sei2。',eng:'The clam said: I will not open; you cannot pull free and will die tomorrow.'},
  {man:'两个谁也不让，渔翁走过，一起捉走了。',manR:'liǎng gè shuí yě bú ràng，yú wēng zǒu guò，yī qǐ zhuō zǒu le。',yue:'两个都唔让，渔翁经过，一齐捉走咗。',yueR:'loeng5 go3 dou1 m4 joeng6，jyu4 hung1 ging1 gwo3，jat1 cai4 zuk3 zau2 zo2。',eng:'Neither would give in; a fisherman came and caught them both.'}
 ],
 words:[['鹬','yù','鹬','jut6','snipe'],['蚌','bàng','蚌','pong5','clam'],['相争','xiāng zhēng','相争','soeng1 zang1','fight each other'],['壳','ké','壳','kok3','shell'],['嘴','zuǐ','嘴','zeoi2','beak'],['啄','zhuó','啄','doek3','peck'],['夹','jiā','夹','gaap3','pinch'],['松口','sōng kǒu','松口','sung1 hau2','let go'],['渔翁','yú wēng','渔翁','jyu4 hung1','fisherman'],['便宜','pián yi','着数','zoek6 syu3','advantage']],
 hints:['河蚌晒太阳','鹬来啄','蚌夹住嘴','互不相让','威胁对方','谁也不松','渔翁','一起捉走'],
 hintsC:['鹬蚌相争','渔翁得利','两败俱伤','退一步'],
 roles:[
  ['other','我要啄你！','wǒ yào zhuó nǐ！','我要啄你！','ngo5 jiu3 doek3 nei5！','I will peck you!'],
  ['other','我夹住你的嘴了！','wǒ jiā zhù nǐ de zuǐ le！','我夹住你嘅嘴啦！','ngo5 gaap3 zyu6 nei5 ge3 zeoi2 laa1！','I have caught your beak!'],
  ['other','你不松，你就喝不到水！','nǐ bù sōng，nǐ jiù hē bu dào shuǐ！','你唔松，你就饮唔到水！','nei5 m4 sung1，nei5 zau6 jam2 m4 dou2 seoi2！','If you don\'t let go, no water for you!'],
  ['other','哈哈，两个一起带走！','hā hā，liǎng gè yī qǐ dài zǒu！','哈哈，两个一齐带走！','haa1 haa1，loeng5 go3 jat1 cai4 daai3 zau2！','Haha, I will take you both!']
 ],
 discuss:{basic:[
  ['鹬和蚌在做什么？','What were the snipe and clam doing?','互相争斗，谁也不让。'],
  ['谁最后来了？','Who came in the end?','渔翁。'],
  ['渔翁得到了什么？','What did the fisherman get?','两个都捉走了。']
 ],challenge:[
  ['「鹬蚌相争，渔翁得利」是什么意思？','What does the proverb mean?','两方相争，第三方得好处。'],
  ['同学吵架时谁「得利」？','When classmates quarrel, who benefits?','谁也没赢，还可能都被罚。'],
  ['相持不下时该怎么办？','What to do in a deadlock?','退一步，各让一点。']
 ]},
 culture:{m:'鹬和蚌互不相让，结果被渔翁一起捉走；比喻双方争执不下，让第三者占了便宜。',en:'The snipe and clam fought until a fisherman caught both; when two sides fight, a third benefits.',near:'两败俱伤',opp:'互利共赢',use:{man:'你们别争了，小心鹬蚌相争，渔翁得利。',manR:'nǐ men bié zhēng le，xiǎo xīn yù bàng xiāng zhēng，yú wēng dé lì。',yue:'你哋唔好争啦，小心鹬蚌相争，渔翁得利。',yueR:'nei5 dei6 m4 hou2 zang1 laa1，siu2 sam1 jut6 pong5 soeng1 zang1，jyu4 hung1 dak1 lei6。',eng:'Stop arguing—do not let the fisherman benefit from your fight.'}}
},
{
 cat:'寓言',
 name:{man:'猴子捞月',manR:'hóu zi lāo yuè',yue:'猴子捞月',yueR:'hau4 zi2 laau1 jyut6',eng:'The Monkeys Fish for the Moon'},
 art:['animals','animals','animals'],
 beats:[
  {man:'一天晚上，月亮又圆又亮。',manR:'yī tiān wǎn shang，yuè liang yòu yuán yòu liàng。',yue:'一日夜晚，月亮又圆又光。',yueR:'jat1 jat6 je6 maan5，jyut6 loeng6 jau6 jyun4 jau6 gwong1。',eng:'One evening the moon was round and bright.'},
  {man:'一只猴子看见井里有个月亮。',manR:'yī zhī hóu zi kàn jiàn jǐng lǐ yǒu gè yuè liang。',yue:'一只猴仔见到入面有个月亮。',yueR:'jat1 zek3 hau4 zai2 gin3 dou2 zeng2 jap6 min6 jau5 go3 jyut6 loeng6。',eng:'A monkey saw a moon in the well.'},
  {man:'他大叫：月亮掉进井里啦！',manR:'tā dà jiào：yuè liang diào jìn jǐng lǐ la！',yue:'佢大叫：月亮跌落井入面啦！',yueR:'keoi5 daai6 giu3：jyut6 loeng6 dit3 luk6 zeng2 jap6 min6 laa1！',eng:'He shouted: The moon has fallen into the well!'},
  {man:'猴子们一个拉着一个，倒挂着去捞。',manR:'hóu zi men yī gè lā zhe yī gè，dào guà zhe qù lāo。',yue:'啲猴仔一个拉住一个，倒吊住去捞。',yueR:'di1 hau4 zai2 jat1 go3 laai1 zyu6 jat1 go3，dou2 diu3 zyu6 heoi3 laau1。',eng:'The monkeys hung one below another to fish it out.'},
  {man:'他们捞了半天，什么也捞不到。',manR:'tā men lāo le bàn tiān，shén me yě lāo bu dào。',yue:'佢哋捞咗半日，乜都捞唔到。',yueR:'keoi5 dei6 laau1 zo2 bun3 jat6，mat1 dou1 laau1 m4 dou2。',eng:'They tried a long time but caught nothing.'},
  {man:'一只猴子抬头看：月亮好好挂在天上呢！',manR:'yī zhī hóu zi tái tóu kàn：yuè liang hǎo hǎo guà zài tiān shàng ne！',yue:'一只猴仔抬头睇：月亮好好挂喺天上呢！',yueR:'jat1 zek3 hau4 zai2 toi4 tau4 tai2：jyut6 loeng6 hou2 hou2 gwaa3 hai2 tin1 soeng6 ne1！',eng:'One looked up: The moon was still hanging in the sky!'}
 ],
 words:[['猴子','hóu zi','猴仔','hau4 zai2','monkey'],['月亮','yuè liang','月亮','jyut6 loeng6','moon'],['井','jǐng','井','zeng2','well'],['捞','lāo','捞','laau1','fish out'],['倒挂','dào guà','倒吊','dou2 diu3','hang upside down'],['圆','yuán','圆','jyun4','round'],['亮','liàng','光','gwong1','bright'],['抬头','tái tóu','抬头','toi4 tau4','look up'],['影子','yǐng zi','影','jing2','reflection'],['明白','míng bai','明','ming4','understand']],
 hints:['月圆夜','井里的月亮','大叫','猴子倒挂','一起捞','捞不到','抬头看','月亮在天上'],
 hintsC:['猴子捞月','镜花水月','虚幻','看清楚','白费力气'],
 roles:[
  ['other','月亮掉进井里啦！','yuè liang diào jìn jǐng lǐ la！','月亮跌落井入面啦！','jyut6 loeng6 dit3 luk6 zeng2 jap6 min6 laa1！','The moon fell into the well!'],
  ['other','我们把它捞上来！','wǒ men bǎ tā lāo shàng lái！','我哋将佢捞上嚟！','ngo5 dei6 zoeng1 keoi5 laau1 soeng6 lai4！','Let us fish it out!'],
  ['other','我抓不到，它一碰就散了。','wǒ zhuā bu dào，tā yī pèng jiù sàn le。','我抓唔到，一掂就散咗。','ngo5 zaap1 m4 dou2，keoi5 jat1 dim3 zau6 saan3 zo2。','I cannot grab it—it scatters when touched.'],
  ['other','傻瓜，那是影子！月亮在天上。','shǎ guā，nà shì yǐng zi！yuè liang zài tiān shàng。','傻瓜，嗰个系影子！月亮喺天上。','so4 gwaa1，go2 go3 hai6 jing2 zi2！jyut6 loeng6 hai2 tin1 soeng6。','Silly, it is a reflection—the moon is in the sky.']
 ],
 discuss:{basic:[
  ['猴子以为月亮在哪里？','Where did the monkey think the moon was?','在井里。'],
  ['他们怎么捞？','How did they fish?','一个拉一个倒挂着。'],
  ['月亮真的掉了吗？','Did the moon really fall?','没有，那是影子。']
 ],challenge:[
  ['为什么会看成月亮掉进井？','Why did they think so?','水里的倒影。'],
  ['「猴子捞月」说什么人？','What kind of person does this describe?','被假象骗、白费力气的人。'],
  ['遇到奇怪的事先做什么？','What should we do first when something seems odd?','先观察、想清楚，别急着行动。']
 ]},
 culture:{m:'猴子想把井里的月亮影子捞上来；比喻被假象迷惑，白费力气，也提醒要认清真实与虚幻。',en:'Monkeys tried to fish the moon\'s reflection from a well; being fooled by appearances and wasting effort.',near:'镜花水月',opp:'认清真相',use:{man:'这不是机会，只是假象，别像猴子捞月。',manR:'zhè bú shì jī huì，zhǐ shì jiǎ xiàng，bié xiàng hóu zi lāo yuè。',yue:'呢个唔系机会，只系假象，唔好似猴子捞月。',yueR:'ni1 go3 m4 hai6 gei1 wui6，zi2 hai6 gaai2 zoeng6，m4 hou2 ci5 hau4 zi2 laau1 jyut6。',eng:'This is not an opportunity but an illusion—do not fish for the moon.'}}
},
{
 cat:'寓言',
 name:{man:'小马过河',manR:'xiǎo mǎ guò hé',yue:'小马过河',yueR:'siu2 maa5 gwo3 ho4',eng:'The Little Horse Crosses the River'},
 art:['animals','animals','animals'],
 beats:[
  {man:'小马要帮妈妈把麦子送到磨坊。',manR:'xiǎo mǎ yào bāng mā ma bǎ mài zi sòng dào mò fáng。',yue:'小马要帮妈妈将麦送去做坊。',yueR:'siu2 maa5 jiu3 bong1 maa1 maa1 zoeng1 mak6 sung3 heoi3 zou6 fong4。',eng:'A little horse wanted to take wheat to the mill for his mother.'},
  {man:'路上有一条河，挡住了去路。',manR:'lù shàng yǒu yī tiáo hé，dǎng zhù le qù lù。',yue:'路上有一条河，阻住去路。',yueR:'lou6 soeng6 jau5 jat1 tiu4 ho4，zo2 zyu6 heoi3 lou6。',eng:'A river blocked the way.'},
  {man:'老牛说：水很浅，才到我的小腿。',manR:'lǎo niú shuō：shuǐ hěn qiǎn，cái dào wǒ de xiǎo tuǐ。',yue:'老牛话：水好浅，先到我嘅小腿。',yueR:'lou5 ngau4 waa6：seoi2 hou2 cin2，sin1 dou2 ngo5 ge3 siu2 teoi2。',eng:'The old cow said: The water is shallow, only up to my leg.'},
  {man:'松鼠说：水很深，我的朋友被冲走了。',manR:'sōng shǔ shuō：shuǐ hěn shēn，wǒ de péng you bèi chōng zǒu le。',yue:'松鼠话：水好深，我嘅朋友畀冲走咗。',yueR:'cung1 syu2 waa6：seoi2 hou2 sam1，ngo5 ge3 pang4 jau5 bei2 cung1 zau2 zo2。',eng:'The squirrel said: It is deep; my friend was swept away.'},
  {man:'小马不知道听谁的，回家问妈妈。',manR:'xiǎo mǎ bù zhī dào tīng shuí de，huí jiā wèn mā ma。',yue:'小马唔知听边个好，返屋企问妈妈。',yueR:'siu2 maa5 m4 zi1 dou2 ting1 bin1 go3 hou2，faan1 uk1 kei2 man6 maa1 maa1。',eng:'Not knowing whom to believe, he went home to ask.'},
  {man:'妈妈说：别人说的都不同，你自己试一试吧。',manR:'mā ma shuō：bié rén shuō de dōu bù tóng，nǐ zì jǐ shì yi shì ba。',yue:'妈妈话：人哋讲嘅都唔同，你自己试一试啦。',yueR:'maa1 maa1 waa6：jan4 dei6 gong2 ge3 dou1 m4 tung4，nei5 zi6 gei2 si3 jat1 si3 laa1。',eng:'Mother said: Others differ; you should try it yourself.'}
 ],
 words:[['小马','xiǎo mǎ','小马','siu2 maa5','little horse'],['河','hé','河','ho4','river'],['老牛','lǎo niú','老牛','lou5 ngau4','old cow'],['松鼠','sōng shǔ','松鼠','cung1 syu2','squirrel'],['浅','qiǎn','浅','cin2','shallow'],['深','shēn','深','sam1','deep'],['小腿','xiǎo tuǐ','小腿','siu2 teoi2','calf'],['冲走','chōng zǒu','冲走','cung1 zau2','sweep away'],['试','shì','试','si3','try'],['自己','zì jǐ','自己','zi6 gei2','oneself']],
 hints:['小马','送麦子','一条河','老牛说浅','松鼠说深','不知听谁','问妈妈','自己试'],
 hintsC:['小马过河','亲身实践','具体情况','别人经验','独立思考'],
 roles:[
  ['other','这条河能过吗？','zhè tiáo hé néng guò ma？','呢条河过得吗？','ni1 tiu4 ho4 gwo3 dak1 maa3？','Can I cross this river?'],
  ['other','很浅，只到我的小腿。','hěn qiǎn，zhǐ dào wǒ de xiǎo tuǐ。','好浅，净系到我小腿。','hou2 cin2，zing6 hai6 dou2 ngo5 ge3 siu2 teoi2。','It is shallow, just up to my leg.'],
  ['other','很深！我朋友被冲走了。','hěn shēn！wǒ péng you bèi chōng zǒu le。','好深！我朋友畀冲走咗。','hou2 sam1！ngo5 pang4 jau5 bei2 cung1 zau2 zo2。','It is deep! My friend was swept away.'],
  ['other','别人说的不一样，你自己试试。','bié rén shuō de bù yī yàng，nǐ zì jǐ shì shi。','人哋讲嘅唔同，你自己试下。','jan4 dei6 gong2 ge3 m4 tung4，nei5 zi6 gei2 si3 haa5。','Others differ; try it yourself.']
 ],
 discuss:{basic:[
  ['老牛说水怎样？','What did the cow say about the water?','很浅。'],
  ['松鼠说水怎样？','What did the squirrel say?','很深。'],
  ['妈妈让小马怎么做？','What did mother tell him to do?','自己试一试。']
 ],challenge:[
  ['为什么两个说法不同？','Why were the answers different?','牛高、松鼠矮，感受不同。'],
  ['别人的经验一定能信吗？','Can we always trust others\' experience?','要参考，但也要自己判断。'],
  ['你有过「自己试了才知道」的事吗？','When did you learn by trying?','学游泳、做实验等。']
 ]},
 culture:{m:'小马听牛和松鼠说法不同，最后自己尝试过河；比喻遇事要独立思考和亲身实践，不能只听别人说。',en:'The little horse crossed the river himself after hearing conflicting advice; think independently and learn through experience.',near:'亲身实践',opp:'人云亦云',use:{man:'别人说的仅供参考，小马过河，试了才知道。',manR:'bié rén shuō de jǐn gōng cān kǎo，xiǎo mǎ guò hé，shì le cái zhī dào。',yue:'人哋讲嘅只作参考，小马过河，试咗先知。',yueR:'jan4 dei6 gong2 ge3 zi2 zok3 caam1 haau3，siu2 maa5 gwo3 ho4，si3 zo2 sin1 zi1。',eng:'Others\' advice is only a reference—try it yourself to know.'}}
},

/* ============ 民俗传说 3 ============ */
{
 cat:'民俗',
 name:{man:'年的故事',manR:'nián de gù shi',yue:'年的故事',yueR:'nin4 ge3 gu3 si6',eng:'The Story of Nian'},
 art:['scene','scene','scene'],
 beats:[
  {man:'很久以前，有一种怪兽叫「年」。',manR:'hěn jiǔ yǐ qián，yǒu yī zhǒng guài shòu jiào nián。',yue:'好耐以前，有一种怪兽叫「年」。',yueR:'hou2 noi6 ji5 cin4，jau5 jat1 zung2 gwaai3 sau6 giu3 nin4。',eng:'Long ago there was a monster called Nian.'},
  {man:'它每年除夕都下山，吓唬村民、糟蹋庄稼。',manR:'tā měi nián chú xī dōu xià shān，xià hu cūn mín、zāo tà zhuāng jia。',yue:'佢每年除夕都落山，吓村民、糟蹋庄稼。',yueR:'keoi5 mui5 nin4 ceoi4 zik1 dou1 luk6 saan1，haak3 cyun1 man4、zou1 taat3 zong1 gaa3。',eng:'Every New Year\'s Eve it came down the mountain to scare villagers and ruin crops.'},
  {man:'大家很害怕，年年都躲到山里去。',manR:'dà jiā hěn hài pà，nián nián dōu duǒ dào shān lǐ qù。',yue:'大家好惊，年年都躲入山入面。',yueR:'daai6 gaa1 hou2 geng1，nin4 nin4 dou1 do2 jap6 saan1 jap6 min6。',eng:'Everyone was afraid and hid in the mountains each year.'},
  {man:'一位老人说：「年」怕红色、火光和响声。',manR:'yī wèi lǎo rén shuō：nián pà hóng sè、huǒ guāng hé xiǎng shēng。',yue:'一位老人话：「年」怕红色、火光同响声。',yueR:'jat1 wai2 lou5 jan4 waa6：nin4 pa3 hung4 sik1、fo2 gwong1 tung4 hoeng2 seng1。',eng:'An old man said Nian feared the colour red, fire, and loud noises.'},
  {man:'于是家家贴红纸、点灯笼、放爆竹。',manR:'yú shì jiā jiā tiē hóng zhǐ、diǎn dēng long、fàng bào zhú。',yue:'于系家家贴红纸、点灯笼、放爆竹。',yueR:'jyu1 hai6 gaa1 gaa1 tip3 hung4 zi2、dim2 dang1 lung4、fong3 baau3 zuk1。',eng:'So every house put up red paper, lit lanterns, and set off firecrackers.'},
  {man:'「年」吓得逃跑了，从此有了过年的习俗。',manR:'nián xià de táo pǎo le，cóng cǐ yǒu le guò nián de xí sú。',yue:'「年」惊到走晒，从此有过年嘅习俗。',yueR:'nin4 geng1 dou2 zau2 saai3，cung4 ci2 jau5 gwo3 nin4 ge3 zaap6 suk6。',eng:'Nian ran away in fear, and the New Year customs began.'}
 ],
 words:[['年','nián','年','nin4','Nian / year'],['怪兽','guài shòu','怪兽','gwaai3 sau6','monster'],['除夕','chú xī','除夕','ceoi4 zik1','New Year\'s Eve'],['红色','hóng sè','红色','hung4 sik1','red'],['灯笼','dēng long','灯笼','dang1 lung4','lantern'],['爆竹','bào zhú','爆竹','baau3 zuk1','firecracker'],['害怕','hài pà','惊','geng1','afraid'],['逃跑','táo pǎo','走','zau2','flee'],['习俗','xí sú','习俗','zaap6 suk6','custom'],['过年','guò nián','过年','gwo3 nin4','celebrate New Year']],
 hints:['怪兽年','除夕下山','村民躲','老人说','怕红怕响','贴红纸放爆竹','年逃跑','过年习俗'],
 hintsC:['年的故事','春节','辞旧迎新','传统习俗'],
 roles:[
  ['other','年来了，快躲起来！','nián lái le，kuài duǒ qǐ lái！','年嚟啦，快啲躲！','nin4 lai4 laa1，faai3 di1 do2 hei2 lai4！','Nian is coming—hide!'],
  ['other','它怕红色和响声。','tā pà hóng sè hé xiǎng shēng。','佢怕红色同响声。','keoi5 pa3 hung4 sik1 tung4 hoeng2 seng1。','It fears red and loud noises.'],
  ['other','快贴红纸、点灯笼！','kuài tiē hóng zhǐ、diǎn dēng long！','快啲贴红纸、点灯笼！','faai3 di1 tip3 hung4 zi2、dim2 dang1 lung4！','Put up red paper and light lanterns!'],
  ['other','年跑了！我们过年啦！','nián pǎo le！wǒ men guò nián la！','年走咗！我哋过年啦！','nin4 zau2 zo2！ngo5 dei6 gwo3 nin4 laa1！','Nian is gone! Happy New Year!']
 ],
 discuss:{basic:[
  ['「年」是什么？','What was Nian?','一种怪兽。'],
  ['年怕什么？','What did Nian fear?','红色、火光、响声。'],
  ['人们怎么过年？','How do people celebrate?','贴红纸、放爆竹、点灯笼。']
 ],challenge:[
  ['你家过年有哪些习俗？','What New Year customs does your family have?','吃年夜饭、发红包、看春晚。'],
  ['这些习俗为什么要保留？','Why keep these customs?','代表团圆和对新年的期盼。'],
  ['还有哪些传统节日故事？','What other festival stories do you know?','端午屈原、中秋嫦娥。']
 ]},
 culture:{m:'传说怪兽「年」怕红与响声，人们贴红放炮把它吓跑；这是春节习俗的由来，寓意辞旧迎新、驱邪纳福。',en:'The monster Nian feared red and noise; red paper and firecrackers gave rise to Spring Festival customs—welcoming the new and driving away evil.',near:'辞旧迎新',opp:'因循守旧',use:{man:'贴春联、放鞭炮，都是从年的故事来的。',manR:'tiē chūn lián、fàng biān pào，dōu shì cóng nián de gù shi lái de。',yue:'贴春联、放炮仗，都系由年的故事嚟。',yueR:'tip3 ceon1 lin4、fong3 paau3 zoeng6，dou1 hai6 jau4 nin4 ge3 gu3 si6 lai4 ge3。',eng:'Spring couplets and firecrackers all come from the story of Nian.'}}
},
{
 cat:'民俗',
 name:{man:'牛郎织女',manR:'niú láng zhī nǚ',yue:'牛郎织女',yueR:'ngau4 long4 zik1 neoi5',eng:'The Cowherd and the Weaver Girl'},
 art:['scene','scene','scene'],
 beats:[
  {man:'从前有个孤儿叫牛郎，和老牛一起生活。',manR:'cóng qián yǒu gè gū ér jiào niú láng，hé lǎo niú yī qǐ shēng huó。',yue:'从前有个孤儿叫牛郎，同老牛一齐生活。',yueR:'cung4 cin4 jau5 go3 gu1 ji4 giu3 ngau4 long4，tung4 lou5 ngau4 jat1 cai4 saang1 wut6。',eng:'Long ago an orphan named Niulang lived with an old cow.'},
  {man:'老牛告诉他，河边有位美丽的织女。',manR:'lǎo niú gào su tā，hé biān yǒu wèi měi lì de zhī nǚ。',yue:'老牛同佢讲，河边有位靓女织女。',yueR:'lou5 ngau4 tung4 keoi5 gong2，ho4 bin1 jau5 wai2 leng3 neoi5 zik1 neoi5。',eng:'The cow told him of a beautiful weaver girl by the river.'},
  {man:'两人相识相爱，结婚后生了一儿一女。',manR:'liǎng rén xiāng shí xiāng ài，jié hūn hòu shēng le yī ér yī nǚ。',yue:'两人相识相爱，结婚后生咗一仔一女。',yueR:'loeng5 jan4 soeng1 sik1 soeng1 oi3，git3 fan1 hau6 saang1 zo2 jat1 zai2 jat1 neoi5。',eng:'They met, fell in love, married, and had two children.'},
  {man:'王母娘娘知道后大怒，把织女带回天上。',manR:'wáng mǔ niáng niang zhī dào hòu dà nù，bǎ zhī nǚ dài huí tiān shàng。',yue:'王母娘娘知道后大怒，将织女带回天上。',yueR:'wong4 mou5 loeng4 loeng4 zi1 dou2 hau6 daai6 nou6，zoeng1 zik1 neoi5 daai3 faan1 tin1 soeng6。',eng:'The Queen Mother was angry and took the weaver girl back to heaven.'},
  {man:'牛郎挑着孩子追上天，却被银河隔开。',manR:'niú láng tiāo zhe hái zi zhuī shàng tiān，què bèi yín hé gé kāi。',yue:'牛郎担住仔女追上天，却畀银河隔开。',yueR:'ngau4 long4 daam1 zyu6 zai2 neoi5 zeoi1 soeng6 tin1，keoi5 bei2 ngan4 ho4 gaak3 hoi1。',eng:'Niulang chased after them with the children, but the Milky Way separated them.'},
  {man:'喜鹊搭成桥，让他们每年七夕相会一次。',manR:'xǐ què dā chéng qiáo，ràng tā men měi nián qī xī xiāng huì yī cì。',yue:'喜鹊搭成桥，畀佢哋每年七夕相会一次。',yueR:'hei2 zoek3 daap3 sing4 kiu4，bei2 keoi5 dei6 mui5 nin4 cat1 zik1 soeng1 wui6 jat1 ci3。',eng:'Magpies formed a bridge so they could meet once a year on Qixi.'}
 ],
 words:[['牛郎','niú láng','牛郎','ngau4 long4','Niulang'],['织女','zhī nǚ','织女','zik1 neoi5','weaver girl'],['老牛','lǎo niú','老牛','lou5 ngau4','old cow'],['银河','yín hé','银河','ngan4 ho4','Milky Way'],['喜鹊','xǐ què','喜鹊','hei2 zoek3','magpie'],['七夕','qī xī','七夕','cat1 zik1','Qixi Festival'],['相会','xiāng huì','相会','soeng1 wui6','meet'],['相爱','xiāng ài','相爱','soeng1 oi3','love each other'],['隔开','gé kāi','隔开','gaak3 hoi1','separate'],['传说','chuán shuō','传说','cyun4 syo3','legend']],
 hints:['孤儿牛郎','老牛','织女','相爱成家','王母','带回天上','银河隔开','喜鹊桥七夕'],
 hintsC:['牛郎织女','七夕','鹊桥相会','忠贞爱情'],
 roles:[
  ['other','河边有位美丽的姑娘。','hé biān yǒu wèi měi lì de gū niang。','河边有位靓姑娘。','ho4 bin1 jau5 wai2 leng3 gu1 niu1。','There is a beautiful girl by the river.'],
  ['other','我们结婚吧，一起生活。','wǒ men jié hūn ba，yī qǐ shēng huó。','我哋结婚啦，一齐生活。','ngo5 dei6 git3 fan1 laa1，jat1 cai4 saang1 wut6。','Let us marry and live together.'],
  ['other','把它带走，不许再见！','bǎ tā dài zǒu，bù xǔ zài jiàn！','将佢带走，唔准再见！','zoeng1 keoi5 daai3 zau2，m4 zeoi2 zoi3 gin3！','Take her away; no more meetings!'],
  ['other','喜鹊搭桥，一年见一次。','xǐ què dā qiáo，yī nián jiàn yī cì。','喜鹊搭桥，一年见一次。','hei2 zoek3 daap3 kiu4，jat1 nin4 gin3 jat1 ci3。','Magpies build a bridge; they meet once a year.']
 ],
 discuss:{basic:[
  ['牛郎和谁一起生活？','Who did Niulang live with?','老牛。'],
  ['谁把他们分开？','Who separated them?','王母娘娘。'],
  ['他们多久见一次？','How often do they meet?','每年七夕一次。']
 ],challenge:[
  ['喜鹊为什么搭桥？','Why do magpies build a bridge?','帮有情人相会。'],
  ['你知道七夕节吗？','Do you know the Qixi Festival?','乞巧节，中国的情人节。'],
  ['这个故事赞美了什么？','What does the story praise?','忠贞不渝的爱情。']
 ]},
 culture:{m:'牛郎织女被银河分隔，喜鹊搭桥让他们每年七夕相会；是七夕节的由来，象征忠贞的爱情。',en:'Niulang and Zhinv are separated by the Milky Way but meet yearly on a magpie bridge—the origin of Qixi, symbolising lasting love.',near:'忠贞不渝',opp:'朝三暮四',use:{man:'他们两地分居，像牛郎织女一样。',manR:'tā men liǎng dì fēn jū，xiàng niú láng zhī nǚ yī yàng。',yue:'佢哋两地分居，好似牛郎织女一样。',yueR:'keoi5 dei6 loeng5 dei6 fan1 geoi1，hou2 ci5 ngau4 long4 zik1 neoi5 jat1 joeng6。',eng:'They live apart in two places, like the cowherd and the weaver girl.'}}
},
{
 cat:'民俗',
 name:{man:'屈原投江',manR:'qū yuán tóu jiāng',yue:'屈原投江',yueR:'wat1 jyun4 tau4 gong1',eng:'Qu Yuan and the Dragon Boat Festival'},
 art:['scene','animals','animals'],
 beats:[
  {man:'屈原是古代一位爱国的诗人。',manR:'qū yuán shì gǔ dài yī wèi ài guó de shī rén。',yue:'屈原系古代一位爱国诗人。',yueR:'wat1 jyun4 hai6 gu2 doi6 jat1 wai2 oi3 gwok3 ge3 si1 jan4。',eng:'Qu Yuan was a patriotic poet in ancient times.'},
  {man:'他关心国家，写了很多优美的诗。',manR:'tā guān xīn guó jiā，xiě le hěn duō yōu měi de shī。',yue:'佢关心国家，写咗好多优美嘅诗。',yueR:'keoi5 gwaan1 sam1 gwok3 gaa1，se2 zo2 hou2 do1 jau1 mei5 ge3 si1。',eng:'He cared deeply for his country and wrote many beautiful poems.'},
  {man:'后来国家灭亡，他非常悲痛。',manR:'hòu lái guó jiā miè wáng，tā fēi cháng bēi tòng。',yue:'后来国家灭亡，佢好悲痛。',yueR:'hau6 loi4 gwok3 gaa1 mit6 mong4，keoi5 hou2 bei1 tung3。',eng:'When his country fell, he was overcome with grief.'},
  {man:'五月初五，他怀着悲愤跳进了汨罗江。',manR:'wǔ yuè chū wǔ，tā huái zhe bēi fèn tiào jìn le mì luó jiāng。',yue:'五月初五，佢怀着悲愤跳入汨罗江。',yueR:'ng5 jyut6 co1 ng5，keoi5 waai4 zyu6 bei1 fan6 tiu3 jap6 zo2 mik6 lo4 gong1。',eng:'On the fifth day of the fifth month, he jumped into the Miluo River.'},
  {man:'渔民划船去救他，往江里扔粽子喂鱼。',manR:'yú mín huá chuán qù jiù tā，wǎng jiāng lǐ rēng zòng zi wèi yú。',yue:'渔民撑船去救佢，向江度丢粽喂鱼。',yueR:'jyu4 man4 caang3 syun4 heoi3 gau3 keoi5，hoeng3 gong1 dou6 diu1 zung3 zi2 wai6 jyu4。',eng:'Fishermen raced to save him and threw rice dumplings for the fish.'},
  {man:'为了纪念他，有了端午划龙舟、吃粽子的习俗。',manR:'wèi le jì niàn tā，yǒu le duān wǔ huá lóng zhōu、chī zòng zi de xí sú。',yue:'为咗纪念佢，有咗端午扒龙舟、食粽嘅习俗。',yueR:'wai6 zo2 gei3 nim6 keoi5，jau5 zo2 dyun1 ng5 paa4 lung4 zau1、sik6 zung3 ge3 zaap6 suk6。',eng:'To remember him, dragon boat racing and eating zongzi became customs.'}
 ],
 words:[['屈原','qū yuán','屈原','wat1 jyun4','Qu Yuan'],['诗人','shī rén','诗人','si1 jan4','poet'],['爱国','ài guó','爱国','oi3 gwok3','patriotic'],['国家','guó jiā','国家','gwok3 gaa1','country'],['悲痛','bēi tòng','悲痛','bei1 tung3','grief'],['汨罗江','mì luó jiāng','汨罗江','mik6 lo4 gong1','Miluo River'],['粽子','zòng zi','粽','zung3 zi2','rice dumpling'],['龙舟','lóng zhōu','龙舟','lung4 zau1','dragon boat'],['纪念','jì niàn','纪念','gei3 nim6','commemorate'],['端午','duān wǔ','端午','dyun1 ng5','Dragon Boat Festival']],
 hints:['屈原','爱国诗人','写诗','国家灭亡','五月初五','投汨罗江','划船扔粽','端午习俗'],
 hintsC:['屈原投江','端午节','龙舟粽子','家国情怀'],
 roles:[
  ['other','我爱我的国家。','wǒ ài wǒ de guó jiā。','我爱我嘅国家。','ngo5 oi3 ngo5 ge3 gwok3 gaa1。','I love my country.'],
  ['other','国家没了，我很悲痛。','guó jiā méi le，wǒ hěn bēi tòng。','国家冇咗，我好悲痛。','gwok3 gaa1 mou5 zo2，ngo5 hou2 bei1 tung3。','My country is gone; I am heartbroken.'],
  ['other','快划船去救他！','kuài huá chuán qù jiù tā！','快啲撑船去救佢！','faai3 di1 caang3 syun4 heoi3 gau3 keoi5！','Row quickly to save him!'],
  ['other','吃粽子、赛龙舟，纪念屈原。','chī zòng zi、sài lóng zhōu，jì niàn qū yuán。','食粽、扒龙舟，纪念屈原。','sik6 zung3 zi2、paa4 lung4 zau1，gei3 nim6 wat1 jyun4。','Eat zongzi and race dragon boats to remember Qu Yuan.']
 ],
 discuss:{basic:[
  ['屈原是什么人？','Who was Qu Yuan?','爱国的诗人。'],
  ['他为什么投江？','Why did he jump into the river?','国家灭亡，非常悲痛。'],
  ['端午节做什么？','What do people do at Dragon Boat Festival?','吃粽子、划龙舟。']
 ],challenge:[
  ['怎样纪念屈原？','How do we remember Qu Yuan?','赛龙舟、吃粽子、读他的诗。'],
  ['你爱国吗？怎么表现？','Are you patriotic? How do you show it?','学好本领、爱护环境、尊重国旗。'],
  ['还有哪些节日纪念人物？','What other festivals remember a person?','清明、端午、中秋等。']
 ]},
 culture:{m:'屈原忧国投江，人们划船打捞、投粽喂鱼；端午节划龙舟、吃粽子正是为了纪念他，体现家国情怀。',en:'Qu Yuan drowned himself in grief; dragon boat racing and zongzi commemorate him and express love for one\'s country.',near:'忧国忧民',opp:'事不关己',use:{man:'吃粽子时，别忘了屈原的故事。',manR:'chī zòng zi shí，bié wàng le qū yuán de gù shi。',yue:'食粽时，唔好忘屈原嘅故事。',yueR:'sik6 zung3 zi2 si4，m4 hou2 mong4 wat1 jyun4 ge3 gu3 si6。',eng:'When eating zongzi, remember the story of Qu Yuan.'}}
}

];
