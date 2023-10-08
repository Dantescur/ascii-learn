import { gsap } from "gsap";
import * as $ from "jquery"; // Import jQuery
import "./styles.css";

$(document).ready(function () {
  const showLettersButton = $("#showLetters");
  const showSpecCharsButton = $("#showSpecChars");
  const startPracticeButton = $("#startPractice");
  const outputDiv = $("#output");
  const timerDiv = $("#timer");
  const timeSpan = $("#time");
  const userInputField = $("#userInput");

  showLettersButton.click(function () {
    outputDiv.html("Code\tCharacter<br>");
    for (let i = 65; i <= 90; i++) {
      outputDiv.append(`${i}\t${String.fromCharCode(i)}<br>`);
    }
    for (let i = 97; i <= 122; i++) {
      outputDiv.append(`${i}\t${String.fromCharCode(i)}<br>`);
    }
  });

  showSpecCharsButton.click(function () {
    outputDiv.html("Code\tCharacter<br>");
    for (let i = 33; i <= 47; i++) {
      outputDiv.append(`${i}\t${String.fromCharCode(i)}<br>`);
    }
    for (let i = 58; i <= 64; i++) {
      outputDiv.append(`${i}\t${String.fromCharCode(i)}<br>`);
    }
    for (let i = 91; i <= 96; i++) {
      outputDiv.append(`${i}\t${String.fromCharCode(i)}<br>`);
    }
  });

  startPracticeButton.click(function () {
    outputDiv.html("");
    userInputField.val("").focus(); // Clear and focus the input field

    const randomAscii = Math.floor(Math.random() * (127 - 32) + 32);
    outputDiv.html(
      `Di el carácter correspondiente para el código ${randomAscii}<br>`,
    );

    let remainingTime = 10;
    const timerInterval = setInterval(function () {
      timeSpan.text(`${remainingTime} segundos restantes`);
      remainingTime--;

      if (remainingTime < 0) {
        clearInterval(timerInterval);
        userInputField.prop("disabled", true);
        outputDiv.append("<div style='color: red;'>Tiempo agotado</div>");
      }
    }, 1000);

    userInputField.keydown(function (event) {
      if (event.key === "Enter") {
        const userInput = userInputField.val();

        if (userInput === String.fromCharCode(randomAscii)) {
          clearInterval(timerInterval);
          userInputField.prop("disabled", true);
          outputDiv.append("<div style='color: green;'>¡FELICIDADES!</div>");
        } else {
          outputDiv.append("<div style='color: red;'>Incorrecto</div>");
        }
      }
    });
  });
});
