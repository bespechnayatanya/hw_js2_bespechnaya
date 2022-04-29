// Task 1.
// Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021). Массив в task1.txt
const users = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];

function findUsers (date){
    let searchUser = users.filter (users => users.registrationDate === date)
    console.log(searchUser)
}
findUsers ('09.10.2021')
findUsers ('10.10.2021')

// Task 2*
// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.
// Task 2*** Реализуйте считывание JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

const fs = require('fs')
const  persons = JSON.parse(fs.readFileSync("./task2.json"))
let unique = []
persons.forEach((i) => {
    if (unique.indexOf(JSON.stringify(i)) == persons.indexOf(JSON.stringify(i))) {
        unique.push(JSON.stringify(i))
    }
})
console.log(unique)
fs.writeFileSync('./otvet.json', JSON.stringify(unique)) 
// - попытка выгрузить в файл, но записывается в строку (шок)

// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

//   1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

let amountEmployees0 = (enterprises[0].departments[0].employees_count) + (enterprises[0].departments[1].employees_count) + (enterprises[0].departments[2].employees_count)
let amountEmployees1 = (enterprises[1].departments[0].employees_count) + (enterprises[1].departments[1].employees_count) + (enterprises[1].departments[2].employees_count)
let amountEmployees2 = (enterprises[2].departments[0].employees_count)
console.log(enterprises[0].name + ' (' + amountEmployees0 + ' сотрудников)')
for (let i = 0; i <= 2; i++) {
    console.log('-' + enterprises[0].departments[i].name + ' (' + enterprises[0].departments[i].employees_count + ' сотрудников)') 
}
console.log(enterprises[1].name + ' (' + amountEmployees1 + ' сотрудников)')
for (let i = 0; i <= 2; i++) {
    console.log('-' + enterprises[1].departments[i].name + ' (' + enterprises[1].departments[i].employees_count + ' сотрудников)') 
}
console.log(enterprises[2].name + ' (' + amountEmployees2 + ' сотрудников)')
console.log('-' + enterprises[2].departments[0].name + ' (' + enterprises[2].departments[0].employees_count + ' сотрудников)')

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getEnterpriseName (id){
   let searchId = enterprises.find(item => item.id == id)
   console.log(searchId.name)
 }
 getEnterpriseName (1)
// ищет ток по первому уровеню объектов, дальше я сломалась((

// }
// Task 4****
// В файле task4.txt вы найдете разноуровневый массив объектов. Очень похожий на массив из 3го задания, только количество вложенностей может быть не ограничено. 
// Задание: написать функцию: 
// Функция строит древовидный список компании.
// При ее вызове в консоль должен вывестись список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.