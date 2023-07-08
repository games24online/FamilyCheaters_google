(function (window) {
  var lang = function (str) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (typeof urlParams.get('debug') !== 'undefined' && urlParams.get('debug') !== null && typeof urlParams.get('lang') != 'undefined' && urlParams.get('lang') !== null) {
      var localize = urlParams.get('lang');
    } else {
      var localize = navigator.language || navigator.userLanguage;
    }
    var def = "en";
    if (typeof localize == "undefined") {
      localize = def;
    } else {
      var local = localize.split("-");
      localize = local[0];
    }
    var store = {
      "en": {
        "title": "FunnGames",

        'cookie-2': 'We use',
        'cookie-3': 'cookies',
        'cookie-4': 'to give you the best possible experience on our website. By clicking \'Ok, don\'t show it again\'',
        'cookie-5': 'or \'X\' on this banner, or using our site, you consent to the use of cookies unless you have disabled them.',
        'cookie-6': 'Ok',
        'cookie-7': 'don\'t show it again',
        'footer-1': 'Privacy Policy',
        'footer-2': 'copyright © 2023, FunnGames. All rights reserved',

        "p1-step1-1": "WELCOME TO THE GAME",
        "p1-step1-2": "NO THANKS",
        "p1-step1-3": "CONTINUE",

        "p1-step2-1": "Choose your partner",
        "p1-step2-3": "STEPSISTER",
        "p1-step2-2": "STEPMOM",

        "p1-step3-1": "THIS SIMULATOR IS VERY EXTREME AND IS NOT FOR THE AVERAGE PERSON",
        "p1-step3-2": "WOULD YOU LIKE TO CONTINUE?",
        "p1-step3-3": "PLAY NOW",

        "p2-step1-1": "WARNING!",
        "p2-step1-2": "This game makes you play all night long",
        "p2-step1-3": "Play now",

        "p2-step2-1":
          "Before you play, we need to ask you a couple of questions.",
        "p2-step2-2": "Is your door locked and are you ready to play?",
        "p2-step2-3": "Yes",

        "p2-step3-1":
          "You are going to see a multitude of explicit erotic scenes.",
        "p2-step3-2": "Can you handle this?",
        "p2-step3-3": "Yes",

        "p2-step4-1": "FAMILY GAMES",
        "p2-step4-2":
          "Our games might feature explicit erotic scenarios between someone you dream of, possibly stepmoms or stepsisters.",
        "p2-step4-3": "Is this OK with you?",
        "p2-step4-4": "Yes",

        "p2-step5-1": "DISCLAIMER",
        "p2-step5-2":
          "These games can be highly addicting and in some cases ruin your relationships and have a negative effect on your job, sleeping etc.",
        "p2-step5-3": "Do you have any problems with addiction?",
        "p2-step5-4": "No",
        "p2-step5-5": "Yes",

        "p2-step6-1": "AWESOME!",
        "p2-step6-2": "Games are compatible with your browser.",
        "p2-step6-3": "No download is required.",
        "p2-step6-4": "CONTINUE",

        "p2-step7-1": "ALMOST DONE!",
        "p2-step7-2":
          "You need to choose your username and passwords to create your own character.",
        "p2-step7-3": "Do you understand and accept our terms?",
        "p2-step7-4": "Yes",

        "p2-step8-1": "Sakura",
        "p2-step8-2": "Hana",
        "p2-step8-3": "Yumi",
        "p2-step8-4": "Aiko",
        "p2-step8-5": "Miyuki",
        "p2-step8-7": "Select",

        "p2-step9-1": "What erotic fantasy would you like to try with your character?",
        "p2-step9-2": "Domination",
        "p2-step9-3": "Letting Go of Control",
        "p2-step9-4": "Bondage and Shibari",
        "p2-step9-5": "Intimacy in a car",

        "p2-step10-1": "SUCCESS!",
        "p2-step10-2":
          "All that\'s left is for you to verify your age by creating account.",
        "p2-step10-3": "You won’t be charged!",
        "p2-step10-4": "Play Now",

        "p2-step11-1": "Processing your answers",
        "p2-step11-2": "Evaluating your answers...",
        "p2-step11-3": "Analyzing daily registration limits...",
        "p2-step11-4": "Registrations remaining: 2",
        "p2-step11-5": "All games compatible with your browser",
        "p2-step11-6": "ACCOUNT APPROVED!",
        "p2-step11-7": "Play Game",
      },

    };
    if (typeof store[localize] == "undefined") {
      localize = def;
    }

    return store[localize][str];
  };
  document.title = lang("title");
  window.lang = lang;
  $('.multitext').each(function (e) {
    $(this).html(lang($(this).data('multitext')));
  });
})(window);