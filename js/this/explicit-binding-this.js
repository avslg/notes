const human = {
  hasBrain: true,
};

function doesHeHaveBrain() {
  if (this.hasBrain) {
    return true;
  }
  return false;
}
let boundWithHumanContextFunct = doesHeHaveBrain
  .bind(human); // this is human

console.log(boundWithHumanContextFunct());
