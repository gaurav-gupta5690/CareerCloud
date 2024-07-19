let bt1 = document.querySelector('#bt');

bt1.onclick = () =>
{
    let hour = prompt("Enter The Number 1 to 24")
    
    let xyz

    if (hour < 10) {
        xyz = "Good Morning";
      } 
      else if(hour < 20) {
        xyz = "Good Day";
      }
      else{
        xyz = "Good Evening"
      }


    document.getElementById("bb").innerHTML=xyz;
}