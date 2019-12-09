function wakeDog(dogName, dogBreed) {
  const wake = `Wake ${dogName} the ${dogBreed}`;
  console.log(wake);
  return wake;
}

function leashDog(dogName, dogBreed) {
  const leash = `Leash ${dogName} the ${dogBreed}`;
  console.log(leash);
  return leash;
}

function walkToPark(dogName, dogBreed) {
  const walkPark = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(walkToPark);
  return walkPark;
}

function throwFrisbee(dogName, dogBreed) {
  const frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(frisbee);
  return frisbee;
}

function walkHome(dogName, dogBreed) {
  const walkHome = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(walkHome);
  return walkHome;
}

function unleashDog(dogName, dogBreed) {
  const unleash = `Unleash ${dogName} the ${dogBreed}`;
  console.log(unleash);
  return unleash;
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
];

function exerciseDog(dogName, dogBreed) {
  let results = [];
  for (let i = 0; i < routine.length; i++) {
    let r = routine[i](dogName, dogBreed);
    results.push(r);
  }
  return results;
}
