const app = Vue.createApp({
    data() {
        return {
            gallery: [
                {images: 'images/doraemon.png',name : 'Doraemon',fav: false,dnshow:false},
                {images: 'images/nobita.png', name : 'Nobita',fav: false,dnshow:false},
                {images: 'images/suneo.png',name : 'Suneo', fav: false,dnshow:false},
                {images: 'images/giant.png', name : 'Giant',fav: false,dnshow:false},
                {images: 'images/shizuka.jpg', name : 'Shizuka',fav: false,dnshow:false},
                {images: 'images/dekisugi.jpg', name : 'Dekisugi',fav: false,dnshow:false},
                ],
           
           favicon: 'images/favorite.svg',
           favborder: 'images/favorite_border.svg'
           ,findpic:''
           ,nopic:false
           ,ind:0
           ,choose:false
           ,srcitem:[]
        }
    },
    methods: {

        setnopic (boolean){
        this.nopic = boolean


        },



        choosed(index){
            this.ind = index  ;
            this.choose = true;
            },
            
            favorite(index){
            this.gallery[index].fav = !this.gallery[index].fav
            
          },





       close(){
       this.choose = false;
       },
       setfindpic(val){
        this.findpic = val;
           
       },
        
       
        
    },

    computed: {
        countUnLike(){
            return this.gallery.filter( im => !im.fav ).length
        }, countLike(){
            return this.gallery.length-this.gallery.filter( im => !im.fav ).length
        }, findPicture(){ 
            this.srcitem=[];
            for(let i = 0 ; i < this.gallery.length;i++){
                console.log(this.findpic);
    
               //check character from input with array if it not found it will dnshow(<<-dont show)
                if(this.gallery[i].name.toUpperCase().indexOf(this.findpic.toUpperCase()) ==-1){
                    this.gallery[i].dnshow = true;
                  
                }
                //if found dontshow it will be false
                else {
                    this.gallery[i].dnshow=false;
                    this.srcitem.push(this.gallery[i].name);
                }
    
              }   
    
                //Check wa find picture mai? because if it dont show all of picture its mean no picture 
                if(this.srcitem.length == 0){
                    this.nopic = true;}

                    
                else if(this.findpic.length <1){
                this.nopic = false;
                
                }
            findpic = '';
               
               console.log(this.srcitem);
             }
        
        
        
        

    }

})

















