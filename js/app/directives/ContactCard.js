function contactCard(){
  return{
    templateUrl: 'js/app/views/contactCard.html',
    scope:{
      name: '=',
      email: '=',
      phone: '='
    },
    restrict: 'E'
  };
}

angular
  .module('app')
  .directive('contactCard', contactCard);
