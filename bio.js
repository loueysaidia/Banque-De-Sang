
let countsepar = 1;
document.getElementById("addBtn-separation").addEventListener("click", () => {
    
  let table = document.getElementById("table-separation");

  let row = document.createElement("tr");

  row.innerHTML = `
    <td>${countsepar++}</td>
    <td><input type="text" placeholder="Type de poche"></td>
    <td><input type ="number" placeholder="Poids de poche"></td>
    <td><select>
       <option>CPS</option>
       <option>PFC</option>
       <option>CG</option></select></td>
    <td><input type="date"></td>
    <td><select>
    <option>Oui</option>
    <option>Non</option></select></td>
    <td><input type="text" placeholder="Observation"></td>
    <td>
      <button onclick="editRow(this)">✏️</button>
      <button onclick="deleteRow(this)">❌</button>
    </td>
  `;

  table.appendChild(row);
});

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
 let countserologie = 1;
    document.getElementById("addBtn-serologie").addEventListener("click", () => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${countserologie++}</td>
       <td><select>
       <option>Positive</option>
       <option>Negative</option>
       </select></td>
         <td><select>
       <option>Positive</option>
       <option>Negative</option>
       </select></td>
         <td><select>
       <option>Positive</option>
       <option>Negative</option>
       </select></td>
         <td><select>
       <option>Positive</option>
       <option>Negative</option>
       </select></td>
         <td><select>
       <option>Positive</option>
       <option>Negative</option>
       </select></td>
            <td><input type="text" placeholder="Observation"></td>
            <td>
            <button onclick="editRow(this)">✏️</button>
            <button onclick="deleteRow(this)">❌</button>
            </td>
        `;
        const table = document.getElementById("table-serologie");
        table.appendChild(row);

    });
    let countgroupage = 1;
       document.getElementById("addBtn-groupage").addEventListener("click", () => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${countgroupage++}</td>
        <td><select>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        </select></td>
        <td><select>
        <option>A</option>
        <option>AB</option>
        <option>B</option>
        <option>O</option>
        </select></td>
        <td><input type="date"></td>
        <td><input type="date"></td>
        <td><select>
        <option>Oui</option>
        <option>Non</option></select></td>
        <td><input type="text" placeholder="Observation"></td>
        <td>
        <button onclick="editRow(this)">✏️</button>
        <button onclick="deleteRow(this)">❌</button>
        </td>
        `;
        const table = document.getElementById("table-groupage");
        table.appendChild(row);
    }
    );

let countDist=1;
    document.getElementById("addBtn-distribution").addEventListener("click",()=>{

        let table = document.getElementById("table-distribution");

        let row = document.createElement("tr");
        
        row.innerHTML = `
          <td>${countDist++}</td>
          <td><input type="number" placeholder="N° de poche"></td>
          <td><select>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        </select></td>
          <td><input type="text" placeholder="Nom et prénom"></td>
          <td><input type="number"></td>
          <td><select>
          <option>Homme</option>
          <option>Femme</option></select></td>
          <td><input type="text" placeholder=""></td>
          <td><select>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        </select></td>
       <td><input type="number"></td>
       <td><select>
       <option>CPS</option>
       <option>PFC</option>
       <option>CG</option></select></td>
       <td><input type="text" placeholder="Nom et prénom"></td>
       <td><input type="text" placeholder="Nom et prénom"></td>
       <td><input type="Date"</td>

          <td>
            <button onclick="editRow(this)">✏️</button>
            <button onclick="deleteRow(this)">❌</button>
          </td>
        `;
      
        table.appendChild(row);

    })



const serologie= document.getElementById("serologie");
const separation= document.getElementById("separation");
const containerSeparation= document.getElementById("container-separation");
const containerSerologie= document.getElementById("container-serologie");
const groupage= document.getElementById("groupage");
const containerGroupage= document.getElementById("container-groupage");
 const distrubition =document.getElementById("distribution");
 const containerDistrubition=document.getElementById("container-distribution");

 
separation.addEventListener("click", () => {
    containerSeparation.style.display = "block";
    containerSerologie.style.display = "none";
    separation.style.backgroundColor = "white";
    separation.style.color = "#a21218";
    serologie.style.backgroundColor = "#a21218";
    serologie.style.color = "white";
    containerGroupage.style.display = "none";
    groupage.style.backgroundColor = "#a21218";
    groupage.style.color = "white";
    containerDistrubition.style.display="none"
     distrubition.style.backgroundColor="#a21218"
    distrubition.style.color="white"
    setting.style.backgroundColor="#a21218";
        deconnexion.style.display="none"
    });
serologie.addEventListener("click", () => {
    containerSerologie.style.display = "block";
    containerSeparation.style.display = "none";
    serologie.style.backgroundColor = "white";
    serologie.style.color = "#a21218";
    separation.style.backgroundColor = "#a21218";
    separation.style.color = "white";
    containerGroupage.style.display = "none";
    groupage.style.backgroundColor = "#a21218";
    groupage.style.color = "white";
    containerDistrubition.style.display="none";
    distrubition.style.backgroundColor="#a21218"
    distrubition.style.color="white"
    setting.style.backgroundColor="#a21218";
        deconnexion.style.display="none"

    });
groupage.addEventListener("click", () => {
    containerGroupage.style.display = "block";
    containerSerologie.style.display = "none";
    groupage.style.backgroundColor = "white";
    groupage.style.color = "#a21218";
    separation.style.backgroundColor = "#a21218";
    separation.style.color = "white";
    serologie.style.backgroundColor = "#a21218";
    serologie.style.color = "white";
    containerSeparation.style.display = "none"
    containerDistrubition.style.display="none";
    distrubition.style.backgroundColor="#a21218"
    distrubition.style.color="white"
    setting.style.backgroundColor="#a21218";
        deconnexion.style.display="none"
    ;});
    distrubition.addEventListener("click",()=>{
        containerDistrubition.style.display="block"
        containerSerologie.style.display="none";
        containerGroupage.style.display="none";
        containerSeparation.style.display="none"
        distrubition.style.backgroundColor="white"
        distrubition.style.color="#a21218"
        separation.style.backgroundColor="#a21218"
        separation.style.color="white"
        serologie.style.backgroundColor="#a21218"
        serologie.style.color="white"
        groupage.style.backgroundColor="#a21218"
        groupage.style.color="white"
        setting.style.backgroundColor="#a21218";
        deconnexion.style.display="none"
    });



const setting= document.getElementById("settings-btn")
const deconnexion= document.getElementById("logout-btn")

setting.addEventListener("click",()=>{
    setting.style.backgroundColor="white";
    deconnexion.style.display="block";
    active=true
});



deconnexion.addEventListener("click",()=>{
    window.location.href="login.html";
})




