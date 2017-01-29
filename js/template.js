console.log('tempalte.js loaded');

TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    icon: './images/icon-white.svg',
    text: 'My Button',
    callback: function(t){
      // do something when the button is clicked
    }}];
  },
//   'show-settings': function(t, options){
//     return t.popup({
//       title: 'Settings',
//       url: './settings.html',
//       height: 184
//     });
//   }
});