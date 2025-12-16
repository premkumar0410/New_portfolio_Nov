const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("click",()=>{
        console.log(item.getAttribute("data-section"))

        const sectionId = item.getAttribute("data-section");

        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth"
        })
    })

})

 const sections = document.querySelectorAll("section");

 console.log(sections)

 window.addEventListener("scroll",()=>{
    let currentsection = ""

    sections.forEach(sec => {
        const secTop = sec.offsetTop - 400;
  
        if(pageYOffset >= secTop){
            currentsection = sec.getAttribute("id")
        } 
    });

    navItems.forEach(li =>{
        li.classList.remove("active");
        if(li.getAttribute("data-section") === currentsection){
            li.classList.add("active")
        }
    })

 })

 function resumeView(){
    window.location.href = "/Premkumar R - Resume.pdf"

}

var title_ = "software Developer || Recent Graduate 2025 || Open to Opportunity"
var title_display = document.getElementById("titles") 
var count = 0;

var inter = setInterval(() => {
    if(count == title_.length-1){
    clearInterval(inter)
    }
    title_display.textContent = title_.substring(0,count+1)
    count++;
    
}, 100);


// project section
const projects = [
    {
        Image: "assets/images/project 1.png",
        title: "Chat Application using Flutter",
        desc: "Build an Chat Application usinf flutter and firebase which help to create an real time communication between users.",
        tech: ["Flutter", "Mobile App Development", "Firebase"],
        featured: true,
        code: "https://github.com/premkumar0410/chat_application",
        demo: "https://drive.google.com/file/d/1pkK1q2ueGm5gzcJaae2SBbRK9T87MpvQ/view?usp=drive_link"
    },
    {
        Image: "assets/images/project 2.png",
        title: "Wheather Application",
        desc: "Weather App using web tech where it retrives data from api to chow us the wheather data.",
        tech: ["Html","Css","JavaScript"],
        featured: true,
        code: "https://github.com/premkumar0410/weather-app",
        
    },
    {
        Image: "assets/images/project 3.png",
        title: "Bank management System",
        desc: "Bank management system using oracle SQL andd PL/SQL which helps to manage bank transaction",
        tech: ["Oracle", "SQL", "PL/SQL"],
        featured: true,
        code: "https://github.com/premkumar0410/oracle_banking",
    
    },
 
];

// insert card into html for project

const container = document.getElementById("projectContainer");


projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    console.log(project.Image)

    card.innerHTML =`
    <div class="project-thumb">
    <img src="${project.Image}" class="project-img" alt="project image">
    ${project.featured ? '<span class="badge">Featured</span>' : ""}
    </div>
    <div class="project-content">
        <div class="project-title">${project.title}</div>
        <div class="project-desc">${project.desc}</div>

        <div class="tech-stack">
        ${project.tech.map(t => `<span class="tech">${t}</span>`).join("")}
        </div>

        <div class="project-buttons">
           <a target = "blank_" href="${project.code}">  <button onclick="${project.code}" class="code-btn">💻 Code</button> </a>
        </div>

    </div>
    `;

    container.appendChild(card)
})


// scroll animation for project card

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


const experience = [
  {
    job_role: "Flutter Mobile Developer Intern",
    company: "Algox Fusion",
    started_date: "Sep 2023",
    ended_date: "Dec 2023",
    job_title:"Worked on a chat application that enables real-time communication using Flutter and Firebase.",
    key_achievements: [
      "Built real-time messaging using Firebase Firestore.",
      "Implemented user authentication and profile management.",
      "Collaborated with a team to design responsive UI for Android and iOS."
    ]
  }
];


// insert card for experience section 

const experienceContainer = document.querySelector(".experience-container")

experience.forEach((exp) => {
    const card = document.createElement("div");
    card.classList.add("experience-card");

    card.innerHTML = `
    <div class="exp-header">
        <div>
        <div class="exp-role">${exp.job_role}</div>
        <div class="exp-company">${exp.company}</div>
        </div>
        <div class="exp-date">${exp.started_date} - ${exp.ended_date}</div>
    </div>
    
    <p class="exp-description">${exp.job_title}</p>
    
    ${
        exp.key_achievements && exp.key_achievements.length ? 
        `<ul class="exp-achievements">
        ${exp.key_achievements.map((item) => `<li>${item}</li>`).join("")}
        </ul>` : ""
    }`;

    experienceContainer.appendChild(card)
})

  const expCards = document.querySelectorAll(".experience-card");

  const expObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  expCards.forEach((card) => expObserver.observe(card));


//   insert card into education 


// Contact Form Functionality
(function() {
    // Initialize EmailJS with your public key
    emailjs.init("57tTDVS4jkWtfRE4y"); // Your public key
    
    const contactForm = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const formMessage = document.getElementById("form-message");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Show loading state
            submitBtn.innerHTML = "Sending...";
            submitBtn.disabled = true;
            formMessage.style.display = "none";
            
            // Send form using EmailJS
            emailjs.sendForm("service_evmdapg", "template_hc5vukp", this)
                .then(function(response) {
                    console.log("SUCCESS!", response.status, response.text);
                    
                    // Show success message
                    formMessage.textContent = "✅ Message sent successfully! I'll get back to you soon.";
                    formMessage.style.display = "block";
                    formMessage.style.backgroundColor = "#d4edda";
                    formMessage.style.color = "#155724";
                    formMessage.style.border = "1px solid #c3e6cb";
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.innerHTML = "Send Message ✈️";
                    submitBtn.disabled = false;
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formMessage.style.display = "none";
                    }, 5000);
                    
                }, function(error) {
                    console.log("FAILED...", error);
                    
                    // Show error message
                    formMessage.textContent = "❌ Failed to send message. Please try again or email me directly.";
                    formMessage.style.display = "block";
                    formMessage.style.backgroundColor = "#f8d7da";
                    formMessage.style.color = "#721c24";
                    formMessage.style.border = "1px solid #f5c6cb";
                    
                    // Reset button
                    submitBtn.innerHTML = "Send Message ✈️";
                    submitBtn.disabled = false;
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formMessage.style.display = "none";
                    }, 5000);
                });
        });
    }
})();