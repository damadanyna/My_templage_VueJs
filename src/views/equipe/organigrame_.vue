<template>
<div class="flex w-full">

    <div id="tree" ref="tree" class=" "></div>
</div>
</template>

<script>
import OrgChart from '@balkangraph/orgchart.js'

export default {

    name: 'tree',
    data() {
        return {
            nodes: [{
                    id: 1,
                    name: "Denny Curtis",
                    title: "CEO",
                    img: "https://cdn.balkan.app/shared/2.jpg"
                },
                {
                    id: 2,
                    pid: 1,
                    name: "Ashley Barnett",
                    title: "Sales Manager",
                    img: "https://cdn.balkan.app/shared/3.jpg"
                },
                {
                    id: 3,
                    pid: 1,
                    name: "Caden Ellison",
                    title: "Dev Manager",
                    img: "https://cdn.balkan.app/shared/4.jpg"
                },
                {
                    id: 4,
                    pid: 2,
                    name: "Elliot Patel",
                    title: "Sales",
                    img: "https://cdn.balkan.app/shared/5.jpg"
                },
                {
                    id: 5,
                    pid: 2,
                    name: "Lynn Hussain",
                    title: "Sales",
                    img: "https://cdn.balkan.app/shared/6.jpg"
                },
                {
                    id: 6,
                    pid: 3,
                    name: "Tanner May",
                    title: "Developer",
                    img: "https://cdn.balkan.app/shared/7.jpg"
                },
                {
                    id: 7,
                    pid: 3,
                    name: "Fran Parsons",
                    title: "Developer",
                    img: "https://cdn.balkan.app/shared/8.jpg"
                }
            ]
        }
    },

    methods: {
        mytree: function (domEl, x) {
            this.chart = new OrgChart(domEl, {
                nodes: x,
                nodeBinding: {
                    field_0: "name",
                    img_0: "img"
                }
            });
        }
    },

    mounted() {
        this.mytree(this.$refs.tree, this.nodes)
    }
}
</script>

<style>
[data-n-id] rect {
    fill: #919191;
}

/* [data-n-id] circle {
        fill: #016e25;
    } */

[data-n-id] rect:hover {
    fill: #63B6B9;
}

#tree:fullscreen {
    background-color: #2E2E2E;
}
</style>
