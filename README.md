# javascript-calculator-precourse

## ✅ 기능 구현 목록

- [x] 문자열 입력 받기
- [x] 구분자를 기준으로 구분하기
  - [x] `,`, `:` 기준으로 구분하기
  - [x] 커스텀 구분자 기준으로 구분하기
- [x] 구분한 숫자가 양수인지 확인
  - [x] 잘못된 값일 시 에러 처리 후 종료
- [x] 구분한 숫자 더하기
- [x] 결과 출력하기

## 💻 구현 내용

### 커스텀 구분자 처리

```
getCustomSeperator(input){
    if(!input.startsWith("//")) return null;
    const match = input.match(/^\/\/(.*?)\\n/);
    return match ? match[1] : null;
}
```

- 정규표현식을 사용해 `//`와 `\n` 사이에 있는 문자를 추출.
- match 메서드로 추출한 값이 있는 경우, 두 번째 값이 커스텀 구분자이므로 index 1번 값을 반환.
- match 메서드에 매치되는 결과가 없는 경우에는 null 반환.
- `\n`이 줄바꿈을 의미하는 이스케이프 문자로 인식되어 제대로 인식되지 않는 문제가 있었는데 앞에 `\`을 붙여 `\\n`으로 사용하니 `\n`을 그냥 문자로 사용할 수 있었음.
- `/`도 마찬가지로 인식되지 않는 문제가 있었는데 앞에 `\`을 붙여 사용하니 인식됨.

### 문자열 구분자로 구분

```
splitNumbers(numbersPart, customSeperator = null) {
    let delimiters = ",:";

    if(customSeperator) {
        delimiters += customSeperator;
    }

    const regex = new RegExp(`[${delimiters}]`);
    return numbersPart.split(regex);
}
```

- `,`,`:`, 커스텀 구분자를 사용해 문자열을 분리.
- 배열로 저장된 분리한 문자열을 반환.

### 입력값 잘못된 경우 에러 처리 후 종료

```
validateNumbers(numbers) {
    numbers.forEach((value) => {
        const num = Number(value);
        if(isNaN(num) || num < 0) {
            throw new Error("[ERROR]");
        }
    });
}
```

- 입력값이 구분자와 양수 외에 다른 문자로 이루어져 있는지 확인하는 메서드.
- 구분자로 구분한 값이 저장되어 있는 배열 numbers를 forEach로 순환하면서 확인.
- Number 메서드를 사용했을 때 숫자로 변경되지 않는 문자면 NaN이 저장되므로 isNaN 메서드를 사용해서 숫자인지 아닌지 확인.
- 변경된 숫자는 음수인지 아닌지 확인
- 두 조건 중 하나라도 만족하지 않으면 `throw new Error()`를 사용해 메시지와 함께 에러를 발생시킨 후 애플리케이션을 종료.

### 추출한 숫자 더하기

```
sum(numbers) {
    return numbers.reduce((sum, value) => sum + Number(value), 0);
}
```

- reduce 메서드를 사용해 배열을 돌면서 배열의 값들을 모두 더해 반환.
- 배열에 있는 값들이 문자열이기 때문에 Number를 사용해 숫자로 변환.

## ⭐️ 실행 결과

### 옳은 입력

- `,`를 구분자로 사용한 경우
  <img width="487" height="130" alt="Image" src="https://github.com/user-attachments/assets/6e2b88ec-b890-490a-93fc-02843194e6d9" />

- `:`를 구분자로 사용한 경우
  <img width="537" height="133" alt="Image" src="https://github.com/user-attachments/assets/d2416705-a6d6-482e-9c81-04c0f21b65ca" />

- 커스텀 구분자를 입력한 경우
  <img width="476" height="131" alt="Image" src="https://github.com/user-attachments/assets/092f4ef2-536c-4e1a-889d-1818407f1986" />

### 잘못된 입력 시

- 양수가 아닌 문자를 입력한 경우
  <img width="579" height="117" alt="Image" src="https://github.com/user-attachments/assets/1f7545b4-22e7-45a7-a58a-9a5156053d30" />

- 양수가 아닌 음수를 입력한 경우
  <img width="557" height="115" alt="Image" src="https://github.com/user-attachments/assets/0eb369b1-9ae1-4829-833c-4ad180d6cee3" />

### 테스트 결과

<img width="1656" height="712" alt="Image" src="https://github.com/user-attachments/assets/01186a9e-e698-4d2d-b265-c83746ce533c" />
