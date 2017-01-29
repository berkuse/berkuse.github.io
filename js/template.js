console.log('tempalte.js loaded');

TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    icon: './images/icon-white.svg',
    text: 'Timer3 button',
    callback: function(t){
      // do something when the button is clicked
    }}];
  },
  'card-buttons': function(t, options){
  return [{
    icon: './images/icon.svg',
    text: 'Button Text',
    callback: function(t){
      return t.popup({
        title: "Card Button Popup",
        url: './card-button-popup.html'
      });
    }
  }];
},
'card-badges': function(t, card) {
  return {
    dynamic: function(){
      return {
        title: 'Detail Badge', // for detail badges only
        text: 'Dynamic ' + (Math.random() * 100).toFixed(0).toString(),
        icon: './images/icon-white.svg', // for card front badges only
        color: 'red',
        refresh: 10
      }
    }
  }
},
'card-from-url': function(t, options) {
  // return a name, and optionally a description
  // based on options.url
  return {
    name: 'Suitable name based on options.url',
    desc: 'Suitable description based on options.url'
  };
},


});