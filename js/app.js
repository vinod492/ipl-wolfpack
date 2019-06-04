(function () {

    var myApp = angular.module('myApp', []);

    myApp.controller('myController', ['$scope', function ($scope) {
        $scope.greeting = 'Hola!';
        $scope.obj = [];
        $scope.topPlayers = [];


        $scope.allParticipants = [
            {
                name: "The Nightwatchmen (Abhi)",
                players: [
                    {
                        name: "Kane Williamson",
                        team: "NZ",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Babar Azam",
                        team: "PAK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Trent Boult",
                        team: "NZ",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Mushfiqur Rahim",
                        team: "BAN",
                        
                        totalpoints: 0
                    },
                     {
                        name: "KL Rahul",
                        team: "IND",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Tom Latham",
                        team: "NZ",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Angelo Mathews",
                        team: "SL",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Jason Behrendorff",
                        team: "AUS",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Gulbadin Naib",
                        team: "AFG",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Ashley Nurse",
                        team: "WI",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Asghar Afghan",
                        team: "AFG",
                        
                        totalpoints: 147
                    },
                     {
                        name: "Shaheen Afridi",
                        team: "PAK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Rubel Hossain",
                        team: "BAN",
                        
                        totalpoints: 0
                    },
                     {
                        name: "James Vince",
                        team: "ENG",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Tabraiz Shamsi",
                        team: "SA",
                        
                        totalpoints: 0
                    }
                ]
            },
                
            {
                name: "3 Lions (Adi)",
                players: [
                    {
                        name: "Jos Buttler",
                        team: "Eng",
                        
                        totalpoints: 0
                    },
                     {
                        name: "David Warner",
                        team: "Aus",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Jason Roy",
                        team: "Eng",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Jofra Archer",
                        team: "Eng",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Pat Cummins",
                        team: "Aus",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Moeen Ali",
                        team: "Eng",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Aiden Markram",
                        team: "SA",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Thisara Perera",
                        team: "SL",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Mitchell Santner",
                        team: "NZ",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Mark Wood",
                        team: "ENG",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Shadab Khan",
                        team: "PAK",
                        
                        totalpoints: 147
                    },
                     {
                        name: "Oshane Thomas",
                        team: "WI",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Nathan Lyon",
                        team: "Aus",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Mehidy Hasan",
                        team: "BAN",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Fabian Allen",
                        team: "WI",
                        
                        totalpoints: 0
                    }
                ]
               
            },
            {
                name: "Chatur",
                players: [
                    {
                        name: "Hardik Pandya",
                        team: "IND",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Quinton de Kock",
                        team: "SA",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Ross Taylor",
                        team: "NZ",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Jason Holder",
                        team: "WI",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Adil Rashid",
                        team: "ENG",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Hasan Ali",
                        team: "PAK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "David Miller",
                        team: "SA",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Mustafizur Rahman",
                        team: "BAN",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Kedhar Jadhav",
                        team: "IND",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Dhananjaya de Silva",
                        team: "SL",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Mahmudullah",
                        team: "BAN",
                        
                        totalpoints: 147
                    },
                     {
                        name: "Kemar Roach",
                        team: "WI",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Jeffrey Vandersay",
                        team: "SL",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Najibullah Zadran",
                        team: "AFG",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Mosaddek Hossain",
                        team: "BAN",
                        
                        totalpoints: 0
                    }
                ]
               
            },
            {
                name: "DrAG (Akshay)",
                players: [
                    {
                        name: "Steven Smith",
                        team: "AUS",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Eoin Morgan",
                        team: "ENG",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Shikhar Dhawan",
                        team: "IND",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Imam-Ul-Haq",
                        team: "PAK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Usman Khawaja",
                        team: "AUS",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Liam Plunkett",
                        team: "ENG",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Mohammad Shami",
                        team: "IND",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Colin Munro",
                        team: "NZ",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Sabbir Rahman",
                        team: "BAN",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Asif Ali",
                        team: "PAK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Rassie Van der Dussen",
                        team: "SA",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Nathan Coulter Nile",
                        team: "AUS",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Matt Henry",
                        team: "NZ",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Mohammad Hasnain",
                        team: "PAK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Hamid Hassan",
                        team: "AFG",
                        
                        totalpoints: 0
                    }
                ]
               
            },
            {
                name: "Raj",
                players: [
                    {
                        name: "Virat Kohli",
                        team: "IND",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Ben Stokes",
                        team: "ENG",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Kagiso Rabada",
                        team: "SA",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Marcus Stoinis",
                        team: "AUS",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Tamim Iqbal",
                        team: "BAN",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Dimuth Karunaratne",
                        team: "SL",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Fakhar Zaman",
                        team: "PAK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Dawlat Zadran",
                        team: "AFG",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Sarfraz Ahmed",
                        team: "PAK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Yuzvendra Chahal",
                        team: "IND",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Suranga Lakmal",
                        team: "SL",
                        
                        totalpoints: 147
                    },
                     {
                        name: "Mohammad Saifuddin",
                        team: "BAN",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Kane Richardson",
                        team: "Aus",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Dwaine Pretorius",
                        team: "SA",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Noor Ali Zadran",
                        team: "AFG",
                        
                        totalpoints: 0
                    }
                ]
               
            },
            {
                name: "LEGEND RAM",
                players: [
                    {
                        name: "Joe Root",
                        team: "ENG",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Shoaib Malik",
                        team: "pak",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Maxwell",
                        team: "Aus",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Hetmyer",
                        team: "WI",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Starc",
                        team: "Aus",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Carey",
                        team: "Aus",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Duminy",
                        team: "SA",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Neesham",
                        team: "NZ",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Hafeez",
                        team: "Pak",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Grandhomme",
                        team: "NZ",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Abu Jayed",
                        team: "AFG",
                        
                        totalpoints: 147
                    },
                     {
                        name: "Shankar",
                        team: "India",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Cottrel",
                        team: "WI",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Shenwari",
                        team: "Afg",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Siriwardana",
                        team: "SL",
                        
                        totalpoints: 0
                    }
                ]
               
            },
            {
                name: "AdiosMF (Vatsav)",
                players: [
                
                     {
                        name: "Shakib",
                        team: "BNG",
                        
                        totalpoints: 242
                    },
                     {
                        name: "Guptill",
                        team: "NZ",
                        
                        totalpoints: 748
                    },
                     {
                        name: "Mohammad Nabi",
                        team: "AFG",
                        
                        totalpoints: 233
                    },
                     {
                        name: "Imad Wasim",
                        team: "PAK",
                        
                        totalpoints: 1368
                    },
                     {
                        name: "Rahmat Shah",
                        team: "AFG",
                        
                        totalpoints: 1476
                    },
                     {
                        name: "Wahab",
                        team: "PAK",
                        
                        totalpoints: 442
                    },
                     {
                        name: "Kusal Perera",
                        team: "SL",
                        
                        totalpoints: 242
                    },
                     {
                        name: "Mohammad Amir",
                        team: "PAK",
                        
                        totalpoints: 159
                    },
                     {
                        name: "Henry Nicholls",
                        team: "NZ",
                        
                        totalpoints: 508
                    },
                     {
                        name: "Zazai",
                        team: "AFG",
                        
                        totalpoints: 181
                    },
                     {
                        name: "Pradeep",
                        team: "SL",
                        
                        totalpoints: 393
                    },
                     {
                        name: "Tom Curran",
                        team: "ENG",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Dawson",
                        team: "ENG",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Jeevan Mendis",
                        team: "SL",
                        
                        totalpoints: 154
                    },
                     {
                        name: "Rohit",
                        team: "IND",
                        
                        totalpoints: 0
                    }
                ]
            },
            

            {
                name: "THE MONKS (Kamal)",
                players: [
                    {
                        name: "Shai Hope",
                        team: "WI",
            
                        totalpoints: 0
                    },
                    {
                        name: "Dhoni",
                        team: "IND",
            
                        totalpoints: 0
                    },
                    {
                        name: "Bumrah",
                        team: "IND",
            
                        totalpoints: 0
                    },
                    {
                        name: "Shahzad",
                        team: "AFG",
            
                        totalpoints: 0
                    },
                    {
                        name: "Lungi Ngidi",
                        team: "SA",
            
                        totalpoints: 0
                    },
                    {
                        name: "Evin Lewis",
                        team: "WI",
            
                        totalpoints: 0
                    },
                    {
                        name: "Kuldeep",
                        team: "IND",
            
                        totalpoints: 0
                    },
                    {
                        name: "Hashmatullah Shahidi",
                        team: "AFG",
            
                        totalpoints: 0
                    },
                    {
                        name: "Kusal Mendis",
                        team: "SL",
            
                        totalpoints: 0
                    },
                    {
                        name: "Chris Morris",
                        team: "SA",
            
                        totalpoints: 0
                    },
                    {
                        name: "Bravo",
                        team: "WI",
            
                        totalpoints: 147
                    },
                    {
                        name: "Tim Southee",
                        team: "NZ",
            
                        totalpoints: 0
                    },
                    {
                        name: "Mujeeb",
                        team: "AFG",
            
                        totalpoints: 0
                    },
                    {
                        name: "Udana",
                        team: "SL",
            
                        totalpoints: 0
                    },
                    {
                        name: "Fernando",
                        team: "SL",
            
                        totalpoints: 0
                    }
                ]
            
            },
{
    name: "Rockstar Vijay",
    players: [
        {
            name: "Andre Russell",
            team: "WI",

            totalpoints: 0
        },
        {
            name: "Hashim Amla",
            team: "SA",

            totalpoints: 0
        },
        {
            name: "Faf du Plessis",
            team: "SA",

            totalpoints: 0
        },
        {
            name: "Andile Phehlukwayo",
            team: "SA",

            totalpoints: 0
        },
        {
            name: "Rashid khan",
            team: "AFG",

            totalpoints: 0
        },
        {
            name: "Ravindra Jadeja",
            team: "IND",

            totalpoints: 0
        },
        {
            name: "Malinga",
            team: "SL",

            totalpoints: 0
        },
        {
            name: "Tom Blundell",
            team: "NZ",

            totalpoints: 0
        },
        {
            name: "Adam Zampa",
            team: "AUS",

            totalpoints: 0
        },
        {
            name: "Carlos Brathwaite",
            team: "WI",

            totalpoints: 0
        },
        {
            name: "Shaun Marsh",
            team: "AUS",

            totalpoints: 147
        },
        {
            name: "Dinesh Karthik",
            team: "IND",

            totalpoints: 0
        },
        {
            name: "Haris Sohail",
            team: "PAK",

            totalpoints: 0
        },
        {
            name: "Ish Sodhi",
            team: "NZ",

            totalpoints: 0
        },
        {
            name: "Mohammad Mithun",
            team: "BAN",

            totalpoints: 0
        }
    ]

},
            {
                name: "The Chokers (Vinod)",
                players: [
                    {
                        name: "Jonny Bairstow",
                        team: "ENG",
                        totalpoints: 294
                    },
                     {
                        name: "Finch",
                        team: "AUS",
                        
                        totalpoints: 258
                    },
                     {
                        name: "Woakes",
                        team: "ENG",
                        
                        totalpoints: 1064
                    },
                     {
                        name: "Soumya Sarkar",
                        team: "BNG",
                        
                        totalpoints: 653
                    },
                     {
                        name: "Imran Tahir",
                        team: "SA",
                        
                        totalpoints: 503
                    },
                     {
                        name: "Mortaza",
                        team: "BNG",
                        
                        totalpoints: 83
                    },
                     {
                        name: "Thirimanne",
                        team: "SL",
                        
                        totalpoints: 179
                    },
                     {
                        name: "Liton Das",
                        team: "BNG",
                        
                        totalpoints: 962
                    },
                     {
                        name: "Steyn",
                        team: "SA",
                        
                        totalpoints: 114
                    },
                     {
                        name: "Bhuvneshwar Kumar",
                        team: "IND",
                        
                        totalpoints: 564
                    },
                     {
                        name: "Pooran",
                        team: "WI",
                        
                        totalpoints: 683
                    },
                    {
                        name: "Gayle",
                        team: "WI",
                        
                        totalpoints: 683
                    },
                    
                     {
                        name: "Aftab",
                        team: "AFG",
                        
                        totalpoints: 612
                    },
                     {
                        name: "Ferguson",
                        team: "NZ",
                        
                        totalpoints: 0
                    },
                    {
                        name: "Gabriel",
                        team: "WI",
                        
                        totalpoints: 0
                    }
                ]
                     
                
            }
        ]


        // myApp.filter('orderObjectBy', function(){
        //     return function(input, attribute) {
        //        if (!angular.isObject(input)) return input;

        //        var array = [];
        //        for(var objectKey in input) {
        //            array.push(input[objectKey]);
        //        }

        //        array.sort(function(a, b){
        //            a = parseInt(a[attribute]);
        //            b = parseInt(b[attribute]);
        //            return a - b;
        //        });
        //        return array;
        //     }
        //    });

        $scope.getScore = function(player){
        $scope.cricBattlePlayers = {
            "Ben Stokes": 341,
            "Joe Root": 334,
            "Mohammad Hafeez": 300,
            "Jos Buttler": 284,
            "Oshane Thomas": 246,
            "Shakib Al Hasan": 234,
            "Moeen Ali": 216,
            "Mohammad Amir": 216,
            "Matt Henry": 210,
            "Chris Woakes": 207,
            "Andile Phehlukwayo": 191,
            "David Warner": 179,
            "Quinton de Kock": 172,
            "Martin Guptill": 170,
            "Rassie van der Dussen": 162,
            "Faf du Plessis": 158,
            "Lockie Ferguson": 156,
            "Jofra Archer": 152,
            "Sarfraz Ahmed": 152,
            "Mushfiqur Rahim": 150,
            "Wahab Riaz": 150,
            "Aaron Finch": 147,
            "Pat Cummins": 144,
            "Imran Tahir": 141,
            "Babar Azam": 136,
            "Eoin Morgan": 135,
            "Chris Gayle": 133,
            "Mustafizur Rahman": 121,
            "Colin Munro": 121,
            "Jason Holder": 119,
            "Lungi Ngidi": 118,
            "Adam Zampa": 117,
            "Jason Roy": 116,
            "Andre Russell": 115,
            "Najibullah Zadran": 116,
            "Soumya Sarkar": 105,
            "Jean-Paul Duminy": 104,
            "Liam Plunkett": 103,
            "Fakhar Zaman": 101,
            "Marcus Stoinis": 97,
            "Mark Wood": 97,
            "Kagiso Rabada": 96,
            "Mahmudullah": 92,
            "Gulbadin Naib": 69,
            "Mohammad Saifuddin": 80,
            "Rashid Khan": 157,
            "Aiden Markram": 75,
            "Shadab Khan": 75,
            "Chris Morris": 72,
            "Mehidy Hasan": 70,
            "Alex Carey": 70,
            "Mitchell Starc": 62,
            "Dimuth Karunaratne": 100,
            "Sheldon Cottrell": 61,
            "Imam-ul-Haq": 60,
            "Kusal Perera": 200,
            "Hamid Hassan": 79,
            "Rahmat Shah": 78,
            "Nicholas Pooran": 58,
            "David Miller": 55,
            "Trent Boult": 54,
            "Shoaib Malik": 53,
            "Shai Hope": 53,
            "Mosaddek Hossain": 52,
            "Jonny Bairstow": 52,
            "Thisara Perera": 47,
            "Colin de Grandhomme": 45,
            "Mitchell Santner": 45,
            "Mujeeb Ur Rahman": 40,
            "James Neesham": 40,
            "Adil Rashid": 35,
            "Steven Smith": 35,
            "Mohammad Mithun": 33,
            "Nathan Coulter-Nile": 28,
            "Hashim Amla": 18,
            "Asif Ali": 17,
            "Usman Khawaja": 15,
            "Hashmatullah Shahidi": 23,
            "Carlos Brathwaite": 13,
            "Tamim Iqbal": 11,
            "Tom Latham": 10,
            "Haris Sohail": 10,
            "Shimron Hetmyer": 7,
            "Lahiru Thirimanne": 39,
            "Dhananjaya de Silva": -14,
            "Glenn Maxwell": 6,
            "Suranga Lakmal": 4,
            "Dawlat Zadran": 40,
            "Imad Wasim": 1,
            "Jeevan Mendis": 1,
            "Ravindra Jadeja": 0,
            "Ashley Nurse": 0,
            "Liton Das": 0,
            "Rubel Hossain": 0,
            "Vijay Shankar": 0,
            "Virat Kohli": 0,
            "Joe Denly": 0,
            "Ross Taylor": 0,
            "Henry Nicholls": 0,
            "Junaid Khan": 0,
            "Nuwan Pradeep": 0,
            "Aftab Alam": 0,
            "Kane Williamson": 0,
            "Abu Jayed": 0,
            "Milinda Siriwardana": 0,
            "Tim Southee": 0,
            "Kedar Jadhav": 0,
            "Sabbir Rahman": 0,
            "Tabraiz Shamsi": 0,
            "Jasprit Bumrah": 0,
            "Tom Curran": 0,
            "Noor Ali Zadran": 0,
            "Asghar Afghan": 0,
            "Jhye Richardson": 0,
            "Evin Lewis": 0,
            "Samiullah Shenwari": 0,
            "Avishka Fernando": 0,
            "Kuldeep Yadav": 0,
            "Ish Sodhi": 0,
            "Fabian Allen": 0,
            "Jeffrey Vandersay": 0,
            "Shikhar Dhawan": 0,
            "Fahim Ashraf": 0,
            "James Vince": 0,
            "Bhuvneshwar Kumar": 0,
            "Mohammed Shami": 0,
            "Dinesh Karthik": 0,
            "Shannon Gabriel": 0,
            "Anrich Nortje": 0,
            "MS Dhoni": 0,
            "Kane Richardson": 0,
            "Liam Dawson": 0,
            "Yuzvendra Chahal": 0,
            "Shaun Marsh": 0,
            "David Willey": 0,
            "Shaheen Afridi": 0,
            "Tom Blundell": 0,
            "Abid Ali": 0,
            "Hardik Pandya": 0,
            "Dale Steyn": 0,
            "Alex Hales": 0,
            "Lokesh Rahul": 0,
            "Kemar Roach": 0,
            "Nathan Lyon": 0,
            "Rohit Sharma": 0,
            "Jason Behrendorff": 0,
            "Mohammad Hasnain": 0,
            "Mohammad Nabi": 219,
            "Dwaine Pretorius": -2,
            "Hazratullah Zazai": -10,
            "Hasan Ali": -16,
            "Mashrafe Mortaza": -17,
            "Lasith Malinga": -19,
            "Kusal Mendis": -18,
            "Mohammad Shahzad": 10,
            "Darren Bravo": -20,
            "Angelo Mathews": -40,
            "Isuru Udana": -22
          }

          angular.forEach($scope.cricBattlePlayers, function (score, cricBattlePlayer) {
           
            if(cricBattlePlayer.toLowerCase().trim().includes(player.name.toLowerCase()) === true){
                player.total=score;
                return true;
            }
          });
    
        };

        $scope.playerScore = function(){
            angular.forEach($scope.allParticipants, function (participant, key) {
                angular.forEach(participant.players, function (player, key) {
                  $scope.getScore(player);
                  if(player.total === undefined){
                      player.total=0;
                  }
                });
            });
        };

        $scope.playerScore();

        $scope.test = function(){
         console.log('test');
        }

        $scope.totalScore = function (participant) {
            var score = 0;
            $scope.obj = Object.values(participant.players);
            var len = Object.values(participant.players).length
            $scope.obj.sort(function (a, b) {
                return b.total - a.total;
            });
            for (var i = 0; i < 14; i++) {
                if (!angular.equals($scope.obj[i].total, '-')) {
                    score = score + parseFloat($scope.obj[i].total);
                }

            }

            participant['totalpoints'] = score;
            return score;
        };

        $scope.teamScores = [];

        $scope.showRankings = function () {

            $scope.showrank = true;
            angular.forEach($scope.allParticipants, function (participant, key) {

                $scope.teamScores.push(participant);

            });

        };

        $scope.hideRankings = function () {

            $scope.showrank = false;


        };

    }]);

})();
