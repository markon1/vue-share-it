import shareIt from './components/shareIt.vue';
import shareButton from './components/shareButton.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const shareItPlugin =  {
  install (Vue, options) {
    library.add(faTwitter, faFacebook, faWhatsapp, faLinkedin);
    Vue.component('font-awesome-icon', FontAwesomeIcon);
    Vue.component('share-it', shareIt);
    Vue.component('share-button', shareButton);
  }
};

export default shareItPlugin;

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(shareItPlugin)
}
