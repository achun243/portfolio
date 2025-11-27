$(document).ready(function() {
    // #product로 이동하는 링크 클릭 시 부드러운 스크롤 기능 추가
    $('a[href="#product"]').click(function(event) {
        event.preventDefault(); // 기본 동작 막기

        const target = $('#product'); // 이동할 대상 영역

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600); // 600ms 동안 부드럽게 스크롤
        }
    });
});
