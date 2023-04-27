
// const _var = require('./02_module/var')
// console.log(_var)

const BlockClass = require('./02_수업_모듈_파일내보내기.js')
    // [syntax]
        // 확장자 생략가능

console.log(BlockClass)
    // ❓ 이걸 어떻게 실행시켜야 할지 모르겠음.

    // [해석]
        // '모듈을 내보내야' 외부에서 사용 가능 
        
        // require 메소드를 사용해서, 현재의 내용에, '외부의 모듈을 모듈화' 할 수 있음. 
        // require 메소드 사용해서, 외부 모듈을, 가져와서 쓸 수 있다는 말. 
        // npm 도 이 원리도 가져와서 쓰게 됨. 

        