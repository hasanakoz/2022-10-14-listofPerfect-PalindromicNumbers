let n1 = document.querySelector(".palindrome input");
let n2 = document.querySelector(".perfect-number input");
const palindromeButton = document.querySelector(".palindrome button");
const palindromeArea = document.querySelector(".palindrome-list-area");
const perfectButton = document.querySelector(".perfect-number button");
const perfectArea = document.querySelector(".perfect-list-area");
console.log(perfectArea);

palindromeButton.addEventListener("click", () => {
  palindromeArea.innerHTML = "";
  palindrome();
  //   palindromeList.innerHTML = "";
});

const palindrome = () => {
  for (i = Number(n1.value); i <= Number(n2.value); i++) {
    if (String(i).split("").reverse().join("") == String(i)) {
      console.log(i);
      let palindromeList = document.createElement("li");
      palindromeArea.appendChild(palindromeList);

      palindromeList.innerHTML += i;
    }
  }
};

perfectButton.addEventListener("click", () => {
  perfectArea.innerHTML = "";
  perfectNumbers();
  console.log(typeof n1.value);
});

const perfectNumbers = () => {
  for (let i = Number(n1.value) || 1; i <= Number(n2.value); i++) {
    let sum = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        sum += j;
      }
    }
    if (sum == i) {
      let perfectList = document.createElement("li");
      perfectArea.appendChild(perfectList);

      perfectList.innerHTML += i;
    }
  }
};
