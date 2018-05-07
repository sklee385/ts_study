
(() => {
    // 기본적인 타입의 종류 
    let num: number = 1;
    let str: string = "";
    let is: boolean = true;
    let nu: null = null;
    let obj: object = {};
    // tslint:disable-next - line;:only-arrow - functions;
    // tslint:disable-next-line:only-arrow-functions
    let fn = function() {
        return 1;
    };
    let fn1 = () => 1 + 1;
    /* 
        enum type
        숫자와 문자만 가능
     */ 
    enum WeekDay {Mon = 10, Tue, Wed, Thu}

    console.log(WeekDay.Mon);   // 10
    console.log(WeekDay.Tue);   // 11

    enum enum_week {Mon = "월요일", The = "화요일"}
    console.log(enum_week.Mon); // 월요일

    /* 
        any 타입 
        제약이 없는 타입으로 어떤 타입의 값을 받아 들일 수 있다.
        왠만하면 사용하지 말것
        타입스크립트 이념과 맞지 않는 형태
        모든 타입의 최상의 타입
     */

    let anyNo: any = 1;
    anyNo = "1";
    anyNo = true;
    /* 
    배열과 제네럴
     */

    let arr_test1: number[] = [1, 2, 3];
    arr_test1.push(1);

    let arr_test2: number[] = [123];
    // 문자와 숫자로 제한을 할 경우 유니언 타입으로 선언
    let arr_test3: Array<number|string> = [1, 2, 3];
    let arr_test4: Array<() => string> = [() => "123"];
    console.log(arr_test4[0]());

    // 튜플 타입
    let tuple_test1: [number, string] = [1, "1"];
    console.log(tuple_test1[0]);
})();
