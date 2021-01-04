
export const territories =
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
                    adjacent: ["North Africa", "East Africa, South Africa"]
                },
                {
                    name: 'East Africa',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["North Africa", "Middle East", "Egypt", "Congo", "South Africa", "Madagascar"]
                },
                {
                    name: 'Egypt',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["North Africa", "Middle East", "Southern Europe", "East Africa"]
                },
                {
                    name: 'North Africa',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Egypt", "Brazil", "Congo", "Madagascar", "Western Europe", "Southern Europe"]
                },
                {
                    name: 'Madagascar',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["East Africa", "South Africa"]
                },
                {
                    name: 'South Africa',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
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
                    adjacent: ["Russia", "India", "Middle East", "China", "Ural"]
                },
                {
                    name: 'China',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["India", "Middle East", "Ural", "Southeast Asia", "Mongolia", "Siberia"]
                },
                {
                    name: 'India',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["China", "Middle East", "Afganistan", "Southeast Asia"]
                },
                {
                    name: 'Irkutsk',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Mongolia", "Siberia", "Yakutsk", "Kamchatka"]
                },
                {
                    name: 'Japan',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Kamchatka", "Mongolia"]
                },
                {
                    name: 'Kamchatka',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Alaska", "Yakutsk", "Irkutsk", "Japan", "Mongolia"]
                },
                {
                    name: 'Middle East',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Russia", "Egypt", "East Africa", "Southern Europe", "India", "Afganistan"]
                },
                {
                    name: 'Mongolia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Japan", "Kamchatka", "Irkutsk", "Siberia", "China"]
                },
                {
                    name: 'Siberia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Ural", "China", "Mongolia", "Irkutsk", "Yakutsk"]
                },
                {
                    name: 'Southeast Asia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Indonesia", "China", "India"]
                },
                {
                    name: 'Ural',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Russia", "China", "Siberia", "Afganistan"]
                },
                {
                    name: 'Yakutsk',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
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
                    adjacent: ["New Guinea", "Western Australia"]
                },
                {
                    name: 'Indonesia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["New Guinea", "Western Australia", "Southeast Asia"]
                },
                {
                    name: 'New Guinea',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Eastern Australia", "Western Australia", "Indonesia"]
                },
                {
                    name: 'Western Australia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
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
                    adjacent: ["Iceland", "Western Europe", "Northern Europe", "Scandinavia"]
                },
                {
                    name: 'Iceland',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Great Britain", "Greenland", "Scandinavia"]
                },
                {
                    name: 'Scandinavia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Great Britain", "Iceland", "Russia", "Northern Europe"]
                },
                {
                    name: 'Russia',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Scandinavia", "Ural", "Afganistan", "Middle East", "Southern Europe", "Northern Europe"]
                },
                {
                    name: 'Northern Europe',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Scandinavia", "Southern Europe", "Western Europe", "Great Britain", "Russia"]
                },
                {
                    name: 'Western Europe',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Southern Europe", "Northern Europe", "Great Britain", "North Africa"]
                },
                {
                    name: 'Southern Europe',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
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
                    adjacent: ["Kamchatka", "Northwest Territory", "Alberta"]
                },
                {
                    name: 'Alberta',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Alaska", "Northwest Territory", "Ontario", "Western United States"]
                },
                {
                    name: 'Central America',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Eastern United States", "Western United States", "Venezuela"]
                },
                {
                    name: 'Eastern Canada',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Greenland", "Ontario", "Eastern United States"]
                },
                {
                    name: 'Eastern United States',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Eastern Canada", "Ontario", "Western United States", "Central America"]
                },
                {
                    name: 'Greenland',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Eastern Canada", "Ontario", "Iceland", "Northwest Territory"]
                },
                {
                    name: 'Ontario',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Greenland", "Northwest Territory", "Alberta", "Western United States", "Eastern United States", "Eastern Canada"]
                },
                {
                    name: 'Northwest Territory',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Greenland", "Alaska", "Alberta", "Ontario"]
                },
                {
                    name: 'Western United States',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
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
                    adjacent: ["Brazil", "Peru"]
                },
                {
                    name: 'Brazil',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["North Africa", "Peru", "Argentina", "Venezuela"]
                },
                {
                    name: 'Peru',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Brazil", "Argentina", "Venezuela"]
                },
                {
                    name: 'Venezuela',
                    owner: null,
                    minorCity: null,
                    majorCity: null,
                    adjacent: ["Brazil", "Peru", "Central America"]
                },
            ],
        },
    ]

