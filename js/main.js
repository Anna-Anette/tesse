(function () {
    var curPos = 0,
        wrapper = document.getElementById('slider_inner'),
        leftArrow = document.getElementById('left'),
        rightArrow = document.getElementById('right'),
        slide = document.getElementsByClassName('slide')[0],
        elemWidth = slide.offsetWidth,
        dot = document.getElementsByClassName('dot');

    function leftArrowHandler() {
        if (curPos < 0) {
            curPos += elemWidth;
            wrapper.style.left = curPos + 'px';
        }
    }

    function rightArrowHandler() {
        if (curPos > -(wrapper.childElementCount - 1) * elemWidth) {
            curPos -= elemWidth;
            wrapper.style.left = curPos + 'px';
        }
    }

    function moveSlide(x) {
        wrapper.style.left = -elemWidth * x + 'px';
    }

    rightArrow.addEventListener('click', rightArrowHandler);
    leftArrow.addEventListener('click', leftArrowHandler);

    function setEvent(e) {
        dot[e].onclick = function () {
            moveSlide(e);
        };
    }

    function addEvents(dot) {
        for (var i = 0; i < dot.length; i++) {
            setEvent(i);
        }
    }

    addEvents(dot);
}());
