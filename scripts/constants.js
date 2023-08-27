export const TURNS_PER_ROUND = 10;
export const DEBATE_ROUND = 6;
export const END_GAME_ROUND = 9;
export const NIXON = "nixon";
export const KENNEDY = "kennedy";
export const RESET_SIGNAL = new Object();

export const CP_MOD_TYPE = {
    ALL: "all",
    POSITIONING: "pos",
    CAMPAIGNING: "cam"
}

export const PHASE = {
    CHOOSE_FIRST: "choose_first",
    PLAY_CARDS: "play_cards",
    TRIGGER_EVENT: "trigger_event",
    DISCARD_CHOICE: "discard_choice",
    ISSUE_SWAP: "issue_swap",
    ISSUE_REWARD_CHOICE: "issue_choice",
    ISSUE1_ENDORSE_REWARD: "endorse_reward",
    STRATEGY: "strategy",
    DEBATE: "debate",
    DEBATE_INITIATIVE: "debateInitiative",
    DEBATE_PARTY: "debateParty",
    DEBATE_RESOLVE: "debateResolve",
    CHOOSE_FIRST_END: "chooseFirstEnd",
    ELECTION_DAY_EVENTS: "electionDay",
    RESOLVE_GAME: "resolveGame"
}

export const DEBATE_FLAGS = {
    BRAIN_TRUST: "brainTrust",
    LAZY_SHAVE: "lazyShave"
}

export const ELECTION_FLAGS = {
    UNPLEDGED: "unpledged",
    COOK_COUNTY: "cookCountry",
    EARLY_RETURNS: "earlyReturns",
    RECOUNT: "recount"
}

export const FLAGS = {
    STOP_SILENCE: "stopSilence",
    HOUSTON_ASSOC: "houstonAssoc",
    NIXON_EGGED: "nixonEgged",
    SILENCE: "silence",
    JOE_KENNEDY: "joeKennedy",
    KEN_AIR: "kenAir",
    KEN_NO_CP: "kenNoCp",
    JACKIE_KENNEDY: "jackieKennedy",
    NIXONS_KNEE: "nixonsKnee",
    PUERTO_RICAN: "puertoRicanBishops",
    KENNEDY_CORPS: "kennedyCorps",
    ADVANCE_MEN: "advanceMen",
    OLD_SOUTH: "oldSouth",
    PROFILES_COURAGE: "profilesCourage",
    HOSTILE_PRESS: "hostilePress"
};

export const EVENT_TYPE = {
    LOSE_ISSUE: "loseIssue",
    CHANGE_PER: "changePer",
    CHANGE_STATES: "changeStates",
    CHANGE_MEDIA: "changeMedia",
    RETRIEVE: "retrieve",
    DISCARD: "discard",
    EVENT_FROM_DISCARD: "eventFromDiscard",
    EMPTY_PER: "emptyPer",
    HEARTLAND: "heartland",
    LBJ: "lbj",
    MAY_UNEXHAUST: "unexhaust",
    BYRD: "byrd",
    HIGH_HOPES: "highHopes",
    DRAW_CARDS: "drawCards",
    ADD_ISSUE: "addIssue",
    PTTV: "pttv",
    SUBURBAN: "suburban",
    SET_ISSUE_ORDER: "setIssueOrder",
    CHOOSE_CP_USE: "chooseCpUse",
    MOVE: "move",
    OPPOSITION: "opposition",
    HENRY_LUCE: "henryLuce",
    SWING_STATE: "swingState"
};

export const ISSUE = {
    DEFENSE: "DEFENSE",
    CIVIL_RIGHTS: "CIVIL_RIGHTS",
    ECONOMY: "ECONOMY"
};

export const ISSUE_URLS = {
    [ISSUE.DEFENSE]: "../images/defense_gray.png",
    [ISSUE.CIVIL_RIGHTS]: "../images/civilrights_gray.png",
    [ISSUE.ECONOMY]: "../images/economy_gray.png"
};

export const DEFAULT_COUNTS = {
    washington: 0,
    oregon: 0,
    california: 0,
    alaska: 0,
    idaho: 0,
    nevada: 0,
    montana: 0,
    wyoming: 1,
    utah: 1,
    arizona: 1,
    colorado: 1,
    newmexico: 0,
    northdaktoa: 1,
    southdakota: 1,
    nebraska: 2,
    kansas: 2,
    oklahoma: 1,
    texas: 0,
    minnesota: 0,
    iowa: 1,
    missouri: -1,
    arkansas: -1,
    louisiana: -2,
    wisconsin: 0,
    illinois: 0,
    kentucky: 0,
    tennessee: 0,
    mississippi: -2,
    michigan: 0,
    indiana: 1,
    alabama: -1,
    ohio: 1,
    georgia: -2,
    florida: 0,
    newyork: 0,
    pennsylvania: 0,
    westvirginia: 0,
    virginia: 0,
    northcarolina: -1,
    southcarolina: -1,
    maine: 1,
    newhampshire: 0,
    vermont: 1,
    massachusetts: -2,
    connecticut: 0,
    rhodeisland: -2,
    newjersey: 0,
    delaware: 0,
    maryland: 0,
    hawaii: 0,
};
export const stateNames = Object.keys(DEFAULT_COUNTS);

export const ELECTORS = {
    washington: 9,
    oregon: 6,
    california: 32,
    alaska: 3,
    idaho: 4,
    nevada: 3,
    montana: 4,
    wyoming: 3,
    utah: 4,
    arizona: 4,
    colorado: 6,
    newmexico: 4,
    northdaktoa: 4,
    southdakota: 4,
    nebraska: 6,
    kansas: 8,
    oklahoma: 8,
    texas: 24,
    minnesota: 11,
    iowa: 10,
    missouri: 13,
    arkansas: 8,
    louisiana: 10,
    wisconsin: 12,
    illinois: 27,
    kentucky: 10,
    tennessee: 11,
    mississippi: 8,
    michigan: 20,
    indiana: 13,
    alabama: 11,
    ohio: 25,
    georgia: 12,
    florida: 10,
    newyork: 45,
    pennsylvania: 32,
    westvirginia: 8,
    virginia: 12,
    northcarolina: 14,
    southcarolina: 8,
    maine: 5,
    newhampshire: 4,
    vermont: 5,
    massachusetts: 16,
    connecticut: 8,
    rhodeisland: 4,
    newjersey: 16,
    delaware: 3,
    maryland: 9,
    hawaii: 3,
};

export const stateLeanNixon = {
    washington: true,
    oregon: true,
    california: true,
    alaska: true,
    idaho: true,
    nevada: false,
    montana: true,
    wyoming: true,
    utah: true,
    arizona: true,
    colorado: true,
    newmexico: false,
    northdaktoa: true,
    southdakota: true,
    nebraska: true,
    kansas: true,
    oklahoma: true,
    texas: false,
    minnesota: false,
    iowa: true,
    missouri: false,
    arkansas: false,
    louisiana: false,
    wisconsin: true,
    illinois: false,
    kentucky: true,
    tennessee: true,
    mississippi: false,
    michigan: false,
    indiana: true,
    alabama: false,
    ohio: true,
    georgia: false,
    florida: true,
    newyork: false,
    pennsylvania: false,
    westvirginia: false,
    virginia: true,
    northcarolina: false,
    southcarolina: false,
    maine: true,
    newhampshire: true,
    vermont: true,
    massachusetts: false,
    connecticut: false,
    rhodeisland: false,
    newjersey: false,
    delaware: false,
    maryland: false,
    hawaii: false,
};

export const REGION = {
    WEST: 0,
    MIDWEST: 1,
    NORTHEAST: 2,
    SOUTH: 3
};
export const REGION_NAME = {
    [REGION.WEST]: "west",
    [REGION.MIDWEST]: "midwest",
    [REGION.SOUTH]: "south",
    [REGION.NORTHEAST]: "east"
};
export const STATE_REGION = {
    washington: REGION.WEST,
    oregon: REGION.WEST,
    california: REGION.WEST,
    alaska: REGION.WEST,
    idaho: REGION.WEST,
    nevada: REGION.WEST,
    montana: REGION.WEST,
    wyoming: REGION.WEST,
    utah: REGION.WEST,
    arizona: REGION.WEST,
    colorado: REGION.WEST,
    newmexico: REGION.WEST,
    northdaktoa: REGION.WEST,
    southdakota: REGION.WEST,
    nebraska: REGION.WEST,
    kansas: REGION.WEST,
    oklahoma: REGION.WEST,
    texas: REGION.SOUTH,
    minnesota: REGION.MIDWEST,
    iowa: REGION.MIDWEST,
    missouri: REGION.MIDWEST,
    arkansas: REGION.SOUTH,
    louisiana: REGION.SOUTH,
    wisconsin: REGION.MIDWEST,
    illinois: REGION.MIDWEST,
    kentucky: REGION.MIDWEST,
    tennessee: REGION.SOUTH,
    mississippi: REGION.SOUTH,
    michigan: REGION.MIDWEST,
    indiana: REGION.MIDWEST,
    alabama: REGION.SOUTH,
    ohio: REGION.MIDWEST,
    georgia: REGION.SOUTH,
    florida: REGION.SOUTH,
    newyork: REGION.NORTHEAST,
    pennsylvania: REGION.NORTHEAST,
    westvirginia: REGION.NORTHEAST,
    virginia: REGION.SOUTH,
    northcarolina: REGION.SOUTH,
    southcarolina: REGION.SOUTH,
    maine: REGION.NORTHEAST,
    newhampshire: REGION.NORTHEAST,
    vermont: REGION.NORTHEAST,
    massachusetts: REGION.NORTHEAST,
    connecticut: REGION.NORTHEAST,
    rhodeisland: REGION.NORTHEAST,
    newjersey: REGION.NORTHEAST,
    delaware: REGION.NORTHEAST,
    maryland: REGION.NORTHEAST,
    hawaii: REGION.WEST,
};

// to get from OUTER to INNER we need to go to VALUE
export const movePath = {
    hawaii: {
        alaska: REGION.WEST,
        [REGION.WEST]: REGION.WEST,
        [REGION.MIDWEST]: REGION.WEST,
        [REGION.NORTHEAST]: REGION.WEST,
        [REGION.SOUTH]: REGION.WEST
    },
    alaska: {
        hawaii: REGION.WEST,
        [REGION.WEST]: REGION.WEST,
        [REGION.MIDWEST]: REGION.WEST,
        [REGION.NORTHEAST]: REGION.WEST,
        [REGION.SOUTH]: REGION.WEST
    },
    [REGION.WEST]: {
        hawaii: "hawaii",
        alaska: "alaska",
        [REGION.MIDWEST]: REGION.MIDWEST,
        [REGION.NORTHEAST]: REGION.SOUTH,
        [REGION.SOUTH]: REGION.SOUTH
    },
    [REGION.MIDWEST]: {
        hawaii: REGION.WEST,
        alaska: REGION.WEST,
        [REGION.WEST]: REGION.WEST,
        [REGION.NORTHEAST]: REGION.NORTHEAST,
        [REGION.SOUTH]: REGION.SOUTH
    },
    [REGION.NORTHEAST]: {
        hawaii: REGION.MIDWEST,
        alaska: REGION.MIDWEST,
        [REGION.WEST]: REGION.MIDWEST,
        [REGION.MIDWEST]: REGION.MIDWEST,
        [REGION.SOUTH]: REGION.SOUTH
    },
    [REGION.SOUTH]: {
        hawaii: REGION.WEST,
        alaska: REGION.WEST,
        [REGION.WEST]: REGION.WEST,
        [REGION.MIDWEST]: REGION.MIDWEST,
        [REGION.NORTHEAST]: REGION.NORTHEAST
    },
};

export const stateCodes = {
    "al": "alabama",
    "ak": "alaska",
    "az": "arizona",
    "ar": "arkansas",
    "ca": "california",
    "co": "colorado",
    "ct": "connecticut",
    "de": "delaware",
    "fl": "florida",
    "ga": "georgia",
    "hi": "hawaii",
    "id": "idaho",
    "il": "illinois",
    "in": "indiana",
    "ia": "iowa",
    "ks": "kansas",
    "ky": "kentucky",
    "la": "louisiana",
    "me": "maine",
    "md": "maryland",
    "ma": "massachusetts",
    "mi": "michigan",
    "mn": "minnesota",
    "ms": "mississippi",
    "mo": "missouri",
    "mt": "montana",
    "ne": "nebraska",
    "nv": "nevada",
    "nh": "newhampshire",
    "nj": "newjersey",
    "nm": "newmexico",
    "ny": "newyork",
    "nc": "northcarolina",
    "nd": "northdakota",
    "oh": "ohio",
    "ok": "oklahoma",
    "or": "oregon",
    "pa": "pennsylvania",
    "ri": "rhodeisland",
    "sc": "southcarolina",
    "sd": "southdakota",
    "tn": "tennessee",
    "tx": "texas",
    "ut": "utah",
    "vt": "vermont",
    "va": "virginia",
    "wa": "washington",
    "wv": "westvirginia",
    "wi": "wisconsin",
    "wy": "wyoming"
}

export const PRETTY_STATES = {
    "alabama": "Alabama",
    "alaska": "Alaska",
    "arizona": "Arizona",
    "arkansas": "Arkansas",
    "california": "California",
    "colorado": "Colorado",
    "connecticut": "Connecticut",
    "delaware": "Delaware",
    "florida": "Florida",
    "georgia": "Georgia",
    "hawaii": "Hawaii",
    "idaho": "Idaho",
    "illinois": "Illinois",
    "indiana": "Indiana",
    "iowa": "Iowa",
    "kansas": "Kansas",
    "kentucky": "Kentucky",
    "louisiana": "Louisiana",
    "maine": "Maine",
    "maryland": "Maryland",
    "massachusetts": "Massachusetts",
    "michigan": "Michigan",
    "minnesota": "Minnesota",
    "mississippi": "Mississippi",
    "missouri": "Missouri",
    "montana": "Montana",
    "nebraska": "Nebraska",
    "nevada": "Nevada",
    "newhampshire": "New Hampshire",
    "newjersey": "New Jersey",
    "newmexico": "New Mexico",
    "newyork": "New York",
    "northcarolina": "North Carolina",
    "northdakota": "North Dakota",
    "ohio": "Ohio",
    "oklahoma": "Oklahoma",
    "oregon": "Oregon",
    "pennsylvania": "Pennsylvania",
    "rhodeisland": "Rhode Island",
    "southcarolina": "South Carolina",
    "southdakota": "South Dakota",
    "tennessee": "Tennessee",
    "texas": "Texas",
    "utah": "Utah",
    "vermont": "Vermont",
    "virginia": "Virginia",
    "washington": "Washington",
    "westvirginia": "West Virginia",
    "wisconsin": "Wisconsin",
    "wyoming": "Wyoming"
}