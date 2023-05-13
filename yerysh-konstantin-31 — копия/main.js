const dataPhone = [
  {    
  name: "iPhone 13",    
  description: "Флагманский смартфон Apple с OLED-дисплеем, новым процессором A15 Bionic и тройной камерой.",    
  cost: 999,    
  brand: "Apple"  
  },  
  {    
  name: "Samsung Galaxy Z Flip 3",    
  description: "Смартфон-раскладушка с дисплеем из стекла, процессором Snapdragon 888 и двойной камерой.",    
  cost: 999,    
  brand: "Samsung"  },  
  {    
  name: "OnePlus 10 Pro",    
  description: "Флагманский смартфон OnePlus с 6,7-дюймовым дисплеем, процессором Snapdragon 8 Gen 1 и четверной камерой.",    
  cost: 899,    
  brand: "OnePlus"  
  },  
  {    
  name: "Google Pixel 6",    
  description: "Смартфон с дисплеем из супертонкого стекла, новым процессором Tensor и двойной камерой.",    
  cost: 749,    "brand": "Google"  },  
  {    
  name: "Xiaomi Mi 12",    
  description: "Флагманский смартфон Xiaomi с 6,8-дюймовым дисплеем, процессором Snapdragon 8 Gen 1 и пятикратной камерой.",    
  cost: 999,    
  brand: "Xiaomi"  
}
];

const dataLaptop = [
  {
    name: "MacBook Pro",
    description: "Powerful laptop for professional use",
    cost: 1999,
    brand: "Apple"
  },
  {
    name: "ThinkPad X1 Carbon",
    description: "Ultra-light and durable business laptop",
    cost: 1599,
    brand: "Lenovo"
  },
  {
    name: "Surface Laptop 4",
    description: "Sleek and stylish laptop for everyday use",
    cost: 1299,
    brand: "Microsoft"
  },
  {
    name: "ZenBook UX425",
    description: "Thin and light laptop with long battery life",
    cost: 899,
    brand: "Asus"
  },
  {
    name: "Chromebook Spin 713",
    description: "Affordable and versatile laptop for students",
    cost: 599,
    brand: "Acer"
  }
];

const dataTablet = [
  {
    name: "iPad Pro",
    description: "11-inch Liquid Retina display, A14 Bionic chip, and support for Apple Pencil and Magic Keyboard.",
    cost: 799,
    brand: "Apple"
  },
  {
    name: "Galaxy Tab S7+",
    description: "12.4-inch Super AMOLED display, Qualcomm Snapdragon 865 Plus processor, and support for the S Pen.",
    cost: 849,
    brand: "Samsung"
  },
  {
    name: "Surface Pro 7+",
    description: "12.3-inch PixelSense display, 11th Gen Intel Core processors, and optional LTE Advanced.",
    cost: 899,
    brand: "Microsoft"
  },
  {
    name: "Lenovo Tab P11 Pro",
    description: "11.5-inch OLED display, Qualcomm Snapdragon 730G processor, and quad speakers tuned by JBL.",
    cost: 499,
    brand: "Lenovo"
  },
  {
    name: "Fire HD 10",
    description: "10.1-inch 1080p full HD display, octa-core processor, and up to 12 hours of battery life.",
    cost: 149,
    brand: "Amazon"
  }
];

// const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
// const tabsItems = document.querySelectorAll('.tabs__item');

// tabsBtn.forEach(onTabClick);

// function onTabClick(item) {
//   item.addEventListener("click", function() {
//     let currentBtn = item;
//     let tabId = currentBtn.getAttribute('data-tab')
//     let currentTab = document.querySelector(tabId);
  
//     if(!currentBtn.classList.contains('active')) {
//       tabsBtn.forEach(function(item) {
//         item.classList.remove('active')
//       });
  
//       tabsItems.forEach(function(item) {
//         item.classList.remove('active')
//       });
  
//       currentBtn.classList.add("active");
//       currentTab.classList.add("active");
//     }


//   })
// };


// createTable();


let navButton = document.querySelector('.nav-link');

navButton.addEventListener('click', () => {
  let table = document.querySelector('.table');
  let phone = document.createElement('div');
  
  if (!table.querySelector('.card')) {
    phone.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div></div>`;
  
    table.appendChild(phone);
  }

});