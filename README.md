![LuckyLibrary](https://github.com/musaugurlu/LuckyLibrary/workflows/Docker%20Image%20CI/badge.svg?branch=master)
# LuckyLibrary
Library Checkout System - Experimental

## Prerequisite
- Docker (if you deploy with docker)

## Setup
- Change `${MYSQL_DBNAME}`, `${MYSQL_DBUSER}`, `${MYSQL_DBPASS}`, `${MYSQL_DBPASS}` in `docker-compose.yml` file.
- Open command prompt, 
- `cd` to the directory, 
- and run `docker-compese`
- after it finishes running, browse `http://localhost:8080`
Docker will create 3 containers, one for DB, one for backend, and one for frontend. The backend port is 8090 but you will not need it. Front end port is server at port 8080.
