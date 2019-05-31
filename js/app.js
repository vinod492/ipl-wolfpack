(function () {

    var myApp = angular.module('myApp', []);

    myApp.controller('myController', ['$scope', function ($scope) {
        $scope.greeting = 'Hola!';
        $scope.obj = [];
        $scope.topPlayers = [];


        $scope.allParticipants = [
            {
                name: "Abhi",
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
                        name: "Angelo Matthews",
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
                    name: "Adi",
                    players: [
                        {
                            name: "Ben Stokes",
                            team: "RR",
                            
                            totalpoints: 0
                        },
                         {
                            name: "Jos Buttler",
                            team: "RR",
                            
                            totalpoints: 0
                        },
                        {
                            name: "De kock",
                            team: "MI",
                            
                            totalpoints: 83
                        },
                         {
                            name: "Uthappa",
                            team: "KKR",
                            
                            totalpoints: 74
                        },
                         {
                            name: "Prithvi Shaw",
                            team: "DC",
                            
                            totalpoints: 9
                        },
                         {
                            name: "Chahal",
                            team: "RCB",
                            
                            totalpoints: 109
                        },
                         {
                            name: "Bairstow",
                            team: "SRH",
                            
                            totalpoints: 58
                        },
                         {
                            name: "McClenaghan",
                            team: "MI",
                            
                            totalpoints: 114
                        },
                         {
                            name: "Umesh Yadav",
                            team: "RCB",
                            
                            totalpoints: 31
                        },
                         {
                            name: "Moeen Ali",
                            team: "RCB",
                            
                            totalpoints: 67
                        },
                         {
                            name: "Malinga",
                            team: "MI",
                            
                            totalpoints: 0
                        },
                         {
                            name: "Ankit Rajpoot",
                            team: "Kings",
                            
                            totalpoints: 0
                        },
                         {
                            name: "Khaleel",
                            team: "SRH",
                            
                            totalpoints: 0
                        },
                         {
                            name: "Karn Sharma",
                            team: "CSK",
                            
                            totalpoints: 0
                        },
                         {
                            name: "Dhawal Kulkarni",
                            team: "RR",
                            
                            totalpoints: 0
                        },
                    ]       
            },
            {
                name: "Chatur",
                players: [
                    {
                        name: "Suresh Raina",
                        team: "CSK",
                        
                        totalpoints: 997
                    },
                     {
                        name: "AB de Villiers",
                        team: "RCB",
                        
                        totalpoints: 606
                    },
                    {
                        name: "Steven Smith",
                        team: "RR",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Amit Mishra",
                        team: "DC",
                        
                        totalpoints: 242
                    },
                
                     {
                        name: "Jason Behrendorff",
                        team: "MI",
                        
                        totalpoints: 1476
                    },
                     {
                        name: "Joe Denly",
                        team: "KKR",
                        
                        totalpoints: 442
                    },
                     {
                        name: "Jofra Archer",
                        team: "RR",
                        
                        totalpoints: 242
                    },
                     {
                        name: "Manish Pandey",
                        team: "SRH",
                        
                        totalpoints: 159
                    },
                     {
                        name: "Mannan Vohra",
                        team: "RR",
                        
                        totalpoints: 508
                    },
                     {
                        name: "Markande",
                        team: "MI",
                        
                        totalpoints: 181
                    },
                     {
                        name: "Mohammed Siraj",
                        team: "RCB",
                        
                        totalpoints: 393
                    },
                     {
                        name: "Prayas Ray Barman",
                        team: "RCB",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Ravichandran Ashwin",
                        team: "KXIP",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Sherfane Rutherford",
                        team: "DC",
                        
                        totalpoints: 154
                    },
                     {
                        name: "Siddarth Kaul",
                        team: "SRH",
                        
                        totalpoints: 0
                    }
                ]
            },
            {
                name: "DrAG",
                players: [
                    {
                        name: "Rashid Khan",
                        team: "SRH",
                        
                        totalpoints: 50
                    },
                
                     {
                        name: "Ajinkya Rahane",
                        team: "RR",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Vijay Shankar",
                        team: "SRH",
                        
                        totalpoints: 75
                    },
                     {
                        name: "Trent Boult",
                        team: "DC",
                        
                        totalpoints: 15
                    },
                     {
                        name: "Faf Du Plessis",
                        team: "CSK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Imran Tahir",
                        team: "CSK",
                        
                        totalpoints: 200
                    },
                     {
                        name: "Mohammed Shami",
                        team: "KXIP",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Ish Sodhi",
                        team: "RR",
                        
                        totalpoints: 0
                    },
                     {
                        name: "David Willey",
                        team: "CSK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Hanuma Vihari",
                        team: "DC",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Nikhil Naik",
                        team: "KKR",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Ricky Bhui",
                        team: "SRH",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Mahipal Lomror",
                        team: "RR",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Anukul Roy",
                        team: "MI",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Sandeep Sharma",
                        team: "SRH",
                        
                        totalpoints: 5
                    }
                ]
            },
            {
                name: "Raj",
                players: [
                     {
                        name: "MS Dhoni",
                        team: "CSK",
                        
                        totalpoints: 20
                    },
                     {
                        name: "Rayudu",
                        team: "CSK",
                        
                        totalpoints: 15
                    },
                     {
                        name: "Stoinis",
                        team: "RCB",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Deepak Chahar",
                        team: "CSK",
                        
                        totalpoints: 30
                    },
                     {
                        name: "Nathan Coulter-Nile",
                        team: "RCB",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Sandeep Warrier",
                        team: "KKR",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Colin Ingram",
                        team: "DC",
                        
                        totalpoints: 84
                    },
                     {
                        name: "Mandeep Singh",
                        team: "KP",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Saha",
                        team: "SRH",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Avesh Khan",
                        team: "DC",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Mohammad Nabi",
                        team: "SRH",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Gurkeerat Singh",
                        team: "RCB",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Adam Milne",
                        team: "MI",
                        
                        totalpoints: 0
                    },
            
                
                     {
                        name: "Rinku Singh",
                        team: "KKR",
                        
                        totalpoints: 0
                    },
            
                
                     {
                        name: "Liam Livingstone",
                        team: "RR",
                        
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
                        name: "maxwell",
                        team: "Aus",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Hetmyer",
                        team: "WI",
                        
                        totalpoints: 0
                    },
                     {
                        name: "starc",
                        team: "Aus",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Carey",
                        team: "Aus",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Dumney",
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
                        name: "Nadeem",
                        team: "SRH",
                        
                        totalpoints: 147
                    },
                     {
                        name: "Shankar",
                        team: "India",
                        
                        totalpoints: 0
                    },
                     {
                        name: "cottrel",
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
                name: "Jackie",
                players: [
                
                     {
                        name: "CHRIS LYNN",
                        team: "KKR",
                        
                        totalpoints: 242
                    },
                     {
                        name: "SHIMRON HETMYER",
                        team: "RCB",
                        
                        totalpoints: 748
                    },
                     {
                        name: "KAGISO RABADA",
                        team: "DC",
                        
                        totalpoints: 233
                    },
                     {
                        name: "KANE WILLIAMSON",
                        team: "SRH",
                        
                        totalpoints: 1368
                    },
                     {
                        name: "Varun Chakaravarthy",
                        team: "KXIP",
                        
                        totalpoints: 1476
                    },
                     {
                        name: "oshane Thomas",
                        team: "RR",
                        
                        totalpoints: 442
                    },
                     {
                        name: "Shreyas Gopal",
                        team: "RR",
                        
                        totalpoints: 242
                    },
                     {
                        name: "Nicholas pooran",
                        team: "KXIP",
                        
                        totalpoints: 159
                    },
                     {
                        name: "harry gurney",
                        team: "KKR",
                        
                        totalpoints: 508
                    },
                     {
                        name: "Abhishek Sharma",
                        team: "SRH",
                        
                        totalpoints: 181
                    },
                     {
                        name: "Mitchell Santner",
                        team: "RCB",
                        
                        totalpoints: 393
                    },
                     {
                        name: "DHRUV SHOREY",
                        team: "CSK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "BARINDER SRAN",
                        team: "CSK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "KULWANT KHEJROLIYA",
                        team: "RCB",
                        
                        totalpoints: 154
                    },
                     {
                        name: "Murali Vijay",
                        team: "CSK",
                        
                        totalpoints: 0
                    }
                ]
            },
            

            {
                name: "Kamal",
                players: [
                    {
                        name: "Andre Russell",
                        team: "WI",
            
                        totalpoints: 0
                    },
                    {
                        name: " Hashim Amla",
                        team: "SA",
            
                        totalpoints: 0
                    },
                    {
                        name: " Faf du Plessis",
                        team: "SA",
            
                        totalpoints: 0
                    },
                    {
                        name: " Andile Phehlukwayo",
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
                        name: " Carlos Brathwaite ",
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
                        name: "Harris Sohail",
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
    name: "Vijay",
    players: [
        {
            name: "Andre Russell",
            team: "WI",

            totalpoints: 0
        },
        {
            name: " Hashim Amla",
            team: "SA",

            totalpoints: 0
        },
        {
            name: " Faf du Plessis",
            team: "SA",

            totalpoints: 0
        },
        {
            name: " Andile Phehlukwayo",
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
            name: " Carlos Brathwaite ",
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
            name: "Harris Sohail",
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
                name: "Vinod",
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
            "Ben Stokes": 331,
            "Jofra Archer": 177,
            "Lungi Ngidi": 132,
            "Quinton de Kock": 125,
            "Eoin Morgan": 114,
            "Joe Root": 113,
            "Jason Roy": 104,
            "Liam Plunkett": 103,
            "Kagiso Rabada": 83,
            "Rassie van der Dussen": 80,
            "Andile Phehlukwayo": 71,
            "Imran Tahir": 53,
            "Adil Rashid": 49,
            "Moeen Ali": 49,
            "Faf du Plessis": 37,
            "Jos Buttler": 28,
            "Aiden Markram": 25,
            "Chris Woakes": 20,
            "Jean-Paul Duminy": 20,
            "Hashim Amla": 18,
            "Jason Holder": 0,
            "Mehidy Hasan": 0,
            "Ashley Nurse": 0,
            "Liton Das": 0,
            "Rubel Hossain": 0,
            "Vijay Shankar": 0,
            "Virat Kohli": 0,
            "Lahiru Thirimanne": 0,
            "Shakib Al Hasan": 0,
            "Mosaddek Hossain": 0,
            "Babar Azam": 0,
            "Joe Denly": 0,
            "Ross Taylor": 0,
            "Mohammad Amir": 0,
            "Shai Hope": 0,
            "Shimron Hetmyer": 0,
            "Lockie Ferguson": 0,
            "Ravindra Jadeja": 0,
            "Soumya Sarkar": 0,
            "Junaid Khan": 0,
            "Dhananjaya de Silva": 0,
            "Nuwan Pradeep": 0,
            "Aftab Alam": 0,
            "Kane Williamson": 0,
            "Hazratullah Zazai": 0,
            "Andre Russell": 0,
            "Abu Jayed": 0,
            "Milinda Siriwardana": 0,
            "Wahab Riaz": 0,
            "Imad Wasim": 0,
            "Rahmat Shah": 0,
            "Colin Munro": 0,
            "David Miller": 0,
            "Henry Nicholls": 0,
            "Kedar Jadhav": 0,
            "Gulbadin Naib": 0,
            "Nathan Coulter-Nile": 0,
            "Sabbir Rahman": 0,
            "Tabraiz Shamsi": 0,
            "Jasprit Bumrah": 0,
            "Jeevan Mendis": 0,
            "Steven Smith": 0,
            "Tom Curran": 0,
            "Mohammad Hafeez": 0,
            "Noor Ali Zadran": 0,
            "Hasan Ali": 0,
            "Asif Ali": 0,
            "Mitchell Starc": 0,
            "Tamim Iqbal": 0,
            "Shoaib Malik": 0,
            "Asghar Afghan": 0,
            "Imam-ul-Haq": 0,
            "Tim Southee": 0,
            "Matt Henry": 0,
            "Jhye Richardson": 0,
            "Kusal Mendis": 0,
            "Evin Lewis": 0,
            "Sheldon Cottrell": 0,
            "David Warner": 0,
            "Samiullah Shenwari": 0,
            "Avishka Fernando": 0,
            "Pat Cummins": 0,
            "Hamid Hassan": 0,
            "Kuldeep Yadav": 0,
            "Aaron Finch": 0,
            "Mushfiqur Rahim": 0,
            "Suranga Lakmal": 0,
            "Sarfraz Ahmed": 0,
            "Mark Wood": 0,
            "Ish Sodhi": 0,
            "Dawlat Zadran": 0,
            "Najibullah Zadran": 0,
            "Nicholas Pooran": 0,
            "Oshane Thomas": 0,
            "Fabian Allen": 0,
            "Jeffrey Vandersay": 0,
            "Shikhar Dhawan": 0,
            "Fahim Ashraf": 0,
            "Mohammad Nabi": 0,
            "James Vince": 0,
            "Martin Guptill": 0,
            "Bhuvneshwar Kumar": 0,
            "Usman Khawaja": 0,
            "Tom Latham": 0,
            "Haris Sohail": 0,
            "Colin de Grandhomme": 0,
            "Mohammad Shahzad": 0,
            "Kusal Perera": 0,
            "Darren Bravo": 0,
            "Dinesh Karthik": 0,
            "Mohammad Mithun": 0,
            "Shannon Gabriel": 0,
            "Rashid Khan": 0,
            "Anrich Nortje": 0,
            "MS Dhoni": 0,
            "Kane Richardson": 0,
            "Liam Dawson": 0,
            "Yuzvendra Chahal": 0,
            "Mustafizur Rahman": 0,
            "Shaun Marsh": 0,
            "Mohammed Shami": 0,
            "Mashrafe Mortaza": 0,
            "Carlos Brathwaite": 0,
            "Shadab Khan": 0,
            "David Willey": 0,
            "Hashmatullah Shahidi": 0,
            "Shaheen Afridi": 0,
            "Dimuth Karunaratne": 0,
            "Trent Boult": 0,
            "Tom Blundell": 0,
            "Chris Gayle": 0,
            "Abid Ali": 0,
            "Thisara Perera": 0,
            "Chris Morris": 0,
            "Hardik Pandya": 0,
            "Angelo Mathews": 0,
            "Fakhar Zaman": 0,
            "Dale Steyn": 0,
            "Mitchell Santner": 0,
            "Lokesh Rahul": 0,
            "James Neesham": 0,
            "Adam Zampa": 0,
            "Kemar Roach": 0,
            "Nathan Lyon": 0,
            "Alex Carey": 0,
            "Isuru Udana": 0,
            "Rohit Sharma": 0,
            "Jason Behrendorff": 0,
            "Mohammad Saifuddin": 0,
            "Mohammad Hasnain": 0,
            "Glenn Maxwell": 0,
            "Lasith Malinga": 0,
            "Mujeeb Ur Rahman": 0,
            "Marcus Stoinis": 0,
            "Mahmudullah": 0,
            "Alex Hales": 0,
            "Dwaine Pretorius": -2,
            "Jonny Bairstow": -20
          }

          angular.forEach($scope.cricBattlePlayers, function (score, cricBattlePlayer) {
           
            if(cricBattlePlayer.toLowerCase().includes(player.name.toLowerCase()) === true){
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
