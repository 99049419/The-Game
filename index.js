function askQuestion(question) {
  var toAsk = prompt(question);
  return toAsk;
}

function calcChance(chanceMultiplier) {
  var result = Math.floor(Math.random() * chanceMultiplier);
  return result;
}

var userName = askQuestion("Hello there traveler, what is your name?");

if (
  askQuestion(
    `So tell me ${userName} do you wish to learn more over the holy toeter?`
  ) === "yes"
) {
  console.log("stage 1 completed");
  alert(
    "The holy toeter is a relic passed down on to humanity from the gods them selves. many have tried to locate it and wield its ever lasting powers, yet noone has succeeded. The rumor is whomever wields the holy toeter will ascend to a higher plane. "
  );

  if (
    askQuestion(
      `are you ready for your quest ${userName}? if you choose yes be warry that this is not just any quest. You will be a target for other people trying to find the holy toeter. There will be violence and nasty tricks`
    ) === "yes"
  ) {
    console.log("stage 2 completed");

    if (
      askQuestion(
        `you started climbing a mountain and see a wounded lady struggling to get up. Do you take a chance to help her?`
      ) === "yes"
    ) {
      console.log("stage 3 completed");
      var chanceResult = calcChance(21);
      if (chanceResult >= 10) {
        alert(
          "as a reward for your bravery she gave you rolling paper and tabaco"
        );
        console.log(chanceResult);
      } else {
        alert(
          "The lady stabbed you in the neck and you died. refresh to restart"
        );
        console.log(chanceResult);
      }
    } else {
    }
  } else {
    alert("Thank you for visiting us travler, have a safe journey home.");
  }
} else {
  alert("you have lost the game. Refresh to restart<br>");
}

if (
  askQuestion(
    "you're half way climbing the mountain, you hear crying. Do you want to investigate?"
  ) === "yes"
) {
  console.log("stage 4 completed");
  var chanceResult = calcChance(21);
  if (chanceResult >= 10) {
    alert("It was a lion, you died.");
    console.log(chanceResult);
  } else {
    alert(
      "You found a person that was out of tabaco. You gave him half of yours."
    );
    console.log("stage 5 completed");
  }
} else {
}

if (
  askQuestion(
    "You are almost at the top of the mountain, the road you where walking on splits into two, one with a dark forrest and one with rainbows. Do you take the rainbow path or the forrest path?"
  ) === "forrest"
) {
  if (askQuestion("You see a group of forrest animals, they seem hungry. Do you want to feed them?") === "yes"){
    console.log("stage 6 completed");
    alert("You are now friends with the forrest animals. good job!")
  }
  console.log("stage 6 completed");
} else {
  if (askQuestion("You get greeted by a mysterious looking lady. She wants to give you something. Do you accept it?") === "yes"){
    if (askQuestion("She gave you a weird looking cookie. Do you eat it?") === "yes"){

      alert("They where edibles, you are now baked. Nice going!")
    
    }
  }
}

if (askQuestion("You have reached the top of the mountain and you found the holy toeter. Do you smoke it or keep it?") === "smoke it"){
  alert("This displeased the godds, you got smitten. Refresh to restart");
}else{

alert("You feel ancient power flowing through your veins. You start to levitate and your eyes start to glow. You are being transformed into a allpowerfull being with unlimitted power. You my friend have completed the quest for the holy toeter. ")
console.log("You win!")
}
