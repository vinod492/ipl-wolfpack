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
                        name: "Dhoni",
                        team: "CSK",
                        totalpoints: function(){
                           alert('test');
                        }
                    },
                    {
                        name: "Butler",
                        team: "RR",
                        
                        totalpoints: function(){
                            alert('test');
                         }
                    },
                     {
                        name: "Pollard",
                        team: "MI",
                        
                        totalpoints: 257
                    },
                    {
                        name: "M Pandey",
                        team: "SRH",
                        
                        totalpoints: 53
                    },
                     {
                        name: "KL Rahul",
                        team: "KXIP",
                        
                        totalpoints: 140
                    },
                    {
                        name: "Rana",
                        team: "KKR",
                        
                        totalpoints: 669
                    },
                    {
                        name: "Manoj Tiwary",
                        team: "KXIP",
                        
                        totalpoints: 10
                    },
                    {
                        name: "Roy",
                        team: "DD",
                        
                        totalpoints: 26
                    },
                   {
                        name: "Mustafizur",
                        team: "MI",
                        
                        totalpoints: 297
                    },
                    {
                        name: "Rashid khan",
                        team: "SRH",
                        
                        totalpoints: 1062
                    },
                   {
                        name: "Chahal",
                        team: "RCB",
                        
                        totalpoints: 618
                    },
                    {
                        name: "Negi",
                        team: "RCB",
                        
                        totalpoints: 12
                    },
                     {
                        name: "Ben Cutting",
                        team: "MI",
                        
                        totalpoints: 310
                    },
                    {
                        name: "Shami",
                        team: "DD",
                        
                        totalpoints: 108
                    },
                    {
                        name: "Sarfaraz Khan",
                        team: "RCB",
                        
                        totalpoints: 98
                    },
                    {
                        name: "Naman Ojha",
                        team: "DD",
                        
                        totalpoints: -2
                    },
                    {
                        name: "Prithvi Shaw",
                        team: "DD",
                        
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
                            name: "Dekock",
                            team: "MI",
                            
                            totalpoints: 83
                        },
                         {
                            name: "Uttapppa",
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
                            name: "McClenagahan",
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
                        name: "AB de Villers",
                        team: "RCB",
                        
                        totalpoints: 606
                    },
                    {
                        name: "Steve Smith",
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
                        name: "Ravichandra Ashwin",
                        team: "KXIP",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Sherfance Rutherford",
                        team: "DC",
                        
                        totalpoints: 154
                    },
                     {
                        name: "Siddharth Kaul",
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
                        name: "Suresh Raina",
                        team: "CSK",
                        
                        totalpoints: 819
                    },
                     {
                        name: "Gautam Gambhir",
                        team: "DD",
                        
                        totalpoints: 122
                    },
                     {
                        name: "Colin Munro",
                        team: "DD",
                        
                        totalpoints: 130
                    },
                     {
                        name: "Dinesh Karthik",
                        team: "KKR",
                        
                        totalpoints: 1029
                    },
                     {
                        name: "David Miller",
                        team: "KXIP",
                        
                        totalpoints: 106
                    },
                     {
                        name: "Wriddhiman Saha",
                        team: "SRH",
                        
                        totalpoints: 238
                    },
                     {
                        name: "Krunal Pandya",
                        team: "MI",
                        
                        totalpoints: 944
                    },
                     {
                        name: "Kamlesh Nagarkoti",
                        team: "KKR",
                        
                        totalpoints: 0
                    },
                     {
                        name: "M.S. Washington Sundar",
                        team: "RCB",
                        
                        totalpoints: 252

                    },
                     {
                        name: "Ravichandran Ashwin",
                        team: "KXIP",
                        
                        totalpoints: 658
                    },
                     {
                        name: "Shubman Gill",
                        team: "KKR",
                        
                        totalpoints: 360
                    },
                     {
                        name: "Shreyas Gopal",
                        team: "RR",
                        totalpoints: 585
                    },
                     {
                        name: "Sam Billings",
                        team: "CSK",
                        
                        totalpoints: 276
                    },
                     {
                        name: "Mitchell Johnson",
                        team: "KKR",
                        
                        totalpoints: 125
                    },
                     {
                        name: "Aditya Tare",
                        team: "MI",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Daniel Christian",
                        team: "DD",
                        
                        totalpoints: 155
                    },
                     {
                        name: "Sandeep Lamichhane",
                        team: "DD",
                        
                        totalpoints: 207
                    }
                ]
                    
                
            },
            {
                name: "Ram",
                players: [
                    {
                        name: "Murali Vijay",
                        team: "CSK",
                        
                        totalpoints: 16
                    },
                     {
                        name: "Parthiv Patel",
                        team: "RCB",
                        
                        totalpoints: 335
                    },
                     {
                        name: "Chris Lynn",
                        team: "KKR",
                        
                        totalpoints: 807
                    },
                     {
                        name: "Yuvraj Singh",
                        team: "KXIP",
                        
                        totalpoints: 97
                    },
                     {
                        name: "Karun Nair",
                        team: "KXIP",
                        
                        totalpoints: 615
                    },
                     {
                        name: "Hardik Pandya",
                        team: "MI",
                        
                        totalpoints: 1140
                    },
                     {
                        name: "Axar Patel",
                        team: "KXIP",
                        
                        totalpoints: 289
                    },
                     {
                        name: "Mandeep Singh",
                        team: "RCB",
                        
                        totalpoints: 441
                    },
                     {
                        name: "Sunil Naraine",
                        team: "KKR",
                        
                        totalpoints: 1420                    },
                     {
                        name: "Jasprit Bumrah",
                        team: "MI",
                        
                        totalpoints: 839
                    },
                     {
                        name: "Ben Laughlin",
                        team: "RR",
                        
                        totalpoints: 232
                    },
                     {
                        name: "Dushmantha Chameera",
                        team: "RR",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Jean-Paul Duminy",
                        team: "MI",
                        
                        totalpoints: 85
                    },
                     {
                        name: "Mohit Sharma",
                        team: "KXIP",
                        
                        totalpoints: 192
                    },
                     {
                        name: "Umesh Yadav",
                        team: "RCB",
                        
                        totalpoints: 896                    },
                     {
                        name: "Gurkeerat Singh Mann",
                        team: "DD",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Sachin Baby",
                        team: "SRH",
                        
                        totalpoints: 0
                    }
                ]
                     
                
            },

            {
                name: "Jackie",
                players: [
                    {
                        name: "Quinton De Kock",
                        team: "RCB",
                        
                        totalpoints: 431
                    },
                     {
                        name: "Rohit Sharma",
                        team: "MI",
                        
                        totalpoints: 601
                    },
                     {
                        name: "Rahul Tripathi",
                        team: "RR",
                        
                        totalpoints: 414
                    },
                     {
                        name: "Kedar Jadhav",
                        team: "CSK",
                        
                        totalpoints: 36
                    },
                     {
                        name: "Ravindra Jadeja",
                        team: "CSK",
                        
                        totalpoints: 770
                    },
                     {
                        name: "Shikhar Dhawan",
                        team: "SRH",
                        
                        totalpoints: 960
                    },
                     {
                        name: "Shreyas Iyer",
                        team: "DD",
                        
                        totalpoints: 783
                    },
                     {
                        name: "Imran Tahir",
                        team: "CSK",
                        
                        totalpoints: 223
                    },
                     {
                        name: "Ankit Sharma",
                        team: "RR",
                        
                        totalpoints: 4
                    },
                     {
                        name: "Jofra Archer",
                        team: "RR",
                        
                        totalpoints: 574
                    },
                     {
                        name: "Deepak Hooda",
                        team: "SRH",
                        
                        totalpoints: 140
                    },
                     {
                        name: "Mohammad Nabi",
                        team: "SRH",
                        
                        totalpoints: 71
                    },
                     {
                        name: "Trent Boult",
                        team: "DD",
                        
                        totalpoints: 719
                    },
                     {
                        name: "Shahbaz Nadeem",
                        team: "DD",
                        
                        totalpoints: 87
                    },
                     {
                        name: "Moeen Ali",
                        team: "RCB",
                        
                        totalpoints: 328
                    },
                     {
                        name: "Tim Southee",
                        team: "RCB",
                        
                        totalpoints: 363
                    },
                     {
                        name: "Kulwant Khejroliya",
                        team: "RCB",
                        
                        totalpoints: 62
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
                        name: "Shane Watson",
                        team: "CSK",
                        
                        totalpoints: 1116
                    },
                     {
                        name: "Aaron Finch",
                        team: "KXIP",
                        
                        totalpoints: 255
                    },
                     {
                        name: "Lungisani Ngidi",
                        team: "CSK",
                        
                        totalpoints: 528
                    },
                     {
                        name: "Sanju Samson",
                        team: "RR",
                        
                        totalpoints: 845
                    },
                     {
                        name: "Suryakumar Yadav",
                        team: "MI",
                        
                        totalpoints: 978
                    },
                     {
                        name: "Chris Woakes",
                        team: "RCB",
                        
                        totalpoints: 255
                    },
                     {
                        name: "Siddarth Kaul",
                        team: "SRH",
                        
                        totalpoints: 762
                    },
                     {
                        name: "Sandeep Sharma",
                        team: "SRH",
                        
                        totalpoints: 570
                    },
                     {
                        name: "Yusuf Pathan",
                        team: "SRH",
                        
                        totalpoints: 422
                    },
                     {
                        name: "Shreevats Goswami",
                        team: "SRH",
                        
                        totalpoints: 147
                    },
                     {
                        name: "Andre Russel",
                        team: "KKR",
                        
                        totalpoints: 1131
                    },
                     {
                        name: "Shivam Mavi",
                        team: "KKR",
                        
                        totalpoints: 203
                    },
                     {
                        name: "Apoorv Vijay Wankhade",
                        team: "KKR",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Mark wood",
                        team: "CSK",
                        
                        totalpoints: 7
                    },
                     {
                        name: "Ankit Singh Rajpoot",
                        team: "KXIP",
                        
                        totalpoints: 550                    },
                     {
                        name: "Jayant Yadav",
                        team: "DD",
                        
                        totalpoints: 0
                    }
                ]
                    
                
            },
            {
                name: "Vinod",
                players: [
                    {
                        name: "Faf Du Plessis",
                        team: "CSK",
                        
                        totalpoints: 294
                    },
                     {
                        name: "Alex Hales",
                        team: "SRH",
                        
                        totalpoints: 258
                    },
                     {
                        name: "AB de Villers",
                        team: "RCB",
                        
                        totalpoints: 1064
                    },
                     {
                        name: "Robin Uthappa",
                        team: "KKR",
                        
                        totalpoints: 653
                    },
                     {
                        name: "Glenn Maxwell",
                        team: "DD",
                        
                        totalpoints: 503
                    },
                     {
                        name: "Manan Vohra",
                        team: "RCB",
                        
                        totalpoints: 83
                    },
                     {
                        name: "Chris Morris",
                        team: "DD",
                        
                        totalpoints: 179
                    },
                     {
                        name: "Andrew Tye",
                        team: "KXIP",
                        
                        totalpoints: 962
                    },
                     {
                        name: "Karn Sharma",
                        team: "CSK",
                        
                        totalpoints: 114
                    },
                     {
                        name: "Amit Mishra",
                        team: "DD",
                        
                        totalpoints: 564
                    },
                     {
                        name: "Kuldeep Singh Yadav",
                        team: "KKR",
                        
                        totalpoints: 683
                    },
                     {
                        name: "Piyush Chawla",
                        team: "KKR",
                        
                        totalpoints: 539
                    },
                     {
                        name: "Rahul Chahar",
                        team: "MI",
                        
                        totalpoints: 0
                    },
                     {
                        name: "Barinder Singh Sran",
                        team: "KXIP",
                        
                        totalpoints: 154
                    },
                     {
                        name: "Stuart Binny",
                        team: "RR",
                        
                        totalpoints: 77
                    },
                     {
                        name: "Deepak Chahar",
                        team: "CSK",
                        
                        totalpoints: 612
                    },
                     {
                        name: "Tajinder Dhillon Singh",
                        team: "MI",
                        
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
            "Yuzvendra Chahal": 269,
            "Nitish Rana": 251,
            "Chris Gayle": 247,
            "Ravindra Jadeja": 236,
            "Harbhajan Singh": 220,
            "Jasprit Bumrah": 205,
            "Imran Tahir": 205,
            "Robin Uthappa": 189,
            "Mohammed Siraj": 185,
            "Yuvraj Singh": 159,
            "David Warner": 157,
            "Shikhar Dhawan": 149,
            "Mayank Agarwal": 148,
            "Shane Watson": 146,
            "Dwayne Bravo": 141,
            "AB de Villiers": 140,
            "Jos Buttler": 140,
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
            "Suryakumar Yadav": 86,
            "Colin Ingram": 86,
            "Deepak Chahar": 85,
            "Virat Kohli": 84,
            "Mandeep Singh": 79,
            "Vijay Shankar": 75,
            "Ankit Rajpoot": 75,
            "Mujeeb Zadran": 75,
            "Ishant Sharma": 75,
            "Rahul Tewatia": 70,
            "Hardik Pandya": 70,
            "Krunal Pandya": 66,
            "Ajinkya Rahane": 65,
            "Amit Mishra": 65,
            "Shreyas Iyer": 64,
            "Ben Stokes": 64,
            "Axar Patel": 62,
            "MS Dhoni": 59,
            "Prithvi Shaw": 58,
            "Kieron Pollard": 58,
            "Jonny Bairstow": 58,
            "Kedar Jadhav": 56,
            "Ravichandran Ashwin": 55,
            "Sam Curran": 55,
            "Rashid Khan": 50,
            "Sanju Samson": 43,
            "Dhawal Kulkarni": 42,
            "Piyush Chawla": 40,
            "Lokesh Rahul": 37,
            "Steven Smith": 35,
            "Mayank Markande": 33,
            "Jofra Archer": 32,
            "Shivam Dube": 24,
            "Shubman Gill": 24,
            "Chris Lynn": 24,
            "Nicholas Pooran": 24,
            "Keemo Paul": 23,
            "Ambati Rayudu": 22,
            "Sunil Narine": 20,
            "Krishnappa Gowtham": 18,
            "Mohammed Shami": 15,
            "Trent Boult": 15,
            "Siddarth Kaul": 15,
            "Dinesh Karthik": 13,
            "Rahul Tripathi": 11,
            "Manish Pandey": 10,
            "Hardus Vilojen": 10,
            "Andrew Tye": 10,
            "Ben Cutting": 8,
            "Navdeep Saini": 7,
            "Shakib Al Hasan": 5,
            "Varun Chakaravarthy": 5,
            "Sandeep Sharma": 5,
            "Shardul Thakur": 5,
            "Yusuf Pathan": 1,
            "Shreyas Gopal": 1,
            "Harry Gurney": 0,
            "Joe Denly": 0,
            "Moises Henriques": 0,
            "Prithvi Raj Yarra": 0,
            "Jason Behrendorff": 0,
            "Ruturaj Gaikwad": 0,
            "Sherfane Rutherford": 0,
            "Siddhesh Lad": 0,
            "Faf du Plessis": 0,
            "Varun Aaron": 0,
            "Ish Sodhi": 0,
            "Agnivesh Ayachi": 0,
            "Aryaman Birla": 0,
            "Harshal Patel": 0,
            "Kamlesh Nagarkoti": 0,
            "Lungi Ngidi": 0,
            "Monu Kumar": 0,
            "Oshane Thomas": 0,
            "Rahul Chahar": 0,
            "Sam Billings": 0,
            "Sudhesan Midhun": 0,
            "Nathan Coulter-Nile": 0,
            "Tim Southee": 0,
            "Akshdeep Nath": 0,
            "Avesh Khan": 0,
            "Devdutt Padikkal": 0,
            "Heinrich Klaasen": 0,
            "Mahipal Lomror": 0,
            "Murugan Ashwin": 0,
            "Martin Guptill": 0,
            "Pankaj Jaswal": 0,
            "Syed Khaleel Ahmed": 0,
            "Carlos Brathwaite": 0,
            "David Willey": 0,
            "Deepak Hooda": 0,
            "Dhruv Shorey": 0,
            "Himmat Singh": 0,
            "Manan Vohra": 0,
            "Narayan Jagadeesan": 0,
            "Pawan Negi": 0,
            "Sandeep Lamichhane": 0,
            "Shivam Mavi": 0,
            "T Natarajan": 0,
            "Chris Morris": 0,
            "Adam Milne": 0,
            "Ankush Bains": 0,
            "Bandaru Ayyappa": 0,
            "Gurkeerat Singh": 0,
            "Ishan Kishan": 0,
            "KM Asif": 0,
            "Nathu Singh": 0,
            "Prabhsimran Singh": 0,
            "Shreevats Goswami": 0,
            "Murali Vijay": 0,
            "Washington Sundar": 0,
            "Anmolpreet Singh": 0,
            "Barinder Sran": 0,
            "Hanuma Vihari": 0,
            "Manjot Kalra": 0,
            "Prashant Chopra": 0,
            "Ricky Bhui": 0,
            "Shahbaz Nadeem": 0,
            "Mohit Sharma": 0,
            "Shrikant Mundhe": 0,
            "Wriddhiman Saha": 0,
            "Mitchell Santner": 0,
            "Stuart Binny": 0,
            "Karun Nair": 0,
            "Anrich Nortje": 0,
            "Basil Thampi": 0,
            "Jalaj Saxena": 0,
            "Kulwant Khejroliya": 0,
            "Marcus Stoinis": 0,
            "Rinku Singh": 0,
            "Billy Stanlake": 0,
            "Shubham Ranjane": 0,
            "Evin Lewis": 0,
            "Sandeep Warrier": 0,
            "Ashton Turner": 0,
            "Abhishek Sharma": 0,
            "Anukul Roy": 0,
            "Chaitanya Bishnoi": 0,
            "Harpreet Brar": 0,
            "Jayant Yadav": 0,
            "Liam Livingstone": 0,
            "Milind Kumar": 0,
            "Colin Munro": 0,
            "Nikhil Naik": 0,
            "Kane Williamson": 0,
            "Prayas Barman": 0,
            "Mohammad Nabi": 0,
            "Riyan Parag": 0,
            "Shashank Singh": 0,
            "KC Cariappa": 0,
            "Karn Sharma": 0,
            "Aditya Tare": 0,
            "Arshdeep Singh": 0,
            "Darshan Nalkande": 0,
            "Lockie Ferguson": -5,
            "Shimron Hetmyer": -5,
            "Bhuvneshwar Kumar": -5,
            "Rasikh Dar": -5,
            "Colin de Grandhomme": -7,
            "Prasidh Krishna": -10,
            "Kuldeep Yadav": -15,
            "Jaydev Unadkat": -19,
            "Lasith Malinga": -20,
            "Alzarri Joseph": 0
          }
          angular.forEach($scope.cricBattlePlayers, function (score, cricBattlePlayer) {
           
            if(cricBattlePlayer.toLowerCase().includes(player.toLowerCase()) === true)
                return score;
          });
        };

        $scope.playerScore = function(){
            angular.forEach($scope.allParticipants, function (participant, key) {
                angular.forEach(participant.players, function (player, key) {
                  player.total = $scope.getScore(player.name);
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
                return b.totalpoints - a.totalpoints;
            });
            for (var i = 0; i < 14; i++) {
                if (!angular.equals($scope.obj[i].totalpoints, '-')) {
                    score = score + parseFloat($scope.obj[i].totalpoints);
                }

            }

            participant['total'] = score;
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
