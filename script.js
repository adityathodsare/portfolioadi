document.addEventListener("DOMContentLoaded", () => {
  const aboutText = 
    "Hello! I'm Aditya, a passionate Java full-stack developer specializing in Java, React.js, Spring Boot, MySQL, and MongoDB. I have a strong foundation in Data Structures and Algorithms and enjoy creating efficient and dynamic web solutions.\n\nAcademic Achievements: First Year CGPA: 8.24 | Second Year CGPA: 9.07";
  
  const typewriterElement = document.querySelector(".typewriter-text");
  let i = 0;

  function typeText() {
    if (i < aboutText.length) {
      typewriterElement.textContent += aboutText.charAt(i);
      i++;
      setTimeout(typeText, 50); // Adjust speed here (in ms)
    }
  }

  typeText(); // Start the typewriter effect
});
