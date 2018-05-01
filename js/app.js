(function () {

    var myApp = angular.module('myApp', []);

    myApp.controller('myController', ['$scope', function ($scope) {
        $scope.greeting = 'Hola!';
        $scope.obj = [];
        $scope.allParticipants = [
            {
                name: "Aadarsh",
                players: [
                    {
                        name: "Dhoni",
                        team: "CSK",
                        value: '35m',
                        totalpoints: 548
                    },
                    {
                        name: "Butler",
                        team: "RR",
                        value: '30m',
                        totalpoints: 222
                    },
                    {
                        name: "Pollard",
                        team: "MI",
                        value: '13m',
                        totalpoints: 106
                    },
                    {
                        name: "M Pandey",
                        team: "SRH",
                        value: '5m',
                        totalpoints: 283
                    },
                    {
                        name: "KL Rahul",
                        team: "KXIP",
                        value: '5m',
                        totalpoints: 607
                    },
                    {
                        name: "Rana",
                        team: "KKR",
                        value: '10m',
                        totalpoints: 470
                    },
                    {
                        name: "Manoj Tiwary",
                        team: "KXIP",
                        value: '8m',
                        totalpoints: -4
                    },
                    {
                        name: "Roy",
                        team: "DD",
                        value: '15m',
                        totalpoints: 240
                    },
                    {
                        name: "Mustafizur",
                        team: "MI",
                        value: '10m',
                        totalpoints: 284
                    },
                    {
                        name: "Rashid khan",
                        team: "SRH",
                        value: '10m',
                        totalpoints: 570
                    },
                    {
                        name: "Chahal",
                        team: "RCB",
                        value: '17m',
                        totalpoints: 276
                    },
                    {
                        name: "Negi",
                        team: "RCB",
                        value: '15m',
                        totalpoints: 12
                    },
                    {
                        name: "Ben Cutting",
                        team: "MI",
                        value: '5m',
                        totalpoints: 31
                    },
                    {
                        name: "Shami",
                        team: "DD",
                        value: '2m',
                        totalpoints: 108
                    },
                    {
                        name: "Sarfaraz Khan",
                        team: "RCB",
                        value: '12m',
                        totalpoints: 26
                    },
                    {
                        name: "Naman Ojha",
                        team: "DD",
                        value: '12m',
                        totalpoints: 0
                    },
                    {
                        name: "Prithvi Shaw",
                        team: "DD",
                        value: '12m',
                        totalpoints: 159
                    }

                ]


            },

            {
                name: "Adi",
                players: [
                    {
                        name: "Stokes",
                        team: "RR",
                        value: '14m',
                        totalpoints: 291
                    },
                    {
                        name: "Kishan",
                        team: "MI",
                        value: '32m',
                        totalpoints: 337
                    },
                    {
                        name: "Evin Lewis",
                        team: "MI",
                        value: '33m',
                        totalpoints: 339
                    },

                    {
                        name: "Mayank",
                        team: "KXIP",
                        value: '5m',
                        totalpoints: 210
                    },
                    {
                        name: "Unadkat",
                        team: "RR",
                        value: '20m',
                        totalpoints: 151
                    },

                    {
                        name: "Rabada",
                        team: "DD",
                        value: '8m',
                        totalpoints: 0
                    },

                    {
                        name: "K Gowtham",
                        team: "RR",
                        value: '7m',
                        totalpoints: 267
                    },
                    {
                        name: "S Thakur",
                        team: "CSK",
                        value: '5m',
                        totalpoints: 282
                    },
                    {
                        name: "Cummins",
                        team: "MI",
                        value: '3m',
                        totalpoints: 0
                    },
                    {
                        name: "Rayudu",
                        team: "CSK",
                        value: '5m',
                        totalpoints: 646
                    },
                    {
                        name: "M Zadran",
                        team: "KXIP",
                        value: '20m',
                        totalpoints: 401
                    },
                    {
                        name: "Vijay Shankar",
                        team: "DD",
                        value: '18m',
                        totalpoints: 55
                    },
                    {
                        name: "Shakib",
                        team: "SRH",
                        value: '10m',
                        totalpoints: 543
                    },
                    {
                        name: "Mohammed Siraj",
                        team: "RCB",
                        value: '7m',
                        totalpoints: 69
                    },
                    {
                        name: "Vinay Kumar",
                        team: "KKR",
                        value: '13m',
                        totalpoints: 60
                    },
                    {
                        name: "Brendon McCullum",
                        team: "RCB",
                        value: '13m',
                        totalpoints: 88
                    },
                    {
                        name: "Pradeep Sangwan",
                        team: "Mi",
                        value: '13m',
                        totalpoints: 0
                    }

                ]


            },
            {
                name: "Chatur",
                players: [
                    {
                        name: "Kohli",
                        team: "RCB",
                        value: '21m',
                        totalpoints: 441
                    },
                    {
                        name: "Rahane",
                        team: "RR",
                        value: '36m',
                        totalpoints: 266
                    },
                    {
                        name: "Darcy Short",
                        team: "RR",
                        value: '16m',
                        totalpoints: 143
                    },
                    {
                        name: "Christopher Gayle",
                        team: "KXIP",
                        value: '15m',
                        totalpoints: 553
                    },
                    {
                        name: "Marcus Stoinis",
                        team: "KXIP",
                        value: '9m',
                        totalpoints: 55
                    },
                    {
                        name: "Kane Williamson",
                        team: "SRH",
                        value: '19m',
                        totalpoints: 518
                    },
                    {
                        name: "Pant",
                        team: "DD",
                        value: '6m',
                        totalpoints: 468
                    },
                    {
                        name: "Bhuvaneshwar Kumar",
                        team: "SRH",
                        value: '5m',
                        totalpoints: 261
                    },
                    {
                        name: "Billy Stanlake",
                        team: "SRH",
                        value: '19m',
                        totalpoints: 242
                    },
                    {
                        name: "Basil Thampi",
                        team: "SRH",
                        value: '11m',
                        totalpoints: 172
                    },
                    {
                        name: "Mitchell McClenagahan",
                        team: "MI",
                        value: '18m',
                        totalpoints: 230
                    },
                    {
                        name: "Dhawal Kulkarni",
                        team: "RR",
                        value: '6m',
                        totalpoints: 124
                    },
                    {
                        name: "Harbhajan Singh",
                        team: "CSK",
                        value: '4m',
                        totalpoints: 176
                    },
                    {
                        name: "Navdeep Saini",
                        team: "RCB",
                        value: '14m',
                        totalpoints: 0
                    },
                    {
                        name: "T Natarajan",
                        team: "SRH",
                        value: '1m',
                        totalpoints: 0
                    },
                    {
                        name: "Carlos Brathwaite",
                        team: "SRH",
                        value: '1m',
                        totalpoints: 0
                    },
                    {
                        name: "Ishank Jaggi",
                        team: "KKR",
                        value: '1m',
                        totalpoints: 0
                    }
                ]


            },
            {
                name: "Raj",
                players: [
                    {
                        name: "Suresh Raina",
                        team: "CSK",
                        value: '29m',
                        totalpoints: 413
                    },
                    {
                        name: "Gautam Gambhir",
                        team: "DD",
                        value: '8m',
                        totalpoints: 122
                    },
                    {
                        name: "Colin Munro",
                        team: "DD",
                        value: '21m',
                        totalpoints: 73
                    },
                    {
                        name: "Dinesh Karthik",
                        team: "KKR",
                        value: '10m',
                        totalpoints: 394
                    },
                    {
                        name: "David Miller",
                        team: "KXIP",
                        value: '22m',
                        totalpoints: 77
                    },
                    {
                        name: "Wriddhiman Saha",
                        team: "SRH",
                        value: '12m',
                        totalpoints: 164
                    },
                    {
                        name: "Krunal Pandya",
                        team: "MI",
                        value: '12m',
                        totalpoints: 509
                    },
                    {
                        name: "Kamlesh Nagarkoti",
                        team: "KKR",
                        value: '8m',
                        totalpoints: 0
                    },
                    {
                        name: "M.S. Washington Sundar",
                        team: "RCB",
                        value: '6m',
                        totalpoints: 254

                    },
                    {
                        name: "Ravichandran Ashwin",
                        team: "KXIP",
                        value: '16m',
                        totalpoints: 367
                    },
                    {
                        name: "Shubman Gill",
                        team: "KKR",
                        value: '18m',
                        totalpoints: 102
                    },
                    {
                        name: "Shreyas Gopal",
                        team: "RR",
                        value: '3m',
                        totalpoints: 269
                    },
                    {
                        name: "Sam Billings",
                        team: "CSK",
                        value: '21m',
                        totalpoints: 225
                    },
                    {
                        name: "Mitchell Johnson",
                        team: "KKR",
                        value: '7m',
                        totalpoints: 111
                    },
                    {
                        name: "Aditya Tare",
                        team: "MI",
                        value: '7m',
                        totalpoints: 0
                    },
                    {
                        name: "Daniel Christian",
                        team: "DD",
                        value: '7m',
                        totalpoints: 149
                    },
                    {
                        name: "Sandeep Lamichhane",
                        team: "DD",
                        value: '7m',
                        totalpoints: 0
                    }
                ]


            },
            {
                name: "Ram",
                players: [
                    {
                        name: "Murali Vijay",
                        team: "CSK",
                        value: '36m',
                        totalpoints: 16
                    },
                    {
                        name: "Parthiv Patel",
                        team: "RCB",
                        value: '33m',
                        totalpoints: 0
                    },
                    {
                        name: "Chris Lynn",
                        team: "KKR",
                        value: '5m',
                        totalpoints: 306
                    },
                    {
                        name: "Yuvraj Singh",
                        team: "KXIP",
                        value: '18m',
                        totalpoints: 172
                    },
                    {
                        name: "Karun Nair",
                        team: "KXIP",
                        value: '11m',
                        totalpoints: 381
                    },
                    {
                        name: "Hardik Pandya",
                        team: "MI",
                        value: '23m',
                        totalpoints: 397
                    },
                    {
                        name: "Axar Patel",
                        team: "KXIP",
                        value: '20m',
                        totalpoints: 83
                    },
                    {
                        name: "Mandeep Singh",
                        team: "RCB",
                        value: '1m',
                        totalpoints: 303
                    },
                    {
                        name: "Sunil Naraine",
                        team: "KKR",
                        value: '3m',
                        totalpoints: 619
                    },
                    {
                        name: "Jasprit Bumrah",
                        team: "MI",
                        value: '6m',
                        totalpoints: 385
                    },
                    {
                        name: "Ben Laughlin",
                        team: "RR",
                        value: '9m',
                        totalpoints: 128
                    },
                    {
                        name: "Dushmantha Chameera",
                        team: "RR",
                        value: '21m',
                        totalpoints: 0
                    },
                    {
                        name: "Jean-Paul Duminy",
                        team: "MI",
                        value: '12m',
                        totalpoints: 5
                    },
                    {
                        name: "Mohit Sharma",
                        team: "KXIP",
                        value: '1m',
                        totalpoints: 112
                    },
                    {
                        name: "Umesh Yadav",
                        team: "RCB",
                        value: '1m',
                        totalpoints: 383
                    },
                    {
                        name: "Gurkeerat Singh Mann",
                        team: "DD",
                        value: '1m',
                        totalpoints: 0
                    },
                    {
                        name: "Sachin Baby",
                        team: "SRH",
                        value: '1m',
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
                        value: '16m',
                        totalpoints: 343
                    },
                    {
                        name: "Rohit Sharma",
                        team: "MI",
                        value: '20m',
                        totalpoints: 445
                    },
                    {
                        name: "Rahul Tripathi",
                        team: "RR",
                        value: '24m',
                        totalpoints: 120
                    },
                    {
                        name: "Kedar Jadhav",
                        team: "CSK",
                        value: '19m',
                        totalpoints: 36
                    },
                    {
                        name: "Ravindra Jadeja",
                        team: "CSK",
                        value: '16m',
                        totalpoints: 225
                    },
                    {
                        name: "Shikhar Dhawan",
                        team: "SRH",
                        value: '7m',
                        totalpoints: 335
                    },
                    {
                        name: "Shreyas Iyer",
                        team: "DD",
                        value: '28m',
                        totalpoints: 536
                    },
                    {
                        name: "Imran Tahir",
                        team: "CSK",
                        value: '20m',
                        totalpoints: 223
                    },
                    {
                        name: "Ankit Sharma",
                        team: "RR",
                        value: '15m',
                        totalpoints: 0
                    },
                    {
                        name: "Jofra Archer",
                        team: "RR",
                        value: '8m',
                        totalpoints: 153
                    },
                    {
                        name: "Deepak Hooda",
                        team: "SRH",
                        value: '1m',
                        totalpoints: 105
                    },
                    {
                        name: "Mohammad Nabi",
                        team: "SRH",
                        value: '10m',
                        totalpoints: 71
                    },
                    {
                        name: "Trent Boult",
                        team: "DD",
                        value: '1m',
                        totalpoints: 396
                    },
                    {
                        name: "Shahbaz Nadeem",
                        team: "DD",
                        value: '1m',
                        totalpoints: 87
                    },
                    {
                        name: "Moeen Ali",
                        team: "RCB",
                        value: '14m',
                        totalpoints: 0
                    },
                    {
                        name: "Tim Southee",
                        team: "RCB",
                        value: '14m',
                        totalpoints: 0
                    },
                    {
                        name: "Kulwant Khejroliya",
                        team: "RCB",
                        value: '14m',
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
                        value: '35m',
                        totalpoints: 515
                    },
                    {
                        name: "Shane Watson",
                        team: "CSK",
                        value: '25m',
                        totalpoints: 637
                    },
                    {
                        name: "Aaron Finch",
                        team: "KXIP",
                        value: '14m',
                        totalpoints: 77
                    },
                    {
                        name: "Lungisani Ngidi",
                        team: "CSK",
                        value: '14m',
                        totalpoints: 0
                    },
                    {
                        name: "Sanju Samson",
                        team: "RR",
                        value: '10m',
                        totalpoints: 477
                    },
                    {
                        name: "Suryakumar Yadav",
                        team: "MI",
                        value: '14m',
                        totalpoints: 475
                    },
                    {
                        name: "Chris Woakes",
                        team: "RCB",
                        value: '25m',
                        totalpoints: 255
                    },
                    {
                        name: "Siddarth Kaul",
                        team: "SRH",
                        value: '5m',
                        totalpoints: 400
                    },
                    {
                        name: "Sandeep Sharma",
                        team: "SRH",
                        value: '15m',
                        totalpoints: 253
                    },
                    {
                        name: "Yusuf Pathan",
                        team: "SRH",
                        value: '2m',
                        totalpoints: 267
                    },
                    {
                        name: "Shreevats Goswami",
                        team: "SRH",
                        value: '14m',
                        totalpoints: 0
                    },
                    {
                        name: "Andre Russel",
                        team: "KKR",
                        value: '13m',
                        totalpoints: 522
                    },
                    {
                        name: "Shivam Mavi",
                        team: "KKR",
                        value: '6m',
                        totalpoints: 109
                    },
                    {
                        name: "Apoorv Vijay Wankhade",
                        team: "KKR",
                        value: '1m',
                        totalpoints: 0
                    },
                    {
                        name: "Mark wood",
                        team: "CSK",
                        value: '7m',
                        totalpoints: 7
                    },
                    {
                        name: "Ankit Singh Rajpoot",
                        team: "KXIP",
                        value: '7m',
                        totalpoints: 386
                    },
                    {
                        name: "Jayant Yadav",
                        team: "DD",
                        value: '7m',
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
                        value: '36m',
                        totalpoints: 15
                    },
                    {
                        name: "Alex Hales",
                        team: "SRH",
                        value: '30m',
                        totalpoints: 0
                    },
                    {
                        name: "AB de Villers",
                        team: "RCB",
                        value: '21m',
                        totalpoints: 610
                    },
                    {
                        name: "Robin Uthappa",
                        team: "KKR",
                        value: '14m',
                        totalpoints: 300
                    },
                    {
                        name: "Glenn Maxwell",
                        team: "DD",
                        value: '25m',
                        totalpoints: 341
                    },
                    {
                        name: "Manan Vohra",
                        team: "RCB",
                        value: '4m',
                        totalpoints: 4
                    },
                    {
                        name: "Chris Morris",
                        team: "DD",
                        value: '3m',
                        totalpoints: 179
                    },
                    {
                        name: "Andrew Tye",
                        team: "KXIP",
                        value: '2m',
                        totalpoints: 416
                    },
                    {
                        name: "Karn Sharma",
                        team: "CSK",
                        value: '3m',
                        totalpoints: 100
                    },
                    {
                        name: "Amit Mishra",
                        team: "DD",
                        value: '2m',
                        totalpoints: 118
                    },
                    {
                        name: "Kuldeep Singh Yadav",
                        team: "KKR",
                        value: '7m',
                        totalpoints: 260
                    },
                    {
                        name: "Piyush Chawla",
                        team: "KKR",
                        value: '13m',
                        totalpoints: 262
                    },
                    {
                        name: "Rahul Chahar",
                        team: "MI",
                        value: '27m',
                        totalpoints: 0
                    },
                    {
                        name: "Barinder Singh Sran",
                        team: "KXIP",
                        value: '10m',
                        totalpoints: 149
                    },
                    {
                        name: "Stuart Binny",
                        team: "RR",
                        value: '3m',
                        totalpoints: 0
                    },
                    {
                        name: "Deepak Chahar",
                        team: "CSK",
                        value: '3m',
                        totalpoints: 302
                    },
                    {
                        name: "Tajinder Dhillon Singh",
                        team: "MI",
                        value: '3m',
                        totalpoints: 0
                    }
                ]


            }
        ];
        $scope.topPlayers = [];

        angular.forEach($scope.allParticipants, function (participant, key) {
            angular.forEach(participant.players, function (player, key) {
                $scope.topPlayers.push({
                    name: player.name,
                    points: player.totalpoints
                });
            })


        });



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
