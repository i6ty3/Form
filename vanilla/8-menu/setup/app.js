const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Ho-Oh",
    category: "Dinner",
    price: 16.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const btns = document.querySelector('.btn-container')


window.addEventListener('DOMContentLoaded', function(){
  displayMenu(menu);
  displayMenuButtons(menu);
  
});

function displayMenuButtons(menuButtons){
const categories = menuButtons.reduce(function(bname, abc){
    if(!bname.includes(abc.category)){
      bname.push(abc.category);
    }
    return bname;
  },['all'])
  const categoryBtns = categories.map(function(item){
    return `<button class="filter-btn" type="button" data-cat=${item}>${item}</button>`
  }).join("");
  btns.innerHTML=categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const category = e.currentTarget.dataset.cat;
    const menuCategory = menu.filter(function(menuItem){
      if (menuItem.category === category){
        return menuItem;        
      }
    });
    if (category === "all"){
      displayMenu(menuButtons);
    }else{
      displayMenu(menuCategory);
    }
  });
});
}

function displayMenu(menuItems){
  let display = menuItems.map(function(xyz){
    return `<article class="menu-item">
    <img src=${xyz.img} alt=${xyz.title} class="photo" />
    <div class="item-info">
            <header>
            <h4>${xyz.title}</h4>
            <h4 class="price">$${xyz.price}</h4>
            </header>
            <p class="item-text">
            ${xyz.desc}
            </p>
            </div>
            </article>`;
  });
  display = display.join('');
  sectionCenter.innerHTML=display;
}