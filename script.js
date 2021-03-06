const menu=[
	{
		id:0,
		title: "Pancake con chocolate y fresa",
		src:"./images/item-1.jpeg",
		price: 7.5,
		description:"Delicioso pancake apenas salido de la sartén. Elaborado con leche desnatada y harina integral, huevos, sal del himalaya y azúcar moreno. El chocolate negro líquido y el sirope de fresa adornan su envoltura.",
		category: "dessert",	
	},
	{   id:1,
		title: "Hamburger de ternera y bacon",
		src:"./images/item-2.jpeg",
		price: 13,
		description:"Tremenda hamburguesa con bacon y carne de ternera. Con lechuga, pepinillos y tomate deshidratado. Acompañada por salsa barbacoa y mahonesa además de una buena ración de patatas fritas.",
		category: "lunch",
	},
	{	id:2,
		title: "Milkshake con dunkin",
		src:"./images/item-3.jpeg",
		price: 8.5,
		description:"Dunkin de chocolate sobre un batido de leche con distintos sabores. Todo ello cubierto por nata con trozos de fruta confitada.",
		category: "dessert",
	},
	{	id:3,
		title: "English breakfast",
		src:"./images/item-4.jpeg",
		price: 9,
		description:"Desayuno con huevos fritos estrellados en tostada con alubias, queso fundido, mantequilla y salsas. Se sirve tanto con café americano, como expreso, con leche, cortado o capuchino. Acompañado de zumo de naranja o piña.",
		category: "breakfast",
	},
	{	id:4,
		title: "Hamburguesa con huevo revuelto",
		src:"./images/item-5.jpeg",
		price: 12,
		description:"Hamburguesa con huevo revuelto, lechuga y tomate en salsa agridulce.",
		category: "dinner",
	},
	{	id:5,
		title: "Batido de galletas oreo",
		src:"./images/item-6.jpeg",
		price: 6,
		description:"Superbatido de café con galletas de chocolate oreo.",
		category: "dessert",
	},
	{	id:6,
		title: "Bocata de huevo estrellado con bacon",
		src:"./images/item-7.jpeg",
		price: 7,
		description:"Bocata de huevo estrellado con bacon con pan de pueblo y acompañado de lechuga y tomate. Salsas a elección.",
		category: "dinner",
	},
	{	id:7,
		title: "Doble libra de carne",
		src:"./images/item-8.jpeg",
		price: 12.50,
		description:"Doble hamburger de carne vacuno con queso fundido acompañado de lechuga y tomate. Con una ración grande de patatas fritas y tanto ketchup como mahonesa y mostaza.",
		category: "lunch",
	},
	{	id:8,
		title: "Helado diversos sabores",
		src:"./images/item-9.jpeg",
		price: 5,
		description:"Helado casero en copa de postre recubierto de nata.",
		category: "dessert",
	},
	{	id:9,
		title: "Solomillo relleno",
		src:"./images/item-10.jpeg",
		price: 10,
		description:"Solomillo relleno acompañado de esparragos trigueros con patatas a lo pobre.",
		category: "lunch",
	}
];


const sectionCenter= document.querySelector(".section-center");


window.addEventListener ("DOMContentLoaded", function(){
	displayMenuItems(menu);
	displayFilterButtons();
});



function displayMenuItems (menuItems){
 	let displayMenu= menuItems.map(function(item){
 		return `<article class="menu-item">
 					<img src=${item.src} class="photo" alt=${item.title}/>
  					<div class="item-info">
 						<header>
 							<h4> ${item.title}</h4>
 							<h4 class="price"> ${item.price}€ </h4>
 						</header>
 						<p class="item-description"> ${item.description}</p>
 					</div>	
 				</article>`
 	});
 	sectionCenter.innerHTML=displayMenu.join("");
}

function displayFilterButtons(){

	const filterBtns = document.querySelectorAll('.filter-btn');
 	filterBtns.forEach(function(btn){
 		btn.addEventListener("click", function(e){

 			console.log(e.currentTarget.dataset.id);
 			const category= e.currentTarget.dataset.id;
 			const menucategory= menu.filter(function(item){
 				// console.log(item.category);
 				if (item.category===category){
 					return item;
 				}
 			});
 			if (category==="all"){
 				displayMenuItems (menu);
 			} else{
 				displayMenuItems(menucategory);
 			}
 		});

 	});

}
