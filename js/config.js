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
var l_serverImage = "tglogo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = false;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "Territory-Gaming";

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
	"867060.jpg",
	"882939.png",
	"883577.jpg",
	"924918.png",
	"924923.png",
	"381903.png",
	"155117.jpg",
	"39859790040.jpg",
	"cOw1uaK.jpg",
	"DS_JTnNUQAARDv4.jpg",
	"ImG88Oz.png",
	"InstaSave.jpg",
	"Loading Screen Rhen Var.png",
	"nmnhmU4.jpg",
	"star-wars-battlefront-2_6030139.jpg",
	"star-wars-battlefront-II-kashyyk.jpg",
	"swbf2-news-blog-image-nvidia-screenshot-3.jpg.adapt.crop16x9.1455w.jpg",
	"wp2277162-star-wars-battlefront-ii-wallpapers.jpg",
	"swbf2-news-blog-image-nvidia-screenshot-2.jpg.adapt.crop16x9.1455w.jpg"
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 10000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = false;

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
	{youtube: "https://www.youtube.com/watch?v=eb2zuegwcwk", name: "Star Wars - The Force Suite"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = false;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 5;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Willkommen auf Territory-Gaming!",
	"TS³: ts.territorygaming.de",
	"Forum: territory-gaming.de",
	"„Kein Mann bleibt zurück!“",
	"„Tue es oder tue es nicht. Es gibt kein Versuchen.“",
	"„Möge die Macht mit dir sein.“",
	"„Das ist unsere Heimat. Das ist unser Krieg.“",
	"„Regel 1 - Töte sie, bevor sie dich töten“",
	"„Regel 39 - Sag' nie 'Nein' zu Bacta“",
	"„Einen guten Klon hält nichts auf,Sir!“",
	"„Es geht doch nichts über verbotenes Entern, um den Tag zu beginnen.“",
	"„Sir, ich bedaure Ihnen mitteilen zu müssen, dass Sie ein di'kut sind.“",
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 8000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

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
