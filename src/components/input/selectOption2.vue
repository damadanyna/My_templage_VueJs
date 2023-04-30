<template>
<div class="flex"> 
    <div @click="()=>{change_val()}" class="custom-select2 text-[12px]" style="width:200px;">
        <select >
            <option  v-for=" item, i in options" :value="item.val" v-text="item.label"> </option>
        </select>
    </div>
</div>
</template>

<script>
export default {
    props: {
        options: {}
    },
    methods:{
        change_val(){
            this.$store.state.statut_= document.querySelector('.custom-select2').children[1].innerHTML;
        }
    },
    mounted() {

        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select2":*/
        x = document.getElementsByClassName("custom-select2");
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            ll = selElmnt.length;
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected2");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < ll; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function (e) {
                /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }

        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
            except the current select box:*/
            var x, y, i, xl, yl, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected2");
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
    }
}
</script>

<style>
/*the container must be positioned relative:*/
.custom-select2 {
    position: relative;
}

.custom-select2 select {
    display: none;
    color: white;
    /*hide original SELECT element:*/
}

.select-selected2 {
    background-color: #EEEEEE;
    border-radius: 5px;
    display: flex;
    color: white;
}

/*style the arrow inside the select element:*/
.select-selected2:after {
    margin-top: 2px;
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #63B6B9 transparent transparent transparent;
}

/*point the arrow upwards when the select box is open (active):*/
.select-selected2.select-arrow-active:after {
    border-color: transparent transparent #63B6B9 transparent;
    top: 7px;
}
/*style the items (options), including the selected item:*/
.select-items div,
.select-selected2 {
    color: black;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(47, 47, 47, 0.1) transparent;
    cursor: pointer;
    user-select: none;
}

/*style items (options):*/
.select-items {
    position: absolute;
    background-color: rgb(242, 242, 242);
    border-radius: 5px;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
}

/*hide the items when the select box is closed:*/
.select-hide {
    display: none;
}

.select-items div:hover,
.same-as-selected {
    background-color: rgba(0, 0, 0, 0.1);
    color: white;
}
</style>
