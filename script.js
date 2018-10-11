const fortuneButton = document.querySelector('[data-trigger="fortune"]');
const quoteButton = document.querySelector('[data-trigger="quote"]');
const outputFortune = document.querySelector('[data-output="fortune"]');
const outputQuote = document.querySelector('[data-output="quote"]');
const authorElement = document.querySelector('[data-output="author"]');

fortuneButton.addEventListener('click', function () {
    document.getElementById("mainH1").textContent = "Fortune Teller";
    outputFortune.textContent = fortunes[Math.floor((Math.random() * 50) + 1)-1].quote;
    authorElement.textContent = ``;
    // outputQuote.textContent = ``;
    outputQuote.innerHTML = "";
});
quoteButton.addEventListener('click', function () {
    document.getElementById("mainH1").textContent = "Coding Advisor";
    // outputFortune.textContent = ``;
    outputFortune.innerHTML = "";
    const i = Math.floor((Math.random() * 44) + 1)-1;
    outputQuote.textContent = quotes[i].quote;
    authorElement.textContent = `-- ${quotes[i].author}`;
});



console.log('YO!');



const fortunes = [
    {"id": 0, "quote":'Some days you are pigeon, some days you are statue. Today, bring umbrella.'},
    {"id": 1, "quote":'Your reality check about to bounce.'},
    {"id": 2, "quote":'Wise person never try to get even. Wise person get odder.'},
    {"id": 3, "quote":'Two days from now, tomorrow will be yesterday.'},
    {"id": 4, "quote":'Your inferiority complex not good enough. Try harder.'},
    {"id": 5, "quote":'When chosen for jury duty, tell judge "fortune cookie say guilty!”'},
    {"id": 6, "quote":'Stop eating now. Food poisoning no fun.'},
    {"id": 7, "quote":'You are cleverly disguised as responsible adult.'},
    {"id": 8, "quote":'Tomorrow at breakfast, listen carefully: do what rice krispies tell you to.'},
    {"id": 9, "quote":'Person who eat fortune cookie get lousy dessert.'},
    {"id": 10, "quote":'Okay to look at past and future. Just don’t stare.'},
    {"id": 11, "quote":'Wise person need either good manners or fast reflexes.'},
    {"id": 12, "quote":'Soup was secret family recipe made from toad. Hope you liked!'},
    {"id": 13, "quote":'You will soon have an out of money experience.'},
    {"id": 14, "quote":'Probability of being seen directly proportional to stupidity of act.'},
    {"id": 15, "quote":'He who dies with most toys, still dies.'},
    {"id": 16, "quote":'Person who rests on laurels gets thorn in backside.'},
    {"id": 17, "quote":'Practice safe eating. Always use condiments.'},
    {"id": 18, "quote":'Person who give self haircut after rice wine will be buzzed.'},
    {"id": 19, "quote":'Drive like hell, you will get there.'},
    {"id": 20, "quote":'Two can live as cheaply as one, for half as long.'},
    {"id": 21, "quote":'Hard work pay off in future. Laziness pay off now.'},
    {"id": 22, "quote":'Life is sexually transmitted condition.'},
    {"id": 23, "quote":'Give person fish, he eat for day. Teach person to fish, he always smell funny.'},
    {"id": 24, "quote":'Person who argue with idiot is taken for fool.'},
    {"id": 25, "quote":'Look before you leap. Or wear parachute.'},
    {"id": 26, "quote":'The end is near, might as well have dessert.'},
    {"id": 27, "quote":'This fortune no good. Try another.'},
    {"id": 28, "quote":'Of all 27 alternatives, running away is best.'},
    {"id": 29, "quote":'Closed mouth gathers no feet.'},
    {"id": 30, "quote":'Honeymoon should be like table: 4 bare legs, no drawers.'},
    {"id": 31, "quote":'Wise husband is one who thinks twice before saying nothing.'},
    {"id": 32, "quote":'On keyboard of life, always keep one finger on escape key.'},
    {"id": 33, "quote":'You are going nowhere, but at least path is interesting.'},
    {"id": 34, "quote":'Indecision is key to flexibility.'},
    {"id": 35, "quote":'Dijon vu -- the same mustard as before.'},
    {"id": 36, "quote":'A day without sunshine is like night.'},
    {"id": 37, "quote":'You are only young once, but can be immature forever.'},
    {"id": 38, "quote":'Be nice to friends. You might need them to empty your bedpan.'},
    {"id": 39, "quote":'The fortune you seek is in another cookie.'},
    {"id": 40, "quote":'Politicians are like diapers: change often, and for same reason.'},
    {"id": 41, "quote":'Atheism no fun. No holidays.'},
    {"id": 42, "quote":'Fat person not afraid of heights - afraid of widths.'},
    {"id": 43, "quote":'You have kleptomania. Take something for it.'},
    {"id": 44, "quote":'When marriage outlawed, only outlaws have inlaws.'},
    {"id": 45, "quote":'One tequila, two tequila, three tequila, floor.'},
    {"id": 46, "quote":'The older you get, the better you were.'},
    {"id": 47, "quote":'Age is high price to pay for maturity.'},
    {"id": 48, "quote":'Procrastination is art of keeping up with yesterday.'},
    {"id": 49, "quote":'A fool and his money are soon partying.'}
];


const quotes = [
    {"id":0, "author":"Bill Sempf","quote":"QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv."},
    {"id":1,"author":"Phil Karlton","quote":"There are only two hard things in Computer Science: cache invalidation, naming things and off-by-one errors."},
    {"id":2,"author":"Jeff Atwood","quote":"In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer's shifting idea of what their problem is."},
    {"id":3,"author":"Robert Sewell","quote":"If Java had true garbage collection, most programs would delete themselves upon execution."},
    {"id":4,"author":"Gavin Russell Baker","quote":"C++ : Where friends have access to your private members."},
    {"id":5,"author":"Bjarne Stroustrup","quote":"In C++ it's harder to shoot yourself in the foot, but when you do, you blow off your whole leg."},
    {"id":6,"author":"Alan Kay","quote":"Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves."},
    {"id":7,"author":"Larry DeLuca","quote":"I've noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture.  Near as I can tell, this coincides with the release of MS-DOS."},
    {"id":8,"author":"Mark Gibbs","quote":"No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved."},
    {"id":9,"author":"Henry Petroski","quote":"The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry."},
    {"id":10,"author":"Jeremy S. Anderson","quote":"There are two major products that come out of Berkeley: LSD and UNIX.  We don't believe this to be a coincidence."},
    {"id":11,"author":"Sam Ewing","quote":"Computers are like bikinis. They save people a lot of guesswork."},
    {"id":12,"author":"Jamie Zawinski","quote":"Linux is only free if your time has no value."},
    {"id":13,"author":"Dick Brandon","quote":"Documentation is like sex; when it's good, it's very, very good, and when it's bad, it's better than nothing."},
    {"id":14,"author":"Richard Moore","quote":"The difference between theory and practice is that in theory, there is no difference between theory and practice."},
    {"id":15,"author":"Michael Sinz","quote":"Programming is like sex: one mistake and you're providing support for a lifetime."},
    {"id":16,"author":"Bjarne Stroustrup","quote":"There are only two kinds of programming languages: those people always bitch about and those nobody uses."},
    {"id":17,"author":"Donald Knuth","quote":"Beware of bugs in the above code; I have only proved it correct, not tried it."},
    {"id":18,"author":"Tom Van Vleck","quote":"We know about as much about software quality problems as they knew about the Black Plague in the 1600s. We've seen the victims' agonies and helped burn the corpses. We don't know what causes it; we don't really know if there is only one disease. We just suffer and keep pouring our sewage into our water supply."},
    {"id":19,"author":"N.J. Rubenking","quote":"Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time."},
    {"id":20,"author":"C. A. R. Hoare","quote":"There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."},
    {"id":21,"author":"James O. Coplien","quote":"You should name a variable using the same care with which you name a first-born child."},
    {"id":22,"author":"Fred Brooks","quote":"Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary. No such faith comforts the software engineer."},
    {"id":23,"author":"Unknown","quote":"XML is like violence - if it doesn't solve your problems, you are not using enough of it."},
    {"id":24,"author":"Douglas Adams","quote":"I love deadlines. I like the whooshing sound they make as they fly by."},
    {"id":25,"author":"Keith Bostic","quote":"Perl - The only language that looks the same before and after RSA encryption."},
    {"id":26,"author":"Albert Einstein","quote":"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."},
    {"id":27,"author":"Yogi Berra","quote":"In theory, theory and practice are the same. In practice, they're not."},
    {"id":28,"author":"E. W. Dijkstra","quote":"It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration."},
    {"id":29,"author":"E. W. Dijkstra","quote":"If debugging is the process of removing software bugs, then programming must be the process of putting them in."},
    {"id":30,"author":"Mitch Ratcliffe","quote":"A computer lets you make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila."},
    {"id":31,"author":"Bjarne Stroustrup","quote":"I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone."},
    {"id":32,"author":"Ovidiu Platon","quote":"I don't care if it works on your machine! We are not shipping your machine!"},
    {"id":33,"author":"Rich Cook","quote":"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning."},
    {"id":34,"author":"Rick Osborne","quote":"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."},
    {"id":35,"author":"Charles Babbage","quote":"On two occasions I have been asked, 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question."},
    {"id":36,"author":"Jon Ribbens","quote":"PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals."},
    {"id":37,"author":"Bill Gates","quote":"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."},
    {"id":38,"author":"Brian Kernighan","quote":"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."},
    {"id":39,"author":"Jamie Zawinski","quote":"Some people, when confronted with a problem, think 'I know, I will use regular expressions.' Now they have two problems."},
    {"id":40,"author":"Hofstadter's Law","quote":"It always takes longer than you expect, even when you take into account Hofstadter's Law."},
    {"id":41,"author":"Edward V Berard","quote":"Walking on water and developing software from a specification are easy if both are frozen."},
    {"id":42,"author":"C. A. R. Hoare","quote":"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil."},
    {"id":43,"author":"Seymour Cray","quote":"The trouble with programmers is that you can never tell what a programmer is doing until it’s too late."}
  ];
