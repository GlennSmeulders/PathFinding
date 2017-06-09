var PF = require('pathfinding');

console.log("yolo");
var string = "######F###\r\n##.....###\r\n##.#######\r\n#........#\r\n#.######.#\r\n#........#\r\n#######.##\r\n###.....##\r\n###S######";
var spacesplit = string.split("\r\n");
var hashsplit = string.split("#");
var test = [,];
var tests = new Array();
console.log(spacesplit);
console.log(spacesplit[0]);


var matrix = [
    [1,1,1,1,1,1,0,1,1,1],
    [1,1,0,0,0,0,0,1,1,1],
    [1,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,1],
    [1,1,1,0,0,0,0,0,1,1],
    [1,1,1,0,1,1,1,1,1,1],
];
var grid = new PF.Grid(matrix);
var finder = new PF.AStarFinder();
var path = finder.findPath(3,8,6,0,grid);
console.log(path);
