const parser = new DOMParser();

const xmlString =`
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentsNode = listNode.querySelectorAll("student");
var l = [];
for (var i = 0; i < 2; i++){
  const nameNode = studentsNode[i].querySelector("name");
  const ageNode = studentsNode[i].querySelector("age");
  const profNode = studentsNode[i].querySelector("prof");
  const firstNameNode = nameNode.querySelector("first");
  const secondNameNode = nameNode.querySelector("second");

  const langAttr = nameNode.getAttribute('lang');

  const student = {
    name : firstNameNode.textContent + " " + secondNameNode.textContent,
    prof : profNode.textContent,
    age : Number(ageNode.textContent),
    lang : langAttr,
  }
  l.push(student);
}

const studentList = {
  list : l
}

console.log(studentList);


