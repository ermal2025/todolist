console.log("JavaScript loaded!");
    document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
  
        // Toggle complete when clicking the task
        li.addEventListener("click", function() {
          li.classList.toggle("completed");
        });
  
        // Add a delete button
        const span = document.createElement("span");
        span.textContent = "✖";
        span.addEventListener("click", function(event) {
          event.stopPropagation(); // stop toggling
          li.remove();
        });
  
        li.appendChild(span);
        taskList.appendChild(li);
  
        // Clear the input
        taskInput.value = "";
      }
    });
  });

  const flyingEmoji = document.getElementById('flyingEmoji');

function randomPosition() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  flyingEmoji.style.left = `${x}px`;
  flyingEmoji.style.top = `${y}px`;
}

// Move it every 2 seconds randomly
setInterval(randomPosition, 2000);

function randomPosition() {
    const emojis = document.querySelectorAll('.emoji'); // Get all emojis
  
    emojis.forEach((emoji, index) => {
      // Random positions
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      // Random animation duration between 5 and 12 seconds for each emoji
      const randomDuration = Math.random() * (12 - 5) + 5; // Between 5 and 12 seconds
  
      // Apply random position and duration
      emoji.style.left = `${x}px`;
      emoji.style.top = `${y}px`;
      emoji.style.animationDuration = `${randomDuration}s`;
    });
  }
  
  // Call the randomPosition function every 2 seconds
  setInterval(randomPosition, 2000);

  