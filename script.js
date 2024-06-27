const languageSelect = document.getElementById('language');
const codeTextarea = document.getElementById('code');
const outputText = document.getElementById('output-text');
const runButton = document.getElementById('run');
const testCasesTextarea = document.getElementById('test-cases');
const stopwatchSpan = document.getElementById('stopwatch');
const clearButton = document.getElementById('clear-code');

let startTime;
let stopwatchInterval;
let typingTimer;
let typingInterval = 1000; // Start timer after 1 second of typing

// Function to update the stopwatch display
function updateStopwatch() {
  const currentTime = new Date().getTime();
  const elapsedTime = new Date(currentTime - startTime);
  const hours = String(elapsedTime.getUTCHours()).padStart(2, '0');
  const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, '0');
  const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, '0');
  stopwatchSpan.textContent = `${hours}:${minutes}:${seconds}`;
}

// Event listener for typing in the code area
codeTextarea.addEventListener('input', function() {
  clearTimeout(typingTimer);
  if (!startTime) {
    typingTimer = setTimeout(startStopwatch, typingInterval);
  }
});

function startStopwatch() {
  startTime = new Date().getTime();
  stopwatchInterval = setInterval(updateStopwatch, 1000); // Update every second
}

// Event listener for run button click
runButton.addEventListener('click', function() {
  // Ensure test cases are provided
  if (testCasesTextarea.value.trim() === '') {
    alert('Please enter your test cases before running the code.');
    return;
  }

  // Stop the stopwatch if it's running
  if (startTime) {
    clearInterval(stopwatchInterval);
    startTime = null;
  }

  // Placeholder for code execution logic
  updateOutput();

  // Simulate test case execution (optional)
  const testCases = testCasesTextarea.value.split('\n');
  for (const testCase of testCases) {
    // Implement logic to run the code with the specific test case and display results
    console.log(`Running test case: ${testCase}`);
  }
});

// Function to update simulated output based on selected language
function updateOutput() {
  const selectedLanguage = languageSelect.value;
  let simulatedOutput;

  if (selectedLanguage === 'python') {
    simulatedOutput = 'This is simulated Python output.';
  } else if (selectedLanguage === 'javascript') {
    simulatedOutput = 'This is simulated JavaScript output.';
  } else if (selectedLanguage === 'cpp') {
    simulatedOutput = 'This is simulated C++ output.';
  } else {
    simulatedOutput = 'Please select a language.';
  }

  outputText.textContent = simulatedOutput;
}

// Event listener for language selection change
languageSelect.addEventListener('change', updateOutput);

// Event listener for clear code button click
clearButton.addEventListener('click', function() {
  codeTextarea.value = '';
  testCasesTextarea.value = '';
  stopStopwatch();
  stopwatchSpan.textContent = '00:00:00';
});

// Function to stop the stopwatch
function stopStopwatch() {
  clearInterval(stopwatchInterval);
  startTime = null;
}
