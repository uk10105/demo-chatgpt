document.addEventListener('DOMContentLoaded', function () {
    // Variables to track typing speed test
    let startTime;
    let endTime;
    let typingTimer;
  
    // Elements
    const timerDisplay = document.getElementById('timer');
    const textInput = document.getElementById('textInput');
    const pauseButton = document.getElementById('pauseButton');
    const resetButton = document.getElementById('resetButton');
    const charCountDisplay = document.getElementById('charCount');
  
    // Event listener for input field to start timer when typing begins
    textInput.addEventListener('input', startTimer);
  
    // Event listener for pause button to stop timer
    pauseButton.addEventListener('click', stopTimer);
  
    // Event listener for reset button to reset timer and input field
    resetButton.addEventListener('click', resetTest);
  
    // Function to start the timer
    function startTimer() {
      if (!startTime) {
        startTime = new Date();
        typingTimer = setInterval(updateTimer, 1000);
      }
    }
  
    // Function to update the timer display
    function updateTimer() {
      const currentTime = new Date();
      const elapsedTime = new Date(currentTime - startTime);
      timerDisplay.textContent = elapsedTime.toISOString().substr(11, 8);
    }
  
    // Function to stop the timer
    function stopTimer() {
      clearInterval(typingTimer);
      endTime = new Date();
      calculateSpeed();
    }
  
    // Function to reset the timer and input field
    function resetTest() {
      clearInterval(typingTimer);
      startTime = null;
      timerDisplay.textContent = '00:00:00';
      textInput.value = '';
      charCountDisplay.textContent = 'Characters typed: 0';
    }
  
    // Function to calculate typing speed
    function calculateSpeed() {
      const elapsedTimeInSeconds = (endTime - startTime) / 1000;
      const numCharacters = textInput.value.length;
      const typingSpeed = (numCharacters / elapsedTimeInSeconds) * 60; // Characters per minute
      displaySpeed(typingSpeed);
    }
  
    // Function to display typing speed
    function displaySpeed(speed) {
      alert(`Your typing speed is ${Math.round(speed)} characters per minute.`);
    }
  
    // Event listener for input field to update character count display
    textInput.addEventListener('input', updateCharCount);
  
    // Function to update character count display
    function updateCharCount() {
      const numCharacters = textInput.value.length;
      charCountDisplay.textContent = `Characters typed: ${numCharacters}`;
    }
  });
  