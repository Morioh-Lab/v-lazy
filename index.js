export default function (Vue) {

    Vue.directive('lazy', {
        mounted(el, { value }) {
            if (/\S+/.test(value)) {
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry && entry.isIntersecting) {
                            if (el.tagName == 'IMG') {
                                el.src = value;
                            } else {
                                el.style.backgroundImage = `url("${value}")`;
                            }

                            observer.disconnect();
                        }
                    });
                });

                observer.observe(el);
                el.$lazy = observer;
            }
        },
        beforeUnmount(el) {
            if (el.$lazy) {
                el.$lazy.unobserve(el);
            }
        }
    });
};