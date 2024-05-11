      
//Skills
function addNewsField() {
    let newNode = document.createElement("textarea");   
    newNode.classList.add("form-group");
//    newNode.classList.add("form-control");
    newNode.classList.add("sField");
    newNode.classList.add("input-group");
    newNode.classList.add("input");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");   
    let sOb = document.getElementById("s");
    let sAddButtonOb = document.getElementById("sAddButton");    
    sOb.insertBefore(newNode, sAddButtonOb);
}
 
function removeLastFields() {
    
    let sFields = document.querySelectorAll('.sField');
   
    let lastField = sFields[sFields.length - 1];
    
    if (lastField) {
        lastField.parentNode.removeChild(lastField);
    } else {
        console.log("No fields to remove.");
    }
}
 


//work experience 
function addNewField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-group");
//   newNode.classList.add("form-control");
    newNode.classList.add("input-group");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.classList.add("input");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    
    weOb.insertBefore(newNode, weAddButtonOb);
    
    
}

function removeLastFieldwe() {
    
    let weFields = document.querySelectorAll('.weField');
   
    let lastField = weFields[weFields.length - 1];
    
    if (lastField) {
        lastField.parentNode.removeChild(lastField);
    } else {
        console.log("No fields to remove.");
    }
}

//Academic Qualifications
function addNewaqField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-group");
//   newNode.classList.add("form-control");
    newNode.classList.add("input-group");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.classList.add("input");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function removeLastFieldaq() {
    
    let aqFields = document.querySelectorAll('.aqField');
   
    let lastField = aqFields[aqFields.length - 1];
    
    if (lastField) {
        lastField.parentNode.removeChild(lastField);
    } else {
        console.log("No fields to remove.");
    }
}

//CV Generation


function generateCV(){
    document.getElementById("nameT1").innerHTML=document.getElementById("name").value;
   
document.getElementById("nameT2").innerHTML=document.getElementById("name").value; 
    
document.getElementById("numT1").innerHTML=document.getElementById("contact").value;    

document.getElementById("addressT1").innerHTML=document.getElementById("address").value;    

document.getElementById("obj2").innerHTML=document.getElementById("obj").value;    


//s

let sOb=document.getElementsByClassName("sField");
let stri= "" ;
for(let i of sOb){
    stri+= `<li> ${i.value}</li>`;
    
}
document.getElementById("sT1").innerHTML = stri; 

//we

let weOb=document.getElementsByClassName("weField");
let str = "" ;
for(let i of weOb){
    str+= `<li> ${i.value}</li>`;
    
}
document.getElementById("weT1").innerHTML = str; 

//aq

let aqOb=document.getElementsByClassName("aqField");
let st = "" ;
for(let e of aqOb){
    st+= `<li> ${e.value}</li>`;
    
}
document.getElementById("aqT1").innerHTML = st; 
}


function hideFormAndShowTemplate() 
{
   var resumeForm = document.getElementById("resume-form");                     var resumeTemplate = document.getElementById("resume-template");
   
    if (resumeForm && resumeTemplate)
      {
           resumeForm.style.display = "none";
         resumeTemplate.style.display = "block";
            } 
 
  else 
  {
     console.error("One or both of the elements not //found.");
 }
}



document.getElementById('downloadButton').addEventListener('click', function() {
    var element = document.getElementById('resume-template');
    var opt = {
        margin:       0.5,
        filename:     'template.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf(element, opt);
    this.style.display = 'none';
});




function printButton(){
   window.print();
    }

    
