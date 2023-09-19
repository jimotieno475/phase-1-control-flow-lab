function scuberGreetingForFeet(t){
  // Write your code here!
  if (t<=400) {
    return('This one is on me!');
  } else if(t>200 & t<=2500){
    return('I will gladly take your thirty bucks.');

  } else{
    return('No can do.');
  }
  
  }

function ternaryCheckCity(p){
  // Write your code here!
  if (p==='NYC') {
    return'Ok, sounds good.';
  } else{
    return'No go.';
  }
}

function switchOnCharmFromTip(a){
  // Write your code here!
  switch (a) {
    case 'generous':
    return 'Thank you so much.';
    case 'not as generous':
    return 'Thank you.';
    default:
      return 'Bye.';

    
  }

}
