'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('filmes', [
      {
         "descricao":"In the action-packed adventure \"The Avengers\", Earth''s mightiest heroes must come together to stop the villainous Loki and his alien army from enslaving humanity.",
         "titulo":"The Avengers",
         "foto":"https://source.unsplash.com/random?sig=1",
         "idGenero":1,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"\"Superbad\" is a hilarious coming-of-age comedy that follows two socially awkward high school friends on a quest to buy alcohol for a party and impress their crushes.",
         "titulo":"Superbad",
         "foto":"https://source.unsplash.com/random?sig=2",
         "idGenero":2,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"In \"The Shawshank Redemption\", a banker named Andy Dufresne is wrongly convicted of murder and sentenced to life in Shawshank State Penitentiary, where he forms a bond with fellow inmate Red and plans his escape.",
         "titulo":"The Shawshank Redemption",
         "foto":"https://source.unsplash.com/random?sig=3",
         "idGenero":3,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"\"The Exorcist\" tells the story of a young girl named Regan who becomes possessed by a demonic entity, leading two priests to perform an exorcism to save her soul.",
         "titulo":"The Exorcist",
         "foto":"https://source.unsplash.com/random?sig=4",
         "idGenero":4,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"Set in a galaxy far, far away, \"Star Wars: A New Hope\" follows young farm boy Luke Skywalker as he joins forces with a Jedi Knight, a smuggler, and two droids to rescue Princess Leia from the clutches of the evil Empire.",
         "titulo":"Star Wars: A New Hope",
         "foto":"https://source.unsplash.com/random?sig=5",
         "idGenero":5,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"In \"The Notebook\", an elderly man reads a love story from his notebook to a fellow nursing home resident, recounting the epic romance between a young couple torn apart by social differences and war.",
         "titulo":"The Notebook",
         "foto":"https://source.unsplash.com/random?sig=6",
         "idGenero":6,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"In \"Se7en\", two detectives track down a serial killer who uses the seven deadly sins as his modus operandi, leading to a chilling game of cat and mouse.",
         "titulo":"Se7en",
         "foto":"https://source.unsplash.com/random?sig=7",
         "idGenero":7,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"\"The Lord of the Rings: The Fellowship of the Ring\" follows a young hobbit named Frodo Baggins as he embarks on a perilous journey to destroy a powerful ring and save Middle-earth from the dark lord Sauron.",
         "titulo":"The Lord of the Rings: The Fellowship of the Ring",
         "foto":"https://source.unsplash.com/random?sig=8",
         "idGenero":8,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"In \"Harry Potter and the Sorcerer's Stone\", a young boy named Harry Potter discovers he is a wizard and enrolls in Hogwarts School of Witchcraft and Wizardry, where he learns about his magical heritage and confronts the dark wizard Voldemort.",
         "titulo":"Harry Potter and the Sorcerer's Stone",
         "foto":"https://source.unsplash.com/random?sig=9",
         "idGenero":9,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"\"The Da Vinci Code\" follows symbologist Robert Langdon and cryptologist Sophie Neveu as they unravel a mystery involving a secret society, religious conspiracy, and hidden messages within famous works of art.",
         "titulo":"The Da Vinci Code",
         "foto":"https://source.unsplash.com/random?sig=10",
         "idGenero":10,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"In \"Toy Story\", a cowboy doll named Woody feels threatened by the arrival of a new spaceman action figure named Buzz Lightyear, leading to a rivalry that puts both toys in danger.",
         "titulo":"Toy Story",
         "foto":"https://source.unsplash.com/random?sig=11",
         "idGenero":11,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"\"The Godfather\" follows the powerful Corleone crime family as they navigate the world of organized crime, loyalty, and betrayal in post-war America.",
         "titulo":"The Godfather",
         "foto":"https://source.unsplash.com/random?sig=12",
         "idGenero":12,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"In \"Finding Nemo\", a timid clownfish named Marlin embarks on a journey across the ocean to rescue his son Nemo, who has been captured by a diver and placed in a fish tank in a dentist's office.",
         "titulo":"Finding Nemo",
         "foto":"https://source.unsplash.com/random?sig=13",
         "idGenero":13,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"\"Schindler's List\" tells the true story of Oskar Schindler, a German businessman who saved the lives of more than a thousand Polish Jews during the Holocaust by employing them in his factories.",
         "titulo":"Schindler's List",
         "foto":"https://source.unsplash.com/random?sig=14",
         "idGenero":14,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"In \"La La Land\", aspiring actress Mia and jazz musician Sebastian fall in love while pursuing their dreams in Los Angeles, but their relationship is tested by the realities of fame and success.",
         "titulo":"La La Land",
         "foto":"https://source.unsplash.com/random?sig=15",
         "idGenero":15,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"\"Saving Private Ryan\" follows Captain John Miller and his squad as they search for a paratrooper named Private James Ryan, whose three brothers have been killed in action during World War II.",
         "titulo":"Saving Private Ryan",
         "foto":"https://source.unsplash.com/random?sig=16",
         "idGenero":16,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"In \"The Good, the Bad and the Ugly\", three gunslingers compete to find a fortune in buried Confederate gold amid the chaos of the American Civil War.",
         "titulo":"The Good, the Bad and the Ugly",
         "foto":"https://source.unsplash.com/random?sig=17",
         "idGenero":17,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"\"Bowling for Columbine\" is a thought-provoking documentary by filmmaker Michael Moore that explores the causes of gun violence in America, focusing on the 1999 Columbine High School massacre.",
         "titulo":"Bowling for Columbine",
         "foto":"https://source.unsplash.com/random?sig=18",
         "idGenero":18,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"\"The Social Network\" chronicles the founding of Facebook by Mark Zuckerberg and his legal battles with former friends and business partners over ownership of the company.",
         "titulo":"The Social Network",
         "foto":"https://source.unsplash.com/random?sig=19",
         "idGenero":19,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"In \"Rocky\", an aspiring boxer named Rocky Balboa gets a once-in-a-lifetime shot at the heavyweight championship, facing off against the undefeated champion Apollo Creed.",
         "titulo":"Rocky",
         "foto":"https://source.unsplash.com/random?sig=20",
         "idGenero":20,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"\"Singin' in the Rain\" is a toe-tapping musical set in Hollywood during the transition from silent films to \"talkies\", following the romantic and career ups and downs of silent film star Don Lockwood and aspiring actress Kathy Selden.",
         "titulo":"Singin' in the Rain",
         "foto":"https://source.unsplash.com/random?sig=21",
         "idGenero":21,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"In \"Inception\", a thief skilled in the art of extracting information from dreams is tasked with planting an idea into the mind of a CEO by infiltrating his subconscious.",
         "titulo":"Inception",
         "foto":"https://source.unsplash.com/random?sig=22",
         "idGenero":22,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"\"The Dark Knight\" pits the vigilante Batman against the psychopathic Joker in a battle for the soul of Gotham City, testing the limits of heroism and morality.",
         "titulo":"The Dark Knight",
         "foto":"https://source.unsplash.com/random?sig=23",
         "idGenero":23,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"\"All the President's Men\" follows journalists Bob Woodward and Carl Bernstein as they investigate the Watergate scandal, ultimately leading to the resignation of President Richard Nixon.",
         "titulo":"All the President's Men",
         "foto":"https://source.unsplash.com/random?sig=24",
         "idGenero":24,
         "createdAt":"2024-05-12T15:21:40.242Z",
         "updatedAt":"2024-05-12T15:21:40.242Z"
      },
      {
         "descricao":"In \"The Hobbit: An Unexpected Journey\", Bilbo Baggins is swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug.",
         "titulo":"The Hobbit: An Unexpected Journey",
         "foto":"https://source.unsplash.com/random?sig=25",
         "idGenero":25,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"The Breakfast Club\" brings together five high school students from different social cliques who bond during Saturday detention, revealing their innermost secrets and struggles.",
         "titulo":"The Breakfast Club",
         "foto":"https://source.unsplash.com/random?sig=26",
         "idGenero":26,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"Braveheart\" follows Scottish warrior William Wallace as he leads a rebellion against the oppressive English rule in medieval Scotland, rallying his countrymen to fight for freedom.",
         "titulo":"Braveheart",
         "foto":"https://source.unsplash.com/random?sig=27",
         "idGenero":27,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"In \"Blade Runner\", a blade runner named Rick Deckard is tasked with hunting down and \"retiring\" rogue replicants in a dystopian future Los Angeles.",
         "titulo":"Blade Runner",
         "foto":"https://source.unsplash.com/random?sig=28",
         "idGenero":28,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"Pulp Fiction\" weaves together multiple interconnected stories involving gangsters, boxers, and hitmen in a non-linear narrative filled with wit, violence, and pop culture references.",
         "titulo":"Pulp Fiction",
         "foto":"https://source.unsplash.com/random?sig=29",
         "idGenero":29,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"Monty Python and the Holy Grail\" is a hilarious satire of the Arthurian legend, following King Arthur and his Knights of the Round Table as they embark on a quest for the Holy Grail.",
         "titulo":"Monty Python and the Holy Grail",
         "foto":"https://source.unsplash.com/random?sig=30",
         "idGenero":30,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"This Is Spinal Tap\" is a satirical mockumentary that follows the fictional British heavy metal band Spinal Tap as they embark on a disastrous tour of the United States.",
         "titulo":"This Is Spinal Tap",
         "foto":"https://source.unsplash.com/random?sig=31",
         "idGenero":31,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"In \"12 Angry Men\", twelve jurors deliberate the guilt or innocence of a young man accused of murder, revealing their biases and prejudices in a tense and gripping courtroom drama.",
         "titulo":"12 Angry Men",
         "foto":"https://source.unsplash.com/random?sig=32",
         "idGenero":32,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"Chinatown\" follows private investigator J.J. Gittes as he uncovers a web of corruption and scandal in 1930s Los Angeles while investigating a seemingly simple case of infidelity.",
         "titulo":"Chinatown",
         "foto":"https://source.unsplash.com/random?sig=33",
         "idGenero":33,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"Halloween\" follows escaped mental patient Michael Myers as he stalks and murders teenagers in the small town of Haddonfield, Illinois, on Halloween night.",
         "titulo":"Halloween",
         "foto":"https://source.unsplash.com/random?sig=34",
         "idGenero":34,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"Apocalypse Now\" follows Captain Benjamin Willard as he embarks on a secret mission to assassinate Colonel Kurtz, a rogue officer who has gone insane in the jungles of Vietnam.",
         "titulo":"Apocalypse Now",
         "foto":"https://source.unsplash.com/random?sig=35",
         "idGenero":35,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"Star Wars: The Empire Strikes Back\" continues the epic saga as the Rebel Alliance faces off against the Galactic Empire, while Luke Skywalker learns the truth about his parentage from Jedi Master Yoda.",
         "titulo":"Star Wars: The Empire Strikes Back",
         "foto":"https://source.unsplash.com/random?sig=36",
         "idGenero":36,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"James Bond: Casino Royale\" introduces audiences to a new era of James Bond as he earns his license to kill and faces off against terrorist financier Le Chiffre in a high-stakes poker game.",
         "titulo":"James Bond: Casino Royale",
         "foto":"https://source.unsplash.com/random?sig=37",
         "idGenero":37,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"In \"Night of the Living Dead\", a group of strangers must band together to survive the night when the dead rise from their graves and begin to feast on the living.",
         "titulo":"Night of the Living Dead",
         "foto":"https://source.unsplash.com/random?sig=38",
         "idGenero":38,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"Goodfellas\" follows the rise and fall of mobster Henry Hill as he becomes involved in organized crime, experiencing wealth, power, and betrayal.",
         "titulo":"Goodfellas",
         "foto":"https://source.unsplash.com/random?sig=39",
         "idGenero":39,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"Fargo\" is a darkly humorous black comedy that follows a pregnant police chief, a desperate car salesman, and two bumbling criminals as their lives intersect in a small Minnesota town.",
         "titulo":"Fargo",
         "foto":"https://source.unsplash.com/random?sig=40",
         "idGenero":40,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"In \"Jurassic Park\", a group of scientists and tourists are trapped on an island overrun by genetically engineered dinosaurs, leading to a desperate fight for survival.",
         "titulo":"Jurassic Park",
         "foto":"https://source.unsplash.com/random?sig=41",
         "idGenero":41,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"American History X\" follows former neo-Nazi Derek Vinyard as he tries to prevent his younger brother from following in his footsteps after being released from prison.",
         "titulo":"American History X",
         "foto":"https://source.unsplash.com/random?sig=42",
         "idGenero":42,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"In \"A Clockwork Orange\", a young delinquent named Alex leads a gang of thugs in a dystopian society, but his violent tendencies land him in a government rehabilitation program that uses controversial psychological conditioning techniques.",
         "titulo":"A Clockwork Orange",
         "foto":"https://source.unsplash.com/random?sig=43",
         "idGenero":43,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"Forrest Gump\" follows the life of a slow-witted but kind-hearted man from Alabama who unwittingly influences several significant historical events in the 20th century.",
         "titulo":"Forrest Gump",
         "foto":"https://source.unsplash.com/random?sig=44",
         "idGenero":44,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"The Matrix\" follows computer programmer Neo as he discovers the truth about reality and joins a rebellion against the machines that have enslaved humanity in a simulated world.",
         "titulo":"The Matrix",
         "foto":"https://source.unsplash.com/random?sig=45",
         "idGenero":45,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"The Silence of the Lambs\" follows FBI trainee Clarice Starling as she seeks the help of incarcerated cannibalistic serial killer Hannibal Lecter to catch another serial killer known as Buffalo Bill.",
         "titulo":"The Silence of the Lambs",
         "foto":"https://source.unsplash.com/random?sig=46",
         "idGenero":46,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"One Flew Over the Cuckoo''s Nest\" follows rebellious Randle McMurphy as he feuds with the authoritarian Nurse Ratched in a mental institution, inspiring his fellow patients to rebel against her oppressive rule.",
         "titulo":"One Flew Over the Cuckoo's Nest",
         "foto":"https://source.unsplash.com/random?sig=47",
         "idGenero":47,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"The Graduate\" follows recent college graduate Benjamin Braddock as he embarks on an affair with an older woman named Mrs. Robinson, leading to complications when he falls in love with her daughter Elaine.",
         "titulo":"The Graduate",
         "foto":"https://source.unsplash.com/random?sig=48",
         "idGenero":48,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"The Shining\" follows writer Jack Torrance as he becomes the winter caretaker of the isolated Overlook Hotel, where he experiences supernatural visions and descends into madness.",
         "titulo":"The Shining",
         "foto":"https://source.unsplash.com/random?sig=49",
         "idGenero":49,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      },
      {
         "descricao":"\"The Usual Suspects\" follows a group of criminals brought together in a police lineup who are then blackmailed into performing a high-stakes heist by the mysterious criminal mastermind Keyser Söze.",
         "titulo":"The Usual Suspects",
         "foto":"https://source.unsplash.com/random?sig=50",
         "idGenero":50,
         "createdAt":"2024-05-12T15:21:40.243Z",
         "updatedAt":"2024-05-12T15:21:40.243Z"
      }
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
