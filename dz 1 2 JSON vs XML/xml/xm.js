
/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
const xmlString = `
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
  </list>
`;
// console.log('xmlString', xmlString);

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const studentNode = xmlDOM.querySelectorAll("student");
const result = [];
studentNode.forEach((item) => {
  const nameNode = item.querySelector("name");
  const firstnameNode = nameNode.querySelector("first");
  const secondnameNode = nameNode.querySelector("second");
  const ageNode = item.querySelector("age");
  const profNode = item.querySelector("prof");
  // console.log('bookNode', bookNode);
  // console.log('titleNode', titleNode);
  // console.log('authorNode', authorNode);
  // console.log('yearNode', yearNode);
  // console.log('priceNode', priceNode);

  // Получение данных из атрибутов
  //const categoryAttr = bookNode.getAttribute('category');
  const langAttr = nameNode.getAttribute('lang');
  // console.log('categoryAttr', categoryAttr);
  // console.log('langAttr', langAttr);
  result.push({ name: `${firstnameNode.textContent} ${secondnameNode.textContent}`, age: Number(ageNode.textContent), prof: profNode.textContent, lang: langAttr });
});

/* Этап 3. Запись данных в результирующий объект */
// result = [
  //category: categoryAttr,
  //lang: langAttr,
  //title: titleNode.textContent,
  //author: authorNode.textContent,
  //year: Number(yearNode.textContent),
  //price: Number(priceNode.textContent),

 // { name: `${firstnameNode.textContent} ${secondnameNode.textContent}`, age: ageNode.textContent, prof: profNode.textContent, lang: langAttr },
  //{ name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//];
console.log('result', result);

