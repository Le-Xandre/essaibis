/*****
DONE: Add author to the tweet
TODO: Fix the 140 character tweet limit
TODO: Random number/quote on click shouldn't sometimes be the same as the previous one, making the quote form look unresponsive/broken
TODO: Rotating phone from landscape to portrait causes height issues
TODO: Give users the ability to add quotes and/or upvote or rate their favorite quotes -- could be abused though.
TODO: More quotes!
TODO: Add more cyberpunk-y effects and animations
*****/

$(document).ready(function () {
  var quoteList = [
    {
      author: "Jess C. Scott",
      source: "The Darker Side of Life",
      quote: "The brightest light casts the darkest shadow."
    },
    {
      author: "Neal Stephenson",
      source: "Snow Crash",
      quote: "To condense fact from the vapor of nuance."
    },
    {
      author: "William Gibson",
      source: "Neuromancer",
      quote: "Falling burned and blinded through a Siberian sky."
    },
    {
      author: "Anna L. Davis",
      source: "Open Source",
      quote:
        "I’d been an outcast my entire life. Growing up with technophobe parents in the dawn of a Cyborg Age did that to a person."
    },
    {
      author: "Eric Schmidth",
      source: "Dystopian Times",
      quote:
        "The Internet is the first thing that humanity has built that humanity doesn’t understand, the largest experiment in anarchy that we have ever had."
    },
    {
      author: "Philip K. Dick",
      source: "Do Androids Dream of Electric Sheep?",
      quote:
        "You will be required to do wrong no matter where you go. It is the basic condition of life, to be required to violate your own identity."
    },
    {
      author: "William Gibson",
      source: "Johnny Mnemonic",
      quote:
        "It’s impossible to move, to live, to operate at any level without leaving traces, bits, seemingly meaningless fragments of personal information. Fragments that can be retrieved, amplified…"
    },
    {
      author: "Lain Iwakura",
      source: "Serial Experiments: Lain",
      quote: "No matter where you go, everyone’s connected."
    },
    {
      author: "William Gibson",
      source: "Zero History",
      quote:
        "When you want to know how things really work, study them when they’re coming apart."
    },
    {
      author: "Jeff Somers",
      source: "The Electric Church",
      quote: "Let me show you an endless trail of sunsets."
    },
    {
      author: "Roy Batty",
      source: "Blade Runner",
      quote:
        "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched c-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die."
    },
    {
      author: "Neal Stephenson",
      source: "Snow Crash",
      quote:
        "See, the world is full of things more powerful than us. But if you know how to catch a ride, you can go places."
    },
    {
      author: "Neal Stephenson",
      source: "Snow Crash",
      quote: "Jack the sound barrier. Bring the noise."
    },
    {
      author: "Neal Stephenson",
      source: "Snow Crash",
      quote: "Well, all information looks like noise until you break the code."
    }
  ];

  // var quoteRandomize = '';
  // var quoteMain = '';
  // var quoteAuthor = '';
  // var quoteSource = '';

  function quoteGenerate() {
    var quoteRandomize = Math.floor(Math.random() * quoteList.length);
    var quoteMain = quoteList[quoteRandomize].quote;
    var quoteAuthor = quoteList[quoteRandomize].author;
    var quoteSource = quoteList[quoteRandomize].source;

    $("#quote").text(quoteMain);
    $("#author").text(quoteAuthor);
    $("#source").text(quoteSource);
  }

  /**** Quote Limit Test ****/
  // function quoteTweet() {
  //   if((quoteMain + quoteAuthor).length > 140 ){
  //     alert("no");
  //   } else {
  //     quoteTweet();
  //   }
  //   window.open("https://twitter.com/home/?status=" + "\"" + $("#quote").text() + "\"" + " - " + $("#author").text(), '_blank');
  // };

  $(".tweet").on("click", function () {
    window.open(
      "https://twitter.com/home/?status=" +
      '"' +
      $("#quote").text() +
      '"' +
      " - " +
      $("#author").text(),
      "_blank"
    );
  });

  // $(".tweet").on("click", function() {
  //  quoteTweet();
  // });

  $("#new-quote").on("click", function () {
    quoteGenerate();
  });
  // quoteTweet();
  quoteGenerate();
});
