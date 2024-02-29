let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

document.getElementById('parallax').style.height = document.getElementById('gate-right').clientHeight - 1 + 'px';
window.addEventListener('resize', () => {
    document.getElementById('parallax').style.height = document.getElementById('gate-right').clientHeight - 1 + 'px';
})

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';

    if (value<520){
        // 用代码实现fix的效果
        gateLeft.style.top = value + 'px';
        gateRight.style.top = value + 'px';

        gateLeft.style.left = value * 0.5 + 'px';
        gateRight.style.left = value * -0.5 + 'px';
    }
})
