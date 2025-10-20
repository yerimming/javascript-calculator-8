import { Console } from "@woowacourse/mission-utils";

class ConsoleView {
    async getInput() {
        const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n");
        return input;
    }

    printResult(result) {
        Console.print(`결과 : ${result}`);
    }

    printError(error){
        Console.print(error.message);
    }
}

export default ConsoleView;