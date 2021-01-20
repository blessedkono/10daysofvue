import { createApp } from 'vue'
// import App from './App.vue'
// createApp({
//     data(){
//         return{
//
//         };
//     },
//     components:{
//       App
//     },
// }).mount('#app');

// const RootComponent = {
//
// };
const app = createApp({});
app.component('app',{
    data() {
        return {
            count: 0
        }
    },
    template: `   
   <button @click="count++">
      You clicked me {{ count }} times.
    </button>\``
})
app.mount('#app');
