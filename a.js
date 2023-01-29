let huskyGames2016 = [
    { "date":"9/3/16", "home":"UW", "opponent":"Rutgers", "home_score":48, 
      "opponent_score":13, "passing_yards":289, "rushing_yards":91, "fumbles":0 },
    { "date":"9/10/16", "home":"UW", "opponent":"Idaho", "home_score":59, 
      "opponent_score":14, "passing_yards":356, "rushing_yards":126, "fumbles":1 },
    { "date":"9/17/16", "home":"UW", "opponent":"Portland State", "home_score":41, 
      "opponent_score":3, "passing_yards":194, "rushing_yards":213, "fumbles":1 },
    { "date":"9/24/16", "home":"Arizona", "opponent":"UW", "home_score":28, 
      "opponent_score":35, "passing_yards":160, "rushing_yards":352, "fumbles":0 },
    { "date":"9/30/16", "home":"UW", "opponent":"Stanford", "home_score":44, 
      "opponent_score":6, "passing_yards":210, "rushing_yards":214, "fumbles":0 },
    { "date":"10/8/16", "home":"Oregon", "opponent":"UW", "home_score":21, 
      "opponent_score":70, "passing_yards":304, "rushing_yards":378, "fumbles":0 },
    { "date":"10/22/16", "home":"UW", "opponent":"Oregon State", "home_score":41, 
      "opponent_score":17, "passing_yards":300, "rushing_yards":219, "fumbles":2 },
    { "date":"10/29/16", "home":"Utah", "opponent":"UW", "home_score":24, 
      "opponent_score":31, "passing_yards":186, "rushing_yards":199, "fumbles":1 },
    { "date":"11/5/16", "home":"Cal", "opponent":"UW", "home_score":27, "opponent_score":66, 
      "passing_yards":417, "rushing_yards":287, "fumbles":2 },
    { "date":"11/12/16", "home":"UW", "opponent":"USC", "home_score":13, "opponent_score":26, 
      "passing_yards":259, "rushing_yards":17, "fumbles":0 },
    { "date":"11/19/16", "home":"UW", "opponent":"Arizona State", "home_score":44, 
      "opponent_score":18, "passing_yards":338, "rushing_yards":201, "fumbles":0 },
    { "date":"11/25/16", "home":"Washington State", "opponent":"UW", "home_score":17, 
      "opponent_score":45, "passing_yards":342, "rushing_yards":168, "fumbles":1 },
    { "date":"12/2/16", "home":"Colorado", "opponent":"UW", "home_score":10, 
      "opponent_score":41, "passing_yards":118, "rushing_yards":25, "fumbles":0 },
    { "date":"12/31/16", "home":"UW", "opponent":"Alabama", "home_score":7, 
      "opponent_score":24, "passing_yards":150, "rushing_yards":44, "fumbles":1 }
   ];
  
  
  //Define a function `extractOpponent()` that takes in a "game" object and returns
  //UW's opponent (whether or not that was the home team!)
  //You can test this by passing in an individual element from the array.
const extractOpponent = (gameObj) => {
    return gameObj.home === 'UW' ? gameObj.opponent : gameObj.home;
};
  
console.log(extractOpponent(huskyGames2016[3]));




let frederick ={
    name: "frederik douglas",
    canRead: false,
    canWrite: false
};

const selfEducate = person => ({
    ...person,
    canRead: true,
    canWrite: true
});

console.log(selfEducate(frederick));
console.log(frederick);


// JOIN: makes a string
const names = ["joaquin", "alejandro", "juan"];

console.log(names.join(", "));

// MAP: takes an array of data input, returns an array of the data modified by the same "pure" function
const array1 = [1,4,9,16];

const map1 = array1.map(x => {
    return x * 2;
});

console.log(map1);
