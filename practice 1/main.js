const array = ['apple', 'cherry', 'raspberry']
parent = document.getElementById('parent')

for (let i = 0; i < array.length; i++){
    p = document.createElement('p');
    p.id = 'p' + i + 1;
    p.textContent = array[i];
    parent.appendChild(p);
} 