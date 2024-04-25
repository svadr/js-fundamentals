/**
 * Async await is a feature introduced in ES2017 (ES8) that provides a
 * synthatic sugar on top of Promises, making asynchronous code easier to
 * read and write.
 *
 * It allows you to write asyncrhonous code that looks and behaves more like
 * synchronous code.
 *
 * Async stands for asynchronous function. Async functions always return a promise,
 * even if you dont explicitly return a promise inside them.
 *
 * Await keyword is used to wait for the Promise to settle. When you await a Promise,
 * the execution of the async function is paused until the Promise is resolved or rejected.
 * The value of await expression is the resolved value of the Promise.
 */

async function fetchData() {
  const rickAndMortyData = await fetch(
    "https://rickandmortyapi.com/api/character"
  );
  /**
   * We also use await to convert the response object
   * When we use fetch in JS it returns a Promise that resolves to the Response object
   *
   * The Response object provide several methods to access the response body such as
   * text(), json(), blob(), etc.
   *
   * It asynchronously reads the body of the response and parses it as JSON. Returning
   * another Promise that resolves with the parsed JSON data.
   */
  return await rickAndMortyData.json();
}

fetchData()
  .then((res) => {
    console.log(res.results);
  })
  .catch((err) => {
    console.log(err);
  });

// 2 - Chaining Multiple Async Operations
async function fetchUserData() {
  const rickAndMortyCharacters = await fetch(
    "https://rickandmortyapi.com/api/character"
  );

  const rickAndMortyCharactersData = await rickAndMortyCharacters.json();

  if (
    !rickAndMortyCharactersData ||
    rickAndMortyCharactersData.results.length === 0
  ) {
    throw Error("Users not found.");
  }

  const user = rickAndMortyCharactersData.results[0];
  const rickAndMortyUser = await fetch(
    `https://rickandmortyapi.com/api/character/${user.id}`
  );

  return await rickAndMortyUser.json();
}

try {
  fetchUserData().then((res) => {
    console.log("USER =======================");
    console.log(res);
  });
} catch (err) {
  console.log(err);
}
