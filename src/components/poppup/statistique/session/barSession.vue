<template>
<div class=" w-[30%] overflow-hidden justify-center flex flex-col items-center">
    <canvas id='line_'></canvas>
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
                    data: [150, 170, 200, 300, 370],
                    backgroundColor: [
                        'rgba(0,0,0, 0.6)',
                        'rgba(0,0,0, 0.6)',
                        'rgba(0,0,0, 0.6)',
                        'rgba(0,0,0, 0.6)',
                        'rgba(0,0,0, 0.6)',
                    ],
                    borderColor: [
                        'rgb(0,0,0)',
                        'rgb(0,0,0)',
                        'rgb(0,0,0)',
                        'rgb(0,0,0)',
                        'rgb(0,0,0)',
                    ],
                    borderWidth: 1
                }]
            };
            new Chart(
                document.getElementById('line_'), {
                    type: 'bar',
                    data: data,
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    },
                }
            );
        })();

    }
}
</script>
    
    
<style>
        
        </style>
