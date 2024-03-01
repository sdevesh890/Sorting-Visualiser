function swap(array, i, j) {
    const tempHeight = array[i].style.height;
    array[i].style.height = array[j].style.height;
    array[j].style.height = tempHeight;
}

async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    const array = Array.from(bars).map(bar => parseInt(bar.style.height));

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Highlight bars being compared
            bars[j].style.backgroundColor = '#ff0000'; // Red
            bars[j + 1].style.backgroundColor = '#ff0000'; // Red

            // Delay for visualization
            await new Promise(resolve => setTimeout(resolve, 50));

            if (array[j] > array[j + 1]) {
                // Swap the heights
                swap(bars, j, j + 1);
                // Update the array after swapping
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }

            // Reset color after comparison
            bars[j].style.backgroundColor = '#3498db'; // Blue
            bars[j + 1].style.backgroundColor = '#3498db'; // Blue
        }

        // Mark the last element as sorted
        bars[array.length - i - 1].style.backgroundColor = '#2ecc71'; // Green
    }
}

document.getElementById('bubble_sort').addEventListener('click', async (e) => {
    e.preventDefault();
    await bubbleSort();
});
