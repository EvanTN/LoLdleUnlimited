
const jsConfetti = new JSConfetti();

const characters = [
    {name:"Aatrox", gender: "male", position: "top", species: "darkin", resource: "manaless", range: "melee", region: "shurima, <br> runeterra", year: "2013"},
    {name:"Ahri", gender: "female", position: "middle", species: "vastayan", resource: "mana", range: "ranged", region: "ionia", year: "2011"},
    {name:"Akali", gender: "female", position: "middle,<br> top", species: "human", resource: "energy", range: "melee", region: "ionia", year: "2010"},
    {name:"Akshan", gender: "male", position: "middle,<br> top", species: "human", resource: "mana", range: "ranged", region: "shurima", year: "2021"},
    {name:"Alistar", gender: "male", position: "support", species: "minotaur", resource: "mana", range: "melee", region: "runeterra", year: "2009"},
    {name:"Amumu", gender: "male", position: "jungle,<br> support", species: "yordle,<br> undead", resource: "mana", range: "melee", region: "shurima", year: "2009"},
    {name:"Anivia", gender: "female", position: "middle", species: "god,<br> spirit", resource: "mana", range: "ranged", region: "freljord", year: "2009"},
    {name:"Annie", gender: "female", position: "middle,<br> support", species: "human,<br> magicborn", resource: "mana", range: "ranged", region: "noxus,<br> runeterra", year: "2009"},
    {name:"Aphelios", gender: "male", position: "bottom", species: "human,<br> spiritualist", resource: "mana", range: "ranged", region: "targon", year: "2019"},
    {name:"Ashe", gender: "female", position: "bottom,<br> support", species: "human,<br> iceborn", resource: "mana", range: "ranged", region: "freljord", year: "2009"},
    {name:"Aurelion Sol", gender: "male", position: "middle", species: "celestial,<br> dragon", resource: "mana", range: "ranged", region: "runeterra,<br> targon", year: "2016"},
    {name:"Azir", gender: "male", position: "middle", species: "god-warrior", resource: "mana", range: "ranged", region: "shurima", year: "2014"},
    {name:"Bard", gender: "male", position: "support", species: "celestial", resource: "mana", range: "ranged", region: "runeterra", year: "2015"},
    {name:"Bel'Veth", gender: "female", position: "jungle", species: "void-being", resource: "manaless", range: "melee", region: "void", year: "2022"},
    {name:"Blitzcrank", gender: "other", position: "support", species: "golem", resource: "mana", range: "melee", region: "zaun", year: "2009"},
    {name:"Brand", gender: "male", position: "support", species: "human,<br> magically altered", resource: "mana", range: "ranged", region: "freljord,<br> runeterra", year: "2011"},
    {name:"Braum", gender: "male", position: "support", species: "human,<br> iceborn", resource: "mana", range: "melee", region: "freljord", year: "2014"},
    {name:"Caitlyn", gender: "female", position: "bottom", species: "human", resource: "mana", range: "ranged", region: "piltover", year: "2011"},
    {name:"Camille", gender: "female", position: "top", species: "cyborg,<br> human", resource: "mana", range: "melee", region: "piltover", year: "2016"},
    {name:"Cassiopeia", gender: "female", position: "middle", species: "human,<br> magically altered", resource: "mana", range: "ranged", region: "noxus,<br> shurima", year: "2010"},
    {name:"Cho'Gath", gender: "male", position: "top", species: "void-being", resource: "mana", range: "melee", region: "void", year: "2009"},
    {name:"Corki", gender: "male", position: "middle", species: "yordle", resource: "mana", range: "ranged", region: "bandle city,<br> piltover", year: "2009"},
    {name:"Darius", gender: "male", position: "top", species: "human", resource: "mana", range: "melee", region: "noxus", year: "2012"},
    {name:"Diana", gender: "female", position: "jungle,<br> middle", species: "human,<br> aspect", resource: "mana", range: "melee", region: "targon", year: "2012"},
    {name:"Dr.Mundo", gender: "male", position: "top", species: "chemically altered,<br> human", resource: "health cost", range: "melee", region: "zaun", year: "2009"},
    {name:"Draven", gender: "male", position: "bottom", species: "human", resource: "mana", range: "ranged", region: "noxus", year: "2012"},
    {name:"Ekko", gender: "male", position: "jungle,<br> mid", species: "human", resource: "mana", range: "melee", region: "zaun", year: "2015"},
    {name:"Elise", gender: "female", position: "jungle", species: "human,<br> magically altered", resource: "mana", range: "melee,<br> ranged", region: "noxus,<br> shadow isles", year: "2012"},
    {name:"Evelynn", gender: "female", position: "jungle", species: "demon,<br> spirit", resource: "mana", range: "melee", region: "runeterra", year: "2009"},
    {name:"Ezreal", gender: "male", position: "bottom", species: "human,<br> magicborn", resource: "mana", range: "ranged", region: "piltover", year: "2010"},
    {name:"Fiddlesticks", gender: "other", position: "jungle", species: "demon,<br> spirit", resource: "mana", range: "ranged", region: "runeterra", year: "2009"},
    {name:"Fiora", gender: "female", position: "top", species: "human", resource: "mana", range: "melee", region: "demacia", year: "2012"},
    {name:"Fizz", gender: "male", position: "middle", species: "yordle", resource: "mana", range: "melee", region: "bilgewater", year: "2011"},
    {name:"Miss Fortune", gender: "female", position: "bottom", species: "human", resource: "mana", range: "ranged", region: "bilgewater", year: "2010"},
    {name:"Twisted Fate", gender: "male", position: "middle", species: "human,<br> magicborn", resource: "mana", range: "ranged", region: "bilgewater", year: "2009"},
    {name:"Galio", gender: "male", position: "middle,<br> support", species: "golem", resource: "mana", range: "melee", region: "demacia", year: "2010"},
    {name:"Gankplank", gender: "male", position: "top", species: "human", resource: "mana", range: "melee", region: "bilgewater", year: "2009"},
    {name:"Garen", gender: "male", position: "top", species: "human", resource: "manaless", range: "melee", region: "demacia", year: "2010"},
    {name:"Gnar", gender: "male", position: "top", species: "yordle", resource: "rage", range: "melee,<br> ranged", region: "freljord", year: "2014"},
    {name:"Gragas", gender: "male", position: "jungle,<br> top", species: "human", resource: "mana", range: "melee", region: "freljord", year: "2010"},
    {name:"Graves", gender: "male", position: "jungle", species: "human", resource: "mana", range: "ranged", region: "bilgewater", year: "2011"},
    {name:"Gwen", gender: "female", position: "top", species: "human,<br> magically altered", resource: "mana", range: "melee", region: "camavor,<br> shadow isles", year: "2021"},
    {name:"Renata Glasc", gender: "female", position: "support", species: "chemically altered,<br> human", resource: "mana", range: "ranged", region: "zaun", year: "2022"},
    {name:"Hecarim", gender: "male", position: "jungle", species: "undead", resource: "mana", range: "melee", region: "camavor,<br> shadow isles", year: "2012"},
    {name:"Heimerdinger", gender: "male", position: "middle,<br> support", species: "yordle", resource: "mana", range: "ranged", region: "piltover", year: "2009"},
    {name:"Illaoi", gender: "female", position: "top", species: "human,<br> spiritualist", resource: "mana", range: "melee", region: "bilgewater", year: "2015"},
    {name:"Irelia", gender: "female", position: "top,<br> middle", species: "human,<br> spiritualist", resource: "mana", range: "melee", region: "ionia", year: "2010"},
    {name:"Ivern", gender: "male", position: "jungle", species: "human,<br> magically altered", resource: "mana", range: "ranged", region: "freljord,<br> ionia", year: "2016"},
    {name:"Jarvan IV", gender: "male", position: "jungle", species: "human", resource: "mana", range: "melee", region: "demacia", year: "2011"},
    {name:"Janna", gender: "female", position: "support", species: "god,<br> spirit", resource: "mana", range: "ranged", region: "shurima,<br> zaun", year: "2009"},
    {name:"Jax", gender: "male", position: "jungle,<br> top", species: "unknown", resource: "mana", range: "melee", region: "icathia,<br> runeterra,<br> shurima", year: "2009"},
    {name:"Jayce", gender: "male", position: "middle,<br> top", species: "human", resource: "mana", range: "melee", region: "piltover", year: "2012"},
    {name:"Jhin", gender: "male", position: "bottom", species: "human,<br> spiritualist", resource: "mana", range: "ranged", region: "ionia", year: "2016"},
    {name:"Jinx", gender: "female", position: "bottom", species: "human,<br> chemically altered", resource: "mana", range: "ranged", region: "zaun", year: "2013"},
    {name:"K'Sante", gender: "male", position: "top", species: "human", resource: "mana", range: "melee", region: "shurima", year: "2022"},
    {name:"Kai'Sa", gender: "female", position: "bottom", species: "human,<br> void-being", resource: "mana", range: "ranged", region: "shurima,<br> void", year: "2018"},
    {name:"Kalista", gender: "female", position: "bottom", species: "undead", resource: "mana", range: "ranged", region: "camavor,<br> shadow isles", year: "2014"},
    {name:"Karma", gender: "female", position: "support", species: "human,<br> spiritualist", resource: "mana", range: "ranged", region: "ionia", year: "2011"},
    {name:"Karthus", gender: "male", position: "jungle", species: "undead", resource: "mana", range: "ranged", region: "noxus,<br> shadow isles", year: "2009"},
    {name:"Kassadin", gender: "male", position: "middle", species: "human,<br> void-being", resource: "mana", range: "melee", region: "shurima,<br> void", year: "2009"},
    {name:"Katarina", gender: "female", position: "middle", species: "human", resource: "manaless", range: "melee", region: "noxus", year: "2009"},
    {name:"Kayle", gender: "female", position: "top", species: "human,<br> aspect,<br> magically altered", resource: "mana", range: "melee,<br> ranged", region: "demacia,<br> targon", year: "2009"},
    {name:"Kayn", gender: "male", position: "jungle", species: "human,<br> darkin,<br> magically altered", resource: "mana", range: "melee", region: "shurima,<br> ionia,<br> noxus,<br> runeterra", year: "2017"},
    {name:"Kennen", gender: "male", position: "top", species: "yordle", resource: "energy", range: "ranged", region: "ionia", year: "2010"},
    {name:"Kha'Zix", gender: "male", position: "jungle", species: "void-being", resource: "mana", range: "melee", region: "void", year: "2012"},
    {name:"Kindred", gender: "other", position: "jungle", species: "god,<br> spirit", resource: "mana", range: "ranged", region: "runeterra", year: "2015"},
    {name:"Kled", gender: "male", position: "top", species: "yordle", resource: "courage", range: "melee", region: "noxus", year: "2016"},
    {name:"Kog'Maw", gender: "male", position: "bottom", species: "void-being", resource: "mana", range: "ranged", region: "void", year: "2010"},
    {name:"Tahm Kench", gender: "male", position: "support,<br> top", species: "demon,<br> spirit", resource: "mana", range: "melee", region: "bilgewater,<br> runeterra", year: "2015"},
    {name:"LeBlanc", gender: "female", position: "middle", species: "human,<br> magically altered", resource: "mana", range: "ranged", region: "noxus", year: "2010"},
    {name:"Lee Sin", gender: "male", position: "jungle", species: "human,<br> spiritualist", resource: "energy", range: "melee", region: "ionia", year: "2011"},
    {name:"Leona", gender: "female", position: "support", species: "human,<br> aspect", resource: "mana", range: "melee", region: "targon", year: "2011"},
    {name:"Lillia", gender: "female", position: "jungle", species: "spirit", resource: "mana", range: "melee", region: "ionia", year: "2020"},
    {name:"Lissandra", gender: "female", position: "middle", species: "human,<br> iceborn", resource: "mana", range: "ranged", region: "freljord", year: "2013"},
    {name:"Lucian", gender: "male", position: "bottom", species: "human", resource: "mana", range: "ranged", region: "demacia,<br> shadow isles", year: "2013"},
    {name:"Lulu", gender: "female", position: "support", species: "yordle", resource: "mana", range: "ranged", region: "bandle city", year: "2012"},
    {name:"Lux", gender: "female", position: "middle,<br> support", species: "human,<br> magicborn", resource: "mana", range: "ranged", region: "demacia", year: "2010"},
    {name:"Malphite", gender: "male", position: "top", species: "golem", resource: "mana", range: "melee", region: "shurima,<br> ixtal", year: "2009"},
    {name:"Malzahar", gender: "male", position: "middle", species: "human,<br> void-being", resource: "mana", range: "ranged", region: "shurima,<br> void", year: "2010"},
    {name:"Maokai", gender: "male", position: "jungle,<br> support", species: "spirit", resource: "mana", range: "melee", region: "shadow isles", year: "2011"},
    {name:"Master Yi", gender: "male", position: "jungle", species: "human,<br> spiritualist", resource: "mana", range: "melee", region: "ionia", year: "2009"},
    {name:"Milio", gender: "male", position: "support", species: "human,<br> magicborn", resource: "mana", range: "ranged", region: "ixtal", year: "2023"},
    {name:"Mordekaiser", gender: "male", position: "top", species: "revenant", resource: "shield", range: "melee", region: "noxus", year: "2010"},
    {name:"Morgana", gender: "female", position: "support", species: "human,<br> aspect,<br> magically altered", resource: "mana", range: "ranged", region: "demacia,<br> targon", year: "2009"},
    {name:"Naafiri", gender: "male", position: "middle", species: "darkin,<br> dog", resource: "mana", range: "melee", region: "shurima", year: "2023"},
    {name:"Nami", gender: "female", position: "support", species: "vastayan", resource: "mana", range: "ranged", region: "runeterra", year: "2012"},
    {name:"Nasus", gender: "male", position: "top", species: "god-warrior", resource: "mana", range: "melee", region: "shurima", year: "2009"},
    {name:"Nautilus", gender: "male", position: "support", species: "revenant", resource: "mana", range: "melee", region: "bilgewater", year: "2012"},
    {name:"Neeko", gender: "female", position: "middle,<br> support", species: "vastayan", resource: "mana", range: "ranged", region: "ixtal", year: "2018"},
    {name:"Nidalee", gender: "female", position: "jungle", species: "human,<br> spiritualist", resource: "mana", range: "melee,<br> ranged", region: "ixtal", year: "2009"},
    {name:"Nilah", gender: "female", position: "bottom", species: "human,<br> magically altered", resource: "mana", range: "melee", region: "bilgewater", year: "2022"},
    {name:"Nocturne", gender: "male", position: "jungle", species: "demon,<br> spirit", resource: "mana", range: "melee", region: "runeterra", year: "2011"},
    {name:"Nunu & Willump", gender: "male", position: "jungle", species: "human,<br> yeti", resource: "mana", range: "melee", region: "freljord", year: "2009"},
    {name:"Olaf", gender: "male", position: "jungle,<br> top", species: "human,<br> iceborn", resource: "mana", range: "melee", region: "freljord", year: "2010"},
    {name:"Orianna", gender: "female", position: "middle", species: "golem", resource: "mana", range: "ranged", region: "piltover", year: "2011"},
    {name:"Ornn", gender: "male", position: "top", species: "god,<br> spirit", resource: "mana", range: "melee", region: "freljord", year: "2017"},
    {name:"Pantheon", gender: "male", position: "jungle,<br> middle,<br> support", species: "human,<br> aspect", resource: "mana", range: "melee", region: "targon", year: "2010"},
    {name:"Poppy", gender: "female", position: "jungle,<br> top", species: "yordle", resource: "mana", range: "melee", region: "demacia", year: "2010"},
    {name:"Pyke", gender: "male", position: "support", species: "revenant", resource: "mana", range: "melee", region: "bilgewater", year: "2018"},
    {name:"Qiyana", gender: "female", position: "middle", species: "human,<br> magicborn", resource: "mana", range: "melee", region: "ixtal", year: "2019"},
    {name:"Quinn", gender: "female", position: "top", species: "human", resource: "mana", range: "ranged", region: "demacia", year: "2013"},
    {name:"Rakan", gender: "male", position: "support", species: "vastayan", resource: "mana", range: "melee", region: "ionia", year: "2017"},
    {name:"Rammus", gender: "male", position: "jungle", species: "god-warrior", resource: "mana", range: "melee", region: "shurima", year: "2009"},
    {name:"Rek'Sai", gender: "female", position: "jungle", species: "void-being", resource: "rage", range: "melee", region: "shurima,<br> void", year: "2014"},
    {name:"Rell", gender: "female", position: "support", species: "human,<br> magically altered,<br> magicborn", resource: "mana", range: "melee", region: "noxus", year: "2020"},
    {name:"Renekton", gender: "male", position: "top", species: "god-warrior", resource: "fury", range: "melee", region: "shurima", year: "2011"},
    {name:"Rengar", gender: "male", position: "jungle,<br> top", species: "vastayan", resource: "ferocity", range: "melee", region: "shurima,<br> ixtal", year: "2012"},
    {name:"Riven", gender: "female", position: "top", species: "human", resource: "manaless", range: "melee", region: "ionia,<br> noxus", year: "2011"},
    {name:"Rumble", gender: "male", position: "middle,<br> top", species: "yordle", resource: "head", range: "melee", region: "bandle city", year: "2011"},
    {name:"Ryze", gender: "male", position: "middle,<br> top", species: "human,<br> magically altered", resource: "mana", range: "ranged", region: "runeterra", year: "2009"},
    {name:"Samira", gender: "female", position: "Bottom", species: "human", resource: "mana", range: "ranged", region: "shurima,<br> noxus", year: "2020"},
    {name:"Sejuani", gender: "female", position: "jungle", species: "human,<br> iceborn", resource: "mana", range: "melee", region: "freljord", year: "2012"},
    {name:"Senna", gender: "female", position: "support", species: "human,<br> undead", resource: "mana", range: "ranged", region: "shadow isles", year: "2019"},
    {name:"Seraphine", gender: "female", position: "support", species: "human,<br> magicborn", resource: "mana", range: "ranged", region: "piltover,<br> zaun", year: "2020"},
    {name:"Sett", gender: "male", position: "top", species: "human,<br> vastayan", resource: "grit", range: "melee", region: "ionia", year: "2020"},
    {name:"Shaco", gender: "male", position: "jungle", species: "spirit", resource: "mana", range: "melee", region: "runeterra", year: "2009"},
    {name:"Shen", gender: "male", position: "top", species: "human,<br> spiritualist", resource: "energy", range: "melee", region: "ionia", year: "2010"},
    {name:"Shyvana", gender: "female", position: "jungle", species: "dragon,<br> magically altered", resource: "fury", range: "melee", region: "demacia", year: "2011"},
    {name:"Singed", gender: "male", position: "top", species: "human,<br> chemically altered", resource: "mana", range: "melee", region: "piltover,<br> zaun", year: "2009"},
    {name:"Sion", gender: "male", position: "top", species: "revenant", resource: "mana", range: "melee", region: "noxus", year: "2009"},
    {name:"Sivir", gender: "female", position: "bottom", species: "human", resource: "mana", range: "ranged", region: "shurima", year: "2009"},
    {name:"Sona", gender: "female", position: "support", species: "human,<br> magicborn", resource: "mana", range: "ranged", region: "demacia,<br> ionia", year: "2010"},
    {name:"Skarner", gender: "male", position: "jungle", species: "brackern", resource: "mana", range: "melee", region: "shurima", year: "2011"},
    {name:"Soraka", gender: "female", position: "support", species: "celestial", resource: "mana", range: "ranged", region: "ionia,<br> targon", year: "2009"},
    {name:"Swain", gender: "male", position: "middle,<br> support", species: "human,<br> magically altered", resource: "mana", range: "ranged", region: "noxus", year: "2010"},
    {name:"Sylas", gender: "male", position: "middle", species: "human,<br> magicborn", resource: "mana", range: "melee", region: "demacia,<br> freljord", year: "2019"},
    {name:"Syndra", gender: "female", position: "middle", species: "human,<br> magicborn", resource: "mana", range: "ranged", region: "ionia", year: "2012"},
    {name:"Taliyah", gender: "female", position: "jungle,<br> middle", species: "human,<br> magicborn", resource: "mana", range: "melee", region: "shurima", year: "2016"},
    {name:"Talon", gender: "male", position: "jungle,<br> middle", species: "human", resource: "mana", range: "melee", region: "noxus", year: "2011"},
    {name:"Taric", gender: "male", position: "support", species: "human,<br> aspect", resource: "mana", range: "melee", region: "demacia,<br> targon", year: "2009"},
    {name:"Teemo", gender: "male", position: "top", species: "yordle", resource: "mana", range: "ranged", region: "bandle city", year: "2009"},
    {name:"Thresh", gender: "male", position: "support", species: "undead", resource: "mana", range: "ranged", region: "shadow isles", year: "2013"},
    {name:"Tristana", gender: "female", position: "bottom", species: "yordle", resource: "mana", range: "ranged", region: "bandle city", year: "2009"},
    {name:"Trundle", gender: "male", position: "jungle,<br> top", species: "iceborn,<br> troll", resource: "mana", range: "melee", region: "freljord", year: "2010"},
    {name:"Tryndamere", gender: "male", position: "top", species: "human,<br> magically altered", resource: "fury", range: "melee", region: "freljord", year: "2009"},
    {name:"Twitch", gender: "male", position: "bottom", species: "chemically altered,<br> rat", resource: "mana", range: "ranged", region: "zaun", year: "2009"},
    {name:"Udyr", gender: "male", position: "jungle,<br> top", species: "human,<br> spiritualist", resource: "mana", range: "melee", region: "freljord,<br> ionia", year: "2009"},
    {name:"Urgot", gender: "male", position: "top", species: "human,<br> cyborg,<br> Chemically altered", resource: "mana", range: "ranged", region: "noxus,<br> zaun", year: "2010"},
    {name:"Varus", gender: "male", position: "bottom,<br> middle", species: "human,<br> darkin", resource: "mana", range: "ranged", region: "shurima,<br> runeterra,<br> ionia", year: "2012"},
    {name:"Vayne", gender: "female", position: "bottom,<br> top", species: "human", resource: "mana", range: "ranged", region: "demacia", year: "2011"},
    {name:"Veigar", gender: "male", position: "middle", species: "yordle", resource: "mana", range: "ranged", region: "runeterra,<br> bandle city", year: "2009"},
    {name:"Vel'Koz", gender: "male", position: "middle,<br> support", species: "void-being", resource: "mana", range: "ranged", region: "void", year: "2014"},
    {name:"Vex", gender: "female", position: "middle", species: "yordle", resource: "mana", range: "ranged", region: "bandle city,<br> shadow isles", year: "2021"},
    {name:"Vi", gender: "female", position: "jungle", species: "human", resource: "mana", range: "melee", region: "piltover,<br> zaun", year: "2012"},
    {name:"Viego", gender: "male", position: "jungle", species: "undead", resource: "manaless", range: "melee", region: "camavor,<br> shadow isles", year: "2021"},
    {name:"Viktor", gender: "male", position: "middle", species: "human,<br> cyborg", resource: "mana", range: "ranged", region: "zaun,<br> piltover", year: "2011"},
    {name:"Vladimir", gender: "male", position: "middle", species: "human,<br> magically altered", resource: "bloodthirst", range: "ranged", region: "camavor,<br> noxus,<br> shadow isles", year: "2010"},
    {name:"Volibear", gender: "male", position: "jungle,<br> top", species: "god,<br> spirit", resource: "mana", range: "melee", region: "freljord", year: "2011"},
    {name:"Warwick", gender: "male", position: "jungle,<br> top", species: "human,<br> cyborg,<br> chemically altered", resource: "mana", range: "melee", region: "zaun", year: "2009"},
    {name:"Wukong", gender: "male", position: "jungle,<br> top", species: "vastayan", resource: "mana", range: "melee", region: "ionia", year: "2011"},
    {name:"Xayah", gender: "female", position: "bottom", species: "vastayan", resource: "mana", range: "ranged", region: "ionia", year: "2017"},
    {name:"Xerath", gender: "male", position: "support,<br> middle", species: "god-warrior", resource: "mana", range: "ranged", region: "shurima", year: "2011"},
    {name:"Xin Zhao", gender: "male", position: "jungle", species: "human", resource: "mana", range: "melee", region: "demacia,<br> ionia,<br> noxus", year: "2010"},
    {name:"Yasuo", gender: "male", position: "middle", species: "human,<br> magicborn", resource: "flow", range: "melee", region: "ionia", year: "2013"},
    {name:"Yone", gender: "male", position: "middle,<br> top", species: "human,<br> magically altered", resource: "manaless", range: "melee", region: "ionia", year: "2020"},
    {name:"Yorick", gender: "male", position: "top", species: "human,<br> magically altered", resource: "mana", range: "melee", region: "shadow isles", year: "2011"},
    {name:"Yuumi", gender: "female", position: "support", species: "cat,<br> magically altered", resource: "mana", range: "ranged", region: "bandle city", year: "2019"},
    {name:"Zac", gender: "male", position: "jungle", species: "golem", resource: "health cost", range: "melee", region: "zaun", year: "2013"},
    {name:"Zed", gender: "male", position: "middle", species: "human,<br> magically altered", resource: "energy", range: "melee", region: "ionia", year: "2012"},
    {name:"Zeri", gender: "female", position: "bottom", species: "human,<br> magicborn", resource: "mana", range: "ranged", region: "zaun", year: "2022"},
    {name:"Ziggs", gender: "male", position: "bottom,<br> middle", species: "yordle", resource: "mana", range: "ranged", region: "zaun", year: "2012"},
    {name:"Zilean", gender: "male", position: "support", species: "human,<br> magicborn", resource: "mana", range: "ranged", region: "icathia,<br> runeterra,<br> shurima", year: "2009"},
    {name:"Zoe", gender: "female", position: "middle", species: "aspect,<br> human", resource: "mana", range: "ranged", region: "targon", year: "2017"},
    {name:"Zyra", gender: "female", position: "support", species: "unknown", resource: "mana", range: "ranged", region: "ixtal", year: "2012"}
  ]
  
  
  let currentCharacter = "";
  var count = 0;
  
  
  function getRandomCharacter() {
      const randomIndex = Math.floor(Math.random() * characters.length);
      return characters[randomIndex];
  }
  
  function startGame() {
      currentCharacter = getRandomCharacter();
      //document.getElementById("testing").innerHTML = currentCharacter.name;
      let str = (currentCharacter.name);
      str = str.replace(/\s+/g, '');
      document.getElementById("character-image").src = `Images/Characters/${str}.png`; 
      document.getElementById("result").textContent = "";
      document.getElementById("guess-input").value = "";
  }
  
  
  function checkGuess() {
      count++;
      const guess = document.getElementById("guess-input").value.toLowerCase();
  
      var guessSpot = 0;
    //gets position in array of character guess
      for(var i = 0; i < characters.length; i++){
        if(guess == characters[i].name.toLowerCase()){
          guessSpot = i;
          break;
        }
      }

      if(guessSpot == 0 && guess != "aatrox"){
        document.getElementById("result").textContent = "Invalid Guess, Please Try Again";
        count--;
        document.getElementById("guess-button").addEventListener("click", checkGuess);
      } else if (guess === currentCharacter.name.toLowerCase()) {
          //document.getElementById("result").textContent = "Congratulations! You guessed it!";
          printGuess(guessSpot);
          jsConfetti.addConfetti().then(() => jsConfetti.addConfetti());
      } else {
          //document.getElementById("result").textContent = "Oops! Try again.";
          printGuess(guessSpot);
      }
  }
  
  
  //prints out attributes for character
  function printGuess(guessSpot) {
  
    let str2 = (characters[guessSpot].name);
    str2 = str2.replace(/\s+/g, '');
    document.getElementById("image-cell" + count).src = `Images/Characters/${str2}.png`; 
  
    /*
    for(var i = 0; i<atts.length; i++){
      let id = atts[i] + "-cell" + count;
      let att = atts[i];
      document.getElementById(id).innerHTML = "?";
    } */
    //9/25/23 - tried using for-loop to print the att's of the champions, but won't allow me to use characters[guessSpot].atts[i];
  
    
    
    document.getElementById("gender-cell" + count).innerHTML = characters[guessSpot].gender;
    document.getElementById("position-cell" + count).innerHTML = characters[guessSpot].position;
    document.getElementById("species-cell" + count).innerHTML = characters[guessSpot].species;
    document.getElementById("resource-cell" + count).innerHTML = characters[guessSpot].resource;
    document.getElementById("region-cell" + count).innerHTML = characters[guessSpot].region;
    document.getElementById("range-cell" + count).innerHTML = characters[guessSpot].range;
    //Compares years
    if(characters[guessSpot].year < currentCharacter.year){
    document.getElementById("year-cell" + count).innerHTML = characters[guessSpot].year + "<p>&uarr;</p>";
    }else if(characters[guessSpot].year > currentCharacter.year){
    document.getElementById("year-cell" + count).innerHTML = characters[guessSpot].year + "<p>&darr;</p>";
    }else{
    document.getElementById("year-cell" + count).innerHTML = characters[guessSpot].year;
    }
  
    /*
    if(characters[guessSpot].position){
    document.getElementById("region-cell" + count).innerHTML = characters[guessSpot].region + ",<br>" + characters[guessSpot].region2;
    }else{
        document.getElementById("region-cell" + count).innerHTML = characters[guessSpot].region;
    }
  
  
    */
  
    //yellow-code
    let multiPos = (characters[guessSpot].position).split(",<br> "); 
    let multiSpec = (characters[guessSpot].species).split(",<br> ");
    let multiReg = (characters[guessSpot].region).split(",<br> ");
    let multiRange = (characters[guessSpot].range).split(",<br> ");
  
  
  
  // gender coloring
    if(characters[guessSpot].gender == currentCharacter.gender){
      document.getElementById("gender-cell" + count).style.backgroundColor =  "green";
    } 
    else{
      document.getElementById("gender-cell" + count).style.backgroundColor =  "red";
    }
    
  // range coloring
  if(characters[guessSpot].range == currentCharacter.range){
    document.getElementById("range-cell" + count).style.backgroundColor =  "green";
  } else{
     document.getElementById("range-cell" + count).style.backgroundColor =  "red";
  for(var i = 0; i<multiRange.length; i++){
    if((currentCharacter.range).includes(multiRange[i])){
      document.getElementById("range-cell" + count).style.backgroundColor =  "yellow";
    }
   }
  }
  
  
  // position coloring
  if(characters[guessSpot].position == currentCharacter.position){
    document.getElementById("position-cell" + count).style.backgroundColor =  "green";
  } else{
     document.getElementById("position-cell" + count).style.backgroundColor =  "red";
  for(var i = 0; i<multiPos.length; i++){
    if((currentCharacter.position).includes(multiPos[i])){
      document.getElementById("position-cell" + count).style.backgroundColor =  "yellow";
    }
   }
  }
  
  // species coloring
  if(characters[guessSpot].species == currentCharacter.species){
    document.getElementById("species-cell" + count).style.backgroundColor =  "green";
  } else{
     document.getElementById("species-cell" + count).style.backgroundColor =  "red";
  for(var i = 0; i<multiSpec.length; i++){
    if((currentCharacter.species).includes(multiSpec[i])){
      document.getElementById("species-cell" + count).style.backgroundColor =  "yellow";
    }
   }
  }
  
    if(characters[guessSpot].resource == currentCharacter.resource){
      document.getElementById("resource-cell" + count).style.backgroundColor =  "green";
    } 
    else{
      document.getElementById("resource-cell" + count).style.backgroundColor =  "red";
    }
  
  // region coloring
  if(characters[guessSpot].region == currentCharacter.region){
    document.getElementById("region-cell" + count).style.backgroundColor =  "green";
  } else{
     document.getElementById("region-cell" + count).style.backgroundColor =  "red";
  for(var i = 0; i<multiReg.length; i++){
    if((currentCharacter.region).includes(multiReg[i])){
      document.getElementById("region-cell" + count).style.backgroundColor =  "yellow";
    }
   }
  }
  
    if(characters[guessSpot].year == currentCharacter.year){
      document.getElementById("year-cell" + count).style.backgroundColor =  "green";
    } 
    else{
      document.getElementById("year-cell" + count).style.backgroundColor =  "red";
    }
      
    
    //document.getElementById("row" + count).innerHTML = "<tr><td>" + characters[guessSpot].name + "</td><td>" + characters[guessSpot].gender + "</td><td>" + characters[guessSpot].position + "</td><td>" + characters[guessSpot].range + "</td>";
    
  }


  //print all images for cheat sheet
  /*
  document.getElementById('cheat').addEventListener("click", () =>{
  for(let i = 0; i<characters.length; i++){
  let str3 = (characters[i]).name;
  str3 = str3.replace(/\s+/g, '');
  document.getElementById("cheatPrint").src = `Images/Characters/${str3}.png`; 
  }
  });
  */
  document.getElementById("guess-button").addEventListener("click", checkGuess);
  document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      checkGuess();
    }
});
  startGame();
  
  




  //____________________allows for rows to be hidden_____________________
  
  /*
  window.addEventListener("load", function () {
    const table = document.querySelector("table");
    const rows = table.getElementsByTagName("tr");
  
    for (const row of rows) {
      const cells = row.getElementsByTagName("td");
      let isEmpty = true;
  
      for (const cell of cells) {
        if (cell.textContent.trim() !== "") {
          isEmpty = false;
          break;
        }
      }
  
      if (isEmpty) {
        row.classList.add("empty-row");
      }
    }
  });
  */
  
  
  
  