
let data=async(e)=>{
    let x = await fetch("http://demo1028543.mockable.io/a/%23/space/demo5361279");
    x=await x.json();
    let user=x[e.target.name];
   document.getElementById("main").style.backgroundColor="turquoise";
   document.getElementById("main").style.opacity="1";
   document.getElementById("name").innerHTML="Name: "+user.name;
   document.getElementById("email").innerHTML="Email: "+user.email;
   document.getElementById("skill").innerHTML="Skill: "+user.skill;
   document.getElementById("state").innerHTML="State: "+user.state;
   document.getElementById("company").innerHTML="Company: "+ user.company;

}

