let data = [20, 30, 10, 5, 50, 70, 100];

let item = 70;
let index = null;
for(let i=0; i<data.length-1; i++){
    if(data[i] === item){
        index = i;
        break;
    }
}
// console.log(index);
// console.log(data.indexOf(item));
// data.splice(2, 1); // for delete on 2nd positions;