let eid = 101;
let ename = "Guru"
let avail = true;
let loc = ["Erode" , "Coimbatore" , "Chennai"]
let emp = {
    "eid":101,
    "ename":"Prasath"
}

document.writeln(eid)
document.writeln(ename)
document.writeln(avail)
document.writeln(loc)
document.writeln(emp) // It will not print object so we have to change into string using JSON . stringfy
document.writeln("<br>")
document.writeln(JSON.stringify(emp)) // Using JSON.stringify we can change object to string