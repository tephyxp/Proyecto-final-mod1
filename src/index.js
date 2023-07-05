
const productos = [
    {skinType: 'normal', 
    productImages: [
        '../img/piel-normal/1-balsamo.jpeg',
        '../img/piel-normal/2-jabon.jpeg',
        '../img/piel-normal/3-exfoliante.jpg',
        '../img/piel-normal/4-tonico.jpeg',
        '../img/piel-normal/5-esencia.jpeg',
        '../img/piel-normal/6-serum.jpeg',
        '../img/piel-normal/7-contorno.jpg',
        '../img/piel-normal/8-crema-hidratante.jpeg',
        '../img/piel-normal/9-mascarilla.png',
        '../img/piel-normal/10-protector-solar.jpeg',
        ],
    concern:'antiedad',},
    {skinType: 'grasa', 
    productImages: [
        '../img/piel-grasa/1-balsamo.jpeg',
        '../img/piel-grasa/2-jabon.jpeg',
        '../img/piel-grasa/3-exfoliante.jpg',
        '../img/piel-grasa/4-tonico.jpeg',
        '../img/piel-grasa/5-esencia.jpeg',
        '../img/piel-grasa/6-serum.jpeg',
        '../img/piel-grasa/7-contorno.jpeg',
        '../img/piel-grasa/8-crema-hidratante.jpeg',
        '../img/piel-grasa/9-mascarilla.jpeg',
        '../img/piel-grasa/10-protector-solar.jpeg',
        ],
    concern:'acne',},
    {skinType: 'sensible', 
    productImages: [
        '../img/piel-normal/1-balsamo.jpeg',
        '../img/piel-normal/2-jabon.jpeg',
        '../img/piel-normal/3-exfoliante.jpg',
        '../img/piel-normal/4-tonico.jpeg',
        '../img/piel-normal/5-esencia.jpeg',
        '../img/piel-normal/6-serum.jpeg',
        '../img/piel-normal/7-contorno.jpg',
        '../img/piel-normal/8-crema-hidratante.jpeg',
        '../img/piel-normal/9-mascarilla.png',
        '../img/piel-normal/10-protector-solar.jpeg',
        ],
    concern:'antiedad',},
    {skinType: 'seca', 
    productImages: [
        '../img/piel-seca/1-balsamo.jpeg',
        '../img/piel-seca/2-jabon.jpeg',
        '../img/piel-seca/3-exfoliante.jpg',
        '../img/piel-seca/4-tonico.jpeg',
        '../img/piel-seca/5-esencia.jpeg',
        '../img/piel-seca/6-serum.jpeg',
        '../img/piel-seca/7-contorno.jpeg',
        '../img/piel-seca/8-crema-hidratante.jpeg',
        '../img/piel-seca/9-mascarilla.png',
        '../img/piel-seca/10-protector-solar.jpeg',
        ],
    concern:'sequedad',},
    {skinType: 'normal', 
    productImages: [
        '../img/piel-acne/1-balsamo.jpeg',
        '../img/piel-acne/2-jabon.jpeg',
        '../img/piel-acne/3-exfoliante.jpg',
        '../img/piel-acne/4-tonico.jpeg',
        '../img/piel-acne/5-esencia.jpg',
        '../img/piel-acne/6-serum.jpeg',
        '../img/piel-acne/7-contorno.jpeg',
        '../img/piel-acne/8-crema-hidratante.jpeg',
        '../img/piel-acne/9-mascarilla.png',
        '../img/piel-acne/10-protector-solar.png',
        ],
    concern:'acne',},
    {skinType: 'normal', 
    productImage:'../img/piel-normal/4-tónico.jpeg',
    concern:'antiedad',},
    {skinType: 'grasa', 
    productImages: [
        '../img/piel-grasa/1-balsamo.jpeg',
        '../img/piel-grasa/2-jabon.jpeg',
        '../img/piel-grasa/3-exfoliante.jpg',
        '../img/piel-grasa/4-tonico.jpeg',
        '../img/piel-grasa/5-esencia.jpeg',
        '../img/piel-grasa/6-serum.jpeg',
        '../img/piel-grasa/7-contorno.jpeg',
        '../img/piel-grasa/8-crema-hidratante.jpeg',
        '../img/piel-grasa/9-mascarilla.jpeg',
        '../img/piel-grasa/10-protector-solar.jpeg',
        ],
    concern:'puntos negros',},
    {skinType: 'grasa', 
    productImages: [
        '../img/piel-grasa/1-balsamo.jpeg',
        '../img/piel-grasa/2-jabon.jpeg',
        '../img/piel-grasa/3-exfoliante.jpg',
        '../img/piel-grasa/4-tonico.jpeg',
        '../img/piel-grasa/5-esencia.jpeg',
        '../img/piel-grasa/6-serum.jpeg',
        '../img/piel-grasa/7-contorno.jpeg',
        '../img/piel-grasa/8-crema-hidratante.jpeg',
        '../img/piel-grasa/9-mascarilla.jpeg',
        '../img/piel-grasa/10-protector-solar.jpeg',
        ],
    concern:'poros',},
    {skinType: 'mixta', 
    productImages: [
        '../img/piel-mixta/1-balsamo.jpeg',
        '../img/piel-mixta/2-jabon.png',
        '../img/piel-mixta/3-exfoliante.jpeg',
        '../img/piel-mixta/4-tonico.jpeg',
        '../img/piel-mixta/5-esencia.jpeg',
        '../img/piel-mixta/6-serum.jpeg',
        '../img/piel-mixta/7-contorno.jpeg',
        '../img/piel-mixta/8-crema-hidratante.jpeg',
        '../img/piel-mixta/9-mascarilla.jpeg',
        '../img/piel-mixta/10-protector-solar.jpeg',
        ],
    concern:'acne',},
];

const form = document.getElementById('myForm');
const gridContainer = document.getElementById('gridContainer');
const skinType = document.getElementById('skinType');
const concern = document.getElementById('concern');

form.addEventListener('submit',handleSubmit);

function handleSubmit(event){
event.preventDefault();
// console.log(skinType.value)
// console.log(concern.value)
const selectedSkinType = skinType.value;
const selectedConcern = concern.value;

const filteredProducts = productos.filter(product => 
    product.skinType === selectedSkinType && product.concern === selectedConcern
  );

  displayProducts(filteredProducts);
}

function displayProducts(products) {
    gridContainer.innerHTML = ''; // Limpiar el contenido anterior del grid
  
    products.forEach(product => {
      product.productImages.forEach(imageSrc => {
        const imageElement = document.createElement('img');
        imageElement.src = imageSrc;
        imageElement.classList.add('w-full', 'h-auto');
  
        const gridItem = document.createElement('div');
        gridItem.classList.add('col-span-1');
        gridItem.appendChild(imageElement);
  
        gridContainer.appendChild(gridItem);
      });
    });
  }

// guardar valores en una variable , o crear array con opciones elegidas, guardar info en variables,recorrer el array para ver que infor hace match con un filter (condicion : skinType === skintype.value que debe estar guardada en una variable,y el  concern === concern.value que debe estar guardada en una variable)
//array resultante del filter, hacer un map para que por cada elemento de la array crear un elemento html que serán las cards con la imagen guardada en el array

