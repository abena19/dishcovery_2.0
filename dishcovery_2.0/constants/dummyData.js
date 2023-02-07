import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1001,
        name: "Spaghetti With Shrimp Sauce",
        image: images.spagetti,
        duration: "30 mins",
        difficulty: "Easy",
        country: "Italy",
        countryicon: "it",
        culturalContext: "This pasta shape seems to have first appeared in 1700s. Giulio Giacchero, author of a book on the economy of Genoa in the 1700’s, writes about trenette (another name for linguini) served with pesto, green beans and potatoes. \n\n He says it was the typical festive dish of Ligurian families of the time. In those days of course, the pasta would have been made mostly by hand and most probably with eggs. But it’s interesting that linguini with pesto, beans and potatoes is still a popular dish in Liguria today. This pasta shape seems to have first appeared in 1700s. Giulio Giacchero, author of a book on the economy of Genoa in the 1700’s, writes about trenette (another name for linguini) served with pesto, green beans and potatoes. \n\n He says it was the typical festive dish of Ligurian families of the time. In those days of course, the pasta would have been made mostly by hand and most probably with eggs. But it’s interesting that linguini with pesto, beans and potatoes is still a popular dish in Liguria today.",
        serving: 1,
        isBookmark: false,
        category: "Pasta",
        ingredients: [
            {
                id: 1,
                icon: icons.pasta,
                description: "Spaghetti pasta",
                quantity: "100g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Olive Oil",
                quantity: "2 tbsp"
            },
            {
                id: 3,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Campari tomatoes",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 6,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },

        ],
    },
    {
        id: 1002,
        name: "Malaysian Chicken Satay",
        image: images.satay,
        duration: "50 mins",
        difficulty: "Med",
        country: "Malaysia",
        countryicon: "my",
        culturalContext: "Chicken satay (middle), called satay ayam in Malaysia, comes from the northeast coast of that country and is marinated in a spice market's worth of seasonings, from ginger to fennel to coriander. Satay is the quintessence of fast food in southeast Asia. \n\nYou'll find it sizzling over hot coals practically 24 hours a day—at night markets, in busy hawker stalls, or offered by mobile vendors who prepare it to order. These cooks carry bamboo rods across their shoulders, balancing a basketful of the marinated meat and condiments on one side and a small grill filled with hot coals on the other.",
        serving: 10,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ],
    },
    {
        id: 1003,
        name: "Sarawak Laksa",
        image: images.laksa,
        duration: "30 mins",
        difficulty: "Hard",
        country: "Malaysia",
        countryicon: "my",
        culturalContext: "There are many styles of laksa; it is most commonly differentiated into 3 categories: Curry, Asam, and Sarawak. Sarawak Laksa is a comforting Malaysian noodle soup that is spicy, bright, warming, and full of flavour.\n\nIts origins began as Chinese men would set out onto the spice trade route and settle in their new villages, marrying the local Malay women. The result was a blending together of Chinese and Malay heritage. It is common to find traditional Chinese dishes that have been reformed using local spices and ingredients, thus creating a hybrid cuisine.",
        serving: 1,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
    },
    {
        id: 1004,
        name: "Nasi Lemak",
        image: images.nasiLemak,
        duration: "1 hour",
        difficulty: "Easy",
        country: "Malaysia",
        countryicon: "my",
        culturalContext: "Nasi Lemak's historical origins are humble—a cheap and easy meal for farmers to fill up on for a long day on the soil. It involves rice cooked in coconut milk (santan), served on a banana leaf and flavoured with local galangal roots and pandan leaves.\n\nWhat’s made it such an iconic and popular dish today, however, is its sheer diversity. Nasi Lemak can be typically served with boiled eggs, cucumber, onions and anchovies, but also with an array of delicious side-dishes to bring it to life.",
        serving: 10,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ],
    },

]

const bitterMelonRecipes = [
    {
        id: 1,
        name: "Ginisang Ampalaya (Sauteed Bitter Melon)",
        // name: "Carrot Tarrator",
        image: images.ampalaya,
        duration: "30 mins",
        difficulty: "Med",
        country: "Phillipines",
        countryicon: "ph",
        culturalContext: "Ginisang ampalaya, or sautéed bitter melon, is a popular dish in the Philippines. It is often cooked with eggs and ground meat, and is known for its distinct bitter flavor.\n\nIt is commonly used in traditional medicine to treat a variety of ailments, such as diabetes and high blood pressure. Because of its bitterness, it is also sometimes used in Philippine cuisine as a way to balance out the sweetness of other dishes.\n\nOverall, ginisang ampalaya is a beloved and well-known dish in the Philippines that is deeply rooted in the country's culture and history.\n\n\n\n\n\n",
        serving: 10,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ],
    },
    {
        id: 2,
        name: "Gutti Kakarakaya (Stuffed Bitter Gourd)",
        image: images.stuffedkarela,
        duration: "30 mins",
        difficulty: "Hard",
        country: "India",
        countryicon: "in",
        culturalContext: "Gutti Kakarakaya Andhra Style Stuffed Baby Bitter Gourd Fry is an indulgence and one of the best ways to enjoy the otherwise bitter vegetable. Growing up, the sister and I never liked this vegetable, so however made, we would not touch it. On some Sundays, Amma used to make this special stuffed bitter gourd fry and it used to take a lot of cajoling to get us to try the vegetable, otherwise we would just eat off the stuffing! It took growing up and entering our own kitchens that we started appreciating kakarakaya and this awesomeness that is the stuffed baby bitter gourds.",
        serving: 1,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
    },
    {
        id: 3,
        name: "Canh Kho Qua (Bitter Melon Soup)",
        image: images.canhkho,
        duration: "75 min",
        difficulty: "Hard",
        country: "Vietnam",
        countryicon: "vn",
        culturalContext: "Bitter melon soup is a traditional dish that most Vietnamese people will have on Lunar New Year. It is made with hollowed out bitter melons (bitter gourd), stuffed with a pork mince mixture then cooked in a light soup. A simple and healthy dish to be eaten with steaming white jasmine rice.",
        serving: 10,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ],
    },
    {
        id: 4,
        name: "Bitter Gourd Sambol",
        image: images.sambol,
        duration: "30 mins",
        difficulty: "Hard",
        country: "Sri Lanka",
        countryicon: "lk",
        culturalContext: "You may have tasted a variety of dishes using bitter gourd, but have you ever tasted Sri Lankan bitter gourd sambol? If not, don’t miss this chance to experience the taste of this delicious dish. Today, I am going to show you how to make the best bitter gourd sambol recipe in Sri Lankan style. Bitter gourd, also known as bitter melon is one of the healthiest vegetables in Sri Lanka. Few people avoid this vegetable because of its bitterness. This particular recipe is for the people who avoid bitter gourd for its bitterness. It is a tasty bitter gourd dish without bitterness.",
        serving: 1,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
    },
]

//https://www.fluentin3months.com/christmas-food/ see list
const christmasRecipes = [
    {
        id: 1,
        name: "Tamales",
        image: images.tamales,
        duration: "4 hrs",
        difficulty: "Hard",
        country: "Costa Rica",
        countryicon: "cr",
        culturalContext: "In Costa Rica, making tamales is a Christmas tradition and every family has their own secret recipe. The basis of tamales is a corn dough, wrapped in a banana leaf or corn husk, and then steamed. Some are stuffed with pork, and some with beef or chicken. Other foods that may be a part of the filling are garlic, onion, potatoes, or raisins.",
        serving: 10,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ],
    },
    {
        id: 2,
        name: "Bacalao (salted fish)",
        image: images.bacalao,
        duration: "9 hrs",
        difficulty: "Med",
        country: "Mexico",
        countryicon: "mx",
        culturalContext: "Bacalao, or salted cod, is not common in most countries during the holidays, but it’s a staple dish in Mexico. Before refrigeration existed, salting and preserving meats and fish was necessary. Today, this is no longer the case, but the practice still exists. And when, in the case of bacalao, the fish is rehydrated and cooked, the result is tender and delicious. In Mexico, the ingredients to make theBacalao a la Mexicana include tomatoes, ancho chiles, onions, cinnamon, potato and olives. It’s filling and it certainly warms you up!",
        serving: 1,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
    },
    {
        id: 3,
        name: "Japanese Christmas KFC",
        image: images.kaarage,
        duration: "45 min",
        difficulty: "Med",
        country: "Japan",
        countryicon: "jp",
        culturalContext: "In Japan, the Christmas season is the most wonderful time of the year for Kentucky Fried Chicken, or KFC, a fast food chain. Because about 3.6 million Japanese families eat KFC on Christmas Eve, they often need to reserve their meal up to two months in advance. During the 1970s, KFC put together a holiday party bucket and behind it, a brilliant marketing plan. At the time, Japan didn’t have many Christmas traditions. KFC filled that void by telling consumers “here is something that you should do on Christmas”. The trend caught on quickly.",
        serving: 10,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ],
    },
    {
        id: 4,
        name: "Melomakarona",
        image: images.melomakarona,
        duration: "1 hr",
        difficulty: "Easy",
        country: "Greece",
        countryicon: "gr",
        culturalContext: "Sweet orange-zest cookies soaked in honey and topped with walnuts? Yes, please!\n\nThis item is a holiday treat that regularly appears on tables in Greece. Known as melomakarona, these cookies are often said to taste much like baklava. Immediately after they’re baked, melomakarona are soaked in a honey-sugar water mixture then sprinkled with walnuts.\n\nThere is also a less traditional version of this recipe dipped in dark chocolate.",
        serving: 1,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
    },
]

// Fake liked recipes for demo
const likedRecipes = [
    {
        id: 4,
        name: "Melomakarona",
        image: images.melomakarona,
        duration: "1 hr",
        difficulty: "Easy",
        country: "Greece",
        countryicon: "gr",
        culturalContext: "Sweet orange-zest cookies soaked in honey and topped with walnuts? Yes, please! This item is a holiday treat that regularly appears on tables in Greece. Known as melomakarona, these cookies are often said to taste much like baklava. Immediately after they’re baked, melomakarona are soaked in a honey-sugar water mixture then sprinkled with walnuts. There is also a less traditional version of this recipe dipped in dark chocolate.",
        serving: 1,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
    },
    {
        id: 1001,
        name: "Spaghetti With Shrimp Sauce",
        image: images.spagetti,
        duration: "30 mins",
        difficulty: "Easy",
        country: "Italy",
        countryicon: "it",
        culturalContext: "This pasta shape seems to have first appeared in 1700s. Giulio Giacchero, author of a book on the economy of Genoa in the 1700’s, writes about trenette (another name for linguini) served with pesto, green beans and potatoes. \n\n He says it was the typical festive dish of Ligurian families of the time. In those days of course, the pasta would have been made mostly by hand and most probably with eggs. But it’s interesting that linguini with pesto, beans and potatoes is still a popular dish in Liguria today. This pasta shape seems to have first appeared in 1700s. Giulio Giacchero, author of a book on the economy of Genoa in the 1700’s, writes about trenette (another name for linguini) served with pesto, green beans and potatoes. \n\n He says it was the typical festive dish of Ligurian families of the time. In those days of course, the pasta would have been made mostly by hand and most probably with eggs. But it’s interesting that linguini with pesto, beans and potatoes is still a popular dish in Liguria today.",
        serving: 1,
        isBookmark: false,
        category: "Pasta",
        ingredients: [
            {
                id: 1,
                icon: icons.pasta,
                description: "Spaghetti pasta",
                quantity: "100g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Olive Oil",
                quantity: "2 tbsp"
            },
            {
                id: 3,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Campari tomatoes",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 6,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },

        ],
    },
    {
        id: 1002,
        name: "Malaysian Chicken Satay",
        image: images.satay,
        duration: "50 mins",
        difficulty: "Med",
        country: "Malaysia",
        countryicon: "my",
        culturalContext: "Chicken satay (middle), called satay ayam in Malaysia, comes from the northeast coast of that country and is marinated in a spice market's worth of seasonings, from ginger to fennel to coriander. Satay is the quintessence of fast food in southeast Asia. \n\nYou'll find it sizzling over hot coals practically 24 hours a day—at night markets, in busy hawker stalls, or offered by mobile vendors who prepare it to order. These cooks carry bamboo rods across their shoulders, balancing a basketful of the marinated meat and condiments on one side and a small grill filled with hot coals on the other.",
        serving: 10,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ],
    },
    {
        id: 1003,
        name: "Sarawak Laksa",
        image: images.laksa,
        duration: "30 mins",
        difficulty: "Hard",
        country: "Malaysia",
        countryicon: "my",
        culturalContext: "There are many styles of laksa; it is most commonly differentiated into 3 categories: Curry, Asam, and Sarawak. Sarawak Laksa is a comforting Malaysian noodle soup that is spicy, bright, warming, and full of flavour.\n\nIts origins began as Chinese men would set out onto the spice trade route and settle in their new villages, marrying the local Malay women. The result was a blending together of Chinese and Malay heritage. It is common to find traditional Chinese dishes that have been reformed using local spices and ingredients, thus creating a hybrid cuisine.",
        serving: 1,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
    },
    {
        id: 1004,
        name: "Nasi Lemak",
        image: images.nasiLemak,
        duration: "1 hour",
        difficulty: "Easy",
        country: "Malaysia",
        countryicon: "my",
        culturalContext: "Nasi Lemak's historical origins are humble—a cheap and easy meal for farmers to fill up on for a long day on the soil. It involves rice cooked in coconut milk (santan), served on a banana leaf and flavoured with local galangal roots and pandan leaves.\n\nWhat’s made it such an iconic and popular dish today, however, is its sheer diversity. Nasi Lemak can be typically served with boiled eggs, cucumber, onions and anchovies, but also with an array of delicious side-dishes to bring it to life.",
        serving: 10,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ],
    },
    {
        id: 1,
        name: "Tamales",
        image: images.tamales,
        duration: "4 hrs",
        difficulty: "Hard",
        country: "Costa Rica",
        countryicon: "cr",
        culturalContext: "In Costa Rica, making tamales is a Christmas tradition and every family has their own secret recipe. The basis of tamales is a corn dough, wrapped in a banana leaf or corn husk, and then steamed. Some are stuffed with pork, and some with beef or chicken. Other foods that may be a part of the filling are garlic, onion, potatoes, or raisins.",
        serving: 10,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ],
    },
    {
        id: 2,
        name: "Bacalao (salted fish)",
        image: images.bacalao,
        duration: "9 hrs",
        difficulty: "Med",
        country: "Mexico",
        countryicon: "mx",
        culturalContext: "Bacalao, or salted cod, is not common in most countries during the holidays, but it’s a staple dish in Mexico. Before refrigeration existed, salting and preserving meats and fish was necessary. Today, this is no longer the case, but the practice still exists. And when, in the case of bacalao, the fish is rehydrated and cooked, the result is tender and delicious. In Mexico, the ingredients to make theBacalao a la Mexicana include tomatoes, ancho chiles, onions, cinnamon, potato and olives. It’s filling and it certainly warms you up!",
        serving: 1,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
    },
    {
        id: 3,
        name: "Japanese Christmas KFC",
        image: images.kaarage,
        duration: "45 min",
        difficulty: "Med",
        country: "Japan",
        countryicon: "jp",
        culturalContext: "In Japan, the Christmas season is the most wonderful time of the year for Kentucky Fried Chicken, or KFC, a fast food chain. Because about 3.6 million Japanese families eat KFC on Christmas Eve, they often need to reserve their meal up to two months in advance. During the 1970s, KFC put together a holiday party bucket and behind it, a brilliant marketing plan. At the time, Japan didn’t have many Christmas traditions. KFC filled that void by telling consumers “here is something that you should do on Christmas”. The trend caught on quickly.",
        serving: 10,
        isBookmark: true,
        category: "Local",
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ],
    },
]


export default {
    trendingRecipes,
    bitterMelonRecipes,
    christmasRecipes,
    likedRecipes
}