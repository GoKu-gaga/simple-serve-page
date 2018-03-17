document.body.onload = addElement;
function addElement() {
  let arr = [
    {port: '10000', text: 'accounts.swagger.json'},
    {port: '10001', text: 'daemon.swagger.json'},
    {port: '10002', text: 'events.swagger.json'},
    {port: '10003', text: 'pays.swagger.json'},
    {port: '10004', text: 'personalsharings.swagger.json'},
    {port: '10005', text: 'repos.swagger.json'}
  ];
  let main = document.getElementById('mainLinks');
  for (const item of arr) {
    let el = document.createElement('a');
    let text = document.createTextNode(item.text);
    let href = 'http://' + location.hostname + ':' + item.port + '/docs';
    el.setAttribute('href', href);
    el.setAttribute('target', '_blank');
    el.appendChild(text);
    main.appendChild(el);
  }
}