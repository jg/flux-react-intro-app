var React = require('react');

var Menu = require('./components/Menu.react');


var data = {
    items: [
    {
        id: 1,
        title: '401',
        src: 'https://http.cat/401'  
    },
    {
        id: 2,
        title: '404',
        src: 'https://http.cat/404'  
    },
    {
        id: 3,
        title: '200',
        src: 'https://http.cat/200'  
    },
    {
        id: 4,
        title: '417',
        src: 'https://http.cat/417'  
    }]
};

React.render(
    <Menu {...data} />,
    document.getElementById('menu')
);


var LolcatBox = require('./components/LolcatBox.react');
React.render(
  <LolcatBox />,
  document.getElementById('lolcatBox')
);
