var clicks = 0;
const button = document.querySelector("button.btn-start");
gsap.registerPlugin(ScrollTrigger);
let tl1 = gsap.timeline({ defaults: { duration: 2, ease: "power4.out" }, paused: true });
let tl2 = gsap.timeline({ defaults: { duration: 2, ease: "power4.out" } });

tl1.from('nav', { opacity: 0, y: -100 }, "-=2")

tl2.from('.overlay-screen h1', { opacity: 0, y: -200 })
    .from('.overlay-screen p', { opacity: 0, y: -50, delay: .58 }, '=-2')
    .to('.overlay-screen svg', { clipPath: 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)' }, '-=1')
    .from('.overlay-screen button', { scale: 0, rotate: -14, duration: 1, delay: 1.3 }, '-=2')

button.addEventListener('click', () => {
    button.classList.add('active')


    var endTimeline = tl2.to('.overlay-screen', { opacity: 0, y: -200 })
    if (endTimeline) {
        setTimeout(() => {
            tl2.from('.transition .thumbnail', { opacity: 0, x: 100 })
                .from('.transition .content', { opacity: 0, x: -100 }, '-=2')
                .to('.transition .content img', { duration: 2.5, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, '-=1.5')

            gsap.timeline({
                defaults: {
                    duration: 2, ease: "power4.out"
                }, scrollTrigger: {
                    trigger: '.skills',
                    start: 'top center',
                }
            })
                .to('.skills .card', {
                    opacity: 1, duration: 1,
                })
                .from('.skills .card .col-md-4', {
                    delay: .5, duration: .5, y: -100, stagger: .5, opacity: 0
                }, '-=1')

            gsap.timeline({
                defaults: {
                    duration: 2, ease: "power4.out"
                }, scrollTrigger: {
                    trigger: '.about',
                    start: 'top center'
                }
            }).from('.about .about-img', { x: -100, opacity: 0 })
                .from('.about .content', { x: 100, delay: .6, opacity: 0 }, '-=2')

            gsap.timeline({
                defaults: {
                    duration: 2, ease: "power4.out"
                }, scrollTrigger: {
                    trigger: '.artworks',
                    start: 'top center'
                }
            }).from('.artworks h3', { y: -100, opacity: 0 })
                .from('.artworks p', { y: 50, delay: .6, opacity: 0 }, '-=2')
                .from('.artworks .owl-carousel', { x: -100, opacity: 0 }, '-=1.5')

            gsap.timeline({
                defaults: {
                    duration: 2, ease: "power4.out"
                }, scrollTrigger: {
                    trigger: '.contact',
                    start: 'top bottom'
                }
            }).from('.contact h3', { opacity: 0, y: -100, delay: 1 })
                .from('.contact p', { opacity: 0, y: 45, duration: .5 }, '-=.8')
                .from('.contact .card i', { scale: 0, rotate: 45, stagger: .45, duration: .4 }, '-=1')
                .from('.contact .card .caption', { y: 80, opacity: 0, stagger: .3, duration: .3, delay: .2 }, '-=1.3')

            document.querySelector('.overlay-screen').classList.add('hidden')
            document.querySelector('.transition').classList.remove('hidden')
        }, 1500);

        let hiddenClass = document.querySelectorAll('.d-none')
        hiddenClass.forEach(el => {
            el.classList.remove('d-none')
        });
    }
    setTimeout(() => {
        button.classList.remove('active')
    }, 1000)

    if (clicks == 0) {
        tl1.restart(true);
    }
    clicks++
})