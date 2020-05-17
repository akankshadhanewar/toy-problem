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
}