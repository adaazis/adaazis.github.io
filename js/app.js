
const container=document.getElementById('carousel');
ARTWORKS.forEach(a=>{
 const card=document.createElement('article');
 card.className='card';
 card.innerHTML=`
 <img src="${a.image}" alt="${a.title}">
 <h3>${a.title}</h3>
 <p>${a.category}</p>
 <p>${a.description}</p>`;
 container.appendChild(card);
});
