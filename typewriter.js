const sentence = "hello there from lighthouse labs"; 
let duration = 0;
for (const char of sentence) { 
  setTimeout(() => {
    process.stdout.write (char);
  }, duration)
  duration += 50;
}   

setTimeout(() => {
  process.stdout.write ("\n");
}, duration + 50)