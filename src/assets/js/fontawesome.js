// src/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importer des icônes spécifiques de Font Awesome Brands
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

// Ajouter les icônes à la bibliothèque
library.add(faFacebook, faTwitter, faGithub);

export default FontAwesomeIcon;
