
export const factions =
    [
        {
            name: "Saharan Republic",
            color: "#CBB8A9",
            startingPower: ["You can manuever at any point during your turn.", "When making your maneuver, you may manuever between any two territories you control, even if they are not connected."],
            comebackPower: null,
            misslePower: null,
            weakness: null,
            privateMission: null,
            bringerOfNuclearFire: false,
            unlocked: true,
            gameHistory: [
                // array of objects including this info for each time the faction is played.
                // {i: 1,
                // player: '',
                // startingLocation:'',
                // endGame: null
                // }
            ],
        },
        {
            name: "Die Mechaniker",
            color: "#B0413E",
            startingPower: ["If your defense roll is two natural 6's, that territory cannot be attacked again for the rest of the turn.", "Your starting HQ is always treated as FORTIFIED when you defend it."],
            comebackPower: null,
            misslePower: null,
            weakness: null,
            privateMission: null,
            bringerOfNuclearFire: false,
            unlocked: true,
            gameHistory: [
                // array of objects including this info for each time the faction is played.
                // {i: 1,
                // player: '',
                // startingLocation:'',
                // endGame: null
                // }
            ],
        },
        {
            name: "Khan Industries",
            color: "#545859",
            startingPower: ["At the start of your turn, place one troop in each territory that has a HQ you control", "When drawing a territory card, you may place one troop into that territory, if you control it."],
            comebackPower: null,
            misslePower: null,
            weakness: null,
            privateMission: null,
            bringerOfNuclearFire: false,
            unlocked: true,
            gameHistory: [
                // array of objects including this info for each time the faction is played.
                // {i: 1,
                // player: '',
                // startingLocation:'',
                // endGame: null
                // }
            ],
        },
        {
            name: "Imperial Balkania",
            color: "#541E50",
            startingPower: ["When recruiting troops, round up when dividing your territory and population by 3, not down.", "You still draw a resource card at the end of a turn where you expanded into 4+ territories, even if you didn't conquer a territory."],
            comebackPower: null,
            misslePower: null,
            weakness: null,
            privateMission: null,
            bringerOfNuclearFire: false,
            unlocked: true,
            gameHistory: [
                // array of objects including this info for each time the faction is played.
                // {i: 1,
                // player: '',
                // startingLocation:'',
                // endGame: null
                // }
            ],
        },
        {
            name: "Enclave of the Bear",
            color: "#3E4921",
            startingPower: ["The defender subtracts 1 from his/her lower defense die in the first territory you attack during your turn", "If your attack roll is a natural three-of-a-kind and at least one defending troop is defeated, you conquer the territory. Remove all defending troops."],
            comebackPower: null,
            misslePower: null,
            weakness: null,
            privateMission: null,
            bringerOfNuclearFire: false,
            unlocked: true,
            gameHistory: [
                // array of objects including this info for each time the faction is played.
                // {i: 1,
                // player: '',
                // startingLocation:'',
                // endGame: null
                // }
            ],
        },
        {
            name: "Mutants",
            color: "#FF5100",
            startingPower: "You don't lose troops in the fallout territory or from mutant event cards.",
            comebackPower: ["When attacking the Bringer of Nuclear Fire's troops., you may re-roll 1's on all attack dice until they are no longer 1's", "Bio-hazard and mercenary scar effects are reversed for you."],
            weakness: null,
            privateMission: "Controlling all bio-hazard territories and the fallout territory earns you 1 Red Star.",
            unlocked: false,
            gameHistory: [
                // array of objects including this info for each time the faction is played.
                // {i: 1,
                // player: '',
                // startingLocation:'',
                // endGame: null
                // }
            ],
        },
        {
            name: "Aliens",
            color: "#CCFFCC",
            startingPower: "You do not lose troops when expanding into cities.",
            comebackPower: "When recruiting, you get 2 extra troops if you control Alien Island and 1 extra troop for each ruin you control.",
            privateMission: "Controlling every city on the board earns you 2 Red Stars.",
            bringerOfNuclearFire: false,
            unlocked: false,
            gameHistory: [
                // array of objects including this info for each time the faction is played.
                // {i: 1,
                // player: '',
                // startingLocation:'',
                // endGame: null
                // }
            ],
        },

    ]

