//function minSan(a,b){
  //  if(a>b){
  //      console.log(a);
  //  }else if (a===b){
  //      console.log('sandar barabar');
  //  }else{
  //      console.log(b);
  //  }
//}
//minSan(20,10)

//function findWord(name, word){
//    let count = 4;
//    for (const chars of name ) {
//        if(chars === word)
//            count++
//
//    }console.log(count);
//}
//findWord('w',7)

//const users = [3,4,5]
//function randomUser(){
//    let index = Math.round(Math.random()*users.length)
//    console.log(index);
    //console.log(users[2]);   
//}
//randomUser()

const names = [ 'Jasiya' , 'Angelina ', 'Erasyl ', 'Marat ', 'Daniar' , 'Alihan' ]
function randomName(){
    let index = Math.round(Math.random()*names.length)
    console.log(index);
    console.log(names[0]);
      
}
 randomName()