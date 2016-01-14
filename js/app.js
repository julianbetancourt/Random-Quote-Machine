'use strict';
// Variables
var photo = $('.photo img'),
    tweet = $('.ion-social-twitter-outline'),
    next = $('.ion-ios-arrow-thin-right'),
    reference = $('.reference'),
    author = $('.person'),
    quote = $('blockquote p');

// Quotes
// [ [0, 1, 2, 3], [0, 1, 2, 3] ]
  // 0 → Img Resource
  // 1 → Reference
  // 2 → Author
  // 3 → Quote
var quotes = [
  ['http://vignette3.wikia.nocookie.net/breakingbad/images/2/20/T5B_-_Jesse.jpg/revision/latest/scale-to-width-down/270?cb=20150219153012&path-prefix=es', 'Breaking Bad', 'Jesse Pinkman', 'So no matter what I do, hooray for me because I’m a great guy? It’s all good? No matter how many dogs I kill, I just do an inventory and accept?'],
  ['https://s-media-cache-ak0.pinimg.com/736x/bd/16/11/bd16117ce2a97a985fc9ed6f9acc4e6c.jpg', 'Bing Bang Theory', 'Sheldon Cooper', 'On the contrary. I found the Grinch to be a relatable, engaging character, and I was really with him right up to the point that he succumbed to social convention and returned the presents and saved Christmas. What a buzz kill that was!'],
  ['http://vignette3.wikia.nocookie.net/24wikia/images/e/e5/Jack_Bauer_Season_5.jpg/revision/20061202002138', '24', 'Jack Bauer', "You probably don't think I could force this towel down your throat, but trust me I can. All the way. Except that I'd hold onto this little bit at the end. When your stomach starts to digest the towel, I pull it out. Taking your stomach lining with it. Most people probably take about a week to die. It's very painful"],
  ['http://static.tumblr.com/a7ac3f93e7e570c6107dc3ffbd3e367a/trlp616/935n8aou8/tumblr_static_ckzvuxmfhw8cs8c4oskc0og4k.jpg', 'The Simpsons', 'Homer Simpson', 'Dear Lord, the gods have been good to me. As an offering, I present these milk and cookies. If you wish me to eat them instead, please give me no sign whatsoever...thy will be done'],
  ['http://img3.wikia.nocookie.net/__cb20120316184837/gameofthrones/images/c/c3/TyrionEW.png', 'Game Of Thrones', 'Tyrion Lannister', "Don't fight for a king. Don't fight for his kingdoms. Don't fight for honor. Don't fight for glory. Don't fight for riches, because you won't get any. This is your city Stannis means to sack. That's your gate he's ramming. If he gets in it will be your house that burns, your gold he steals, your women he rapes. Those are brave men knocking at our door. Let's go kill them!"],
  ['http://vignette3.wikia.nocookie.net/breakingbad/images/2/20/T5B_-_Jesse.jpg/revision/latest/scale-to-width-down/270?cb=20150219153012&path-prefix=es', 'Breaking Bad', 'Jesse Pinkman', 'So no matter what I do, hooray for me because I’m a great guy? It’s all good? No matter how many dogs I kill, I just do an inventory and accept?'],
  ['http://surbrook.devermore.net/adaptationstv/asstd_tv/house.jpg', 'House', 'Dr. Gregory House', "You want to know how two chemicals interact, do you ask them? No, they're going to lie through their lying little chemical teeth. Throw them in a beaker and apply heat"],
  ['https://pbs.twimg.com/profile_images/443549073304342528/lBU43Q_l.jpeg', 'House of Cards', 'Frank Underwood', 'There are two kinds of pain. Good pain – the sort of pain that motivates, that makes you strong. Then there’s bad pain – useless pain, the sort of pain that’s only suffering. I welcome the former. I have no patience for the latter.'],
  ['http://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg', 'Breaking Bad', 'Walter White', 'You clearly don’t know who you’re talking to, so let me clue you in. I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No! I am the one who knocks!'],
  ['http://i53.tinypic.com/2qdaf84.jpg', 'The Fresh Prince of Bel-Air', 'Will Smith', 'Roses are red, violets are blue, me and jazz are black, Carlton what are you?'],
];

//Click Event On next
next.click(function() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  photo.attr('src', quotes[randomNumber][0]);
  reference.text(quotes[randomNumber][1]);
  author.text(quotes[randomNumber][2]);
  quote.text(quotes[randomNumber][3]);
});
