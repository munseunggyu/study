console.log(this);
console.log(this === module.exports);

function a() {
  console.log(global === this);
}

a();
