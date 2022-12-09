function formTable(selector){
    var wrapper = document.querySelector(selector);
    var form = wrapper.getElementsByTagName("form")[0];
    var table = wrapper.getElementsByTagName("table")[0];
    
    form.onsubmit = function(ev){
      ev = ev || this;
      ev.preventDefault();
      
      var tr = document.createElement("tr"), td;
      
      for(let i = 0; i < 4; i++){
        td = document.createElement("td");
        td.innerHTML = this.elements[i].value;
        tr.appendChild(td);
      }    
      table.appendChild(tr);    
    }  
  }
  formTable(".wrapper");


  function Del() {
    var delTable=document.getElementById('table');
    for(var i=table.rows.length-1; i>0; i--){
        table.deleteRow(i);
    }
  }

  //Функция,превращающая таблицу в массив
  function ArrayParse(){
    var TableList = new Array();
  var table = document.getElementsByTagName("table");
  for(var i=0;i<table.length;i++){
      var tr = table.item(i).getElementsByTagName("tr");
      TableList['table'+i] = new Array()
      for(var j=0;j<tr.length;j++) {
          var td = tr.item(j).getElementsByTagName("td");
          TableList['table'+i]['tr_'+j] = new Array()
          for(var f=0;f<td.length;f++) {
              TableList['table'+i]['tr_'+j][f] = td.item(f).innerText;
          }

      }
    }
  console.log(TableList);
  alert(TableList);
  }
  