// '모듈' 이란? 
    // 하나의 파일에 기능을 모두 작성해 버리면, 
    // 협업도 힘들고, 
    // 수정도 힘들고 
    // 유지보수 힘들어 
    // 파일을 규칙에 맞게 나눌 수 있으면, 나누는 것이 좋다. ⭐⭐⭐ 
        // 이 파일에 있는 걸 실행하고 > 그 다음에 이걸 실행하고 ⭐⭐⭐⭐⭐ 
        // ⭐ 파일을 나누는 것 ⭐
        // ⭐ 하나의 큰 프로그램 의 '작은 단위'⭐ 가 모듈

    // 모듈은 '각각의 파일 단위로 구분'
        // 파일의 내용은 필요한 기능들의 함수나 변수들이 포함되어 있는 것. 
    
    // '작은 모듈' 만들어보자



    const BlockClass = [ 
        {
            name : "안녕", 
            age : 1 , 
            comment :  function() {
                console.log(this.name + "이야")
            }
        }, {
            name : "안녕2️⃣번", 
            age : 1 , 
            comment :  function() {
                console.log(this.name + "이야")
            }
        }
    ]


    // 여기에서 이 내용을 작성했고, 다른파일에서 이 내용을 실행시키면, 오류가 남 
    // 이 내용을 모듈로 내보내서, 다른 파일에서 가져와서, 모듈화 시켜서 사용 ⭐⭐⭐⭐⭐⭐ 

    // 그러면, 어떻게 내보내? 
    // node js 의 global 객체 안에는, exports 라는게 있음. 
    // '해당 파일의 리턴값'을 내보내 줄 수 있다. 
        // ex) 이 함수를 실행하면, 1 이 나온다. 
        // 근데 '파일' 의 리턴값? 
        module.exports = BlockClass;
            // 이렇게 하면, 파일의 반환값이 = Blockclass 가 됨. ⭐⭐⭐⭐⭐ 
            // 파일에서 내보내는 법 임! 

