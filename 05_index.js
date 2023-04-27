// 모듈 

// 'window 를 생략해서 사용하던 것'
    // ex) window.console.log( ) 처럼 쓰지 않았음. 
    // 전역 객체니까 > 생략하고 썼음

    // 마찬가지로, global과 module 을 생략해서, 작성할 수 있다. 

    console.log(module.exports === exports)
        // true 가 나옴 
        // ⭐ module 을 생략 가능⭐

    exports.obj = {a : 1};
        // 이렇게 모듈을 작성함!!!!! 

    exports.add = () => {
        return 2;
    }
    // add 라는 '함수' 가 있어 

    function add2() {
        console.log("나는 함수임")
    }
    exports.add2 = add2;