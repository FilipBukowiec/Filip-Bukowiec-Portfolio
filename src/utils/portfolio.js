export const MyWorks = function () {
  Content.innerHTML = `
<h1>My Works</h1>
<hr>
<div class="work">
<div class="workCard work1"></div>
<div class="workCard work2"></div>
<div class="workCard work3"></div>
<div class="workCard work4"></div>


</div>

</div>
`

  const work1 = document.querySelectorAll('.work1')
  Array.from(work1).forEach((www1) => {
    www1.addEventListener("click", () => window.open("https://filipbukowiec.github.io/sunnyside/", "_blank"));
  });

  const work2 = document.querySelectorAll('.work2')
  Array.from(work2).forEach((www2) => {
    www2.addEventListener("click", () => window.open("https://filipbukowiec.github.io/Egzamin-Filip-Bukowiec/", "_blank"));
  });

  const work3 = document.querySelectorAll('.work3')
  Array.from(work3).forEach((www3) => {
    www3.addEventListener("click", () => window.open("https://filipbukowiec.github.io/Egzamin-API9-Filip-Bukowiec/", "_blank"));
  });

  const work4 = document.querySelectorAll('.work4')
  Array.from(work4).forEach((www4) => {
    www4.addEventListener("click", () => window.open("https://filipbukowiec.github.io/interactive-card-details-form-main/", "_blank"));
  });
}




