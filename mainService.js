angular.module('userProfiles').service('mainService', function(){
    var data =  [{
    "id": 0,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "http://images.usatoday.com/life/_photos/2005/01/11/inside-tambor.jpg",
    "isFavorite": true
    },
    {
        "id": 1,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "https://img.buzzfeed.com/buzzfeed-static/static/2015-05/10/12/enhanced/webdr05/enhanced-buzz-20150-1431274568-6.jpg"
    },
    {
        "id": 2,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "https://img.buzzfeed.com/buzzfeed-static/static/2015-05/10/12/enhanced/webdr15/enhanced-buzz-18484-1431274969-7.jpg"
    }];

    this.getUsers = function(){
        return data;
    }

    this.toggleFavorite = function(userIndex){
        data[userIndex].isFavorite = !data[userIndex].isFavorite;
    }
})
