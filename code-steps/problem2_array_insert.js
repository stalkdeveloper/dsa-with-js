let data = [60, 30, 10, 67, 40, 20];
let newVal = 70;
let position = 2;

for(let i=data.length-1; i>=0; i--){
    if(i >= position){
        data[i+1] = data[i];
        if(i == position){
            data[i]=newVal;
        }
    }
}
console.log(data);

/* Splice for same functionality */
// data.splice(2, 0, 70);