function FizzBuzzFor() {
  counter = 0;
  const listdiv = document.querySelector(".list");
  const list = document.createElement("ul");
  listdiv.appendChild(list);
  console.log(list);
  for (let i = 0; i < 100; i++) {
    const liElemnts = document.createElement("li");
    list.appendChild(liElemnts);
    let h3counter = `Nr.${counter} - `;
    let h3text = document.createElement("h3");
    counter++;
    if (counter % 3 == 0) {
      h3text.innerText = h3counter + "Fizz";
    } else if (counter % 5 == 0) {
      h3text.innerText = h3counter + "Buzz";
    } else {
      h3text.innerText = h3counter + counter;
    }
    liElemnts.appendChild(h3text);
  }
}

FizzBuzzWhile = () => {
  counter = 0;
  while (counter < 100) {
    counter++;
    if (counter % 3 == 0) {
      console.log("Fizz");
    } else if (counter % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(counter);
    }
  }
};

FizzBuzzFor();
FizzBuzzWhile();
