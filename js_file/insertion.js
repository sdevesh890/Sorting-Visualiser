function swap(array, i, j) {
    const temp = array[i].style.height;
    array[i].style.height = array[j].style.height;
    array[j].style.height = temp;
    
}
async function insertionSort()
{
    const bars = document.querySelectorAll('.bar');
    const arr = Array.from(bars).map(bar=> parseInt(bar.style.height));


    bars[0].style.backgroundColor = 'green';

    for(let i=1; i<arr.length; i++)
    {
        bars[i].style.backgroundColor = 'red';
        await new Promise(resolve=> setTimeout(resolve,50));
        for(let j=i; (j>0) && parseInt(bars[j].style.height)<parseInt(bars[j-1].style.height); j--)
        {
            swap(bars , j,j-1);
            await new Promise(resolve=> setTimeout(resolve,50));
        }
        bars[i].style.backgroundColor = 'green';
    }
    
}


document.getElementById('insertion_sort').addEventListener('click',async (e)=>
{
    e.preventDefault();
    await insertionSort();
})