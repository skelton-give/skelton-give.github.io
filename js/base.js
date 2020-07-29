var judge = 1;
if (judge > 0) {
    // alert("judgeは正の数です。");
} else if (judge < 0) {
    // alert("judgeは負の数です。");
} else if (judge == 0) {
    // alert("judgeは0です。");
} else {
    // alert("judgeは数字ではありません。");
}

function hello(language) {
    
    var message = "";
    
    if (language == 1) {
        message = "안녕하세요（こんにちは）";
    } else if (language == 2) {
        message = "안녕히가세요（さようなら）";
    } else if (language == 3) {
        message= "잘 먹겠습니다（いただきます）";
    } else if (language == 4) {
        message= "미안 해요（ごめんなさい）";
    }
    
    alert(message);
}
