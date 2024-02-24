function swap(array, i, j) {
    const temp = array[i].style.height;
    array[i].style.height = array[j].style.height;
    array[j].style.height = temp;
}

async function selectionSort()
{
    const bars = document.querySelectorAll('.bar');
    const arr = Array.from(bars).map(bar => parseInt(bar.style.height));
    
    for (let i = 0; i < arr.length - 1; i++) {
        let bigindex = 0;
        bars[bigindex].style.backgroundColor = '#ff0000';
        await new Promise(resolve => setTimeout(resolve, 50));

        for (let j = 1; j < arr.length - i; j++) {
         
            bars[j].style.backgroundColor = 'blue';
            
            if (parseInt(bars[j].style.height) > parseInt(bars[bigindex].style.height)) {
                if (bigindex !== j) {
                    bars[bigindex].style.backgroundColor = ''; // Reset the color if it's not the initial bar
                }
                bigindex = j;
                bars[bigindex].style.backgroundColor = '#ff0000';
            }
        }

        swap(bars, bigindex, arr.length - i - 1);
        bars[bigindex].style.backgroundColor = ''; // Reset the color after swapping
        bars[arr.length - i - 1].style.backgroundColor = '#2ecc71';
    }
}

document.getElementById('selection_sort').addEventListener('click',async (e)=>
{
    e.preventDefault();
    await selectionSort();
})