import gsap from 'gsap';

window.addEventListener('load', function() {

/*     let circle = document.querySelector('.test');
    let circleL = parseFloat(getComputedStyle(circle).left)
    let circleT = parseFloat(getComputedStyle(circle).top)

    circle.style.left = circleL + 'px';
    circle.style.top = circleT + 'px';
    let blocIntroWhite = document.querySelector('.section-intro .block-white');
    let blocWRight;
    let blocWLeft;
    let blocWTop;
    let blocWBottom;
    let vx = 5;
    let vy = 2;

    executeJSIndex();
    deplaceTiretMenu();
    window.setTimeout(infosBlocWhite, 3000);
    window.setTimeout(() => circle.style.display = "block", 3050);
    window.setTimeout(animCercle, 3100);
    
 */

    bulleHover();

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
                     height: '90vh'
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

            gsap.to('h3.subtitle', { opacity:1, delay:5, left: '37.2%' });
            gsap.to('.arrow-scroll', { opacity:1, delay:3, left: '50%' });
        
         
                gsap.to(document.querySelectorAll('.menu li'),  {
                         opacity:1,
                          delay:3,
                         stagger: .1
                    });
                
            window.setTimeout(() => {

                document.querySelector('.menu .tiret-anim').style.opacity = 1;

            } ,3000)

            gsap.to(document.querySelectorAll('nav .logos li'),  {
                opacity:1,
                 delay:3.5,
                stagger: .1
           });

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

    function deplaceTiretMenu () {

       let liensMenu = document.querySelectorAll('.menu li a')
       let tiretAnim = document.querySelector('.menu .tiret-anim')

       liensMenu.forEach(elt => {

        elt.addEventListener('click', (e)=> {
            
            e.preventDefault();
            
            //supprime le active des elts hors clique
            liensMenu.forEach(elt1 => { elt1.classList.remove('active') })

            elt.classList.add('active');

            let distanceElt = elt.offsetLeft;
            console.log(distanceElt)
            let tailleElt = elt.offsetWidth;
            
            gsap.to(tiretAnim, {
                left: distanceElt,
                width: tailleElt,
                ease: "elastic.out(1.2, 1)",
                duration: 1.5

            })
        })
       })
    }

    function infosBlocWhite() {

        blocWLeft = blocIntroWhite.getBoundingClientRect().left;
        blocWRight = blocIntroWhite.getBoundingClientRect().right;
        blocWTop = blocIntroWhite.getBoundingClientRect().top;
        blocWBottom = blocIntroWhite.getBoundingClientRect().bottom;
    }
    
    function animCercle() {

        if(parseFloat(circle.style.left) + 100 > blocWRight || parseFloat(circle.style.left) < blocWLeft) {

           vx = -vx;
        }

        if(parseFloat(circle.style.top) < blocWTop || parseFloat(circle.style.top) + 100 > blocWBottom) {
           
            vy = -vy;
        }
        
        circle.style.left = parseFloat(circle.style.left) + vx + 'px';
        circle.style.top = parseFloat(circle.style.top) + vy + 'px';

        requestAnimationFrame(animCercle)
    }  

    function bulleHover() {

        let bulle = document.querySelector('.portfolios--projets .bulle-hover');

        let liensProjets = document.querySelectorAll('.portfolios--projets nav a');

        let liensActifPrecedent = 0;
        let liensActifL = document.querySelector('.portfolios--projets nav a:first-child');

        liensProjets.forEach(elt => {

            elt.addEventListener('click', (e) => {

                e.preventDefault();

                liensActifPrecedent = document.querySelector('.portfolios--projets nav a.active');
             
                liensProjets.forEach(elt => elt.classList.remove('active'))
                
                elt.classList.add('active');

                liensActifL = liensActifPrecedent !== null ? liensActifPrecedent.offsetLeft : 0;  
                let liensActifW = liensActifPrecedent !== null ? liensActifPrecedent.offsetWidth : 0;                

                let lgElt = elt.offsetWidth;
                let posElt = elt.offsetLeft;

                if(liensActifL <= posElt) {

                    gsap.to(bulle, {
                        width: posElt+lgElt-liensActifL,
                        duration: .1,
                       ease:"power2.out"
                    })
    
                    gsap.to(bulle, {
                        delay: .1,
                        left:posElt,
                        width: lgElt,
                       ease:"power2.out"
                    })    
                }
                else {

                    gsap.to(bulle, {
                        left: posElt,
                        width: liensActifL - posElt + liensActifW,
                      duration: .1,
                      ease:"power2.out"
                    })
                
                    gsap.to(bulle, {
                        delay: .1,
                        width: lgElt,
                        ease:"power2.out"
                    })    
                }
            });
        })
    }   

    const eltsGrille = document.querySelectorAll('.grid .projet--card');
    afficherGrille(eltsGrille)

    function afficherGrille(eltsAAfficher, eltAMasquer = []) {

        let largeurElt = 0;
        let hauteurElt = 0;
        const gap = 24;
        const largeurGrille = document.querySelector('#portfolios .grid').clientWidth;
        let largeurTot = 0;
        let hauteurLigne = 0;

        eltsAAfficher.forEach(elt => {
            
            largeurElt = elt.clientWidth;
            hauteurElt = elt.clientHeight;

            eltAMasquer.forEach(eltam => {

                gsap.to(eltam, { scale: 0 })
            })

            gsap.fromTo(elt, {
                scale: 0,
                left: Math.floor(Math.random() * (800 - 50) + 50),
                top: Math.floor(Math.random() * (400 - 50) + 50)
            }, {
                scale: 1,
                left: largeurTot,
                top: hauteurLigne,
            })

            if((largeurTot+largeurElt+gap) <= largeurGrille) 
                largeurTot += largeurElt + gap;
            
            else {
                hauteurLigne += hauteurElt + gap;
                largeurTot = 0;
            }
        })

        document.querySelector('.grid').classList.add('.nouvelleTaille');
        document.querySelector('.grid.nouvelleTaille').style.maxHeight = hauteurLigne  +'px';

        trierGrille();
    }

    //faire hauteur automatique
    function trierGrille() {

        /* utiliser l'écouteur resize pour ajuster la grille en fonction de la taille d'écran */

        const navTri = document.querySelectorAll('#portfolios nav a');
        const listeEltsNonTrier = document.querySelectorAll('#portfolios .grid .projet--card');

        let listeEltsTrier = [];
        let listeEltsAMasquer = [];
        let dataTri = "";

        navTri.forEach(elt => {

            elt.addEventListener('click', (e) => {

                dataTri = elt.dataset.tri;

                if(dataTri === 'all')
                    afficherGrille(listeEltsNonTrier);

                else {
                    
                    listeEltsNonTrier.forEach(elt => {
                        
                        if(elt.dataset.categorie === dataTri)
                            listeEltsTrier.push(elt);
                        else
                            listeEltsAMasquer.push(elt);
                    })
                    afficherGrille(listeEltsTrier, listeEltsAMasquer);
                }
            });           
        })

        elt.removeEventListener('click');
    }

});

