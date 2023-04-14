<template>
    <div class=" w-[30%] overflow-hidden justify-center flex flex-col items-center"> 
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
                        'Noire',
                        'Rouge', 
                    ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [250, 20],
                        backgroundColor: [
                            'rgb(20, 20, 20)',
                            'rgb(225,45, 70)', 
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
    