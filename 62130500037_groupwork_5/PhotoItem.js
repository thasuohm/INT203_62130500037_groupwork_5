app.component('photo-item',{
    props:{
        gallery: Object,
        nopic : Boolean,
        favicon: String,
        favborder: String,
        
    },

    template: 
    /*html*/
    `
    <ul class ="mt-8 pt-8  bg-gray-300 grid grid-cols-3 justify-items-center" > 
    <li v-for="(image,index) in gallery" :class="[image.dnshow ? 'hidden':'']" >
      <button @click="sel(index)">
      <img :src = "image.images" class = "w-72 h-44  mt-2 inline"  >  
      </button>
     
     
      <h1 class="mt-2 mb-4 text-xl "><b>{{image.name}}</b>
      <button @click=favo(index) ><img v-show="!image.fav" class = "inline ml-2 " :src = "favborder"></button>

      <span v-show="image.fav">
        <button @click=favo(index) > <img  class = "inline ml-2" :src = "favicon"></button>
      </span>

    </h1>    
    </li> 
  <h1 v-if="nopic" class="mb-20 text-5xl">No Photo</h1>
  </ul>
    `,
    methods:{ 
      
      sel (index){
      this.$emit("select",index);

      },

      favo (index){  
      this.$emit("favor",index);
  
      },

        

    }
})