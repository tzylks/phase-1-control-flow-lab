function scuberGreetingForFeet(someNumber){
  let result
  if (someNumber <= 400) {
    result = "This one is on me!";
  } else if (someNumber > 2000 && someNumber < 2500) {
    result = "I will gladly take your thirty bucks.";
  } else {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
};

function switchOnCharmFromTip(tips){
  switch (tips) {
    case "generous":
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
    return 'Bye.';
    break;
  }
  } 