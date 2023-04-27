// 🔷 node js 의 내장 모듈 
    // node js 에서 미리 만들어놓은 모듈을 '내장 모듈' 이라고 함
    // require 에서 모듈 경로와 파일명을 적는게 아님. ⭐⭐ 
    // '모듈의 ⭐이름만!' 적으면 됨 

    // 운영 체제의 정보가 들어있는 모듈
    const { Console } = require('console');
const os = require('os');
    console.log(os)
        // 이렇게 미리 만들어둔 모듈을 쓸 때는 '이름만!' 쓰면 됨
        // 서버 열고 할 때, os 들어가게 됨

// 🔷 node.js 의 내장 객체
    // node의 전역 객체에는 global 객체, 우리가 js 에서 보던 window 처럼, 전역 객체가 있음. 
    // ⭐런타임 환경⭐이 다르기 때문에, ⭐전역 객체⭐, 도 다르다.
    // 노드 에서 전역객체는 ⭐global⭐  이다. 
    
    // 자바스크립트에 this 를 작성하고, 확인하면, module.exports⭐ 가 뜬다.
    // 참조가 들어가기 때문에, 다르지 않을까? 
        // 왜냐면, 본인을 참조 시키기 위해서, exports 가 뜨는 것 같음. 
        // 하지만, 전역 객체는 global 
        // 이건, global 객체는 개념만 알아두기. 사용할 일은 없다.  


// 🔷 node js  모듈의 실행 컨텍스트와 전역 컨텍스트가 다르기 때문에, 
    // node js 에서는 모듈은 각각의 파일 스코프를 갖기 때문에, 
    // this 는 모듈 자체를 가르키게 된다. 
    // module exports 로 내보내기까, this 는 그 파일 자체를 가리키게 됨. 😥😥😥😥😥❓❓❓❓❓ 


// 🔷 레포모드 켜보자 
    // > global.console.log()

    // global 객체 안에, console.log 라는 메소드가 있는 것 임. 
    // global 이 ⭐전역 객체⭐ 임 
    // 브라우저에서는 window 객체에 있던거지. 
    // 다만, 내용은 비슷하지만, 다른 메소드임 

    // global.console.log()
    // global.console.time("a")
        // 코드 실행 되는 시간을 체크
        // 코드 시작 시간 
        // 매개변수는'해당 테스트 이름' 을 '문자열' 로 작성
        // 시작할 테스트, 이름을 '문자열' 로 


    // > global.console.timeEnd("a")
        // 코드 종료 후 시간을 출력
        // 끝낼 테스트,이름을 '문자열'

        
// 🔷 table
    // 레포모드에서는 띄어쓰기 없애기
        // global.console.table({a : { name : "안녕" }, gb : { name : "안뇽~2" }, c : { name : "안녕~3" }})
        // 전달된 객체를 '표' 처럼 보여준다. 


// 🔷 __filename, __dirname 
    // 나중에 필요할 때가 생기니 잘 알아둘 것 ⭐⭐⭐ 

    // 파일 실행시키면, 실팽 파일의 이름까지 보여줌 
    // 이 파일의 위치 및 이름 까지 
    console.log(__filename);
        // C:\Users\user11\Desktop\kga\week01\230427\04_index.js
        // 이렇게 터미널에서 `04_index.js` 파일 실행하면 1) 경로 2) 파일 이름 까지 뜸 

    console.log(__dirname);
        // 터미널에서 `04_index.js` 파일 실행하면 > 실행한 파일의 폴더 까지 포여줌



// 🔷 process 객체
    console.log(process.env)
        // OS 관련 등등 이 있음. 

    console.log(process.version)    // 노드의 설치 버전
        // nove -v 와 동일한 명령

    console.log(process.execPath)   // 노드가 설치 되어 있는 경로

    console.log(process.cpuUsage())   // cpu 사용량