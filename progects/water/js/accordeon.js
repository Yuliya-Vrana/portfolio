


const contents = document.querySelectorAll(".faq__block");

contents.forEach((elem) => {
    const question = elem.querySelector(".faq__block--question");

    question.addEventListener("click", () => {
        contents.forEach((elems) => {
        const answer = elems.querySelector(".faq__block--answer");
        const span = elems.querySelector(".faq__block--span");  
         if (elems == elem) {
                answer.classList.toggle('faq__active');
                span.classList.toggle("active--span");
            }
             else {
                answer.classList.remove('faq__active');
                span.classList.remove("active--span");
            }
        });
    })
})


/*


const contents = document.querySelectorAll(".faq__block");

contents.forEach((elem) => {
    const question = elem.querySelector(".faq__block--question");
    const answer = elem.querySelector(".faq__block--answer");
    const span = elem.querySelector(".faq__block--span");


    question.addEventListener("click", () => {
        answer.classList.toggle("faq__active");
        span.classList.toggle("active--span");
    });



})









const contents = document.querySelectorAll('.program-line__content');

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title');

    title.addEventListener('click', () => {
        contents.forEach((elems) => {

            const descr = elems.querySelector('.program-line__descr');
            if (elems == elem) {
                descr.classList.toggle('active');
            }
            else {
                descr.classList.remove('active');
            }
        });
    })
})
*/