import { FadeEffect } from "./navigation.js";
import { Certificates } from "./certificates.js";
import { Me } from "./aboutme.js";
import { Skills } from "./skills.js";
import { Contact } from "./contact.js";
import { MyWorks } from "./portfolio.js";








const Content = document.getElementById("Content");
const AboutMe = document.getElementById("AboutMe");
const Home = document.getElementById("Home");
const MyContact = document.getElementById("Contact");
const MyCertificates = document.getElementById("MyCertificates");
const MySkills = document.getElementById("MySkills");
const GitHub = document.getElementById("GitHub");
const LinkedIn = document.getElementById("LinkedIn");
const GitHub2 = document.getElementById("GitHubm");
const LinkedIn2 = document.getElementById("LinkedInm");
const Navi = document.querySelectorAll('.linki');
const Portfolio = document.getElementById("Portfolio");


GitHub.addEventListener("click", () => location.href = "https://github.com/FilipBukowiec");
LinkedIn.addEventListener("click", () => location.href = "https://www.linkedin.com/in/filip-bukowiec-80b362147");
GitHub2.addEventListener("click", () => location.href = "https://github.com/FilipBukowiec");
LinkedIn2.addEventListener("click", () => location.href = "https://www.linkedin.com/in/filip-bukowiec-80b362147");


AboutMe.addEventListener("click", (Me));
MyCertificates.addEventListener("click", (Certificates));
MySkills.addEventListener("click", (Skills));
MyContact.addEventListener("click", (Contact));
Portfolio.addEventListener("click", (MyWorks));
Home.addEventListener("click", () => location.reload());


Array.from(Navi).forEach((link) => {
    link.addEventListener("click", (FadeEffect));
    });




