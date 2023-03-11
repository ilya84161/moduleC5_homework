/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString =//`
// {
//   "book": {
//    "category": "CHILDREN",
//    "title": {
//       "lang": "en",
//       "value": "Harry Potter"
//     },
//     "author": "J. K. Rowling",
//     "year": "2005",
//     "price": 29.99
//   }
// }

`{
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
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const dannie = JSON.parse(jsonString);
// console.log('dannie', dannie);
const spisok = dannie.list;
//console.log('spisok', spisok);
const result = [];
spisok.forEach((item) => {


/* Этап 3. Запись данных в результирующий объект */

  const name = item.name;
  const age = item.age;
  const prof = item.prof;
  //console.log('name ', name)
  result.push({name: name , age: Number(age), prof: prof});
});
console.log('result', result);