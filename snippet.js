/*
  js简写代码
*/


// if语句的简写
const answer = x > 10 ? 'yes' : 'no';

const bigger = x ? 10 ? 'bigger' : x;


// 短路求值的简写
const variable = s || 'new';

const dbHost = process.env.DB_HOST || 'localhost';


// 声明变量的简写
let x, y, z = 3;


// if存在的简写
if (isArray) {}

if (!isNum) {}


// for循环的简写
for (let index in arr) {}

arr.forEach(function (element, index, arr) {
  // ...
})


// 指数形式
1 === 1e0
10 === 1e1
10000 === 1e4


// 对象属性的简写
const obj = {x, y};
// 等价于 const obj = {x:x, y:y}


// 箭头函数
const sayHello = name => console.log('Hello ' + name);

setTimeout(() => console.log('loading'), 2000);

arr.forEach(item => console.log(item));


// 隐式返回值的简写，用()包裹返回值
const cal = r => (Math.PI * r)

const func = () => ({foo: 1})


// 参数的默认值
const volume = (a, b = 3, c = 4) => (a * b * c)
// volume(2) == 24


// 模板字符串，用${}拼接变量
const welcome = `You have logged in as ${first} ${last}`;

const db = `http://${host}:${port}/${database}`


// 解构赋值
const { observable, action, runInAction } from 'mobx'

const {store, form, loading, errors, entity } = this.props

const { nameA: nameB } = this.props  // 重命名


// 多行字符串的简写
const lorem = `aaaaaaaaaa,
  bbbbbbbbbbbbbbbbbbbbbbb,
  ccccccccccccccccccccccc,
  ddddddddddddddd`;


// 扩展运算符
const arr = [1,2,3];
const arr2 = [5, ...arr, 6];  // 插入
const arr3 = [...arr];  // 数组复制

const {a, b, ...z} = {a:1, b:2, c:3, d:4};
// z == {c:3, d:4}


// 强制参数(如果不传参数，则抛出异常)
mandatory = () => {
  throw new Error('missing parameter');
}

const foo = (bar = mandatory()) => {
  return bar;
}


// Array.find查找数组的某个元素
const arr = [{type:'dog',name:'tommy'}, {type:'cat',name:'lucy'}];
const ele = arr.find(ele => ele.type === 'dog' && ele.name === 'tommy');


// Object[key]简写
// 定义验证规则
const schema = {
  first: {
    required: true
  },
  last: {
    required: true
  }
}
// 封装通用验证函数
const validate = (schema, values) => {
  for (field in schema) {
    if (schema[field].required) {
      if (!values[field]) {
        return false;
      }
    }
  }
  return true;
}


// 双重非位运算
~~4.9 === 4   // true
// 等价于 Math.floor(4.9) === 4


// 使用~~符号进行类型转换,转换成数字类型
~~true == 1
~~false == 0
~~"" == 0
~~[] == 0
~~undefined ==0
~~!undefined == 1
~~null == 0
~~!null == 1