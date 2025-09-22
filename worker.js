addEventListener(
    "fetch", event => {
        let url = new URL(event.request.url);
        url.hostname = "example.com";                        
        url.protocol = "https";
        let request = new Request(url, event.request);
        event.respondWith(
            fetch(request)
        )
    }
)
