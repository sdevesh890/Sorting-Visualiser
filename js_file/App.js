function createBar()
{
    const newArr = [];
    const container = document.getElementById('sort-bar');
    container.innerHTML = '';
    for(let i=0; i<100; i++)
    {
        let height = Math.floor(Math.random()*400)+50;
        let bar = document.createElement('div');
        bar.style.height = `${height}px`;
        bar.classList.add('bar');
        newArr.push(height);
        container.appendChild(bar);
    }
}

let newArr = document.getElementById('newArr');
newArr.addEventListener('click',(e)=>
{
   e.preventDefault();
   createBar();
   
});
