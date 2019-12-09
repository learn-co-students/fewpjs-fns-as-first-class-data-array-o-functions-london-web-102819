function wakeDog(name, breed) {
    const s = `Wake ${name} the ${breed}`;
    console.log(s);
    return s;
}

function leashDog(name, breed) {
    const s = `Leash ${name} the ${breed}`;
    console.log(s);
    return s;
}

function walkToPark(name, breed) {
    const s = `Walk to the park with ${name} the ${breed}`;
    console.log(s);
    return s;
}

function throwFrisbee(name, breed) {
    const s = `Throw the frisbee for ${name} the ${breed}`;
    console.log(s);
    return s;
}

function walkHome(name, breed) {
    const s = `Walk home with ${name} the ${breed}`;
    console.log(s);
    return s;
}


function unleashDog(name, breed) {
    const s = `Unleash ${name} the ${breed}`;
    console.log(s);
    return s;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(name, breed) {

    let results = [];
    // console.log(routine[0]('John', 'terrier'));
    for(let i = 0; i < routine.length; i++ ) {
        results.push(routine[i](name, breed));
    }

    return results;
}