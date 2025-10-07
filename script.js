document.addEventListener('DOMContentLoaded', () => {
    const SKILL_DATA = {
        Attack: { icon: 'https://oldschool.runescape.wiki/images/Attack_icon.png' },
        Strength: { icon: 'https://oldschool.runescape.wiki/images/Strength_icon.png' },
        Defence: { icon: 'https://oldschool.runescape.wiki/images/Defence_icon.png' },
        Ranged: { icon: 'https://oldschool.runescape.wiki/images/Ranged_icon.png' },
        Prayer: { icon: 'https://oldschool.runescape.wiki/images/Prayer_icon.png' },
        Magic: { icon: 'https://oldschool.runescape.wiki/images/Magic_icon.png' },
        Runecraft: { icon: 'https://oldschool.runescape.wiki/images/Runecraft_icon.png' },
        Construction: { icon: 'https://oldschool.runescape.wiki/images/Construction_icon.png' },
        Hitpoints: { icon: 'https://oldschool.runescape.wiki/images/Hitpoints_icon.png' },
        Agility: { icon: 'https://oldschool.runescape.wiki/images/Agility_icon.png' },
        Herblore: { icon: 'https://oldschool.runescape.wiki/images/Herblore_icon.png' },
        Thieving: { icon: 'https://oldschool.runescape.wiki/images/Thieving_icon.png' },
        Crafting: { icon: 'https://oldschool.runescape.wiki/images/Crafting_icon.png' },
        Fletching: { icon: 'https://oldschool.runescape.wiki/images/Fletching_icon.png' }, 
        Slayer: { icon: 'https://oldschool.runescape.wiki/images/Slayer_icon.png' },
        Hunter: { icon: 'https://oldschool.runescape.wiki/images/Hunter_icon.png' },
        Mining: { icon: 'https://oldschool.runescape.wiki/images/Mining_icon.png' },
        Smithing: { icon: 'https://oldschool.runescape.wiki/images/Smithing_icon.png' },
        Fishing: { icon: 'https://oldschool.runescape.wiki/images/Fishing_icon.png' },
        Cooking: { icon: 'https://oldschool.runescape.wiki/images/Cooking_icon.png' },
        Firemaking: { icon: 'https://oldschool.runescape.wiki/images/Firemaking_icon.png' },
        Woodcutting: { icon: 'https://oldschool.runescape.wiki/images/Woodcutting_icon.png' },
        Farming: { icon: 'https://oldschool.runescape.wiki/images/Farming_icon.png' },
    };

    let PLAYER_STATE = {
        pp: 5, 
        skills: Object.keys(SKILL_DATA).reduce((acc, skill) => {
            acc[skill] = { level: 1, unlocked: false };
            return acc;
        }, {}),
        quests: [
            { name: "Cook's Assistant", id: 'quest_cooks_assistant', status: 'not_started' }, 
            { name: 'Dragon Slayer', id: 'quest_dragon_slayer', status: 'not_started' },
            { name: 'The Restless Ghost', id: 'quest_restless_ghost', status: 'not_started' },
            { name: 'Rune Mysteries', id: 'quest_rune_mysteries', status: 'not_started' },
            { name: 'Sheep Shearer', id: 'quest_sheep_shearer', status: 'not_started' },
            { name: 'Goblin Diplomacy', id: 'quest_goblin_diplomacy', status: 'not_started' }, 
            { name: 'Doric\'s Quest', id: 'quest_dorics_quest', status: 'not_started' }, 
            { name: 'Ernest the Chicken', id: 'quest_ernest_the_chicken', status: 'not_started' },
            { name: 'Druidic Ritual', id: 'quest_druidic_ritual', status: 'not_started' }, 
            { name: 'Imp Catcher', id: 'quest_imp_catcher', status: 'not_started' }, 
            { name: 'The Knight\'s Sword', id: 'quest_knights_sword', status: 'not_started' }, 
            { name: "Daddy's Home", id: 'quest_daddys_home', status: 'not_started' },
        ]
    };
    PLAYER_STATE.skills.Attack.unlocked = true;
    PLAYER_STATE.skills.Strength.unlocked = true;
    PLAYER_STATE.skills.Defence.unlocked = true;
    PLAYER_STATE.skills.Hitpoints.unlocked = true;
    PLAYER_STATE.skills.Hitpoints.level = 10;

const TREE_DATA = {
    genesis: {
        type: "major",
        name: "Genesis",
        desc: "The origin point of your journey.",
        cost: 0,
        status: "unlocked",
        deps: [],
        pos: {
            x: "50%",
            y: "50%"
        },
        icon: "https://oldschool.runescape.wiki/images/Achievement_Diaries_icon.png"
    },
    path_might: {
        type: "major",
        name: "Path of Might",
        desc: "Unlock Melee skills and related gathering/processing.",
        cost: 0,
        status: "unlocked",
        deps: [
            "genesis"
        ],
        pos: {
            x: "30%",
            y: "30%"
        },
        icon: "https://oldschool.runescape.wiki/images/Combat_icon.png"
    },
    path_dexterity: {
        type: "major",
        name: "Path of Dexterity",
        desc: "Unlock Ranged skills and related utility/artisan skills.",
        cost: 0,
        status: "unlocked",
        deps: [
            "genesis"
        ],
        pos: {
            x: "50%",
            y: "80%"
        },
        icon: "https://oldschool.runescape.wiki/images/Agility_icon.png"
    },
    path_wisdom: {
        type: "major",
        name: "Path of Wisdom",
        desc: "Unlock Magic, Prayer, and support skills.",
        cost: 0,
        status: "unlocked",
        deps: [
            "genesis"
        ],
        pos: {
            x: "70%",
            y: "30%"
        },
        icon: "https://oldschool.runescape.wiki/images/Holy_symbol.png"
    },
    attack: {
        type: "major",
        name: "Attack",
        desc: "Unlock the Attack skill.",
        cost: 2,
        status: "locked",
        deps: [
            "path_might"
        ],
        pos: {
            x: "20%",
            y: "35%"
        },
        icon: "https://oldschool.runescape.wiki/images/Attack_icon.png"
    },
    strength: {
        type: "major",
        name: "Strength",
        desc: "Unlock the Strength skill.",
        cost: 2,
        status: "locked",
        deps: [
            "path_might"
        ],
        pos: {
            x: "35%",
            y: "20%"
        },
        icon: "https://oldschool.runescape.wiki/images/Strength_icon.png"
    },
    defence: {
        type: "major",
        name: "Defence",
        desc: "Unlock the Defence skill.",
        cost: 2,
        status: "locked",
        deps: [
            "attack",
            "strength"
        ],
        pos: {
            x: "25%",
            y: "15%"
        },
        icon: "https://oldschool.runescape.wiki/images/Defence_icon.png"
    },
    bronze_armor: {
        type: "minor",
        name: "Bronze Armor",
        desc: "Equip Bronze melee gear.",
        cost: 1,
        status: "locked",
        deps: [
            "defence"
        ],
        pos: {
            x: "20%",
            y: "5%"
        },
        icon: "https://oldschool.runescape.wiki/images/Bronze_platebody.png"
    },
    iron_armor: {
        type: "minor",
        name: "Iron Armor",
        desc: "Equip Iron melee gear.",
        cost: 1,
        status: "locked",
        deps: [
            "bronze_armor"
        ],
        pos: {
            x: "15%",
            y: "5%"
        },
        icon: "https://oldschool.runescape.wiki/images/Iron_platebody.png"
    },
    steel_armor: {
        type: "minor",
        name: "Steel Armor",
        desc: "Equip Steel melee gear.",
        cost: 1,
        status: "locked",
        deps: [
            "iron_armor"
        ],
        pos: {
            x: "10%",
            y: "5%"
        },
        icon: "https://oldschool.runescape.wiki/images/Steel_platebody.png"
    },
    black_armor: {
        type: "minor",
        name: "Black Armor",
        desc: "Equip Black melee gear.",
        cost: 1,
        status: "locked",
        deps: [
            "steel_armor"
        ],
        pos: {
            x: "5%",
            y: "5%"
        },
        icon: "https://oldschool.runescape.wiki/images/Black_platebody.png"
    },
    mithril_armor: {
        type: "minor",
        name: "Mithril Armor",
        desc: "Equip Mithril melee gear.",
        cost: 1,
        status: "locked",
        deps: [
            "black_armor"
        ],
        pos: {
            x: "0%",
            y: "5%"
        },
        icon: "https://oldschool.runescape.wiki/images/Mithril_platebody.png"
    },
    adamant_armor: {
        type: "minor",
        name: "Adamant Armor",
        desc: "Equip Adamant melee gear.",
        cost: 1,
        status: "locked",
        deps: [
            "mithril_armor"
        ],
        pos: {
            x: "-5%",
            y: "5%"
        },
        icon: "https://oldschool.runescape.wiki/images/Adamant_platebody.png"
    },
    quest_dragon_slayer_def: {
        type: "minor",
        name: "Quest: Dragon Slayer",
        desc: "Unlock ability to complete Dragon Slayer.",
        cost: 1,
        status: "locked",
        deps: [
            "adamant_armor"
        ],
        unlocksQuest: "quest_dragon_slayer",
        pos: {
            x: "-10%",
            y: "5%"
        },
        icon: "https://oldschool.runescape.wiki/images/Quest_point_icon.png"
    },
    rune_armor: {
        type: "minor",
        name: "Rune Armor",
        desc: "Equip Rune melee gear.",
        cost: 1,
        status: "locked",
        deps: [
            "quest_dragon_slayer_def"
        ],
        pos: {
            x: "-12%",
            y: "-2%"
        },
        icon: "https://oldschool.runescape.wiki/images/Rune_platebody.png"
    },
    bronze_weapon: {
        type: "minor",
        name: "Bronze Weapons",
        desc: "Use Bronze weapons.",
        cost: 1,
        status: "locked",
        deps: [
            "attack"
        ],
        pos: {
            x: "12%",
            y: "40%"
        },
        icon: "https://oldschool.runescape.wiki/images/Bronze_sword.png"
    },
    iron_weapon: {
        type: "minor",
        name: "Iron Weapons",
        desc: "Use Iron weapons.",
        cost: 1,
        status: "locked",
        deps: [
            "bronze_weapon"
        ],
        pos: {
            x: "7%",
            y: "45%"
        },
        icon: "https://oldschool.runescape.wiki/images/Iron_sword.png"
    },
    steel_weapon: {
        type: "minor",
        name: "Steel Weapons",
        desc: "Use Steel weapons.",
        cost: 1,
        status: "locked",
        deps: [
            "iron_weapon"
        ],
        pos: {
            x: "2%",
            y: "50%"
        },
        icon: "https://oldschool.runescape.wiki/images/Steel_sword.png"
    },
    black_weapon: {
        type: "minor",
        name: "Black Weapons",
        desc: "Use Black weapons.",
        cost: 1,
        status: "locked",
        deps: [
            "steel_weapon"
        ],
        pos: {
            x: "-3%",
            y: "55%"
        },
        icon: "https://oldschool.runescape.wiki/images/Black_sword.png"
    },
    mithril_weapon: {
        type: "minor",
        name: "Mithril Weapons",
        desc: "Use Mithril weapons.",
        cost: 1,
        status: "locked",
        deps: [
            "black_weapon"
        ],
        pos: {
            x: "-8%",
            y: "60%"
        },
        icon: "https://oldschool.runescape.wiki/images/Mithril_sword.png"
    },
    adamant_weapon: {
        type: "minor",
        name: "Adamant Weapons",
        desc: "Use Adamant weapons.",
        cost: 1,
        status: "locked",
        deps: [
            "mithril_weapon"
        ],
        pos: {
            x: "-3%",
            y: "65%"
        },
        icon: "https://oldschool.runescape.wiki/images/Adamant_sword.png"
    },
    rune_weapon: {
        type: "minor",
        name: "Rune Weapons",
        desc: "Use Rune weapons.",
        cost: 1,
        status: "locked",
        deps: [
            "adamant_weapon"
        ],
        pos: {
            x: "2%",
            y: "70%"
        },
        icon: "https://oldschool.runescape.wiki/images/Rune_sword.png"
    },
    mining: {
        type: "major",
        name: "Mining",
        desc: "Unlock the Mining skill.",
        cost: 2,
        status: "locked",
        deps: [
            "path_might"
        ],
        pos: {
            x: "18%",
            y: "50%"
        },
        icon: "https://oldschool.runescape.wiki/images/Mining_icon.png"
    },
    quest_knights_sword: {
        type: "minor",
        name: "Quest: Knight's Sword",
        desc: "Unlock ability to complete The Knight's Sword.",
        cost: 1,
        status: "locked",
        deps: [
            "mining"
        ],
        unlocksQuest: "quest_knights_sword",
        pos: {
            x: "13%",
            y: "60%"
        },
        icon: "https://oldschool.runescape.wiki/images/Quest_point_icon.png"
    },
    smithing: {
        type: "major",
        name: "Smithing",
        desc: "Unlock the Smithing skill.",
        cost: 0,
        status: "locked",
        deps: [
            "quest_knights_sword"
        ],
        pos: {
            x: "8%",
            y: "70%"
        },
        icon: "https://oldschool.runescape.wiki/images/Smithing_icon.png"
    },
    slayer: {
        type: "major",
        name: "Slayer",
        desc: "Unlock the Slayer skill.",
        cost: 2,
        status: "locked",
        deps: [
            "path_might"
        ],
        pos: {
            x: "40%",
            y: "15%"
        },
        icon: "https://oldschool.runescape.wiki/images/Slayer_icon.png"
    },
    ranged: {
        type: "major",
        name: "Ranged",
        desc: "Unlock the Ranged skill.",
        cost: 2,
        status: "locked",
        deps: [
            "path_dexterity"
        ],
        pos: {
            x: "40%",
            y: "88%"
        },
        icon: "https://oldschool.runescape.wiki/images/Ranged_icon.png"
    },
    oak_equip: {
        type: "minor",
        name: "Oak Equipment",
        desc: "Equip Oak bows/ammo.",
        cost: 1,
        status: "locked",
        deps: [
            "ranged"
        ],
        pos: {
            x: "35%",
            y: "95%"
        },
        icon: "https://oldschool.runescape.wiki/images/Oak_longbow.png"
    },
    willow_equip: {
        type: "minor",
        name: "Willow Equipment",
        desc: "Equip Willow bows/ammo.",
        cost: 1,
        status: "locked",
        deps: [
            "oak_equip"
        ],
        pos: {
            x: "30%",
            y: "102%"
        },
        icon: "https://oldschool.runescape.wiki/images/Willow_longbow.png"
    },
    maple_equip: {
        type: "minor",
        name: "Maple Equipment",
        desc: "Equip Maple bows/ammo.",
        cost: 1,
        status: "locked",
        deps: [
            "willow_equip"
        ],
        pos: {
            x: "25%",
            y: "109%"
        },
        icon: "https://oldschool.runescape.wiki/images/Maple_longbow.png"
    },
    agility: {
        type: "major",
        name: "Agility",
        desc: "Unlock the Agility skill.",
        cost: 2,
        status: "locked",
        deps: [
            "path_dexterity"
        ],
        pos: {
            x: "60%",
            y: "88%"
        },
        icon: "https://oldschool.runescape.wiki/images/Agility_icon.png"
    },
    thieving: {
        type: "major",
        name: "Thieving",
        desc: "Unlock the Thieving skill.",
        cost: 2,
        status: "locked",
        deps: [
            "agility"
        ],
        pos: {
            x: "70%",
            y: "92%"
        },
        icon: "https://oldschool.runescape.wiki/images/Thieving_icon.png"
    },
    hunter: {
        type: "major",
        name: "Hunter",
        desc: "Unlock the Hunter skill.",
        cost: 2,
        status: "locked",
        deps: [
            "agility"
        ],
        pos: {
            x: "70%",
            y: "82%"
        },
        icon: "https://oldschool.runescape.wiki/images/Hunter_icon.png"
    },
    woodcutting: {
        type: "major",
        name: "Woodcutting",
        desc: "Unlock the Woodcutting skill.",
        cost: 2,
        status: "locked",
        deps: [
            "path_dexterity"
        ],
        pos: {
            x: "50%",
            y: "95%"
        },
        icon: "https://oldschool.runescape.wiki/images/Woodcutting_icon.png"
    },
    fletching: {
        type: "major",
        name: "Fletching",
        desc: "Unlock the Fletching skill.",
        cost: 2,
        status: "locked",
        deps: [
            "woodcutting"
        ],
        pos: {
            x: "45%",
            y: "105%"
        },
        icon: "https://oldschool.runescape.wiki/images/Fletching_icon.png"
    },
    firemaking: {
        type: "major",
        name: "Firemaking",
        desc: "Unlock the Firemaking skill.",
        cost: 2,
        status: "locked",
        deps: [
            "woodcutting"
        ],
        pos: {
            x: "55%",
            y: "105%"
        },
        icon: "https://oldschool.runescape.wiki/images/Firemaking_icon.png"
    },
    fishing: {
        type: "major",
        name: "Fishing",
        desc: "Unlock the Fishing skill.",
        cost: 2,
        status: "locked",
        deps: [
            "path_dexterity"
        ],
        pos: {
            x: "80%",
            y: "90%"
        },
        icon: "https://oldschool.runescape.wiki/images/Fishing_icon.png"
    },
    quest_sheep_shearer: {
        type: "minor",
        name: "Quest: Sheep Shearer",
        desc: "Unlock ability to complete Sheep Shearer.",
        cost: 1,
        status: "locked",
        deps: [
            "path_dexterity"
        ],
        unlocksQuest: "quest_sheep_shearer",
        pos: {
            x: "65%",
            y: "105%"
        },
        icon: "https://oldschool.runescape.wiki/images/Quest_point_icon.png"
    },
    crafting: {
        type: "major",
        name: "Crafting",
        desc: "Unlock the Crafting skill.",
        cost: 0,
        status: "locked",
        deps: [
            "fletching",
            "quest_sheep_shearer"
        ],
        pos: {
            x: "50%",
            y: "115%"
        },
        icon: "https://oldschool.runescape.wiki/images/Crafting_icon.png"
    },
    quest_imp_catcher: {
        type: "minor",
        name: "Quest: Imp Catcher",
        desc: "Unlock ability to complete Imp Catcher.",
        cost: 1,
        status: "locked",
        deps: [
            "path_wisdom"
        ],
        unlocksQuest: "quest_imp_catcher",
        pos: {
            x: "80%",
            y: "25%"
        },
        icon: "https://oldschool.runescape.wiki/images/Quest_point_icon.png"
    },
    magic: {
        type: "major",
        name: "Magic",
        desc: "Unlock the Magic skill.",
        cost: 0,
        status: "locked",
        deps: [
            "quest_imp_catcher"
        ],
        pos: {
            x: "90%",
            y: "25%"
        },
        icon: "https://oldschool.runescape.wiki/images/Magic_icon.png"
    },
    quest_druidic_ritual: {
        type: "minor",
        name: "Quest: Druidic Ritual",
        desc: "Unlock ability to complete Druidic Ritual.",
        cost: 1,
        status: "locked",
        deps: [
            "path_wisdom"
        ],
        unlocksQuest: "quest_druidic_ritual",
        pos: {
            x: "65%",
            y: "45%"
        },
        icon: "https://oldschool.runescape.wiki/images/Quest_point_icon.png"
    },
    herblore: {
        type: "major",
        name: "Herblore",
        desc: "Unlock the Herblore skill.",
        cost: 0,
        status: "locked",
        deps: [
            "quest_druidic_ritual"
        ],
        pos: {
            x: "70%",
            y: "55%"
        },
        icon: "https://oldschool.runescape.wiki/images/Herblore_icon.png"
    },
    farming: {
        type: "major",
        name: "Farming",
        desc: "Unlock the Farming skill.",
        cost: 2,
        status: "locked",
        deps: [
            "herblore"
        ],
        pos: {
            x: "75%",
            y: "65%"
        },
        icon: "https://oldschool.runescape.wiki/images/Farming_icon.png"
    },
    quest_daddys_home: {
        type: "minor",
        name: "Quest: Daddy's Home",
        desc: "Unlock ability to complete Daddy's Home.",
        cost: 1,
        status: "locked",
        deps: [
            "path_wisdom"
        ],
        unlocksQuest: "quest_daddys_home",
        pos: {
            x: "85%",
            y: "70%"
        },
        icon: "https://oldschool.runescape.wiki/images/Quest_point_icon.png"
    },
    construction: {
        type: "major",
        name: "Construction",
        desc: "Unlock the Construction skill.",
        cost: 2,
        status: "locked",
        deps: [
            "quest_daddys_home"
        ],
        pos: {
            x: "95%",
            y: "80%"
        },
        icon: "https://oldschool.runescape.wiki/images/Construction_icon.png"
    },
    standard_spellbook: {
        type: "minor",
        name: "Standard Spellbook",
        desc: "Access the basic Standard spellbook.",
        cost: 1,
        status: "locked",
        deps: [
            "magic"
        ],
        pos: {
            x: "100%",
            y: "30%"
        },
        icon: "https://oldschool.runescape.wiki/images/Standard_spellbook.png"
    },
    magic_teleports: {
        type: "minor",
        name: "Teleports",
        desc: "Unlock basic teleport spells.",
        cost: 1,
        status: "locked",
        deps: [
            "standard_spellbook"
        ],
        pos: {
            x: "100%",
            y: "40%"
        },
        icon: "https://oldschool.runescape.wiki/images/Lumbridge_Teleport_icon.png"
    },
    high_alchemy: {
        type: "minor",
        name: "High Alchemy",
        desc: "Unlock High Alchemy spell.",
        cost: 1,
        status: "locked",
        deps: [
            "magic_teleports"
        ],
        pos: {
            x: "95%",
            y: "48%"
        },
        icon: "https://oldschool.runescape.wiki/images/High_Alchemy.png"
    },
    enchantment: {
        type: "minor",
        name: "Enchantment",
        desc: "Unlock basic Enchantment spells.",
        cost: 1,
        status: "locked",
        deps: [
            "magic_teleports"
        ],
        pos: {
            x: "105%",
            y: "48%"
        },
        icon: "https://oldschool.runescape.wiki/images/Enchant_level_3_jewellery.png"
    },
    quest_restless_ghost: {
        type: "minor",
        name: "Quest: Restless Ghost",
        desc: "Unlock ability to complete The Restless Ghost.",
        cost: 1,
        status: "locked",
        deps: [
            "path_wisdom"
        ],
        unlocksQuest: "quest_restless_ghost",
        pos: {
            x: "75%",
            y: "15%"
        },
        icon: "https://oldschool.runescape.wiki/images/Quest_point_icon.png"
    },
    prayer: {
        type: "major",
        name: "Prayer",
        desc: "Unlock the Prayer skill.",
        cost: 0,
        status: "locked",
        deps: [
            "quest_restless_ghost"
        ],
        pos: {
            x: "85%",
            y: "10%"
        },
        icon: "https://oldschool.runescape.wiki/images/Prayer_icon.png"
    },
    quest_cooks_assistant: {
        type: "minor",
        name: "Quest: Cooks Assistant",
        desc: "Unlock ability to complete Cooks Assistant.",
        cost: 1,
        status: "locked",
        deps: [
            "path_wisdom"
        ],
        unlocksQuest: "quest_cooks_assistant",
        pos: {
            x: "60%",
            y: "45%"
        },
        icon: "https://oldschool.runescape.wiki/images/Quest_point_icon.png"
    },
    cooking: {
        type: "major",
        name: "Cooking",
        desc: "Unlock the Cooking skill.",
        cost: 2,
        status: "locked",
        deps: [
            "quest_cooks_assistant"
        ],
        pos: {
            x: "31.15%",
            y: "50.90%"
        },
        icon: "https://oldschool.runescape.wiki/images/Cooking_icon.png"
    },
    quest_rune_mysteries: {
        type: "minor",
        name: "Quest: Rune Mysteries",
        desc: "Unlock ability to complete Rune Mysteries.",
        cost: 1,
        status: "locked",
        deps: [
            "magic"
        ],
        unlocksQuest: "quest_rune_mysteries",
        pos: {
            x: "95%",
            y: "18%"
        },
        icon: "https://oldschool.runescape.wiki/images/Quest_point_icon.png"
    },
    runecraft: {
        type: "major",
        name: "Runecraft",
        desc: "Unlock the Runecraft skill.",
        cost: 0,
        status: "locked",
        deps: [
            "quest_rune_mysteries"
        ],
        pos: {
            x: "102%",
            y: "5%"
        },
        icon: "https://oldschool.runescape.wiki/images/Runecraft_icon.png"
    }
};

    let TASK_DATA = [
        { id: 'ct_goblin', desc: 'Kill 50 Goblins (Combat Task)', reward: 2, status: 'incomplete' },
        { id: 'ct_cow', desc: 'Kill 25 Cows using only Ranged (Combat Task)', reward: 3, status: 'incomplete' },
        { id: 'ct_giant_rat', desc: 'Kill the Giant Rat in Lumbridge Sewers (Combat Task)', reward: 4, status: 'incomplete' },
        { id: 'ct_kalphite_worker', desc: 'Kill a Kalphite Worker (Combat Task)', reward: 5, status: 'incomplete' },
        { id: 'ct_hill_giant', desc: 'Kill 50 Hill Giants (Combat Task)', reward: 6, status: 'incomplete' }, 
        { id: 'ct_moss_giant', desc: 'Kill a Moss Giant (Combat Task)', reward: 7, status: 'incomplete' }, 
        
        { id: 'ad_cooks_assistant', desc: "Complete the Cook's Assistant quest (Achievement Diary)", reward: 5, status: 'incomplete' },
        { id: 'ad_chop_willow', desc: 'Chop a Willow tree in Lumbridge (Achievement Diary)', reward: 3, status: 'incomplete' },
        { id: 'ad_lum_tele', desc: 'Use the Lumbridge Home Teleport (Achievement Diary)', reward: 1, status: 'incomplete' },
        { id: 'ad_draynor_bank', desc: 'Deposit an item into the Draynor Village Bank (Achievement Diary)', reward: 3, status: 'incomplete' },
        { id: 'ad_varrock_tele', desc: 'Cast the Varrock Teleport spell (Achievement Diary)', reward: 4, status: 'incomplete' }, 
        { id: 'ad_al_kharid_gate', desc: 'Pay the toll gate in Al Kharid (Achievement Diary)', reward: 1, status: 'incomplete' }, 
        { id: 'ad_mine_coal', desc: 'Mine a piece of Coal in Falador (Achievement Diary)', reward: 3, status: 'incomplete' }, 
        { id: 'ad_run_falador_agi', desc: 'Use the Falador Agility shortcut (Achievement Diary)', reward: 5, status: 'incomplete' }, 

        { id: 'cl_bronze_helmet', desc: 'Equip a Bronze full helmet (Collection Log)', reward: 2, status: 'incomplete' },
        { id: 'cl_eye_of_newt', desc: 'Obtain an Eye of Newt drop (Collection Log)', reward: 3, status: 'incomplete' },
        { id: 'cl_rune_essence', desc: 'Mine 100 Rune essence (Collection Log)', reward: 4, status: 'incomplete' },
        { id: 'cl_curry_leaf', desc: 'Obtain a Curry Leaf from a patch (Collection Log)', reward: 4, status: 'incomplete' },
        { id: 'cl_cowhide', desc: 'Tan 10 Cowhides in Al Kharid (Collection Log)', reward: 3, status: 'incomplete' }, 
        { id: 'cl_fishing_net', desc: 'Catch a sardine with a small net (Collection Log)', reward: 2, status: 'incomplete' }, 
        { id: 'cl_limpwurt_root', desc: 'Obtain a Limpwurt Root drop (Collection Log)', reward: 4, status: 'incomplete' }, 

        { id: 'sm_fish_50', desc: 'Cook 50 successful Trout (Skilling Milestone)', reward: 3, status: 'incomplete' },
        { id: 'sm_fletch_100', desc: 'Fletch 100 Willow shortbows (Skilling Milestone)', reward: 4, status: 'incomplete' },
        { id: 'sm_mine_tin', desc: 'Mine 100 Tin Ore (Skilling Milestone)', reward: 2, status: 'incomplete' }, 
        { id: 'sm_chop_oak', desc: 'Chop 50 Oak Logs (Skilling Milestone)', reward: 3, status: 'incomplete' }, 
        { id: 'sm_fish_tuna', desc: 'Cook 25 Tuna (Skilling Milestone)', reward: 4, status: 'incomplete' }, 
        { id: 'sm_make_plank', desc: 'Saw 10 regular Planks (Skilling Milestone)', reward: 2, status: 'incomplete' }, 
    ];

    const ppDisplay = document.getElementById('pp-display');
    const logContainer = document.getElementById('log');
    const treeView = document.getElementById('talent-tree-view');
    const treeCanvas = document.getElementById('tree-canvas');
    const treeContainer = document.getElementById('tree-container');
    const treeSvg = document.getElementById('tree-svg'); 
    const unlocksListContainer = document.getElementById('unlocks-list-container');
    const questList = document.getElementById('quest-list-container');
    const taskListContainer = document.getElementById('task-list-container');
    const toggleIcons = document.querySelectorAll('.toggle-icon');
    const contentViews = document.querySelectorAll('.content-view');

    let isPanning = false;
    let startX, startY;
    let canvasX = 0;
    let canvasY = 0;
    let initialCanvasX = 0;
    let initialCanvasY = 0;
    let scale = 0.7; 
    const scaleFactor = 0.1;
    const minScale = 0.5;
    const maxScale = 2.0;
    
    const applyTransform = () => {
        treeCanvas.style.transform = `translate(${canvasX}px, ${canvasY}px) scale(${scale})`;
    };

    treeView.addEventListener('mousedown', (e) => {
        if (e.target.closest('.node')) return;
        isPanning = true;
        startX = e.clientX;
        startY = e.clientY;
        initialCanvasX = canvasX;
        initialCanvasY = canvasY;
        treeView.style.cursor = 'grabbing';
    });

    treeView.addEventListener('mouseleave', () => {
        isPanning = false;
        treeView.style.cursor = 'grab';
    });

    treeView.addEventListener('mouseup', () => {
        isPanning = false;
        treeView.style.cursor = 'grab';
    });

    treeView.addEventListener('mousemove', (e) => {
        if (!isPanning) return;
        e.preventDefault();
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        canvasX = initialCanvasX + dx;
        canvasY = initialCanvasY + dy;
        applyTransform();
    });

    treeView.addEventListener('wheel', (e) => {
        e.preventDefault();
        
        const treeViewRect = treeView.getBoundingClientRect();
        const mouseX = e.clientX - treeViewRect.left;
        const mouseY = e.clientY - treeViewRect.top;

        const delta = e.deltaY * -0.01;
        const newScale = Math.min(Math.max(minScale, scale + delta * scaleFactor), maxScale);

        if (newScale !== scale) {
            const scaleChange = newScale / scale;

            canvasX = mouseX - (mouseX - canvasX) * scaleChange;
            canvasY = mouseY - (mouseY - canvasY) * scaleChange;
            
            scale = newScale;
            applyTransform();
        }
    });

    const addLog = (message, type) => {
        const p = document.createElement('p');
        p.innerHTML = `<span class="log-type log-${type}">${type}:</span> ${message}`;
        logContainer.prepend(p);
    };

    const updateResources = () => {
        ppDisplay.textContent = PLAYER_STATE.pp;
    };

    const switchView = (viewId) => {
        contentViews.forEach(v => v.classList.remove('active'));
        document.getElementById(viewId)?.classList.add('active');

        toggleIcons.forEach(i => i.classList.remove('active'));
        document.querySelector(`.toggle-icon[data-view="${viewId}"]`)?.classList.add('active');
    };

    const unlockNode = (nodeId) => {
        const node = TREE_DATA[nodeId];
        
        if (node.cost > 0 && (!node || node.status !== 'available' || PLAYER_STATE.pp < node.cost)) return;
        
        if (node.cost > 0) {
            PLAYER_STATE.pp -= node.cost;
        }
        
        node.status = 'unlocked';

        if (node.unlocksQuest) {
            const questToUnlock = PLAYER_STATE.quests.find(q => q.id === node.unlocksQuest);
            if (questToUnlock && questToUnlock.status === 'not_started') {
                questToUnlock.status = 'in_progress';
                addLog(`Quest '${questToUnlock.name}' is now available to complete.`, 'info');
            }
        }

        if (PLAYER_STATE.skills[node.name]) {
            PLAYER_STATE.skills[node.name].unlocked = true;
        }

        addLog(`Unlocked '${node.name}'`, 'unlock');
        updateResources();
        updateNodeStatuses();
        renderTree();
        renderUnlocks();
        renderQuests(); 
    };
    
    const completeQuest = (questId) => {
        const quest = PLAYER_STATE.quests.find(q => q.id === questId);
        
        if (!quest || quest.status === 'complete') return; 

        quest.status = 'complete';
        addLog(`Quest '${quest.name}' completed!`, 'info');
        
        updateNodeStatuses();
        renderTree();
        renderQuests(); 
    }

    const updateNodeStatuses = () => {
        Object.keys(TREE_DATA).forEach(id => {
            const node = TREE_DATA[id];

            if (node.id === 'path_might' || node.id === 'path_dexterity' || node.id === 'path_wisdom' || node.id === 'genesis') {
                 if (node.status === 'locked') {
                    node.status = 'unlocked';
                 }
                 return;
            }

            if (node.status === 'locked') {
                const allDepsMet = node.deps.every(depId => TREE_DATA[depId]?.status === 'unlocked');
                
                let questRequirementMet = true;
                if (node.questId) {
                    const quest = PLAYER_STATE.quests.find(q => q.id === node.questId);
                    questRequirementMet = quest && quest.status === 'complete';
                }

                if (allDepsMet && questRequirementMet) {
                    if (node.cost === 0) {
                        unlockNode(id);
                    } else {
                        node.status = 'available';
                    }
                }
            }
        });
    };

    const claimTask = (taskId) => {
        const task = TASK_DATA.find(t => t.id === taskId);
        if (!task || task.status !== 'incomplete') return;

        task.status = 'complete';
        PLAYER_STATE.pp += task.reward;

        addLog(`Task complete: '${task.desc}'. +${task.reward} PP.`, 'info');
        updateResources();
        renderTasks();
        renderTree();
    };

    function renderTree() {
        const questStatusMap = PLAYER_STATE.quests.reduce((acc, q) => {
            acc[q.id] = q.status;
            return acc;
        }, {});

        treeContainer.innerHTML = '';
        treeSvg.innerHTML = '';

        Object.keys(TREE_DATA).forEach(id => {
            const node = TREE_DATA[id];

            if (node.deps && node.deps.length > 0) {
                node.deps.forEach(depId => {
                    const parentNode = TREE_DATA[depId];
                    if (!parentNode) return;

                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', parentNode.pos.x);
                    line.setAttribute('y1', parentNode.pos.y);
                    line.setAttribute('x2', node.pos.x);
                    line.setAttribute('y2', node.pos.y);

                    const lineClass = (node.status === 'unlocked' || node.status === 'available') ? 'line-unlocked' : 'line-locked';
                    line.setAttribute('class', lineClass);

                    treeSvg.appendChild(line);
                });
            }

            if (node.type === 'system') return; 

            const nodeEl = document.createElement('div');
            nodeEl.id = id;
            nodeEl.className = `node node-${node.type} ${node.status}`;
            nodeEl.style.left = node.pos.x;
            nodeEl.style.top = node.pos.y;
            nodeEl.style.transform = 'translate(-50%, -50%)';

            const iconHtml = `<img src="${node.icon}" class="node-icon">`;

            let overlayIcon = '';
            if (node.status === 'locked') {
                overlayIcon = '<i class="fas fa-lock"></i>';
            } else if (node.status === 'unlocked') {
                overlayIcon = '<i class="fas fa-check"></i>';
            } else if (node.questId && questStatusMap[node.questId] !== 'complete') {
                 overlayIcon = '<i class="fas fa-exclamation-circle"></i>';
            }

            const canAfford = PLAYER_STATE.pp >= node.cost;
            const costColor = canAfford ? 'var(--text-yellow)' : 'var(--status-red)';
            const costText = node.cost === 0 ? 'FREE' : `${node.cost} PP`;
            const finalCostColor = node.cost === 0 ? 'var(--status-green)' : costColor;

            nodeEl.innerHTML = `
                ${iconHtml}
                <div class="overlay-icon">${overlayIcon}</div>
                <div class="osrs-panel tooltip">
                    <h4>${node.name}</h4>
                    <p>${node.desc}</p>
                    <p class="cost" style="color: ${finalCostColor}">Cost: ${costText}</p>
                </div>
            `;

            if (node.status === 'available') {
                nodeEl.onclick = () => unlockNode(id);
            }

            treeContainer.appendChild(nodeEl);
        });
    }

    function renderUnlocks() {
        unlocksListContainer.innerHTML = '';
    
        const unlockedIds = new Set(
            Object.keys(TREE_DATA).filter(id => {
                const node = TREE_DATA[id];
                return node.status === 'unlocked' && !id.startsWith('path_') && id !== 'genesis' && !node.name.startsWith('Quest:');
            })
        );
        const renderedIds = new Set();
    
        // Special grouping definitions
        const specialGroups = {
            magic: {
                Teleportation: 'magic_teleports',
                Enchanting: 'enchantment',
                Alchemy: 'high_alchemy',
                "Spellbook": 'standard_spellbook'
            },
            defence: {
                Armour: ['bronze_armor', 'iron_armor', 'steel_armor', 'black_armor', 'mithril_armor', 'adamant_armor', 'rune_armor']
            },
            attack: {
                Weapons: ['bronze_weapon', 'iron_weapon', 'steel_weapon', 'black_weapon', 'mithril_weapon', 'adamant_weapon', 'rune_weapon']
            },
            ranged: {
                Bows: ['oak_equip', 'willow_equip', 'maple_equip']
            }
        };
    
        // Recursive function to create list items for nodes WITHOUT special rules
        function createDefaultNodeElement(nodeId) {
            if (renderedIds.has(nodeId)) return null;
    
            const node = TREE_DATA[nodeId];
            const li = document.createElement('li');
            li.innerHTML = `<div class="unlocks-list-item"><img src="${node.icon}" alt=""> <span>${node.name}</span></div>`;
            renderedIds.add(nodeId);
    
            // Find direct children that are unlocked but not part of any special group
            const children = Object.keys(TREE_DATA).filter(childId => 
                unlockedIds.has(childId) && 
                TREE_DATA[childId].deps.includes(nodeId) &&
                !Object.values(specialGroups).some(group => Object.values(group).flat().includes(childId))
            );
            
            if (children.length > 0) {
                const sublist = document.createElement('ul');
                children.forEach(childId => {
                    const childElement = createDefaultNodeElement(childId);
                    if (childElement) sublist.appendChild(childElement);
                });
                if(sublist.hasChildNodes()) li.appendChild(sublist);
            }
            return li;
        }
    
        // Group all unlocked nodes by their root path
        const nodeMemo = {};
        function getPathForNode(nodeId) {
            if (nodeMemo[nodeId]) return nodeMemo[nodeId];
            const node = TREE_DATA[nodeId];
            if (!node || !node.deps || node.deps.length === 0) return null;
            if (node.deps.includes('path_might')) return (nodeMemo[nodeId] = 'might');
            if (node.deps.includes('path_dexterity')) return (nodeMemo[nodeId] = 'dexterity');
            if (node.deps.includes('path_wisdom')) return (nodeMemo[nodeId] = 'wisdom');
            for (const depId of node.deps) {
                const path = getPathForNode(depId);
                if (path) return (nodeMemo[nodeId] = path);
            }
            return null;
        }
        
        const categorizedIds = { might: [], dexterity: [], wisdom: [], other: [] };
        unlockedIds.forEach(id => {
            const path = getPathForNode(id);
            categorizedIds[path || 'other'].push(id);
        });
    
        const categoryTitles = { might: 'Path of Might', dexterity: 'Path of Dexterity', wisdom: 'Path of Wisdom', other: 'Miscellaneous' };
    
        // Render each category
        for (const categoryKey in categorizedIds) {
            const pathIds = new Set(categorizedIds[categoryKey]);
            if (pathIds.size === 0) continue;
    
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'unlocks-category';
            categoryDiv.innerHTML = `<h3>${categoryTitles[categoryKey]}</h3>`;
            const rootList = document.createElement('ul');
            rootList.className = 'unlocks-list';
    
            // Identify and render only the top-level nodes for this path
            const rootIds = [...pathIds].filter(id => !TREE_DATA[id].deps.some(depId => pathIds.has(depId)));
            rootIds.sort((a,b) => TREE_DATA[a].name.localeCompare(TREE_DATA[b].name));
    
            rootIds.forEach(rootId => {
                if (renderedIds.has(rootId)) return;
                
                const rootNode = TREE_DATA[rootId];
                const rootLi = document.createElement('li');
                rootLi.innerHTML = `<div class="unlocks-list-item"><img src="${rootNode.icon}" alt=""> <span>${rootNode.name}</span></div>`;
                renderedIds.add(rootId);
    
                // --- Handle Special Groupings ---
                if (specialGroups[rootId]) {
                    const sublist = document.createElement('ul');
                    for (const groupName in specialGroups[rootId]) {
                        const groupItems = specialGroups[rootId][groupName];
                        
                        // Handle simple groups (like Magic)
                        if (typeof groupItems === 'string') {
                            if (unlockedIds.has(groupItems)) {
                                const itemNode = TREE_DATA[groupItems];
                                const itemLi = document.createElement('li');
                                itemLi.innerHTML = `<div class="unlocks-list-item"><img src="${itemNode.icon}" alt=""> <span>${groupName}</span></div>`;
                                sublist.appendChild(itemLi);
                                renderedIds.add(groupItems);
                            }
                        } 
                        // Handle conceptual groups with children (like Bows)
                        else if (Array.isArray(groupItems)) {
                            const unlockedGroupItems = groupItems.filter(itemId => unlockedIds.has(itemId));
                            if (unlockedGroupItems.length > 0) {
                                const conceptualLi = document.createElement('li');
                                conceptualLi.className = 'conceptual-group';
                                conceptualLi.textContent = groupName;
    
                                const innerSublist = document.createElement('ul');
                                unlockedGroupItems.forEach(itemId => {
                                    const itemNode = TREE_DATA[itemId];
                                    const itemLi = document.createElement('li');
                                    itemLi.innerHTML = `<div class="unlocks-list-item"><img src="${itemNode.icon}" alt=""> <span>${itemNode.name}</span></div>`;
                                    innerSublist.appendChild(itemLi);
                                    renderedIds.add(itemId);
                                });
                                conceptualLi.appendChild(innerSublist);
                                sublist.appendChild(conceptualLi);
                            }
                        }
                    }
                    if (sublist.hasChildNodes()) rootLi.appendChild(sublist);
                }
    
                // --- Handle Default Children ---
                const defaultChildrenSublist = document.createElement('ul');
                const childrenIds = Object.keys(TREE_DATA).filter(id => unlockedIds.has(id) && TREE_DATA[id].deps.includes(rootId));
                childrenIds.forEach(childId => {
                     const childElement = createDefaultNodeElement(childId);
                     if (childElement) defaultChildrenSublist.appendChild(childElement);
                });
                if(defaultChildrenSublist.hasChildNodes()) rootLi.appendChild(defaultChildrenSublist);
                
                rootList.appendChild(rootLi);
            });
    
            categoryDiv.appendChild(rootList);
            unlocksListContainer.appendChild(categoryDiv);
        }
    }

    function renderQuests() {
        const unlockedQuestPrerequisites = Object.keys(TREE_DATA)
            .filter(id => TREE_DATA[id].unlocksQuest && TREE_DATA[id].status === 'unlocked')
            .map(id => TREE_DATA[id].unlocksQuest);

        questList.innerHTML = '';
        PLAYER_STATE.quests.forEach(quest => {
            const item = document.createElement('li');
            item.className = 'quest-item';

            const isTreeUnlocked = unlockedQuestPrerequisites.includes(quest.id);
            
            let statusClass = quest.status;
            let clickable = false;
            let isLocked = false;

            if (quest.status === 'complete') {
                statusClass = 'complete';
            } else if (isTreeUnlocked) {
                statusClass = quest.status === 'not_started' ? 'in_progress' : quest.status;
                clickable = true;
            } else {
                statusClass = 'locked';
                isLocked = true;
            }

            item.innerHTML = `
                <div class="quest-status ${statusClass}"></div>
                <span>${quest.name}</span>
                ${isLocked ? '<i class="fas fa-lock" style="margin-left: auto;"></i>' : ''}
            `;
            
            if (clickable) {
                item.classList.add('clickable');
                item.style.cursor = 'pointer';
                item.addEventListener('click', () => {
                    completeQuest(quest.id);
                });
            }

            questList.appendChild(item);
        });
    }

    function renderTasks() {
        taskListContainer.innerHTML = '';
        TASK_DATA.forEach(task => {
            const item = document.createElement('li');
            item.className = `task-item ${task.status}`;
            
            let buttonHtml = '<button class="claim-btn" disabled>Claimed</button>';
            if (task.status === 'incomplete') {
                buttonHtml = `<button class="claim-btn" data-task-id="${task.id}">Claim</button>`;
            }

            item.innerHTML = `
                <span class="task-desc">${task.desc}</span>
                <span class="task-reward">+${task.reward} PP</span>
                ${buttonHtml}
            `;
            taskListContainer.appendChild(item);
        });

        document.querySelectorAll('.claim-btn[data-task-id]').forEach(button => {
            button.addEventListener('click', (e) => {
                claimTask(e.target.dataset.taskId);
            });
        });
    }

    toggleIcons.forEach(icon => {
        icon.addEventListener('click', () => switchView(icon.dataset.view));
    });

    window.addEventListener('resize', applyTransform); 

    updateResources();
    updateNodeStatuses();
    renderTree();
    renderUnlocks();
    renderQuests();
    renderTasks();
    addLog('Welcome to Path of the Prodigy. Your 5 initial PP are ready to spend!', 'system');
    switchView('talent-tree-view');
});