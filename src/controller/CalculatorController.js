import ConsoleView from "../view/ConsoleView.js";

class CalculatorController {
    constructor() {
        this.view = new ConsoleView();
    }

    async run() {
        const input = await this.view.getInput();
    }
}

export default CalculatorController;