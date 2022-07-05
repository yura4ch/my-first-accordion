let accordions;
const accordionWrapper = document.querySelector('.accordion-wrapper');

const contentData = [
    {
        id: 1,
        title: 'IS Volkswagen Golf SUITABLE FOR CITY RIDES?',
        content: 'Absolutely! It has low fuel consumption and can make your routine days much brighter.'
    },
    {
        id: 2,
        title: 'HOW CAN I LEASE THIS CAR?',
        content: 'Contact our managers and they will tell you about the leasing options.'
    },
    {
        id: 3,
        title: 'IS THIS CAR AVAILABLE FOR A SHORT-TERM LEASE?',
        content: 'Yes, it is. The minimal lease term is 3 months.'
    },
    {
        id: 4,
        title: 'WHAT ARE THE INSURANCE OPTIONS FOR THIS CAR?',
        content: 'c'
    }
];

const createTemplate = item => {
   return `
        <div class="accordion-item">
            <div class="accordion-item-title"> ${item.title} </div>
             <div class="accordion-item-content"> ${item.content} </div>
        </div>
    
    `
}

const fillHtmlList = () => {
    contentData.forEach(iteam => {
        accordionWrapper.innerHTML += createTemplate(iteam);
    })
    accordions = document.querySelectorAll('.accordion-item');
}

fillHtmlList();

if(accordions) {
    for(item of accordions) {
    item.addEventListener('click', function() {
            if(this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                for(el of accordions) {
                el.classList.remove('active');
                }
                this.classList.add('active');
            }
        })
    }
}