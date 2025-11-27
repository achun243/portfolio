window.addEventListener('load', function(){


    const wrpelm = document.querySelector('.visual .wrp');
    if (wrpelm) {
        wrpelm.classList.add('active');
    }


    // aos
    const lazyelm = document.querySelectorAll('.lazy-up');
    const options = {
        rootMargin: '0px 0px -30% 0px',
    };
    let observer = null;

    function initObserver() {
        if (observer) {
            observer.disconnect();
        }

        observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    obs.unobserve(entry.target);
                }
            });
        }, options);

        lazyelm.forEach(element => {
            if (!element.classList.contains('active')) {
                observer.observe(element);
            };
        });
    };

    window.addEventListener('resize', function(){
        lazyelm.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        });
        initObserver();
    });

    initObserver();


    const closeBtn = document.querySelector('.btn-close');

    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();

            try {
                window.close();
            } catch (e) {
                console.error("브라우저 보안 정책으로 인해 창을 자동으로 닫을 수 없습니다.", e);
            }
        });
    }


});