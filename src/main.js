import gsap from 'gsap';

window.addEventListener('load', function() {

    executeJSIndex();

    function executeJSIndex() {

        const pathIsambert = document.querySelectorAll('#isambert g path');
        const pathMaxime = document.querySelectorAll('#maxime g path');

        /* Animation INTRO HOME */
        gsap.to('.block-red.av', {
            width: window.innerWidth,
            left: 0,
            delay:.5,
            duration: .7,
            ease: 'Power3.easeInOut'
        });

        gsap.to('.block-red.av',{
            width: '50vw',
            delay:1,
            duration:.7,
            ease: 'Power3.easeInOut'
        });

        if(window.outerWidth > 1100) {

             if(window.outerWidth > 900) {
                 gsap.to('.section-intro', {
                     scale: .93,
                     duration:.7,
                     delay: 1.4,
                 });
             }
        }

        window.setTimeout(function() {

            for(var i=0 ; i < pathIsambert.length ; i++) {

                gsap.to('#'+pathIsambert[i].id, {
                    strokeDashoffset: 0,
                    duration: 1.5,
                });
            }
        }, 2200);

        window.setTimeout(function() {
            
            for(var i=0 ; i < pathMaxime.length ; i++) {

                gsap.to('#'+pathMaxime[i].id, {

                    strokeDashoffset: 0,
                    duration: 1.5,
                });
            }

             gsap.to('#isambert path', {
                fillOpacity:1,
                delay:1.8
            });

            gsap.to('#maxime path', {
                fillOpacity:1,
                delay:1.8
            });
        }, 3400);

            var lg = window.outerWidth;
            var left = '44.2%';

            if(lg > 1722) { left = '44.2%'; }
            else if(lg <= 1722 && lg > 1595) { left = '43%'; }
            else if(lg <= 1595 && lg > 1440) { left = '42.3%'; }
            else if(lg <= 1440 && lg > 1300) { left = '41.5%'; }
            else if(lg <= 1300 && lg > 1180) { left = '40.8%'; }
            else if(lg <= 1180 && lg > 1082) { left = '39.8%'; }
            else if(lg <= 1082 && lg > 992) { left = '39%'; }
            else if(lg <= 992 && lg > 908) { left = '37.8%'; }
            else if(lg <= 908 && lg > 822) { left = '36.7%'; }
            else if(lg <= 822 && lg > 756) { left = '35.5%'; }
            else if(lg <= 756 && lg > 685) { left = '38%'; }
            else if(lg <= 685 && lg > 630) { left = '37%'; }
            else if(lg <= 630 && lg > 575) { left = '35%'; }
            else if(lg <= 575 && lg > 508) { left = '36%'; }
            else if(lg <= 508 && lg > 466) { left = '34.5%'; }
            else if(lg <= 466 && lg > 425) { left = '37%'; }
            else if(lg <= 425 && lg > 388) { left = '35.7%'; }
            else if(lg <= 388 && lg > 354) { left = '34.5%'; }
            else if(lg <= 354 && lg > 326) { left = '33.9%'; }

            gsap.to('h3.subtitle', { opacity:1, delay:5, left: '42.2%' });

        /*
         var text = document.querySelector(".textChange");
        var tl = new TimelineMax({repeat:-1, yoyo:false, repeatDelay:2, delay:5});

        tl.to(text, 0.8, {text:{value:"Développeur Front-End", type:'diff', padSpace:true, ease:Linear.easeNone}, speed: 3});
        tl.to(text, 0.8, {text:{value:"Curieux", padSpace:true, type:'diff', ease:Linear.easeNone},delay:2, speed: 3});
        tl.to(text, 0.8, {text:{value:"Développeur Drupal", type:'diff', padSpace:true, ease:Linear.easeNone}, speed: 3, delay:2});
        tl.to(text, 0.8, {text:{value:"Rigoureux", padSpace:true, type:'diff', ease:Linear.easeNone},delay:2, speed: 3});
        tl.to(text, 0.8, {text:{value:"Développeur web", padSpace:true, type:'diff', ease:Linear.easeNone},delay:2, speed: 3});
        tl.to(text, 0.8, {text:{value:"Proactif", padSpace:true, type:'diff', ease:Linear.easeNone},delay:2, speed: 3});
 */
    }

});

