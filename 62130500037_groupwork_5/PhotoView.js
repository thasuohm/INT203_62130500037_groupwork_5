app.component('photo-view',{
    props:{
        gallery: Object,
        choose : Boolean,
        ind :Number,
    },

    template: 
    /*html*/
    `
    <span v-if="checkVal" >
    <span class="fixed top-0 left-0 bg-black  z-0" style="width: 100%; height: 100%;"></span>
    <button @click=$emit("close") class="absolute inline text-8xl  z-50 text-white"  style="top: 0%; left: 90%; ">&times;</button>  
    <img :src = gallery[this.ind].images  class = "fixed w-96 " style="top: 20%; left: 30%; width: 45%;">
    </span>
    `,
    computed:{
        checkVal (){
         if(this.choose){
         return true;
         }else return false;

        },

    }
})