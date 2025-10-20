class Calculator {
    parseInput(input){
        let numbersPart = input;
        const customSeperator = this.getCustomSeperator(input);

        if(customSeperator) {
            numbersPart = input.split(`\\n`)[1];
        }

        return this.splitNumbers(numbersPart, customSeperator);
    }

    getCustomSeperator(input){
        if(!input.startsWith("//")) return null;
        const match = input.match(/^\/\/(.*?)\\n/);
        return match ? match[1] : null;
    }

    splitNumbers(numbersPart, customSeperator = null) {
        let delimiters = ",:";

        if(customSeperator) {
            delimiters += customSeperator;
        }

        const regex = new RegExp(`[${delimiters}]`);
        return numbersPart.split(regex);
    }

    validateNumbers(numbers) {
        numbers.forEach((value) => {
            const num = Number(value);
            if(isNaN(num) || num < 0) {
                throw new Error("[Error]");
            }
        });
    }

    sum(numbers) {
        return numbers.reduce((acc, cur) => acc + Number(cur), 0);
    }
}

export default Calculator;