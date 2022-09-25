

export const Certificates = function () {
  Content.innerHTML = `
  <h1>My Certificates</h1>
<hr>
<div class="cert" id="Cert">
<div class="certCard cert1"  id="cert1">
<img src="./img/certificates/api1-min.jpg">
  <div class="titleCard">Aplikacje internetowe poziom podstawowy</div>
</div>
<div class="certCard cert2" id="cert2">
<img src="./img/certificates/api2-min.jpg">
  <div class="titleCard">Aplikacje internetowe poziom średniozaawansowany</div>
</div>
<div class="certCard cert3" id="cert3">
<img src="./img/certificates/api3-min.jpg">
  <div class="titleCard">Aplikacje internetowe poziom zaawansowany</div>
</div>

</div>
  `



  const Btn = document.querySelectorAll('.certCard');


  Array.from(Btn).forEach((cer) => {
    cer.addEventListener("click", () => {
      console.log(cer.classList[1]);

      const modalExist = document.querySelector(".modal");
      if (modalExist) return;
      else {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.classList.add("photo"+cer.classList[1]);
        const closeBtn = document.createElement("button");
        closeBtn.classList.add("btnclose");
        closeBtn.textContent = "X";

        document.body.appendChild(modal);
        modal.appendChild(closeBtn);


        closeBtn.addEventListener("click", () => {
          document.body.removeChild(modal);
        }
        
        
        )
  
      }

    }
    )
  })








};





