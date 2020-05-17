var tasks = []
function addTask(){
    t = document.getElementById("title").value
    d = document.getElementById("desc").value
    if(title == "" || desc == ""){
        alert("Please fill the title/description")
        return;
    }
    task = {title:t, desc:d}
    tasks.push(task)
    tbody_data = "";
		for(i=0;i<tasks.length;i++){
			tbody_data = tbody_data+"<tr class='td_class'>";
			tbody_data = tbody_data+"<td>"+tasks[i].title+"</td>";
			tbody_data = tbody_data+"<td>"+tasks[i].desciption+"</td>";
			tbody_data = tbody_data+'<td><button onclick="delete('+i+')">Delete</button>&nbsp;&nbsp; <button onclick="mark('+i+')">Mark</button></td>';
			tbody_data = tbody_data+"</tr>";
		}
		document.getElementById("tbody").innerHTML = tbody_data;
}