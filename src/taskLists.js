// Allows task lists to be selected
function selectList() {
    const list = document.querySelectorAll('li');
    
    for (const item of list) {
        item.addEventListener('click', () => {
            for (const item of list) {
                item.classList.remove('active');
            }
            item.classList.add('active');
        });
    }
}

export { selectList };