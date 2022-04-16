//alert("loading");

function addNewWEField() {
    //console.log("Adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewskillsField() {

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillsField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let skillsOb=document.getElementById("skills");
    let skillsAddButtonOb=document.getElementById("skillsAddButton");

    skillsOb.insertBefore(newNode, skillsAddButtonOb);
}

//create resume
function createResume() {
    //console.log("create resume");

    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML=nameField;

    //name

    document.getElementById("nameT2").innerHTML=nameField;

    //contact
    document.getElementById("contactT").innerHTMl=document.getElementById("contactField").value;

    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    //link1
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    //link2
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    //link3
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //work experience
    let wes=document.getElementsByClassName("weField");

    let str = "";

    for (let e of wes) {
        str = str  + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML=str;

    //work and technical skills
    let skills=document.getElementsByClassName("skillsField");

    let str1="";

    for (let e of skills) {
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById("skillsT").innerHTML=str1;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
    
    //print resume
    function print() {
        window.print();
    }

}