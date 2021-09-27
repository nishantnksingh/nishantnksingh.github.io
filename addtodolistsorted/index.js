var table = document.getElementById("tab");
var task  = document.getElementById("task");
var date_task = document.getElementById("date_task");
var add = document.getElementById("add");
var reset = document.getElementById("reset");
var mapobj = new Map();

function reset_table() {
  table.innerHTML="<tr><th>Date of Task</th><th>Task Id</th></tr>";
  task.value="";
  date_task.value="";
  mapobj.clear();
  
}

function sorttablebydateid() {
  var rows, switching, i, datex, datey,taskidx,taskidy, shouldSwitch;
  switching = true;
  
  while (switching) {
    
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
      
      shouldSwitch = false;
      
      datex = rows[i].getElementsByTagName("TD")[0];
      datey = rows[i + 1].getElementsByTagName("TD")[0];
      
      if (datex.innerHTML.toLowerCase() > datey.innerHTML.toLowerCase()) {
        
        shouldSwitch = true;
        break;
      }
      taskidx = rows[i].getElementsByTagName("TD")[1];
      taskidy = rows[i + 1].getElementsByTagName("TD")[1];

      if (datex.innerHTML.toLowerCase() == datey.innerHTML.toLowerCase()){
        if(parseInt(taskidx.innerHTML) > parseInt(taskidy.innerHTML)){
          shouldSwitch=true;
          break;
        }
    }
    }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function addtask(){
  if(task.value!="" && date_task.value!="" ){
    table.innerHTML="<tr><th>Date of Task</th><th>Task Id</th></tr>";
    
     mapobj.set(task.value,date_task.value);
                       
     mapobj.forEach((values,keys)=>{
     
    var tags = "<tr><td>"+values+"</td><td>"+keys+"</td></tr>";
    table.innerHTML = table.innerHTML+tags;
  }) 
  }                                            
  task.value="";
 date_task.value="";   
 sorttablebydateid();
  }


