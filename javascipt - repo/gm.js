let gallery = document.getElementById('gallery');

let images = [
  'https://tse1.mm.bing.net/th?id=OIP.fmmAx2o6NndScaWWcPGcYQHaE8&pid=Api&rs=1&c=1&qlt=95&w=153&h=102',
  'https://tse1.mm.bing.net/th?id=OIP.05gBtkpqfy-OonbTZNVNUgHaE8&pid=Api&rs=1&c=1&qlt=95&w=153&h=102',
  'https://tse1.mm.bing.net/th?id=OIP.oNL0WVKWd9taiCocFEPH_AHaE8&pid=Api&rs=1&c=1&qlt=95&w=152&h=101',
  'https://tse1.mm.bing.net/th?id=OIP.CyP3NeT5W-wSmehiSWmHXAHaE7&pid=Api&rs=1&c=1&qlt=95&w=152&h=101',
  'https://tse1.mm.bing.net/th?id=OIP.utD25xYyCCAZ364xvgjagQHaEo&pid=Api&rs=1&c=1&qlt=95&w=152&h=95',
  // Add more image URLs here
];

function switchToListView() {
  gallery.innerHTML = ''; // Clear existing gallery content
  images.forEach(imageUrl => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    const image = document.createElement('img');
    image.src = imageUrl;
    galleryItem.appendChild(image);
    gallery.appendChild(galleryItem);
  });
}

function switchToGridView() {
  gallery.innerHTML = ''; // Clear existing gallery content
  images.forEach(imageUrl => {
    const image = document.createElement('img');
    image.src = imageUrl;
    gallery.appendChild(image);
  });
}

// By default, switch to grid view
switchToGridView();
