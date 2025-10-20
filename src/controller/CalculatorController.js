import ConsoleView from "../view/ConsoleView.js";
import Calculator from "../model/Calculator.js";

class CalculatorController {
    constructor() {
        this.view = new ConsoleView();
        this.calculator = new Calculator();
    }

    async run() {
        const input = await this.view.getInput();
        const numbers = this.calculator.parseInput(input);
    }
}

export default CalculatorController;