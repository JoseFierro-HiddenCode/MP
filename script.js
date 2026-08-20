/* =====================================================
   MP ❤️
   Corazón romántico de neón
===================================================== */


/* =====================================================
   PARTICULAS
===================================================== */

const particles =
    document.getElementById("particles");


const totalParticles =
    window.innerWidth < 600
        ? 90
        : 180;


for (
    let i = 0;
    i < totalParticles;
    i++
) {

    const particle =
        document.createElement("div");


    particle.className =
        "particle";


    particle.style.left =
        Math.random() * 100 + "vw";


    particle.style.top =
        Math.random() * 100 + "vh";


    const size =
        Math.random() * 2.5 + 1;


    particle.style.width =
        size + "px";


    particle.style.height =
        size + "px";


    particle.style.setProperty(
        "--duration",
        Math.random() * 3 + 2 + "s"
    );


    particle.style.animationDelay =
        Math.random() * 4 + "s";


    particles.appendChild(
        particle
    );
}


/* =====================================================
   CLICK — PEQUEÑA EXPLOSIÓN DE LUZ
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        for (
            let i = 0;
            i < 10;
            i++
        ) {

            const spark =
                document.createElement("div");


            spark.textContent =
                "♥";


            spark.style.position =
                "fixed";


            spark.style.left =
                event.clientX + "px";


            spark.style.top =
                event.clientY + "px";


            spark.style.color =
                "#ff4db8";


            spark.style.fontSize =
                "13px";


            spark.style.pointerEvents =
                "none";


            spark.style.zIndex =
                "100";


            spark.style.textShadow =
                "0 0 10px #ff1493";


            document.body.appendChild(
                spark
            );


            const angle =
                Math.random()
                *
                Math.PI
                *
                2;


            const distance =
                Math.random()
                *
                90
                +
                30;


            spark.animate(

                [

                    {
                        transform:
                            "translate(-50%, -50%) scale(.2)",

                        opacity: 1
                    },

                    {

                        transform:
                            `
                            translate(
                                calc(-50% + ${Math.cos(angle) * distance}px),
                                calc(-50% + ${Math.sin(angle) * distance}px)
                            )
                            scale(1.1)
                            `,

                        opacity: 0
                    }

                ],

                {

                    duration:
                        900,

                    easing:
                        "cubic-bezier(.2,.8,.3,1)"
                }
            );


            setTimeout(
                () => spark.remove(),
                900
            );
        }
    }
);