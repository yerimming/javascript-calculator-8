import ConsoleView from "../view/ConsoleView.js";
import Calculator from "../model/Calculator.js";

class CalculatorController {
    constructor() {
        this.view = new ConsoleView();
        this.calculator = new Calculator();
    }

    async run() {
        try{
            const input = await this.view.getInput();
            const numbers = this.calculator.parseInput(input);
            this.calculator.validateNumbers(numbers);
            const result = this.calculator.sum(numbers);
            this.view.printResult(result);
        } catch(error) {
            this.view.printError(error);
            throw error;
        }
    }
}

export default CalculatorController;