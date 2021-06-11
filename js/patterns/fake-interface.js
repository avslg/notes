/* eslint-disable max-classes-per-file */
class InterfaceCommand {
  static execute() {
    this.errorMsg = 'not implemented';
    throw new Error(this.errorMsg);
  }
}

class StartCommand extends InterfaceCommand {
  /* static execute() {
    return 'start executing...';
  }
  */
}

console.log(StartCommand.execute());
