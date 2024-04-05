/*	-INFORMATION-
	Subject:	Weapons
	Effect:		This script adds the UA versions of the weapons from the 2023 Unearthed Arcana "Player's Handbook Playtest 7" article.
				This file is almost entirely the work of MPMB; MasterJedi2014 has simply made alterations.
	Code by:	MorePurpleMoreBetter's code, altered by MasterJedi2014
	Date:		2024-04-05 (sheet v13.1.0)
*/

var iFileName = "UA2023PT8 Weapon Updates V1.js";
RequiredSheetVersion("13.1.0");

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2024/04/05",
};

SourceList["UA23PT8"] = {
	name : "Unearthed Arcana 2023: Player's Handbook Playtest 8",
	abbreviation : "UA23PT8",
	date : "2023/11/23",
	url : "https://media.dndbeyond.com/compendium-images/ua/ph-playtest8/gHvtmY50loGLgQUb/UA2023-PH-Playtest8.pdf",
};

// Alter Melee Simple Weapons
WeaponsList["club"] = {
	regExpSearch : /^(?!.*(great|heavy|big))(?=.*\b(club|bian|tonfa)s?\b).*$/i,
	name : "Club",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	weight : 2,
	description : "Light; Mstry: Slow",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["dagger"] = {
	regExpSearch : /dagger|bishou|\btamos?\b|kozuka|\btantos?\b/i,
	name : "Dagger",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "piercing"],
	range : "Melee, 20/60 ft",
	weight : 1,
	description : "Finesse, light, thrown; Mstry: Nick",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["greatclub"] = {
	regExpSearch : /^(?=.*(great|heavy|big|weida))(?=.*(club|bian|tonfa)s?\b).*$|tetsubo/i,
	name : "Greatclub",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	weight : 10,
	description : "Two-handed; Mstry: Push",
	abilitytodamage : true
};
WeaponsList["handaxe"] = {
	regExpSearch : /^(?=.*(light|hand|short|small|throw))(?=.*(axe|\bfu)s?\b).*$|\bonos?\b/i,
	name : "Handaxe",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "slashing"],
	range : "Melee, 20/60 ft",
	weight : 2,
	description : "Light, thrown; Mstry: Vex",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["javelin"] = {
	regExpSearch : /javelin|\bmaus?\b|uchi-ne/i,
	name : "Javelin",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "piercing"],
	range : "Melee, 30/120 ft",
	weight : 2,
	description : "Thrown; Mstry: Slow",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["light hammer"] = {
	regExpSearch : /^(?=.*(light|hand|short|small|throw))(?=.*hammer).*$/i,
	name : "Light hammer",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "bludgeoning"],
	range : "Melee, 20/60 ft",
	weight : 2,
	description : "Light, thrown; Mstry: Nick",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["mace"] = {
	regExpSearch : /maces?\b|\bchuis?\b|kanabo/i,
	name : "Mace",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	weight : 4,
	description : "Mstry: Sap",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["quarterstaff"] = {
	regExpSearch : /quarterstaff|\bstaffs?\b|\bbos?\b|^gun(.?(\+|-)\d+)?$/i,
	name : "Quarterstaff",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	weight : 4,
	description : "Versatile (1d8); Mstry: Topple",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["sickle"] = {
	regExpSearch : /sickle|\bkamas?\b/i,
	name : "Sickle",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "slashing"],
	range : "Melee",
	weight : 2,
	description : "Light; Mstry: Nick",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["spear"] = {
	regExpSearch : /^(?!.*agonizing)(?!.*eldritch)(?=.*(spear|qiang|\byaris?\b)).*$/i,
	name : "Spear",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 6, "piercing"],
	range : "Melee, 20/60 ft",
	weight : 3,
	description : "Thrown, versatile (1d8); Mstry: Sap",
	monkweapon : true,
	abilitytodamage : true
};

// Alter Ranged Simple Weapons
WeaponsList["light crossbow"] = {
	regExpSearch : /^(((?=.*light)(?=.*crossbow))|((?!.*(hand|short|great|heavy|bolt))(?=.*\bcrossbows?\b))).*$/i,
	name : "Light crossbow",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "ranged",
	ability : 2,
	type : "Simple",
	damage : [1, 8, "piercing"],
	range : "80/320 ft",
	weight : 5,
	description : "Ammunition, loading, two-handed; Mstry: Slow",
	abilitytodamage : true,
	ammo : "bolt"
};
WeaponsList["dart"] = {
	regExpSearch : /dart|shuriken/i,
	name : "Dart",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "ranged",
	ability : 2,
	type : "Simple",
	damage : [1, 4, "piercing"],
	range : "20/60 ft",
	weight : 0.25,
	description : "Finesse, thrown; Mstry: Vex",
	abilitytodamage : true
};
WeaponsList["shortbow"] = {
	regExpSearch : /^(?!.*crossbow)(((?=.*short)(?=.*bow))|((?!.*(moon|long))(?=.*\bbows?\b))).*$|hankyus?/i,
	name : "Shortbow",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "ranged",
	ability : 2,
	type : "Simple",
	damage : [1, 6, "piercing"],
	range : "80/320 ft",
	weight : 2,
	description : "Ammunition, two-handed; Mstry: Vex",
	abilitytodamage : true,
	ammo : "arrow"
};
WeaponsList["sling"] = {
	regExpSearch : /sling/i,
	name : "Sling",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 21]],
	list : "ranged",
	ability : 2,
	type : "Simple",
	damage : [1, 4, "bludgeoning"],
	range : "30/120 ft",
	weight : 0.001,
	description : "Ammunition; Mstry: Slow",
	abilitytodamage : true,
	ammo : "bullet"
};

// Alter Melee Martial Weapons
WeaponsList["battleaxe"] = {
	regExpSearch : /^(((?=.*battle)(?=.*(axe|\bono|\bfu)s?\b))|((?!.*(light|hand|short|small|great|heavy|throw))(?=.*\b(axe|fu|masakari)s?\b))).*$/i,
	name : "Battleaxe",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "slashing"],
	range : "Melee",
	weight : 4,
	description : "Versatile (1d10); Mstry: Topple",
	abilitytodamage : true
};
WeaponsList["flail"] = {
	regExpSearch : /flail|nunchaku/i,
	name : "Flail",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	weight : 2,
	description : "Mstry: Sap",
	abilitytodamage : true
};
WeaponsList["glaive"] = {
	regExpSearch : /glaive|guandao|bisento|naginata/i,
	name : "Glaive",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Heavy, reach, two-handed; Mstry: Graze",
	abilitytodamage : true
};
WeaponsList["greataxe"] = {
	regExpSearch : /^(?=.*(great|heavy|weida))(?=.*(axe|\bono|\bfu|masakari)s?\b).*$/i,
	name : "Greataxe",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 12, "slashing"],
	range : "Melee",
	weight : 7,
	description : "Heavy, two-handed; Mstry: Cleave",
	abilitytodamage : true
};
WeaponsList["greatsword"] = {
	regExpSearch : /^(?=.*(great|heavy))(?=.*sword).*$|changdao|nodachi/i,
	name : "Greatsword",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 6, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Heavy, two-handed; Mstry: Graze",
	abilitytodamage : true
};
WeaponsList["halberd"] = {
	regExpSearch : /halberd|\bjis?\b|kamayari/i,
	name : "Halberd",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Heavy, reach, two-handed; Mstry: Cleave",
	abilitytodamage : true
};
WeaponsList["lance"] = {
	regExpSearch : /lance|umayari/i,
	name : "Lance",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "piercing"],
	range : "Melee",
	weight : 6,
	description : "Reach, disadvantage to attack within 5 ft, two-handed when not mounted; Mstry: Topple",
	tooltip : "Special: I have disadvantage when I use a lance to attack a target within 5 feet. Also, a lance requires two hands to wield when I'm not mounted.",
	special : true,
	abilitytodamage : true
};
WeaponsList["longsword"] = {
	regExpSearch : /katana|\bjians?\b|^(((?=.*long)(?=.*sword))|((?!.*(burst|light|hand|short|small|great|heavy))(?=.*\bswords?\b))).*$/i,
	name : "Longsword",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Versatile (1d10); Mstry: Sap",
	abilitytodamage : true
};
WeaponsList["maul"] = {
	regExpSearch : /^((?=.*maul)|((?=.*(great|heavy))(?=.*hammer))).*$/i,
	name : "Maul",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 6, "bludgeoning"],
	range : "Melee",
	weight : 10,
	description : "Heavy, two-handed; Mstry: Topple",
	abilitytodamage : true
};
WeaponsList["morningstar"] = {
	regExpSearch : /morningstar/i,
	name : "Morningstar",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "piercing"],
	range : "Melee",
	weight : 4,
	description : "Mstry: Sap",
	abilitytodamage : true
};
WeaponsList["pike"] = {
	regExpSearch : /^(?!.*armou?r)(?!.*\bspike)(?=.*(pike|\bmaos?\b|nagaeyari)).*$/i,
	name : "Pike",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "piercing"],
	range : "Melee",
	weight : 18,
	description : "Heavy, reach, two-handed; Mstry: Push",
	abilitytodamage : true
};
WeaponsList["rapier"] = {
	regExpSearch : /rapier/i,
	name : "Rapier",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "piercing"],
	range : "Melee",
	weight : 2,
	description : "Finesse; Mstry: Vex",
	abilitytodamage : true
};
WeaponsList["scimitar"] = {
	regExpSearch : /scimitar|liuyedao|wakizashi/i,
	name : "Scimitar",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, light; Mstry: Nick",
	abilitytodamage : true
};
WeaponsList["shortsword"] = {
	regExpSearch : /^(?=.*short)(?=.*sword).*$|shuangdao/i,
	name : "Shortsword",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "piercing"],
	range : "Melee",
	weight : 2,
	description : "Finesse, light; Mstry: Vex",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["trident"] = {
	regExpSearch : /trident|\bchas?\b|magariyari/i,
	name : "Trident",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "piercing"],
	range : "Melee, 20/60 ft",
	weight : 4,
	description : "Thrown, versatile (1d10); Mstry: Topple",
	abilitytodamage : true
};
WeaponsList["war pick"] = {
	regExpSearch : /^(((?=.*pick)(?=.*war))|((?!.*(heavy|great|light))(?=.*\bpicks?\b))).*$|\bkuwas?\b/i,
	name : "War pick",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "piercing"],
	range : "Melee",
	weight : 2,
	description : "Versatile (1d10); Mstry: Sap",
	abilitytodamage : true
};
WeaponsList["warhammer"] = {
	regExpSearch : /^(((?=.*hammer)(?=.*war))|((?!.*(light|hand|short|small|great|heavy|throw|maul))(?=.*\bhammers?\b))).*$/i,
	name : "Warhammer",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	weight : 2,
	description : "Versatile (1d10); Mstry: Push",
	abilitytodamage : true
};
WeaponsList["whip"] = {
	regExpSearch : /^(?!.*thorn)(?=.*whip).*$/i,
	name : "Whip",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, reach; Mstry: Slow",
	abilitytodamage : true
};

// Alter Ranged Martial Weapons
WeaponsList["blowgun"] = {
	regExpSearch : /blowgun/i,
	name : "Blowgun",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, "", "piercing"],
	range : "25/100 ft",
	weight : 1,
	description : "Ammunition, loading; Mstry: Vex",
	abilitytodamage : true,
	ammo : "needle"
};
WeaponsList["hand crossbow"] = {
	regExpSearch : /^(?=.*hand)(?=.*crossbow).*$/i,
	name : "Hand crossbow",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 6, "piercing"],
	range : "30/120 ft",
	weight : 3,
	description : "Ammunition, light, loading; Mstry: Vex",
	abilitytodamage : true,
	ammo : "bolt"
};
WeaponsList["heavy crossbow"] = {
	regExpSearch : /^(?=.*(great|heavy))(?=.*crossbow).*$/i,
	name : "Heavy crossbow",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 10, "piercing"],
	range : "100/400 ft",
	weight : 18,
	description : "Ammunition, heavy, loading, two-handed; Mstry: Push",
	abilitytodamage : true,
	ammo : "bolt"
};
WeaponsList["longbow"] = {
	regExpSearch : /^(?!.*crossbow)(?=.*long)(?=.*bow).*$|daikyu/i,
	name : "Longbow",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 22]],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 8, "piercing"],
	range : "150/600 ft",
	weight : 2,
	description : "Ammunition, heavy, two-handed; Mstry: Slow",
	abilitytodamage : true,
	ammo : "arrow"
};

// Alter Ranged Martial Firearms
WeaponsList["pistol"] = {
	regExpSearch : /^(?=.*pistol)(?!.*automatic).*$/i,
	name : "Pistol",
	source : [["D", 268], ["UA23PT8", 22]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [1, 10, "piercing"],
	range : "30/90 ft",
	weight : 3,
	description : "Ammunition, loading; Mstry: Vex",
	abilitytodamage : true,
	ammo : "renaissance bullet",
};
WeaponsList["musket"] = {
	regExpSearch : /musket/i,
	name : "Musket",
	source : [["D", 268], ["UA23PT8", 22]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [1, 12, "piercing"],
	range : "40/120 ft",
	weight : 10,
	description : "Ammunition, loading, two-handed; Mstry: Slow",
	abilitytodamage : true,
	ammo : "renaissance bullet",
};
/*	Script author is making educated guesses about what Mastery Property each of the below firearms will be given.
	The author is of the opinion that the Hunting Rifle, Shotgun, and Antimatter Rifle should have a modified version of the Cleave Property,
	but the Cleave Property can only be applied to a Melee Weapon according to UA23PT8, so I have not given that property to those weapons.
*/
WeaponsList["pistol automatic"] = {
	regExpSearch : /^(?!.*rifle)(?=.*pistol)(?=.*automatic).*$/i,
	name : "Pistol, automatic",
	source : [["D", 268], ["UA23PT8", 22]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 6, "piercing"],
	range : "50/150 ft",
	weight : 3,
	description : "Ammunition, reload (15 shots); Mstry: Vex",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true
};
WeaponsList["revolver"] = {
	regExpSearch : /revolver/i,
	name : "Revolver",
	source : [["D", 268], ["UA23PT8", 22]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 8, "piercing"],
	range : "40/120 ft",
	weight : 3,
	description : "Ammunition, reload (6 shots); Mstry: Vex",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true
};
WeaponsList["rifle hunting"] = {
	regExpSearch : /^(?!=laser|antimatter)(?=.*hunting)(?=.*rifle).*$/i,
	name : "Hunting Rifle",
	source : [["D", 268], ["UA23PT8", 22]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 10, "piercing"],
	range : "80/240 ft",
	weight : 8,
	description : "Ammunition, reload (5 shots), two-handed; Mstry: Slow",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true
};
WeaponsList["rifle automatic"] = {
	regExpSearch : /^(?!=.*laser|antimatter)(?=.*automatic)(?=.*rifle).*$/i,
	name : "Automatic Rifle",
	source : [["D", 268], ["UA23PT8", 22]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 8, "piercing"],
	range : "80/240 ft",
	weight : 8,
	description : "Ammunition, burst fire, reload (30 shots), two-handed; Mstry: Slow",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true
};
WeaponsList["shotgun"] = {
	regExpSearch : /shotgun/i,
	name : "Shotgun",
	source : [["D", 268], ["UA23PT8", 22]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 8, "piercing"],
	range : "30/90 ft",
	weight : 7,
	description : "Ammunition, reload (2 shots), two-handed; Mstry: Slow",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true
};
WeaponsList["laser pistol"] = {
	regExpSearch : /^(?=.*laser)(?=.*pistol).*$/i,
	name : "Laser Pistol",
	source : [["D", 268], ["UA23PT8", 22]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [3, 6, "radiant"],
	range : "40/120 ft",
	weight : 2,
	description : "Ammunition, reload (50 shots), two-handed; Mstry: Vex",
	abilitytodamage : true,
	ammo : "energy cell",
	defaultExcluded : true
};
WeaponsList["antimatter rifle"] = {
	regExpSearch : /^(?!.*laser)(?=.*antimatter)(?=.*rifle).*$/i,
	name : "Antimatter Rifle",
	source : [["D", 268], ["UA23PT8", 22]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [6, 8, "necrotic"],
	range : "120/360 ft",
	weight : 10,
	description : "Ammunition, reload (2 shots), two-handed; Mstry: Slow",
	abilitytodamage : true,
	ammo : "energy cell",
	defaultExcluded : true
};
WeaponsList["laser rifle"] = {
	regExpSearch : /^(?!.*antimatter)(?=.*laser)(?=.*rifle).*$/i,
	name : "Laser Rifle",
	source : [["D", 268], ["UA23PT8", 22]],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [3, 8, "radiant"],
	range : "100/300 ft",
	weight : 7,
	description : "Ammunition, reload (30 shots), two-handed; Mstry: Slow",
	abilitytodamage : true,
	ammo : "energy cell",
	defaultExcluded : true
};

// Alter Adventuring Gear: Net
WeaponsList["net"] = {
	regExpSearch : /\bnet(ting)?s?\b/i,
	name : "Net",
	source : [["SRD", 66], ["P", 149], ["UA23PT8", 24]],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : ["\u2015", "", "Restrained"],
	range : "15 ft",
	weight : 3,
	description : "Thrown, only 1 attack, up to Large creature hit is Restrained",
	tooltip : "Special: When I take the Attack action on your turn, I can replace one of my attacks with a throw of the net at a creature within 15 feet of myself. The target must make a Dexterity saving throw against a DC equal to 8 + my Proficiency Bonus + my Dexterity modifier. The target succeeds automatically if it’s Huge or larger. On a failed save, the target has the Restrained condition until it escapes the net. To escape, the target must use its action to make a DC 10 Strength (Athletics) check, escaping on a success. A creature within 5 feet of the target can use its action to attempt the same thing. Destroying the net (AC 10; 5 HP; immunity to Bludgeoning, Poison, and Psychic damage) also frees the target, ending the effect.",
	special : true,
	abilitytodamage : false
};