const formBtn1 = document.querySelector("#btn-1")
const formBtnPrev2 = document.querySelector("#btn-2-prev")
const formBtnPrev3 = document.querySelector("#btn-3-prev")
const formBtnNext2 = document.querySelector("#btn-2-next")
const formBtn3 = document.querySelector("#btn-3")
let more=document.querySelector("#more-btn")
let educationBtn=document.querySelector("#education-btn")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const about = document.getElementById("about")
let position = null
let employer = null
let start = null
let end = null
let desc = null

const firstName = document.querySelector("#firstname")
const lastName = document.querySelector("#lastname")
const mail = document.querySelector("#mail")
const telephone = document.querySelector("#telephone")
const creatorInfo = document.querySelector("#creatorInfo")
const knowledge = document.querySelector("#knowledge")
const company = document.querySelector("#company")
const startDate = document.querySelector("#startDate")
const endDate = document.querySelector("#endDate")
const experianceDesc = document.querySelector("#experianceDesc")



let lastNameInner=lastName.innerHTML
let firstNameInner = firstName.innerHTML
let mailInner = mail.innerHTML
let telephoneInner = telephone.innerHTML
let creatorInfoInner = creatorInfo.innerHTML
let knowledgeInner = knowledge.innerHTML
let companyInner = company.innerHTML
let startDateInner = startDate.innerHTML
let endDateInner = endDate.innerHTML
let experianceDescInner = experianceDesc.innerHTML
window.addEventListener('DOMContentLoaded',()=>{
    fname.addEventListener('change',(e)=>{
        firstName.innerHTML=`${e.target.value}` +firstNameInner
    })
    lname.addEventListener('change', (e)=> {
        lastName.innerHTML=`${e.target.value}`+lastNameInner
    })
    email.addEventListener('change', (e)=> {
        mail.innerHTML = `${e.target.value}` +mailInner
    })
    phone.addEventListener('change', (e)=> {
        telephone.innerHTML = `${e.target.value}` +telephoneInner
    })
    about.addEventListener('change', (e)=> {
        creatorInfo.innerHTML = `${e.target.value}` +creatorInfoInner
    })
    position.addEventListener('change', (e)=> {
        knowledge.innerHTML = `${e.target.value}` +knowledgeInner
    })
    employer.addEventListener('change', (e)=> {
        company.innerHTML = `${e.target.value}` +companyInner
    })
    start.addEventListener('change', (e)=> {
        startDate.innerHTML = `${e.target.value}` +startDateInner
    })
    end.addEventListener('change', (e)=> {
        endDate.innerHTML = `${e.target.value}` +endDateInner
    })
    desc.addEventListener('change', (e)=> {
        experianceDesc.innerHTML = `${e.target.value}` +experianceDescInner
    })
   
    
})


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
                <label class="label" for="end">დამთავრების რიცხვი</label> <br>
                <input type="date" name="end" id="end">
            </div>
        </div>
        <div class="desc-container">
            <label for="desc">აღწერა</label> <br>
            <textarea name="desc" id="desc" cols="30" rows="10" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
        </div>
    </div>`
}

const maketemplate2 = (index,string)=> {
    return `
        <div class="education_container-${index}" id="education_container-${index}">
            <div class="education">
                <label class="label" for="educationPlace">სასწავლებელი</label> <br>
                <input type="text" id="educationPlace" placeholder="სასწავლებელი" style="width: 798px;">
            </div>
            <div class="quality-container">
                <div class="quality-left">
                    <label class="label" for="quality">ხარისხი</label> <br>
                    <div class="custom-select">
                        <select>
                        ${string}
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

async function getData() {
    const items = document.getElementsByClassName('select-items');
    const jsonData = await fetch('https://resume.redberryinternship.ge/api/degrees', {
      method: 'GET',
    });
  return  jsonData.body.getReader().read().then(data=>{
        var enc = new TextDecoder("utf-8");
       const data2=JSON.parse(enc.decode(data.value))
       let string=''
            data2.forEach(element => {
                    string+=`<option value="${element.id}">${element.title}</option>`
            });
        return   maketemplate2(1,string)
    })
    

    // data.forEach(element => {
    //     items.innerHTML = renderElement(element) + items.innerHTML
    // });
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
    position = document.getElementById("position")
    employer = document.getElementById("employer")
    start = document.getElementById("start")
    end = document.getElementById("end")
    desc = document.getElementById("desc")
    
}
const renderToDom2=async (i)=> {
    const template2=await getData()
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