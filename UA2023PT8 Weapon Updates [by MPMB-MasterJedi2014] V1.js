/*	-INFORMATION-
	Subject:	Weapon Mastery Functions
	Effect:		This script adds code that implements the Weapon Mastery property from the 2023 Unearthed Arcana "Player's Handbook Playtest 8" article.
				This file has been made by MasterJedi2014, but consists almost entirely of code made by MorePurpleMoreBetter. The only code by me at this point is the code that alters the Net.
	Code by:	MorePurpleMoreBetter
	Date:		2024-05-13 (sheet v13.1.0)
*/

var iFileName = "UA2023PT8 Weapon Updates [by MPMB-MasterJedi2014] V1.js";
RequiredSheetVersion("13.1.0");

SourceList["UA23PT8"] = {
	name : "Unearthed Arcana 2023: Player's Handbook Playtest 8",
	abbreviation : "UA23PT8",
	date : "2023/11/23",
	url : "https://media.dndbeyond.com/compendium-images/ua/ph-playtest8/gHvtmY50loGLgQUb/UA2023-PH-Playtest8.pdf",
};

// Add "weaponMasteryAtkAdd" & "masterOfArmamentsAtkAdd" functions for Weapon Masteries, made by user @Joost/MorePurpleMoreBetter
masteryFunctions = {
  weaponMasteryAtkAdd : [
    function (fields, v, addIfPactWeapon) {
      if ( /mastery/i.test(v.WeaponText) || (addIfPactWeapon && v.pactWeapon) ) return; // less indentation is easier to read
      // Sum all the WeaponsList object names that get a certain mastery
      var oMasteries = {
        'Slow' : ['club', 'javelin', 'light crossbow', 'sling', 'whip', 'longbow', 'musket', 'rifle hunting', 'rifle automatic', 'shotgun', 'antimatter rifle', 'laser rifle'],
        'Nick' : ['dagger', 'light hammer', 'sickle', 'scimitar', ''],
        'Push' : ['greatclub', 'pike', 'warhammer', 'heavy crossbow'],
        'Vex' : ['handaxe', 'dart', 'shortbow', 'rapier', 'shortsword', 'blowgun', 'hand crossbow', 'pistol', 'pistol automatic', 'revolver', 'laser pistol'],
        'Sap' : ['mace', 'spear', 'flail', 'lonsword', 'morningstar', 'war pick', ''],
        'Topple' : ['quarterstaff', 'battleaxe', 'lance', 'maul', 'trident'],
        'Graze' : ['glaive', 'greatsword'],
        'Cleave' : ['greataxe', 'halberd']
      }
      // Loop over these and add the mastery only if either v.WeaponName or v.baseWeaponName match exactly
      loopMasteries:
      for (var sMastery in oMasteries) {
        // Loop over all the weapons in the mastery's array to see if any match
        var aWeapons = oMasteries[sMastery];
        loopWeapons:
        for (var i = 0; i < aWeapons.length; i++) {
          if ( aWeapons[i] === v.WeaponName || aWeapons[i] === v.baseWeaponName ) {
            fields.Description += (fields.Description ? ', ' : '') + 'Mstry: ' + sMastery;
            v.mastery = sMastery; // save to later reference
            break loopMasteries;
          }
        }
      }
    },
    'If I include the word "Mastery" in the name of a weapon, the Mastery property for that weapon will be appended to the description, if any.',
    1 // make this be process first, as it is a base change to the item's description that we want all other descriptions to come after (hence the use of a comma instead of a semicolon when adding the description above)
  ],
  masterOfArmamentsAtkAdd : [
    function (fields, v) {
      if ( !/mastery/i.test(v.WeaponTextName) || v.masterOfArmaments ) return; // less indentation is easier to read
      // Make an array of all the optional masteries the weapon is eligible for (thus, always include Slow)
      var aOptionalMasteries = ['Slow'];
      if ( v.isMeleeWeapon && /heavy/i.test(fields.Description) ) {
        aOptionalMasteries.push('Cleave', 'Graze');
      }
      if ( /light/i.test(fields.Description) ) {
        aOptionalMasteries.push('Nick');
      }
      if ( /heavy|two-handed|versatile/i.test(fields.Description) ) {
        aOptionalMasteries.push('Push');
      }
      if ( /versatile/i.test(fields.Description) || !v.theWea.description ) {
        aOptionalMasteries.push('Sap');
      }
      if ( /heavy|reach|versatile/i.test(fields.Description) ) {
        aOptionalMasteries.push('Topple');
      }
      if ( /ammunition|finesse|light/i.test(fields.Description) ) {
        aOptionalMasteries.push('Vex');
      }
      // Add the default mastery of the weapon, if not already eligible
      if ( v.mastery && aOptionalMasteries.indexOf(v.mastery) === -1 ) {
        aOptionalMasteries.push(v.mastery);
      }
      // Sort this new array
      aOptionalMasteries.sort();
      var sMasteries = 'Mstry: ' + aOptionalMasteries.join('/');
      // Add to the description (replace current "Mstry: X" if it exists)
      var rxMstry = /Mstry: (Slow|Nick|Push|Vex|Sap|Topple|Graze|Cleave)/i;
      if ( rxMstry.test(fields.Description) ) {
        fields.Description = fields.Description.replace(rxMstry, sMasteries);
      } else {
        // no "Mstry: X" string so just add it to the end
        fields.Description += (fields.Description ? '; ' : '') + sMasteries;
      }
      // Save that this function was run on this weapon so it isn't accidentally done twice
      v.masterOfArmaments = true;
    },
    'Weapons with the word "Mastery" will have any extra Mastery properties that they qualify for appended to their descriptions.'
  ]
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