function takeANumber(line, name) {
  if (line.length === 0) {
    line = [...name];
    return `Congrats, ${name}, you are number 1 in the line!`;
  } else {
    line = line.concat(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
  }
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return line.splice(0, 1);
  }
}
