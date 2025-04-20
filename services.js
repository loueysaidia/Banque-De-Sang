const today= new Date();
const formated= today.toLocaleDateString('fr-FR');
document.querySelectorAll('.format').forEach((el) => {
    el.innerHTML= formated;
});
document.querySelectorAll('.format-alert').forEach((el) => {
    el.innerHTML= formated;
})

document.addEventListener("DOMContentLoaded", () => {
    const alerts = document.querySelectorAll(".alert-box");
    const showMoreButton = document.getElementById("showMoreAlerts");
    let visibleAlerts = 3; 
    let isShowingMore = true; 


    const updateAlertsVisibility = () => {
        alerts.forEach((alert, index) => {
            alert.style.display = index < visibleAlerts ? "block" : "none"; 
        });

        
        if (isShowingMore) {
            showMoreButton.textContent = "Afficher plus";
        } else {
            showMoreButton.textContent = "Afficher moins";
        }

        
        if (visibleAlerts >= alerts.length && isShowingMore) {
            showMoreButton.style.display = "none";
        } else {
            showMoreButton.style.display = "block";
        }
    };


    showMoreButton.addEventListener("click", () => {
        if (isShowingMore) {
            visibleAlerts = alerts.length;
            isShowingMore = false; 
        } else {
           
            visibleAlerts = 3;
            isShowingMore = true;
        }
        updateAlertsVisibility();
    });

    updateAlertsVisibility();
});

const tableau= document.getElementById("tableau");
const stats=document.getElementById("statistiques");
const manag=document.getElementById("management");
const tableauDeBord=document.getElementById("right-panel-tableau");
const statistiques=document.getElementById("right-panel-statistiques");
const managment=document.getElementById("right-panel-management");
const compte= document.getElementById("compteBio");
const cmpt=document.getElementById("compte-bio")

tableau.addEventListener('click',() =>{
    tableau.style.color="white";
    tableau.style.textDecoration="underline";
    tableauDeBord.style.display="block";
    statistiques.style.display="none";
    compte.style.display="none";
    cmpt.style.color="";
    cmpt.style.textDecoration="";
     managment.style.display="none"
    stats.style.color="";
    stats.style.textDecoration="";
    manag.style.color="";
    manag.style.textDecoration="";
});

stats.addEventListener('click',() =>{
    stats.style.color="white";
    stats.style.textDecoration="underline";
    tableauDeBord.style.display="none";
    statistiques.style.display="block";
    managment.style.display="none"
    compte.style.display="none";
    cmpt.style.color="";
    cmpt.style.textDecoration="";
    tableau.style.color="";
    tableau.style.textDecoration="";
    manag.style.color="";
    manag.style.textDecoration="";
    });

    
manag.addEventListener('click',()=>{
    manag.style.color="white";
    manag.style.textDecoration="underline";
    tableauDeBord.style.display="none";
    statistiques.style.display="none";
    managment.style.display="block";
    compte.style.display="none";
    cmpt.style.color="";
    cmpt.style.textDecoration="";
    stats.style.color="";
    stats.style.textDecoration="";
    tableau.style.color="";
    tableau.style.textDecoration="";

});

cmpt.addEventListener('click',()=>{
    cmpt.style.color="white";
    cmpt.style.textDecoration="underline";
    tableauDeBord.style.display="none";
    statistiques.style.display="none";
    managment.style.display="none"
    compte.style.display="block";
    stats.style.color="";
    stats.style.textDecoration="";
    tableau.style.color="";
    tableau.style.textDecoration="";
    manag.style.color="";
    manag.style.textDecoration="";
});

const alert=document.getElementById("Alertes");
alert.innerHTML+=`<div class="alert-box">
             N° de poche <span class="type">Type</span><br><br>
                 <small class="format-alert">${formated}</small>
                    </div>`

//هنا نضيف التنبيهات في الصفحة الرئيسية في بلاصلة N ° de poche ${}

alert.innerHTML+=`<div class="alert-box">
                N° de poche <span class="type">Type</span><br><br>
                
                 <small class="format-alert">${formated}</small>
                    </div>`


 const table=document.getElementById("tableauBiologiste");
let row=document.createElement("tr");
row.innerHTML=`
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <button onclick="editRow(this)">✏️</button>
      <button onclick="deleteRow(this)">❌</button>
    </td>
`
table.appendChild(row);
function deleteRow(btn) {
    btn.closest("tr").remove();
  }
  
  function editRow(btn) {
      const row = btn.closest("tr");
      const inputs = row.querySelectorAll("input[type='text'], input[type='date']");
      const isEditing = btn.textContent === "✏️";
      
      if (isEditing) {
          inputs.forEach((input) => {
          input.removeAttribute("readonly");
          });
          btn.textContent = "💾";
      } else {
          inputs.forEach((input) => {
          input.setAttribute("readonly", true);
          });
          btn.textContent = "✏️";
      }
      btn.style.backgroundColor = isEditing ? "lightgreen" : "white";
      btn.style.color = isEditing ? "black" : "#a21218";
    }  
