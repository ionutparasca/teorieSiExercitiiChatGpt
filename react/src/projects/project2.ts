console.log("===============================");
console.log("===       Second Project     ===");
console.log("===============================");

const emoji: string[] = ["😊", "🙂", "😥", "😡"];
console.log(emoji.length);
console.log(emoji[0]);
emoji.forEach((emoticon, index) => {
  console.log(`Emotie ${index + 1}`, emoticon);
});
