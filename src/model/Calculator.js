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

}

export default Calculator;