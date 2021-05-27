function add(input){
  const arg = input.slice(2);
  let a = parseInt(arg[0]);
  let b = parseInt(arg[1]);
  console.log(a+b);
return a + b
}

add(process.argv);
