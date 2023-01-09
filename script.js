
const pincode = async ()=>{
    let content = document.getElementById("submit");
    content.addEventListener("click", ev =>{
        let pin = document.getElementById("pin").value;
        // console.log(userdata);
        fetch(`https://api.postalpincode.in/pincode/${pin}`)
        .then((response)=>  response.json())
        .then(data => {
                console.log(data);                
                let finalData="";
    const details= data.map((x)=>{
        for(var i=0;i<x.PostOffice.length;i++){
        finalData+=`
        <div class="border-1 shadow rounded-2 p-4 m-3 fw-700 new" style="width:400px; color:white">
            <div>
            <label for="">Name:</label>
            <b><label for="">${x.PostOffice[i].Name}</label></b>
            </div>

            <div>
            <label for="">Branch Type:</label>
            <b><label for="">${x.PostOffice[i].BranchType}</label></b>
            </div>

            <div>
            <label for="">Division:</label>
            <b><label for="">${x.PostOffice[i].Division}</label></b>
            </div>

            <div>
            <label for="">District:</label>
            <b><label for="">${x.PostOffice[i].District}</label></b>
            </div>

            <div>
            <label for="">State:</label>
            <b><label for="">${x.PostOffice[i].State}</label></b>
            </div>

            <div>
            <label for="">Country:</label>
            <b><label for="">${x.PostOffice[i].Country}</label></b>
            </div>

            <div>
            <label for="">Delivery Status:</label>
            <b><label for="">${x.PostOffice[i].DeliveryStatus}</label></b>
            </div>
            
            </div>`
         }
         })
    document.getElementById("main").innerHTML=finalData;

        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid Number");
        })
        })
    } 
    pincode();