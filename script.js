// const tableBody = document.querySelector('.tableBody');
// tableBody.insertAdjacentHTML(`beforeend`,
// `<tr>
// <th scope="row">3</th>
// <td></td>
// <td></td>
// <td></td>
// </tr>`)
 


// const input = document.querySelector('.name')
// input.addEventListener('input',(event)=>{
//     console.log(event.target.value)
// })
// const last = document.querySelector('.last')
// last.addEventListener('input',(event)=>{
//     console.log(event.target.value)
// })
// const email = document.querySelector('.email')
// email.addEventListener('input',(event)=>{
//     console.log(event.target.value)
// })


// const newRowButton = document.querySelector('.addNewRow')

// newRowButton.addEventListener('click', ()=> {
//     const nameinput = document.querySelector('.name');
//     const lastinput = document.querySelector('.last');
//     const handleinput = document.querySelector('.email');
//     (nameinput.value,lastinput.value,handleinput.value);
 

// })

// const newRowButton = document.querySelector('.addNewRow')

// newRowButton.addEventListener('click', ()=> {
//     const tableBody = document.querySelector('.tableBody');
// tableBody.insertAdjacentHTML(`beforeend`,
// `<tr>
// <th scope="row">3</th>
// <td></td>
// <td></td>
// <td></td>
// </tr>`)
// })
// const print = () =>{
//     console.log(10)
// }

// print()
// const Table = document.querySelector('.table tbody')
// Table.insertAdjacentHTML('beforeend', 
//     `<tr>
//     <th scope="row">3</th>
//     <td></td>
//     <td></td>
//     <td></td>
//     </tr>`)
// const tr = document.createElement('tr')
// const th = document.createElement('th')
// th.innerText = '3'
// const td1 = document.createElement('td')
// td1.innerText = 'lora'
// const td2 = document.createElement('td')
// td2.innerText = 'karkoa'
// const td3 = document.createElement('td')
// td3.innerText = 'lattakia'
// tr.appendChild(th)
// tr.appendChild(td1)
// tr.appendChild(td2)
// tr.appendChild(td3)
// const table = document.querySelector('.table tbody')
// table.appendChild(tr)
 const addRowFun = (x,y,z,i) => {
    const Table = document.querySelector('.table tbody')
Table.insertAdjacentHTML('beforeend', 
    `<tr>
    <th scope="row">${i}</th>
    <td>${x}</td>
    <td>${y}</td>
    <td>${z}</td>
    <td><button type="button" class="btn btn-info delataButton-${i} " style="width: 150px;">delte Row</button></td>
    </tr>`)

 }
 let i=2;
const addRow = document.querySelector('.addNewRow')
addRow.addEventListener('click', (event) => {
// console.log(event)
// addRowFun()
const Name = document.querySelector('.name')
const last = document.querySelector('.last')
const handle = document.querySelector('.email')
console.log(Name.value, last.value, handle.value)
i++
addRowFun(Name.value,last.value,handle.value,i)


const deleteButton = document.querySelector(`.delataButton-${i}`)
deleteButton.addEventListener('click', (event) => {
    console.log(event.target);
  (event.target.parentElement.parentElement.remove());
});
Name.value='';
last.value='';
handle.value='';
})

// const Name = document.querySelector('.name')
// Name.addEventListener('input', (event) =>{
   
// })
// const deleteButton = document.querySelector('.delataButton')
// if (deleteButton != null) {
// deleteButton.addEventListener('click', () => {
//     console.log('delete')
// });}







// طريقة 1
// const delate = (event)=>{
//     (event.target.parentElement.parentElement.remove());
// }
//onclick="delate(event)"   eventlistener ونستغني عن استدعاء الزر و  +button نضعها ضمن ال 