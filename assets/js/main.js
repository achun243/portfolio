
window.addEventListener('load', function(){

    // tab menu
    const tabbtn = document.querySelectorAll('.tabmenu ul button');
    const contTab = document.querySelectorAll('.content-wrp .tab');

    tabbtn.forEach(button => {
        button.addEventListener('click', function() {
            tabbtn.forEach(btn => btn.classList.remove('active'));
            contTab.forEach(content => content.classList.remove('active'));

            this.classList.add('active');

            const tabCls = this.classList[0];
            const tgcont = document.querySelector(`.content-wrp .tab.${tabCls}`);
            if (tgcont) {
                tgcont.classList.add('active');
            }
        });
    });


    // worklist effet
    const listItems = document.querySelectorAll('.work-list li');
    const sclTg = [window, document.querySelector('.wrp')];

    function updateScale() {
        const vh = window.innerHeight;

        listItems.forEach(li => {
            const rect = li.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            const ratio = centerY / vh * 100;

            let scale = 0.9;

            if (ratio >= 28 && ratio <= 48) {
                scale = 0.9 + (ratio - 28) / 30 * 0.1;
            } else if (ratio > 48 && ratio <= 68) {
                scale = 1 - (ratio - 48) / 30 * 0.1;
            }

            const opacity = ((scale - 0.9) / 0.1) * 0.4 + 0.6;

            li.style.transform = `scale(${scale})`;
            li.style.color = `rgba(255, 255, 255, ${opacity})`;
            li.style.transition = `transform 0.1s ease-in-out, color 0.1s ease-in-out`;
        });
    }

    sclTg.forEach(t => {
        if (t) t.addEventListener('scroll', updateScale);
    });
    window.addEventListener('resize', updateScale);

    updateScale();


    // img parallax
    const parallaxBoxes = document.querySelectorAll('.thumbnail .parallax');
    const main = document.querySelector("main");

    window.addEventListener('scroll', () => {
        parallaxBoxes.forEach(box => {
            const rect = box.getBoundingClientRect();
            const offset = rect.top * -0.08;
            box.style.transform = `translateY(${offset}px)`;
        });
    });


    // img load
    document.querySelectorAll('img').forEach(el => {
        const img = new Image();
        img.src = el.src;
    });


});