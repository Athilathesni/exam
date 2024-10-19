document.getElementById('frm').addEventListener('submit',async function (e) {
    e.preventDefault();
    console.log("form");

    empid=document.getElementById('empID').value,
    name=document.getElementById('Name').value,
    designation=document.getElementById('designation').value,
    salary=document.getElementById('salary').value,
    experience=document.getElementById('experience').value,
    email=document.getElementById('email').value,
    phone=document.getElementById('phone').value

    console.log(empid,name,designation,salary,experience,email,phone);

    const res=await fetch('http://localhost:4000/api/add',{
        method:"POST",
        headers:{"content-Type":'application/json'},
        body:JSON.stringify({empid,name,designation,salary,experience,email,phone})
    })
    console.log(res);
    

    const data=await res.json()
    if(res.status==201){
        alert(data.msg)
        window.location.href="../pages/index.html"
    }
    else{
        alert(data.error)
    }

    
 });
