function updateCount() {
  const char = '✔️'; // replace with the character you want to count
  const text = document.querySelector('body').textContent;
  const regex = new RegExp(char, 'g');
  const count = (text.match(regex) || []).length;
  document.getElementById('count').innerHTML = `Occurrences of '${char}': ${count}`;
}

updateCount();
