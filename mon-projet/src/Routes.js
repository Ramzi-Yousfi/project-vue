import AppHeader from './layout/AppHeader.vue';
import AppFooter from './layout/AppFooter.vue';
import Accueil from './views/accueil'
import Register from './views/register'
// import Page1 from './views/page1'


// export default
// [
//     {path:'/page1',component :Page1},
//     {path:'/register',component :Register},
//     {path:'/',component :Accueil},
// ]

export default 
    
    [
      {path: "/",
        name: "Accueil",
        components: {
          header: AppHeader,
          default: Accueil,
          footer: AppFooter
        }},
        {path: "/register",
        name: "Register",
        components: {
          header: AppHeader,
          default: Register ,
          footer: AppFooter
        }}
        
      
    ]
