
      document.addEventListener("DOMContentLoaded", function () {
        const input = document.querySelector("input"),
          guess = document.querySelector(".guess"),
          checkButton = document.querySelector("button"),
          remainChances = document.querySelector(".chances");

        input.focus();

        let randomNum = Math.floor(Math.random() * 20) + 1;
        let chance = 10;

        checkButton.addEventListener("click", () => {
          chance--;

          let inputValue = parseInt(input.value);

          if (isNaN(inputValue) || inputValue < 1 || inputValue > 20) {
            guess.textContent = "Please enter a number between 1 and 20.";
            guess.style.color = "#DE0611";
          } else if (inputValue === randomNum) {
            guess.textContent = "Yay! You guessed it right!";
            guess.style.color = "green";
            input.disabled = true;
            checkButton.textContent = "Replay";
          } else if (inputValue > randomNum) {
            guess.textContent = "Your guess is high";
            remainChances.textContent = chance;
            guess.style.color = "#333";
          } else if (inputValue < randomNum) {
            guess.textContent = "Your guess is low";
            remainChances.textContent = chance;
            guess.style.color = "#333";
          }

          if (chance === 0) {
            guess.textContent = "Oops!, you've run out of chances. The correct number was " + randomNum + ".";
            guess.style.color = "#DE0611";
            input.disabled = true;
            checkButton.textContent = "Replay";
          }

          if (chance < 0) {
            window.location.reload();
          }

          input.value = "";
        });
      });
 
