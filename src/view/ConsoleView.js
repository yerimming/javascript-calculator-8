import { Console } from "@woowacourse/mission-utils";

class ConsoleView {
    async getInput() {
        try {
            const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n");
            return input;
        } catch {
            throw new Error("[ERROR]");
        }
        
    }

    printResult(result) {
        Console.print(`결과 : ${result}`);
    }

    printError(error){
        Console.print("[ERROR]" + error.message);
    }
}

export default ConsoleView;