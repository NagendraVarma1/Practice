
function getTheUserExpenses(event){
    event.preventDefault();
    let amount = document.getElementById('expenses').value;
    let desc = document.getElementById('description').value;
    let category = document.getElementById('category').value;

    let obj = {
        amount,
        desc,
        category
    }
    localStorage.setItem(obj.desc,JSON.stringify(obj));
    show(obj);
}

function show(obj){
    let ul = document.getElementById('expensesList');
    let li = document.createElement('li');
    let dltBtn = document.createElement('button');
    dltBtn.textContent='Delete';
    dltBtn.style="background-color:red";

    dltBtn.onclick = () => {
        localStorage.removeItem(obj.desc);
        ul.removeChild(li);
    }

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style="background-color:#f4f4f4";

    editBtn.onclick = () => {
        document.getElementById('expenses').value = obj.amount;
        document.getElementById('description').value = obj.desc;
        document.getElementById('category').value = obj.category;
        localStorage.removeItem(obj.desc);
        ul.removeChild(li);
    }
    li.textContent = `Amount: ${obj.amount}, Description: ${obj.desc}, Category: ${obj.category}`;
    li.append(editBtn);
    li.append(dltBtn);
    ul.appendChild(li);
}

