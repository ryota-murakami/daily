const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


async function* foo() {
    yield 1;
    yield 2;
  }
  
  (async function() {
    for await (const num of foo()) {
      console.log(num);
      // expected output: 1
  
      break; // closes iterator, triggers return
    }
  })();
  