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
        BodySetBackgroundColor('#10171c');
        headerSetBackgroundColor('#10171c');
        pSetColor('#ffffff');
        h1SetColor('#ffffff');
        BodySetColor('white');
        LinkSetColor('powderblue');
        self.value = 'night';
    }
    else {
        BodySetBackgroundColor('#ffffff');
        headerSetBackgroundColor('#ffffff');
        pSetColor('#80A5F5');
        h1SetColor('#80A5F5');
        BodySetColor('#80A5F5');
        LinkSetColor('blue');
        self.value = 'day';
    }
}
