const typeQuestion = [
    {
        id: 'sportQuestion',
        img: 'sport.jpeg',
        name: 'Deportes',
        bank: [
            {
                question: '¿Qué jugador de fútbol ha ganado más campeonatos en la copa del mundo?',
                answers: [  'Pelé, tres veces en 1958, 1962 y 1972', 
                            'Maradona, tres veces en 1982, 1990 y 1994', 
                            'Ronaldo Nazario, tres veces en 1994, 2002 y 2006',
                            'Gerd Muller, tres veces en 1966, 1972, 1982'],
                correctAnswer: 0
            },
            {
                question: '¿Qué jugador de la NBA ha ganado más campeonatos en toda la historia?',
                answers: [  'Sam Jones, 11 campeonatos con los Celtics',
                            'Bill Russell, 11 campeonatos con los Celtics',
                            'Tom Heinsohn, 11 campeonatos con los Celtics',
                            'K.C. Jones, 11 campeonatos con los Celtics'],
                correctAnswer: 1 
            },
            {
                question: '¿Qué belga es considerado como uno de los mejores ciclistas de todos los tiempos?',
                answers: [  'Rik Van Loopy',
                            'Philippe Thys',
                            'Lucien Van Impere',
                            'Eddy Merchx'],
                correctAnswer: 3
            },
            {
                question: '¿Quién fue el boxeador más joven de la historia en conseguir un título mundial de los pesos pesados?',
                answers: [  'Myke Tyson',
                            'Roberto Durán Samaniego',
                            'Rocky Marciano',
                            'Muhammad Ali' ],
                correctAnswer: 0
            },
            {
                question: '¿En qué equipo jugó Magic Johnson desde 1979 hasta 1991?',
                answers: [  'Miami Heats',
                            'Los Angeles Lakers',
                            'Chicago Bulls',
                            'Boston Celtics' ],
                correctAnswer: 1
            },
            {
                question: '¿Qué exdeportista posee el récord de más medallas olímpicas de oro?',
                answers: [  'Chris Hoy',
                            'Usain Bolt',
                            'Paavo Nurmi',
                            'Michael Phelps' ],
                correctAnswer: 3
            },
            {
                question: '¿Quién fue el único campeón de boxeo de los pesos pesados que no conoció la derrota en su carrera?',
                answers: [  'Myke Tyson',
                            'Roberto Durán Samaniego',
                            'Rocky Marciano',
                            'Muhammad Ali'],
                correctAnswer: 2
            },
            {
                question: '¿Qué país gano el mundial de fútbol en México (1986)?',
                answers: [  'Argentina',
                            'Alemania',
                            'Brasil',
                            'Francia'],
                correctAnswer: 0
            },
            {
                question: '¿Qué ciclista latinoamericano gano por primera vez el Giro de Italia?',
                answers: [  'Lucho Herrera',
                            'Nairo Quintana',
                            'José Rujano',
                            'Rigoberto Urán'],
                correctAnswer: 1
            },
            {
                question: '¿Cuáles son las tres grandes vueltas del ciclismo?',
                answers: [  'El Tour de España, el Giro de Alemania y la Vuelta de España',
                            'El Tour de Francia, el Giro de Alemania y la Vuelta de Portugal',
                            'El Tour de Francia, el Giro de Italia y la Vuelta de España',
                            'El Giro de Francia, el Tour de España y la Vuelta de Portugal '],
                correctAnswer: 2
            },
            {
                question: '¿Quién es este laureado corredor de la Formula 1?',
                answers: [  'Michael Schumacher',
                            'Sebastián Vettel',
                            'Niki Lauda',
                            'Lewis Hamilton'],
                correctAnswer: 0
            },
            {
                question: '¿En qué olimpiadas ganó la tenista Serena Williams su primer oro olímpico en individuales?',
                answers: [  'Rio de Janeiro – 2016',
                            'Atlanta – 1996',
                            'Pekín – 2008',
                            'Londres – 2012'],
                correctAnswer: 3
            },
            {
                question: '¿Qué famoso ciclista italiano era apodado “Il Campionissimo”?',
                answers: [  'Marco Pantani',
                            'Paolo Bailetti',
                            'Fausto Coppi',
                            'Pietro Chesi'],
                correctAnswer: 2
            },
            {
                question: '¿Cuántas veces participó el basquetbolista Jerry West en el All Stars?',
                answers: [  'Trece veces',
                            'Doce veces',
                            'Cinco veces',
                            'Catorce veces'],
                correctAnswer: 0
            },
            {
                question: '¿Con qué equipo ha jugado el beisbolista Joe Mauer durante toda su carrera desde el año 2004?',
                answers: [  'Cleveland Indians',
                            'Los Mellizos de Minnesota.',
                            'Boston Red Sox',
                            'New York Yankees'],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'videogameQuestion',
        img: 'videogames.jpg',
        name: 'Videojuegos',
        bank: [
            {
                question: '¿Quién fue el creador de “The Legend Of Zelda”?',
                answers: [  'Suzuki Tamada', 
                            'Shigeru Miyamoto', 
                            'Gerald Holmes',
                            'Takashi Tezuka'],
                correctAnswer: 1
            },
            {
                question: '¿En qué año sale a la venta Nintendo 64?',
                answers: [  '1994', 
                            '1995', 
                            '1996',
                            '1998'],
                correctAnswer: 2
            },
            {
                question: '¿En qué año sale la consola WII?',
                answers: [  '2004', 
                            '2006', 
                            '2007',
                            '2008'],
                correctAnswer: 1
            },
            {
                question: '¿Cuál fue la primera consola en usar CD´s?',
                answers: [  'Sega MasterDrive', 
                            'Super Nintendo Entertainment System', 
                            'Sony Playstation',
                            'Nintendo 64'],
                correctAnswer: 0
            },
            {
                question: '¿Quién es el diseñador de Fortnite?',
                answers: [  'Benjamin Chichoski', 
                            'Tim Sweeny', 
                            'Darren Sugg',
                            'Mohammand Alavu'],
                correctAnswer: 2
            },
            {
                question: '¿Cuál es la fecha de introducción de la PlayStation?',
                answers: [  '3 de diciembre de 1994', 
                            '10 de diciembre de 1992', 
                            '3 de diciembre de 1992',
                            '10 de diciembre de 1994'],
                correctAnswer: 0
            },
            {
                question: '¿Cuál ha sido el juego más vendido de la PlayStation?',
                answers: [  'Final Fantasy VII', 
                            'Tekken 3', 
                            'Metal Gear Solid',
                            'Gran Turismo'],
                correctAnswer: 3
            },
            {
                question: '¿Cuál es el videojuego con más jugadores registrados?',
                answers: [  'Pac-Man Doodle', 
                            'CrossFile', 
                            'League of Legends',
                            'Minecraft'],
                correctAnswer: 1
            },
            {
                question: '¿Cuál es la máxima puntuación posible en una partida de Pac-Mac?',
                answers: [  '3,333,360 pts', 
                            '3,999,999 pts', 
                            '4,231,121 pts',
                            '3,300,000 pts'],
                correctAnswer: 0
            },
            {
                question: '¿Cuáles son las consolas que más se han vendido?',
                answers: [  'PlayStation 3 y Nintendo 64', 
                            'PlayStation 2 y Nintendo 64', 
                            'PlayStation 3 y WII',
                            'PlayStation 2 y Nintendo DS'],
                correctAnswer: 3
            },
            {
                question: '¿Cuál es el juego más caro en toda la historia?',
                answers: [  'Grand Theft Auto San Andreas ', 
                            'Call of Dutty', 
                            'Grand Theft Auto V',
                            'Fifa 14'],
                correctAnswer: 2
            },
            {
                question: '¿Quién es el propietario del primer almacén de Nintendo?',
                answers: [  'Benjamin Chichoski', 
                            'Mario Segale', 
                            'Toru Iwatami',
                            'Mario Raider'],
                correctAnswer: 1
            },
            {
                question: '¿Cuál es el juego más vendido de la consola XBOX?',
                answers: [  'Halo 2', 
                            'CrossFile', 
                            'League of Legends',
                            'The Guy Game'],
                correctAnswer: 0
            },
            {
                question: '¿Cómo se llamaba la consola que Nintendo saco en 1995 que permitía descargar videojuegos vía satélite?',
                answers: [  'RS-X', 
                            'BS-X', 
                            'CR-X',
                            'MS-X'],
                correctAnswer: 1
            },
            {
                question: '¿Cuántas piezas de equipos hay en Final Fantasy X?',
                answers: [  '510', 
                            '501', 
                            '504',
                            '502'],
                correctAnswer: 2
            }
        ]
    }
];
