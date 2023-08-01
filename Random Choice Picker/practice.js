const tags = document.getElementById('tags');
const textArea = document.getElementById('text-area');


textArea.focus();

textArea.addEventListener('keyup', () => {
  createTags();
  
let textAreaString = textArea.value;
let textAreaArray = textAreaString.split(',');
const randomTag=pickRandomTag(textAreaArray);
  highlightTag(randomTag);  
});

function createTags() {
  let textAreaString = textArea.value;
  let textAreaArray = textAreaString.split(',');
  tags.innerHTML = '';
  textAreaArray.forEach((number) => {
    const tag = document.createElement('span');
    tag.classList.add('tag');
    tag.innerText = number.trim();
    tags.appendChild(tag);
  });
}

function pickRandomTag(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}