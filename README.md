# next-intl-bug-repro-app-router

A minimalistic example that uses the Next.js App Router, useful for creating bug reproductions.

[Demo](https://next-intl-bug-repro-app-router.vercel.app)


## How to run

```bash
yarn install
yarn dev
```

## Config local nginx proxy
127.0.0.1 www.issilo.de
127.0.0.1 www.issilo.com

```shell

upstream node_app_issilo_next {
  server   127.0.0.1:4001;
}

server {
  listen   80;
  access_log off;
  server_name www.issilo.com; 

  location ~* \.(tpl|inc|cfg|less|scss)$ {
    deny all;
  }

  location ~ /\. {
    deny all;
    log_not_found off;
  }
  
  location / {
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Host $host:$server_port;
    proxy_set_header X-Forwarded-Server $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-NginX-Proxy true;
    # WebSocket proxying - from http://nginx.org/en/docs/http/websocket.html
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_pass http://node_app_issilo_next;
    proxy_redirect off;
  }
}



server {
  listen   80;
  access_log off;
  server_name www.issilo.de; 

  location ~* \.(tpl|inc|cfg|less|scss)$ {
    deny all;
  }

  location ~ /\. {
    deny all;
    log_not_found off;
  }
  
  location / {
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Host $host:$server_port;
    proxy_set_header X-Forwarded-Server $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-NginX-Proxy true;
    # WebSocket proxying - from http://nginx.org/en/docs/http/websocket.html
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_pass http://node_app_issilo_next;
    proxy_redirect off;
  }
}
```


config local host to be `www.issilo.de`

navigate to `https://www.issilo.de`

you should see `Hello de! locale:de`

navigate to `https://www.issilo.com`

you should see `Hello! locale:en`
