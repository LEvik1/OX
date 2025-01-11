let doc = document
    AOS.init();
// BURGER MENU -------------------------------------------------------------------------------

let burg_menu = doc.querySelector('.burger_menu')
let burg1 = doc.querySelector('.burger1')
let burg2 = doc.querySelector('.burger2')
let burg3 = doc.querySelector('.burger3')
let aside = doc.querySelector('.not_active')


burg_menu.addEventListener('click', ()=> {
    aside.classList.toggle('active')
    burg1.classList.toggle("act_1");
    burg2.classList.toggle("act_2");
    burg3.classList.toggle("act_3");
   
})
// KONSULTATIY -------------------------------------------------------------------------------

let kons = doc.querySelectorAll('.konsultatiy');
let modl_window = doc.querySelector('.konsultati_div');
let modl_window_krest = doc.querySelector('.zakrit_konsult');
let body = doc.querySelector('body');
let modal_bg = doc.querySelector('#modal_window');

for (let item of kons) {
    item.addEventListener('click', ()=> {
        body.style.overflow = 'hidden';
        modl_window.classList.add('konsultati_div_show')
        modal_bg.classList.add('modal_bg')
        aside.classList.remove('active')
        burg1.classList.remove("act_1");
        burg2.classList.remove("act_2");
        burg3.classList.remove("act_3");
    })
}

modl_window_krest.addEventListener('click', ()=> {
    body.style.overflow = 'scroll';
    modl_window.classList.remove('konsultati_div_show')
    modal_bg.classList.remove('modal_bg')
})
modal_bg.addEventListener('click', ()=> {
    body.style.overflow = 'scroll';
    modl_window.classList.remove('konsultati_div_show')
    modal_bg.classList.remove('modal_bg')
})
// KREST KONSULTATIY -------------------------------------------------------------------------------

// let zakritKonsult = doc.querySelector('.zakrit_konsult');

// zakritKonsult.addEventListener('mousemove', (event) => {
//     const rect = zakritKonsult.getBoundingClientRect();
//     const x = event.clientX - rect.left; // Позиция курсора относительно элемента по X
//     const y = event.clientY - rect.top;  // Позиция курсора относительно элемента по Y

//     const width = rect.width;
//     const height = rect.height;
//  // Определяем, находится ли курсор в центре
//     const centerX = width / 4; // Ширина центральной зоны
//     const centerY = height / 4; // Высота центральной зоны
//     // Определяем сторону
//     if (x > centerX && x < width - centerX && y > centerY && y < height - centerY) {
//         
//         zakritKonsult.style.border = '2px solid black'; // Если в центре, все бордеры 3px
//     }
//     else if (x < width / 2 && y > x && y < height - x) {
//         
//         zakritKonsult.style.borderLeft = '3px solid black';
//     } else if (x > width / 2 && y > height - x && y < x) {
//         
//         zakritKonsult.style.borderRight = '3px solid black';
//     } else if (y < height / 2 && x > y && x < width - y) {
//         
//         zakritKonsult.style.borderTop = '3px solid black';
//     } else {
//         
//         zakritKonsult.style.borderBottom = '3px solid black';
//     }
//     
// });

// // Сбрасываем стиль при уходе курсора
// zakritKonsult.addEventListener('mouseleave', () => {
//     zakritKonsult.style.border = '1px solid black';
//     
// });

let zakritKonsult = document.querySelector('.zakrit_konsult');

zakritKonsult.addEventListener('mousemove', (event) => {
    const rect = zakritKonsult.getBoundingClientRect();
    const x = event.clientX - rect.left; // Позиция курсора относительно элемента по X
    const y = event.clientY - rect.top;  // Позиция курсора относительно элемента по Y

    const width = rect.width;
    const height = rect.height;

    let transformX = 0;
    let transformY = 0;

    // Определяем направление смещения
    if (x < width / 2) {
        transformX = 2.5; // Смещение вправо
    } else {
        transformX = -2.5; // Смещение влево
    }

    if (y < height / 2) {
        transformY = 2.5; // Смещение вниз
    } else {
        transformY = -2.5; // Смещение вверх
    }

    // Применяем смещение
    zakritKonsult.style.transform = `translate(${transformX}px, ${transformY}px)`;
});

// Сбрасываем позицию при уходе курсора
zakritKonsult.addEventListener('mouseleave', () => {
    zakritKonsult.style.transform = 'translate(0, 0)';
});



// USLUGI -------------------------------------------------------------------------------

// let burg_1 = doc.querySelector('.burger_usluga_1')
// let burg_2 = doc.querySelector('.burger_usluga_2')
// let burg_3 = doc.querySelector('.burger_usluga_3')
// let burg_4 = doc.querySelector('.burger_usluga_4')

// let img_br_1 = doc.querySelector('.img_burger_usluga_1')
// let img_br_2 = doc.querySelector('.img_burger_usluga_2')
// let img_br_3 = doc.querySelector('.img_burger_usluga_3')
// let img_br_4 = doc.querySelector('.img_burger_usluga_4')

// img_br_1.addEventListener('mouseover', () => {
//     burg_1.classList.add('hover_1')
// })
// img_br_2.addEventListener('mouseover', () => {
//     burg_2.classList.add('hover_2')
// })
// img_br_3.addEventListener('mouseover', () => {
//     burg_3.classList.add('hover_3')
// })
// img_br_4.addEventListener('mouseover', () => {
//     burg_4.classList.add('hover_4')
// })

// img_br_1.addEventListener('mouseout', () => {
//     burg_1.classList.remove('hover_1')
// })
// img_br_2.addEventListener('mouseout', () => {
//     burg_2.classList.remove('hover_2')
// })
// img_br_3.addEventListener('mouseout', () => {
//     burg_3.classList.remove('hover_3')
// })
// img_br_4.addEventListener('mouseout', () => {
//     burg_4.classList.remove('hover_4')
// })
// ПРИБОВЛЯЮЩИЕСЯ ЦИФРЫ -------------------------------------------------------------------------
    // let number_plus_1 = doc.querySelector('.number_plus_1')
    // let number_plus_2 = doc.querySelector('.number_plus_2')
    // let number_plus_3 = doc.querySelector('.number_plus_3')
    // let number_plus_4 = doc.querySelector('.number_plus_4')

    const counters = document.querySelectorAll(".items_div h1");

    const animateNumbers = (entry, observer) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const maxValue = parseInt(element.getAttribute("data-max"), 10);
    
        // Настройки длительности
        const minDuration = 4000; // Минимальная длительность анимации (4 секунды)
        const maxDuration = 12000; // Максимальная длительность анимации (12 секунд)
        const duration = Math.min(minDuration + (maxValue / 50) * 100, maxDuration); 
    
        const startTime = performance.now();
    
        const updateCounter = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1); // Процент выполнения (от 0 до 1)
          const currentValue = Math.floor(progress * maxValue);
    
          element.textContent = currentValue;
    
          if (progress < 1) {
            requestAnimationFrame(updateCounter); // Продолжение анимации
          } else {
            element.textContent = maxValue; // Убедиться, что значение достигнуто
          }
        };
    
        requestAnimationFrame(updateCounter);
        observer.unobserve(element); // Остановить наблюдение
      }
    };
    
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => animateNumbers(entry, observer));
      },
      { threshold: 0.7 } // Активировать, когда 70% элемента видимо
    );
    
    counters.forEach(counter => observer.observe(counter));


// ВОПРОСЫ -------------------------------------------------------------------------------

let vop_1 = doc.querySelector('.voprosi_1')
let vop_2 = doc.querySelector('.voprosi_2')
let vop_3 = doc.querySelector('.voprosi_3')

let otv_1 = doc.querySelectorAll('.voprosi_p_1')
let otv_2 = doc.querySelectorAll('.voprosi_p_2')
let otv_3 = doc.querySelectorAll('.voprosi_p_3')

vop_1.addEventListener('click', ()=> {
    for(let item of otv_1) {
        item.classList.toggle('voprosi_p_show')
    }
    
    vop_1.classList.toggle('active_otvet')
})
vop_2.addEventListener('click', ()=> {
    for(let item of otv_2) {
        item.classList.toggle('voprosi_p_show')
    }
    vop_2.classList.toggle('active_otvet')
})
vop_3.addEventListener('click', ()=> {
    for(let item of otv_3) {
        item.classList.toggle('voprosi_p_show')
    }
    vop_3.classList.toggle('active_otvet')
})


// FOOTER JAKOR -------------------------------------------------------------------------------

let tolko_verx = doc.querySelector('.tolko_verx')
let text_p = doc.querySelectorAll('.p_footer_div')
// let sec1 = doc.querySelector('.sec1')
for(let item of text_p) {
    item.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращает стандартное поведение ссылки
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
}
tolko_verx.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращает стандартное поведение ссылки
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });