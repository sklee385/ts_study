// if 문
(()=>{
    let num_test1 = 0;      // number는 0 일때 false 
    let str_test1 = "";     // string는 빈 값일 때 false 
    if(!str_test1){
        console.log(12);
    }
    let str_test2: string = num_test1 + "";
    let num_test2: number = +str_test2;
    console.log(typeof str_test2 );
    console.log(typeof num_test2);
})();
// for문
(() =>{
    for (let i = 0; i < 10; i++) {
        console.log(`i의 값은 ${i}`);
    }
})();