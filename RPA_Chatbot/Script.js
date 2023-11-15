import QA from "./Data.json" assert {type:"json"};

export function set() {
  document.getElementById("tav").innerHTML = "";

  for(var i = 0; i + 1 < Object.keys(QA.qa).length; i += 2) {
    
    var r = document.getElementById("tav").insertRow();
    r.insertCell().innerHTML = QA.qa[i].q;
    r.insertCell().innerHTML = QA.qa[i + 1].q;
  }
}

export function reply() {
  var inp = document.getElementById("usr").value, out;
  var fou = false;

  document.getElementById("usr").value = "";
  for (var i in QA.qa) if(inp == QA.qa[i].q) {
    out = QA.qa[i].a;
    fou = true;
    break;
  }
  if(fou == false) out = "Sorry! I don't have an Answer to your Question.";

  var row = document.getElementById("tab").insertRow();
  row.insertCell().innerHTML = inp;
  row.insertCell().innerHTML = out;

  var scr = document.getElementById("cha");
  scr.scrollTop = scr.scrollHeight;
}