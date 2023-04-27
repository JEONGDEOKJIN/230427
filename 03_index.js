
// module.exports = BlockClass; 이렇게 해서 내보내졌음.


// 모듈을 가져오는 법 
const BlockClass = require('./02_index.js')
    // node.js 에서 모듈을 가져오는 법
    // js 는 생략 가능

console.log(BlockClass);
    // js 가 달라. 
    // html 에서 js 2 를 읽고, js3 를 읽으면 된다. 

    // '모듈을 내보내야' 밖에서 사용이 가능! 


    // 이렇게 하면 된다 
    // 현재 내용에 외부의 모듈을 모듈화 할 수 있는 메소드
        // require 메소드를 사용해서, 외부의 모듈을 현재 내용에 모듈화 가능 ⭐⭐⭐ 
        // npm 에서 받는 것도 이렇게 가져올 수 있음. ⭐⭐⭐ 