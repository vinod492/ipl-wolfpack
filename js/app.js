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
                        value: '$17',
                        totalpoints: 103
                    },
                    {
                        name: "Butler",
                        team: "RR",
                        value: '$11',
                        totalpoints: 121
                    },
                     {
                        name: "Pollard",
                        team: "MI",
                        value: '$16',
                        totalpoints: 257
                    },
                    {
                        name: "M Pandey",
                        team: "SRH",
                        value: '$26',
                        totalpoints: 534
                    },
                     {
                        name: "KL Rahul",
                        team: "KXIP",
                        value: '$23',
                        totalpoints: 1403
                    },
                    {
                        name: "Rana",
                        team: "KKR",
                        value: '$18',
                        totalpoints: 669
                    },
                    {
                        name: "Manoj Tiwary",
                        team: "KXIP",
                        value: '$3',
                        totalpoints: 108
                    },
                    {
                        name: "Roy",
                        team: "DD",
                        value: '$11',
                        totalpoints: 269
                    },
                   {
                        name: "Mustafizur",
                        team: "MI",
                        value: '$5',
                        totalpoints: 297
                    },
                    {
                        name: "Rashid khan",
                        team: "SRH",
                        value: '$27',
                        totalpoints: 1062
                    },
                   {
                        name: "Chahal",
                        team: "RCB",
                        value: '$28',
                        totalpoints: 618
                    },
                    {
                        name: "Negi",
                        team: "RCB",
                        value: '$1',
                        totalpoints: 12
                    },
                     {
                        name: "Ben Cutting",
                        team: "MI",
                        value: '$1',
                        totalpoints: 310
                    },
                    {
                        name: "Shami",
                        team: "DD",
                        value: '$3',
                        totalpoints: 108
                    },
                    {
                        name: "Sarfaraz Khan",
                        team: "RCB",
                        value: '$4',
                        totalpoints: 98
                    },
                    {
                        name: "Naman Ojha",
                        team: "DD",
                        value: '$2',
                        totalpoints: -2
                    },
                    {
                        name: "Prithvi Shaw",
                        team: "DD",
                        value: '$4',
                        totalpoints: 472
                    }

                ]
                    

            },

            {
                name: "Adi",
                players: [
                    {
                        name: "Stokes",
                        team: "RR",
                        value: '$45',
                        totalpoints: 723
                    },
                   {
                        name: "Kishan",
                        team: "MI",
                        value: '$15',
                        totalpoints: 637
                    },
                   {
                        name: "Evin Lewis",
                        team: "MI",
                        value: '$22',
                        totalpoints: 683
                    },
                    
                     {
                        name: "Mayank",
                        team: "KXIP",
                        value: '$1',
                        totalpoints: 225
                    },
                    {
                        name: "Unadkat",
                        team: "RR",
                        value: '$23',
                        totalpoints: 501
                    },
                    
                     {
                        name: "Rabada",
                        team: "DD",
                        value: '$10',
                        totalpoints: 0
                    },
                   
                     {
                        name: "K Gowtham",
                        team: "RR",
                        value: '$10',
                        totalpoints: 824
                    },
                     {
                        name: "S Thakur",
                        team: "CSK",
                        value: '$14',
                        totalpoints: 596
                    },
                     {
                        name: "Cummins",
                        team: "MI",
                        value: '$12',
                        totalpoints: 0
                    },
                     {
                        name: "Rayudu",
                        team: "CSK",
                        value: '$1',
                        totalpoints: 1172
                    },
                     {
                        name: "M Zadran",
                        team: "KXIP",
                        value: '$2',
                        totalpoints: 667
                    },
                     {
                        name: "Vijay Shankar",
                        team: "DD",
                        value: '$2',
                        totalpoints: 454
                    },
                     {
                        name: "Shakib",
                        team: "SRH",
                        value: '$10',
                        totalpoints: 836
                    },
                     {
                        name: "Mohammed Siraj",
                        team: "RCB",
                        value: '$5',
                        totalpoints: 479
                    },
                     {
                        name: "Vinay Kumar",
                        team: "KKR",
                        value: '$5',
                        totalpoints: 60
                    },
                     {
                        name: "Brendon McCullum",
                        team: "RCB",
                        value: '$8',
                        totalpoints: 224
                    },
                     {
                        name: "Pradeep Sangwan",
                        team: "Mi",
                        value: '$15',
                        totalpoints: -5
                    }

                ]
                   
                
            },
            {
                name: "Chatur",
                players: [
                    {
                        name: "Kohli",
                        team: "RCB",
                        value: '$40',
                        totalpoints: 997
                    },
                     {
                        name: "Rahane",
                        team: "RR",
                        value: '$25',
                        totalpoints: 606
                    },
                     {
                        name: "Darcy Short",
                        team: "RR",
                        value: '$21',
                        totalpoints: 242
                    },
                     {
                        name: "Christopher Gayle",
                        team: "KXIP",
                        value: '$7',
                        totalpoints: 748
                    },
                     {
                        name: "Marcus Stoinis",
                        team: "KXIP",
                        value: '$6',
                        totalpoints: 233
                    },
                     {
                        name: "Kane Williamson",
                        team: "SRH",
                        value: '$27',
                        totalpoints: 1368
                    },
                     {
                        name: "Pant",
                        team: "DD",
                        value: '$16',
                        totalpoints: 1476
                    },
                     {
                        name: "Bhuvaneshwar Kumar",
                        team: "SRH",
                        value: '$34',
                        totalpoints: 442
                    },
                     {
                        name: "Billy Stanlake",
                        team: "SRH",
                        value: '$1',
                        totalpoints: 242
                    },
                     {
                        name: "Basil Thampi",
                        team: "SRH",
                        value: '$9',
                        totalpoints: 159
                    },
                     {
                        name: "Mitchell McClenagahan",
                        team: "MI",
                        value: '$3',
                        totalpoints: 508
                    },
                     {
                        name: "Dhawal Kulkarni",
                        team: "RR",
                        value: '$3',
                        totalpoints: 181
                    },
                     {
                        name: "Harbhajan Singh",
                        team: "CSK",
                        value: '$4',
                        totalpoints: 393
                    },
                     {
                        name: "Navdeep Saini",
                        team: "RCB",
                        value: '$1',
                        totalpoints: 0
                    },
                     {
                        name: "T Natarajan",
                        team: "SRH",
                        value: '$1',
                        totalpoints: 0
                    },
                     {
                        name: "Carlos Brathwaite",
                        team: "SRH",
                        value: '$1',
                        totalpoints: 154
                    },
                     {
                        name: "Ishank Jaggi",
                        team: "KKR",
                        value: '$1',
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
                        value: '$27',
                        totalpoints: 819
                    },
                     {
                        name: "Gautam Gambhir",
                        team: "DD",
                        value: '$22',
                        totalpoints: 122
                    },
                     {
                        name: "Colin Munro",
                        team: "DD",
                        value: '$14',
                        totalpoints: 130
                    },
                     {
                        name: "Dinesh Karthik",
                        team: "KKR",
                        value: '$27',
                        totalpoints: 1029
                    },
                     {
                        name: "David Miller",
                        team: "KXIP",
                        value: '$5',
                        totalpoints: 106
                    },
                     {
                        name: "Wriddhiman Saha",
                        team: "SRH",
                        value: '$18',
                        totalpoints: 238
                    },
                     {
                        name: "Krunal Pandya",
                        team: "MI",
                        value: '$20',
                        totalpoints: 944
                    },
                     {
                        name: "Kamlesh Nagarkoti",
                        team: "KKR",
                        value: '$14',
                        totalpoints: 0
                    },
                     {
                        name: "M.S. Washington Sundar",
                        team: "RCB",
                        value: '$15',
                        totalpoints: 252

                    },
                     {
                        name: "Ravichandran Ashwin",
                        team: "KXIP",
                        value: '$10',
                        totalpoints: 658
                    },
                     {
                        name: "Shubman Gill",
                        team: "KKR",
                        value: '$3',
                        totalpoints: 360
                    },
                     {
                        name: "Shreyas Gopal",
                        team: "RR",
                        value: '3m',
                        totalpoints: 585
                    },
                     {
                        name: "Sam Billings",
                        team: "CSK",
                        value: '$1',
                        totalpoints: 276
                    },
                     {
                        name: "Mitchell Johnson",
                        team: "KKR",
                        value: '$12',
                        totalpoints: 125
                    },
                     {
                        name: "Aditya Tare",
                        team: "MI",
                        value: '$1',
                        totalpoints: 0
                    },
                     {
                        name: "Daniel Christian",
                        team: "DD",
                        value: '$9',
                        totalpoints: 155
                    },
                     {
                        name: "Sandeep Lamichhane",
                        team: "DD",
                        value: '$1',
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
                        value: '$11',
                        totalpoints: 16
                    },
                     {
                        name: "Parthiv Patel",
                        team: "RCB",
                        value: '$8',
                        totalpoints: 335
                    },
                     {
                        name: "Chris Lynn",
                        team: "KKR",
                        value: '$33',
                        totalpoints: 807
                    },
                     {
                        name: "Yuvraj Singh",
                        team: "KXIP",
                        value: '$14',
                        totalpoints: 97
                    },
                     {
                        name: "Karun Nair",
                        team: "KXIP",
                        value: '$8',
                        totalpoints: 615
                    },
                     {
                        name: "Hardik Pandya",
                        team: "MI",
                        value: '$21',
                        totalpoints: 1140
                    },
                     {
                        name: "Axar Patel",
                        team: "KXIP",
                        value: '$20',
                        totalpoints: 289
                    },
                     {
                        name: "Mandeep Singh",
                        team: "RCB",
                        value: '$3',
                        totalpoints: 441
                    },
                     {
                        name: "Sunil Naraine",
                        team: "KKR",
                        value: '$28',
                        totalpoints: 1420                    },
                     {
                        name: "Jasprit Bumrah",
                        team: "MI",
                        value: '$30',
                        totalpoints: 839
                    },
                     {
                        name: "Ben Laughlin",
                        team: "RR",
                        value: '$1',
                        totalpoints: 232
                    },
                     {
                        name: "Dushmantha Chameera",
                        team: "RR",
                        value: '$1',
                        totalpoints: 0
                    },
                     {
                        name: "Jean-Paul Duminy",
                        team: "MI",
                        value: '$6',
                        totalpoints: 85
                    },
                     {
                        name: "Mohit Sharma",
                        team: "KXIP",
                        value: '$2',
                        totalpoints: 192
                    },
                     {
                        name: "Umesh Yadav",
                        team: "RCB",
                        value: '$12',
                        totalpoints: 896                    },
                     {
                        name: "Gurkeerat Singh Mann",
                        team: "DD",
                        value: '$1',
                        totalpoints: 0
                    },
                     {
                        name: "Sachin Baby",
                        team: "SRH",
                        value: '$1',
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
                        value: '$16',
                        totalpoints: 431
                    },
                     {
                        name: "Rohit Sharma",
                        team: "MI",
                        value: '$30',
                        totalpoints: 601
                    },
                     {
                        name: "Rahul Tripathi",
                        team: "RR",
                        value: '$12',
                        totalpoints: 414
                    },
                     {
                        name: "Kedar Jadhav",
                        team: "CSK",
                        value: '$10',
                        totalpoints: 36
                    },
                     {
                        name: "Ravindra Jadeja",
                        team: "CSK",
                        value: '$17',
                        totalpoints: 770
                    },
                     {
                        name: "Shikhar Dhawan",
                        team: "SRH",
                        value: '$33',
                        totalpoints: 960
                    },
                     {
                        name: "Shreyas Iyer",
                        team: "DD",
                        value: '$12',
                        totalpoints: 783
                    },
                     {
                        name: "Imran Tahir",
                        team: "CSK",
                        value: '$14',
                        totalpoints: 223
                    },
                     {
                        name: "Ankit Sharma",
                        team: "RR",
                        value: '$6',
                        totalpoints: 4
                    },
                     {
                        name: "Jofra Archer",
                        team: "RR",
                        value: '$19',
                        totalpoints: 574
                    },
                     {
                        name: "Deepak Hooda",
                        team: "SRH",
                        value: '$8',
                        totalpoints: 140
                    },
                     {
                        name: "Mohammad Nabi",
                        team: "SRH",
                        value: '$3',
                        totalpoints: 71
                    },
                     {
                        name: "Trent Boult",
                        team: "DD",
                        value: '$6',
                        totalpoints: 719
                    },
                     {
                        name: "Shahbaz Nadeem",
                        team: "DD",
                        value: '$5',
                        totalpoints: 87
                    },
                     {
                        name: "Moeen Ali",
                        team: "RCB",
                        value: '$1',
                        totalpoints: 328
                    },
                     {
                        name: "Tim Southee",
                        team: "RCB",
                        value: '$5',
                        totalpoints: 363
                    },
                     {
                        name: "Kulwant Khejroliya",
                        team: "RCB",
                        value: '$3',
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
                        value: '$29',
                        totalpoints: 788
                    },
                     {
                        name: "Shane Watson",
                        team: "CSK",
                        value: '$13',
                        totalpoints: 1116
                    },
                     {
                        name: "Aaron Finch",
                        team: "KXIP",
                        value: '$18',
                        totalpoints: 255
                    },
                     {
                        name: "Lungisani Ngidi",
                        team: "CSK",
                        value: '$8',
                        totalpoints: 528
                    },
                     {
                        name: "Sanju Samson",
                        team: "RR",
                        value: '$18',
                        totalpoints: 845
                    },
                     {
                        name: "Suryakumar Yadav",
                        team: "MI",
                        value: '$3',
                        totalpoints: 978
                    },
                     {
                        name: "Chris Woakes",
                        team: "RCB",
                        value: '$10',
                        totalpoints: 255
                    },
                     {
                        name: "Siddarth Kaul",
                        team: "SRH",
                        value: '$1',
                        totalpoints: 762
                    },
                     {
                        name: "Sandeep Sharma",
                        team: "SRH",
                        value: '$10',
                        totalpoints: 570
                    },
                     {
                        name: "Yusuf Pathan",
                        team: "SRH",
                        value: '$11',
                        totalpoints: 422
                    },
                     {
                        name: "Shreevats Goswami",
                        team: "SRH",
                        value: '$3',
                        totalpoints: 147
                    },
                     {
                        name: "Andre Russel",
                        team: "KKR",
                        value: '$39',
                        totalpoints: 1131
                    },
                     {
                        name: "Shivam Mavi",
                        team: "KKR",
                        value: '$11',
                        totalpoints: 203
                    },
                     {
                        name: "Apoorv Vijay Wankhade",
                        team: "KKR",
                        value: '$1',
                        totalpoints: 0
                    },
                     {
                        name: "Mark wood",
                        team: "CSK",
                        value: '$4',
                        totalpoints: 7
                    },
                     {
                        name: "Ankit Singh Rajpoot",
                        team: "KXIP",
                        value: '$5',
                        totalpoints: 550                    },
                     {
                        name: "Jayant Yadav",
                        team: "DD",
                        value: '$12',
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
                        value: '$7',
                        totalpoints: 294
                    },
                     {
                        name: "Alex Hales",
                        team: "SRH",
                        value: '$18',
                        totalpoints: 258
                    },
                     {
                        name: "AB de Villers",
                        team: "RCB",
                        value: '$38',
                        totalpoints: 1064
                    },
                     {
                        name: "Robin Uthappa",
                        team: "KKR",
                        value: '$17',
                        totalpoints: 653
                    },
                     {
                        name: "Glenn Maxwell",
                        team: "DD",
                        value: '$30',
                        totalpoints: 503
                    },
                     {
                        name: "Manan Vohra",
                        team: "RCB",
                        value: '$4',
                        totalpoints: 83
                    },
                     {
                        name: "Chris Morris",
                        team: "DD",
                        value: '$22',
                        totalpoints: 179
                    },
                     {
                        name: "Andrew Tye",
                        team: "KXIP",
                        value: '$12',
                        totalpoints: 962
                    },
                     {
                        name: "Karn Sharma",
                        team: "CSK",
                        value: '$3',
                        totalpoints: 114
                    },
                     {
                        name: "Amit Mishra",
                        team: "DD",
                        value: '$8',
                        totalpoints: 564
                    },
                     {
                        name: "Kuldeep Singh Yadav",
                        team: "KKR",
                        value: '$16',
                        totalpoints: 683
                    },
                     {
                        name: "Piyush Chawla",
                        team: "KKR",
                        value: '$7',
                        totalpoints: 539
                    },
                     {
                        name: "Rahul Chahar",
                        team: "MI",
                        value: '$1',
                        totalpoints: 0
                    },
                     {
                        name: "Barinder Singh Sran",
                        team: "KXIP",
                        value: '$6',
                        totalpoints: 154
                    },
                     {
                        name: "Stuart Binny",
                        team: "RR",
                        value: '$2',
                        totalpoints: 77
                    },
                     {
                        name: "Deepak Chahar",
                        team: "CSK",
                        value: '$3',
                        totalpoints: 612
                    },
                     {
                        name: "Tajinder Dhillon Singh",
                        team: "MI",
                        value: '$1',
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
