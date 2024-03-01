function swap(array, i, j) {
    const tempHeight = array[i].style.height;
    array[i].style.height = array[j].style.height;
    array[j].style.height = tempHeight;
}

async function partition(bars, low, high) {
    const pivot = parseInt(bars[high].style.height);
    let i = low - 1;

    for (let j = low; j < high; j++) {
        // Highlight bars being compared
        bars[j].style.backgroundColor = '#ff0000'; // Red
        bars[high].style.backgroundColor = '#00ff00'; // Green (pivot)

        // Delay for visualization
        await new Promise(resolve => setTimeout(resolve, 50));

        if (parseInt(bars[j].style.height) < pivot) {
            i++;
            swap(bars, i, j);
        }

        // Reset color after comparison
        bars[j].style.backgroundColor = '#3498db'; // Blue
        bars[high].style.backgroundColor = '#3498db'; // Blue (reset pivot color)
    }

    swap(bars, i + 1, high);

    // Reset color after partition
    bars[i + 1].style.backgroundColor = '#2ecc71'; // Green

    return i + 1;
}

async function quickSortUtil(bars, low, high) {
    if (low < high) {
        const partitionIndex = await partition(bars, low, high);

        await quickSortUtil(bars, low, partitionIndex - 1);
        await quickSortUtil(bars, partitionIndex + 1, high);
    }
}

async function quickSort() {
    const bars = document.querySelectorAll('.bar');
    const array = Array.from(bars).map(bar => parseInt(bar.style.height));

    await quickSortUtil(bars, 0, bars.length - 1);

    // Set all bars to green after sorting is complete
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = '#2ecc71'; // Green
    }
}

document.getElementById('quick_sort').addEventListener('click', async (e) => {
    e.preventDefault();
    await quickSort();
});
