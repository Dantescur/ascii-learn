import { gsap } from "gsap";
import * as $ from "jquery";
import "./styles.css";

$(document).ready(function () {
  const showLettersButton = $("#showLetters");
  const showSpecCharsButton = $("#showSpecChars");
  const outputDiv = $("#output");

  function displayLetters() {
    // Clear the output
    outputDiv.html("");

    // Create a container for the items
    const itemsContainer = $("<div>").addClass("output-items");

    // Add letters (A to Z and a to z) to the container
    for (let i = 65; i <= 90; i++) {
      const code = i;
      const character = String.fromCharCode(i);

      const item = $("<div>")
        .addClass("output-item")
        .data("code", code)
        .text(`${code}   ${character}`); // Add spaces for spacing

      itemsContainer.append(item);
    }
    for (let i = 97; i <= 122; i++) {
      const code = i;
      const character = String.fromCharCode(i);

      const item = $("<div>")
        .addClass("output-item")
        .data("code", code)
        .text(`${code}   ${character}`); // Add spaces for spacing

      itemsContainer.append(item);
    }

    // Append the container to the output
    outputDiv.append(itemsContainer);

    // Animate the items
    animateItems(itemsContainer.children());
  }

  function displaySpecialChars() {
    // Clear the output
    outputDiv.html("");

    // Create a container for the items
    const itemsContainer = $("<div>").addClass("output-items");

    // Add special characters to the container
    const specialCharRanges = [
      { start: 33, end: 47 },
      { start: 58, end: 64 },
      { start: 91, end: 96 },
    ];

    specialCharRanges.forEach((range) => {
      for (let i = range.start; i <= range.end; i++) {
        const code = i;
        const character = String.fromCharCode(i);

        const item = $("<div>")
          .addClass("output-item")
          .data("code", code)
          .text(`${code}   ${character}`); // Add spaces for spacing

        itemsContainer.append(item);
      }
    });

    // Append the container to the output
    outputDiv.append(itemsContainer);

    // Animate the items
    animateItems(itemsContainer.children());
  }

  function animateItems(items) {
    // Use GSAP for animation
    const tl = gsap.timeline();

    // Add numbers and characters to the output with animation
    tl.staggerFromTo(
      items,
      0.5, // Animation duration
      { opacity: 0, y: -20 }, // Start state (above the screen)
      { opacity: 1, y: 0, ease: "power2.out" }, // End state (drop down), ease for smoothness
      0.1, // Stagger increment (controls the delay between each item)
    );

    // Use GSAP to play the animation
    tl.play();
  }

  showLettersButton.click(function () {
    displayLetters();
  });

  showSpecCharsButton.click(function () {
    displaySpecialChars();
  });

  const allElements = $(".container *"); // Select all elements within the .container

  // Create a GSAP timeline
  const tl = gsap.timeline();

  // Define the animation
  tl.from(allElements, { opacity: 0, duration: 2, stagger: 0.2, ease: "power2.out" });
});
