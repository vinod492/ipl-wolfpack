(function () {

    var myApp = angular.module('myApp', []);

    myApp.controller('myController', ['$scope', function ($scope,$http) {
        $scope.greeting = 'Hola!';
        $scope.obj = [];
        $scope.topPlayers = [];
        
        // $scope.getRequest = function() {
        //     // console.log("I've been pressed!");
        //     // $http.get("https://kvzh3f5c0e.execute-api.us-east-1.amazonaws.com/stage/getscores").then(
        //     //   function successCallback(response) {
        //     //     $scope.response = response;
        //     //   },
        //     //   function errorCallback(response) {
        //     //     console.log("Unable to perform get request");
        //     //   }
        //     // );

        //     // var xhttp = new XMLHttpRequest();
        //     // xhttp.onreadystatechange = function() {
        //     //   if (this.readyState == 4 && this.status == 200) {
        //     //     document.getElementById("demo").innerHTML = this.responseText;
        //     //   }
        //     // };
        //     // xhttp.open("GET", "https://kvzh3f5c0e.execute-api.us-east-1.amazonaws.com/stage/getscores", true);
        //     // xhttp.send();
    
        //     const fetchPromise = fetch("https://kvzh3f5c0e.execute-api.us-east-1.amazonaws.com/stage/getscores");
        //     fetchPromise.then(response => {
        //         console.log(response);
        //       });
        //   };
     


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
                        name: "Lokesh Rahul",
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
                        name: "Nathan Coulter-Nile",
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
         
            // $scope.cricBattlePlayers =$scope.getRequest();
        $scope.cricBattlePlayers ={
            "Aaron Finch": 835,
            "Joe Root": 709,
            "Mitchell Starc": 677,
            "Shakib Al Hasan": 650,
            "Pat Cummins": 600,
            "David Warner": 543,
            "Jofra Archer": 541,
            "Jason Roy": 526,
            "Ben Stokes": 524,
            "Mohammad Amir": 623,
            "Lockie Ferguson": 478,
            "Chris Morris": 473,
            "Jos Buttler": 445,
            "Andile Phehlukwayo": 433,
            "James Neesham": 428,
            "Matt Henry": 419,
            "Steven Smith": 415,
            "Mohammad Hafeez": 394,
            "Alex Carey": 386,
            "Imran Tahir": 383,
            "Nathan Coulter-Nile": 353,
            "Chris Woakes": 353,
            "Rohit Sharma": 647,
            "Quinton de Kock": 339,
            "Mark Wood": 334,
            "Kagiso Rabada": 328,
            "Kusal Perera": 328,
            "Jason Holder": 323,
            "Oshane Thomas": 307,
            "Shikhar Dhawan": 298,
            "Dimuth Karunaratne": 286,
            "Mohammad Saifuddin": 284,
            "Wahab Riaz": 321,
            "Yuzvendra Chahal": 278,
            "Jonny Bairstow": 278,
            "Mehidy Hasan": 273,
            "Jasprit Bumrah": 271,
            "Ross Taylor": 269,
            "Rashid Khan": 267,
            "Bhuvneshwar Kumar": 261,
            "Mohammad Nabi": 252,
            "Andre Russell": 251,
            "Mushfiqur Rahim": 245,
            "Chris Gayle": 243,
            "Kane Richardson": 239,
            "Faf du Plessis": 237,
            "Sheldon Cottrell": 236,
            "Nicholas Pooran": 236,
            "Martin Guptill": 234,
            "Liam Plunkett": 231,
            "Sarfraz Ahmed": 234,
            "Moeen Ali": 216,
            "Glenn Maxwell": 212,
            "Eoin Morgan": 209,
            "Nuwan Pradeep": 209,
            "Mosaddek Hossain": 208,
            "Trent Boult": 206,
            "Babar Azam": 220,
            "Rassie van der Dussen": 197,
            "Najibullah Zadran": 193,
            "Colin Munro": 192,
            "Virat Kohli": 324,
            "Aftab Alam": 188,
            "Soumya Sarkar": 184,
            "Shai Hope": 184,
            "Colin de Grandhomme": 180,
            "Marcus Stoinis": 175,
            "Carlos Brathwaite": 170,
            "Usman Khawaja": 168,
            "Kane Williamson": 165,
            "Lasith Malinga": 163,
            "Hazratullah Zazai": 158,
            "Gulbadin Naib": 154,
            "Imam-ul-Haq": 148,
            "Adam Zampa": 141,
            "Mitchell Santner": 138,
            "Isuru Udana": 138,
            "Mahmudullah": 135,
            "Hamid Hassan": 134,
            "Hardik Pandya": 176,
            "MS Dhoni": 120,
            "Lungi Ngidi": 118,
            "Jean-Paul Duminy": 107,
            "Hashmatullah Shahidi": 100,
            "Mustafizur Rahman": 99,
            "Shimron Hetmyer": 97,
            "David Miller": 95,
            "Thisara Perera": 94,
            "Aiden Markram": 92,
            "Dawlat Zadran": 88,
            "Tom Latham": 85,
            "Noor Ali Zadran": 84,
            "Dhananjaya de Silva": 83,
            "Fakhar Zaman": 81,
            "Hashim Amla": 75,
            "Shadab Khan": 62,
            "Rahmat Shah": 66,
            "Shaheen Afridi": 64,
            "Hasan Ali": 59,
            "Tamim Iqbal": 59,
            "Rishabh Pant": 0,
            "Adil Rashid": 54,
            "Mohammad Mithun": 53,
            "Lahiru Thirimanne": 52,
            "Shoaib Malik": 49,
            "Shannon Gabriel": 48,
            "Lokesh Rahul": 128,
            "Kuldeep Yadav": 43,
            "Mujeeb Ur Rahman": 41,
            "Asif Ali": 32,
            "Shaun Marsh": 31,
            "Suranga Lakmal": 31,
            "Kedar Jadhav": 29,
            "Beuran Hendricks": 19,
            "Ikram Ali Khil": -23,
            "Kusal Mendis": 27,
            "Jason Behrendorff": 24,
            "Mashrafe Mortaza": 23,
            "Ashley Nurse": 23,
            "Mohammad Shahzad": 19,
            "Milinda Siriwardana": 13,
            "Kemar Roach": 10,
            "Haris Sohail": 10,
            "Evin Lewis": 3,
            "Imad Wasim": 10,
            "Jeevan Mendis": 1,
            "Ravindra Jadeja": 0,
            "Liton Das": 0,
            "Rubel Hossain": 0,
            "Vijay Shankar": 3,
            "Joe Denly": 0,
            "Henry Nicholls": 0,
            "Junaid Khan": 0,
            "Abu Jayed": 0,
            "Tim Southee": 0,
            "Sabbir Rahman": 0,
            "Tom Curran": 0,
            "Jhye Richardson": 0,
            "Samiullah Shenwari": 0,
            "Avishka Fernando": 0,
            "Ish Sodhi": 0,
            "Fabian Allen": 0,
            "Jeffrey Vandersay": 0,
            "Fahim Ashraf": 0,
            "James Vince": 0,
            "Mohammed Shami": 0,
            "Dinesh Karthik": 0,
            "Anrich Nortje": 0,
            "Liam Dawson": 0,
            "David Willey": 0,
            "Tom Blundell": 0,
            "Abid Ali": 0,
            "Dale Steyn": 0,
            "Alex Hales": 0,
            "Nathan Lyon": 0,
            "Mohammad Hasnain": 0,
            "Dwaine Pretorius": -2,
            "Tabraiz Shamsi": -4,
            "Angelo Mathews": -17,
            "Asghar Afghan": -20,
            "Darren Bravo": -20
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
