const rootDiv = document.getElementById('root');

const xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(this.status === 200) {
        rootDiv.innerHTML = xhr.responseText;
    } else {
        console.log("XHR error");
    }
}

const home = `
    <h1> HOME </h1>
`;


const routes = {
    '/' : home,
    '/crew' : function() {
        xhr.open("get", "../pages/crew/crew-pilot.html");
        xhr.send();
    },
    '/destination' : function() {
        xhr.open("get", "../pages/destination/destination-moon.html");
        xhr.send();
    },
    '/tech' : function() {
        xhr.open("get", "../pages/technology/technology-vehicle.html");
        xhr.send();
    }
};


rootDiv.innerHTML = routes[window.location.pathname];

const onNav = (pathname) => {
    window.history.pushState(
        {}, pathname, window.location.origin + pathname
    ) 
    rootDiv.innerHTML = routes[pathname]()
}


