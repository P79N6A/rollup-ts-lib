import random from "lodash/random";

function ask() {
    console.log("the answer is " + random());
}

function add(a: number, b: number): number {
    return a + b;
}

export default { add, ask };
