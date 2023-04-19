<template>
<div class="flex w-full flex-col bg-white overflow-hidden rounded-md mb-3">
    <div class="flex px-10 flex-row items-center sticky  top-8 z-20">
        <div class="flex bg-white py-2 px-6 rounded-full">
            <button :to="{name:'organigramme'}" @click="()=>{this.$router.go(-1)}" class="  bg-[#63B6B9] mr-3 px-2 py-2 border border-black rounded-full">
            <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
        </button >
        <span class=" px-3 text-xl">Organigramme</span>
        </div>
    </div>
    <div class=" flex flex-row z-10 ">
        <div id="tree" ref="tree" class=" "></div>
    </div>
</div>
</template>

<script>
import OrgChart from '@balkangraph/orgchart.js'
OrgChart.SEARCH_PLACEHOLDER = "Chercher";
OrgChart.templates.anaOrange = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.anaOrange.editFormHeaderColor = '#63B6B9';
export default {

    name: 'tree',
    data() {
        return {
            showFormulaire: true,
            nodes: [{
                    id: 1,
                    name: "Denny Curtis",
                    title: "Gérant",
                    tags: ['orange'],
                    img: "../../../src/assets/person-4.png"
                }, {
                    id: 0,
                    pid: 1,
                    name: "Steve Balmer",
                    title: "Associé",
                    tags: ['orange'],
                    img: "../../../src/assets/person-4.png",
                    tags: ['partner']
                },
                {
                    id: 2,
                    pid: 1,
                    name: "Ashley Barnett",
                    title: "Sales Manager",
                    tags: ['orange'],
                    img: "https://cdn.balkan.app/shared/3.jpg"
                },
                {
                    id: 3,
                    pid: 1,
                    name: "Caden Ellison",
                    title: "Dev Manager",
                    tags: ['orange'],
                    img: "https://cdn.balkan.app/shared/4.jpg"
                },
                {
                    id: 4,
                    pid: 1,
                    name: "Elliot Patel",
                    title: "Sales",
                    tags: ['orange'],
                    img: "https://cdn.balkan.app/shared/5.jpg"
                },
                {
                    id: 5,
                    pid: 1,
                    name: "Lynn Hussain",
                    title: "Sales",
                    tags: ['orange'],
                    img: "https://cdn.balkan.app/shared/6.jpg"
                },
                {
                    id: 6,
                    pid: 1,
                    name: "Tanner May",
                    title: "Developer",
                    tags: ['orange'],
                    img: "https://cdn.balkan.app/shared/7.jpg"
                },
                {
                    id: 7,
                    pid: 4,
                    name: "Fran Parsons",
                    title: "Developer",
                    tags: ['orange'],
                    img: "https://cdn.balkan.app/shared/8.jpg"
                },
                {
                    id: 8,
                    pid: 4,
                    name: "Nom et Prenom",
                    title: "Developer",
                    tags: ['orange'],
                    img: "../../../src/assets/person-4.png"
                },
                {
                    id: 9,
                    pid: 4,
                    name: "Nom2 et Prenom2",
                    title: "Developer",
                    tags: ['orange'],
                    img: "../../../src/assets/person-4.png"
                }
            ]
        }
    },

    methods: {
        mytree: function (domEl, x) {
            this.chart = new OrgChart(domEl, {
                // template:ula,
                nodes: x,
                scaleInitial: 0.77,
                keyNavigation: true,
                mouseScrool: OrgChart.action.ctrlZoom,
                editForm: {
                    buttons: {
                        edit: null,
                        share: null,
                        pdf: null,
                    }
                },
                tags: {
                    orange: {
                        template: 'anaOrange'
                    }
                },
                nodeBinding: {
                    field_0: "name",
                    field_1: "title",
                    img_0: "img"
                }
            });
        }
    },

    mounted() {

        this.mytree(this.$refs.tree, this.nodes)

    },

}
</script>

<style>
[data-n-id] rect {
    fill: #d1d1d1;
}

[data-n-id] rect:hover {
    fill: #63B6B9;
}

[data-n-id] tspan {
    fill: white;
    font-size: 14px;
    font-weight: bold;
}

.field_0 {
    font-family: Impact;
    text-transform: uppercase;
    fill: #e92222;
    background-image: url('../../../src/assets/person-4.png');
}

.boc-edit-form.orange .boc-edit-form-header,
.boc-edit-form.orange .boc-img-button {
    background-color: #F57C00;
}
</style>
