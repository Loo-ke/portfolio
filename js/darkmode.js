  // 링크 색 바꾸기
function LinkSetColor(color){
    var alist = document.querySelectorAll('a');
    for(var i = 0; i < alist.length; i++)
        alist[i].style.color = color;
}

// 바디 글자색 바꾸기
function BodySetColor(color){
    document.querySelector('body').style.color = color;
}
//p 글자색 바꾸기
function pSetColor(color){
    document.querySelector('p').style.color = color;
}
//h1 글자색 바꾸기
function h1SetColor(color){
    document.querySelector('h1').style.color = color;
}
//h2 글자색 바꾸기
function h2SetColor(color){
    document.querySelector('h2').style.color = color;
}

// 바디 배경색 바꾸기
function BodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
}
//header 배경색 바꾸기
function headerSetBackgroundColor(color){
    document.querySelector('header').style.backgroundColor = color;
}

//

// 주간, 야간모드
function day_night_handler(self) {
    var target = document.querySelector('body');
    if (self.value == 'day') {
        // 다크일때
        BodySetBackgroundColor('#13161c');
        headerSetBackgroundColor('#13161c');
        pSetColor('#ffffff');
        h1SetColor('#ffffff');
        h2SetColor('#ffffff');
        BodySetColor('white');
        LinkSetColor('#13161c');
        self.value = 'night';
    }
    else {
        //라이트
        BodySetBackgroundColor('#ffffff');
        headerSetBackgroundColor('#ffffff');
        pSetColor('#80A5F5');
        h1SetColor('#80A5F5');
        h2SetColor('#80A5F5');
        BodySetColor('#000000');
        LinkSetColor('#000000');
        self.value = 'day';
    }
}
