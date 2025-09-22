addEventListener(
    "fetch", event => {
        let url = new URL(event.request.url);
        url.hostname = "example.com";                        
        url.protocol = "https"; //http or https
        //url.pathname = "example";
        url.port = "443";
        let request = new Request(url, event.request);
        event.respondWith(
            fetch(request)
        )
    }
)
