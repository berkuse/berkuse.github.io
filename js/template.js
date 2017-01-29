console.log('tempalte.js loaded');

TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    icon: './images/icon-white.svg',
    text: 'Timer button',
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
}
});