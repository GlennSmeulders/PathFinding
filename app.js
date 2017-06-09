var axios = require('axios');
var PF = require('pathfinding');

axios
  .get('http://mazeretreat.azurewebsites.net/mazes/51b8269c-00e2-4486-ac05-f4490942c0c9')
  .then((response) => console.log(response.data))
  .catch(console.error);

// Now manually convert the maze string to a matrix like this :D

var matrix = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
  [0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var grid = new PF.Grid(matrix);
var finder = new PF.AStarFinder();
var pathToFirstPortal = finder.findPath(0, 4, 1, 6, grid);
var pathFromSecondPortalToEnd = finder.findPath(10, 6, 11, 4, grid);

var solutionString = pathToFirstPortal
  .concat(pathFromSecondPortalToEnd)
  .map(coordinate => `${coordinate[0]},${coordinate[1]}`)
  .reduce((prev, curr) => prev + curr + ';', '');

const solution = {
  TeamName: 'Rockerteers',
  MazeId: '51b8269c-00e2-4486-ac05-f4490942c0c9',
  Solution: solutionString,
};

axios
  .post('http://mazeretreat.azurewebsites.net/solutions/51b8269c-00e2-4486-ac05-f4490942c0c9', solution)
  .then(console.log)
  .catch(console.error);
