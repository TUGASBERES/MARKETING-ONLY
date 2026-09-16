fetch("data.json")
.then(response=>response.json())
.then(data=>{

let table="";

data.forEach((hotel,index)=>{

table += `
<tr>
<td>${index+1}</td>
<td>${hotel.hotel}</td>
<td>${hotel.wilayah}</td>
<td>${hotel.kamar}</td>
</tr>
`;

});


document.getElementById("hotelTable").innerHTML=table;


// total hotel
document.querySelector(".cards div h2").innerHTML=data.length;


// total kamar

let totalKamar=data.reduce(
(sum,item)=>sum+item.kamar,0
);


document.querySelector(".bottomstat div h2")
.innerHTML=totalKamar;


});
