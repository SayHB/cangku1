var fruits = ['Apple','Banana'];
console.log(fruits.length);

//通过索引访问数组元素
var first = fruits[0];
console.log(first);
var last = fruits[fruits.length - 1];
console.log(last);

//遍历数组
fruits.forEach(function(item,index,array){
    console.log(item,index);

});

//添加元素到数组的末尾
var newlength = fruits.push('orange');
console.log(newlength);

//删除数组末尾的元素
var last = fruits.pop();
console.log(last);

//删除数组最前面（头部）的元素
var first = fruits.shift();
console.log(fruits);

//添加元素到数组的头部
var newlenth  = fruits.unshift('Strawberry');
console.log(fruits);


//找出某个元素在数组中的索引
fruits.push('Mango');
var pos = fruits.indexOf('Banana');
console.log(pos);

//通过索引删除某个元素
var removedItem = fruits.splice(pos,1);
console.log(fruits);

//从一个索引位置删除多个元素
var vegetables = ['v1','v2','v3','v4'];
var pos = 1,n = 2;
var removedItems = vegetables.splice(pos,n);
console.log(vegetables);
console.log(removedItems);

//复制一个数组
var copy = fruits.slice();
console.log(copy);



//使用一个合法的下标为数组元素赋值，并且该下标超出了当前数组的大小的时候，解释器会同时修改 length 的值
fruits[5] = 'mango';
console.log(Object.keys(fruits));
console.log(fruits.length);


//数组去重合并
function combine() {

    let arr = [].concat.apply([],arguments);
    return Array.from(new Set(arr));
}
var n = [1,2,2],m = [2,3,3];
console.log(combine(m,n));

//如果原生不支持的话，在其他代码之前执行以下代码会创建 Array.of()
if (!Array.of) {
    Array.of = function() {
        return Array.prototype.slice.call(arguments);
    };
}

//用数组将一组值以表格形式显示
values = [];
for (let x = 0;x < 10; x++){
    values.push([2 ** x,2 * x **2])
};
console.table(values);


//
// switch(status){
//
//     case 1:
//         console.log('1');
//         break;
//     case 2:
//         console.log('2');
//         break;
//     case 3:
//         console.log('3');
//         break;
//     default:
//         break;
// }
// var book = {shu};
function findIndex(id) {
    var arr = [{name:1,id:1},{name:2,id:2}];
    for(var i = 0;i < arr.length;i++){
        var book = arr[i];
        var bookid = book.id;
        var bookname = book.name;
        if(id == bookid){
            return book;
        }else{
            console.log('null');
        }
    }
}
console.log(findIndex(2));


var cars = [{name:1,id:1},{name:2,id:2},{name:3,id:3}];
function findCar(car,index) {
    return car.id == 3;
}
console.log(cars.findIndex(findCar));


var books = [{name:1,id:1},{name:2,id:2}]
function findBook(element,index) {
    return element.id == 2;
}
console.log(books.findIndex(findBook));


var person = {
    name: ['hu','jj'],
    age: 23,
    gendar: 'male',
    interests: ['basketball','film','music'],
    bio: function () {
        // alert( this.name[0]+ ' '+this.name[1]+'is'+ this.age +'years old.He is'+ this.gendar +'.He likes'+ this.interests[0] +'and' + this.interests[1] + '.');
        console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting:
        function () {
            console.log('Hi i\'m ' +this.name[0],this.name[1]+'.Nice to meet you!');

    }
}
console.log(person.name[0]);
console.log(person.bio());