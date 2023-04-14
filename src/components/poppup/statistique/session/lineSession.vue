<template>
<div class=" w-[30%] overflow-hidden justify-center flex flex-col items-center">
    <canvas id='bar_'></canvas>
</div>
</template> 
<script>
import Chart from 'chart.js/auto'
export default {
    mounted() {
        (async function () {
            const labels = ['Jan', 'feb', 'Mar', 'Apr', 'May'];
            const data = {
                labels: labels,
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },{
                    label: 'My First Dataset',
                    data: [5, 7, 10, 6, 5, 7, 5],
                    fill: false,
                    borderColor: 'rgb(175,2, 2)',
                    tension: 0.1
                }]
            };
            new Chart(
                document.getElementById('bar_'), {
                    type: 'line',
                    data: data,
                }
            );
        })();

    }
}
</script>
        
        
<style>
            
            </style>
