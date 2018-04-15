(function() {

var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function ($scope) {
    $scope.greeting = 'Hola!';

    $scope.allParticipants = {
        Aadarsh: {
            name: "Aadarsh",
            players: {
                player1: {
                    name: "Dhoni",
                    team:"CSK",
                    value:'35m',
                    totalpoints: 55
                },
                player2: {
                    name: "Butler",
                    team:"RR",
                    value:'30m',
                    totalpoints: 3
                },
                player3: {
                    name: "Pollard",
                    team:"MI",
                    value:'13m',
                    totalpoints: 0
                },
                player4: {
                    name: "M Pandey",
                    team:"SRH",
                    value:'5m',
                    totalpoints: 15
                },
                player5: {
                    name: "KL Rahul",
                    team:"KXIP",
                    value:'5m',
                    totalpoints: 155
                },
                player6: {
                    name: "Rana",
                    team:"KKR",
                    value:'10m',
                    totalpoints: 125
                },
                player7: {
                    name: "Manoj Tiwary",
                    team:"KXIP",
                    value:'8m',
                    totalpoints: 0
                },
                player8: {
                    name: "Roy",
                    team:"DD",
                    value:'15m',
                    totalpoints: 0
                },
                player9: {
                    name: "Mustafizur",
                    team:"MI",
                    value:'10m',
                    totalpoints: 34
                },
                player10: {
                    name: "Rashid khan",
                    team:"SRH",
                    value:'10m',
                    totalpoints: 82
                },
                player11: {
                    name: "Chahal",
                     team:"RCB",
                    value:'17m',
                    totalpoints: 4
                },
                player12: {
                    name: "Negi",
                    team:"RCB",
                    value:'15m',
                    totalpoints: 0
                },
                player13: {
                    name: "Ben Cutting",
                   team:"MI",
                    value:'5m',
                    totalpoints: 0
                },
                player14: {
                    name: "Shami",
                    team:"DD",
                    value:'2m',
                    totalpoints: 15
                },
                player15: {
                    name: "Sarfaraz Khan",
                   team:"RCB",
                    value:'12m',
                    totalpoints: 2
                },
                player16: {
                    name: "Naman Ojha",
                   team:"DD",
                    value:'12m',
                    totalpoints: 0
                },
                player17: {
                    name: "Prithvi Shaw",
                   team:"DD",
                    value:'12m',
                    totalpoints: 0
                }
            }

        },
      
        Adi: {
            name: "Adi",
            players: {
                player1: {
                    name: "Stokes",
                    team:"RR",
                    value:'14m',
                    totalpoints: 3
                },
                player2: {
                    name: "Kishan",
                    team:"MI",
                    value:'32m',
                    totalpoints: 72
                },
                player3: {
                    name: "Evin Lewis",
                    team:"MI",
                    value:'33m',
                    totalpoints: 3
                },
                player4: {
                    name: "Mayank",
                    team:"KXIP",
                    value:'5m',
                    totalpoints: 16
                },
                player5: {
                    name: "Unadkat",
                     team:"RR",
                    value:'20m',
                    totalpoints: 27
                },
                player6: {
                    name: "Rabada",
                    team:"DD",
                    value:'8m',
                    totalpoints: 0
                },
                player7: {
                    name: "K Gowtham",
                    team:"RR",
                    value:'7m',
                    totalpoints: -4
                },
                player8: {
                    name: "S Thakur",
                     team:"CSK",
                    value:'5m',
                    totalpoints: 35
                },
                player9: {
                    name: "Cummins",
                    team:"MI",
                    value:'3m',
                    totalpoints: 0
                },
                player10: {
                    name: "Rayudu",
                    team:"CSK",
                    value:'5m',
                    totalpoints: 113
                },
                player11: {
                    name: "M Zadran",
                   team:"KXIP",
                    value:'20m',
                    totalpoints: 0
                },
                player12: {
                    name: "Vijay Shankar",
                    team:"DD",
                    value:'18m',
                    totalpoints: 23
                },
                player13: {
                    name: "Shakib",
                   team:"SRH",
                    value:'10m',
                    totalpoints: 85
                },
                player14: {
                    name: "Mohammed Siraj",
                    team:"RCB",
                    value:'7m',
                    totalpoints: 0
                },
                player15: {
                    name: "Vinay Kumar",
                    team:"KKR",
                    value:'13m',
                    totalpoints: 60
                },
                player16: {
                    name: "Brendon McCullum",
                    team:"RCB",
                    value:'13m',
                    totalpoints: 84
                },
                player17: {
                    name: "Pradeep Sangwan",
                    team:"Mi",
                    value:'13m',
                    totalpoints: 0
                }
        }
    },
    chatur: {
            name: "Chatur",
            players: {
                player1: {
                    name: "Kohli",
                    team:"RCB",
                    value:'21m',
                    totalpoints: 37
                },
                player2: {
                    name: "Rahane",
                    team:"RR",
                    value:'36m',
                    totalpoints: 15
                },
                player3: {
                    name: "Darcy Short",
                    team:"RR",
                    value:'16m',
                    totalpoints: 30
                },
                player4: {
                    name: "Christopher Gayle",
                    team:"KXIP",
                    value:'15m',
                    totalpoints: 0
                },
                player5: {
                    name: "Marcus Stoinis",
                    team:"KXIP",
                    value:'9m',
                    totalpoints: 40
                },
                player6: {
                    name: "Kane Williamson",
                     team:"SRH",
                    value:'19m',
                    totalpoints: 72
                },
                player7: {
                    name: "Pant",
                    team:"DD",
                    value:'6m',
                    totalpoints: 54
                },
                player8: {
                    name: "Bhuvaneshwar Kumar",
                    team:"SRH",
                    value:'5m',
                    totalpoints: 47
                },
                player9: {
                    name: "Billy Stanlake",
                    team:"SRH",
                    value:'19m',
                    totalpoints: 46
                },
                player10: {
                    name: "Basil Thampi",
                    team:"SRH",
                    value:'11m',
                    totalpoints: 0
                },
                player11: {
                    name: "Mitchell McClenagahan",
                     team:"MI", 
                    value:'18m',
                    totalpoints: 17
                },
                player12: {
                    name: "Dhawal Kulkarni",
                    team:"RR",
                    value:'6m',
                    totalpoints: 29
                },
                player13: {
                    name: "Harbhajan Singh",
                    team:"CSK",
                    value:'4m',
                    totalpoints: 82
                },
                player14: {
                    name: "Navdeep Saini",
                    team:"RCB",
                    value:'14m',
                    totalpoints: 0
                },
                player15: {
                    name: "T Natarajan",
                    team:"SRH",
                    value:'1m',
                    totalpoints: 0
                },
                player16: {
                    name: "Carlos Brathwaite",
                    team:"SRH",
                    value:'1m',
                    totalpoints: 0
                },
                player17: {
                    name: "Ishank Jaggi",
                    team:"KKR",
                    value:'1m',
                    totalpoints: 0
                }
        }
    },
    raj: {
            name: "Raj",
            players: {
                player1: {
                    name: "Suresh Raina",
                    team:"CSK",
                    value:'29m',
                    totalpoints: 50
                },
                player2: {
                    name: "Gautam Gambhir",
                    team:"DD",
                    value:'8m',
                    totalpoints: 90
                },
                player3: {
                    name: "Colin Munro",
                    team:"DD",
                    value:'21m',
                    totalpoints: 2
                },
                player4: {
                    name: "Dinesh Karthik",
                    team:"KKR",
                    value:'10m',
                    totalpoints: 101
                },
                player5: {
                    name: "David Miller",
                    team:"KXIP",
                    value:'22m',
                    totalpoints: 31
                },
                player6: {
                    name: "Wriddhiman Saha",
                    team:"SRH",
                    value:'12m',
                    totalpoints: 31
                },
                player7: {
                    name: "Krunal Pandya",
                    team:"MI",
                    value:'12m',
                    totalpoints: 84
                },
                player8: {
                    name: "Kamlesh Nagarkoti",
                    team:"KKR",
                    value:'8m',
                    totalpoints: 0
                },
                player9: {
                    name: "M.S. Washington Sundar",
                    team:"RCB",
                    value:'6m',
                    totalpoints: 12
                },
                player10: {
                    name: "Ravichandran Ashwin",
                    team:"KXIP",
                    value:'16m',
                    totalpoints: 55
                },
                player11: {
                    name: "Shubman Gill",
                    team:"KKR",
                    value:'18m',
                    totalpoints: 0
                },
                player12: {
                    name: "Shreyas Gopal",
                    team:"RR",
                    value:'3m',
                    totalpoints: 47
                },
                player13: {
                    name: "Sam Billings",
                    team:"CSK",
                    value:'21m',
                    totalpoints: 146
                },
                player14: {
                    name: "Mitchell Johnson",
                    team:"KKR",
                    value:'7m',
                    totalpoints: 59
                },
                player15: {
                    name: "Aditya Tare",
                    team:"MI",
                    value:'7m',
                    totalpoints: 0
                },
                player16: {
                    name: "Daniel Christian",
                    team:"DD",
                    value:'7m',
                    totalpoints: 53
                },
                player17: {
                    name: "Sandeep Lamichhane",
                    team:"DD",
                    value:'7m',
                    totalpoints: 0
                }
        }
    },
    Ram: {
            name: "Ram",
            players: {
                player1: {
                    name: "Murali Vijay",
                    team:"CSK",
                    value:'36m',
                    totalpoints: 0
                },
                player2: {
                    name: "Parthiv Patel",
                    team:"RCB",
                    value:'33m',
                    totalpoints: 0
                },
                player3: {
                    name: "Chris Lynn",
                    team:"KKR",
                    value:'5m',
                    totalpoints: 40
                },
                player4: {
                    name: "Yuvraj Singh",
                    team:"KXIP",
                    value:'18m',
                    totalpoints: 9
                },
                player5: {
                    name: "Karun Nair",
                    team:"KXIP",
                    value:'11m',
                    totalpoints: 96
                },
                player6: {
                    name: "Hardik Pandya",
                    team:"MI",
                    value:'23m',
                    totalpoints: 137
                },
                player7: {
                    name: "Axar Patel",
                    team: "KXIP",
                    value:'20m',
                    totalpoints: 30
                },
                player8: {
                    name: "Mandeep Singh",
                    team:"RCB",
                    value:'1m',
                    totalpoints: 69
                },
                player9: {
                    name: "Sunil Naraine",
                    team:"KKR",
                    value:'3m',
                    totalpoints: 272
                },
                player10: {
                    name: "Jasprit Bumrah",
                    team:"MI",
                    value:'6m',
                    totalpoints: 39
                },
                player11: {
                    name: "Ben Laughlin",
                    team:"RR",
                    value:'9m',
                    totalpoints: 11
                },
                player12: {
                    name: "Dushmantha Chameera",
                    team:"RR",
                    value:'21m',
                    totalpoints: 0
                },
                player13: {
                    name: "Jean-Paul Duminy",
                    team:"MI",
                    value:'12m',
                    totalpoints: 0
                },
                player14: {
                    name: "Mohit Sharma",
                    team:"KXIP",
                    value:'1m',
                    totalpoints: 61
                },
                player15: {
                    name: "Umesh Yadav",
                    team:"RCB",
                    value:'1m',
                    totalpoints: 76
                },
                player16: {
                    name: "Gurkeerat Singh Mann",
                    team:"DD",
                    value:'1m',
                    totalpoints: 0
                },
                player17: {
                    name: "Sachin Baby",
                    team:"SRH",
                    value:'1m',
                    totalpoints: 0
                }
        }
    },

    Jackie: {
            name: "Jackie",
            players: {
                player1: {
                    name: "Quinton De Kock",
                    team:"RCB",
                    value:'16m',
                    totalpoints: 15
                },
                player2: {
                    name: "Rohit Sharma",
                    team:"MI",
                    value:'20m',
                    totalpoints: 25
                },
                player3: {
                    name: "Rahul Tripathi",
                    team:"RR",
                    value:'24m',
                    totalpoints: 21
                },
                player4: {
                    name: "Kedar Jadhav",
                    team:"CSK",
                    value:'19m',
                    totalpoints: 36
                },
                player5: {
                    name: "Ravindra Jadeja",
                     team:"CSK",
                    value:'16m',
                    totalpoints: 67
                },
                player6: {
                    name: "Shikhar Dhawan",
                    team:"SRH",
                    value:'7m',
                    totalpoints: 172
                },
                player7: {
                    name: "Shreyas Iyer",
                    team:"DD",
                    value:'28m',
                    totalpoints: 13
                },
                player8: {
                    name: "Imran Tahir",
                    team:"CSK",
                    value:'20m',
                    totalpoints: 62
                },
                player9: {
                    name: "Ankit Sharma",
                    team:"RR",
                    value:'15m',
                    totalpoints: 0
                },
                player10: {
                    name: "Jofra Archer",
                    team:"RR",
                    value:'8m',
                    totalpoints: 0
                },
                player11: {
                    name: "Deepak Hooda",
                    team:"SRH",
                    value:'1m',
                    totalpoints: 5
                },
                player12: {
                    name: "Mohammad Nabi",
                    team:"SRH",
                    value:'10m',
                    totalpoints: 0
                },
                player13: {
                    name: "Trent Boult",
                     team:"DD",
                    value:'1m',
                    totalpoints: 42
                },
                player14: {
                    name: "Shahbaz Nadeem",
                     team:"DD",
                    value:'1m',
                    totalpoints: 0
                },
                player15: {
                    name: "Moeen Ali",
                    team:"RCB",
                    value:'14m',
                    totalpoints: 0
                },
                player16: {
                    name: "Tim Southee",
                    team:"RCB",
                    value:'14m',
                    totalpoints: 0
                },
                player17: {
                    name: "Kulwant Khejroliya",
                    team:"RCB",
                    value:'14m',
                    totalpoints: 7
                }
        }
    },
    Vijay: {
            name: "Vijay",
            players: {
                player1: {
                    name: "Dwayne Bravo",
                    team:"CSK",
                    value:'35m',
                    totalpoints: 213
                },
                player2: {
                    name: "Shane Watson",
                    team:"CSK",
                    value:'25m',
                    totalpoints: 230
                },
                player3: {
                    name: "Aaron Finch",
                    team:"KXIP",
                    value:'14m',
                    totalpoints: 0
                },
                player4: {
                    name: "Lungisani Ngidi",
                     team:"CSK",
                    value:'14m',
                    totalpoints: 0
                },
                player5: {
                    name: "Sanju Samson",
                    team:"RR",
                    value:'10m',
                    totalpoints: 66
                },
                player6: {
                    name: "Suryakumar Yadav",
                    team:"MI",
                    value:'14m',
                    totalpoints: 80
                },
                player7: {
                    name: "Chris Woakes",
                     team:"RCB",
                    value:'25m',
                    totalpoints: 96
                },
                player8: {
                    name: "Siddarth Kaul",
                     team:"SRH",
                    value:'5m',
                    totalpoints: 99
                },
                player9: {
                    name: "Sandeep Sharma",
                    team:"SRH",
                    value:'15m',
                    totalpoints: 0
                },
                player10: {
                    name: "Yusuf Pathan",
                    team:"SRH",
                    value:'2m',
                    totalpoints: 25
                },
                player11: {
                    name: "Shreevats Goswami",
                    team:"SRH",
                    value:'14m',
                    totalpoints: 0
                },
                player12: {
                    name: "Andre Russel",
                     team:"KKR",
                    value:'13m',
                    totalpoints: 258
                },
                player13: {
                    name: "Shivam Mavi",
                    team:"KKR",
                    value:'6m',
                    totalpoints: 0
                },
                player14: {
                    name: "Apoorv Vijay Wankhade",
                    team:"KKR",
                    value:'1m',
                    totalpoints: 0
                },
                player15: {
                    name: "Mark wood",
                     team:"CSK",
                    value:'7m',
                    totalpoints: 7
                },
                player16: {
                    name: "Ankit Singh Rajpoot",
                     team:"KXIP",
                    value:'7m',
                    totalpoints: 0
                },
                player17: {
                    name: "Jayant Yadav",
                     team:"DD",
                    value:'7m',
                    totalpoints: 0
                }
        }
    },
    vinod: {
            name: "Vinod",
            players: {
                player1: {
                    name: "Faf Du Plessis",
                    team:"CSK",
                    value:'36m',
                    totalpoints: 0
                },
                player2: {
                    name: "Alex Hales",
                    team:"SRH",
                    value:'30m',
                    totalpoints: 0
                },
                player3: {
                    name: "AB de Villers",
                    team:"RCB",
                    value:'21m',
                    totalpoints: 101
                },
                player4: {
                    name: "Robin Uthappa",
                    team:"KKR",
                    value:'14m',
                    totalpoints: 86
                },
                player5: {
                    name: "Glenn Maxwell",
                    team:"DD",
                    value:'25m',
                    totalpoints: 0
                },
                player6: {
                    name: "Manan Vohra",
                    team:"RCB",
                    value:'4m',
                    totalpoints: 0
                },
                player7: {
                    name: "Chris Morris",
                     team:"DD",
                    value:'3m',
                    totalpoints: 78
                },
                player8: {
                    name: "Andrew Tye",
                    team:"KXIP",
                    value:'2m',
                    totalpoints: 20
                },
                player9: {
                    name: "Karn Sharma",
                    team:"CSK",
                    value:'3m',
                    totalpoints: 0
                },
                player10: {
                    name: "Amit Mishra",
                    team:"DD",
                    value:'2m',
                    totalpoints: -6
                },
                player11: {
                    name: "Kuldeep Singh Yadav",
                    team:"KKR",
                    value:'7m',
                    totalpoints: 38
                },
                player12: {
                    name: "Piyush Chawla",
                    team:"KKR",
                    value:'13m',
                    totalpoints: 57
                },
                player13: {
                    name: "Rahul Chahar",
                    team:"MI",
                    value:'27m',
                    totalpoints: 0
                },
                player14: {
                    name: "Barinder Singh Sran",
                    team:"KXIP",
                    value:'10m',
                    totalpoints: 0
                },
                player15: {
                    name: "Stuart Binny",
                    team:"RR",
                    value:'3m',
                    totalpoints: 0
                },
                player16: {
                    name: "Deepak Chahar",
                    team:"CSK",
                    value:'3m',
                    totalpoints: 55
                },
                player17: {
                    name: "Tajinder Dhillon Singh",
                    team:"MI",
                    value:'3m',
                    totalpoints: 0
                }  
        }
    }
};

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

$scope.totalScore = function(participant){
    var score = 0;
   
    var obj = Object.values(participant.players);
    var len =Object.values(participant.players).length
    
   for(var i = 0;i<len;i++){
        if(!angular.equals(obj[i].totalpoints, '-')){
            
            score =score+parseFloat(obj[i].totalpoints);
           
        }
        
    }
    participant['total']=score;
    return score;
};
    


$scope.teamScores = [];

$scope.showRankings = function(){
 
    $scope.showrank = true; 
   
    
    angular.forEach ($scope.allParticipants, function(participant, key){

     $scope.teamScores.push(participant);
       
   });
    
};

$scope.hideRankings = function(){
   
    $scope.showrank = false; 
   
    
};

 }]);   

})();
