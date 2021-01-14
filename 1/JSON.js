const JSONstring = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const JSONstringDOM = JSON.parse(JSONstring);

const ans = {
	list : JSONstringDOM.list
}

console.log(ans)