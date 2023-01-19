const list = document.querySelector('.contact-list');
const pagination = document.querySelector('.pagination');

let currentPage = 1;
let numberOfPages =  Math. ceil(users.length/10);

const numberOfContacts =document.querySelector('.page-header'); 
numberOfContacts.innerHTML= ` <h2>Contacts</h2>
<h3>Total: ${users.length}</h3>`;

displayContacts();
displayPagination();
const links = Array.from( document.querySelectorAll( '.pagination a' ));
links.map( link => link.addEventListener( 'click', updateContacts )); 
function sayHi() { alert( 'Hi!' ); }


//let users= [];
function displayContacts(){
    //e.preventDefault();
    // currentPage = e.innerText;
    let initialContact = currentPage-1;
    let lastContact= currentPage*10; 
    for(i=initialContact;i<lastContact;i++){
          let name = users[i].name;
          let email = name.replaceAll(" ", ".");
          list.innerHTML += `<li class="contact-item cf">
        <div class="contact-details">
            <img class="avatar" src="${users[i].image}"< />
            <h3>${users[i].name}</h3>
            
            <span class="email">${email}@example.com</span>
        </div>
        <div class="joined-details">
               <span class="date">Joined ${users[i].joined}</span>
       </div>
    </li>`

    }
}

function updateContacts(e){
    e.preventDefault();
// Logs out the Event Object
//Removing color from other buttons 
links.map(link=>{link.style.background="rgba(0,0,0,0)"});
 currentPage = this.innerText;
 console.log(currentPage);
 let initialContact = (currentPage*10)-10;
 let lastContact= currentPage*10; 
 list.innerHTML= null;
for(i=initialContact;i<lastContact;i++){
   if (users[i]!= undefined){
       let name = users[i].name;
       let email = name.replaceAll(" ", ".");
        list.innerHTML += `<li class="contact-item cf">
        <div class="contact-details">
            <img class="avatar" src="${users[i].image}"< />
            <h3>${users[i].name}</h3>
            <span class="email">${email}@example.com</span>
        </div>
        <div class="joined-details">
               <span class="date">Joined ${users[i].joined}</span>
       </div>
    </li>`
   }
}
 this.style.background="rgb(30,144,255)";

}

function displayPagination(){
    let pageNumber =1;
    for(i = 0 ;i<numberOfPages;i++){
    
        pagination.innerHTML+= `<a href="#">${pageNumber}</a>`;
        pageNumber++;
          
    }
    
}
