let delay = 100;
let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let char of spinner) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(`\r${char}    `);
  }, delay);
}