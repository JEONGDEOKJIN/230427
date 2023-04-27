// 🔷 node.js 의 Repl

    // 브라우저에서 console과 비슷한 기능을 제공
    // 읽기(read), 해석(실행, evaluate), 출력(print), 반복(loop) 
    

// 🔷 Repl 사용하기

    // PS C:\Users\user11\Desktop\kga\week01\230427> node
        // [해석] Repl 사용하겠다! 라는 의미 
        // > 라 나오면 👉 자바스크립트 코드를 입력할 수 있다는 의미

    // > const str = "hello world, hello node"
    // undefined
    
    // > console.log(str);
        // [해석] 위에 적은 코드를 ⭐실행⭐! 

    // hello world, hello node
    // undefined
        // [해석] 
            // 그 결과, ⭐REPL 이⭐, 코드를 읽고(Read), 해석하고(Eval), 결과물을 출력(Print)함. 
            // 그리고, ⭐종료 전까지, 입력을 기다린다. (Loop)⭐

            // 또한, REPL 은, 기본적으로 함수값 return 함. -> so 이번에는 undefined 라고 나옴

    // [특징]
        // ⭐Repl 은 ⭐1~2줄⭐ 코드 테스트 용도
        // ⭐긴 코드는 js 파일로 만들고, 파일을 통째로 실행하는게 필요함.


// 🔷 파일을 만들어서 실행하기 
    // [예문]
        // `node 자바스크립트파일경로` 의 형식으로 적어야 함. 
        // ex) `node 01_index.js`
    
    // [주의]
        // 이걸, 터미널에 적어야 함. 
        // Repl 모드에서 적는건, 1~2줄의 js 만을 실행시키기 위한 것!


// 🔷 브라우저에서 this 와 노드js 에서의 this 
    // 브라우저의 전역 객체는 window > so, console.log 는 window.console.log 가 됨. 
    // node 의 전역 객체는 global> so, console.log 는 global.console.log 가 됨. 