import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

// Location Matériel Images
import firstLocationInformatique from '../assets/locationMateriel/materielInformatique/firstLocationInformatique.png';
import secondLocationInformatique from '../assets/locationMateriel/materielInformatique/secondLocationInformatique.png';
import thirdLocationInformatique from '../assets/locationMateriel/materielInformatique/ThirdLocationInformatique.png';
import fourthLocationInformatique from '../assets/locationMateriel/materielInformatique/fourthLocationInformatique.png';

import firstMaterielVidéoprojecteur from '../assets/locationMateriel/materielVidéoprojecteur/firstMaterielVidéoprojecteur.png';
import secondMaterielVidéoprojecteur from '../assets/locationMateriel/materielVidéoprojecteur/secondMaterielVidéoprojecteur.png';
import thirdMaterielVidéoprojecteur from '../assets/locationMateriel/materielVidéoprojecteur/thirdMaterielVidéoprojecteur.png';
import fourthMaterielVidéoprojecteur from '../assets/locationMateriel/materielVidéoprojecteur/fourthMaterielVidéoprojecteur.png';

import firstMaterielReseauWifi from '../assets/locationMateriel/materielReseau&wifi/firstMaterielReseau&Wifi.png';
import secondMaterielReseauWifi from '../assets/locationMateriel/materielReseau&wifi/secondMaterielReseau&Wifi.png';
import thirdMaterielReseauWifi from '../assets/locationMateriel/materielReseau&wifi/thirdMaterielReseau&Wifi.png';
import fourthMaterielReseauWifi from '../assets/locationMateriel/materielReseau&wifi/fourthMaterielReseau&Wifi.png';

import firstMaterielBureautique from '../assets/locationMateriel/materielBureautique/firstMaterielBureautique.png';
import secondMaterielBureautique from '../assets/locationMateriel/materielBureautique/secondMaterielBureautique.png';
import thirdMaterielBureautique from '../assets/locationMateriel/materielBureautique/thirdMaterielBureautique.png';
import fourthMaterielBureautique from '../assets/locationMateriel/materielBureautique/fourthMaterielBureautique.png';

import firstMaterielEcranTactile from '../assets/locationMateriel/materielEcranTactile/firstMaterielEcranTactile.png';
import secondMaterielEcranTactile from '../assets/locationMateriel/materielEcranTactile/secondMaterielEcranTactile.png';
import thirdMaterielEcranTactile from '../assets/locationMateriel/materielEcranTactile/thirdMaterielEcranTactile.png';
import fourthMaterielEcranTactile from '../assets/locationMateriel/materielEcranTactile/fourthMaterielEcranTactile.png';

import firstLocationAccessoire from '../assets/locationMateriel/materielAccessoire/firstLocationAccessoire.png';
import secondLocationAccessoire from '../assets/locationMateriel/materielAccessoire/secondLocationAccessoire.png';
import thirdLocationAccessoire from '../assets/locationMateriel/materielAccessoire/thirdLocationAccessoire.png';
import fourthLocationAccessoire from '../assets/locationMateriel/materielAccessoire/fourthLocationAccessoire.png';

// Vente Matériel Images
import firstVenteServeur from '../assets/VenteMateriel/materielServeur/firstVenteServeur.png';
import secondVenteServeur from '../assets/VenteMateriel/materielServeur/secondVenteServeur.png';
import thirdVenteServeur from '../assets/VenteMateriel/materielServeur/thirdVenteServeur.png';
import fourthVenteServeur from '../assets/VenteMateriel/materielServeur/fourthVenteServeur.png';

import firstVentePcPortable from '../assets/VenteMateriel/materielPcPortable/firstVentePcPortable.png';
import secondVentePcPortable from '../assets/VenteMateriel/materielPcPortable/secondVentePcPortable.png';
import thirdVentePcPortable from '../assets/VenteMateriel/materielPcPortable/thirdVentePcPortable.png';
import fourthVentePcPortable from '../assets/VenteMateriel/materielPcPortable/fourthVentePcPortable.png';

import firstVentePcBureau from '../assets/VenteMateriel/materielPcBureau/firstVentePcBureau.png';
import secondVentePcBureau from '../assets/VenteMateriel/materielPcBureau/secondVentePcBureau.png';
import thirdVentePcBureau from '../assets/VenteMateriel/materielPcBureau/thirdVentePcBureau.png';
import fourthVentePcBureau from '../assets/VenteMateriel/materielPcBureau/fourthVentePcBureau.png';

import firstVenteReseau from '../assets/VenteMateriel/materielReseau/firstVenteReseau.png';
import secondVenteReseau from '../assets/VenteMateriel/materielReseau/secondVenteReseau.jpg';
import thirdVenteReseau from '../assets/VenteMateriel/materielReseau/ThirdVenteReseau.png';
import fourthVenteReseau from '../assets/VenteMateriel/materielReseau/fourthVenteReseau.png';

import firstVenteImprimante from '../assets/VenteMateriel/materielBureau/firstVenteImprimante.png';
import secondVenteImprimante from '../assets/VenteMateriel/materielBureau/secondVenteImprimante.png';
import thirdVenteImprimante from '../assets/VenteMateriel/materielBureau/thirdVenteImprimante.png';
import fourthVenteImprimante from '../assets/VenteMateriel/materielBureau/fourthVenteImprimante.png';

import firstVenteTonner from '../assets/VenteMateriel/materieltonner/firstVenteTonner.png';
import secondVenteTonner from '../assets/VenteMateriel/materieltonner/secondVenteTonner.jpg';
import thirdVenteTonner from '../assets/VenteMateriel/materieltonner/thirdVenteTonner.png';
import fourthVenteTonner from '../assets/VenteMateriel/materieltonner/fourthVenteTonner.png';

interface GalleryImage {
  image: string;
  title: string;
  description: string;
  badge?: string;
  badgeColor?: string;
}

interface Material {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  specifications?: {
    label: string;
    value: string;
  }[];
  price?: string;
  availability?: string;
  galleryImages?: GalleryImage[];
}

const MaterielPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [locationExpanded, setLocationExpanded] = useState(true);
  const [venteExpanded, setVenteExpanded] = useState(true);

  const locationMaterials: Material[] = [
    {
      id: 'location-informatique',
      title: 'Location Matériel Informatique',
      description: 'Location d\'ordinateurs, PC portables, écrans et imprimantes pour vos événements',
      longDescription: 'Besoin d\'ordinateurs ! Vous avez besoin d\'ordinateurs pour une formation que vous allez bientôt dispenser. Il vous faut plusieurs portables ainsi qu\'une imprimante pour vous et vos collaborateurs pour une conférence au sommet ? PC, portables, écrans, imprimantes… vous trouverez tout ce qu\'il vous faut ici ! Prenez contact avec l\'un de nos experts pour choisir le matériel informatique qui soit totalement adapté à votre usage : stand sur un salon, événementiels en extérieurs, salle de presse… profitez du meilleur de la technologie à petit prix ! Chez X-zone technologie, la location d\'ordinateurs s\'accompagne de services tels que la livraison, l\'installation et le démontage sur site ! Grâce à la location de matériel informatique courte durée, vous disposez d\'un matériel de choix et pouvez l\'utiliser dans les heures qui suivent votre commande. Quelles que soient les spécificités de vos besoins, X-zone technologie vous écoute et vous aide à faire le meilleur choix pour votre événement.',
      image: firstLocationInformatique,
      features: [
        'PC et ordinateurs portables dernière génération',
        'Écrans professionnels haute résolution',
        'Imprimantes multifonctions',
        'Livraison, installation et démontage inclus',
        'Support technique disponible 24/7',
        'Matériel disponible dans les heures suivant la commande'
      ],
      specifications: [
        { label: 'Types disponibles', value: 'PC, Portables, Écrans, Imprimantes' },
        { label: 'Durée minimum', value: 'Quelques heures' },
        { label: 'Contact', value: '+212 5 22 52 32 32' },
        { label: 'Livraison', value: 'Gratuite sur site' }
      ],
      availability: 'Disponible immédiatement',
      galleryImages: [
        {
          image: secondLocationInformatique,
          title: 'PC Portables Professionnels',
          description: 'Ordinateurs portables dernière génération pour vos événements',
          badge: 'Premium',
          badgeColor: '#E92B26'
        },
        {
          image: thirdLocationInformatique,
          title: 'Écrans et Imprimantes',
          description: 'Équipements complémentaires pour une solution complète',
          badge: 'Pro',
          badgeColor: '#1B1749'
        },
        {
          image: fourthLocationInformatique,
          title: 'Solutions Informatiques Complètes',
          description: 'Gamme complète de matériel informatique pour tous vos besoins professionnels',
          badge: 'Haute Performance',
          badgeColor: '#E92B26'
        }
      ]
    },
    {
      id: 'location-videoprojecteur',
      title: 'Location Matériel vidéoprojecteur',
      description: 'Location de vidéoprojecteurs de 1800 à 8000 lumens pour vos événements',
      longDescription: 'Besoin de vidéoprojecteur ! La vidéo-projection est le moyen idéal pour diffuser vos présentations lors de conférences et colloques. L\'acquisition d\'un appareil de projection étant assez onéreuse, il est plus judicieux d\'opter pour la location d\'un projo. X-Zone Technologie vous propose de la location de Vidéoprojecteur allant de 1800 à 8000 lumens pour des audiences pouvant aller jusqu\'à 1000 personnes. L\'écran et le projecteur jouent un rôle central dans les diffusions audiovisuelles au cours d\'une célébration. Nous vous proposons également des accessoires pour compléter vos besoins de vidéo projection. La location d\'un vidéoprojecteur est la meilleure solution si vous avez des besoins ponctuels : Livraison, installation, mise en route du matériel, et réglages techniques sont assurés par nos techniciens.',
      image: firstMaterielVidéoprojecteur,
      features: [
        'Vidéoprojecteurs de 1800 à 8000 lumens',
        'Capacité d\'audience jusqu\'à 1000 personnes',
        'Écrans de projection professionnels',
        'Accessoires de vidéo-projection inclus',
        'Installation et réglages techniques par nos techniciens',
        'Livraison et mise en route sur site'
      ],
      specifications: [
        { label: 'Puissance lumineuse', value: '1800 à 8000 lumens' },
        { label: 'Capacité audience', value: 'Jusqu\'à 1000 personnes' },
        { label: 'Services inclus', value: 'Livraison, installation, réglages' },
        { label: 'Accessoires', value: 'Écrans et supports disponibles' }
      ],
      availability: 'Réservation recommandée',
      galleryImages: [
        {
          image: secondMaterielVidéoprojecteur,
          title: 'Vidéoprojecteurs Haute Luminosité',
          description: 'Projecteurs de 1800 à 8000 lumens pour grandes audiences',
          badge: 'Premium',
          badgeColor: '#E92B26'
        },
        {
          image: thirdMaterielVidéoprojecteur,
          title: 'Écrans de Projection',
          description: 'Écrans professionnels adaptés à tous types d\'événements',
          badge: 'Pro',
          badgeColor: '#1B1749'
        },
        {
          image: fourthMaterielVidéoprojecteur,
          title: 'Solutions Vidéo-Projection Complètes',
          description: 'Installation complète avec accessoires et support technique inclus',
          badge: 'Installation Pro',
          badgeColor: '#E92B26'
        }
      ]
    },
    {
      id: 'location-reseau-wifi',
      title: 'Location réseau & wifi',
      description: 'Solutions réseau filaire, WiFi et 4G pour vos événements',
      longDescription: 'Networks, internet filaire, sans fil–wifi, solution 4g! Vous organisez un évènement durant lequel vous devez fournir à vos participants une connexion internet. Que ce soit dans une toute petite salle, dans un hall d\'exposition, ou dans un centre de conférences sur plusieurs étages, faites confiance à l\'expertise d\' X-Zone Technologie pour connecter vos clients au reste du monde ! Du matériel informatique (déploiement de réseaux filaires & wifi) en location pour votre événement ! Nos solutions réseau s\'adaptent à tous les types d\'espaces et garantissent une connexion stable et sécurisée pour tous vos participants.',
      image: firstMaterielReseauWifi,
      features: [
        'Réseaux filaires et WiFi professionnels',
        'Solutions 4G pour connexion mobile',
        'Déploiement adapté à tous types d\'espaces',
        'Salles petites et grandes, halls d\'exposition',
        'Centres de conférences multi-étages',
        'Configuration et installation par nos experts'
      ],
      specifications: [
        { label: 'Types de connexion', value: 'Filaire, WiFi, 4G' },
        { label: 'Espaces couverts', value: 'Salles, halls, centres de conférences' },
        { label: 'Installation', value: 'Par nos techniciens experts' },
        { label: 'Support', value: 'Configuration sur mesure' }
      ],
      availability: 'Sur devis',
      galleryImages: [
        {
          image: secondMaterielReseauWifi,
          title: 'Réseaux Filaires Professionnels',
          description: 'Infrastructure réseau filaire pour connexions stables',
          badge: 'Premium',
          badgeColor: '#E92B26'
        },
        {
          image: thirdMaterielReseauWifi,
          title: 'Points d\'Accès WiFi',
          description: 'Solutions WiFi haute performance pour tous types d\'espaces',
          badge: 'Pro',
          badgeColor: '#1B1749'
        },
        {
          image: fourthMaterielReseauWifi,
          title: 'Solutions Réseau Complètes',
          description: 'Déploiement réseau adapté à vos événements avec support expert',
          badge: 'Expert',
          badgeColor: '#E92B26'
        }
      ]
    },
    {
      id: 'location-bureautique',
      title: 'Location Matériel Bureautique',
      description: 'Location de matériel d\'impression pour entreprises',
      longDescription: 'Louez votre matériel d\'impression ! La location de matériel bureautique est destinée aux entreprises ayant à faire face à des imprévus en terme de photocopies, d\'impressions, de numérisation de documents, etc. Le matériel que nous proposons à la location est dédié à un usage bureautique dans un cadre professionnel. Maintenance Pro-active, interventions rapides, commandes automatique de consommables, remplacement en cas de panne et recyclage de l\'ancien copieur, matériel toujours à la pointe de la technologie, un professionnel compétent à votre écoute. Nos solutions de location bureautique vous permettent de faire face à tous vos besoins d\'impression sans investissement initial.',
      image: firstMaterielBureautique,
      features: [
        'Imprimantes et photocopieurs professionnels',
        'Scanners haute résolution',
        'Maintenance pro-active incluse',
        'Interventions rapides garanties',
        'Commandes automatiques de consommables',
        'Remplacement en cas de panne'
      ],
      specifications: [
        { label: 'Types', value: 'Imprimantes, Photocopieurs, Scanners' },
        { label: 'Maintenance', value: 'Pro-active avec interventions rapides' },
        { label: 'Consommables', value: 'Commandes automatiques' },
        { label: 'Recyclage', value: 'Ancien matériel recyclé' }
      ],
      availability: 'Stock disponible',
      galleryImages: [
        {
          image: secondMaterielBureautique,
          title: 'Imprimantes Multifonctions',
          description: 'Imprimantes professionnelles avec maintenance incluse',
          badge: 'Premium',
          badgeColor: '#E92B26'
        },
        {
          image: thirdMaterielBureautique,
          title: 'Photocopieurs et Scanners',
          description: 'Équipements bureautiques dernière génération',
          badge: 'Pro',
          badgeColor: '#1B1749'
        },
        {
          image: fourthMaterielBureautique,
          title: 'Solutions Bureautiques Complètes',
          description: 'Maintenance pro-active et consommables automatiques inclus',
          badge: 'Maintenance Incluse',
          badgeColor: '#E92B26'
        }
      ]
    },
    {
      id: 'location-ecran-tactile',
      title: 'Location d\'écran tactile',
      description: 'Écrans tactiles interactifs pour salons et événements',
      longDescription: 'PROFITEZ DE NOTRE SERVICE DE LOCATION D\'ÉCRANS TACTILES POUR UN MAXIMUM D\'INTERACTIONS AVEC VOTRE PUBLIC ! Les écrans tactiles ont l\'avantage de ne nécessiter d\'aucun périphérique d\'entrée. Vous êtes standiste ? Sur un salon, l\'écran tactile, tout comme la borne multimédia incitera vos clients, même les néophytes informatiques, à le \'toucher\', vous permettant ainsi de récupérer les informations dont vous avez besoin ou de créer des opportunités d\'interaction avec ces derniers à travers des jeux interactifs, des formulaires questions-réponses, etc. Idéal pour créer une expérience utilisateur immersive et captivante lors de vos événements professionnels.',
      image: firstMaterielEcranTactile,
      features: [
        'Écrans tactiles interactifs dernière génération',
        'Aucun périphérique d\'entrée nécessaire',
        'Bornes multimédia interactives',
        'Jeux interactifs et formulaires Q&A',
        'Récupération d\'informations clients',
        'Expérience utilisateur immersive'
      ],
      specifications: [
        { label: 'Type', value: 'Écrans tactiles et bornes multimédia' },
        { label: 'Usage', value: 'Salons, stands, événements' },
        { label: 'Interactivité', value: 'Jeux, formulaires, Q&A' },
        { label: 'Public', value: 'Accessible aux néophytes' }
      ],
      availability: 'Réservation 48h à l\'avance',
      galleryImages: [
        {
          image: secondMaterielEcranTactile,
          title: 'Écrans Tactiles Interactifs',
          description: 'Écrans tactiles dernière génération pour interactions maximales',
          badge: 'Premium',
          badgeColor: '#E92B26'
        },
        {
          image: thirdMaterielEcranTactile,
          title: 'Bornes Multimédia',
          description: 'Solutions interactives pour stands et salons professionnels',
          badge: 'Pro',
          badgeColor: '#1B1749'
        },
        {
          image: fourthMaterielEcranTactile,
          title: 'Expériences Interactives Complètes',
          description: 'Jeux interactifs et formulaires pour engager votre public',
          badge: 'Interactif',
          badgeColor: '#E92B26'
        }
      ]
    },
    {
      id: 'location-accessoires',
      title: 'Location de matériel accessoires',
      description: 'Location d\'accessoires informatiques divers',
      longDescription: 'PROFITEZ DE NOTRE SERVICE DE LOCATION D\'ACCESSOIRES ! Dans la rubrique \'accessoires\', vous trouverez pléthore de matériel divers et variés pour tous types d\'usage. Location de webcam, location de claviers, de souris. Nous vous proposons aussi des cadre photo, splitter et autres appareils pouvant vous être utiles à un moment donné. Tous nos accessoires sont de qualité professionnelle et parfaitement compatibles avec vos équipements principaux pour une intégration sans faille.',
      image: firstLocationAccessoire,
      features: [
        'Webcams professionnelles HD',
        'Claviers et souris ergonomiques',
        'Cadres photo numériques',
        'Splitters et adaptateurs',
        'Accessoires divers et variés',
        'Compatibilité garantie'
      ],
      specifications: [
        { label: 'Catégories', value: 'Webcams, Claviers, Souris, Cadres photo, Splitters' },
        { label: 'Usage', value: 'Tous types d\'événements' },
        { label: 'Qualité', value: 'Professionnelle garantie' },
        { label: 'Compatibilité', value: 'Avec tous équipements' }
      ],
      availability: 'Disponible immédiatement',
      galleryImages: [
        {
          image: secondLocationAccessoire,
          title: 'Webcams Professionnelles',
          description: 'Webcams HD pour vos visioconférences et événements',
          badge: 'Premium',
          badgeColor: '#E92B26'
        },
        {
          image: thirdLocationAccessoire,
          title: 'Claviers et Souris',
          description: 'Périphériques ergonomiques de qualité professionnelle',
          badge: 'Pro',
          badgeColor: '#1B1749'
        },
        {
          image: fourthLocationAccessoire,
          title: 'Accessoires Divers',
          description: 'Large gamme d\'accessoires pour compléter vos équipements',
          badge: 'Large Choix',
          badgeColor: '#E92B26'
        }
      ]
    }
  ];

  const venteMaterials: Material[] = [
    {
      id: 'vente-serveur',
      title: 'Matériel Serveur',
      description: 'Serveurs d\'entreprise : le cœur de votre système d\'information',
      longDescription: 'LE SERVEUR : LE CŒUR DE VOTRE ENTREPRISE. Le serveur est le noyau central du système d\'informations d\'une entreprise, dont dépendent tous les autres postes informatiques, où toutes les données sont centralisées, et où sont gérées de nombreuses applications capitales pour le fonctionnement de l\'entreprise, telles que Sage grâce à une base SQL, Batigest avec une base MDB ou encore les emails avec la base Exchange. C\'est le serveur qui filtre les accès au réseau et qui contient d\'importants services de sécurité : DHCP, DNS, AD… Faites évoluer votre système d\'information en achetant un serveur d\'entreprise de notre catalogue aux nombreuses références. Nos conseillers sont là pour vous guider dans votre choix, selon vos besoins. Nos serveurs garantissent la sécurité, la performance et la fiabilité de votre infrastructure informatique.',
      image: firstVenteServeur,
      features: [
        'Noyau central du système d\'information',
        'Centralisation de toutes les données',
        'Gestion d\'applications (Sage, Batigest, Exchange)',
        'Services de sécurité (DHCP, DNS, AD)',
        'Filtrage des accès réseau',
        'Catalogue avec nombreuses références'
      ],
      specifications: [
        { label: 'Applications supportées', value: 'Sage (SQL), Batigest (MDB), Exchange' },
        { label: 'Services sécurité', value: 'DHCP, DNS, Active Directory' },
        { label: 'Conseil', value: 'Accompagnement personnalisé' },
        { label: 'Catalogue', value: 'Nombreuses références disponibles' }
      ],
      price: 'Sur devis',
      galleryImages: [
        {
          image: secondVenteServeur,
          title: 'Serveurs Rack Professionnels',
          description: 'Serveurs d\'entreprise pour centralisation des données',
          badge: 'Premium',
          badgeColor: '#E92B26'
        },
        {
          image: thirdVenteServeur,
          title: 'Infrastructure Serveur',
          description: 'Solutions serveur avec sécurité DHCP, DNS, AD',
          badge: 'Pro',
          badgeColor: '#1B1749'
        },
        {
          image: fourthVenteServeur,
          title: 'Solutions Serveur Complètes',
          description: 'Cœur de votre système d\'information avec support expert',
          badge: 'Expert',
          badgeColor: '#E92B26'
        }
      ]
    },
    {
      id: 'vente-pc-portable',
      title: 'Pc Portable',
      description: 'PC portables professionnels adaptés à vos besoins',
      longDescription: 'Large choix pour trouver votre PC portable professionnel. Trouver le meilleur ordinateur portable de travail n\'est pas chose facile, car cela dépend de vos besoins organisationnels. En effet, il existe de nombreux ordinateurs portables performants avec des caractéristiques et niveaux de prix différents qui sauront convenir à tout type d\'entreprise. Votre ordinateur portable est-il assez puissant pour les tâches que vous souhaitez accomplir pour le travail ? Est-il assez léger pour pouvoir le déplacer rapidement et aisément en cas de déplacement professionnel ou au cours de la journée? L\'écran est-il assez bon pour ne pas vous fatiguer les yeux en quelques heures ? Nous tâcherons de répondre à toutes ces questions et de vous donner un meilleur conseil pour les meilleurs ordinateurs portables de travail sur le marché.',
      image: firstVentePcPortable,
      features: [
        'Large choix de PC portables professionnels',
        'Puissance adaptée à vos tâches professionnelles',
        'Légèreté pour déplacements faciles',
        'Écrans de qualité pour confort visuel',
        'Caractéristiques et prix variés',
        'Conseil personnalisé selon vos besoins'
      ],
      specifications: [
        { label: 'Critères de choix', value: 'Puissance, Légèreté, Qualité écran' },
        { label: 'Usage', value: 'Travail et déplacements professionnels' },
        { label: 'Conseil', value: 'Personnalisé selon vos besoins' },
        { label: 'Gamme', value: 'Tous types d\'entreprises' }
      ],
      price: 'Sur devis',
      galleryImages: [
        {
          image: secondVentePcPortable,
          title: 'PC Portables Ultra-Légers',
          description: 'Ordinateurs portables légers pour déplacements professionnels',
          badge: 'Premium',
          badgeColor: '#E92B26'
        },
        {
          image: thirdVentePcPortable,
          title: 'Workstations Mobiles',
          description: 'PC portables puissants pour tâches professionnelles intensives',
          badge: 'Pro',
          badgeColor: '#1B1749'
        },
        {
          image: fourthVentePcPortable,
          title: 'Gamme Complète PC Portables',
          description: 'Large choix adapté à tous vos besoins organisationnels',
          badge: 'Large Choix',
          badgeColor: '#E92B26'
        }
      ]
    },
    {
      id: 'vente-ordinateur-bureau',
      title: 'Ordinateur de bureau',
      description: 'PC de bureau professionnels avec SAV performant',
      longDescription: 'Des PC de bureaux adaptées à votre demande et un SAV performant. Il existe sur Internet et dans la grande distribution de nombreuses possibilités d\'acquérir du matériel informatique à des prix défiants toute concurrence pour les particuliers. Pour les professionnels, en revanche, le revendeur informatique reste le partenaire privilégié pour l\'achat de l\'ensemble du matériel Informatique. X-zone Technologie apporte le conseil, des offres adaptées à votre demande et un SAV performant. Notre but n\'est pas que le montant de la facture soit le plus important possible mais que le client revienne nous voir. Le client peut demander un ordinateur ou autre matériel sur mesure. Nous privilégions la satisfaction client et la qualité du service.',
      image: firstVentePcBureau,
      features: [
        'PC de bureau adaptés à votre demande',
        'Conseil personnalisé professionnel',
        'SAV performant et réactif',
        'Offres adaptées aux professionnels',
        'Matériel sur mesure disponible',
        'Partenariat privilégié avec les entreprises'
      ],
      specifications: [
        { label: 'Service', value: 'Conseil et SAV performant' },
        { label: 'Approche', value: 'Satisfaction client prioritaire' },
        { label: 'Personnalisation', value: 'Matériel sur mesure possible' },
        { label: 'Cible', value: 'Professionnels et entreprises' }
      ],
      price: 'Sur devis',
      galleryImages: [
        {
          image: secondVentePcBureau,
          title: 'PC de Bureau Professionnels',
          description: 'Ordinateurs de bureau adaptés à vos besoins avec SAV performant',
          badge: 'Premium',
          badgeColor: '#E92B26'
        },
        {
          image: thirdVentePcBureau,
          title: 'Solutions Sur Mesure',
          description: 'Configuration personnalisée selon vos exigences professionnelles',
          badge: 'Pro',
          badgeColor: '#1B1749'
        },
        {
          image: fourthVentePcBureau,
          title: 'Service Après-Vente',
          description: 'SAV performant et conseil expert pour votre satisfaction',
          badge: 'SAV Inclus',
          badgeColor: '#E92B26'
        }
      ]
    },
    {
      id: 'vente-reseaux',
      title: 'Réseaux Informatiques',
      description: 'Optimisation de votre infrastructure réseau',
      longDescription: 'Optimiser votre réseau pour la production informatique ! L\'infrastructure réseau est à la base du transport physique des informations. Parce qu\'elle est le support de tous les échanges de données représentant vos communications, les indicateurs de sa performance et de sa sécurité ont un impact direct sur votre activité. X-Zone Technologie, partenaire de proximité reconnu des entreprises, conçoit toute une gamme de services liées aux architectures réseau. Du câblage à l\'installation de baies techniques associant équipements télécoms, de sécurité, informatiques et de téléphonie, nos solutions visent à améliorer la disponibilité et la sécurité de votre système d\'information et de votre réseau. X-Zone Technologie accompagne les PME/PMI à chaque étape importante de l\'évolution de leur parc informatique : audit, vente de matériel informatiques, conception d\'architecture, administration réseau, migration de systèmes. Elle assure un fonctionnement optimal des outils informatiques.',
      image: firstVenteReseau,
      features: [
        'Optimisation de l\'infrastructure réseau',
        'Câblage et installation de baies techniques',
        'Équipements télécoms, sécurité, informatiques',
        'Amélioration disponibilité et sécurité',
        'Accompagnement PME/PMI complet',
        'Audit, conception, administration, migration'
      ],
      specifications: [
        { label: 'Services', value: 'Audit, Conception, Administration, Migration' },
        { label: 'Équipements', value: 'Télécoms, Sécurité, Informatique, Téléphonie' },
        { label: 'Cible', value: 'PME/PMI' },
        { label: 'Objectif', value: 'Performance et sécurité optimales' }
      ],
      price: 'Sur devis',
      galleryImages: [
        {
          image: secondVenteReseau,
          title: 'Infrastructure Réseau',
          description: 'Câblage et baies techniques pour votre réseau',
          badge: 'Premium',
          badgeColor: '#E92B26'
        },
        {
          image: thirdVenteReseau,
          title: 'Équipements Réseau',
          description: 'Solutions télécoms, sécurité et téléphonie intégrées',
          badge: 'Pro',
          badgeColor: '#1B1749'
        },
        {
          image: fourthVenteReseau,
          title: 'Optimisation Réseau Complète',
          description: 'Audit, conception et administration pour performance optimale',
          badge: 'Expert',
          badgeColor: '#E92B26'
        }
      ]
    },
    {
      id: 'vente-imprimantes',
      title: 'Imprimantes',
      description: 'Imprimantes professionnelles économiques et performantes',
      longDescription: 'Imprimez vos documents professionnels rapidement ! En milieu professionnel où le tirage de factures, de bons de commande, de documents commerciaux et contractuels est indispensable, le choix d\'une imprimante économique et performante s\'impose. Entre une imprimante laser et à jet d\'encre, il est souvent difficile de faire son choix en sachant que chaque type répond à des besoins et à des contraintes spécifiques. Un certain nombre d\'aspects, tous essentiels, devront être pris en compte avant d\'acheter une imprimante professionnelle. X-Zone Technologie propose une sélection d\'imprimantes HP, EPSON, LEXMARK… dans laquelle vous pouvez faire votre choix en fonction de vos besoins : noir et blanc couleur ou qualité photo. Nos experts vous conseillent pour trouver l\'imprimante idéale selon votre usage professionnel.',
      image: firstVenteImprimante,
      features: [
        'Imprimantes économiques et performantes',
        'Tirage de factures et documents commerciaux',
        'Choix entre laser et jet d\'encre',
        'Marques : HP, EPSON, LEXMARK',
        'Noir et blanc, couleur ou qualité photo',
        'Conseil personnalisé selon vos besoins'
      ],
      specifications: [
        { label: 'Types', value: 'Laser, Jet d\'encre' },
        { label: 'Marques', value: 'HP, EPSON, LEXMARK' },
        { label: 'Usage', value: 'Factures, bons de commande, documents commerciaux' },
        { label: 'Conseil', value: 'Personnalisé selon contraintes' }
      ],
      price: 'Sur devis',
      galleryImages: [
        {
          image: secondVenteImprimante,
          title: 'Imprimantes Laser',
          description: 'Imprimantes laser économiques pour documents professionnels',
          badge: 'Premium',
          badgeColor: '#E92B26'
        },
        {
          image: thirdVenteImprimante,
          title: 'Imprimantes Jet d\'Encre',
          description: 'Imprimantes jet d\'encre pour qualité photo et couleur',
          badge: 'Pro',
          badgeColor: '#1B1749'
        },
        {
          image: fourthVenteImprimante,
          title: 'Gamme Complète HP, EPSON, LEXMARK',
          description: 'Large sélection d\'imprimantes professionnelles avec conseil expert',
          badge: 'Large Choix',
          badgeColor: '#E92B26'
        }
      ]
    },
    {
      id: 'vente-tonner',
      title: 'Tonner',
      description: 'Cartouches et toners pour toutes marques d\'imprimantes',
      longDescription: 'Cartouches d\'imprimantes jet d\'encre, laser et photocopieurs. Vous retrouverez chez X-zone Technologie les marques de cartouche d\'encre et toner les plus connues et les plus utilisées sur les différentes imprimantes. X-zone Technologie propose à l\'achat entre autre des cartouches d\'encre HP, toner EPSON, encre imprimante CANON, cartouche d\'impression LEXMARK, cartouche imprimante BROTHER ainsi que d\'autres. Notre gamme d\'encre imprimante est proposée à la fois aux particuliers et aux professionnels. Tous nos consommables sont garantis compatibles et de qualité supérieure pour assurer des impressions parfaites.',
      image: firstVenteTonner,
      features: [
        'Cartouches jet d\'encre toutes marques',
        'Toners laser professionnels',
        'Cartouches pour photocopieurs',
        'Marques : HP, EPSON, CANON, LEXMARK, BROTHER',
        'Disponible pour particuliers et professionnels',
        'Qualité supérieure garantie'
      ],
      specifications: [
        { label: 'Types', value: 'Jet d\'encre, Laser, Photocopieurs' },
        { label: 'Marques', value: 'HP, EPSON, CANON, LEXMARK, BROTHER' },
        { label: 'Cible', value: 'Particuliers et Professionnels' },
        { label: 'Garantie', value: 'Compatibilité et qualité garanties' }
      ],
      price: 'À partir de 19€',
      galleryImages: [
        {
          image: secondVenteTonner,
          title: 'Toners Laser Professionnels',
          description: 'Toners haute capacité pour imprimantes laser toutes marques',
          badge: 'Premium',
          badgeColor: '#E92B26'
        },
        {
          image: thirdVenteTonner,
          title: 'Cartouches Jet d\'Encre',
          description: 'Cartouches d\'encre HP, EPSON, CANON, LEXMARK, BROTHER',
          badge: 'Pro',
          badgeColor: '#1B1749'
        },
        {
          image: fourthVenteTonner,
          title: 'Gamme Complète Consommables',
          description: 'Large choix de cartouches et toners pour particuliers et professionnels',
          badge: 'Large Choix',
          badgeColor: '#E92B26'
        }
      ]
    }
  ];

  const handleMaterialClick = (material: Material) => {
    setSelectedMaterial(material);
    navigate(`/materiel#${material.id}`, { replace: false });
  };

  // Handle hash navigation on mount and location change
  useEffect(() => {
    const allMaterials = [...locationMaterials, ...venteMaterials];
    const hash = location.hash.slice(1); // Remove the #
    
    if (hash) {
      const material = allMaterials.find(m => m.id === hash);
      if (material) {
        setSelectedMaterial(material);
        // Expand the relevant section
        if (material.id.startsWith('location-')) {
          setLocationExpanded(true);
        } else if (material.id.startsWith('vente-')) {
          setVenteExpanded(true);
        }
      }
    } else {
      // If no hash, clear selection
      setSelectedMaterial(null);
    }
  }, [location.hash]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative pt-24 pb-16 w-full">
        

        <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 md:px-8 lg:px-10 w-full">
          {/* Left Sidebar - Filter */}
          <div className="w-full lg:w-80 shrink-0 relative z-10">
            <div className="bg-[#0a0a0a] rounded-xl border border-gray-800/30 p-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              <h2 className="text-xl font-semibold text-white mb-6">Filter</h2>
              
              {/* Location Matériel Section */}
              <div className="mb-8">
                <button
                  onClick={() => setLocationExpanded(!locationExpanded)}
                  className="w-full flex items-center justify-between mb-4 text-left"
                >
                  <h3 className="text-base font-semibold text-white">Location Matériel</h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${locationExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {locationExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2 overflow-hidden"
                    >
                      {locationMaterials.map((material) => (
                        <label
                          key={material.id}
                          className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer group transition-all ${
                            selectedMaterial?.id === material.id
                              ? 'bg-gradient-to-r from-[#E92B26]/20 via-[#1B1749]/30 to-[#E92B26]/20 border border-gray-800/30'
                              : 'bg-transparent border border-gray-800/30 hover:bg-gray-800/30'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedMaterial?.id === material.id}
                            onChange={() => handleMaterialClick(material)}
                            className="mt-1 w-4 h-4 text-[#E92B26] bg-transparent border-gray-600 rounded focus:ring-[#E92B26] focus:ring-2"
                          />
                          <div className="flex-1">
                            <div className={`text-sm font-medium transition-colors ${
                              selectedMaterial?.id === material.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                            }`}>
                              {material.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {material.description}
                            </div>
                          </div>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Vente Matériel Section */}
              <div>
                <button
                  onClick={() => setVenteExpanded(!venteExpanded)}
                  className="w-full flex items-center justify-between mb-4 text-left"
                >
                  <h3 className="text-base font-semibold text-white">Vente Matériel</h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${venteExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {venteExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2 overflow-hidden"
                    >
                      {venteMaterials.map((material) => (
                        <label
                          key={material.id}
                          className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer group transition-all ${
                            selectedMaterial?.id === material.id
                              ? 'bg-gradient-to-r from-[#E92B26]/20 via-[#1B1749]/30 to-[#E92B26]/20 border border-gray-800/30'
                              : 'bg-transparent border border-gray-800/30 hover:bg-gray-800/30'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedMaterial?.id === material.id}
                            onChange={() => handleMaterialClick(material)}
                            className="mt-1 w-4 h-4 text-[#E92B26] bg-transparent border-gray-600 rounded focus:ring-[#E92B26] focus:ring-2"
                          />
                          <div className="flex-1">
                            <div className={`text-sm font-medium transition-colors ${
                              selectedMaterial?.id === material.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                            }`}>
                              {material.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {material.description}
                            </div>
                          </div>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Side - Blog/Article Content */}
          <div className="flex-1 min-w-0 relative z-10">
            <AnimatePresence mode="wait">
              {selectedMaterial ? (
                <motion.article
                  key={selectedMaterial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-transparent rounded-xl border border-gray-800/30 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                >
                  {/* Hero Image - Full Width */}
                  <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-800/30 relative overflow-hidden group">
                    <img
                      src={selectedMaterial.image}
                      alt={selectedMaterial.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{
                        filter: 'brightness(0.85) contrast(1.2) saturate(0.7) hue-rotate(-10deg)',
                        mixBlendMode: 'screen'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gray-900/40 mix-blend-mode-darken"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <div className="max-w-3xl">
                        <h2 className="text-lg sm:text-xl font-bold text-white mb-1 drop-shadow-lg">
                          {selectedMaterial.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-300 drop-shadow-md">
                          Solutions professionnelles de haute qualité pour tous vos besoins
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                    {/* Title */}
                    <h1 className="text-2xl font-bold mb-4 text-white">
                      {selectedMaterial.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      {(selectedMaterial.price || selectedMaterial.availability) && (
                        <div className={`px-4 py-2 rounded-full font-semibold ${
                          selectedMaterial.price 
                            ? 'bg-gray-800/30 text-white border border-gray-800/30'
                            : 'bg-gray-800/30 text-white border border-gray-800/30'
                        }`}>
                          {selectedMaterial.price || selectedMaterial.availability}
                        </div>
                      )}
                    </div>

                    {/* Long Description */}
                    <div className="mb-8">
                      <p className="text-base text-gray-300 leading-relaxed mb-4">
                        {selectedMaterial.longDescription}
                      </p>
                      <p className="text-base text-gray-300 leading-relaxed mb-4">
                        Chez X-Zone Technologie, nous nous engageons à fournir des solutions de qualité supérieure qui répondent aux exigences les plus strictes du marché. Notre expertise de plus de 20 ans dans le domaine de l'informatique et de la technologie nous permet de vous proposer des équipements testés et certifiés, garantissant performance et fiabilité pour tous vos projets professionnels.
                      </p>
                      <p className="text-base text-gray-300 leading-relaxed">
                        Basée à Casablanca depuis 2001, X-Zone Technologie est votre partenaire de confiance pour tous vos besoins en matériel informatique au Maroc. Que vous soyez une PME, une grande entreprise, ou un organisateur d'événements, nous adaptons nos solutions à vos contraintes budgétaires et techniques. Notre équipe d'experts vous accompagne de la sélection du matériel jusqu'à la mise en service, en passant par l'installation et la formation de vos équipes.
                      </p>
                    </div>

                    {/* Additional Images Gallery */}
                    {selectedMaterial.galleryImages && selectedMaterial.galleryImages.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Galerie de nos équipements</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          {selectedMaterial.galleryImages.slice(0, 2).map((galleryImage, index) => (
                            <motion.div 
                              key={index}
                              whileHover={{ scale: 1.02 }}
                              className="relative w-full h-48 sm:h-64 bg-gray-800/30 rounded-xl overflow-hidden group border border-gray-800/30 shadow-lg"
                            >
                              <img
                                src={galleryImage.image}
                                alt={galleryImage.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                style={{
                                  filter: 'brightness(0.85) contrast(1.2) saturate(0.7) hue-rotate(-10deg)',
                                  mixBlendMode: 'screen'
                                }}
                              />
                              <div className="absolute inset-0 bg-gray-900/40 mix-blend-mode-darken"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 drop-shadow-lg">
                                  {galleryImage.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-300 drop-shadow-md">
                                  {galleryImage.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        {selectedMaterial.galleryImages.length > 2 && (
                          <motion.div 
                            whileHover={{ scale: 1.01 }}
                            className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-800/30 rounded-xl overflow-hidden group border border-gray-800/30 shadow-lg"
                          >
                            <img
                              src={selectedMaterial.galleryImages[2].image}
                              alt={selectedMaterial.galleryImages[2].title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              style={{
                                filter: 'brightness(0.85) contrast(1.2) saturate(0.7) hue-rotate(-10deg)',
                                mixBlendMode: 'screen'
                              }}
                            />
                            <div className="absolute inset-0 bg-gray-900/40 mix-blend-mode-darken"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                              <div className="max-w-2xl">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                                  {selectedMaterial.galleryImages[2].title}
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 drop-shadow-md">
                                  {selectedMaterial.galleryImages[2].description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Description Section */}
                    <div className="mb-8">
                      <div className="bg-gray-800/30 rounded-xl p-6 sm:p-8 border border-gray-800/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Pourquoi choisir X-Zone Technologie ?</h2>
                        <div className="space-y-4">
                          <p className="text-base text-gray-300 leading-relaxed">
                            Nos équipements sont sélectionnés parmi les meilleures marques du marché pour garantir une qualité exceptionnelle et une durabilité optimale. Chaque produit est rigoureusement testé avant la mise en service pour vous assurer une performance maximale. Nous travaillons avec les leaders de l'industrie informatique pour vous offrir le meilleur rapport qualité-prix.
                          </p>
                          <p className="text-base text-gray-300 leading-relaxed">
                            Que vous organisiez un événement ponctuel à Casablanca, Rabat, Marrakech ou ailleurs au Maroc, que vous ayez besoin d'équipements pour une période déterminée, ou que vous souhaitiez acquérir du matériel pour votre entreprise, nous adaptons nos solutions à vos besoins spécifiques avec un accompagnement personnalisé tout au long de votre projet. Notre service de location courte durée vous permet de disposer du matériel dans les heures suivant votre commande.
                          </p>
                          <p className="text-base text-gray-300 leading-relaxed">
                            Notre équipe de techniciens expérimentés et certifiés assure l'installation, la configuration et la maintenance de tous nos équipements, vous offrant ainsi une tranquillité d'esprit totale et la garantie d'un service professionnel de bout en bout. Nous intervenons sur tout le territoire marocain avec une réactivité exceptionnelle.
                          </p>
                          <p className="text-base text-gray-300 leading-relaxed">
                            X-Zone Technologie, c'est plus de 20 ans d'expérience au service des entreprises marocaines. Nous sommes spécialisés dans la vente, la location, l'intégration, le réseau, la maintenance, la surveillance et les solutions multimédias. Contactez-nous au +212 5 22 52 32 32 ou via notre formulaire de demande de devis pour discuter de votre projet.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Features Section */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Caractéristiques principales</h2>
                      <p className="text-gray-400 mb-6 text-sm sm:text-base">
                        Découvrez les fonctionnalités et avantages qui font de cet équipement un choix idéal pour vos besoins professionnels.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedMaterial.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-800/30">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#E92B26] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications Section */}
                    {selectedMaterial.specifications && selectedMaterial.specifications.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Spécifications techniques</h2>
                        <p className="text-gray-400 mb-6 text-sm sm:text-base">
                          Consultez les détails techniques précis de cet équipement pour vous assurer qu'il correspond parfaitement à vos exigences.
                        </p>
                        <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-800/30">
                          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {selectedMaterial.specifications.map((spec, index) => (
                              <div key={index} className="border-b border-gray-800/30 pb-3 last:border-0">
                                <dt className="text-sm font-medium text-gray-400 mb-1">{spec.label}</dt>
                                <dd className="text-base font-semibold text-white">{spec.value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      </div>
                    )}

                    {/* Additional Info Section */}
                    <div className="mb-8">
                      <div className="bg-gray-800/30 rounded-xl p-6 sm:p-8 border border-gray-800/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Informations complémentaires</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#E92B26]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Service Client
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Notre équipe de support est disponible 24/7 pour répondre à toutes vos questions et vous accompagner dans l'utilisation de nos équipements. Contactez-nous au +212 5 22 52 32 32 ou via notre formulaire de demande de devis.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#E92B26]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Livraison & Installation
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Nous assurons la livraison et l'installation professionnelle de tous nos équipements sur tout le territoire marocain. Service disponible à Casablanca, Rabat, Marrakech et dans toutes les grandes villes du Maroc.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#E92B26]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Garantie & Maintenance
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Tous nos équipements bénéficient d'une garantie complète et d'un service de maintenance préventive pour assurer leur longévité. Maintenance pro-active avec interventions rapides et remplacement en cas de panne.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#E92B26]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Support Technique
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Nos techniciens certifiés sont à votre disposition pour toute intervention technique, formation ou assistance personnalisée. Expertise reconnue depuis 2001 dans le domaine de l'informatique au Maroc.
                            </p>
                          </div>
                        </div>
                        <div className="pt-6 border-t border-gray-800/30">
                          <h3 className="text-lg font-semibold text-white mb-3">Zone de couverture</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-3">
                            X-Zone Technologie intervient sur tout le territoire marocain. Que vous soyez à Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir ou dans toute autre ville du Maroc, nous vous proposons nos services de location et vente de matériel informatique avec livraison et installation sur site.
                          </p>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            <strong className="text-white">Contactez-nous :</strong> Téléphone : +212 5 22 52 32 32 | Email : contact@xzone.ma | Adresse : Casablanca, Maroc. N'hésitez pas à nous contacter pour toute demande de devis personnalisé ou information complémentaire sur nos services de location et vente de matériel informatique professionnel.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6 border-t border-gray-800/30">
                      <div className="mb-4">
                        <p className="text-gray-300 text-sm sm:text-base mb-2">
                          Intéressé par cet équipement ? Contactez-nous dès maintenant pour obtenir un devis personnalisé adapté à vos besoins.
                        </p>
                      </div>
                      <motion.button
                        onClick={() => navigate('/contact')}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto px-8 py-4 bg-[#E92B26] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#c91e1a]"
                      >
                        Demander un devis
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-transparent rounded-xl border border-gray-800/30 p-8 sm:p-12 text-center shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full bg-gray-800/30 flex items-center justify-center">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Sélectionnez un matériel</h3>
                  <p className="text-gray-400">Cliquez sur un matériel dans le filtre pour voir ses détails</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default MaterielPage;
