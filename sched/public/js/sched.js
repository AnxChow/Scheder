window.onload = function() {

  // Initialize the activityNumber
  var activityNumber = 2;
  var totalTime=0;
  var breakTime=0;

  var count=0;
  var workTime=0;
  var breaks=0;
  var sched_count=0;
  var schedule=[];
  var work_tom=0;
  var tomorrow=[];
  var tomTime=[];
  var scheduleTime=[];
  //var doTomorrow=[];
  //var scheduleAct=[];

  // Select the add_activity button
  var addButton = document.getElementById("add_activity");

  // Select the table element
  var activityTable = document.getElementById("activities");

  var submit=document.getElementById("sub");

  // Attach handler to the button click event
  addButton.onclick = function() {

          var newrow = document.createElement('tr');
          newrow.innerHTML = '<tr><td><label>Thing to do: </label><br/><input type="text" name="act'+activityNumber+'"class="activity"></td><td><label>Time (minutes): </label><br/><input type="text" name="time'+activityNumber+'"class="time"></td></tr>';
          document.getElementById('activities').appendChild(newrow);
          activityNumber++;
  }

  // submit.onclick=function(){
  //   var form=document.getElementById("survey");
  //
  //   console.log(things_to_do[0].value);
  //   //test.innerHTML='total time'+totalTime+'is';
  //   //var sched=document.createElement("table");
  //   //sched.innerHTML='<tr><td><label>Thing to do: </label><br/><input type="text" name="act1"class="activity"></td><td><label>Time (minutes): </label><br/><input type="text" name="time1"class="time"></td></tr>';
  //   //document.getElementById("schedule").appendChild(test);
  // }

  submit.onclick=function(){
    var things_to_do=document.getElementsByClassName('activity');
    var worktimearr=document.getElementsByClassName('time');
    var form = document.getElementById("survey");
    var tableStr="";
    var table=document.createElement('table');
    // var rowCount=table.rows.length;
    // for (var x=rowCount-1; x>0; x--) {
    //   myTable.deleteRow(x);
    // }
    if (form.bre[0].checked=="true") {
      breaks=form.breaks.value;
      //console.log(breaks);
    }
    totalTime=(form.total.value*60);
    //console.log("total"+totalTime);
    for (var i=0; i<worktimearr.length; i++) {
      workTime+=Number(worktimearr[i].value);
    }
    breakTime=totalTime-workTime;
    //console.log("work"+workTime);
    //console.log("break"+breakTime);

    for (var i=0; i<worktimearr.length; i++) {
      if (totalTime-(worktimearr[i].value)>-1) {
        //schedAdd(things_to_do[i].value, worktimearr[i].value);
        tableStr=tableStr+'<tr><td><label>'+things_to_do[i].value+'</label></td><td><label>Time (minutes): '+worktimearr[i].value+'</label></td></tr>';
        totalTime=totalTime-worktimearr[i].value;
        workTime=workTime-worktimearr[i].value;
        console.log(form.bre[1].checked);
        if ((worktimearr[i].value<30) || (breakTime<=0) || (form.bre[1].checked=="true")) {
          continue;
        }
        else{
          //console.log("take a break");
          //schedAdd('break',breaks);
          tableStr=tableStr+'<tr><td><label>Break</label></td><td><label>Time (minutes): '+breaks+'</label></td></tr>';
          breakTime=breakTime-breaks;
          totalTime=totalTime-breaks;
        }
      }
      else{
        tableStr=tableStr+'<tr><td><label>Out of time!</label></td></tr>'
        // print("Looks like you'll need to work tomorrow as well")
        // doTomorrow(i);
        break;
      }


  }
  table.innerHTML='<table><tr><th>Your Schedule</th></tr>'+tableStr+'</table>';

  // var test=document.createElement("p");
  // test.innerHTML="hi";
  //var sched=document.createElement("table");
  //sched.innerHTML='<tr><td><label>Thing to do: </label><br/><input type="text" name="act1"class="activity"></td><td><label>Time (minutes): </label><br/><input type="text" name="time1"class="time"></td></tr>';
  document.getElementById("schedule").appendChild(table);
  //console.log(table);
}

  function makeString(arr){
    var string=""
    for (var i=0; i<worktimearr.length; i++) {
      string+="things"
    }
  }

  function doTomorrow(num){
    tomorrow[work_tom]=things_to_do[num];
    tomTime[work_tom]=worktimearr[num];
    work_tom+=1;
  }

  function schedAdd(item, time){
    schedule[sched_count]=item;
    scheduleTime[sched_count]=time;
    sched_count+=1
  }
};
