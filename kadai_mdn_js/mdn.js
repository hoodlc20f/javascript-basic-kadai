const now = new Date();
const year = now.getFullYear();
const month = now.getMonth()+1;
const date = now.getDate();
const today=(year+'年'+month+'月'+date+'日');
console.log(today);