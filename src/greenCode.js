const splitWords = true;
// to disallow certain vowels, modify the vowels array
const vowels = ["a", "e", "i", "o", "u"];

// given a sentence like:
// "Hey This is a cool message"
// return the encoding
// ["he", "y", " ", "t", "hi", "s", "i", "s", " ", "a", " ", "co", "o", "l", " ", "me", "s", "sa", "ge"]

// helpers
const prep = (m) =>
  splitWords
    ? m.toLowerCase().split("")
    : m.toLowerCase().replace(/\s/g, "").split("");
const isVowel = (l) => vowels.includes(l);

export function greenPrep(m) {
  // Encode String to Pre-Green
  let result = [];
  let combo = false;
  prep(m).forEach((l, i, pm) => {
    // Short
    if (combo) {
      combo = false;
      return;
    }
    // next letter
    const nl = pm[i + 1];

    if (isVowel(l)) {
      result.push(l);
    } else if (isVowel(nl)) {
      result.push(l + nl);
      combo = true;
    } else {
      result.push(l);
    }
  });
  return result;
}


