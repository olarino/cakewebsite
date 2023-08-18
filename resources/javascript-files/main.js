const sabitGezinmeLinkler = document.querySelectorAll('.sabit-gezinme a');
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: 0.5,
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const sabitGezinmeLink = document.querySelector(`.sabit-gezinme a[href="#${sectionId}"]`);
            const sectionColor = entry.target.getAttribute('data-color');
            
            sabitGezinmeLinkler.forEach(link => {
                link.style.color = sectionColor;
            });
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});



    const headerLabelTop = document.querySelector('#header-label-top');
    const textEditorAnimated = document.querySelector('#texteditor-animated');
    const toptext1 = document.querySelector('#toptext1');



    headerLabelTop.addEventListener('mouseover', function() {
        const ct = "service.css"
        const contentToAdd = `
            <a id="take-left-if" class="systemtext">system:</a>
            <a>here to make your website dream website.</a>
            <br>
            <a id="take-left-if" class="systemtext">system:</a>
            <a>Maximum 7 days your website ready!</a>
            <br>
            <br>
            <a id="ifimp">if</a> <a class="parimp">{</a>
            <br>
            <br>
            <a id="take-left-if" class="bigx">Customized,</a>
            <br>
            <a id="take-left-if" class="bigx">Detalied,</a>
            <br>
            <a id="take-left-if" class="bigx">Online,</a>
            <br>
            <br>
            <a class="parimp">}</a>
            <br>
            <br>
            <br>
            <a id="take-left-if" class="imp-text">You can now <a id="orderimp">order</a> the type of website you want!</a>
            <div id="mnbutton1">

            </div>

            <div id="mnbutton2">

            </div>

            <div id="mnbutton3">

            </div>
            `;

        textEditorAnimated.innerHTML = contentToAdd;
        toptext1.innerHTML = ct;
    });










    const headerlabelmiddle = document.querySelector('#header-label-middle');
    const textEditorAnimated2 = document.querySelector('#texteditor-animated');
    const toptext2 = document.querySelector('#toptext1');

    headerlabelmiddle.addEventListener('mouseover', function() {
        const ct = "wordpress.css"
        const contentToAdd = `
        <a style="color: rgb(0, 192, 128);">System: <a>I am a proficient web developer specializing in crafting WordPress-supported websites.</a></a>
        <br>
        <br>
        <a style="color: rgb(35, 69, 223);">User: <a>Can i get support after my website complated?</a></a>
        <br>
        <br>
        <a style="color: rgb(0, 192, 128);">System: <a>I guarantee to assist in all matters related to WordPress indefinitely.</a></a>
        <div id="mnbutton1">

        </div>

        <div id="mnbutton2">

        </div>

        <div id="mnbutton3">

        </div>
        `;

        textEditorAnimated2.innerHTML = contentToAdd;
        toptext2.innerHTML = ct;
    });


    const headerlabelbottom = document.querySelector('#header-label-bottom');
    const textEditorAnimated3 = document.querySelector('#texteditor-animated');
    const toptext3 = document.querySelector('#toptext1');

    headerlabelbottom.addEventListener('mouseover', function() {
        const ct = "stack.css"
        const contentToAdd = `
        <a style="color: rgb(45, 148, 161);">requirements</a>( UI : Frontend, UX : Backend )
        <br>
        <br>
        <a>We have full support for <a style="color: blueviolet;">Front-End</a> and <a style="color: blueviolet;">Back-End</a>.</a>
        
        <br>
        <br>
        <br>
        
        <video autoplay loop muted style="width: 400px; height: 300px; top: 170px; left: 60px;">
            <source src="resources/videos/tool.mp4">
        </video>


        <div id="mnbutton1">

                </div>

                <div id="mnbutton2">

                </div>

                <div id="mnbutton3">

                </div>
        `;

        textEditorAnimated3.innerHTML = contentToAdd;
        toptext3.innerHTML = ct;
    });

