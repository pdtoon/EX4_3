// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/movies.json":[function(require,module,exports) {
module.exports = [{
  "id": 771434188,
  "title": "The SpongeBob Movie: Sponge on the Run",
  "url": "/m/the_spongebob_movie_sponge_on_the_run",
  "tomatoIcon": "fresh",
  "tomatoScore": 66,
  "theaterReleaseDate": "Aug 7",
  "dvdReleaseDate": "Mar 4",
  "mpaaRating": "PG",
  "synopsis": "Although its story may leave fans on the surface, <em>The Spongebob Movie: Sponge on the Run</em> is a wondrously wacky visit to Bikini Bottom that retains the charm of the original series.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 31 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY5Njg1MTtqOzE4ODc4OzEyMDA7MjAwMDszMDAw",
    "primary": "https://resizing.flixster.com/atQgbSJHd7ING-1jk2d-0subV_Y=/130x0/v1.bTsxMzY5Njg1MTtqOzE4ODc4OzEyMDA7MjAwMDszMDAw"
  },
  "actors": ["Tom Kenny", "Bill Fagerbakke", "Mr. Lawrence"]
}, {
  "id": 771499413,
  "title": "You Go to My Head",
  "url": "/m/you_go_to_my_head",
  "tomatoIcon": "fresh",
  "tomatoScore": 60,
  "theaterReleaseDate": "Feb 14",
  "dvdReleaseDate": "Feb 9",
  "mpaaRating": "NR",
  "synopsis": "In a desolate stretch of the Sahara, a mysterious car accident leaves a young woman lost and alone. Jake, a reclusive architect, finds her unconscious. He drives her to the nearest doctor, to discover that she's suffering from post-traumatic amnesia. Intoxicated by the woman's beauty, Jake claims to be her husband. He names her Kitty and takes her to his remote desert home to recuperate. As Kitty struggles to come to grips with who she is, Jake invents an elaborate life they can share -- the life he has always yearned for. Little by little, Kitty begins to fall in love with him. But when shreds of her past begin to surface, Jake increasingly lives in fear of losing the love of his life.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 56 min.",
  "posters": {
    "thumborId": "v1.bTsxMzIyMjAxMjtqOzE4ODczOzEyMDA7Njc0OzEwMjQ",
    "primary": "https://resizing.flixster.com/uDDUUBuQ1MwGdgx_iQzIA7RXbXw=/130x0/v1.bTsxMzIyMjAxMjtqOzE4ODczOzEyMDA7Njc0OzEwMjQ"
  },
  "actors": ["Delfine Bafort", "Arend Pinoy", "Laurence Tremolet"]
}, {
  "id": 771505255,
  "title": "Nomadland",
  "url": "/m/nomadland",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 94,
  "theaterReleaseDate": "Feb 19",
  "dvdReleaseDate": "Feb 19",
  "mpaaRating": "R",
  "synopsis": "A poetic character study on the forgotten and downtrodden, <em>Nomadland</em> beautifully captures the restlessness left in the wake of the Great Recession.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 48 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY5Njg0NjtqOzE4ODc4OzEyMDA7MTMzNDsyMDAw",
    "primary": "https://resizing.flixster.com/XwAS_0N3EA0UZpQuPB4KORdrxMk=/130x0/v1.bTsxMzY5Njg0NjtqOzE4ODc4OzEyMDA7MTMzNDsyMDAw"
  },
  "actors": ["Frances McDormand", "David Strathairn", "Linda May"]
}, {
  "id": 771511971,
  "title": "American Skin",
  "url": "/m/american_skin",
  "tomatoIcon": "rotten",
  "tomatoScore": 35,
  "theaterReleaseDate": "Jan 15",
  "dvdReleaseDate": "Jan 15",
  "mpaaRating": "R",
  "synopsis": "AMERICAN SKIN weaves a layered story in the tradition of Sidney Lumet's 12 Angry Men and Dog Day Afternoon, that follows a Black Iraqi War Vet, who after being denied of a fair trial following the shooting death of his teenage son (and only child) by a white police officer, desperately seeks justice and accountability for his son's death.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 29 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY0MTY5NztqOzE4ODc3OzEyMDA7ODEwMDsxMjAwMA",
    "primary": "https://resizing.flixster.com/Ma2jRgrcRmV3aNEykwoaOqYxHGM=/130x0/v1.bTsxMzY0MTY5NztqOzE4ODc3OzEyMDA7ODEwMDsxMjAwMA"
  },
  "actors": ["Omari Hardwick", "Theo Rossi", "Beau Knapp"]
}, {
  "id": 771512304,
  "title": "Raya and the Last Dragon",
  "url": "/m/raya_and_the_last_dragon",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 95,
  "theaterReleaseDate": "Mar 5",
  "dvdReleaseDate": "Mar 5",
  "mpaaRating": "PG",
  "synopsis": "Another gorgeously animated, skillfully voiced entry in the Disney canon, <em>Raya and the Last Dragon</em> continues the studio's increased representation while reaffirming that its classic formula is just as reliable as ever.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 30 min.",
  "mainTrailer": {
    "sourceId": "https://link.theplatform.com/s/NGweTC/media/GTzXDJaoccR_",
    "id": "11334996"
  },
  "posters": {
    "thumborId": "v1.bTsxMzcwMzAwODtqOzE4ODc4OzEyMDA7NTQwOzgxMA",
    "primary": "https://resizing.flixster.com/UYaCQrSp1Kgwm1dgWW54PEQagbs=/130x0/v1.bTsxMzcwMzAwODtqOzE4ODc4OzEyMDA7NTQwOzgxMA"
  },
  "actors": ["Gemma Chan", "Daniel Dae Kim", "Sandra Oh"]
}, {
  "id": 771512667,
  "title": "Two of Us (Deux)",
  "url": "/m/two_of_us",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 97,
  "theaterReleaseDate": "Feb 5",
  "dvdReleaseDate": "Feb 5",
  "mpaaRating": "NR",
  "synopsis": "A remarkable feature debut for director/co-writer Filippo Meneghetti, <em>Two of Us</em> tells a deceptively complex love story while presenting a rich acting showcase for its three leads.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 35 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYzMzk4NDtqOzE4ODc3OzEyMDA7MTY5MzsyNTAw",
    "primary": "https://resizing.flixster.com/f89GTQPvPSt68EIodzVG0n7-YJY=/130x0/v1.bTsxMzYzMzk4NDtqOzE4ODc3OzEyMDA7MTY5MzsyNTAw"
  },
  "actors": ["Barbara Sukowa", "Martine Chevallier", "Léa Drucker"]
}, {
  "id": 771513349,
  "title": "The Changin' Times of Ike White",
  "url": "/m/the_changin_times_of_ike_white",
  "tomatoIcon": "fresh",
  "tomatoScore": 100,
  "theaterReleaseDate": "Dec 4",
  "dvdReleaseDate": "Jan 26",
  "mpaaRating": "NR",
  "synopsis": "Released in 1976, Changin' Times was an extraordinary album recorded in extraordinary circumstances. The artist, Ike White, was a musical prodigy who had been in prison since the age of 19, serving life for murder. Produced by legendary music producer Jerry Goldstein, the album became Ike's ticket to freedom. But, on the cusp of stardom, Ike slipped out of the limelight, changed his name and disappeared. This is his story.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 19 min.",
  "posters": {
    "thumborId": "v1.bTsxMzE4OTE4OTtqOzE4ODcyOzEyMDA7MjM4OzM0MA",
    "primary": "https://resizing.flixster.com/vIdDAN0NS-WGCFxrm5TBeklP5ic=/130x0/v1.bTsxMzE4OTE4OTtqOzE4ODcyOzEyMDA7MjM4OzM0MA"
  },
  "actors": ["Ike White", "Alvin Taylor", "Greg Errico"]
}, {
  "id": 771513560,
  "title": "Born to Be",
  "url": "/m/born_to_be",
  "tomatoIcon": "fresh",
  "tomatoScore": 100,
  "theaterReleaseDate": "Nov 18",
  "dvdReleaseDate": "Jan 19",
  "mpaaRating": "NR",
  "synopsis": "Directed by Tania Cypriano, this documentary showcases how Dr. Jess Ting, a well-respected plastic surgeon, redirects his practice to become a pioneering gender-affirming surgeon to address the challenging medical needs of the growing population of transgender and gender-nonconforming people in New York City. Through his work, the transgender and gender-nonconforming community could now access quality services that specifically address their medical needs at the Mount Sinai Center for Transgender Medicine and Surgery.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 32 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY0MTcwMTtqOzE4ODc3OzEyMDA7MTA2MjsxNTAw",
    "primary": "https://resizing.flixster.com/xgTTCHYD10XY3W1VNuciIgSDKMI=/130x0/v1.bTsxMzY0MTcwMTtqOzE4ODc3OzEyMDA7MTA2MjsxNTAw"
  },
  "actors": ["Garnet Rubio", "Mahogany Phillips", "Jordan Rubenstein"]
}, {
  "id": 771514333,
  "title": "Savage",
  "url": "/m/savage_2019_2",
  "tomatoIcon": "fresh",
  "tomatoScore": 76,
  "dvdReleaseDate": "Jan 29",
  "mpaaRating": "NR",
  "synopsis": "<em>Savage</em> lives up to its title with plenty of grim violence -- but dispenses its brutality in service of a well-acted and solidly effective character study.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 50 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY0ODE5MDtqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2",
    "primary": "https://resizing.flixster.com/28UEiIsVg0quKGR5BCeV7YAopdI=/130x0/v1.bTsxMzY0ODE5MDtqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2"
  },
  "actors": ["Jake Ryan", "John Tui", "Chelsie Preston-Crayford"]
}, {
  "id": 771517659,
  "title": "Yalda, a Night for Forgiveness",
  "url": "/m/yalda_a_night_for_forgiveness",
  "tomatoIcon": "fresh",
  "tomatoScore": 95,
  "theaterReleaseDate": "Dec 11",
  "dvdReleaseDate": "Mar 9",
  "mpaaRating": "NR",
  "synopsis": "In Iran today: Maryam (22) accidentally kills her husband Nasser (65) and is sentenced to death. The only person who can save her is Mona (37), Nasser's daughter. All Mona has to do is appear on a popular live TV show and forgive Maryam. But forgiveness proves difficult when they are forced to relive the past.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 29 min.",
  "posters": {
    "thumborId": "v1.bTsxMzM1OTI4OTtqOzE4ODc0OzEyMDA7MTI3MjsxOTM1",
    "primary": "https://resizing.flixster.com/gfxyllYCdbcO3aKU_G5GEDGpHEE=/130x0/v1.bTsxMzM1OTI4OTtqOzE4ODc0OzEyMDA7MTI3MjsxOTM1"
  },
  "actors": ["Sadaf Asgari", "Behnaz Jafari", "Babak Karimi"]
}, {
  "id": 771520311,
  "title": "Mayor",
  "url": "/m/mayor",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 100,
  "theaterReleaseDate": "Dec 2",
  "dvdReleaseDate": "Feb 16",
  "mpaaRating": "NR",
  "synopsis": "A clear-eyed look at an extraordinary subject, <em>Mayor</em> makes essential viewing out of one politician's quest to preserve dignity in the midst of bureaucracy.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 29 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY3OTY2MTtqOzE4ODc4OzEyMDA7MTUwMDsyMDAw",
    "primary": "https://resizing.flixster.com/Rzxqft5KLaWpEUJV5mZIBW9R21s=/130x0/v1.bTsxMzY3OTY2MTtqOzE4ODc4OzEyMDA7MTUwMDsyMDAw"
  },
  "actors": ["Musa Hadid"]
}, {
  "id": 771521432,
  "title": "Stray",
  "url": "/m/stray_2021",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 95,
  "theaterReleaseDate": "Mar 5",
  "dvdReleaseDate": "Mar 5",
  "mpaaRating": "NR",
  "synopsis": "<em>Stray</em> takes a patient, meditative look at the lives of Istanbul's stray dog population -- and uncovers truths of the human condition in the process.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 12 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY3OTE4OTtqOzE4ODc4OzEyMDA7MTY5MzsyNTAw",
    "primary": "https://resizing.flixster.com/vxuHG2z2d3BzPrCnGx0V3fOUfOk=/130x0/v1.bTsxMzY3OTE4OTtqOzE4ODc4OzEyMDA7MTY5MzsyNTAw"
  },
  "actors": []
}, {
  "id": 771521734,
  "title": "Cowboys",
  "url": "/m/cowboys_2021",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 91,
  "theaterReleaseDate": "Feb 12",
  "dvdReleaseDate": "Feb 12",
  "mpaaRating": "NR",
  "synopsis": "<em>Cowboys</em> explores emotionally charged themes with a steady hand, highlighting the humanity of its characters in a story of fraught family dynamics and gender identity.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 23 min.",
  "mainTrailer": {
    "sourceId": "https://link.theplatform.com/s/NGweTC/media/qHFjEuOofFPn",
    "id": "11331004"
  },
  "posters": {
    "thumborId": "v1.bTsxMzY3ODU2NDtqOzE4ODc4OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/O1WBodPo6zHA02O5C4YizMGSdm4=/130x0/v1.bTsxMzY3ODU2NDtqOzE4ODc4OzEyMDA7MjAyNTszMDAw"
  },
  "actors": ["Steve Zahn", "Jillian Bell", "Sasha Knight"]
}, {
  "id": 771521767,
  "title": "Little Fish",
  "url": "/m/little_fish_2021",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 91,
  "theaterReleaseDate": "Feb 5",
  "dvdReleaseDate": "Feb 5",
  "mpaaRating": "NR",
  "synopsis": "Tough but stirring, <em>Little Fish</em> uses one couple's pandemic love story to illustrate the strength of human connection in trying times.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 41 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY1ODU1NjtqOzE4ODc4OzEyMDA7MjcwMDs0MDAw",
    "primary": "https://resizing.flixster.com/6a_H2NB-tu0QiE8qVuxjrVr9ni8=/130x0/v1.bTsxMzY1ODU1NjtqOzE4ODc4OzEyMDA7MjcwMDs0MDAw"
  },
  "actors": ["Olivia Cooke", "Jack O'Connell", "Soko"]
}, {
  "id": 771534646,
  "title": "Notturno",
  "url": "/m/notturno_2021",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 82,
  "theaterReleaseDate": "Jan 22",
  "dvdReleaseDate": "Jan 29",
  "mpaaRating": "NR",
  "synopsis": "<em>Notturno</em> contemplates the cost of war in starkly human terms by surveying the lives of people living under the threat of destruction.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 35 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY3MzQxNztwOzE4ODc4OzEyMDA7MjA0NDszMDE5",
    "primary": "https://resizing.flixster.com/wV79gAlqUfoGJCCzIP3rqBt8SLk=/130x0/v1.bTsxMzY3MzQxNztwOzE4ODc4OzEyMDA7MjA0NDszMDE5"
  },
  "actors": []
}, {
  "id": 771534820,
  "title": "Dear Comrades!",
  "url": "/m/dear_comrades",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 94,
  "theaterReleaseDate": "Jan 29",
  "dvdReleaseDate": "Feb 5",
  "mpaaRating": "NR",
  "synopsis": "<em>Dear Comrades</em> takes a sharp, commanding look at a dark chapter in Soviet history made even more effective by its director's cold fury.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 56 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY3OTY1MztqOzE4ODc4OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/dxBzP1sBzWodzGay2B6DI83D85o=/130x0/v1.bTsxMzY3OTY1MztqOzE4ODc4OzEyMDA7MjAyNTszMDAw"
  },
  "actors": ["Yulia Visotskaya", "Vladislav Komarov", "Andrey Gusev"]
}, {
  "id": 771534853,
  "title": "Ten Minutes To Midnight",
  "url": "/m/ten_minutes_to_midnight",
  "tomatoIcon": "fresh",
  "tomatoScore": 85,
  "theaterReleaseDate": "Sep 17",
  "dvdReleaseDate": "Jan 19",
  "mpaaRating": "NR",
  "synopsis": "Led by Caroline Williams' outstanding performance, the entertainingly old-school <em>Ten Minutes to Midnight</em> delivers bloody good fun for horror fans.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 13 min.",
  "posters": {
    "thumborId": "v1.bTsxMzUzNjMyMTtqOzE4ODc2OzEyMDA7MjAwMDszMDAw",
    "primary": "https://resizing.flixster.com/U_xA-z9ZNxEgytSdq2SNckt0ZQY=/130x0/v1.bTsxMzUzNjMyMTtqOzE4ODc2OzEyMDA7MjAwMDszMDAw"
  },
  "actors": ["Nicole Kang", "William Youmans", "Adam Weppler"]
}, {
  "id": 771535431,
  "title": "Supernova",
  "url": "/m/supernova_2021",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 89,
  "theaterReleaseDate": "Jan 29",
  "dvdReleaseDate": "Feb 16",
  "mpaaRating": "R",
  "synopsis": "Led by moving performances from Colin Firth and Stanley Tucci, <em>Supernova</em> is a heartbreaking look at the emotional toll that comes with accepting mortality.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 33 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY2ODI0MztqOzE4ODc4OzEyMDA7Mjc2NDs0MDk2",
    "primary": "https://resizing.flixster.com/rcoUbDaz4sWSKfWCnx_klTsJoEw=/130x0/v1.bTsxMzY2ODI0MztqOzE4ODc4OzEyMDA7Mjc2NDs0MDk2"
  },
  "actors": ["Colin Firth", "Stanley Tucci", "Pippa Haywood"]
}, {
  "id": 771554280,
  "title": "Nasrin",
  "url": "/m/nasrin",
  "tomatoIcon": "fresh",
  "tomatoScore": 93,
  "dvdReleaseDate": "Jan 26",
  "mpaaRating": "NR",
  "runtime": "1 hr. 32 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY2OTYyODtqOzE4ODc4OzEyMDA7NTMxOzc1MA",
    "primary": "https://resizing.flixster.com/iTLmus7-21MgEzXK9Fy59Ua2VoA=/130x0/v1.bTsxMzY2OTYyODtqOzE4ODc4OzEyMDA7NTMxOzc1MA"
  },
  "actors": ["Ann Curry", "Shirin Ebadi", "Reza Khandan"]
}, {
  "id": 771554346,
  "title": "PG: Psycho Goreman",
  "url": "/m/pg_psycho_goreman",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 91,
  "theaterReleaseDate": "Jan 22",
  "dvdReleaseDate": "Jan 22",
  "mpaaRating": "R",
  "synopsis": "Over the top and enthusiastically strange, <em>PG: Psycho Goreman</em> delivers all the cheesy midnight-movie goodness promised by its title.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 35 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY0MzkzMjtqOzE4ODc3OzEyMDA7MTA4MDsxNjAw",
    "primary": "https://resizing.flixster.com/r1M-LP4v5NKYCDWtzjwG_1M4fGU=/130x0/v1.bTsxMzY0MzkzMjtqOzE4ODc3OzEyMDA7MTA4MDsxNjAw"
  },
  "actors": ["Matthew Ninaber", "Rick Amsbury", "Adam Brooks"]
}, {
  "id": 771554359,
  "title": "Baby, Done",
  "url": "/m/baby_done",
  "tomatoIcon": "fresh",
  "tomatoScore": 92,
  "theaterReleaseDate": "Jan 21",
  "dvdReleaseDate": "Jan 21",
  "mpaaRating": "NR",
  "synopsis": "A lightly humorous look at impending parenthood, <em>Baby Done</em> finds laughs -- and moments of genuine honesty -- in a life-altering event.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 31 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYyNjI2NztwOzE4ODc3OzEyMDA7NzA0Ozk5NA",
    "primary": "https://resizing.flixster.com/rtUZZrSveg9Md1C2oUKn4totBgE=/130x0/v1.bTsxMzYyNjI2NztwOzE4ODc3OzEyMDA7NzA0Ozk5NA"
  },
  "actors": ["Rose Matafeo", "Emily Barclay", "Matthew Lewis"]
}, {
  "id": 771554511,
  "title": "Rams",
  "url": "/m/rams_2021",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 91,
  "theaterReleaseDate": "Feb 5",
  "dvdReleaseDate": "Mar 30",
  "mpaaRating": "NR",
  "synopsis": "A rare remake that preserves the heart of the original, <em>Rams</em> draws on the chemistry of its talented veteran stars to explore complicated -- and often comedic -- sibling ties.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 55 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY1NjI5NjtqOzE4ODc4OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/Lzv8BqFtCgsw3vR-lWlAiWKz7Ic=/130x0/v1.bTsxMzY1NjI5NjtqOzE4ODc4OzEyMDA7MjAyNTszMDAw"
  },
  "actors": ["Sam Neill", "Michael Caton", "Wayne Blair"]
}, {
  "id": 771554601,
  "title": "Reunion",
  "url": "/m/reunion_2021",
  "tomatoIcon": "fresh",
  "tomatoScore": 83,
  "theaterReleaseDate": "Feb 5",
  "dvdReleaseDate": "Feb 5",
  "mpaaRating": "NR",
  "synopsis": "A pregnant woman returns to her recently deceased grandparents' old family home to spend time with her estranged mother. What begins as a tenuous reunion slowly turns terrifying.",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzY5Mzg0MjtqOzE4ODc4OzEyMDA7MTk0NDsyODgw",
    "primary": "https://resizing.flixster.com/GoGEO2MnLP_tYue_ecreDEikQEk=/130x0/v1.bTsxMzY5Mzg0MjtqOzE4ODc4OzEyMDA7MTk0NDsyODgw"
  },
  "actors": ["Julia Ormond", "Emma Draper", "Cohen Holloway"]
}, {
  "id": 771554788,
  "title": "Skyfire",
  "url": "/m/skyfire_2021",
  "tomatoIcon": "rotten",
  "tomatoScore": 55,
  "theaterReleaseDate": "Jan 12",
  "dvdReleaseDate": "Feb 12",
  "mpaaRating": "NR",
  "synopsis": "Tianhuo Island is a beautiful paradise. It almost makes people forget that it is located in the \"Ring of Fire\" the world-famous Pacific Rim volcanic belt. A young scientist (Hannah Quinlivan) invents a cutting-edge volcanic warning system and returns to the island where her mother tragically died, hoping she can prevent future deaths. The island is now home to the world's only volcano theme park and resort, the brainchild of its reckless owner Jack (Jason Isaacs). Chaos soon erupts when the once dormant volcano starts to rumble. It's a battle with nature to get off the island while fiery death and destruction rains down from the mountain.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 37 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY0ODE5MjtqOzE4ODc3OzEyMDA7MjcwMDs0MDAw",
    "primary": "https://resizing.flixster.com/V0GIdDLu76TxEOS0m50vX9UqJVY=/130x0/v1.bTsxMzY0ODE5MjtqOzE4ODc3OzEyMDA7MjcwMDs0MDAw"
  },
  "actors": ["Jason Isaacs", "Bee Rogers", "Alice Rietveld"]
}, {
  "id": 771555040,
  "title": "Stallone: Frank, That Is",
  "url": "/m/stallone_frank_that_is",
  "tomatoIcon": "rotten",
  "tomatoScore": 56,
  "dvdReleaseDate": "Jan 19",
  "mpaaRating": "NR",
  "synopsis": "Frank Stallone has remained one of the most versatile talents in Hollywood for over four decades. His music career has earned him three Platinum Albums, ten Gold Albums, five Gold Singles and seen him top the charts worldwide. His movie soundtracks have audiences across the globe gripped to some of the most iconic movies; including The Expendables 2, Rocky I, II and III, Rambo II, Paradise Alley, Over the Top and the Saturday Night Fever sequel Staying Alive, which earned him Golden Globe and Grammy Nominations. All the while Frank's on-screen career has seen him act in over 60 films and TV shows, including Tombstone and the cult hit Barfly. So why does Frank remain one of the least known famous faces in Hollywood? Find out as we go behind the scenes of Hollywood's elite, in this fascinating documentary, told by Frank himself and those that know him best.",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzYzNTkyMjtqOzE4ODc3OzEyMDA7ODY5OzEyODA",
    "primary": "https://resizing.flixster.com/gcTxBeINpyigO3_37ihFp_2UEts=/130x0/v1.bTsxMzYzNTkyMjtqOzE4ODc3OzEyMDA7ODY5OzEyODA"
  },
  "actors": ["Frank Stallone", "Sylvester Stallone", "Arnold Schwarzenegger"]
}, {
  "id": 771555122,
  "title": "Happily",
  "url": "/m/happily",
  "tomatoIcon": "fresh",
  "tomatoScore": 69,
  "theaterReleaseDate": "Mar 19",
  "dvdReleaseDate": "Mar 19",
  "mpaaRating": "NR",
  "synopsis": "<em>Happily</em> struggles to fully realize its ambitions, but at its best, this intermittently intriguing drama makes pointed -- and frequently funny -- observations about modern relationships.",
  "synopsisType": "consensus",
  "posters": {
    "thumborId": "v1.bTsxMzcwNDY0NDtqOzE4ODc4OzEyMDA7NTQwNDs4MDE1",
    "primary": "https://resizing.flixster.com/CpZOWO4esLQFFvVKGKwmgYPtKkc=/130x0/v1.bTsxMzcwNDY0NDtqOzE4ODc4OzEyMDA7NTQwNDs4MDE1"
  },
  "actors": ["Joel McHale", "Kerry Bishé", "Stephen Root"]
}, {
  "id": 771555173,
  "title": "Caged",
  "url": "/m/caged_2021",
  "tomatoIcon": "rotten",
  "tomatoScore": 43,
  "dvdReleaseDate": "Jan 26",
  "mpaaRating": "NR",
  "synopsis": "An affluent African American psychiatrist (Edi Gathegi), convicted of murdering his wife (Angela Sarafyan), is sentenced to life in federal prison, then sent to solitary confinement. Struggling to file an appeal, he descends into madness, pushed to his breaking point by an abusive female guard (Hardin) hell-bent on her own form of justice and haunted by his dead wife, causing him to question his own innocence and sanity.",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzY0NzM2NztqOzE4ODc3OzEyMDA7Mzg1OzU0MA",
    "primary": "https://resizing.flixster.com/NrU5KXJq_yi0dD-tWlWaBCZc1Uc=/130x0/v1.bTsxMzY0NzM2NztqOzE4ODc3OzEyMDA7Mzg1OzU0MA"
  },
  "actors": ["Edi Gathegi", "Melora Hardin", "Angela Sarafyan"]
}, {
  "id": 771555275,
  "title": "Willy's Wonderland",
  "url": "/m/willys_wonderland",
  "tomatoIcon": "fresh",
  "tomatoScore": 61,
  "theaterReleaseDate": "Feb 12",
  "dvdReleaseDate": "Apr 13",
  "mpaaRating": "NR",
  "synopsis": "<em>Willy's Wonderland</em> isn't quite as much fun as its premise would suggest -- but it's still got Nicolas Cage beating the hell out of bloodthirsty animatronics, which is nice.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 28 min.",
  "posters": {
    "thumborId": "v1.bTsxMzcwNTk5MTtqOzE4ODc4OzEyMDA7MjAwMDsyOTQ1",
    "primary": "https://resizing.flixster.com/x3xZ5qCifXoUOdUBVmOdI0SDysI=/130x0/v1.bTsxMzcwNTk5MTtqOzE4ODc4OzEyMDA7MjAwMDsyOTQ1"
  },
  "actors": ["Nicolas Cage", "Emily Tosta", "Beth Grant"]
}, {
  "id": 771555381,
  "title": "Donna",
  "url": "/m/donna",
  "tomatoIcon": "fresh",
  "tomatoScore": 86,
  "theaterReleaseDate": "Feb 23",
  "dvdReleaseDate": "Feb 23",
  "mpaaRating": "R",
  "synopsis": "A young mother's \"American Dream\" turns into a living nightmare, until she finds the inner strength to listen to a voice she hadn't heard before: her own.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 50 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY3OTE5NjtqOzE4ODc4OzEyMDA7MTAwMDsxNTAw",
    "primary": "https://resizing.flixster.com/j2WRNrlCjOdOEKegf6LPu6KAkTE=/130x0/v1.bTsxMzY3OTE5NjtqOzE4ODc4OzEyMDA7MTAwMDsxNTAw"
  },
  "actors": ["James Aronson", "Kate Amundsen", "Israel Acevedo"]
}, {
  "id": 771555464,
  "title": "Son of the South",
  "url": "/m/son_of_the_south",
  "tomatoIcon": "fresh",
  "tomatoScore": 61,
  "theaterReleaseDate": "Feb 5",
  "dvdReleaseDate": "Feb 5",
  "mpaaRating": "NR",
  "synopsis": "In this true story set during the sixties Civil Rights Movement, a Klansman's grandson is forced to face the rampant racism of his own culture. Defying his family and white Southern norms, he embraces the fight against social injustice, repression and violence to change the world he was born into.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 45 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY3OTY1NTtqOzE4ODc4OzEyMDA7Mjc2NDs0MDk2",
    "primary": "https://resizing.flixster.com/iQCynnRmW2sorzj1t5xFCQeQ--s=/130x0/v1.bTsxMzY3OTY1NTtqOzE4ODc4OzEyMDA7Mjc2NDs0MDk2"
  },
  "actors": ["Lucas Till", "Lex Scott Davis", "Lucy Hale"]
}, {
  "id": 771561444,
  "title": "Donny's Bar Mitzvah",
  "url": "/m/donnys_bar_mitzvah",
  "tomatoIcon": "rotten",
  "tomatoScore": 43,
  "theaterReleaseDate": "Mar 23",
  "dvdReleaseDate": "Mar 23",
  "mpaaRating": "NR",
  "synopsis": "Sex, drugs, and a dysfunctional family create the perfect storm for Donny Drucker's Bar Mitzvah. We are catapulted back in time to the year 1998 as we follow a colorful array of characters from the perspective of a hired videographer. Donny tries to enjoy the evening while juggling his crazy mother, his teenage angst, and his new girlfriend, Handjob Hannah. Meanwhile Gerald, the MC of the party, is on a mission to stop the notorious party pooper Val Dho who is attempting to ruin the party. All that, plus: scandalous affairs, love triangles, spin the bottle, and a man with ranch dressing for hands. But as per tradition, all must be resolved before the big song at the end of the night.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 19 min.",
  "posters": {
    "thumborId": "v1.bTsxMzcyODEwNztqOzE4ODc4OzEyMDA7MTI3NTsxODQy",
    "primary": "https://resizing.flixster.com/D2c8_zGYUJjfDtG5H_Y67RmZ6C8=/130x0/v1.bTsxMzcyODEwNztqOzE4ODc4OzEyMDA7MTI3NTsxODQy"
  },
  "actors": ["Steele Stebbins", "John DeLuca", "Tricia O'Kelley"]
}, {
  "id": 771561557,
  "title": "Long Live Rock... Celebrate the Chaos",
  "url": "/m/long_live_rock_celebrate_the_chaos",
  "tomatoIcon": "rotten",
  "tomatoScore": 33,
  "theaterReleaseDate": "Mar 12",
  "dvdReleaseDate": "Mar 12",
  "mpaaRating": "NR",
  "synopsis": "Though often maligned and misunderstood, rock 'n' roll is deeply loved, adored, and treasured by many across different peoples and cultures. Long Live Rock: Celebrate The Chaos is a documentary film that explores this genre and the relationship it forges with its fans through intimate interviews with its biggest stars-Metallica, Slipknot, Greta Van Fleet, Guns N' Roses, Korn, Halestorm, and many others. Directed by Jonathan McHugh.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 23 min.",
  "posters": {
    "thumborId": "v1.bTsxMzczNzcwMztqOzE4ODc5OzEyMDA7MTA4MDA7MTYwOTA",
    "primary": "https://resizing.flixster.com/opqASsBfL1iL5nbQ-0oL4OwRMD0=/130x0/v1.bTsxMzczNzcwMztqOzE4ODc5OzEyMDA7MTA4MDA7MTYwOTA"
  },
  "actors": ["Zoltan Bathory", "David Benveniste", "Andy Biersack"]
}, {
  "id": 771506846,
  "title": "The Emoji Story (Picture Character)",
  "url": "/m/the_emoji_story",
  "tomatoIcon": "fresh",
  "tomatoScore": 91,
  "dvdReleaseDate": "Dec 22",
  "mpaaRating": "NR",
  "synopsis": "The rapid rise of emoji (Japanese for \"picture character\") is a global phenomenon without precedent. Their widespread use and ability to convey complex messages have not only cemented emoji's place as an emerging digital language, but prompted difficult questions about the creation of a language and digital communication's fraught ties to identity and inclusion. In PICTURE CHARACTER, directors Martha Shane and Ian Cheney lead viewers on a deep dive into the ever evolving world of picture characters, from their humble beginnings in Japan to mobile keyboards the world over, and shed fresh light on the private consortium that approves new emoji offerings and the individuals fighting to make the language more representative of its billions of users.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 21 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY0MzkzMTtqOzE4ODc3OzEyMDA7NDA4ODs2MDM4",
    "primary": "https://resizing.flixster.com/VCOKhCDZ0rxpGZeIgcCNPy-S5k0=/130x0/v1.bTsxMzY0MzkzMTtqOzE4ODc3OzEyMDA7NDA4ODs2MDM4"
  },
  "actors": []
}, {
  "id": 771506851,
  "title": "Promising Young Woman",
  "url": "/m/promising_young_woman",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 90,
  "theaterReleaseDate": "Dec 25",
  "dvdReleaseDate": "Jan 15",
  "mpaaRating": "NR",
  "synopsis": "A boldly provocative, timely thriller, <em>Promising Young Woman</em> is an auspicious feature debut for writer-director Emerald Fennell -- and a career highlight for Carey Mulligan.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 53 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU3OTI1MTtqOzE4ODc3OzEyMDA7MTA4MDsxNjAw",
    "primary": "https://resizing.flixster.com/WWaDMd9a5Veffv2nSfOp7XPalv8=/130x0/v1.bTsxMzU3OTI1MTtqOzE4ODc3OzEyMDA7MTA4MDsxNjAw"
  },
  "actors": ["Carey Mulligan", "Bo Burnham", "Alison Brie"]
}, {
  "id": 771509140,
  "title": "Yellow Rose",
  "url": "/m/yellow_rose",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 87,
  "theaterReleaseDate": "Oct 9",
  "dvdReleaseDate": "Jan 5",
  "mpaaRating": "PG13",
  "synopsis": "A coming-of-age story with a timely twist, <em>Yellow Rose</em> offers a fresh -- and sweetly rewarding -- perspective on the immigrant experience.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 34 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU0OTExNTtqOzE4ODc2OzEyMDA7NzkyNTsxMTc2MQ",
    "primary": "https://resizing.flixster.com/bdwL2bodop22XiUELzBB3GXVRuQ=/130x0/v1.bTsxMzU0OTExNTtqOzE4ODc2OzEyMDA7NzkyNTsxMTc2MQ"
  },
  "actors": ["Lea Salonga", "Eva Noblezada", "Gustavo Gomez"]
}, {
  "id": 771512303,
  "title": "Soul",
  "url": "/m/soul_2020",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 95,
  "theaterReleaseDate": "Nov 20",
  "dvdReleaseDate": "Dec 25",
  "mpaaRating": "NR",
  "synopsis": "A film as beautiful to contemplate as it is to behold, <em>Soul</em> proves Pixar's power to deliver outstanding all-ages entertainment remains undimmed.",
  "synopsisType": "consensus",
  "posters": {
    "thumborId": "v1.bTsxMzU3NzI4NTtqOzE4ODc3OzEyMDA7MTYxNTsyMDE5",
    "primary": "https://resizing.flixster.com/RfmZ-jusvodSpdzF1scnNoChuNE=/130x0/v1.bTsxMzU3NzI4NTtqOzE4ODc3OzEyMDA7MTYxNTsyMDE5"
  },
  "actors": ["Jamie Foxx", "Daveed Diggs", "John Ratzenberger"]
}, {
  "id": 771512695,
  "title": "Sing Me A Song",
  "url": "/m/sing_me_a_song",
  "tomatoIcon": "fresh",
  "tomatoScore": 89,
  "theaterReleaseDate": "Jan 21",
  "dvdReleaseDate": "Jan 1",
  "mpaaRating": "NR",
  "synopsis": "Sing Me a Song, the new feature from acclaimed documentary filmmaker Thomas Balmès (Babies, Happiness), follows Peyangki, a young monk living in a rural monastery in Bhutan. When TV and the Internet eventually come to the remote country, Peyangki is lured by the power of smartphones, which now compete with the structured daily rituals of monastery life. Unexpected and profound, Peyangki's journey challenges us to reassess our own perceptions of relatedness and self-worth in an age of unparalleled connectivity.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 39 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYyMjkzMjtwOzE4ODc3OzEyMDA7MTUwMDsyMjIy",
    "primary": "https://resizing.flixster.com/nifLj_QOkqYAvEmA755A63hk4KM=/130x0/v1.bTsxMzYyMjkzMjtwOzE4ODc3OzEyMDA7MTUwMDsyMjIy"
  },
  "actors": []
}, {
  "id": 771514307,
  "title": "Once Upon a River",
  "url": "/m/once_upon_a_river",
  "tomatoIcon": "fresh",
  "tomatoScore": 69,
  "theaterReleaseDate": "Oct 2",
  "dvdReleaseDate": "Jan 12",
  "mpaaRating": "NR",
  "synopsis": "Thinly characterized but beautifully filmed, <em>Once Upon a River</em> is a coming-of-age story that drifts on gently meditative currents.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 32 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU2MTc0ODtqOzE4ODc2OzEyMDA7MTA4MDsxNjAw",
    "primary": "https://resizing.flixster.com/fGuQTXFIkci09n3wEMJBXbYIEpc=/130x0/v1.bTsxMzU2MTc0ODtqOzE4ODc2OzEyMDA7MTA4MDsxNjAw"
  },
  "actors": ["Kenadi DelaCerna", "John Ashton", "Tatanka Means"]
}, {
  "id": 771517068,
  "title": "Lupin III: The First",
  "url": "/m/lupin_iii_the_first",
  "tomatoIcon": "fresh",
  "tomatoScore": 95,
  "theaterReleaseDate": "Oct 23",
  "dvdReleaseDate": "Dec 15",
  "mpaaRating": "NR",
  "synopsis": "Featuring visually striking CGI animation of its famed characters, <em>Lupin III:The First</em> is a charming and old-fashioned adventure romp.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 33 min.",
  "posters": {
    "thumborId": "v1.bTsxMzUwNDgxMTtqOzE4ODc2OzEyMDA7NTUwOzgwNA",
    "primary": "https://resizing.flixster.com/whECyMSM5OgBsvrQYtnuaHNelfg=/130x0/v1.bTsxMzUwNDgxMTtqOzE4ODc2OzEyMDA7NTUwOzgwNA"
  },
  "actors": ["Daisuke Namikawa", "Kanichi Kurita", "Kiyoshi Kobayashi"]
}, {
  "id": 771517399,
  "title": "Assassins",
  "url": "/m/assassins_2020",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 98,
  "theaterReleaseDate": "Dec 11",
  "dvdReleaseDate": "Jan 15",
  "mpaaRating": "NR",
  "synopsis": "A deft and illuminating journalistic investigation, <em>Assassins</em> depicts the mechanics of North Korean politics to a chilling effect.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 44 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYxMjAwNjtqOzE4ODc3OzEyMDA7NDAwMDs1ODU1",
    "primary": "https://resizing.flixster.com/9x4TzaEoxSVWJFAr1825BpcpbMY=/130x0/v1.bTsxMzYxMjAwNjtqOzE4ODc3OzEyMDA7NDAwMDs1ODU1"
  },
  "actors": ["Siti Aisyah", "Hadi Azmi", "Anna Fifield"]
}, {
  "id": 771518121,
  "title": "Breaking Surface",
  "url": "/m/breaking_surface",
  "tomatoIcon": "fresh",
  "tomatoScore": 100,
  "theaterReleaseDate": "Dec 9",
  "dvdReleaseDate": "Dec 15",
  "mpaaRating": "NR",
  "synopsis": "Claustrofobico thriller 'in apnea' scritto e diretto da Joachim Heden. Due sorelle si immergono nelle acque di uno sperduto fiordo norvegese, ma l'avventura diventa una disperata lotta per la vita quando una frana intrappola una delle due donne nei bui e minacciosi fondali.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 25 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYxMDY4ODtqOzE4ODc3OzEyMDA7MzAwMDs0Mjc1",
    "primary": "https://resizing.flixster.com/TGAQWgcZj77A4lDbdbQv7opGwqI=/130x0/v1.bTsxMzYxMDY4ODtqOzE4ODc3OzEyMDA7MzAwMDs0Mjc1"
  },
  "actors": ["Moa Gammel", "Madeleine Martin", "Lena Hope"]
}, {
  "id": 771518744,
  "title": "Beasts Clawing at Straws",
  "url": "/m/beasts_clawing_at_straws",
  "tomatoIcon": "fresh",
  "tomatoScore": 94,
  "theaterReleaseDate": "Oct 21",
  "dvdReleaseDate": "Dec 15",
  "mpaaRating": "NR",
  "synopsis": "The destinies of hard-luck lowlifes slowly converge and come crashing down: Jung-man barely gets by working at a sauna and taking care of his sick mother until he finds a bag full of cash in the locker room; Tae-young is in trouble after his girlfriend runs away with the money he borrowed from a loan shark. Soon, a dead body mysteriously turns up; Mi-ran, caught between her husband's violence and a dead-end job as a bar hostess, she finds a young lover Jin-tae, who offers to kill her husband... And now their dog-eat-dog game starts.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 48 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU4NDcxNztqOzE4ODc3OzEyMDA7MTUzODsyMTcw",
    "primary": "https://resizing.flixster.com/K1vrdC2aA-kTILuC3fEQG6UTUAw=/130x0/v1.bTsxMzU4NDcxNztqOzE4ODc3OzEyMDA7MTUzODsyMTcw"
  },
  "actors": ["Jeon Do-yeon", "Jung Woo-sung", "Bae Seong-woo"]
}, {
  "id": 771519296,
  "title": "Love Sarah",
  "url": "/m/love_sarah",
  "tomatoIcon": "fresh",
  "tomatoScore": 62,
  "theaterReleaseDate": "Dec 18",
  "dvdReleaseDate": "Jan 15",
  "mpaaRating": "NR",
  "synopsis": "Determined to fulfill her late mother's dream of opening a bakery in charming Notting Hill, 19-year-old Clarissa enlists the help of her mother's best friend Isabella and her eccentric estranged grandmother Mimi. These three generations of women will need to overcome grief, doubts and differences to honor the memory of their beloved Sarah while embarking on a journey to establish a London bakery filled with love, hope and colorful pastries from all over the world.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 37 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY0NzM2MTtqOzE4ODc3OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/mdzTihzh57Ww_MZszayJC6tdems=/130x0/v1.bTsxMzY0NzM2MTtqOzE4ODc3OzEyMDA7MjAyNTszMDAw"
  },
  "actors": ["Shelley Conn", "Shannon Tarbet", "Celia Imrie"]
}, {
  "id": 771534664,
  "title": "My Prince Edward",
  "url": "/m/my_prince_edward",
  "tomatoIcon": "fresh",
  "tomatoScore": 100,
  "theaterReleaseDate": "Sep 4",
  "dvdReleaseDate": "Dec 15",
  "mpaaRating": "NR",
  "synopsis": "Serving countless newlyweds in Hong Kong's go-to one-stop-shop of cheap wedding supplies doesn't exempt Fong from social pressure to marry. Since nodding to Edward's proposal, she has been pushed beyond limits by unaffordable housing, archaic customs, and intrusive in-laws. What befuddles her further is the reappearance of Shuwei, a mainlander she's supposed to be divorced from out of a sham marriage that solved her coming-of-age hardship. Zeroing in on nuts and bolts of modern marriage, My Prince Edward pokes around fixated correlations of freedom with relationship status and geographic residence. Like a breath of fresh air out of the breathless space it navigates, the whimsical gem contributes a rare humane take on the worldly metropolis's divisions with humor and wisdom. As Fong redefines her best life and writer-director Norris Wong reclaims her home city's narrative from outsiders in this debut, their courage sparks thrills and will make you wholeheartedly cheer for a woman's independence and a new age in Hong Kong cinema.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 32 min.",
  "posters": {
    "thumborId": "v1.bTsxMzUxMjk0ODtqOzE4ODc2OzEyMDA7NDk2Mjs3MDE3",
    "primary": "https://resizing.flixster.com/GyXuPhfFXyDW55kpufmCshMHMlc=/130x0/v1.bTsxMzUxMjk0ODtqOzE4ODc2OzEyMDA7NDk2Mjs3MDE3"
  },
  "actors": ["Stephy Tang", "Jin Kaijie"]
}, {
  "id": 771534679,
  "title": "MLK/FBI",
  "url": "/m/mlk_fbi",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 99,
  "theaterReleaseDate": "Jan 15",
  "dvdReleaseDate": "Jan 15",
  "mpaaRating": "PG",
  "synopsis": "<em>MLK/FBI</em> presents a sobering overview of the American intelligence community's efforts to discredit and destroy a leader of the civil rights movement.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 44 min.",
  "posters": {
    "thumborId": "v1.bTsxMzY1OTgzMztqOzE4ODc4OzEyMDA7MTY5MzsyNTAw",
    "primary": "https://resizing.flixster.com/e_msEeLVx1P4AjN4B0ZbXxouHkQ=/130x0/v1.bTsxMzY1OTgzMztqOzE4ODc4OzEyMDA7MTY5MzsyNTAw"
  },
  "actors": ["Martin Luther King Jr.", "James B. Comey", "Beverly Gage"]
}, {
  "id": 771534766,
  "title": "Shadow in the Cloud",
  "url": "/m/shadow_in_the_cloud",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 77,
  "theaterReleaseDate": "Jan 1",
  "dvdReleaseDate": "Jan 1",
  "mpaaRating": "R",
  "synopsis": "Part creature feature, part war movie, and part social commentary, <em>Shadow in the Cloud</em> doesn't always blend its ingredients evenly -- but it's frequently pulpy fun.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 23 min.",
  "posters": {
    "thumborId": "v1.bTsxMzc3NTM1NjtqOzE4ODc5OzEyMDA7Mjc2NDs0MDk2",
    "primary": "https://resizing.flixster.com/4T7cYu7UIdgGBDvZIW8iyEegnSA=/130x0/v1.bTsxMzc3NTM1NjtqOzE4ODc5OzEyMDA7Mjc2NDs0MDk2"
  },
  "actors": ["Chloë Grace Moretz ", "Nick Robinson", "Beulah Koale"]
}, {
  "id": 771535075,
  "title": "I Am Lisa",
  "url": "/m/i_am_lisa",
  "tomatoIcon": "fresh",
  "tomatoScore": 90,
  "theaterReleaseDate": "Oct 9",
  "dvdReleaseDate": "Jan 5",
  "mpaaRating": "R",
  "synopsis": "In an isolated small community, a mentally-unhinged yet charismatic sheriff (Manon Halliburton) succumbs to her violent urges, coercing her subordinates to assist her in the brutal treatment of a young woman named Lisa (Kristen Vaganos), whom they abandon deep in the forest, inches from death. However, Lisa receives an opportunity for revenge when she endures a bite from a werewolf, acquiring new, supernatural powers that renew her strength and sense of vengeance. Directed by Patrick Rea, co-starring Jennifer Seward, Chris Bylsma, and Carmen Anello.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 32 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYyNTE4MztwOzE4ODc3OzEyMDA7NTc2Ozg2NA",
    "primary": "https://resizing.flixster.com/p-MM-wu6tWrPu1q6OQ1qqVIqtLc=/130x0/v1.bTsxMzYyNTE4MztwOzE4ODc3OzEyMDA7NTc2Ozg2NA"
  },
  "actors": ["Kristen Vaganos", "Jennifer Seward", "Manon Halliburton"]
}, {
  "id": 771535151,
  "title": "Shortcut",
  "url": "/m/shortcut_2020",
  "tomatoIcon": "rotten",
  "tomatoScore": 59,
  "theaterReleaseDate": "Sep 25",
  "dvdReleaseDate": "Dec 22",
  "mpaaRating": "R",
  "synopsis": "This road trip horror outing may take one <em>Shortcut</em> too many to count as a truly satisfying journey, but refreshing brevity and a show-don't-tell approach smooth the ride.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 20 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU0MDY5OTtqOzE4ODc2OzEyMDA7NjgzOzEwMjQ",
    "primary": "https://resizing.flixster.com/CZuPw7PoZ0umsQZjV88FY8HJrPM=/130x0/v1.bTsxMzU0MDY5OTtqOzE4ODc2OzEyMDA7NjgzOzEwMjQ"
  },
  "actors": ["Jack Kane", "Zak Sutcliffe", "Andrei Claude"]
}, {
  "id": 771535529,
  "title": "Girl",
  "url": "/m/girl_2020",
  "tomatoIcon": "rotten",
  "tomatoScore": 59,
  "theaterReleaseDate": "Sep 25",
  "dvdReleaseDate": "Jan 5",
  "mpaaRating": "NR",
  "synopsis": "Impressive work from Bella Thorne in the title role notwithstanding, <em>Girl</em> struggles to differentiate itself from other female-fronted revenge thrillers.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 32 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYxMjAwMztqOzE4ODc3OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/l5lV-0eW9l9--phD7INNwuIADbg=/130x0/v1.bTsxMzYxMjAwMztqOzE4ODc3OzEyMDA7MjAyNTszMDAw"
  },
  "actors": ["Bella Thorne", "Mickey Rourke", "Chad Faust"]
}, {
  "id": 771547069,
  "title": "Skylines",
  "url": "/m/skylines",
  "tomatoIcon": "rotten",
  "tomatoScore": 56,
  "theaterReleaseDate": "Dec 18",
  "dvdReleaseDate": "Dec 18",
  "mpaaRating": "NR",
  "posters": {
    "thumborId": "v1.bTsxMzY0MzUzMztqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2",
    "primary": "https://resizing.flixster.com/DzdYOLUlxgmlfgIFhUSVgK42Dqg=/130x0/v1.bTsxMzY0MzUzMztqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2"
  },
  "actors": []
}, {
  "id": 771554252,
  "title": "Hunter Hunter",
  "url": "/m/hunter_hunter",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 94,
  "theaterReleaseDate": "Dec 18",
  "dvdReleaseDate": "Dec 18",
  "mpaaRating": "NR",
  "synopsis": "Bloody and brutal, <em>Hunter Hunter</em> is a hard-hitting survivalist thriller that ratchets its tension with precision.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 23 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYxMjAwMjtqOzE4ODc3OzEyMDA7ODEwMDsxMjAwMA",
    "primary": "https://resizing.flixster.com/CA--o7na4K53cblc3A4fQZ8AuZs=/130x0/v1.bTsxMzYxMjAwMjtqOzE4ODc3OzEyMDA7ODEwMDsxMjAwMA"
  },
  "actors": ["Camille Sullivan", "Summer H. Howell", "Devon Sawa"]
}, {
  "id": 771554590,
  "title": "Sister of the Groom",
  "url": "/m/sister_of_the_groom",
  "tomatoIcon": "rotten",
  "tomatoScore": 47,
  "theaterReleaseDate": "Dec 18",
  "dvdReleaseDate": "Dec 18",
  "mpaaRating": "R",
  "synopsis": "Unhappy with her brother's decision to marry a young French woman she doesn't like, Audrey decides to put an end to the new relationship over the course of a wedding weekend in the Hamptons.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 32 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYwNjQyOTtqOzE4ODc3OzEyMDA7MTk5ODsyNjY0",
    "primary": "https://resizing.flixster.com/arW307SruJoLyTM3K3Mf9f0M9Jg=/130x0/v1.bTsxMzYwNjQyOTtqOzE4ODc3OzEyMDA7MTk5ODsyNjY0"
  },
  "actors": ["Alicia Silverstone", "Tom Everett Scott", "Jake Hoffman"]
}, {
  "id": 771554697,
  "title": "Max Cloud",
  "url": "/m/max_cloud",
  "tomatoIcon": "rotten",
  "tomatoScore": 59,
  "dvdReleaseDate": "Dec 18",
  "mpaaRating": "NR",
  "runtime": "1 hr. 28 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYxMDY4MztqOzE4ODc3OzEyMDA7NTEyOzc1OQ",
    "primary": "https://resizing.flixster.com/xQNUzMNYZKbOWaKcZ2hM001gpWQ=/130x0/v1.bTsxMzYxMDY4MztqOzE4ODc3OzEyMDA7NTEyOzc1OQ"
  },
  "actors": ["Scott Adkins", "Tommy Flanagan", "Lashana Lynch"]
}, {
  "id": 771554700,
  "title": "Breach",
  "url": "/m/breach_2020",
  "tomatoIcon": "rotten",
  "tomatoScore": 20,
  "theaterReleaseDate": "Dec 18",
  "dvdReleaseDate": "Dec 18",
  "mpaaRating": "R",
  "synopsis": "A mechanic aboard an aircraft to New Earth must try to outsmart an evil genius intent on using his spaceship as a weapon.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 32 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYxMDY4OTtqOzE4ODc3OzEyMDA7MjAwMDszMDAw",
    "primary": "https://resizing.flixster.com/8JxQPHHWcJ5I6b4p23gWq6EL1io=/130x0/v1.bTsxMzYxMDY4OTtqOzE4ODc3OzEyMDA7MjAwMDszMDAw"
  },
  "actors": ["Bruce Willis", "Callan Mulvey", "Cody Kearsley"]
}, {
  "id": 771554845,
  "title": "Don't Tell a Soul",
  "url": "/m/dont_tell_a_soul",
  "tomatoIcon": "fresh",
  "tomatoScore": 71,
  "theaterReleaseDate": "Jan 15",
  "dvdReleaseDate": "Jan 15",
  "mpaaRating": "NR",
  "synopsis": "While stealing money to help their sick mother (Mena Suvari), teen brothers Matt and Joey (Fionn Whitehead and Jack Dylan Grazer) are surprised by Hamby (Primetime Emmy (R) Award nominee Rainn Wilson), a security officer who gives chase and is then trapped in a well. Over the next few days, Joey and Hamby forge an uneasy relationship. Hamby tells Joey he'll keep quiet if Joey sets him free. But Hamby holds another secret, one that will threaten Joey and his family, in this twist-filled, cat-and-mouse thriller.",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzYyMjkzMztqOzE4ODc3OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/8SBesif9m08bqkqNtyX04_fzXdY=/130x0/v1.bTsxMzYyMjkzMztqOzE4ODc3OzEyMDA7MjAyNTszMDAw"
  },
  "actors": ["Jack Dylan Grazer", "Fionn Whitehead", "Mena Suvari"]
}, {
  "id": 771554865,
  "title": "Redemption Day",
  "url": "/m/redemption_day",
  "tomatoIcon": "rotten",
  "tomatoScore": 14,
  "theaterReleaseDate": "Jan 8",
  "dvdReleaseDate": "Jan 12",
  "mpaaRating": "R",
  "synopsis": "Having just returned home, decorated U.S. Marine Captain Brad Paxton's (Gary Dourdan) wife, Kate, is kidnapped by a terrorist group while working in Morocco. He is forced back into action for a daring and deadly operation to save the woman he loves.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 39 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYyMzM4OTtqOzE4ODc3OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/3DGb1ziqndxbil7tI6RNbWHaGag=/130x0/v1.bTsxMzYyMzM4OTtqOzE4ODc3OzEyMDA7MjAyNTszMDAw"
  },
  "actors": ["Andy Garcia", "Ernie Hudson", "Martin Donovan"]
}, {
  "id": 771554931,
  "title": "Paint",
  "url": "/m/paint",
  "tomatoIcon": "fresh",
  "tomatoScore": 92,
  "dvdReleaseDate": "Dec 15",
  "mpaaRating": "NR",
  "synopsis": "Three art school friends begin their careers in the bizarre NYC art world, while trying to discover themselves at the same time. Dan Pierson sets out to make himself darker by convincing his mother to pose nude for a series of paintings. Kelsey Fricke blackmails an art dealer into helping her start her career and ends up falling in love with a handsome buyer. But is he interested in her, or her art? Quinn Donahue is an old-school bohemian spirit who struggles in this new world of responsibility and ethics. The drama all takes place under the shadow of their friend Austin Gamby, who made it big right out of art school. They quickly learn that the life of an artist today isn't the romantic idea they believed it to be, but they must deal with it if they ever want to be successful. Veteran indie filmmaker Michael Walker takes us on a darkly comedic journey into the underbelly of the art world where friendships are tested and romances may not be what they seem.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 35 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYyNTE4ODtqOzE4ODc3OzEyMDA7MzM4NTs1MDAw",
    "primary": "https://resizing.flixster.com/JxiLfZKVAK0rSZT8URnJt4mZtjk=/130x0/v1.bTsxMzYyNTE4ODtqOzE4ODc3OzEyMDA7MzM4NTs1MDAw"
  },
  "actors": ["Josh Caras", "Olivia Luccardi", "Paul Cooper"]
}, {
  "id": 771554968,
  "title": "Modern Persuasion",
  "url": "/m/modern_persuasion",
  "tomatoIcon": "rotten",
  "tomatoScore": 44,
  "theaterReleaseDate": "Dec 11",
  "dvdReleaseDate": "Dec 18",
  "mpaaRating": "NR",
  "synopsis": "A modern telling of Jane Austen's \"Persuasion.\" Wren Cosgrove is a happy, single, and self-confessed workaholic who, after rising to the top of the corporate ladder, finds herself coming home every night to her cat. When her firm is hired by Owen Jasper, \"the man who got away,\" long-lost feelings are stirred, giving Wren a second chance at true love.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 26 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYyNzgzNDtqOzE4ODc3OzEyMDA7MjAyNjszMDAw",
    "primary": "https://resizing.flixster.com/V3-nKa0G_Jny4qOWN6Dq4OAx33U=/130x0/v1.bTsxMzYyNzgzNDtqOzE4ODc3OzEyMDA7MjAyNjszMDAw"
  },
  "actors": ["Alicia Witt", "Mark Moses", "Lulu"]
}, {
  "id": 771555002,
  "title": "HAM: A Musical Memoir",
  "url": "/m/ham_a_musical_memoir",
  "tomatoIcon": "fresh",
  "tomatoScore": 100,
  "theaterReleaseDate": "Dec 3",
  "dvdReleaseDate": "Jan 7",
  "mpaaRating": "NR",
  "synopsis": "HAM: A Musical Memoir is the comic and poignant true story of Sam Harris's life growing up in Oklahoma's Bible Belt during the 60s and 70s as a sensitive and prodigiously talented kid who dreams of playing Helen Keller at age 5, wishes he was Jewish at 10, finds his voice in the black church at 15, and falls in love with a boy \"who looks just like Cary Grant,\" followed by a depression that leads to a suicide attempt. Sam flees to Los Angeles where he sings at every dump and dive in town, finally ending up on a new TV show called Star Search (precursor to American Idol) winning the hearts of America. Fame ensues -- Broadway, television, albums, Carnegie Hall. But for Sam, less is... less. And more is never enough. After the highs and lows of a life in show business, Sam is finally forced to confront the merciless question: what is enough?",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzYzMjEzNjtqOzE4ODc3OzEyMDA7ODYzOzEyODA",
    "primary": "https://resizing.flixster.com/VH_IwRCafDS6SiFy6HWnwnSBvWc=/130x0/v1.bTsxMzYzMjEzNjtqOzE4ODc3OzEyMDA7ODYzOzEyODA"
  },
  "actors": ["Sam Harris", "Todd Schroeder"]
}, {
  "id": 771555034,
  "title": "The One You Feed",
  "url": "/m/the_one_you_feed",
  "tomatoIcon": "rotten",
  "tomatoScore": 33,
  "dvdReleaseDate": "Dec 29",
  "mpaaRating": "NR",
  "synopsis": "A Stranger finds himself injured and being cared for, by a Man and Woman, who are not your everyday people, in a secluded home that time has somehow forgotten.",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzYzNTkyMDtqOzE4ODc3OzEyMDA7MjU1MTszNTc5",
    "primary": "https://resizing.flixster.com/rdEIHhNxkuF9RNKVHgPZN017vEc=/130x0/v1.bTsxMzYzNTkyMDtqOzE4ODc3OzEyMDA7MjU1MTszNTc5"
  },
  "actors": []
}, {
  "id": 771555041,
  "title": "Stars Fell on Alabama",
  "url": "/m/stars_fell_on_alabama",
  "tomatoIcon": "rotten",
  "tomatoScore": 54,
  "dvdReleaseDate": "Jan 8",
  "mpaaRating": "NR",
  "posters": {
    "thumborId": "v1.bTsxMzYzNTkyMztqOzE4ODc3OzEyMDA7MjAwMDszMDAw",
    "primary": "https://resizing.flixster.com/GT6EqUyVPPZNnl8tnpmMjGiuhNg=/130x0/v1.bTsxMzYzNTkyMztqOzE4ODc3OzEyMDA7MjAwMDszMDAw"
  },
  "actors": ["James Maslow", "Ciara Hanna"]
}, {
  "id": 771555056,
  "title": "Gun and a Hotel Bible",
  "url": "/m/gun_and_a_hotel_bible",
  "tomatoIcon": "rotten",
  "tomatoScore": 57,
  "dvdReleaseDate": "Jan 5",
  "mpaaRating": "NR",
  "synopsis": "Based on an award-winning play, GUN AND A HOTEL BIBLE tells the story of Pete (Bradley Gosnell), a desperate man on the verge of a violent act and his encounter with Gideon (Daniel Floren), a personified hotel bible. As Pete and Gideon spar over ideas about morality, the Bible and God, they are forced to deal with their inadequacies. With the clock ticking, can Gideon sway Pete from pulling the trigger?",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzY5OTg3NTtqOzE4ODc4OzEyMDA7MjAwMDszMDAw",
    "primary": "https://resizing.flixster.com/LPwAi0Sryt-KCDNLS12vFqia5yc=/130x0/v1.bTsxMzY5OTg3NTtqOzE4ODc4OzEyMDA7MjAwMDszMDAw"
  },
  "actors": ["Bradley Gosnell", "Daniel Floren", "Mia Marcon"]
}, {
  "id": 771555074,
  "title": "If Not Now, When?",
  "url": "/m/if_not_now_when_2021",
  "tomatoIcon": "rotten",
  "tomatoScore": 53,
  "theaterReleaseDate": "Jan 8",
  "dvdReleaseDate": "Jan 8",
  "mpaaRating": "NR",
  "synopsis": "Four friends, who met in high school and are bonded by an event, are suddenly forced back together when one of them suffers a crisis. It's a story of love, forgiveness and the incredible bond between women.",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzY0MDUzOTtqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2",
    "primary": "https://resizing.flixster.com/c1AAx-QLNKoadN04rCaTdA4xBgA=/130x0/v1.bTsxMzY0MDUzOTtqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2"
  },
  "actors": ["Meagan Holder", "Mekia Cox", "Tamara Bass"]
}, {
  "id": 771555139,
  "title": "Dr. Bird's Advice for Sad Poets",
  "url": "/m/dr_birds_advice_for_sad_poets",
  "tomatoIcon": "fresh",
  "tomatoScore": 80,
  "dvdReleaseDate": "Jan 12",
  "mpaaRating": "NR",
  "synopsis": "Sixteen-year-old James Whitman played by Lucas Jade Zumann (20th Century Women, Anne With An 'E'), struggles to overcome anxiety and depression by seeking advice from Dr. Bird voiced by Tom Wilkinson (The Grand Budapest Hotel). In his magical realism inspired world, James goes on a whimsical, but emotionally charged search to solve the mystery of the disappearance of his sister, after an altercation with their parents depicted by Lisa Edelstein (Girlfriends' Guide to Divorce, The Kominsky Method), and Jason Isaacs (Harry Potter, Star Trek: Discovery). While James (Zumann) struggles to connect with his parents, he deals with the intense social anxiety of high school life while navigating first love with Sophie, portrayed by Taylor Russell (Lost in Space, Waves) -- a precocious girl from school who has her own agenda and a boyfriend Martin that hasn't quite learned to let go of her, brought to life by Chase Stokes (Outer Banks). Our two lovestruck teens set out on a quest to find Jorie, finding themselves in what appears to be a cult of sorts, led by David Arquette (Scream series) as Xavier, and into the under belly of NYC nightlife that makes James question every relationship in his life.",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzY0MzUzOTtqOzE4ODc3OzEyMDA7MzQ1Njs1MTg0",
    "primary": "https://resizing.flixster.com/delmO_Wptnp6-rrj0Py45QlxZ0c=/130x0/v1.bTsxMzY0MzUzOTtqOzE4ODc3OzEyMDA7MzQ1Njs1MTg0"
  },
  "actors": ["Lucas Jade Zumann", "Taylor Russell", "Jason Isaacs"]
}, {
  "id": 771503063,
  "title": "Koko-di Koko-da",
  "url": "/m/koko_di_koko_da",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 80,
  "theaterReleaseDate": "Nov 6",
  "dvdReleaseDate": "Dec 8",
  "mpaaRating": "NR",
  "synopsis": "Using an effectively creepy setting and a beguilingly evasive approach, <em>Koko-Di Koko-Da</em> takes a chilling look at the long tail of grief.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 26 min.",
  "posters": {
    "thumborId": "v1.bTsxMzM2NDU3NztqOzE4ODc0OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/9TYIwhe8dsgnMPKnM96hQoHDtJo=/130x0/v1.bTsxMzM2NDU3NztqOzE4ODc0OzEyMDA7MjAyNTszMDAw"
  },
  "actors": ["Ylva Gallon", "Leif Edlund", "Peter Belli"]
}, {
  "id": 771512515,
  "title": "Billie",
  "url": "/m/billie_2020",
  "tomatoIcon": "fresh",
  "tomatoScore": 97,
  "theaterReleaseDate": "Dec 4",
  "dvdReleaseDate": "Dec 4",
  "mpaaRating": "NR",
  "synopsis": "A rich and engaging portrait of the famed musician, <em>Billie</em> puts a spotlight on a story that goes beyond the conventional artist profile.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 36 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU1NDQyNztqOzE4ODc2OzEyMDA7ODE3NTsxMjA3NQ",
    "primary": "https://resizing.flixster.com/DNprrzM1J-BR5vVeiUdK0sHy5R4=/130x0/v1.bTsxMzU1NDQyNztqOzE4ODc2OzEyMDA7ODE3NTsxMjA3NQ"
  },
  "actors": ["Billie Holiday", "Charles Mingus", "Sarah Vaughan"]
}, {
  "id": 771513155,
  "title": "18 to Party",
  "url": "/m/18_to_party",
  "tomatoIcon": "rotten",
  "tomatoScore": 57,
  "theaterReleaseDate": "Nov 6",
  "dvdReleaseDate": "Dec 1",
  "mpaaRating": "NR",
  "synopsis": "It's 1984 and outside a small-town nightclub, a group of 8th graders gather, grappling with a spate of recent suicides, UFO sightings, their absentee parents, and each other. 18 TO PARTY spans a single evening in the lives of these kids, but manages to transport us fully to a time when waiting for something to happen felt just as significant as the thing itself. Gorgeously atmospheric, with a pulsating sense of anticipation that steadily builds, the film pulls us in to the fears, wounds, and desires of each character, ultimately revealing that hope may arrive from the last place we expect.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 20 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU2NTMyMztqOzE4ODc3OzEyMDA7ODUzOzEyODA",
    "primary": "https://resizing.flixster.com/3ypnn0ETgwv67mXp2g2ekelwd4Q=/130x0/v1.bTsxMzU2NTMyMztqOzE4ODc3OzEyMDA7ODUzOzEyODA"
  },
  "actors": ["Alivia Clark", "Oliver Gifford", "Nolan Lyons"]
}, {
  "id": 771514300,
  "title": "White Riot",
  "url": "/m/white_riot",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 100,
  "dvdReleaseDate": "Dec 8",
  "mpaaRating": "NR",
  "synopsis": "Raw and energetic like the music that inspired the 1970s political movement, <em>White Riot</em> offers invaluable insight into how music can change the world -- and how Rock Against Racism still resonates.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 20 min.",
  "posters": {
    "thumborId": "v1.bTsxMzczNjMwMjtqOzE4ODc4OzEyMDA7OTYwOzE0NDA",
    "primary": "https://resizing.flixster.com/jOGoEP-rH0udthJrARF5MugFuWY=/130x0/v1.bTsxMzczNjMwMjtqOzE4ODc4OzEyMDA7OTYwOzE0NDA"
  },
  "actors": ["Topper Headron", "Red Saunders", "Dennis Bovell"]
}, {
  "id": 771516063,
  "title": "The Planters",
  "url": "/m/the_planters",
  "tomatoIcon": "fresh",
  "tomatoScore": 95,
  "theaterReleaseDate": "Oct 9",
  "dvdReleaseDate": "Dec 8",
  "mpaaRating": "NR",
  "synopsis": "Brimming with whimsy and wonder, <em>The Planters</em> is a hilarious and unconventional look at the need for human connection.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 18 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU1NDQwOTtqOzE4ODc2OzEyMDA7NTAwMDs3NDA3",
    "primary": "https://resizing.flixster.com/CtWO07QEjdkTQXS1h1PMYy5cC_4=/130x0/v1.bTsxMzU1NDQwOTtqOzE4ODc2OzEyMDA7NTAwMDs3NDA3"
  },
  "actors": ["Alexandra Kotcheff", "Hannah Lederer-Alton", "Michael Gmur"]
}, {
  "id": 771517524,
  "title": "Luxor",
  "url": "/m/luxor",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 90,
  "theaterReleaseDate": "Dec 4",
  "dvdReleaseDate": "Dec 4",
  "mpaaRating": "NR",
  "synopsis": "Led by Andrea Riseborough's layered performance, <em>Luxor</em> empathetically surveys the crossroads between trauma and recovery.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 30 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU3MTY3MztqOzE4ODc3OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/mW4mwL1X7nPRh3Mt7J5b5tGfAx4=/130x0/v1.bTsxMzU3MTY3MztqOzE4ODc3OzEyMDA7MjAyNTszMDAw"
  },
  "actors": ["Andrea Riseborough", "Michael Landes", "Shirin Redha"]
}, {
  "id": 771517657,
  "title": "Wander Darkly",
  "url": "/m/wander_darkly",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 75,
  "theaterReleaseDate": "Dec 11",
  "dvdReleaseDate": "Dec 11",
  "mpaaRating": "R",
  "synopsis": "<em>Wander Darkly</em>'s risks don't always yield rewards, but strong work from Diego Luna and Sienna Miller helps this romance remain consistently alluring.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 37 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU5MTg3NjtqOzE4ODc3OzEyMDA7MjAyNjszMDAx",
    "primary": "https://resizing.flixster.com/WnMPTU4p64wu3x4ku44gOjbRvEc=/130x0/v1.bTsxMzU5MTg3NjtqOzE4ODc3OzEyMDA7MjAyNjszMDAx"
  },
  "actors": ["Beth Grant", "Tory Kittles", "Aimee Carrero"]
}, {
  "id": 771518334,
  "title": "Beast Mode",
  "url": "/m/beast_mode",
  "tomatoIcon": "fresh",
  "tomatoScore": 63,
  "dvdReleaseDate": "Dec 1",
  "mpaaRating": "NR",
  "synopsis": "The 80s throwback horror tells the story of a has-been Hollywood producer, who after accidentally killing his lead star, turns to an ancient herbal elixir, in the hope that it will save his career. He makes a dark deal that unleashes a band of bloodthirsty, shape-shifting, ferocious beasts on LA.",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzYwNjQxNjtqOzE4ODc3OzEyMDA7ODI1MDsxMjAwMA",
    "primary": "https://resizing.flixster.com/Lp7a6qAJK0oKGa_bkyaBBq2OzC0=/130x0/v1.bTsxMzYwNjQxNjtqOzE4ODc3OzEyMDA7ODI1MDsxMjAwMA"
  },
  "actors": ["C. Thomas Howell", "James Duval"]
}, {
  "id": 771518510,
  "title": "Black Bear",
  "url": "/m/black_bear",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 89,
  "theaterReleaseDate": "Dec 4",
  "dvdReleaseDate": "Dec 4",
  "mpaaRating": "R",
  "synopsis": "A fascinating look at the creative intricacies of show business, <em>Black Bear</em> is a provocative, mind-bending experience -- and finds Aubrey Plaza at the top of her game.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 44 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU4ODY4MztqOzE4ODc3OzEyMDA7NzA5OzEwMjQ",
    "primary": "https://resizing.flixster.com/y5BbIGc4mZi53qbhfr3nQ2J_mxY=/130x0/v1.bTsxMzU4ODY4MztqOzE4ODc3OzEyMDA7NzA5OzEwMjQ"
  },
  "actors": ["Aubrey Plaza", "Sarah Gadon", "Christopher Abbott"]
}, {
  "id": 771521061,
  "title": "Comfort Farms",
  "url": "/m/comfort_farms",
  "tomatoIcon": "fresh",
  "tomatoScore": 67,
  "dvdReleaseDate": "Dec 8",
  "mpaaRating": "NR",
  "synopsis": "Accompanied by an unlikely group of veterans, animal-loving butchers, farmers and chefs, a former combat army Ranger launches a new mission at Comfort Farms--a unique therapy farm meant to help those at high risk for suicide.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 17 min.",
  "posters": {
    "thumborId": "v1.bTsxMzM3NzI3MztqOzE4ODc0OzEyMDA7ODEwMDsxMjMwMA",
    "primary": "https://resizing.flixster.com/-Bd7rkq2Pl5NKY1zncISClY-mD4=/130x0/v1.bTsxMzM3NzI3MztqOzE4ODc0OzEyMDA7ODEwMDsxMjMwMA"
  },
  "actors": ["Jonithen Jackson", "Scott Kennedy"]
}, {
  "id": 771522220,
  "title": "Survival Skills",
  "url": "/m/survival_skills",
  "tomatoIcon": "fresh",
  "tomatoScore": 88,
  "theaterReleaseDate": "Nov 13",
  "dvdReleaseDate": "Dec 4",
  "mpaaRating": "NR",
  "synopsis": "Led by a strong starring performance from Vayu O'Donnell, <em>Survival Skills</em> takes a singularly strange -- but mostly satisfying -- look at law enforcement.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 28 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYwNjQyNTtqOzE4ODc3OzEyMDA7MTAwMDsxNDk1",
    "primary": "https://resizing.flixster.com/6Gml44G6yD_feeS1TWudh8c15_M=/130x0/v1.bTsxMzYwNjQyNTtqOzE4ODc3OzEyMDA7MTAwMDsxNDk1"
  },
  "actors": ["Stacey Keach", "Vayu O'Donnell", "Ericka Kreutz"]
}, {
  "id": 771522480,
  "title": "Ammonite",
  "url": "/m/ammonite",
  "tomatoIcon": "fresh",
  "tomatoScore": 69,
  "theaterReleaseDate": "Nov 13",
  "dvdReleaseDate": "Dec 4",
  "mpaaRating": "NR",
  "synopsis": "The chemistry between Saoirse Ronan and a never-better Kate Winslet helps <em>Ammonite</em> transcend its period romance trappings.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 58 min.",
  "posters": {
    "thumborId": "v1.bTsxMzUzMjY4NjtqOzE4ODc2OzEyMDA7MjAwMDsyOTY3",
    "primary": "https://resizing.flixster.com/u6Sp40Ac_h0VJzVs5Yospax-lAo=/130x0/v1.bTsxMzUzMjY4NjtqOzE4ODc2OzEyMDA7MjAwMDsyOTY3"
  },
  "actors": ["Sarah White", "Liam Thomas"]
}, {
  "id": 771535090,
  "title": "Don't Click",
  "url": "/m/dont_click_2020",
  "tomatoIcon": "rotten",
  "tomatoScore": 40,
  "theaterReleaseDate": "Dec 11",
  "dvdReleaseDate": "Dec 11",
  "mpaaRating": "NR",
  "synopsis": "Twenty-one year old Josh (Valter Skarsgard) tries to convince his roommate/best friend, Zane (Mark Koufos), to join him at a party. Zane declines the invitation, claiming he has to study, but instead decides to surf the web for some new porn. A sexually graphic pop-up catches Zane's attention; he can't take his eyes off the screen... what kind of porn is this? He takes the bait--he clicks. Later that night, Josh comes back to an empty apartment. Zane's laptop is still open but there's no sign of Zane... something doesn't feel right. Zane's laptop screen starts flashing and that's the last thing Josh can remember as he groggily wakes up to find Zane in a dank, surreal cellar with no way out. Josh tries everything he can to save both his friend and himself from a dangerous entity that begins to take control of their bodies and minds, but his biggest challenge to escape may be himself.",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzYwMzAxOTtqOzE4ODc3OzEyMDA7MjAwMDszMDAw",
    "primary": "https://resizing.flixster.com/C4WiH4q8WZbfImPYLRBR7dLC5yw=/130x0/v1.bTsxMzYwMzAxOTtqOzE4ODc3OzEyMDA7MjAwMDszMDAw"
  },
  "actors": ["Valter Skarsgård", "Mark Koufos"]
}, {
  "id": 771535102,
  "title": "Minor Premise",
  "url": "/m/minor_premise",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 91,
  "theaterReleaseDate": "Dec 4",
  "dvdReleaseDate": "Dec 4",
  "mpaaRating": "NR",
  "synopsis": "<em>Minor Premise</em> offers major enjoyment for sci-fi fans in search of an intelligent, grounded entry in the genre.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 35 min.",
  "posters": {
    "thumborId": "v1.bTsxMzUzNzMyNDtqOzE4ODc2OzEyMDA7MTAwMDsxNDgx",
    "primary": "https://resizing.flixster.com/68B2mbRwSmO8blwfbA4Qp4mwNVc=/130x0/v1.bTsxMzUzNzMyNDtqOzE4ODc2OzEyMDA7MTAwMDsxNDgx"
  },
  "actors": ["Sathya Sridharan", "Paton Ashbrook", "Dana Ashbrook"]
}, {
  "id": 771535429,
  "title": "Crock of Gold: A Few Rounds with Shane MacGowan",
  "url": "/m/crock_of_gold_a_few_rounds_with_shane_macgowan",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 96,
  "theaterReleaseDate": "Dec 4",
  "dvdReleaseDate": "Dec 4",
  "mpaaRating": "NR",
  "synopsis": "A hearty cinematic toast with a bittersweet finish, <em>Crock of Gold: A Few Rounds with Shane MacGowan</em> pays suitably intoxicating tribute to its subject.",
  "synopsisType": "consensus",
  "runtime": "2 hr. 4 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU5ODM3MDtqOzE4ODc3OzEyMDA7MTY1OTsyNDU4",
    "primary": "https://resizing.flixster.com/GIB-whMu0s9wuYEz3gdtno3cwJk=/130x0/v1.bTsxMzU5ODM3MDtqOzE4ODc3OzEyMDA7MTY1OTsyNDU4"
  },
  "actors": ["Shane MacGowan", "Elsa Zylberstein", "Johnny Depp"]
}, {
  "id": 771535653,
  "title": "Archenemy",
  "url": "/m/archenemy",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 74,
  "theaterReleaseDate": "Dec 11",
  "dvdReleaseDate": "Dec 11",
  "mpaaRating": "NR",
  "synopsis": "<em>Archenemy</em> fails to follow through on some of its more interesting ideas, but Joe Manganiello's lead performance and the picture's infectious raw energy make for a fun action-adventure.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 30 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU3NTIwMztqOzE4ODc3OzEyMDA7MTA4MDsxNjAw",
    "primary": "https://resizing.flixster.com/g9vJCTOFuBaFLfOX37BIJrsYdAk=/130x0/v1.bTsxMzU3NTIwMztqOzE4ODc3OzEyMDA7MTA4MDsxNjAw"
  },
  "actors": ["Joe Manganiello", "Amy Seimetz", "Glenn Howerton"]
}, {
  "id": 771545671,
  "title": "Love, Weddings & Other Disasters",
  "url": "/m/love_weddings_and_other_disasters",
  "tomatoIcon": "rotten",
  "tomatoScore": 3,
  "theaterReleaseDate": "Dec 4",
  "dvdReleaseDate": "Dec 4",
  "mpaaRating": "NR",
  "synopsis": "A romantic comedy only in the loosest sense, <em>Love, Weddings & Other Disasters</em> offers a sobering reminder that even stars like Diane Keaton and Jeremy Irons occasionally do unpleasant things to pay the bills.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 30 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU5ODM3NztqOzE4ODc3OzEyMDA7MTM1MDsyMDAw",
    "primary": "https://resizing.flixster.com/Tu5jwNhcHYJEARPXdTXAAK4Lb-k=/130x0/v1.bTsxMzU5ODM3NztqOzE4ODc3OzEyMDA7MTM1MDsyMDAw"
  },
  "actors": ["Maggie Grace", "Diane Keaton", "Jeremy Irons"]
}, {
  "id": 771552254,
  "title": "What Lies Below",
  "url": "/m/what_lies_below_2020",
  "tomatoIcon": "rotten",
  "tomatoScore": 53,
  "dvdReleaseDate": "Dec 4",
  "mpaaRating": "NR",
  "posters": {
    "thumborId": "v1.bTsxMzYwNDYzMDtqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2",
    "primary": "https://resizing.flixster.com/zE2ttzxDY_ajx2k8keZbo7iS6-Y=/130x0/v1.bTsxMzYwNDYzMDtqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2"
  },
  "actors": ["Ema Horvath", "Trey Tucker", "Mena Suvari"]
}, {
  "id": 771553097,
  "title": "Knuckledust",
  "url": "/m/knuckledust",
  "tomatoIcon": "rotten",
  "tomatoScore": 57,
  "dvdReleaseDate": "Dec 8",
  "mpaaRating": "NR",
  "posters": {
    "thumborId": "v1.bTsxMzYyMjMxODtqOzE4ODc3OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/qltaM33C-TUhzHU6eRsQumVrOqc=/130x0/v1.bTsxMzYyMjMxODtqOzE4ODc3OzEyMDA7MjAyNTszMDAw"
  },
  "actors": []
}, {
  "id": 771554110,
  "title": "Smiley Face Killers",
  "url": "/m/smiley_face_killers",
  "tomatoIcon": "rotten",
  "tomatoScore": 44,
  "dvdReleaseDate": "Dec 8",
  "mpaaRating": "R",
  "posters": {
    "thumborId": "v1.bTsxMzYwNjQyNDtqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2",
    "primary": "https://resizing.flixster.com/WtqOLG1H6BRnzk4nBfRuhDbZN3o=/130x0/v1.bTsxMzYwNjQyNDtqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2"
  },
  "actors": []
}, {
  "id": 771554253,
  "title": "Dear Santa",
  "url": "/m/dear_santa_2020",
  "tomatoIcon": "fresh",
  "tomatoScore": 89,
  "theaterReleaseDate": "Dec 4",
  "dvdReleaseDate": "Dec 4",
  "mpaaRating": "NR",
  "synopsis": "The US Postal Service receives hundreds of thousands of letters for Santa from children and families all over the country every year. The agency, for over a hundred years now, has run Operation Santa, a project wherein they find these letters' Santa-individuals and organizations willing to make wishes come true. The documentary film Dear Santa provides an in-depth look at this tradition of giving through the eyes of different Operation Santa centers throughout America.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 24 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU5NjQyNjtqOzE4ODc3OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/aos62ehv1z2MBj2z5tOWKw6dhMY=/130x0/v1.bTsxMzU5NjQyNjtqOzE4ODc3OzEyMDA7MjAyNTszMDAw"
  },
  "actors": ["Damion DiGrazia", "Orlando Mendez", "Orlando Mendez"]
}, {
  "id": 771554429,
  "title": "Wild Mountain Thyme",
  "url": "/m/wild_mountain_thyme",
  "tomatoIcon": "rotten",
  "tomatoScore": 26,
  "theaterReleaseDate": "Dec 11",
  "dvdReleaseDate": "Dec 11",
  "mpaaRating": "PG13",
  "synopsis": "Fatally undermined by dodgy accents and a questionable story, <em>Wild Mountain Thyme</em> is a baffling misfire for a talented filmmaker and impressive cast.",
  "synopsisType": "consensus",
  "posters": {
    "thumborId": "v1.bTsxMzYxMDA0NDtqOzE4ODc3OzEyMDA7MjAwMDszMDAw",
    "primary": "https://resizing.flixster.com/dDffKIHkgjLTJz8Lihf3A9aCpKk=/130x0/v1.bTsxMzYxMDA0NDtqOzE4ODc3OzEyMDA7MjAwMDszMDAw"
  },
  "actors": ["Emily Blunt", "Jamie Dornan", "Jon Hamm"]
}, {
  "id": 771554457,
  "title": "Dune Drifter",
  "url": "/m/dune_drifter",
  "tomatoIcon": "fresh",
  "tomatoScore": 100,
  "dvdReleaseDate": "Dec 1",
  "mpaaRating": "NR",
  "runtime": "1 hr. 38 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU5NjQzMztqOzE4ODc3OzEyMDA7NjEyOzc5Mg",
    "primary": "https://resizing.flixster.com/xeMJfQklKAXFIGSTJzsme0PAxb4=/130x0/v1.bTsxMzU5NjQzMztqOzE4ODc3OzEyMDA7NjEyOzc5Mg"
  },
  "actors": ["Phoebe Sparrow", "Daisy Aitkens", "Simon Dwyer-Thomas"]
}, {
  "id": 771554471,
  "title": "Baby God",
  "url": "/m/baby_god",
  "tomatoIcon": "fresh",
  "tomatoScore": 79,
  "dvdReleaseDate": "Dec 2",
  "mpaaRating": "NR",
  "synopsis": "<em>Baby God</em> is unavoidably nauseating as it unearths a heinous legacy, but Hannah Olson's sensitive study of the victims gives this documentary a worthwhile poignancy.",
  "synopsisType": "consensus",
  "posters": {
    "thumborId": "v1.bTsxMzYxNTA5NztqOzE4ODc3OzEyMDA7ODEwOzEyMDA",
    "primary": "https://resizing.flixster.com/-cRzSoPzCZg-r7Dz086T00dvKRY=/130x0/v1.bTsxMzYxNTA5NztqOzE4ODc3OzEyMDA7ODEwOzEyMDA"
  },
  "actors": []
}, {
  "id": 771554479,
  "title": "King of Knives",
  "url": "/m/king_of_knives",
  "tomatoIcon": "fresh",
  "tomatoScore": 78,
  "dvdReleaseDate": "Dec 1",
  "mpaaRating": "NR",
  "posters": {
    "thumborId": "v1.bTsxMzU5ODM3MjtqOzE4ODc3OzEyMDA7MjAwMDszMDAw",
    "primary": "https://resizing.flixster.com/-xb3yhMJId1328NfbLpeOXeNWm4=/130x0/v1.bTsxMzU5ODM3MjtqOzE4ODc3OzEyMDA7MjAwMDszMDAw"
  },
  "actors": []
}, {
  "id": 771554521,
  "title": "Elyse",
  "url": "/m/elyse",
  "tomatoIcon": "rotten",
  "tomatoScore": 43,
  "theaterReleaseDate": "Dec 4",
  "dvdReleaseDate": "Dec 4",
  "mpaaRating": "NR",
  "synopsis": "Elyse (Lisa Pepper) languidly meanders out of a cold, concrete, designer house mirroring a mausoleum, externalizing the spirit of her dead son, Cody. She returns home disoriented, unwilling to join the family dinner, misconceives the gathering as a threat to her private life, and is unwarrantedly infuriated with her egocentric mother, Goldie, and her devoted husband, Steven. In a psychotic blackout, Elyse commits vehicular manslaughter of her son and his nanny, Julia. Elyse isn't the only victim; her delusional thinking, narcissism, and violence annihilate her husband. Memory and hallucination intertwine to expose a history of trauma, revealing the truth: Elyse is Catatonic and institutionalized in a State Hospital. Elyse's recovery is reliant on the dissolution of her marriage, the restoration of the relationship with her mother, and the mutual absolution with the nanny's daughter, Carmen. It's the care from Dr. Lewis (Anthony Hopkins) and the unconditional love from her nurse, David, that promise Elyse a new life.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 35 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYwMjI2MztqOzE4ODc3OzEyMDA7MjAwMDszMDAw",
    "primary": "https://resizing.flixster.com/x-4rg93qFVxWFYMkCm_dT0lLqeo=/130x0/v1.bTsxMzYwMjI2MztqOzE4ODc3OzEyMDA7MjAwMDszMDAw"
  },
  "actors": ["Anthony Hopkins", "Lisa Pepper", "Aaron Tucker"]
}, {
  "id": 771554526,
  "title": "The Stand In",
  "url": "/m/the_stand_in_2020",
  "tomatoIcon": "rotten",
  "tomatoScore": 30,
  "theaterReleaseDate": "Dec 11",
  "dvdReleaseDate": "Dec 11",
  "mpaaRating": "R",
  "synopsis": "Despite impressively committed work from Drew Barrymore in a dual role, <em>The Stand In</em> struggles to find the humor in a premise with no shortage of comedic potential.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 41 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYwMjI2NTtqOzE4ODc3OzEyMDA7NjYwMDs5MjAw",
    "primary": "https://resizing.flixster.com/4s8-GcV25GA1w4JCoW1Sn9IDGPk=/130x0/v1.bTsxMzYwMjI2NTtqOzE4ODc3OzEyMDA7NjYwMDs5MjAw"
  },
  "actors": ["Drew Barrymore", "Michael Zegen", "T.J. Miller"]
}, {
  "id": 771554654,
  "title": "The Ventures: Stars on Guitars",
  "url": "/m/the_ventures_stars_on_guitars",
  "tomatoIcon": "fresh",
  "tomatoScore": 100,
  "dvdReleaseDate": "Dec 8",
  "mpaaRating": "NR",
  "synopsis": "The Ventures have been thrilling music lovers with songs like \"Wipe Out,\" \"Walk Don't Run,\" and \"Hawaii 5-0\" for over half a century. Started by Don Wilson and Bob Bogle in 1959, the band went from humble beginnings in Tacoma, WA., to worldwide acclaim, culminating as inductees into the prestigious Rock and Roll Hall of Fame as the #1 Bestselling Instrumental Rock and Roll Group of all time. Now, see the story of the world's most famous instrumental rock and roll band from those who know them the best: movie stars like Billy Bob Thornton, music legends such as Jimmy Page (Led Zeppelin), Jeff \"Skunk\" Baxter (Steely Dan), The Surfrajettes, Lalo Schifrin (Academy Award winning composer of The Mission Impossible theme), Randy Bachman (Bachman-Turner Overdrive), Josie Cotton, and John Fogerty (Creedence Clearwater Revival), and their family. Witness the rise and influence of the electric guitar, the history, and the relevance of the band in pop culture still today, while you rock out to the stellar soundtrack.",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzYwNzUwMjtqOzE4ODc3OzEyMDA7NjQwOzk2MA",
    "primary": "https://resizing.flixster.com/eELdtVEpK6vNvNCBHihcoEIZMQM=/130x0/v1.bTsxMzYwNzUwMjtqOzE4ODc3OzEyMDA7NjQwOzk2MA"
  },
  "actors": ["John Fogerty"]
}, {
  "id": 771554714,
  "title": "Ip Man: Kung Fu Master",
  "url": "/m/ip_man_kung_fu_master",
  "tomatoIcon": "rotten",
  "tomatoScore": 36,
  "theaterReleaseDate": "Dec 11",
  "dvdReleaseDate": "Dec 11",
  "mpaaRating": "NR",
  "runtime": "1 hr. 24 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYxMjAwNztqOzE4ODc3OzEyMDA7Mjc1Mzs0NDY3",
    "primary": "https://resizing.flixster.com/eIMdC8gRY6SoQPOeCFLYEd0ZIBk=/130x0/v1.bTsxMzYxMjAwNztqOzE4ODc3OzEyMDA7Mjc1Mzs0NDY3"
  },
  "actors": ["Michael Wong", "To Yu-Hang", "Dongfeng Yue"]
}, {
  "id": 771554742,
  "title": "The Mystery of the Pink Flamingo",
  "url": "/m/the_mystery_of_the_pink_flamingo",
  "tomatoIcon": "fresh",
  "tomatoScore": 100,
  "dvdReleaseDate": "Dec 1",
  "mpaaRating": "NR",
  "synopsis": "An eccentric character employs unusual research efforts to reveal the true story behind the pink flamingo. Rigo will gather together bizarre theories and interpretations to discover the powerful influence that these birds have on our world.",
  "synopsisType": "synopsis",
  "posters": {
    "thumborId": "v1.bTsxMzYxNDgyMztqOzE4ODc3OzEyMDA7NTQwMDs3MjAw",
    "primary": "https://resizing.flixster.com/5dptjlLjpdaefXkYuqRSRzqUXmo=/130x0/v1.bTsxMzYxNDgyMztqOzE4ODc3OzEyMDA7NTQwMDs3MjAw"
  },
  "actors": ["Rigo Pex", "John Waters", "Allee Willis"]
}, {
  "id": 771554782,
  "title": "Trail of Ashes",
  "url": "/m/trail_of_ashes",
  "tomatoIcon": "rotten",
  "tomatoScore": 40,
  "theaterReleaseDate": "Dec 1",
  "dvdReleaseDate": "Dec 1",
  "mpaaRating": "NR",
  "runtime": "1 hr. 38 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYyMTA0NTtqOzE4ODc3OzEyMDA7MTk0NDsyOTUy",
    "primary": "https://resizing.flixster.com/r0FVrJ-uNMbhEe2cnZnx1ClWgoA=/130x0/v1.bTsxMzYyMTA0NTtqOzE4ODc3OzEyMDA7MTk0NDsyOTUy"
  },
  "actors": ["Arturo Lizardi", "Héctor Escudero", "Cecilia Arguelles"]
}, {
  "id": 771555008,
  "title": "The Bloodhound",
  "url": "/m/the_bloodhound",
  "tomatoIcon": "fresh",
  "tomatoScore": 86,
  "dvdReleaseDate": "Dec 1",
  "mpaaRating": "NR",
  "synopsis": "Francis (Liam Aiken), a dispossessed young man, is summoned to the secluded home of his wealthy childhood friend, JP Luret (Joe Adler), who is suffering from a mysterious affliction. Upon his arrival, Francis realizes that JP and his ethereal twin sister Vivian (Annalise Basso) are the sole surviving members of the privileged Luret family, whose legacy has been one of depression and self-destruction, and the only occupants of their family estate. As the old friends attempt to reconnect, a number of inexplicable incidents begin to occur within the house, and Francis finds himself drawn into a world of malaise and despair, where an act of betrayal might provide his only way out.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 12 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYzMjE0MTtqOzE4ODc3OzEyMDA7MjAwMDszMDAw",
    "primary": "https://resizing.flixster.com/y1pXtNQPxqL-pNtdS0f-TbZ8_wE=/130x0/v1.bTsxMzYzMjE0MTtqOzE4ODc3OzEyMDA7MjAwMDszMDAw"
  },
  "actors": ["Annalise Basso", "Liam Aiken", "Joe Adler"]
}, {
  "id": 771505271,
  "title": "Creem: America's Only Rock 'N' Roll Magazine",
  "url": "/m/creem_americas_only_rock_n_roll_magazine",
  "tomatoIcon": "fresh",
  "tomatoScore": 96,
  "theaterReleaseDate": "Aug 7",
  "dvdReleaseDate": "Nov 10",
  "mpaaRating": "NR",
  "synopsis": "Capturing the messy upheaval of the '70s just as rock was re-inventing itself, the film explores CREEM Magazine's humble beginnings in post-riot Detroit, follows its upward trajectory from underground paper to national powerhouse -- spotlighting iconic features, interviews, and anecdotes along the way -- then bears witness to its imminent demise following the tragic and untimely deaths of its visionary publisher, Barry Kramer, and its most famous alum and genius clown prince, Lester Bangs, a year later. Fifty years after publishing its first issue, \"America's Only Rock 'n' Roll Magazine\" remains a seditious spirit in music and culture.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 13 min.",
  "posters": {
    "thumborId": "v1.bTsxMzQ2MzM1MTtqOzE4ODc1OzEyMDA7MjAwMDszMDAw",
    "primary": "https://resizing.flixster.com/q2gjFlIisx02fawVPNwtRM6hRRU=/130x0/v1.bTsxMzQ2MzM1MTtqOzE4ODc1OzEyMDA7MjAwMDszMDAw"
  },
  "actors": ["Alice Cooper", "Cameron Crowe", "Joan Jett"]
}, {
  "id": 771505853,
  "title": "Princess of the Row",
  "url": "/m/princess_of_the_row",
  "tomatoIcon": "fresh",
  "tomatoScore": 88,
  "theaterReleaseDate": "Nov 27",
  "dvdReleaseDate": "Nov 27",
  "mpaaRating": "NR",
  "synopsis": "Bouncing around the foster care system, Alicia Willis (Tayler Buck), a creative 12-year-old girl, ditches school to visit her military veteran father Sergeant Beaumont \"Bo\" Willis (Edi Gathegi). After a battle-induced brain injury during his service in Iraq, Bo is now homeless and living in Los Angeles' skid row while suffering from severe PTSD. When Alicia discovers that her next foster home is ten hours away, she sets out on a mission to save her family. With social services in hot pursuit, she and her father flee the city in search of a better life where they can be together in peace.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 24 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU3MDg0NjtwOzE4ODc3OzEyMDA7ODQ0OzEyMzI",
    "primary": "https://resizing.flixster.com/kfJ-OT_Q5jDx-t0FciwIh2mNN9A=/130x0/v1.bTsxMzU3MDg0NjtwOzE4ODc3OzEyMDA7ODQ0OzEyMzI"
  },
  "actors": ["Ana Ortiz", "Martin Sheen"]
}, {
  "id": 771506747,
  "title": "Honey Bee",
  "url": "/m/honey_bee_2019",
  "tomatoIcon": "fresh",
  "tomatoScore": 100,
  "dvdReleaseDate": "Nov 10",
  "mpaaRating": "NR",
  "runtime": "1 hr. 30 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU4NTc4OTtqOzE4ODc3OzEyMDA7ODUwOzExMDA",
    "primary": "https://resizing.flixster.com/RKFYahyB4gYSNCfZU8514sPvG68=/130x0/v1.bTsxMzU4NTc4OTtqOzE4ODc3OzEyMDA7ODUwOzExMDA"
  },
  "actors": ["Connor Price", "Julia Sarah Stone", "Martha Plimpton"]
}, {
  "id": 771509787,
  "title": "Hearts and Bones",
  "url": "/m/hearts_and_bones",
  "tomatoIcon": "fresh",
  "tomatoScore": 81,
  "theaterReleaseDate": "Nov 20",
  "dvdReleaseDate": "Nov 20",
  "mpaaRating": "NR",
  "synopsis": "<em>Hearts and Bones</em> is more powerful in concept than execution, although strong work from a deftly assembled cast adds much-needed heft.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 51 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU3OTI0NTtwOzE4ODc3OzEyMDA7MTAwNDsxNDc4",
    "primary": "https://resizing.flixster.com/46WLFGMBCFNAoGptYYed6kGASv0=/130x0/v1.bTsxMzU3OTI0NTtwOzE4ODc3OzEyMDA7MTAwNDsxNDc4"
  },
  "actors": ["Andrew Luria", "Bolude Watson", "Hayley McElhinney"]
}, {
  "id": 771510938,
  "title": "The Shock of the Future (Le choc du futur)",
  "url": "/m/the_shock_of_the_future",
  "tomatoIcon": "fresh",
  "tomatoScore": 81,
  "dvdReleaseDate": "Nov 10",
  "mpaaRating": "NR",
  "synopsis": "In the Paris of 1978, old formulas do not charm listeners anymore and new music must arise. In a male-dominated industry, Ana uses her electronic gadgets to make herself heard, creating a new sound that will mark the decades to come: the music of the future.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 22 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU4NjYzMjtqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2",
    "primary": "https://resizing.flixster.com/zA6ZjYaHpc2zw5Hfobk_ebZP2vE=/130x0/v1.bTsxMzU4NjYzMjtqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2"
  },
  "actors": ["Alma Jodorowsky", "Clara Luciani", "Philippe Rebbot"]
}, {
  "id": 771511523,
  "title": "A Rainy Day in New York",
  "url": "/m/a_rainy_day_in_new_york",
  "tomatoIcon": "rotten",
  "tomatoScore": 48,
  "theaterReleaseDate": "Oct 9",
  "dvdReleaseDate": "Nov 10",
  "mpaaRating": "PG13",
  "synopsis": "Its outstanding cast helps elevate a middling screenplay, but <em>A Rainy Day in New York</em> falls well short of Woody Allen's best efforts.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 32 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU1NTI3NjtqOzE4ODc2OzEyMDA7MTIwMDsxNzc4",
    "primary": "https://resizing.flixster.com/EnqcOslHzqPmFJi7pk8PnyP6KyA=/130x0/v1.bTsxMzU1NTI3NjtqOzE4ODc2OzEyMDA7MTIwMDsxNzc4"
  },
  "actors": ["Timothée Chalamet", "Elle Fanning", "Selena Gomez"]
}, {
  "id": 771512201,
  "title": "Collective (Colectiv)",
  "url": "/m/collective_2020",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 99,
  "theaterReleaseDate": "Nov 20",
  "dvdReleaseDate": "Nov 20",
  "mpaaRating": "NR",
  "synopsis": "<em>Collective</em> presents a darkly effective overview of the cycle of political corruption and public cynicism that takes hold when government abrogates its responsibility to the people.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 49 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU4NDE2NDtqOzE4ODc3OzEyMDA7NDY1MDs2NjAw",
    "primary": "https://resizing.flixster.com/B-8w9BIqn5mcaQU706x1P7eGzbY=/130x0/v1.bTsxMzU4NDE2NDtqOzE4ODc3OzEyMDA7NDY1MDs2NjAw"
  },
  "actors": []
}, {
  "id": 771512627,
  "title": "The Giant",
  "url": "/m/the_giant_2019",
  "tomatoIcon": "rotten",
  "tomatoScore": 50,
  "dvdReleaseDate": "Nov 13",
  "mpaaRating": "NR",
  "synopsis": "In two days, 17-year-old Charlotte will say goodbye to her small Georgia town and begin life in a new place. But tonight, on the last night of summer, in encounters with people familiar and not, she will be forced to face up to the repressed traumas of that sweltering season and, perhaps, something far more sinister.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 39 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU5MDI0NTtqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2",
    "primary": "https://resizing.flixster.com/DKFgKylpOyD_wEx6zCK52P1ErnQ=/130x0/v1.bTsxMzU5MDI0NTtqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2"
  },
  "actors": ["Odessa Young", "Ben Schnetzer", "Jack Kilmer"]
}, {
  "id": 771512647,
  "title": "Iron Mask",
  "url": "/m/iron_mask_2020",
  "tomatoIcon": "rotten",
  "tomatoScore": 22,
  "dvdReleaseDate": "Nov 20",
  "mpaaRating": "NR",
  "synopsis": "<em>Iron Mask</em> unites Jackie Chan and Arnold Schwarzenegger for a bizarrely misguided adventure that aims for epic fantasy with unintentionally hilarious results.",
  "synopsisType": "consensus",
  "runtime": "2 hr. 0 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU5MTA0NztqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2",
    "primary": "https://resizing.flixster.com/DtPnzboYyScxYt_ccTkhUihk1m0=/130x0/v1.bTsxMzU5MTA0NztqOzE4ODc3OzEyMDA7Mjc2NDs0MDk2"
  },
  "actors": ["Jason Flemyng", "Yao Xingtong", "Charles Dance"]
}, {
  "id": 771513450,
  "title": "Song Lang",
  "url": "/m/song_lang",
  "tomatoIcon": "fresh",
  "tomatoScore": 100,
  "theaterReleaseDate": "Oct 9",
  "dvdReleaseDate": "Nov 10",
  "mpaaRating": "R",
  "synopsis": "An unlikely bond forms between an underground debt collector and a cai luong \"Vietnamese opera\" performer against the backdrop of Saigon in the 90s.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 30 min.",
  "posters": {
    "thumborId": "v1.bTsxMzE5NTYyMztqOzE4ODcyOzEyMDA7Njc1Ozk5OQ",
    "primary": "https://resizing.flixster.com/mhOVr6cxENIm1qM413BHO8rYwkk=/130x0/v1.bTsxMzE5NTYyMztqOzE4ODcyOzEyMDA7Njc1Ozk5OQ"
  },
  "actors": ["Kim Chi", "Lien Binh Phat", "Kim Phuong"]
}, {
  "id": 771517299,
  "title": "The Nest",
  "url": "/m/the_nest_2020",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 89,
  "theaterReleaseDate": "Sep 18",
  "dvdReleaseDate": "Nov 17",
  "mpaaRating": "R",
  "synopsis": "An effective pairing of period setting and timeless themes, <em>The Nest</em> wrings additional tension out of its unsettling story with an outstanding pair of lead performances.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 47 min.",
  "posters": {
    "thumborId": "v1.bTsxMzUzMjY3MjtqOzE4ODc2OzEyMDA7MTM4MjsyMDQ4",
    "primary": "https://resizing.flixster.com/AaCDdJaAcPhwVfIwO7-5Gku7uMA=/130x0/v1.bTsxMzUzMjY3MjtqOzE4ODc2OzEyMDA7MTM4MjsyMDQ4"
  },
  "actors": ["Jude Law", "Carrie Coon", "Anne Reid"]
}, {
  "id": 771520055,
  "title": "Train to Busan Presents: Peninsula",
  "url": "/m/train_to_busan_presents_peninsula",
  "tomatoIcon": "rotten",
  "tomatoScore": 53,
  "theaterReleaseDate": "Aug 21",
  "dvdReleaseDate": "Nov 24",
  "mpaaRating": "NR",
  "synopsis": "Although a disappointing sense of familiarity threatens to derail <em>Train to Busan Presents: Peninsula</em>, fans of the original may find it a thrilling enough ride.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 56 min.",
  "posters": {
    "thumborId": "v1.bTsxMzQ4NDE3MDtqOzE4ODc2OzEyMDA7Mjc2NDs0MDk2",
    "primary": "https://resizing.flixster.com/B_9am7eJH7fQy3Q66JznQBmIe4I=/130x0/v1.bTsxMzQ4NDE3MDtqOzE4ODc2OzEyMDA7Mjc2NDs0MDk2"
  },
  "actors": ["Dong-won Kang", "Gang Dong-weon", "Lee Jung-hyun"]
}, {
  "id": 771520278,
  "title": "Lie Exposed",
  "url": "/m/lie_exposed",
  "tomatoIcon": "rotten",
  "tomatoScore": 0,
  "theaterReleaseDate": "Sep 25",
  "dvdReleaseDate": "Nov 20",
  "mpaaRating": "NR",
  "synopsis": "When recovering alcoholic Melanie (Leslie Hope) learns devastating news, she leaves her husband (Bruce Greenwood) in Toronto and heads to Los Angeles for a bender. In LA she meets a mysterious tintype photographer (Jeff Kober) and agrees to pose for him at his downtown studio. Upon her return to Canada, freshly sober Melanie and husband Frank stage a surprise art show for their friends. The exhibition of the tintype photos ignites passionate, provocative, incendiary and disparate discussions amongst the group, none of whom know Melanie is the subject of this intimate and provocative work.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 33 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU2Nzc2NjtqOzE4ODc3OzEyMDA7MTYwMDsyMjM0",
    "primary": "https://resizing.flixster.com/rY5L-XK2gRmMrdpnXoLN2cYraAE=/130x0/v1.bTsxMzU2Nzc2NjtqOzE4ODc3OzEyMDA7MTYwMDsyMjM0"
  },
  "actors": ["Benjamin Ayres", "Megan Follows", "Bruce Greenwood"]
}, {
  "id": 771520812,
  "title": "The Donut King",
  "url": "/m/the_donut_king",
  "tomatoIcon": "fresh",
  "tomatoScore": 97,
  "theaterReleaseDate": "Oct 30",
  "dvdReleaseDate": "Nov 20",
  "mpaaRating": "NR",
  "synopsis": "A documentary that's more than just a sweetly filling treat, <em>The Donut King</em> tells a real-life rags-to-riches story with genuine depth and breadth.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 34 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU4ODY4ODtqOzE4ODc3OzEyMDA7ODE3NTsxMjA3NQ",
    "primary": "https://resizing.flixster.com/W9vdl7UE0l2XOOmRD5AUHtSZuyo=/130x0/v1.bTsxMzU4ODY4ODtqOzE4ODc3OzEyMDA7ODE3NTsxMjA3NQ"
  },
  "actors": ["Chuong Pek Lee", "Daewon Song", "Mayly Tao"]
}, {
  "id": 771521433,
  "title": "Stardust",
  "url": "/m/stardust_2020",
  "tomatoIcon": "rotten",
  "tomatoScore": 21,
  "theaterReleaseDate": "Nov 25",
  "dvdReleaseDate": "Nov 25",
  "mpaaRating": "R",
  "synopsis": "Ground control to Major Tom, <em>Stardust</em> did not put its helmet on.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 49 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYwMDAwMDtqOzE4ODc3OzEyMDA7MjU0OzM3Nw",
    "primary": "https://resizing.flixster.com/ulEkmhtmF36VikUnzkMq2GZB8Sw=/130x0/v1.bTsxMzYwMDAwMDtqOzE4ODc3OzEyMDA7MjU0OzM3Nw"
  },
  "actors": ["Aaron Poole", "Anthony Flanagan", "Jena Malone"]
}, {
  "id": 771522129,
  "title": "Dating Amber",
  "url": "/m/dating_amber",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 94,
  "theaterReleaseDate": "Nov 13",
  "dvdReleaseDate": "Nov 10",
  "mpaaRating": "NR",
  "synopsis": "<em>Dating Amber</em> colors outside the rom-com lines to tell a sweetly poignant story about friendship and self-acceptance.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 32 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU1MDU0MTtqOzE4ODc2OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/AUwDovCvHFvgBIN72aPjSX8FS70=/130x0/v1.bTsxMzU1MDU0MTtqOzE4ODc2OzEyMDA7MjAyNTszMDAw"
  },
  "actors": ["Fionn O'Shea", "Lola Petticrew", "Sharon Horgan"]
}, {
  "id": 771522281,
  "title": "The Walrus and the Whistleblower",
  "url": "/m/the_walrus_and_the_whistleblower",
  "tomatoIcon": "rotten",
  "tomatoScore": 50,
  "theaterReleaseDate": "Oct 9",
  "dvdReleaseDate": "Nov 24",
  "mpaaRating": "NR",
  "synopsis": "Phil Demers is a part-time mailman who lives in a bungalow across the creek from MarineLand, the iconic amusement park in Niagara Falls, where he had his dream job as an animal trainer for over a decade. He swam with killer whales and ran the show, until he quit and blew the whistle, making claims of animal abuse and calling for an end to the near 60-year-old practice of keeping marine mammals in pools.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 28 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU3MDg0NTtqOzE4ODc3OzEyMDA7MjcwMDszOTUw",
    "primary": "https://resizing.flixster.com/anm1qBom1bZi0q1Wnujvn-cRGDs=/130x0/v1.bTsxMzU3MDg0NTtqOzE4ODc3OzEyMDA7MjcwMDszOTUw"
  },
  "actors": []
}, {
  "id": 771534681,
  "title": "Crazy, Not Insane",
  "url": "/m/crazy_not_insane",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 94,
  "dvdReleaseDate": "Nov 18",
  "mpaaRating": "NR",
  "synopsis": "<em>Crazy, Not Insane</em> isn't as narratively disciplined as documentarian Alex Gibney's best work, but Dorothy Otnow Lewis' clinical analysis of murderous psychology may prompt unexpected sympathy for the devil.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 57 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU5NjQyODtqOzE4ODc3OzEyMDA7MTI5NjsxOTIw",
    "primary": "https://resizing.flixster.com/CTqZqZIzc5mW5Ti0NZ5xL777GzI=/130x0/v1.bTsxMzU5NjQyODtqOzE4ODc3OzEyMDA7MTI5NjsxOTIw"
  },
  "actors": ["Laura Dern", "Park Dietz"]
}, {
  "id": 771534801,
  "title": "Run",
  "url": "/m/run_2020",
  "tomatoIcon": "certified_fresh",
  "tomatoScore": 88,
  "dvdReleaseDate": "Nov 20",
  "mpaaRating": "NR",
  "synopsis": "Solid acting and expertly ratcheted tension help <em>Run</em> transcend its familiar trappings to deliver a delightfully suspenseful thriller.",
  "synopsisType": "consensus",
  "posters": {
    "thumborId": "v1.bTsxMzU5MTIzMztqOzE4ODc3OzEyMDA7MjQwMDszNjAw",
    "primary": "https://resizing.flixster.com/rHwHxg1geQlLrAZJE6RtKC71kyo=/130x0/v1.bTsxMzU5MTIzMztqOzE4ODc3OzEyMDA7MjQwMDszNjAw"
  },
  "actors": ["Sarah Paulson", "Pat Healy", "Erik Athavale"]
}, {
  "id": 771534891,
  "title": "A Chef's Voyage",
  "url": "/m/a_chefs_voyage",
  "tomatoIcon": "fresh",
  "tomatoScore": 67,
  "theaterReleaseDate": "Sep 18",
  "dvdReleaseDate": "Nov 24",
  "mpaaRating": "NR",
  "synopsis": "The film follows Emmy (Mind of a Chef) and James Beard award-winning Chef David Kinch and his team from their 3 Star Michelin restaurant, Manresa, in California for a one of a kind \"four hands\" collaboration with three legendary chefs at their iconic restaurants in Paris, Provence, and Marseille.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 30 min.",
  "posters": {
    "thumborId": "v1.bTsxMzUzMDIyMTtqOzE4ODc2OzEyMDA7MzkzOzU4Mg",
    "primary": "https://resizing.flixster.com/u--xXHfP15Dfpu_3kh4voUWFplE=/130x0/v1.bTsxMzUzMDIyMTtqOzE4ODc2OzEyMDA7MzkzOzU4Mg"
  },
  "actors": ["David Kinch", "Alain Solivérès", "Glenn Viel"]
}, {
  "id": 771535207,
  "title": "Chick Fight",
  "url": "/m/chick_fight",
  "tomatoIcon": "rotten",
  "tomatoScore": 38,
  "theaterReleaseDate": "Nov 13",
  "dvdReleaseDate": "Nov 13",
  "mpaaRating": "R",
  "synopsis": "When Anna Wyncomb is introduced to an underground, all-female fight club in order to turn the mess of her life around, she discovers she is much more personally connected to the history of the club than she could ever imagine.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 37 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU3NTIwNjtqOzE4ODc3OzEyMDA7MjAwMDsyOTYz",
    "primary": "https://resizing.flixster.com/7hvzH9rLs9g9AyB2h4wjLQHYsb4=/130x0/v1.bTsxMzU3NTIwNjtqOzE4ODc3OzEyMDA7MjAwMDsyOTYz"
  },
  "actors": ["Malin Akerman", "Bella Thorne", "Alec Baldwin"]
}, {
  "id": 771535211,
  "title": "The Dark Divide",
  "url": "/m/the_dark_divide",
  "tomatoIcon": "fresh",
  "tomatoScore": 93,
  "theaterReleaseDate": "Sep 18",
  "dvdReleaseDate": "Nov 10",
  "mpaaRating": "NR",
  "synopsis": "The Dark Divide is based on the true story of renowned butterfly expert Dr. Robert Pyle's (David Cross) perilous 1995 journey across one of America's largest undeveloped wildlands. At the urging of his dying wife Thea (Debra Messing ), the shy author finds himself in over his head on an epic, life-changing expedition through Washington's Gifford Pinchot National Forest in search of new species of butterflies. Over the course of his six-week adventure Pyle battles self-doubt, the grueling trail, and the people and creatures who call this forest home. And, somewhere deep in the heart of The Dark Divide, he makes a discovery that challenges everything he knows about the natural world. With David Koechner, Cameron Esposito, Gary Farmer and Patterson Hood. Music by The Avett Brothers, Giants in the Trees featuring Krist Novoselic&#769;, The National Reserve, Samantha Crane, Bombadil, and more.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 47 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU1NDYxOTtqOzE4ODc2OzEyMDA7ODEwMDsxMjAwMA",
    "primary": "https://resizing.flixster.com/PYCVqHdagkOZFltgJT0V55kHXAc=/130x0/v1.bTsxMzU1NDYxOTtqOzE4ODc2OzEyMDA7ODEwMDsxMjAwMA"
  },
  "actors": ["Debra Messing", "David Koechner", "Cameron Esposito"]
}, {
  "id": 771535351,
  "title": "Echo Boomers",
  "url": "/m/echo_boomers",
  "tomatoIcon": "rotten",
  "tomatoScore": 36,
  "theaterReleaseDate": "Nov 13",
  "dvdReleaseDate": "Nov 13",
  "mpaaRating": "NR",
  "posters": {
    "thumborId": "v1.bTsxMzU2OTI4MDtqOzE4ODc3OzEyMDA7MjAyNTszMDAw",
    "primary": "https://resizing.flixster.com/T5WjgYeHtIcjIlX9PAXaa9THD3E=/130x0/v1.bTsxMzU2OTI4MDtqOzE4ODc3OzEyMDA7MjAyNTszMDAw"
  },
  "actors": ["Michael Shannon", "Patrick Schwarzenegger", "Alex Pettyfer"]
}, {
  "id": 771535381,
  "title": "Embattled",
  "url": "/m/embattled",
  "tomatoIcon": "fresh",
  "tomatoScore": 71,
  "theaterReleaseDate": "Nov 20",
  "dvdReleaseDate": "Nov 20",
  "mpaaRating": "R",
  "synopsis": "<em>Embattled</em> fights genre clichés to a draw while landing enough emotional punches to make this a sports drama worth watching.",
  "synopsisType": "consensus",
  "posters": {
    "thumborId": "v1.bTsxMzU4NTM0MztqOzE4ODc3OzEyMDA7MTUzNjsyMDQ4",
    "primary": "https://resizing.flixster.com/0fveEhZUEUKEAA3fI9KV1V7ZxDo=/130x0/v1.bTsxMzU4NTM0MztqOzE4ODc3OzEyMDA7MTUzNjsyMDQ4"
  },
  "actors": ["Elizabeth Reaser", "Stephen Dorff", "Drew Starkey"]
}, {
  "id": 771535588,
  "title": "Team Marco",
  "url": "/m/team_marco",
  "tomatoIcon": "fresh",
  "tomatoScore": 63,
  "dvdReleaseDate": "Nov 20",
  "mpaaRating": "NR",
  "synopsis": "12-year-old Marco is obsessed with video games and hardly leaves the house, until his grandfather moves in and changes everything",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 32 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU3MTY3MTtwOzE4ODc3OzEyMDA7MjMwNDszNDU2",
    "primary": "https://resizing.flixster.com/ltONeRZhMi5vuyg0OuRuN2H1qTw=/130x0/v1.bTsxMzU3MTY3MTtwOzE4ODc3OzEyMDA7MjMwNDszNDU2"
  },
  "actors": ["Antoinette LaVecchia"]
}, {
  "id": 771535593,
  "title": "Fatman",
  "url": "/m/fatman",
  "tomatoIcon": "rotten",
  "tomatoScore": 45,
  "theaterReleaseDate": "Nov 13",
  "dvdReleaseDate": "Nov 24",
  "mpaaRating": "R",
  "synopsis": "<em>Fatman</em> takes a surprisingly serious approach to a potentially ludicrous twist on the Santa Claus legend, aiming for edgy but mostly missing the mark.",
  "synopsisType": "consensus",
  "runtime": "1 hr. 40 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU3NTIyMjtqOzE4ODc3OzEyMDA7MzU0OzUyNQ",
    "primary": "https://resizing.flixster.com/pUEogRahJ3i4Q-Q4lFqIhxrEwZ0=/130x0/v1.bTsxMzU3NTIyMjtqOzE4ODc3OzEyMDA7MzU0OzUyNQ"
  },
  "actors": ["Mel Gibson", "Walton Goggins", "Marianne Jean- Baptiste"]
}, {
  "id": 771535595,
  "title": "Jiu Jitsu",
  "url": "/m/jiu_jitsu",
  "tomatoIcon": "rotten",
  "tomatoScore": 28,
  "theaterReleaseDate": "Nov 20",
  "dvdReleaseDate": "Nov 20",
  "mpaaRating": "R",
  "synopsis": "<em>Jiu Jitsu</em> pits an ancient order of warriors against an alien invasion -- yet despite that appealingly bizarre premise and a cast that includes Nicolas Cage and Tony Jaa, it's the audience that loses.",
  "synopsisType": "consensus",
  "posters": {
    "thumborId": "v1.bTsxMzU4NTM0MDtqOzE4ODc3OzEyMDA7MTk0NDsyODgw",
    "primary": "https://resizing.flixster.com/nPKx0FfHTKb5BVSWIjNSGk6TLMQ=/130x0/v1.bTsxMzU4NTM0MDtqOzE4ODc3OzEyMDA7MTk0NDsyODgw"
  },
  "actors": ["Alain Moussi", "Frank Grillo", "Marie Avgeropoulos"]
}, {
  "id": 771547189,
  "title": "The Retreat",
  "url": "/m/the_retreat",
  "tomatoIcon": "fresh",
  "tomatoScore": 67,
  "dvdReleaseDate": "Nov 10",
  "mpaaRating": "NR",
  "synopsis": "A man becomes lost and then finds himself in a fight for his life after becoming isolated on a retreat in the Adirondacks.",
  "synopsisType": "synopsis",
  "runtime": "1 hr. 28 min.",
  "posters": {
    "thumborId": "v1.bTsxMzYwNjQxNTtqOzE4ODc3OzEyMDA7Mjc4NTszOTc1",
    "primary": "https://resizing.flixster.com/iYIg7sInz3hVDqMqtkCNXZDCSh0=/130x0/v1.bTsxMzYwNjQxNTtqOzE4ODc3OzEyMDA7Mjc4NTszOTc1"
  },
  "actors": ["Grant Schumacher", "Dylan Grunn", "Chris Cimperman"]
}, {
  "id": 771553240,
  "title": "The Orange Years: The Nickelodeon Story",
  "url": "/m/the_orange_years_the_nickelodeon_story",
  "tomatoIcon": "fresh",
  "tomatoScore": 88,
  "dvdReleaseDate": "Nov 17",
  "mpaaRating": "NR",
  "runtime": "1 hr. 30 min.",
  "posters": {
    "thumborId": "v1.bTsxMzU4NzIxMDtqOzE4ODc3OzEyMDA7MTUzNjsyMDQ4",
    "primary": "https://resizing.flixster.com/ocSG-7eMR3Ka4IlzSnCktqZNvP0=/130x0/v1.bTsxMzU4NzIxMDtqOzE4ODc3OzEyMDA7MTUzNjsyMDQ4"
  },
  "actors": []
}, {
  "id": 771554296,
  "title": "My Summer as a Goth",
  "url": "/m/my_summer_as_a_goth",
  "tomatoIcon": "rotten",
  "tomatoScore": 17,
  "dvdReleaseDate": "Nov 11",
  "mpaaRating": "NR",
  "runtime": "1 hr. 40 min.",
  "posters": {
    "thumborId": "v1.bTsxMzczNjMwMztqOzE4ODc4OzEyMDA7OTYwOzE0NDA",
    "primary": "https://resizing.flixster.com/79w_oxF21Xx4_nnV6jdbx9FNEto=/130x0/v1.bTsxMzczNjMwMztqOzE4ODc4OzEyMDA7OTYwOzE0NDA"
  },
  "actors": []
}, {
  "id": 771554393,
  "title": "Sleepless Beauty",
  "url": "/m/sleepless_beauty",
  "tomatoIcon": "rotten",
  "tomatoScore": 50,
  "dvdReleaseDate": "Nov 10",
  "mpaaRating": "NR",
  "posters": {
    "thumborId": "v1.bTsxMzU5MTIzNjtqOzE4ODc3OzEyMDA7MjcwMDs0MDAw",
    "primary": "https://resizing.flixster.com/Rb9i86bLVUaC6rjiGdeGfURMK8Q=/130x0/v1.bTsxMzU5MTIzNjtqOzE4ODc3OzEyMDA7MjcwMDs0MDAw"
  },
  "actors": []
}, {
  "id": 771554772,
  "title": "Truth is the Only Client: The Official Investigation of the Murder of John F. Kennedy",
  "url": "/m/truth_is_the_only_client",
  "tomatoIcon": "fresh",
  "tomatoScore": 100,
  "dvdReleaseDate": "Nov 17",
  "mpaaRating": "NR",
  "posters": {
    "thumborId": "v1.bTsxMzYxODc4OTtqOzE4ODc3OzEyMDA7MTYwMDsyNDAw",
    "primary": "https://resizing.flixster.com/ZaZQ1JTHOuv3AAE1qWkYykXCPQM=/130x0/v1.bTsxMzYxODc4OTtqOzE4ODc3OzEyMDA7MTYwMDsyNDAw"
  },
  "actors": []
}];
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _movies = _interopRequireDefault(require("./movies.json"));

require("./main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var cards = document.getElementById('cards');
  var aboutmovie = _movies.default;
  console.log(_movies.default);
  aboutmovie.forEach(function (movien) {
    var cardDOM = buildCardDOM(movien);
    cards.insertAdjacentHTML('beforeend', cardDOM);
  });
});

function buildCardDOM(movien) {
  var icon = {
    bad: "https://staticv2-4.rottentomatoes.com/static/images/icons/splat-16.png",
    good: "https://staticv2-4.rottentomatoes.com/static/images/icons/fresh-16.png",
    verygood: "https://staticv2-4.rottentomatoes.com/static/images/icons/CF_16x16.png"
  };
  var i = _movies.default.tomatoScore;
  var icons;

  if (i <= 60) {
    icons = "<img class=\"icons\" src=\"".concat(icon.bad, "\" alt=\"#\">");
  } else if (i <= 80) {
    icons = "<img class=\"icons\" src=\"".concat(icon.good, "\" alt=\"#\">");
  } else {
    icons = "<img class=\"icons\" src=\"".concat(icon.verygood, "\" alt=\"#\">");
  }

  return "<div class=\"allmovie\">\n            <img src=\"".concat(movien.posters.primary, "\" alt=\"#\">\n            <h1>").concat(movien.title, "</h1>\n            <h2>").concat(icons).concat(movien.tomatoScore, "%</h2>\n            <h3>").concat(movien.dvdReleaseDate, "</h3>\n        </div>");
} //title: "The SpongeBob Movie: Sponge on the Run"
// tomatoScore: 66
//dvdReleaseDate: "Mar 4"
// primary: "https://resizing.flixster.com/atQgbSJHd7ING-1jk2d-0subV_Y=/130x0/v1.bTsxMzY5Njg1MTtqOzE4ODc4OzEyMDA7MjAwMDszMDAw"
// https://staticv2-4.rottentomatoes.com/static/images/icons/splat-16.png
// https://staticv2-4.rottentomatoes.com/static/images/icons/fresh-16.png
// https://staticv2-4.rottentomatoes.com/static/images/icons/CF_16x16.png
},{"./movies.json":"src/movies.json","./main.css":"src/main.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64030" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map