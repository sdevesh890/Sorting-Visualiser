function createBar()
{
    const newArr = [];
    const container = document.getElementById('sort-bar');

    for(let i=0; i<100; i++)
    {
        let height = Math.floor(Math.random()*200)+100;
        let bar = document.createElement('div');
        bar.style.height = `${height}px`;
        bar.classList.add('bar');
        newArr.push(height);
        container.appendChild(bar);
    }

}
createBar();
