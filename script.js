const toggle = document.getElementById('toggle')
const nav = document.querySelector('.nav')

const expandingBgs = document.querySelectorAll('.expandingBg');
const goBackButtons = document.querySelectorAll('.back');

toggle.addEventListener('click', () => {
    nav.classList.toggle('inAction')
})

expandingBgs.forEach((expandingBg, index) => {
    expandingBg.addEventListener('click', () => {
        removeActiveClasses();
        expandingBg.classList.add('active');
    });

    goBackButtons[index].addEventListener('click', (event) => {
        event.stopPropagation();
        expandingBg.classList.remove('active');
    });
});

function removeActiveClasses() {
    expandingBgs.forEach(expandingBg => {
        expandingBg.classList.remove('active');
    });
}
