const file=require('fs');

const student={"name":"rose","department":"ECE","section":"B","age":20}

const jsonstr = JSON.stringify(student);

console.log(jsonstr);

const jsonstring ='{"name":"rose","department":"ECE","section":"B","age":20}';

console.log(jsonstring);

const studentjsonarray =[{"name":"rose","department":"ECE","section":"B","age":20},{"name":"rose","department":"ECE","section":"B","age":20}]

console.log(studentjsonarray);
console.log(JSON.stringify(studentjsonarray));

file.writeFileSync('testjson.json',jsonstr);

