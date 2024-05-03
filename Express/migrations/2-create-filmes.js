/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('filmes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      idGenero: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'generos',
          },
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    queryInterface.bulkInsert('filmes', [
      { descricao: 'In the action-packed adventure "The Avengers", Earth\'\'s mightiest heroes must come together to stop the villainous Loki and his alien army from enslaving humanity.', titulo: 'The Avengers', foto: 'avengers.jpg', idGenero: 1, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Superbad" is a hilarious coming-of-age comedy that follows two socially awkward high school friends on a quest to buy alcohol for a party and impress their crushes.', titulo: 'Superbad', foto: 'superbad.jpg', idGenero: 2, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "The Shawshank Redemption", a banker named Andy Dufresne is wrongly convicted of murder and sentenced to life in Shawshank State Penitentiary, where he forms a bond with fellow inmate Red and plans his escape.', titulo: 'The Shawshank Redemption', foto: 'shawshank.jpg', idGenero: 3, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"The Exorcist" tells the story of a young girl named Regan who becomes possessed by a demonic entity, leading two priests to perform an exorcism to save her soul.', titulo: 'The Exorcist', foto: 'exorcist.jpg', idGenero: 4, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Set in a galaxy far, far away, "Star Wars: A New Hope" follows young farm boy Luke Skywalker as he joins forces with a Jedi Knight, a smuggler, and two droids to rescue Princess Leia from the clutches of the evil Empire.', titulo: 'Star Wars: A New Hope', foto: 'starwars.jpg', idGenero: 5, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "The Notebook", an elderly man reads a love story from his notebook to a fellow nursing home resident, recounting the epic romance between a young couple torn apart by social differences and war.', titulo: 'The Notebook', foto: 'notebook.jpg', idGenero: 6, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "Se7en", two detectives track down a serial killer who uses the seven deadly sins as his modus operandi, leading to a chilling game of cat and mouse.', titulo: 'Se7en', foto: 'se7en.jpg', idGenero: 7, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"The Lord of the Rings: The Fellowship of the Ring" follows a young hobbit named Frodo Baggins as he embarks on a perilous journey to destroy a powerful ring and save Middle-earth from the dark lord Sauron.', titulo: 'The Lord of the Rings: The Fellowship of the Ring', foto: 'lotr.jpg', idGenero: 8, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "Harry Potter and the Sorcerer\'s Stone", a young boy named Harry Potter discovers he is a wizard and enrolls in Hogwarts School of Witchcraft and Wizardry, where he learns about his magical heritage and confronts the dark wizard Voldemort.', titulo: 'Harry Potter and the Sorcerer\'s Stone', foto: 'harrypotter.jpg', idGenero: 9, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"The Da Vinci Code" follows symbologist Robert Langdon and cryptologist Sophie Neveu as they unravel a mystery involving a secret society, religious conspiracy, and hidden messages within famous works of art.', titulo: 'The Da Vinci Code', foto: 'davinci.jpg', idGenero: 10, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "Toy Story", a cowboy doll named Woody feels threatened by the arrival of a new spaceman action figure named Buzz Lightyear, leading to a rivalry that puts both toys in danger.', titulo: 'Toy Story', foto: 'toystory.jpg', idGenero: 11, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"The Godfather" follows the powerful Corleone crime family as they navigate the world of organized crime, loyalty, and betrayal in post-war America.', titulo: 'The Godfather', foto: 'godfather.jpg', idGenero: 12, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "Finding Nemo", a timid clownfish named Marlin embarks on a journey across the ocean to rescue his son Nemo, who has been captured by a diver and placed in a fish tank in a dentist\'s office.', titulo: 'Finding Nemo', foto: 'nemo.jpg', idGenero: 13, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Schindler\'s List" tells the true story of Oskar Schindler, a German businessman who saved the lives of more than a thousand Polish Jews during the Holocaust by employing them in his factories.', titulo: 'Schindler\'s List', foto: 'schindler.jpg', idGenero: 14, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "La La Land", aspiring actress Mia and jazz musician Sebastian fall in love while pursuing their dreams in Los Angeles, but their relationship is tested by the realities of fame and success.', titulo: 'La La Land', foto: 'lalaland.jpg', idGenero: 15, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Saving Private Ryan" follows Captain John Miller and his squad as they search for a paratrooper named Private James Ryan, whose three brothers have been killed in action during World War II.', titulo: 'Saving Private Ryan', foto: 'savingprivateryan.jpg', idGenero: 16, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "The Good, the Bad and the Ugly", three gunslingers compete to find a fortune in buried Confederate gold amid the chaos of the American Civil War.', titulo: 'The Good, the Bad and the Ugly', foto: 'goodbadugly.jpg', idGenero: 17, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Bowling for Columbine" is a thought-provoking documentary by filmmaker Michael Moore that explores the causes of gun violence in America, focusing on the 1999 Columbine High School massacre.', titulo: 'Bowling for Columbine', foto: 'bowlingcolumbine.jpg', idGenero: 18, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"The Social Network" chronicles the founding of Facebook by Mark Zuckerberg and his legal battles with former friends and business partners over ownership of the company.', titulo: 'The Social Network', foto: 'socialnetwork.jpg', idGenero: 19, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "Rocky", an aspiring boxer named Rocky Balboa gets a once-in-a-lifetime shot at the heavyweight championship, facing off against the undefeated champion Apollo Creed.', titulo: 'Rocky', foto: 'rocky.jpg', idGenero: 20, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Singin\' in the Rain" is a toe-tapping musical set in Hollywood during the transition from silent films to "talkies", following the romantic and career ups and downs of silent film star Don Lockwood and aspiring actress Kathy Selden.', titulo: 'Singin\' in the Rain', foto: 'singingrain.jpg', idGenero: 21, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "Inception", a thief skilled in the art of extracting information from dreams is tasked with planting an idea into the mind of a CEO by infiltrating his subconscious.', titulo: 'Inception', foto: 'inception.jpg', idGenero: 22, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"The Dark Knight" pits the vigilante Batman against the psychopathic Joker in a battle for the soul of Gotham City, testing the limits of heroism and morality.', titulo: 'The Dark Knight', foto: 'darkknight.jpg', idGenero: 23, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"All the President\'s Men" follows journalists Bob Woodward and Carl Bernstein as they investigate the Watergate scandal, ultimately leading to the resignation of President Richard Nixon.', titulo: 'All the President\'s Men', foto: 'allpresidentsmen.jpg', idGenero: 24, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "The Hobbit: An Unexpected Journey", Bilbo Baggins is swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug.', titulo: 'The Hobbit: An Unexpected Journey', foto: 'hobbit.jpg', idGenero: 25, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"The Breakfast Club" brings together five high school students from different social cliques who bond during Saturday detention, revealing their innermost secrets and struggles.', titulo: 'The Breakfast Club', foto: 'breakfastclub.jpg', idGenero: 26, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Braveheart" follows Scottish warrior William Wallace as he leads a rebellion against the oppressive English rule in medieval Scotland, rallying his countrymen to fight for freedom.', titulo: 'Braveheart', foto: 'braveheart.jpg', idGenero: 27, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "Blade Runner", a blade runner named Rick Deckard is tasked with hunting down and "retiring" rogue replicants in a dystopian future Los Angeles.', titulo: 'Blade Runner', foto: 'bladerunner.jpg', idGenero: 28, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Pulp Fiction" weaves together multiple interconnected stories involving gangsters, boxers, and hitmen in a non-linear narrative filled with wit, violence, and pop culture references.', titulo: 'Pulp Fiction', foto: 'pulpfiction.jpg', idGenero: 29, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Monty Python and the Holy Grail" is a hilarious satire of the Arthurian legend, following King Arthur and his Knights of the Round Table as they embark on a quest for the Holy Grail.', titulo: 'Monty Python and the Holy Grail', foto: 'montypython.jpg', idGenero: 30, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"This Is Spinal Tap" is a satirical mockumentary that follows the fictional British heavy metal band Spinal Tap as they embark on a disastrous tour of the United States.', titulo: 'This Is Spinal Tap', foto: 'spinaltap.jpg', idGenero: 31, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "12 Angry Men", twelve jurors deliberate the guilt or innocence of a young man accused of murder, revealing their biases and prejudices in a tense and gripping courtroom drama.', titulo: '12 Angry Men', foto: '12angrymen.jpg', idGenero: 32, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Chinatown" follows private investigator J.J. Gittes as he uncovers a web of corruption and scandal in 1930s Los Angeles while investigating a seemingly simple case of infidelity.', titulo: 'Chinatown', foto: 'chinatown.jpg', idGenero: 33, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Halloween" follows escaped mental patient Michael Myers as he stalks and murders teenagers in the small town of Haddonfield, Illinois, on Halloween night.', titulo: 'Halloween', foto: 'halloween.jpg', idGenero: 34, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Apocalypse Now" follows Captain Benjamin Willard as he embarks on a secret mission to assassinate Colonel Kurtz, a rogue officer who has gone insane in the jungles of Vietnam.', titulo: 'Apocalypse Now', foto: 'apocalypsenow.jpg', idGenero: 35, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Star Wars: The Empire Strikes Back" continues the epic saga as the Rebel Alliance faces off against the Galactic Empire, while Luke Skywalker learns the truth about his parentage from Jedi Master Yoda.', titulo: 'Star Wars: The Empire Strikes Back', foto: 'empirestrikesback.jpg', idGenero: 36, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"James Bond: Casino Royale" introduces audiences to a new era of James Bond as he earns his license to kill and faces off against terrorist financier Le Chiffre in a high-stakes poker game.', titulo: 'James Bond: Casino Royale', foto: 'casinoroyale.jpg', idGenero: 37, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "Night of the Living Dead", a group of strangers must band together to survive the night when the dead rise from their graves and begin to feast on the living.', titulo: 'Night of the Living Dead', foto: 'nightlivingdead.jpg', idGenero: 38, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Goodfellas" follows the rise and fall of mobster Henry Hill as he becomes involved in organized crime, experiencing wealth, power, and betrayal.', titulo: 'Goodfellas', foto: 'goodfellas.jpg', idGenero: 39, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Fargo" is a darkly humorous black comedy that follows a pregnant police chief, a desperate car salesman, and two bumbling criminals as their lives intersect in a small Minnesota town.', titulo: 'Fargo', foto: 'fargo.jpg', idGenero: 40, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "Jurassic Park", a group of scientists and tourists are trapped on an island overrun by genetically engineered dinosaurs, leading to a desperate fight for survival.', titulo: 'Jurassic Park', foto: 'jurassicpark.jpg', idGenero: 41, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"American History X" follows former neo-Nazi Derek Vinyard as he tries to prevent his younger brother from following in his footsteps after being released from prison.', titulo: 'American History X', foto: 'americanhistoryx.jpg', idGenero: 42, createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'In "A Clockwork Orange", a young delinquent named Alex leads a gang of thugs in a dystopian society, but his violent tendencies land him in a government rehabilitation program that uses controversial psychological conditioning techniques.', titulo: 'A Clockwork Orange', foto: 'clockworkorange.jpg', idGenero: 43, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"Forrest Gump" follows the life of a slow-witted but kind-hearted man from Alabama who unwittingly influences several significant historical events in the 20th century.', titulo: 'Forrest Gump', foto: 'forrestgump.jpg', idGenero: 44, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"The Matrix" follows computer programmer Neo as he discovers the truth about reality and joins a rebellion against the machines that have enslaved humanity in a simulated world.', titulo: 'The Matrix', foto: 'matrix.jpg', idGenero: 45, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"The Silence of the Lambs" follows FBI trainee Clarice Starling as she seeks the help of incarcerated cannibalistic serial killer Hannibal Lecter to catch another serial killer known as Buffalo Bill.', titulo: 'The Silence of the Lambs', foto: 'silenceofthelambs.jpg', idGenero: 46, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"One Flew Over the Cuckoo\'\'s Nest\" follows rebellious Randle McMurphy as he feuds with the authoritarian Nurse Ratched in a mental institution, inspiring his fellow patients to rebel against her oppressive rule.', titulo: 'One Flew Over the Cuckoo\'s Nest', foto: 'oneflewovercuckoosnest.jpg', idGenero: 47, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"The Graduate" follows recent college graduate Benjamin Braddock as he embarks on an affair with an older woman named Mrs. Robinson, leading to complications when he falls in love with her daughter Elaine.', titulo: 'The Graduate', foto: 'graduate.jpg', idGenero: 48, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"The Shining" follows writer Jack Torrance as he becomes the winter caretaker of the isolated Overlook Hotel, where he experiences supernatural visions and descends into madness.', titulo: 'The Shining', foto: 'shining.jpg', idGenero: 49, createdAt: new Date(), updatedAt: new Date() },
      { descricao: '"The Usual Suspects" follows a group of criminals brought together in a police lineup who are then blackmailed into performing a high-stakes heist by the mysterious criminal mastermind Keyser Söze.', titulo: 'The Usual Suspects', foto: 'usualsuspects.jpg', idGenero: 50, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('filmes');
  }
};