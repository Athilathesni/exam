async function getEmployees() {

    const res = await fetch("http://localhost:4000/api/getemployee");
    const employee=await res.json();
    console.log(employee);
    str=``;
    employee.map((employe)=>{
        str+=`
        <div id="card">
               
                    <img src="../imge/emp.png" alt="noimage">
                    <div>
                        <div id="EmpID">${employe.empid}</div>
                        <div id="Name">${employe.name}</div>
                        <div id="designation">${employe.designation}</div>
                        <div id="experience">${employe.experience}</div>
                        <div id="salary">${employe.salary}</div>
                         <a href="#">
                        <a href="../pages/edit.html?id=${employe._id}"><button>Edit</button></a>
                        <a href="../pages/index.html" onclick="deleteemp('${employe._id}')"><button>Delete</button></a>
                    </div>
                </a>
            </div>
        `
    });
    document.getElementById('card-container').innerHTML=str;
    

    
}
getEmployees()

function deleteemp(id) {
    fetch(`http://localhost:4000/api/deleteEmp/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
    })
    .then((res)=>{
        console.log(res);
        if(res.status == 201) {
            alert("success");
             window.location.href="../pages/index.html"
        }
        else{
            alert("error");
        }
    });
    
}