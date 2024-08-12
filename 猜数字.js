

function c(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a;

function startGame() {
    a = c(1, 20);
    console.log(a);

    while (true) {
        let b = prompt('请输入一个 1 到 50 的数字');
        if (b === null) {  // 如果用户点击了取消
            alert('您已退出游戏');
            break;  // 退出循环，结束游戏
        }
        b = parseInt(b);
        if (a === b) {
            alert('猜对了');
            a = c(1, 50);
            console.log(a);
        } else if (b > a) {
            alert(`猜大了`);
        } else if (b < a) {
            alert(`猜小了`);
        }
    }
}

function helpGuide() {
    alert('在这个游戏中，您需要猜测一个 1 到 50 之间的随机数字。每次猜测后，系统会提示您猜大了还是猜小了，直到您猜对为止。');
}

function banbenGuide() {
    alert('此版本为1.01,在下个1.02版本将更新倒计时的趣味玩法，尽情期待');
}




