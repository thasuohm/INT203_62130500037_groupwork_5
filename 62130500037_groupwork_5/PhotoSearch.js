app.component('photo-search',{
    props:{
        gallery: Object,
        
    },
    template: 
    /*html*/
    `
    <span v-if = "this.schbutton.dnshow">
      <button @click="searchbutton"> <img :src = "this.schbutton.searchicon"  class = "inline w-9 " ></button>
    </span>
  
   <span :class="[schbutton.dnshow ? 'hidden':'']">   
    <input v-model="wanpic" @keyup=senback @keyup=$emit("findp")  placeholder="Search your Photo" 
    class="px-36 py-2 bg-white rounded border-2 border-gray-500 mt-6">
    <button @click = "cancel" class="ml-2 bg-red-500 text-white  py-1 px-2 rounded">Cancel</button>
   </span>
    `,
    data(){
        return {
            schbutton:{searchicon : 'images/search-black-18dp.svg',dnshow:true},
            wanpic:''
        }
    },
    methods: {
        searchbutton(){
            this.schbutton.dnshow = false;
           
        },
        cancel(){
            this.schbutton.dnshow=true;
            for(let i = 0 ; i < this.gallery.length;i++){
                this.gallery[i].dnshow = false;
            }
            this.$emit("setnopic",false);
           this.wanpic = "";
        },
        senback(val){
            this.$emit("setpic",this.wanpic);
        }

    } ,
    computed: {
       
        
        
        

    }
})