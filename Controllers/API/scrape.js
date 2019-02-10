// var axios = require("axios");
// var cheerio = require("cheerio");
// var Article = require("./../../models/article")

// module.exports = function (app) {
//   app.get("/api/scrape", function (req, res) {
//     console.log("hi")
//     // Making a request via axios for the Reddit website
//     axios.get("https://old.reddit.com/r/webdev").then(function (response) {
//       // console.log("response", response)
//       // Load the Response into cheerio and save it to a variable
//       // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
//       var $ = cheerio.load(response.data);

//       // An empty array to save the data that we'll scrape
//       var results = [];

//       // With cheerio, find each p-tag with the "title" class
//       // (i: iterator. element: the current element)
//       $("p.title").each(function (i, element) {

//         // Save the text of the element in a "title" variable
//         var title = $(element).text();

//         // In the currently selected element, look at its child elements (i.e., its a-tags),
//         // then save the values for any "href" attributes that the child elements may have
//         var link = $(element).children().attr("href");

//         // Save these results in an object that we'll push into the results array we defined earlier
//         results.push({
//           title: title,
//           link: link
//         });
//       });

//       // Log the results once you've looped through each of the elements found with cheerio
//       // console.log(results);
//       Article.create(results, function (error, data) {
//         if (error) {
//           console.log(error)
//         }
//         console.log(data)
//         res.json("Success!");
//       })
//     });
//   })

//   app.get("/articles", function(req, res) {
//     //query database
//     //send results back to user
//   })
// }

  

