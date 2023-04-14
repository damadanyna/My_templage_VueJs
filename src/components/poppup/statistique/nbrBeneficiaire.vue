<template>
<div class=" w-full overflow-hidden justify-center flex flex-col items-center"> 
    <canvas id="acquisitions"></canvas>
</div>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
    mounted() { 
        (async function () {
            const data = {
                labels: [
                    'Vert',
                    'Rouge',
                    'Jaune',
                    'Bleu'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [250, 250, 20, 80],
                    backgroundColor: [
                        'rgb(140, 225, 112)',
                        'rgb(225,45, 70)',
                        'rgb(255, 205, 86)',
                        'rgb(104, 100, 225)', 
                    ],
                    hoverOffset: 4
                }]
            };
            new Chart(
                document.getElementById('acquisitions'), {
                    type: 'doughnut',
                    data: data,
                    options: {
                        rotation: -90,
                        circumference: 180,
                    }
                }
            );
        })();

    }
}
</script>

<style>

</style>
