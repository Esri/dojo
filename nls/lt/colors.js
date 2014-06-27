﻿define(
//begin v1.x content
({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.

//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color (e.g. gray / grey).
//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
aliceblue: "Alisos mėlyna",
antiquewhite: "senovinė balta",
aqua: "žalsvai melsva",
aquamarine: "akvamarino",
azure: "mėlio",
beige: "smėlio",
bisque: "rausvai rusva",
black: "juoda",
blanchedalmond: "balinto migdolo",
blue: "mėlyna",
blueviolet: "mėlynai violetinė",
brown: "rudas",
burlywood: "rusvai smėlinė",
cadetblue: "pilkšvai mėlyna kadetų",
chartreuse: "gelsvai žalia chartreuse",
chocolate: "šokolado",
coral: "koralų",
cornflowerblue: "rugiagėlių mėlyna",
cornsilk: "kukurūzų šilko",
crimson: "tamsiai raudona",
cyan: "žydra",
darkblue: "tamsiai mėlyna",
darkcyan: "tamsiai žydra",
darkgoldenrod: "tamsi rykštenės",
darkgray: "tamsiai pilka",
darkgreen: "tamsiai žalia",
darkgrey: "tamsiai pilka", // same as darkgray
darkkhaki: "tamsi chaki",
darkmagenta: "tamsiai raudona",
darkolivegreen: "tamsiai žalia alyvuogių",
darkorange: "tamsiai oranžinė",
darkorchid: "tamsiai violetinė orchidėjos",
darkred: "tamsiai raudona",
darksalmon: "tamsiai gelsvai rausva",
darkseagreen: "tamsiai žalia jūros",
darkslateblue: "tamsiai mėlyna skalūno",
darkslategray: "tamsiai pilka skalūno",
darkslategrey: "tamsiai pilka skalūno", // same as darkslategray
darkturquoise: "tamsi turkio",
darkviolet: "tamsiai violetinė",
deeppink: "sodri rožinė",
deepskyblue: "sodriai mėlyna dangaus",
dimgray: "blankiai pilka",
dimgrey: "blankiai pilka", // same as dimgray
dodgerblue: "ryškiai mėlyna",
firebrick: "raudona plytos",
floralwhite: "balta gėlių",
forestgreen: "žalia miško",
fuchsia: "fuksijos",
gainsboro: "pilka gainsboro",
ghostwhite: "balta vaiduoklių",
gold: "auksas",
goldenrod: "rykštenės",
gray: "pilka",
green: "žalia",
greenyellow: "žalsvai geltona",
grey: "pilka", // same as gray
honeydew: "meliono",
hotpink: "ryškiai rožinė",
indianred: "raudona indėnų",
indigo: "indigo",
ivory: "dramblio kaulo",
khaki: "chaki",
lavender: "šviesiai violetinė",
lavenderblush: "rausvai šviesiai violetinė",
lawngreen: "žalia pievos",
lemonchiffon: "gelsva citrininio pyrago",
lightblue: "šviesiai mėlyna",
lightcoral: "šviesi koralų",
lightcyan: "šviesiai žydra",
lightgoldenrodyellow: "šviesiai geltona rykštenės",
lightgray: "šviesiai pilka",
lightgreen: "šviesiai žalia",
lightgrey: "šviesiai pilka", // same as lightgray
lightpink: "šviesiai rožinė",
lightsalmon: "šviesiai gelsvai rausva",
lightseagreen: "šviesiai žalia jūros",
lightskyblue: "šviesiai mėlyna dangaus",
lightslategray: "šviesiai pilka skalūno",
lightslategrey: "šviesiai pilka skalūno", // same as lightslategray
lightsteelblue: "šviesiai plieninė mėlyna",
lightyellow: "šviesiai geltona",
lime: "žalsva laimo",
limegreen: "žalia laimo",
linen: "linų",
magenta: "fuksino",
maroon: "kaštoninė",
mediumaquamarine: "vidutinė akvamarino",
mediumblue: "vidutiniškai mėlyna",
mediumorchid: "vidutiniškai violetinė orchidėjos",
mediumpurple: "vidutiniškai violetinė",
mediumseagreen: "vidutiniškai žalia jūros",
mediumslateblue: "vidutiniškai mėlyna skalūno",
mediumspringgreen: "vidutiniškai žalia pavasario",
mediumturquoise: "vidutiniška turkio",
mediumvioletred: "vidutiniškai raudonai violetinė",
midnightblue: "mėlyna vidurnakčio",
mintcream: "žalsva mėtinio kremo",
mistyrose: "blyškiai rožinė",
moccasin: "šviesiai smėlinė mokasinų",
navajowhite: "balta navahų",
navy: "labai tamsiai mėlyna laivyno",
oldlace: "blyškiai gelsvai oranžinė",
olive: "alyvuogių",
olivedrab: "pilkšvai alyvuogių",
orange: "oranžinė",
orangered: "raudonai oranžinė",
orchid: "violetinė orchidėjos",
palegoldenrod: "blyški rykštenės",
palegreen: "blyškiai žalia",
paleturquoise: "blyški turkio",
palevioletred: "blyškiai raudonai violetinė",
papayawhip: "šviesiai oranžinė papajos",
peachpuff: "šviesiai oranžinė persiko",
peru: "oranžinė peru",
pink: "rožinė",
plum: "tamsiai violetinė",
powderblue: "blyškiai mėlyna pudros",
purple: "violetinė",
red: "raudona",
rosybrown: "rudai rožinė",
royalblue: "sodriai mėlyna",
saddlebrown: "ruda balno",
salmon: "gelsvai rausva",
sandybrown: "smėlinė ruda",
seagreen: "žalia jūros",
seashell: "blyškiai rausva kriauklių",
sienna: "sienos",
silver: "sidabrinė",
skyblue: "mėlyna dangaus",
slateblue: "mėlyna skalūno",
slategray: "pilka skalūno",
slategrey: "pilka skalūno", // same as slategray
snow: "sniegas",
springgreen: "žalia pavasario",
steelblue: "plieno mėlyna",
tan: "gelsvai ruda",
teal: "žalsvai mėlyna",
thistle: "šviesiai violetinės usnies",
tomato: "pomidorų",
transparent: "permatoma",
turquoise: "turkio",
violet: "violetinė",
wheat: "kviečių",
white: "balta",
whitesmoke: "baltų dūmų",
yellow: "geltona",
yellowgreen: "geltonai žalia"
})
//end v1.x content

);
