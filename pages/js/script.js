const formBtn1 = document.querySelector("#btn-1")
const formBtnPrev2 = document.querySelector("#btn-2-prev")
const formBtnPrev3 = document.querySelector("#btn-3-prev")
const formBtnNext2 = document.querySelector("#btn-2-next")
const formBtn3 = document.querySelector("#btn-3")
let more=document.querySelector("#more-btn")
let educationBtn=document.querySelector("#education-btn")
const maketemplate=(index)=>{
    return ` 
    <div class="experience-container-${index}" id="experience-container-${index}">
        <div class="position-container">
            <label class="label" for="position">თანამდებობა</label> <br>
            <input type="text" id="position" name="position" placeholder="დეველოპერი, დიზაინერი, ა.შ.">
        </div>
        <div class="employer-container">
            <label class="label" for="employer">დამსაქმებელი</label> <br>
            <input type="text" placeholder="დამსაქმებელი" id="employer" name="employer">
        </div>
        <div class="date-container">
            <div class="start-date">
                <label class="label" for="start">დაწყების რიცხვი</label> <br>
                <input type="date" name="start" id="start">
            </div>
            <div class="graduate-date">
                <label class="label" for="start">დამთავრების რიცხვი</label> <br>
                <input type="date" name="start" id="start">
            </div>
        </div>
        <div class="desc-container">
            <label for="desc">აღწერა</label> <br>
            <textarea name="desc" id="desc" cols="30" rows="10" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
        </div>
    </div>`
}

const maketemplate2 = (index)=> {
    return `
        <div class="education_container-${index}" id="education_container-${index}">
            <div class="education">
                <label class="label" for="position">სასწავლებელი</label> <br>
                <input type="text" placeholder="სასწავლებელი" style="width: 798px;">
            </div>
            <div class="quality-container">
                <div class="quality-left">
                    <label class="label" for="quality">ხარისხი</label> <br>
                    <div class="custom-select">
                        <select>
                            <option value="0">აირჩიეთ ხარისხი</option>
                            <option value="1">საშუალო სკოლის დიპლომი</option>
                            <option value="2">ზოგადსაგანმანათლებლო დიპლომი</option>
                            <option value="3">ბაკალავრი</option>
                        </select>
                    </div>
                </div>
                <div class="quality-right">
                    <div class="graduation-date">
                        <label class="label" for="graduation">დამთავრების რიცხვი</label> <br>
                        <input type="date" name="graduation" id="graduation">
                    </div>
                </div>
            </div>
            
            <div class="education_desc">
                <label class="label" for="education-desc">აღწერა</label> <br>
                <textarea placeholder="განათლების აღწერა" name="education-desc" id="education-desc" cols="30" rows="10"></textarea>
            </div>
        </div>
    `
}
let currentIndex=1
const form1=document.getElementById("form1")
// const form2=document.getElementById("form2")
const form11=document.getElementById("form11")
const form22=document.getElementById('form22')
form1.addEventListener('submit',e=>{
    e.preventDefault()
})
form2.addEventListener('submit',e=> {
    e.preventDefault()
})
const renderToDom=(i)=>{
    const template=maketemplate(i)
    form11.insertAdjacentHTML("beforebegin",template)     
    more=document.querySelector("#more-btn")
   
}
const renderToDom2=(i)=> {
    const template2=maketemplate2(i)
    form22.insertAdjacentHTML("beforebegin",template2)
}
more.addEventListener("click",()=>{
    currentIndex++;
    renderToDom(currentIndex)
})
educationBtn.addEventListener("click", ()=> {
    currentIndex++;
    renderToDom2(currentIndex)
})

formBtn1.addEventListener("click", function (e) {
   
    
    gotoNextForm(formBtn1, formBtnNext2, 1, 2)
    e.preventDefault()
})

formBtnNext2.addEventListener("click", function (e) {
    
    
    gotoNextForm(formBtnNext2, formBtn3, 2, 3)
    e.preventDefault()
    
})

formBtnPrev2.addEventListener("click", function (e) {
    
    gotoNextForm(formBtnNext2, formBtn1, 2, 1)
    e.preventDefault()
})
formBtnPrev3.addEventListener("click", function (e) {
    gotoNextForm(formBtn3, formBtnPrev2, 3, 2)
    e.preventDefault()
})

formBtn3.addEventListener("click", function (e) {
    document.querySelector(`.step--3`).classList.remove("step-active")
    document.querySelector(`.step--4`).classList.add("step-active")
    formBtn3.parentElement.style.display = "none"
    document.querySelector(".form--message").innerHTML = `
     <h1 class="form--message-text">Your account is successfully created </h1>
     `
    e.preventDefault()
})

renderToDom(currentIndex)
renderToDom2(currentIndex)
const gotoNextForm = (prev, next, stepPrev, stepNext) => {

    const prevForm = prev.parentElement
    const nextForm = next.parentElement
    const nextStep = document.querySelector(`.step--${stepNext}`)
    const prevStep = document.querySelector(`.step--${stepPrev}`)

    nextForm.classList.add("form-active")
    nextForm.classList.add("form-active-animate")
    prevForm.classList.add("form-inactive")

    prevStep.classList.remove("step-active")
    nextStep.classList.add("step-active")

    setTimeout(() => {
        prevForm.classList.remove("form-active")
        prevForm.classList.remove("form-inactive")
        nextForm.classList.remove("form-active-animate")
    }, 1000)
}



var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// document.addEventListener("DOMContentLoaded",()=>{
//     
 
// })