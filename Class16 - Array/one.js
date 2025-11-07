let eids = [101,102,103,104]
console.log(eids); //[101,102,103,104]

eids.push(105)
console.log(eids); //[101,102,103,104,105] -- Adding LAST ELEMENT

eids.pop()
console.log(eids); //[101,102,103,104] -- Removed LAST ELEMENT

eids.unshift(100)
console.log(eids); //[100,101,102,103,104] -- Adding FIRST ELEMENT

eids.shift()
console.log(eids); //[101,102,103,104] -- Removing FIRST ELEMENT