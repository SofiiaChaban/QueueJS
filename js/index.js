function Queue() {
    this.data=JSON.parse(localStorage.getItem('data')) || [];
    this.add = function(val){
        this.data.push(val);
    }
    this.remove = function(){
        this.data.shift()
    }
    this.isEmpty = () => (this.data.length === 0);
    this.isMaxSize = () => (this.data.length === 19);
}

let queue = new Queue();
let addBtn = document.getElementById('addBtn');
let removeBtn = document.getElementById('removeBtn');
let queueContainer = document.getElementById('queueContainer');
addBtn.style.backgroundColor = '#4CAF50';
addBtn.onclick = function(){
    let currInput = document.getElementsByTagName('input')[0];
    if(currInput.value ===''){
        alert('Invalid input.');
    }
    else if(queue.isMaxSize()){
        alert('Max size of queue is 19');
    }
    else{
        queue.add(currInput.value);
        console.log(queue.data.length);
        localStorage.setItem('data',JSON.stringify(queue.data));
        let newItem = document.createElement('p');
        newItem.setAttribute('class','queueItem');
        newItem.innerHTML = currInput.value;
        queueContainer.prepend(newItem);
        localStorage.setItem('counter',(19-queue.data.length));
        counter.innerHTML = localStorage.getItem('counter');
    }
    currInput.value='';
}
removeBtn.style.backgroundColor = '#f44336';
removeBtn.onclick = function(){
    if(queue.isEmpty()){
        alert('Nothing to remove');
    }
    else{        
        queueContainer.removeChild(queueContainer.lastElementChild);
        queue.remove();
        localStorage.setItem('data',JSON.stringify(queue.data));
        localStorage.setItem('counter',(19-queue.data.length));
        counter.innerHTML = localStorage.getItem('counter');
    }
}

localStorage.setItem('counter',(19-queue.data.length));
let counterContainer = document.getElementsByClassName('counterContainer')[0]
let counter = document.createElement('p')
counter.innerHTML = localStorage.getItem('counter');
counterContainer.appendChild(counter);

queue.data.forEach(function(el){
    let item = document.createElement('p');
    item.setAttribute('class','queueItem');
    item.innerHTML = el;
    queueContainer.prepend(item);
})
