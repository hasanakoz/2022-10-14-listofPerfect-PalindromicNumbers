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
  for (i = n1.value; i <= n2.value; i++) {
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
});
