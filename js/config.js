//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "";

// Center logo?
// 'true' or 'false'
var l_centerLogo = true;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = false;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "BRAVERY SOLDIERS";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"p1.jpg",
	"p2.jpg",
	"p3.jpg",
	"p4.jpg",
	"p5.jpg",
	"p6.jpg",
	"p7.jpg",
	"p8.jpg",
	"p9.jpg",
	"p10.jpg",
	"p11.jpg",
	"p12.jpg",
	"p13.jpg",
	"p14.jpg",
	"p15.jpg",
	"p16.jpg",
	"p17.jpg",
	"p18.jpg",
	"p19.jpg",
	"p20.jpg",
	"p21.jpg",
	"p22.jpg",
	"p23.jpg",
	"p24.jpg",
	"p25.jpg",
	"p26.jpg",
	"p27.jpg",
	"p28.jpg",
	"p29.jpg",
	"p30.jpg",
	"p31.jpg",
	"p32.jpg",
	"p33.jpg",
	"p34.jpg",
	"p35.jpg",
	"p36.jpg",
	"p37.jpg",
	"p38.jpg",
	"p39.jpg"
];

// 	"p13.jpg",
//	"p14.jpg",
//	"p15.jpg",
//	"p16.png",
//	"p17.jpg",
//	"p18.jpg",
//	"p19.jpg",
//	"p20.jpg",
//	"p21.png"

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 4875;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2250;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "1.ogg", name: "Légion étrangère"},
	{ogg: "2.ogg", name: "Légionnaires"},
	{ogg: "3.ogg", name: "Strasbourgeoise"},
	{ogg: "4.ogg", name: "2ème REP"},
	{ogg: "5.ogg", name: "Notre France chérie"},
	{ogg: "6.ogg", name: "2ème REG"},
	{ogg: "7.ogg", name: "1er RIMA"},
		
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Astuce 1 : Chaque grade a ses responsabilités. Respecte les ordres de tes supérieurs pour une immersion plus réaliste dans l'armée.",
	"Astuce 2 : Le salut militaire est une marque de respect dans l’armée française.",
	"Astuce 3 : Apprends les termes radio de base pour mieux coordonner tes actions avec ton équipe.",
	"Astuce 4 : Respecte les formations militaires pour une meilleure efficacité.",
	"Astuce 5 : Avant chaque sortie, vérifie que tu as bien ton armement, tes munitions, et tes équipements de soutien",
	"Astuce 6 : Informe ton équipe de tes déplacements et des cibles repérées pour assurer le succès de la mission.",
	"Astuce 7 : Reste en alerte, couvre tes angles morts et surveille ton environnement à tout moment.",
	"Astuce 8 : Respecte les protocoles et sois toujours prêt à réagir rapidement aux ordres.",
	"Astuce 9 : L’entraînement et la discipline sont les bases de l’armée française.",
	"Astuce 10 : La précision au tir est essentielle pour tout soldat.",
	"Astuce 11 : Prends le temps de t’entraîner régulièrement à la visée et au tir en mouvement.",
	"Astuce 12 : Envoyez une grenade flash pour aveugler vos adversaires.",
	"Astuce 13 : Envoyer une grande à fragmentation dans un lieu clos permet d'augmenter les chances d'élimination.",
	"Astuce 14 : Ne cours pas sans arrêt pour éviter de t’épuiser avant l'action.",
	"Astuce 15 : Envoyez une grenade fumigène afin d'avancer dans un lieu sécurisé par l'adversaire. ",
	"Astuce 16 : Attends les ordres ou une menace claire avant d’engager l’ennemi.",
	"Astuce 17 : S'équiper de votre arme secondaire plutôt que de recharger permet de gagner du temps.",
	"Astuce 18 : Équiper des accessoires sur vos armes permet d'améliorer les compétences de celle-ci.",
	"Astuce 19 : Si vous voulez courir plus vite, prenez un équipement plus léger.",
	"Astuce 20 : Connectez-vous sur notre discord pour bénéficier de récompenses et informations supplémentaires.",
	"Astuce 21 : En tirant au jugé vous serrez moins précis. Utilisez l'organe de visé ou les lunettes prévues.",
	"Astuce 22 : L'armée française valorise le travail d'équipe.",
	"Astuce 23 : Ne pars jamais seul en mission, reste en communication constante avec ton équipe.",
	"Astuce 24 : Plus une arme à une cadence de tir faible, meilleur seront ses dégâts au détriment d’un recul plus élevé.",
	"Astuce 25 : Les véhicules militaires comme les VAB, hélicoptères ou chars doivent être utilisés avec discernement.",
	"Astuce 26 : Coopérez avec votre équipe pour dominer le champ de bataille.",
	"Astuce 27 : Dans certaines opérations, le camouflage est ta meilleure arme",
	"Astuce 28 : Utilise le terrain pour te fondre dans l’environnement et éviter d’attirer l’attention de l’ennemi.",
	"Astuce 29 : Si tu joues un rôle de médecin ou de soutien, sois prêt à intervenir rapidement pour soigner tes camarades et les ramener dans l’action.",
	"Astuce 30 : En cas de blessure grave ou d’extraction urgente, respecte les protocoles d’évacuation.",
	"Astuce 31 : Dans les situations d'urgence, fais preuve de sang-froid et d’adaptation.",
	"Astuce 32 : L'improvisation calculée est souvent nécessaire pour réussir une mission sous pression.",
	"Astuce 33 : La furtivité et la précision sont tes meilleures alliées.",
	"Astuce 34 : Toujours sécuriser les points névralgiques comme les ponts, les collines et les bâtiments élevés.",
	"Astuce 35 : Le contrôle du terrain donne un avantage tactique décisif.",
	"Astuce 36 : Quand tu te déplaces, cherche toujours une couverture (murs, arbres, véhicules).",
	"Astuce 37 : Ne reste jamais à découvert trop longtemps, cela te rend vulnérable.",
	"Astuce 38 : Si tu joues un rôle de commandement, utilise les frappes aériennes et l'artillerie à bon escient",
	"Astuce 39 : Dans le feu de l'action, les tirs précipités peuvent manquer leur cible.",
	"Astuce 40 : Entraîne-toi à tirer avec précision sous pression pour maximiser ton efficacité au combat.",
	"Astuce 41 : Que ce soit pour déloger un ennemi ou couper une retraite, les grenades sont un outil efficace.",
	"Astuce 42 : Lors d’une attaque, coordonne une manœuvre en pince pour prendre l’ennemi en tenaille.",
	"Astuce 43 : Laisse toujours quelqu'un en surveillance.",
	"Astuce 44 : Même lorsque tu prends une pause, un soldat doit rester en alerte pour repérer toute activité ennemie.",
	"Astuce 45 : Dans le feu de l'action, les tirs précipités peuvent manquer leur cible.",
	"Astuce 46 : Ne gaspille pas tes munitions inutilement. Chaque balle peut compter dans une situation critique.",
	"Astuce 47 : Lorsque tu traverses des zones étroites ou boisées, sois vigilant et anticipe les possibles embuscades ennemies.",
	"Astuce 48 : Avant d'attaquer une position, envoie une équipe en reconnaissance pour évaluer les forces ennemies et leurs positions.",
	"Astuce 49 : La touche 'i' te permet d'ouvrir ton inventaire.",
	"Astuce 50 : Légio Patria Nostra",
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 4875;

// Messages fade time
// in milliseconds
var l_messagesFade = 1125;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = false;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};