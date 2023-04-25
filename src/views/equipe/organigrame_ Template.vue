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
                    img: "data:image/jpeg;base64,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"
                }, {
                    id: 0,
                    pid: 1,
                    name: "Steve Balmer",
                    title: "Associé",
                    tags: ['orange'],
                    img: "data:image/jpeg;base64,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",
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
                    img: "data:image/jpeg;base64,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"
                },
                {
                    id: 9,
                    pid: 4,
                    name: "Nom2 et Prenom2",
                    title: "Developer",
                    tags: ['orange'],
                    img: "data:image/png;base64,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"
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
