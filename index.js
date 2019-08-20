// Write your solution here
let drivers = ["Milo", "Otis", "Garfield"];
<<<<<<< HEAD

function destructivelyAppendDriver(name)
{
  drivers.push(name);  
}


function destructivelyPrependDriver(name)
{
  drivers.unshift(name);  
}

function destructivelyRemoveLastDriver()
{
  return drivers.pop();  
}

function destructivelyRemoveFirstDriver()
{
  return drivers.shift();  
}

function appendDriver(name)
{
  return [...drivers, name]; 
}

function prependDriver(name)
{
   return [name, ...drivers];  
}

function removeLastDriver()
{
   return drivers.slice(0, -1);
}
  
function removeFirstDriver()
{
  return drivers.slice(1);
}
=======
>>>>>>> 806aac2de198daa104779639ddc33d3596341503
