document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('nameInput');
  const goButton = document.getElementById('goButton');
  const output = document.getElementById('output');
  
  function updateOutput() {
    const name = nameInput.value.trim();
    if (name) {
      output.innerHTML = `Hi, I'm <span class="highlight-name">${name}</span>. This is my journey to becoming an exceptional developer. I'm excited to be a part of the eha-academy-cohort-6!`;
      output.style.visibility = 'visible';
    } else {
      output.style.visibility = 'hidden';
    }
  }

  goButton.addEventListener('click', updateOutput);

  nameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      updateOutput();
    }
  });
});
