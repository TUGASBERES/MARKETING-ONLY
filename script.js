new Chart(document.getElementById('roomChart'),{
type:'doughnut',
data:{
labels:['Standard','Superior','Deluxe','Suite','Villa'],
datasets:[{data:[35,28,22,10,5]}]
}
});