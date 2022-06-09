// Just thinking through a few b/c easy
// 1
// 2


// 3
console.log('\n Exercise 3');
cite('Brendan Eich', 'Always bet on JavaScript.');

function cite(author, quote) {
  console.log(`${author} said: ${quote}`);
}


// 4
// 5


// 6
console.log('\n Exercise 6');
console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0

function compareByLength(s1, s2) {
  if (s1.length < s2.length) {
    return -1
  } else if (s1.length > s2.length) {
    return 1
  } else {
    return 0
  }
  // return s1.length < s2.length ? -1 : s1.length > s2.length ? 1 : 0
}


// 7
console.log('\n Exercise 7');
const s = 'Captain Ruby'.replace('Ruby', 'Javascript');
console.log(s);


// 8


// 9
console.log('\n Exercise 9');
console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

function extractLanguage(s) {
  return s.split('.')[0].split('_')[0]
}


// 10


// 9
console.log('\n Exercise 9');

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

function localGreet(s) {
  lang = extractLanguage(s)
  if (lang === 'en') {
    cc = extractCountryCode(s);
    return {'US': 'Hey!', 'GB': 'Hello!', 'AU': 'Howdy!'}[cc];
  }
  else {
    return getLangSpecificGreeting(lang);
  }
}

function extractCountryCode(s) {
  return s.split('.')[0].split('_')[1]
}

function getLangSpecificGreeting(lang) {
  switch (lang) {
    case 'fr': return 'Salut!';
    default: return 'Language not recognized';
  }
}