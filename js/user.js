// Завдання 1
const user = {
  name: "Sasha",
  age: 21,
  hobby: "Football",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
console.log(user);
const userKeys = Object.keys(user);
for (const userKey of userKeys) {
  console.log(`${userKey}: ${user[userKey]}`);
}
const { name, age, hobby, premium } = user;
// Завдання 2
function countProps(obj) {
  console.log(Object.keys(obj).length);
}
countProps(user);
// Завдання 3
const property = [
  {
    id: 1,
    proName: "Sasha",
    time: 200,
    online: false,
  },
  {
    id: 2,
    proName: "Oleh",
    time: 400,
    online: true,
  },
  {
    id: 3,
    proName: "Mykola",
    time: 800,
    online: false,
  },
  {
    id: 4,
    proName: "Pavlo",
    time: 600,
    online: true,
  },
  {
    id: 5,
    proName: "Semen",
    time: 1300,
    online: false,
  },
];
// let arrayProperty = [];
// const propertyValues = Object.values(property);
const findBestEmployee = (employees) => {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestEmployee = name;
    }
  }
  console.log(bestEmployee);
};
findBestEmployee({
  Sasha: 25,
  Oleh: 125,
  Maksym: 10,
});
const [{ id, proName, time, online }] = property;
// Завдання 4
const employSallary = {
  Саша: 200,
  Андрій: 350,
  Олег: 300,
  Юрій: 400,
};
let totalSallary = 0;
const countTotalSallary = (employees) => {
  const sallaryValues = Object.values(employees);
  for (const sallaryValue of sallaryValues) {
    totalSallary = totalSallary + sallaryValue;
  }
  console.log(totalSallary);
};
countTotalSallary(employSallary);
const { Саша, Андрій, Олег, Юрій } = employSallary;
// Завдання 5
function getAllPropValues(arr, prop) {
  const values = [];
  for (const obj of arr) {
    values.push(obj[prop]);
  }
  console.log(values);
}
getAllPropValues(
  [
    {
      valueName: "Apple",
      valuePrice: 25,
    },
    {
      valueName: "Grape",
      valuePrice: 100,
    },
    {
      valueName: "Apricot",
      valuePrice: 60,
    },
  ],
  "price",
);
// Завдання 6
const cart = [
  {
    idProduct: 1,
    productName: "Tomato",
    price: 30,
    quantity: 2,
  },
  {
    idProduct: 2,
    productName: "Banana",
    price: 60,
    quantity: 1,
  },
  {
    idProduct: 3,
    productName: "Lemon",
    price: 70,
    quantity: 2,
  },
  {
    idProduct: 4,
    productName: "Apple",
    price: 45,
    quantity: 3,
  },
  {
    idProduct: 5,
    productName: "Apricot",
    price: 55,
    quantity: 3,
  },
];
// const cartValues = Object.values(cart);
const calculateTotalPrice = (allProducts, productName) => {
  let totalPrice = 0;
  for (const product of allProducts) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
    }
  }
  console.log(totalPrice);
};
calculateTotalPrice(
  [
    {
      idProduct: 1,
      productName: "Tomato",
      price: 30,
      quantity: 2,
    },
    {
      idProduct: 2,
      productName: "Banana",
      price: 60,
      quantity: 1,
    },
    {
      idProduct: 3,
      productName: "Lemon",
      price: 70,
      quantity: 2,
    },
    {
      idProduct: 4,
      productName: "Apple",
      price: 45,
      quantity: 3,
    },
    {
      idProduct: 5,
      productName: "Apricot",
      price: 55,
      quantity: 3,
    },
  ],
  "Apricot",
);
const [{ idProduct, productName, price, quantity }] = cart;
