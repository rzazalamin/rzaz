var contactapp = angular.module('contactapp', []);
contactapp.controller('contactController', ['$scope', '$http', function($scope, $http) {

var refresh = function() {
  $http.get('/contactlist').success(function(response) {
    console.log("getting contact from refresh");
    $scope.contactlist = response;
    $scope.contact = "";
    styling();
  });
};

var refresh2 = function() {
  $http.get('/contactlist').success(function(response) {
    console.log("getting contact from refresh");
    $scope.contactlist = response;
    $scope.contact = "";
    $scope.contactstyle = {
      "display" : "block"
    }
    $scope.updatestyle = {
      "display" : "none"
    }
    $scope.addstyle = {
      "display" : "none"
    }
    $scope.btnstyle = {
      "display" : "block"
    }
    $scope.aboutstyle = {
      "display" : "none"
    },
    $scope.loginstyle ={
      "display" : "none"
    } 
  });
};
 
var styling = function()
{
  $scope.contactstyle = {
    "display" : "none"
  }
  $scope.updatestyle = {
    "display" : "none"
  }
  $scope.addstyle = {
    "display" : "none"
  }
  $scope.btnstyle = {
    "display" : "none"
  }
  $scope.aboutstyle = {
    "display" : "none"
  },
  $scope.loginstyle ={
    "display" : "block"
  }
}

refresh();

$scope.addContact = function() {
  console.log($scope.contact);
  $http.post('/contactlist', $scope.contact).success(function(response) {
    console.log(response);
    refresh2();

  });
};








$scope.remove = function(id) {
  console.log(id);
  $http.delete('/contactlist/' + id).success(function(response) {
    $scope.contactstyle = {
      "display" : "block"
    }
    $scope.updatestyle = {
      "display" : "none"
    }
    $scope.addstyle = {
      "display" : "none"
    }
    $scope.btnstyle = {
      "display" : "block"
    }
    $scope.aboutstyle = {
      "display" : "none"
    },
    $scope.loginstyle ={
      "display" : "none"
    }
    refresh2();
  });
};


$scope.showabout = function() {
  $scope.contactstyle = {
    "display" : "none"
  }
  $scope.updatestyle = {
    "display" : "none"
  }
  $scope.updatestyle = {
    "display" : "none"
  }
  $scope.btnstyle = {
    "display" : "none"
  }
  $scope.addstyle = {
    "display" : "none"
  }
  $scope.aboutstyle = {
    "display" : "block"
  }
  
};



$scope.addnew = function() {
  $scope.contactstyle = {
    "display" : "none"
  }
  $scope.updatestyle = {
    "display" : "none"
  }
  $scope.updatestyle = {
    "display" : "none"
  }
  $scope.btnstyle = {
    "display" : "none"
  }
  $scope.addstyle = {
    "display" : "block"
  }
  $scope.loginstyle={
    "display":"none"
  }
};


$scope.edit = function(id) {
  console.log(id);
  $http.get('/contactlist/' + id).success(function(response) {
    $scope.contact = response;
    $scope.contactstyle = {
      "display" : "none"
    }
    $scope.updatestyle = {
      "display" : "block"
    }
    $scope.btnstyle = {
      "display" : "none"
    }
    $scope.addstyle = {
      "display" : "none"
    },
    $scope.loginstyle={
      "display":"none"
    }
  });
};  




$scope.update = function() {
  console.log($scope.contact._id);
  $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
    refresh2();
  })
};




$scope.deselect = function() {
  $scope.contact = "";
}


//cc


  $scope.login = function() {
    $http.post('/login', $scope.user).success(function(response) {
    $scope.username= "admin"; 
    console.log("logged successfully"); 
     
    
    $scope.contactstyle = {
      "display" : "block"
    }
    $scope.updatestyle = {
      "display" : "none"
    }
    $scope.addstyle = {
      "display" : "none"
    }
    $scope.btnstyle = {
      "display" : "block"
    }
    $scope.aboutstyle = {
      "display" : "none"
    },
    $scope.loginstyle ={
      "display" : "none"
    }


    });
  
    
  };

//cc



}]);




