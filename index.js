// Bingo! Letter
// Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:

// Letter	Number Range
// "B"	1-15
// "I"	16-30
// "N"	31-45
// "G"	46-60
// "O"	61-75

function getBingoLetter(n) {
  console.log(n);
  // return n;
  const bingos = [
    { score: 15, letter: 'B' },
    { score: 30, letter: 'I' },
    { score: 45, letter: 'N' },
    { score: 60, letter: 'G' },
    { score: 75, letter: 'O' },
  ];

  const result = bingos.find((bingo) => bingo.score >= n);
  console.log(result.letter);
  return result.letter;
}

getBingoLetter(54); // G
getBingoLetter(25); // I
getBingoLetter(38); // N
getBingoLetter(11); // B
