export const worldMap =
    [
        {
            bonus: 3,
            continent: "Africa",
            territories: [
                {
                    name: 'Congo',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["North Africa", "East Africa, South Africa"]
                },
                {
                    name: 'East Africa',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["North Africa", "Middle East", "Egypt", "Congo", "South Africa", "Madagascar"]
                },
                {
                    name: 'Egypt',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["North Africa", "Middle East", "Southern Europe", "East Africa"]
                },
                {
                    name: 'North Africa',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Egypt", "Brazil", "Congo", "Madagascar", "Western Europe", "Southern Europe"]
                },
                {
                    name: 'Madagascar',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["East Africa", "South Africa"]
                },
                {
                    name: 'South Africa',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
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
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Russia", "India", "Middle East", "China", "Ural"]
                },
                {
                    name: 'China',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["India", "Middle East", "Ural", "Southeast Asia", "Mongolia", "Siberia"]
                },
                {
                    name: 'India',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["China", "Middle East", "Afganistan", "Southeast Asia"]
                },
                {
                    name: 'Irkutsk',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Mongolia", "Siberia", "Yakutsk", "Kamchatka"]
                },
                {
                    name: 'Japan',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Kamchatka", "Mongolia"]
                },
                {
                    name: 'Kamchatka',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Alaska", "Yakutsk", "Irkutsk", "Japan", "Mongolia"]
                },
                {
                    name: 'Middle East',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Russia", "Egypt", "East Africa", "Southern Europe", "India", "Afganistan"]
                },
                {
                    name: 'Mongolia',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Japan", "Kamchatka", "Irkutsk", "Siberia", "China"]
                },
                {
                    name: 'Siberia',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Ural", "China", "Mongolia", "Irkutsk", "Yakutsk"]
                },
                {
                    name: 'Southeast Asia',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Indonesia", "China", "India"]
                },
                {
                    name: 'Ural',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Russia", "China", "Siberia", "Afganistan"]
                },
                {
                    name: 'Yakutsk',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
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
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["New Guinea", "Western Australia"]
                },
                {
                    name: 'Indonesia',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["New Guinea", "Western Australia", "Southeast Asia"]
                },
                {
                    name: 'New Guinea',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Eastern Australia", "Western Australia", "Indonesia"]
                },
                {
                    name: 'Western Australia',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
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
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Iceland", "Western Europe", "Northern Europe", "Scandinavia"]
                },
                {
                    name: 'Iceland',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Great Britain", "Greenland", "Scandinavia"]
                },
                {
                    name: 'Scandinavia',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Great Britain", "Iceland", "Russia", "Northern Europe"]
                },
                {
                    name: 'Russia',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Scandinavia", "Ural", "Afganistan", "Middle East", "Southern Europe", "Northern Europe"]
                },
                {
                    name: 'Northern Europe',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Scandinavia", "Southern Europe", "Western Europe", "Great Britain", "Russia"]
                },
                {
                    name: 'Western Europe',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Southern Europe", "Northern Europe", "Great Britain", "North Africa"]
                },
                {
                    name: 'Southern Europe',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
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
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Kamchatka", "Northwest Territory", "Alberta"]
                },
                {
                    name: 'Alberta',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Alaska", "Northwest Territory", "Ontario", "Western United States"]
                },
                {
                    name: 'Central America',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Eastern United States", "Western United States", "Venezuela"]
                },
                {
                    name: 'Eastern Canada',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Greenland", "Ontario", "Eastern United States"]
                },
                {
                    name: 'Eastern United States',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Eastern Canada", "Ontario", "Western United States", "Central America"]
                },
                {
                    name: 'Greenland',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Eastern Canada", "Ontario", "Iceland", "Northwest Territory"]
                },
                {
                    name: 'Ontario',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Greenland", "Northwest Territory", "Alberta", "Western United States", "Eastern United States", "Eastern Canada"]
                },
                {
                    name: 'Northwest Territory',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Greenland", "Alaska", "Alberta", "Ontario"]
                },
                {
                    name: 'Western United States',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
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
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Brazil", "Peru"]
                },
                {
                    name: 'Brazil',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["North Africa", "Peru", "Argentina", "Venezuela"]
                },
                {
                    name: 'Peru',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Brazil", "Argentina", "Venezuela"]
                },
                {
                    name: 'Venezuela',
                    control: null,
                    minorCity: null,
                    majorCity: null,
                    worldCapital: null,
                    ammoShortage: false,
                    bunker: false,
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
        //             adjacent: []
        //         },
        //     ],
        // },
    ]

