## Bingo! Letter

Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:

| Letter | Number Range |
| ------ | ------------ |
| "B"    | 1-15         |
| "I"    | 16-30        |
| "N"    | 31-45        |
| "G"    | 46-60        |
| "O"    | 61-75        |

- Create an array of objects `{score: 15, letter: "B"}`

- Use `.find()` on the array of objects

- Use the condition `.find((bingo) => bingo.score >= n)` - The find method looks for the first true condition, so if n is 20, 15 is not greater than 20 so it goes to the next option 30, 30 is greater than 15 so returns object {score 30, letter: "I"}

- `return result.letter` returns "I"
