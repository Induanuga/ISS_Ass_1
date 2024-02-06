let trigg = 0;
function togg_mode()
{
    let b = document.body;
    let x = document.querySelector(".nav-bar");
    let icons = document.querySelectorAll(".al i");

    if (trigg) {
        b.style.backgroundColor = "white";
        b.style.color = "black";
        x.style.backgroundColor = "black";
        x.style.color = "white";
        icons.forEach(icon => {
            icon.style.backgroundColor = "white";
            icon.style.color = "black";
        });
        trigg = 0;
    }
    else {
        b.style.backgroundColor = "black";
        b.style.color = "white";
        x.style.backgroundColor = "green";
        x.style.color = "white";
        icons.forEach(icon => {
            icon.style.backgroundColor = "black";
            icon.style.color = "white";
        });
        trigg = 1;
    }
}

function rand_color() 
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function squares() 
{
    let x = document.querySelector(".welcome");
    x.innerHTML = "Welcome to my Pr🤩file";
    x.style.textAlign = "center";
    x.style.fontSize = "15vh";

    const sqscont = document.createElement("div");
    sqscont.style.height = "100%";
    sqscont.style.width = "100%";
    sqscont.style.pointerEvents = "none";
    sqscont.style.position = "absolute";
    document.body.appendChild(sqscont);

    for (let i = 1; i <= 100; i++) {
        const sq = document.createElement("div");
        sq.className = "square";
        sq.style.animation = "myanimation 3.6s linear infinite";
        sq.style.position = "absolute";
        sq.style.backgroundColor = rand_color();
        sqscont.appendChild(sq);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach(function (square) {
        const randX = Math.floor(Math.random() * (window.innerWidth - 30));
        const randY = Math.floor(Math.random() * (window.innerHeight - 30));
        square.style.top = `${randY}px`;
        square.style.left = `${randX}px`;
    });

    setTimeout(() => {
        sqscont.innerHTML = "";
    }, 3600);
}


function cont_fun(st) 
{
    let contnr = document.querySelector("#cntr");
    contnr.innerHTML = "";
    let x = document.querySelector(".welcome");

    switch (st) {
        case "home": squares(); break;
        case "abt":
            contnr.innerHTML =
                `<p class="pre1" style="font-family: 'Arial', sans-serif; font-size: 2.6vh; margin-top:60px; margin-left:20px">
            Hello, I'm <b>Indu</b>, a first-year B.Tech student at IIIT Hyderabad. 
            Currently navigating the exciting journey of higher education, I find myself immersed in a world of diverse experiences. 
            I am in CSE branch. I have a genuine interest in coding, although I admit it's a skill I'm still developing. 
            Despite the challenges, I find joy in the process of problem-solving and creating solutions through code. Each coding endeavor serves as a learning opportunity, 
            pushing me to improve and grow in this dynamic field.
            Beyond the world of algorithms and programming, I have a passion for dancing, finding joy in the rhythm and movement that allows me to express myself creatively. 
            It serves as a delightful escape from the complexities of academic life.
            Movies, with their ability to transport us to different worlds and emotions, are another avenue of interest. 
            I enjoy exploring various genres, from thought-provoking dramas to lighthearted comedies, as each film offers a unique perspective and storytelling experience.
            Outside of academia and entertainment, I indulge in hobbies that add color to my daily routine.
            I find solace in listening to music, allowing melodies to paint the soundtrack of my life. Additionally, I express my creativity through drawing,
            capturing moments and ideas on paper.
            As I navigate through my academic and personal pursuits, I look forward to the challenges and discoveries that lie ahead. 
            </p>`;
            x.innerHTML = "";
            break;
        case "pic":
            let imgdb = document.createElement("img");
            imgdb.src = "pic_ofm.jpeg";
            imgdb.alt = "My Profile Picture";
            imgdb.height = 180;
            imgdb.width180;
            imgdb.style.borderRadius = '50px';
            imgdb.style.marginLeft="20px";
            contnr.appendChild(imgdb);
            x.innerHTML = "";
            break;
        case "edn":
            contnr.innerHTML =
                `<p id="e1" class="pre1" style="font-family: 'Arial', sans-serif; font-size: 2.6vh; margin-top:40px; margin-left:20px">
            <b>My Education Background:</b><br>
            I embarked on my educational journey in the picturesque town of Khammam, Telangana, where I attended school from grades 1 to 3. 
            The vibrant atmosphere of Khammam laid the foundation for my early academic years.
            As life unfolded, I found myself in the vibrant city of Bangalore, Karnataka, for grades 3 and 4.
            Continuing my academic pursuits, I transitioned to Sri Chaitanya School, where I completed my education up to the 10th standard.
            Sri Chaitanya provided a nurturing environment, fostering both academic excellence and personal growth.
            The journey continued into the realm of higher education at Sri Chaitanya College, where I completed my 11th and 12th grades (intermediate). 
            The college years were marked by challenges, achievements, and the acquisition of knowledge that paved the way for the next chapter of my academic expedition.
            Currently, I am enrolled at IIIT Hyderabad, a prestigious institution renowned for its emphasis on technology and innovation.
            As I navigate through the dynamic learning environment of IIIT Hyderabad, I am excited about the opportunities and discoveries that await me.
            </p>`;
            x.innerHTML = "";
            break;
        case "achvmts":
            contnr.innerHTML =
                `<p id="as" class="pre1" style="font-family: 'Arial', sans-serif; font-size: 2.6vh; margin-top:40px; margin-left:20px">
            <b>My Achievements:</b><br>
            Reflecting on my academic journey, I take pride in achieving remarkable milestones. Securing an impressive 10 points in the 10th grade is 
            a testament to my dedication and commitment to academic excellence.
            An accomplishment that stands out is my success in cracking the NTSE (National Talent Search Examination) at the 1st level. 
            Scored 300 marks in the BITS (Birla Institute of Technology and Science) exam. 
            I achieved a commendable rank of 1022 in the Mains and 2168 in the JEE Advance exam. 
            Improved myself in the second attempt of JEE Mains exam(first attemp-99.86%, second attempt-99.91%)
            These rankings are a testament to my relentless effort and resilience in the face of academic challenges.
            All these achievements were made possible through my dedicated studies at Sri Chaitanya College, Khammam.
            Yet, I view these accomplishments as stepping stones for the future. As I continue my journey, I am eager to embrace new challenges 
            and achieve even greater heights, recognizing that the pursuit of knowledge is an ongoing and rewarding adventure.
            </p>`;
            x.innerHTML = "";
            break;
        case "skills":
            contnr.innerHTML =
                `<p class="pre1" style="font-family: 'Arial', sans-serif; font-size: 2.6vh; margin-top:40px; margin-left:20px">
            <b>My Skills:</b><br>
            In my academic pursuit at IIIT Hyderabad, I have honed my skills in programming languages, including C, HTML, CSS, and Python.
            I love drawing, i have drawn many pictures since my childhood.
            I love playing caroms and badminton, bringing my competitive spirit to the sports arena.
            In the kitchen, I enjoy cooking and have a sweet tooth.
            Another skill of mine:-eating many chocolates🙃
            </p>`;
            x.innerHTML = "";
            let img1 = document.createElement("img");
            let img2 = document.createElement("img");
            let img3 = document.createElement("img");
            let img4 = document.createElement("img");
            img1.src = "coding_pic.jpg";
            img2.src = "carom_pic.jpg";
            img3.src = "badminton_pic.jpg";
            img4.src = "cook_pic.webp";
            img1.style.marginLeft = "10px";
            img2.style.marginLeft = "10px";
            img3.style.marginLeft = "10px";
            img4.style.marginLeft = "10px";
            img1.height = 180;
            img1.width = 200;
            contnr.appendChild(img1);
            img2.height = 180;
            img2.width = 200;
            contnr.appendChild(img2);
            img3.height = 180;
            img3.width = 200;
            contnr.appendChild(img3);
            img4.height = 180;
            img4.width = 200;
            contnr.appendChild(img4);
            break;
        case "contact":
            x.innerHTML = "";

            let anc1 = document.createElement("a");
            let anc2 = document.createElement("a");
            let anc3 = document.createElement("a");

            anc1.classList.add("al");
            anc1.classList.add("i");

            anc1.href = "https://github.com/Induanuga";
            anc1.innerHTML = "<i class='bx bxl-github'></i>";

            anc2.classList.add("al");
            anc2.classList.add("i");

            anc2.id = "mailto_id";
            anc2.href = "mailto:anugaindu17@gmail.com?subject=Leave letter&body=Please grant me a leave";
            anc2.innerHTML = "<i class='bx bx-envelope'></i>";

            anc3.classList.add("al");
            anc3.classList.add("i");

            anc3.href = "https://www.instagram.com/induanuga1/?hl=en";
            anc3.innerHTML = "<i class='bx bxl-instagram'></i>";

            let resBtn = document.createElement("button");
            resBtn.innerHTML = "Resume";
            resBtn.style.backgroundColor = "skyblue";
            resBtn.style.borderRadius = "20px";
            resBtn.style.padding = "5px";
            resBtn.style.marginLeft = "15px";
            resBtn.onclick = function () {
                window.open("Resume.pdf", "_blank");
            };

            contnr.appendChild(anc1);
            contnr.appendChild(anc2);
            contnr.appendChild(anc3);

            contnr.appendChild(resBtn);

            break;
    }
}



function blog_fun() 
{
    window.open("index1.html", "_blank");
}
