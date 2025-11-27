function setupObserver() {
    const isMobileWidth = window.matchMedia("(max-width: 576px)").matches;
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const runEffect = isMobileWidth || isTouchDevice;

    const items = document.querySelectorAll(".site-list .site-wrp");

    if (!runEffect) {
        if (observer) {
            observer.disconnect();
            observer = null;
        }
        items.forEach(el => el.classList.remove("active"));
        return;
    }

    if (!observer) {
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target;
                if (entry.intersectionRatio >= 0.2) {
                    el.classList.add("active");
                } else {
                    el.classList.remove("active");
                }
            });
        }, {
            root: null,
            rootMargin: "-40% 0px -40% 0px",
            threshold: [0.001, 0.2, 1]
        });

        items.forEach(item => observer.observe(item));
    }
}

let observer = null;
setupObserver();
window.addEventListener("resize", setupObserver);