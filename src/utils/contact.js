export const Contact = function () {
    Content.innerHTML = `
  <h1>Contact me</h1>
<h4>Leave a message</h4>
<hr>

<p>If you want to contact with me, please click the icon below</p>

<i class="bi bi-envelope-fill msg"></i>
  
  `

const msg = document.querySelector(".msg")
msg.addEventListener("click", () => location.href = "mailto:filip.bukowiec@interia.pl");

}

