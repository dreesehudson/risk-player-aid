import React, { useState, useContext, createContext } from "react";

const DataContext = createContext({});

export default DataContext;

export function AppProvider({ children }) {
    const data = useAppProvider();
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export const useApp = () => {
    return useContext(DataContext);
};

function useAppProvider() {
    const [players, setPlayers] = useState([
        { id: 0, name: "a", faction: {} },
        { id: 1, name: "b", faction: {} },
        { id: 2, name: "c", faction: {} },
        { id: 3, name: "d", faction: {} },
        { id: 4, name: "e", faction: {} },
    ]);

    const [factions, setFactions] = useState(

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
    )



    const [regions, setRegions] = useState(
        [
            {
                bonus: 3,
                continent: "Africa",
                territories: [
                    {
                        name: 'Congo',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: true,
                        adjacent: ["North Africa", "East Africa, South Africa"]
                    },
                    {
                        name: 'East Africa',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: true,
                        biohazard: false,
                        adjacent: ["North Africa", "Middle East", "Egypt", "Congo", "South Africa", "Madagascar"]
                    },
                    {
                        name: 'Egypt',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: true,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["North Africa", "Middle East", "Southern Europe", "East Africa"]
                    },
                    {
                        name: 'North Africa',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: true,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Egypt", "Brazil", "Congo", "Madagascar", "Western Europe", "Southern Europe"]
                    },
                    {
                        name: 'Madagascar',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["East Africa", "South Africa"]
                    },
                    {
                        name: 'South Africa',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Madagascar", "Congo", "East Africa"]
                    },
                ],
            },
            {
                bonus: 7,
                continent: "Asia",
                territories: [
                    {
                        name: 'Afganistan',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Russia", "India", "Middle East", "China", "Ural"]
                    },
                    {
                        name: 'China',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["India", "Middle East", "Ural", "Southeast Asia", "Mongolia", "Siberia"]
                    },
                    {
                        name: 'India',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["China", "Middle East", "Afganistan", "Southeast Asia"]
                    },
                    {
                        name: 'Irkutsk',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Mongolia", "Siberia", "Yakutsk", "Kamchatka"]
                    },
                    {
                        name: 'Japan',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Kamchatka", "Mongolia"]
                    },
                    {
                        name: 'Kamchatka',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Alaska", "Yakutsk", "Irkutsk", "Japan", "Mongolia"]
                    },
                    {
                        name: 'Middle East',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Russia", "Egypt", "East Africa", "Southern Europe", "India", "Afganistan"]
                    },
                    {
                        name: 'Mongolia',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Japan", "Kamchatka", "Irkutsk", "Siberia", "China"]
                    },
                    {
                        name: 'Siberia',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Ural", "China", "Mongolia", "Irkutsk", "Yakutsk"]
                    },
                    {
                        name: 'Southeast Asia',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Indonesia", "China", "India"]
                    },
                    {
                        name: 'Ural',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Russia", "China", "Siberia", "Afganistan"]
                    },
                    {
                        name: 'Yakutsk',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Irkutsk", "Kamchatka", "Siberia"]
                    },
                ],
            },
            {
                bonus: 2,
                continent: "Australia",
                territories: [
                    {
                        name: 'Eastern Australia',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["New Guinea", "Western Australia"]
                    },
                    {
                        name: 'Indonesia',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["New Guinea", "Western Australia", "Southeast Asia"]
                    },
                    {
                        name: 'New Guinea',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Eastern Australia", "Western Australia", "Indonesia"]
                    },
                    {
                        name: 'Western Australia',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Eastern Australia", "New Guinea", "Indonesia"]
                    },
                ],
            },
            {
                bonus: 5,
                continent: "Europe",
                territories: [
                    {
                        name: 'Great Britain',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Iceland", "Western Europe", "Northern Europe", "Scandinavia"]
                    },
                    {
                        name: 'Iceland',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Great Britain", "Greenland", "Scandinavia"]
                    },
                    {
                        name: 'Scandinavia',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Great Britain", "Iceland", "Russia", "Northern Europe"]
                    },
                    {
                        name: 'Russia',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Scandinavia", "Ural", "Afganistan", "Middle East", "Southern Europe", "Northern Europe"]
                    },
                    {
                        name: 'Northern Europe',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Scandinavia", "Southern Europe", "Western Europe", "Great Britain", "Russia"]
                    },
                    {
                        name: 'Western Europe',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Southern Europe", "Northern Europe", "Great Britain", "North Africa"]
                    },
                    {
                        name: 'Southern Europe',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Northern Europe", "Western Europe", "North Africa", "Middle East", "Egypt", "Russia"]
                    },
                ],
            },
            {
                bonus: 5,
                continent: "North America",
                territories: [
                    {
                        name: 'Alaska',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Kamchatka", "Northwest Territory", "Alberta"]
                    },
                    {
                        name: 'Alberta',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Alaska", "Northwest Territory", "Ontario", "Western United States"]
                    },
                    {
                        name: 'Central America',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Eastern United States", "Western United States", "Venezuela"]
                    },
                    {
                        name: 'Eastern Canada',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Greenland", "Ontario", "Eastern United States"]
                    },
                    {
                        name: 'Eastern United States',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Eastern Canada", "Ontario", "Western United States", "Central America"]
                    },
                    {
                        name: 'Greenland',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Eastern Canada", "Ontario", "Iceland", "Northwest Territory"]
                    },
                    {
                        name: 'Ontario',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Greenland", "Northwest Territory", "Alberta", "Western United States", "Eastern United States", "Eastern Canada"]
                    },
                    {
                        name: 'Northwest Territory',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Greenland", "Alaska", "Alberta", "Ontario"]
                    },
                    {
                        name: 'Western United States',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Alberta", "Eastern United States", "Central America", "Ontario"]
                    },
                ],
            },
            {
                bonus: 2,
                continent: "South America",
                territories: [
                    {
                        name: 'Argentina',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Brazil", "Peru"]
                    },
                    {
                        name: 'Brazil',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["North Africa", "Peru", "Argentina", "Venezuela"]
                    },
                    {
                        name: 'Peru',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Brazil", "Argentina", "Venezuela"]
                    },
                    {
                        name: 'Venezuela',
                        control: null,
                        troops: 0,
                        minorCity: null,
                        majorCity: null,
                        worldCapital: null,
                        ammoShortage: false,
                        bunker: false,
                        mercenary: false,
                        biohazard: false,
                        adjacent: ["Brazil", "Peru", "Central America"]
                    },
                ],
            },
            // {
            //     bonus: ?,
            //     continent: "Alien Island",
            //     territories: [
            //         {
            //             name: 'Alien Island',
            //             control: null,
            //             minorCity: null,
            //             majorCity: null,
            //             ammoShortage: false,
            //             bunker: false,
            //             mercenary: false,
            //             biohazard: false,
            //             adjacent: []
            //         },
            //     ],
            // },
        ]
    );

    const [powers, setPowers] = useState(

        [
            {
                comebackPowers: [
                    {
                        name: "Well-Armed",
                        description: "Add 1 to all of your attack dice when attacking an HQ.",
                        claimed: false
                    },
                    {
                        name: "Resourceful",
                        description: "As long as you expanded into a city territory, you draw a resource card, even if you didn't conquer a territory.",
                        claimed: false
                    },
                    {
                        name: "Mobile",
                        description: "At the start of your turn, you may move one HQ you control to an adjacent territory you control. HQ's cannot share a territory.",
                        claimed: false
                    },
                    {
                        name: "Well-Supplied",
                        description: "When defending, you are unaffected by Ammo Shortage scars.",
                        claimed: false
                    },
                    {
                        name: "Stealthy",
                        description: "You may place some or all of your recruited troops into one unmarked, unoccupied territory. This is not an expansion.",
                        claimed: false
                    },
                    {
                        name: "Convincing",
                        description: "You gain one extra troop in Mercenary territories.",
                        claimed: false
                    }
                ],

                misslePowers: [
                    {
                        name: "EMP",
                        description: "Activate before a combat roll. Dice rolled for combat in that territory can't be modified for the rest of the turn.",
                        claimed: false
                    },
                    {
                        name: "Interference",
                        description: "Activate as a player draws a resource card. That card cannot be drawn. The player can draw any other eligible card.",
                        claimed: false
                    },
                    {

                        name: "Rally",
                        description: "Activate at the start of your turn. Place 2 troops in every HQ you control.",
                        claimed: false
                    },
                    {
                        name: "Recon",
                        description: "Activate before you would draw a coin card. You may take any face up territory card instead.",
                        claimed: false
                    },
                    {
                        name: "Bad Intel",
                        description: "Activate at the start of another player's turn. Deny that player one continent bonus, your choice.",
                        claimed: false
                    }
                ],

                privateMissions: [
                    {
                        name: "Advanced Training",
                        description: "When recruiting troops, turn in 10+ resources for troops.",
                        claimed: false
                    },
                    {
                        name: "Wide Border",
                        description: "Control 2 continents at the start of your turn.",
                        claimed: false
                    },
                    {
                        name: "Advanced Tactics",
                        description: "When recruiting troops, turn in at least 2 territory cards that have 4+ resources each.",
                        claimed: false
                    },
                    {
                        name: "Forced Occupation",
                        description: "Knock out or eliminate a player who has 3+ Resource Cards.",
                        claimed: false
                    },
                    {
                        name: "Guerilla Warefare",
                        description: "Control all the Bunker and Mercenary territories.",
                        claimed: false
                    },
                    {
                        name: "Urban Troop Surge",
                        description: "Control the World Capital and 3 Major Cities.",
                        claimed: false
                    },
                ],
                weaknesses: [
                    {
                        name: "Alien Collaborator",
                        description: "Add one to your resource total when turning in cards. Lose 2 extra troops when expanding into empty cities.",
                        claimed: false
                    },
                    {
                        name: "Primitive",
                        description: "You do not add population when recruiting troops.",
                        claimed: false
                    },
                    {
                        name: "Unpopular",
                        description: "You lose 1 extra troop when expanding into empty cities.",
                        claimed: false
                    },
                    {
                        name: "Short Sighted",
                        description: "You can only manuever into adjacent territories.",
                        claimed: false
                    },
                    {
                        name: "Cautious",
                        description: "When placing recruited troops, you can place them in no more than 2 territories.",
                        claimed: false
                    },
                    {
                        name: "Purist",
                        description: "You cannot have more than 2 coin cards. You must keep coin cards face up in front of you, not in your hand.",
                        claimed: false
                    },
                ],

                mutant: [
                    {
                        name: "Mass Hypnosis",
                        description: "When turning in cards, you may pick one of those territories. Until the beginning of your next turn, that territory cannot be attacked.",
                        claimed: false
                    },
                    {
                        name: "Unnatural Strength",
                        description: "When attacking, your 6's beat the defenders 6's",
                        claimed: false
                    },
                    {
                        name: "Unstable Cloning",
                        description: "When defending, if you roll natural doubles, add 1 additional defending troop to the territory if you still own it after the battle.",
                        claimed: false
                    },
                    {
                        name: "Mindshackle",
                        description: "After collecting a resource card, you may trade it for a random card from the hand of a player whose territory you conquered this turn.",
                        claimed: false
                    }
                ]
            }
        ]
    )

    return {
        players,
        setPlayers,
        regions,
        setRegions,
        factions,
        setFactions,
        powers,
        setPowers
    };
}