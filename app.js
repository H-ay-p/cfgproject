document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");
});

const daytrips = [
  {
    name: "Edale",
    overview: "Daniel Defoe called the Peak District “the most desolate, wild and abandoned” spot in all of England. Which is harsh. Sure, if you visit on a dank winter’s day, when the fog hangs low and the tiny lanes seem to narrow, it can be forbidding. But at most other times it’s a ravishing open-air playground, serving families, cyclists, cave aficionados, hikers and cutlery enthusiasts. Blissfully remote, yet accessible (it has its own little station), the village of Edale is the perfect jumping-off point.",
    highlight1: "Edale is the official start of the Pennine Way with many walks to choose from for all levels",
    highlight2: "‘The Moorland Centre’ provides a national focus for moorland research and an inspirational experience for visitors to the Peak District National Park.",
    highlight3: "Edale has a choice of pubs serving traditional English pub fare, great after a day of walking! Muddy boots welcome!",
    image: '<img class="main-image" src="images/edale.jpg">',
  },

  {
      name: "Castleton",
      overview: "Castleton is a beautiful village situated at the head of the Hope  Valley in the heart of the Peak District National Park. The village is popular for its show caves, history, shops, Christmas lights,  garland ceremony, Winnats Pass, Cave Dale and for those wishing to walk on the numerous footpaths in the area . Surrounded by hillsides and overlooked by Mam Tor (the shivering mountain) and the ancient Peveril Castle.",
      highlight1: "Imposing ruins of Peveril Castle stand high above the village. Mentioned in the Domesday survey, Peveril Castle is one of England’s earliest Norman fortresses.",
      highlight2: "Treak Cliff cavern and Blue John cavern contain beautiful caves decorated with stalactites formations, and blue john stone. Peak cavern is the resurgence of a huge river system.",
      highlight3: "The National Trust owns the pass and Treak Cliff hill to its west. It is very popular with visitors and is one of the most spectacular limestone gorges in the Peak. ",
      image: '<img class="main-image" src="images/castleton.jpg">',
    },

    {
      name: "Sheffield",
      overview: "Sheffield is the 2nd best city break in Europe for 2023, according to TimeOut, and the Observer Food Monthly says we are this year's UK foodie hotspot. That means amazing food, theatre, street art, gigs, bars, clubs and festivals whilst you also hike, climb, bike and run through the greenest city in the UK - with 1/3 of it sitting in the Peak District National Park.",
      highlight1: "The first Friday & Saturday of every month, Peddler showcase a fresh line-up of Britain's best street food traders, alongside craft beers, cocktails, live music and art. ",
      highlight2: "There are a number of street artists who live in Sheffield and make our walls into something beautiful for the city to be proud of.",
      highlight3: "Sheffield has the second largest theatre complex in the country after London.",
      image: '<img class="main-image" src="images/sheffield.jpg">',
    },

    {
      name: "Chatsworth House",
      overview: "Chatsworth House is renowned for the quality of its art, landscape and hospitality, and it has evolved through the centuries to reflect the tastes, passions and interests of succeeding generations.",
      highlight1: "Chatsworth contains works of art that span 4,000 years, from ancient Roman and Egyptian sculpture, and masterpieces by Rembrandt, Reynolds and Veronese, to work by modern artists including Lucian Freud, Edmund de Waal and David Nash.",
      highlight2: "Famous for its rich history, waterworks and sculptures, and its Victorian rock garden, there is something for everyone in the 105-acre Chatsworth Garden.",
      highlight3: "Discover the working farmyard and farmyard friends, plus a woodland playground with a rope park and zip line, as well as water and sand play. ",
      image: '<img class="main-image" src="images/Chatsworth.jpg">',
    },
  
    {
      name: "Alderly Edge",
      overview: "Whether you’re visiting Alderley Edge for its fun activities and significant historical sites or you’ve come for the birdwatching and wildlife, it’s an ideal place to visit with the whole family in any season.",
      highlight1: "Discover the wonderful variety of woodland birds at Alderley Edge including redstart, nuthatch, tree creeper, green and great spotted woodpeckers, woodcock, raven, goldcrest and bullfinches.",
      highlight2: "The Armada Beacon at Alderley Edge was built on top of a Bronze Age ‘bowl barrow’ or burial mound – and it's almost the highest point of the Edge.",
      highlight3: "Wizard Tea-room at Alderley Edge. Tea-room serving hot and cold food and drinks, with indoor and outdoor seating, plus takeaway option.",
      image: '<img class="main-image" src="images/alderly.jpeg">',
    },

    {
      name: "Southport",
      overview: "Southport beach boasts some of the most amazing views of the UK coast. With long sandy beaches and a coast-line that stretches 22 miles across Sefton, you can soak up the panoramic view of golden sands and admire the beauty of the coast. Whether it is on the beach or at the end of the Pier, we are confident you will be enthralled by what you see.",
      highlight1: "It’s the gateway to the coast and the Ribble Estuary and a place where the coast & countryside connect in one of the most amazing ways.",
      highlight2: "Traditional seaside - A trip on the Pier Tram to the Pavilion with antique penny slot machines, traditional seaside amusements and rides for the little ones at Silcock’s Funland.",
      highlight3: "Build sandcastles, fly a kite, play with a beach ball, explore rockpools or paddle in the safe bathing water.",
      image: '<img class="main-image" src="images/southport.jpg">',
    },

    {
      name: "Chester",
      overview: "Chester has the most complete city walls, the oldest racecourse and the largest Roman Amphitheatre in Britain, plus a 1000 year old Cathedral with Europe's finest example of medieval carvings - and of course the one and only 700 year old Rows galleries where shopping is a double delight.",
      highlight1: "Explore the city aboard an open top bus, take a guided walking tour of the city or enjoy a leisurely sail up the river on one of Chester’s pleasure cruises.",
      highlight2: "Chester is home to Chester Zoo, rated as one of the top 15 in the world.",
      highlight3: "Chester plays host to a whole assortment of unmissable events. No matter when you visit there's plenty to keep you entertained from theatre and music, to markets, exhibitions, and much more.",
      image: '<img class="main-image" src="images/chester.jpg">',
    },
]


function showdaytrip() {

  const destination = daytrips[Math.floor(Math.random() * daytrips.length)];
  document.getElementById("placename").textContent = destination.name;
  document.getElementById("highlight1").textContent = destination.highlight1;
  document.getElementById("highlight2").textContent = destination.highlight2;
  document.getElementById("highlight3").textContent = destination.highlight3;
  document.getElementById("overview").textContent = destination.overview;
  document.getElementById("image").innerHTML = destination.image;

  console.log(destination.name)
  console.log(destination.overview)
  console.log(destination.highlight1)
  console.log(destination.highlight2)
  console.log(destination.highlight3)
  console.log(destination.image)

}


