process.stdout.write('hello from spinner1.js ... \rheyyy\n');

let array = ['|','/','- ','\\','|' ];
let timer = -100
for (let contentArr of array){
  timer += 200
  setTimeout(() =>{
    process.stdout.write('\r' + contentArr + ' ');
    }, timer);
}
 