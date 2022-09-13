import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import PrimeVue from 'primevue/config'
import Keycloak from 'keycloak-js'

import 'primevue/resources/themes/saga-blue/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                //core css
import 'primeicons/primeicons.css'                          //icons  
import '/node_modules/primeflex/primeflex.css'              //primeflex

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.mount('#app')

let initOptions = {
    url: 'http://pomocdrogowaostroda.com.pl:8180/', realm: 'lotto-realm', clientId: 'lotto-app', onLoad: 'login-required'
}

let keycloak = new Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad })
    .then((auth) => {
        if (!auth) {
            window.location.reload();
        } else {
            console.log("Authenticated");

            app({
                el: '#app',
                render: h => h(app, { props: { keycloak: keycloak } })
            })
        }

        //Token Refresh
        setInterval(() => { keycloak.updateToken(70) }, 6000)

    }).catch(() => {
        console.log("Authenticated Failed");
    });