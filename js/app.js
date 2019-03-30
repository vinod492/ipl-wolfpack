(function () {

    var myApp = angular.module('myApp', []);

    myApp.controller('myController', ['$scope', function ($scope) {
        $scope.greeting = 'Hola!';
        $scope.obj = [];
        $scope.topPlayers = [];


        $scope.allParticipants = [
            {
                name: "Aadarsh",
                players: [
                    {
                        name: "Mayank",
                        team: "KXIP",
                        totalpoints: 0,
                    },
            
                    {
                        name: "Cutting",
                        team: "MI",
                        
                        totalpoints: 0,
                    },
                     {
                        name: "Hardik",
                        team: "MI",
                        
                        totalpoints: 257
                    },
                    {
                        name: "Gill",
                        team: "KKR",
                        
                        totalpoints: 53
                    },
                     {
                        name: "Lokesh Rahul",
                        team: "KXIP",
                        
                        totalpoints: 140
                    },
                    {
                        name: "Negi",
                        team: "RCB",
                        
                        totalpoints: 669
                    },
                    {
                        name: "Hooda",
                        team: "SRH",
                        
                        totalpoints: 10
                    },
                    {
                        name: "Tripathi",
                        team: "RR",
                        
                        totalpoints: 26
                    },
                   {
                        name: "Shakib Al Hasan",
                        team: "SRH",
                        
                        totalpoints: 297
                    },
                    {
                        name: "Southee",
                        team: "RCB",
                        
                        totalpoints: 1062
                    },
                   {
                        name: "Guptill",
                        team: "SRH",
                        
                        totalpoints: 618
                    },
                    {
                        name: "Sundar",
                        team: "RCB",
                        
                        totalpoints: 12
                    },
                     {
                        name: "Thakur",
                        team: "CSK",
                        
                        totalpoints: 310
                    },
                    {
                        name: "Binny",
                        team: "RR",
                        
                        totalpoints: 108
                    },
                    {
                        name: "Mundhe",
                        team: "RCB",
                        
                        totalpoints: 98
                    },
                    {
                        name: "Himmat",
                        team: "DD",
                        
                        totalpoints: -2
                    },
                    {
                        name: "Riyan Parag",
                        team: "DD",
                        
                        totalpoints: 472
                    },
                    {
                        name: "Natarajan",
                        team: "SRH",
                        
                        totalpoints: 472
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
                         {
                            name: "Harbhajan Singh",
                            team: "CSK",
                            
                            totalpoints: 220
                        },
                
                    
                         {
                            name: "Simran Singh",
                            team: "SRH",
                            
                            totalpoints: 0
                        },
                
                    
                         {
                            name: "Rahul Chahar",
                            team: "MI",
                            
                            totalpoints: 0
                        }
                
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
                        name: "Colin De Grandhomme",
                        team: "RCB",
                        
                        totalpoints: 748
                    },
                     {
                        name: "David Miller",
                        team: "KXIP",
                        
                        totalpoints: 233
                    },
                     {
                        name: "Harshal Patel",
                        team: "DC",
                        
                        totalpoints: 1368
                    },
                     {
                        name: "Jason Behrendoff",
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
                        name: "Mayank Markande",
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
                        name: "Sherfance Rutherford",
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
                        name: "Rohit Sharma",
                        team: "MI",
                        
                        totalpoints: 18
                    },
                    {
                        name: "Kuldeep Yadav",
                        team: "KKR",
                        
                        totalpoints: -15
                    },
                     {
                        name: "Shreyas Iyer",
                        team: "DC",
                        
                        totalpoints: 33
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
                        name: "Virat Kohli",
                        team: "RCB",
                        
                        totalpoints: 6
                    },
                     {
                        name: "David Warner",
                        team: "SRH",
                        
                        totalpoints: 157
                    },
                    {
                        name: "Shivam Dube",
                        team: "RCB",
                        
                        totalpoints: 12
                    },
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
                        name: "Mohammed Nabi",
                        team: "SRH",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Gurukeerat Singh Mann",
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
                name: "Legend Ram",
                players: [
                    {
                        name: "Watson",
                        team: "CSK",
                        
                        totalpoints: 16
                    },
                     {
                        name: "Parthiv",
                        team: "RCB",
                        
                        totalpoints: 335
                    },
                     {
                        name: "Henriques",
                        team: "KXIP",
                        
                        totalpoints: 807
                    },
                     {
                        name: "Mujeeb",
                        team: "KXIP",
                        
                        totalpoints: 97
                    },
                     {
                        name: "Sanju Samson",
                        team: "RR",
                        
                        totalpoints: 615
                    },
                     {
                        name: "Bhuvneshwar Kumar",
                        team: "SRH",
                        
                        totalpoints: 1140
                    },
                     {
                        name: "Evin Lewis",
                        team: "MI",
                        
                        totalpoints: 289
                    },
                     {
                        name: "Jadeja",
                        team: "CSK",
                        
                        totalpoints: 441
                    },
                     {
                        name: "Kedar Jadhav",
                        team: "CSK",
                        
                        totalpoints: 1420                    },
                     {
                        name: "Yusuf",
                        team: "SRH",
                        
                        totalpoints: 839
                    },
                     {
                        name: "Pollard",
                        team: "MI",
                        
                        totalpoints: 232
                    },
                     {
                        name: "Billings",
                        team: "CSK",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Murugan",
                        team: "CSK",
                        
                        totalpoints: 85
                    },
                     {
                        name: "Sarfaraz",
                        team: "KXIP",
                        
                        totalpoints: 192
                    },
                     {
                        name: "Klaasen",
                        team: "RCB",
                        
                        totalpoints: 896                    },
                     {
                        name: "Stanlake",
                        team: "DD",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Ayyappa",
                        team: "SRH",
                        
                        totalpoints: 0
                    },
                    {
                        name: "Bumrah",
                        team: "MI",
                        
                        totalpoints: 0
                    }
                ]
                     
                
            },

            {
                name: "Jackie",
                players: [
                    {
                        name: "Andre Russel",
                        team: "KKR",
                        
                        totalpoints: 997
                    },
                     {
                        name: "ANDREW TYE",
                        team: "KXIP",
                        
                        totalpoints: 606
                    },
                    {
                        name: "Shikhar Dhawan",
                        team: "DC",
                        
                        totalpoints: 0
                    },
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
                        name: "Varun Chakravarthy",
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
                name: "Vijay",
                players: [
                    {
                        name: "Dwayne Bravo",
                        team: "CSK",
                        
                        totalpoints: 788
                    },
                     {
                        name: "Krunal",
                        team: "MI",
                        
                        totalpoints: 1116
                    },
                     {
                        name: "Rana",
                        team: "KKR",
                        
                        totalpoints: 255
                    },
                     {
                        name: "Sandeep Lamichhane",
                        team: "DC",
                        
                        totalpoints: 528
                    },
                     {
                        name: "Aaron",
                        team: "RR",
                        
                        totalpoints: 845
                    },
                     {
                        name: "Suryakumar Yadav",
                        team: "MI",
                        
                        totalpoints: 978
                    },
                     {
                        name: "Dinesh karthik",
                        team: "KKR",
                        
                        totalpoints: 255
                    },
                     {
                        name: "Munro",
                        team: "DC",
                        
                        totalpoints: 762
                    },
                     {
                        name: "Piyush Chawla",
                        team: "KKR",
                        
                        totalpoints: 570
                    },
                     {
                        name: "Axar",
                        team: "DC",
                        
                        totalpoints: 422
                    },
                     {
                        name: "Nadeem",
                        team: "SRH",
                        
                        totalpoints: 147
                    },
                     {
                        name: "Prasidh",
                        team: "KKR",
                        
                        totalpoints: 1131
                    },
                     {
                        name: "Yuvraj",
                        team: "MI",
                        
                        totalpoints: 203
                    },
                     {
                        name: "Lockie Ferguson",
                        team: "KKR",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Siddhesh Lad",
                        team: "CSK",
                        
                        totalpoints: 7
                    },
                     {
                        name: "Ishant",
                        team: "DC",
                        
                        totalpoints: 550                    },
                     {
                        name: "Keemo Paul",
                        team: "DC",
                        
                        totalpoints: 0
                    },
                    {
                        name: "Cariappa",
                        team: "KKR",
                        
                        totalpoints: 0
                    }
                ]
                    
                
            },
            {
                name: "Vinod",
                players: [
                    {
                        name: "Sunil Narine",
                        team: "KKR",
                        
                        totalpoints: 294
                    },
                     {
                        name: "Rishabh Pant",
                        team: "DC",
                        
                        totalpoints: 258
                    },
                     {
                        name: "Chris Morris",
                        team: "DC",
                        
                        totalpoints: 1064
                    },
                     {
                        name: "Chris Gayle",
                        team: "KXIP",
                        
                        totalpoints: 653
                    },
                     {
                        name: "Kishan",
                        team: "MI",
                        
                        totalpoints: 503
                    },
                     {
                        name: "Krishnappa Gowtham",
                        team: "RR",
                        
                        totalpoints: 83
                    },
                     {
                        name: "Curran",
                        team: "KXIP",
                        
                        totalpoints: 179
                    },
                     {
                        name: "Unadkat",
                        team: "RR",
                        
                        totalpoints: 962
                    },
                     {
                        name: "Mohit",
                        team: "CSK",
                        
                        totalpoints: 114
                    },
                     {
                        name: "Karun",
                        team: "KXIP",
                        
                        totalpoints: 564
                    },
                     {
                        name: "Jagadeesan",
                        team: "CSK",
                        
                        totalpoints: 683
                    },
                     {
                        name: "Ashton",
                        team: "RR",
                        
                        totalpoints: 539
                    },
                     {
                        name: "Brathwaite",
                        team: "KKR",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Akshdeep",
                        team: "RCB",
                        
                        totalpoints: 154
                    },
                     {
                        name: "Rahul Tewatia",
                        team: "DC",
                        
                        totalpoints: 77
                    },
                     {
                        name: "Navdeep",
                        team: "RCB",
                        
                        totalpoints: 612
                    },
                     {
                        name: "Basil",
                        team: "SRH",
                        
                        totalpoints: 0
                    },
                    {
                        name: "Goswami",
                        team: "SRH",
                        
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
            "Andre Russell": 428,
            "Rishabh Pant": 345,
            "David Warner": 290,
            "Yuzvendra Chahal": 269,
            "Nitish Rana": 251,
            "Chris Gayle": 247,
            "Sanju Samson": 237,
            "Ravindra Jadeja": 236,
            "Harbhajan Singh": 220,
            "Jasprit Bumrah": 205,
            "Imran Tahir": 205,
            "Robin Uthappa": 189,
            "Mohammed Siraj": 185,
            "Ajinkya Rahane": 182,
            "Rashid Khan": 160,
            "Yuvraj Singh": 159,
            "Vijay Shankar": 151,
            "Shikhar Dhawan": 149,
            "Mayank Agarwal": 148,
            "Jos Buttler": 147,
            "Shane Watson": 146,
            "Jonny Bairstow": 143,
            "Dwayne Bravo": 141,
            "AB de Villiers": 140,
            "Shreyas Gopal": 136,
            "Kagiso Rabada": 130,
            "Umesh Yadav": 121,
            "David Miller": 118,
            "Suresh Raina": 116,
            "Rohit Sharma": 115,
            "Quinton de Kock": 113,
            "Parthiv Patel": 105,
            "Sarfaraz Khan": 103,
            "Moeen Ali": 95,
            "Mitchell McClenaghan": 95,
            "Ben Stokes": 91,
            "Suryakumar Yadav": 86,
            "Colin Ingram": 86,
            "Deepak Chahar": 85,
            "Virat Kohli": 84,
            "Mandeep Singh": 79,
            "Ankit Rajpoot": 75,
            "Mujeeb Zadran": 75,
            "Ishant Sharma": 75,
            "Rahul Tewatia": 70,
            "Hardik Pandya": 70,
            "Krunal Pandya": 66,
            "Amit Mishra": 65,
            "Shreyas Iyer": 64,
            "Axar Patel": 62,
            "MS Dhoni": 59,
            "Prithvi Shaw": 58,
            "Kieron Pollard": 58,
            "Kedar Jadhav": 56,
            "Ravichandran Ashwin": 55,
            "Sam Curran": 55,
            "Dhawal Kulkarni": 42,
            "Piyush Chawla": 40,
            "Lokesh Rahul": 37,
            "Steven Smith": 35,
            "Mayank Markande": 33,
            "Shivam Dube": 24,
            "Shubman Gill": 24,
            "Chris Lynn": 24,
            "Nicholas Pooran": 24,
            "Keemo Paul": 23,
            "Ambati Rayudu": 22,
            "Rahul Tripathi": 21,
            "Manish Pandey": 21,
            "Yusuf Pathan": 20,
            "Sunil Narine": 20,
            "Kane Williamson": 18,
            "Mohammed Shami": 15,
            "Trent Boult": 15,
            "Dinesh Karthik": 13,
            "Jofra Archer": 12,
            "Andrew Tye": 10,
            "Hardus Vilojen": 10,
            "Ben Cutting": 8,
            "Navdeep Saini": 7,
            "Shakib Al Hasan": 5,
            "Varun Chakaravarthy": 5,
            "Shahbaz Nadeem": 5,
            "Shardul Thakur": 5,
            "Siddarth Kaul": 5,
            "Siddhesh Lad": 0,
            "Faf du Plessis": 0,
            "Varun Aaron": 0,
            "Ish Sodhi": 0,
            "Agnivesh Ayachi": 0,
            "Aryaman Birla": 0,
            "Harry Gurney": 0,
            "Joe Denly": 0,
            "Moises Henriques": 0,
            "Prithvi Raj Yarra": 0,
            "Jason Behrendorff": 0,
            "Ruturaj Gaikwad": 0,
            "Sherfane Rutherford": 0,
            "Sudhesan Midhun": 0,
            "Nathan Coulter-Nile": 0,
            "Tim Southee": 0,
            "Akshdeep Nath": 0,
            "Avesh Khan": 0,
            "Harshal Patel": 0,
            "Kamlesh Nagarkoti": 0,
            "Lungi Ngidi": 0,
            "Monu Kumar": 0,
            "Oshane Thomas": 0,
            "Rahul Chahar": 0,
            "Sam Billings": 0,
            "Syed Khaleel Ahmed": 0,
            "Carlos Brathwaite": 0,
            "David Willey": 0,
            "Deepak Hooda": 0,
            "Devdutt Padikkal": 0,
            "Heinrich Klaasen": 0,
            "Mahipal Lomror": 0,
            "Murugan Ashwin": 0,
            "Martin Guptill": 0,
            "Pankaj Jaswal": 0,
            "T Natarajan": 0,
            "Chris Morris": 0,
            "Adam Milne": 0,
            "Ankush Bains": 0,
            "Bandaru Ayyappa": 0,
            "Dhruv Shorey": 0,
            "Himmat Singh": 0,
            "Manan Vohra": 0,
            "Narayan Jagadeesan": 0,
            "Pawan Negi": 0,
            "Sandeep Lamichhane": 0,
            "Shivam Mavi": 0,
            "Murali Vijay": 0,
            "Washington Sundar": 0,
            "Anmolpreet Singh": 0,
            "Barinder Sran": 0,
            "Gurkeerat Singh": 0,
            "Ishan Kishan": 0,
            "KM Asif": 0,
            "Nathu Singh": 0,
            "Prabhsimran Singh": 0,
            "Shreevats Goswami": 0,
            "Shrikant Mundhe": 0,
            "Wriddhiman Saha": 0,
            "Mitchell Santner": 0,
            "Stuart Binny": 0,
            "Karun Nair": 0,
            "Anrich Nortje": 0,
            "Basil Thampi": 0,
            "Hanuma Vihari": 0,
            "Manjot Kalra": 0,
            "Prashant Chopra": 0,
            "Ricky Bhui": 0,
            "Mohit Sharma": 0,
            "Shubham Ranjane": 0,
            "Evin Lewis": 0,
            "Sandeep Warrier": 0,
            "Ashton Turner": 0,
            "Abhishek Sharma": 0,
            "Anukul Roy": 0,
            "Chaitanya Bishnoi": 0,
            "Jalaj Saxena": 0,
            "Kulwant Khejroliya": 0,
            "Marcus Stoinis": 0,
            "Rinku Singh": 0,
            "Billy Stanlake": 0,
            "KC Cariappa": 0,
            "Karn Sharma": 0,
            "Aditya Tare": 0,
            "Arshdeep Singh": 0,
            "Darshan Nalkande": 0,
            "Harpreet Brar": 0,
            "Jayant Yadav": 0,
            "Liam Livingstone": 0,
            "Milind Kumar": 0,
            "Colin Munro": 0,
            "Nikhil Naik": 0,
            "Prayas Barman": 0,
            "Mohammad Nabi": 0,
            "Riyan Parag": 0,
            "Shashank Singh": 0,
            "Krishnappa Gowtham": -2,
            "Jaydev Unadkat": -4,
            "Lockie Ferguson": -5,
            "Shimron Hetmyer": -5,
            "Rasikh Dar": -5,
            "Colin de Grandhomme": -7,
            "Sandeep Sharma": -10,
            "Prasidh Krishna": -10,
            "Kuldeep Yadav": -15,
            "Lasith Malinga": -20,
            "Bhuvneshwar Kumar": -25,
            "Alzarri Joseph": 0
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
