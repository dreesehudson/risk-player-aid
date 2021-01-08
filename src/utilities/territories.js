
export const worldMap =
    [
        {
            bonus: 3,
            continent: "Africa",
            territories: [
                {
                    name: 'Congo',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["North Africa", "East Africa, South Africa"]
                },
                {
                    name: 'East Africa',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["North Africa", "Middle East", "Egypt", "Congo", "South Africa", "Madagascar"]
                },
                {
                    name: 'Egypt',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["North Africa", "Middle East", "Southern Europe", "East Africa"]
                },
                {
                    name: 'North Africa',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Egypt", "Brazil", "Congo", "Madagascar", "Western Europe", "Southern Europe"]
                },
                {
                    name: 'Madagascar',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["East Africa", "South Africa"]
                },
                {
                    name: 'South Africa',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
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
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Russia", "India", "Middle East", "China", "Ural"]
                },
                {
                    name: 'China',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["India", "Middle East", "Ural", "Southeast Asia", "Mongolia", "Siberia"]
                },
                {
                    name: 'India',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["China", "Middle East", "Afganistan", "Southeast Asia"]
                },
                {
                    name: 'Irkutsk',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Mongolia", "Siberia", "Yakutsk", "Kamchatka"]
                },
                {
                    name: 'Japan',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Kamchatka", "Mongolia"]
                },
                {
                    name: 'Kamchatka',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Alaska", "Yakutsk", "Irkutsk", "Japan", "Mongolia"]
                },
                {
                    name: 'Middle East',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Russia", "Egypt", "East Africa", "Southern Europe", "India", "Afganistan"]
                },
                {
                    name: 'Mongolia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Japan", "Kamchatka", "Irkutsk", "Siberia", "China"]
                },
                {
                    name: 'Siberia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Ural", "China", "Mongolia", "Irkutsk", "Yakutsk"]
                },
                {
                    name: 'Southeast Asia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Indonesia", "China", "India"]
                },
                {
                    name: 'Ural',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Russia", "China", "Siberia", "Afganistan"]
                },
                {
                    name: 'Yakutsk',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
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
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["New Guinea", "Western Australia"]
                },
                {
                    name: 'Indonesia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["New Guinea", "Western Australia", "Southeast Asia"]
                },
                {
                    name: 'New Guinea',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Eastern Australia", "Western Australia", "Indonesia"]
                },
                {
                    name: 'Western Australia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
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
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Iceland", "Western Europe", "Northern Europe", "Scandinavia"]
                },
                {
                    name: 'Iceland',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Great Britain", "Greenland", "Scandinavia"]
                },
                {
                    name: 'Scandinavia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Great Britain", "Iceland", "Russia", "Northern Europe"]
                },
                {
                    name: 'Russia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Scandinavia", "Ural", "Afganistan", "Middle East", "Southern Europe", "Northern Europe"]
                },
                {
                    name: 'Northern Europe',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Scandinavia", "Southern Europe", "Western Europe", "Great Britain", "Russia"]
                },
                {
                    name: 'Western Europe',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Southern Europe", "Northern Europe", "Great Britain", "North Africa"]
                },
                {
                    name: 'Southern Europe',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
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
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Kamchatka", "Northwest Territory", "Alberta"]
                },
                {
                    name: 'Alberta',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Alaska", "Northwest Territory", "Ontario", "Western United States"]
                },
                {
                    name: 'Central America',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Eastern United States", "Western United States", "Venezuela"]
                },
                {
                    name: 'Eastern Canada',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Greenland", "Ontario", "Eastern United States"]
                },
                {
                    name: 'Eastern United States',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Eastern Canada", "Ontario", "Western United States", "Central America"]
                },
                {
                    name: 'Greenland',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Eastern Canada", "Ontario", "Iceland", "Northwest Territory"]
                },
                {
                    name: 'Ontario',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Greenland", "Northwest Territory", "Alberta", "Western United States", "Eastern United States", "Eastern Canada"]
                },
                {
                    name: 'Northwest Territory',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Greenland", "Alaska", "Alberta", "Ontario"]
                },
                {
                    name: 'Western United States',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
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
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Brazil", "Peru"]
                },
                {
                    name: 'Brazil',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["North Africa", "Peru", "Argentina", "Venezuela"]
                },
                {
                    name: 'Peru',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Brazil", "Argentina", "Venezuela"]
                },
                {
                    name: 'Venezuela',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    ammoShortage: false,
                    bunker: false,
                    adjacent: ["Brazil", "Peru", "Central America"]
                },
            ],
        },
    ]



// export const gameMap =
//     [
//         {
//             continent: "Africa",
//             territories: [
//                 {
//                     name: 'Congo',
//                 },
//                 {
//                     name: 'East Africa',
//                 },
//                 {
//                     name: 'Egypt',
//                 },
//             ]
//         },
//         {
//             continent: "South America",
//             territories: [
//                 {
//                     name: 'Argentina'
//                 },
//                 {
//                     name: 'Brazil'
//                 },
//                 {
//                     name: 'Peru'
//                 },
//                 {
//                     name: 'Venezuela'
//                 },
//             ],
//         }
//     ]

// {
//     worldMap.map((item, idx) => {
//         return (
//             <>
//                 <ListGroupItem key={idx}><h3>{item.continent} <span class="badge rounded-pill bg-secondary ml-3 text-light">{item.bonus}</span></h3></ListGroupItem>
//                 <ListGroup>
//                     {
//                         item.map((i, key) => {
//                             return (
//                                 <ListGroupItem key={key}><h5>{i.territories}</h5></ListGroupItem>
//                             )
//                         })
//                     }
//                 </ListGroup>
//             </>
//         )
//     })
// }