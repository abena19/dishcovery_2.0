# CS194H Dishcovery


Winter quarter 2023 CS147 project by Abena Ofosu, Defne Genç, Sharon Wambu, Kayla Kelly


## What is Dishcovery and When Would You Use It?

Dishcovery is a mobile app that helps users **identify, learn about, and cook** with foreign ingredients.

Using an image recognition API within the app’s central **scan** function, it can identify ingredients that users cannot yet recognise. A user can leverage the “scan” button in the navigation bar to scan an ingredient they would like to learn more about. 

Upon scanning an ingredient, the user will be able to view information about the ingredient’s origins, its flavour profile, its cultural context, and its health benefits. They can also access recipes using that ingredient and request recipes should they find that they cannot see a recipe they would like to use.

Some additional use cases for the app are: searching for dishes or recipes, searching by cuisine, manually searching by the name of an ingredient, and saving recipes they like for later use.

We anticipate that individuals may leverage this app in the grocery store or farmer’s market when they encounter an ingredient that they are unfamiliar with in order to learn more about it. We also support the use case of exploring new foreign foods to cook, both through keyword and filter search as well as based on an ingredient that they have scanned.

## Demo Video / Screenshots

See the course website here: http://web.stanford.edu/class/cs194h/projects/Dishcovery/

See demo video here: https://youtube.com/watch?v=A-7xRLSfNqs&si=EnSIkaIECMiOmarE


<img src="https://user-images.githubusercontent.com/105185472/226522179-77949ef5-30d7-420b-ba7b-2ca7f320fe65.png" width=25% height=25%> <img src="https://user-images.githubusercontent.com/105185472/226521998-25bfa44b-711f-4126-adaa-b6cba13524b7.png" width=25% height=25%><img src="https://user-images.githubusercontent.com/105185472/226522669-69e80325-db9e-475e-9c37-16e50dcde6d0.png" width=25% height=25%> <img src="https://user-images.githubusercontent.com/105185472/226522578-d6380563-dc64-4fe8-8fb3-fc98aa157bd6.png" width=25% height=25%>


## Limitations/ Hard-coded features
* The cultural context for the ingredients is manually sourced from our database
* The image recognition is fully functional with Clarifai AI's food recognition library (~500 food items) but we have limited the results to those available in our cultural context database. 
* The filter feature is not yet functional


## Try it on the Expo Go app

<img src="https://user-images.githubusercontent.com/91340575/206837958-316c8849-38a9-4499-8266-2d3b75fdd8b9.png" width=25% height=25%> 


