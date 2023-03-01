# Morellato-Dashboard backoffice project

## § Intro

Morellato's Dashboard backoffice to analyze defective products
---

## § Setting up the project

1. Run `git clone <...>` inside the folder where you want git to create a new **...** directory that contains the whole repository.

2. Build container images using either `make up` or `docker-compose --file docker-compose.development.yml build -d`

3. Rebuild and turn on container services using either `make rebuild` or `docker-compose --file docker-compose.development.yml up -d --build`
If you've done all the steps at least once, this command is enough to launch the container with everything you need

4. Execute npm install package using either `npm_install` or `docker-compose --file docker-compose.development.yml run --rm nodejs npm install`

5. Execute npm run using either `make_run` or `docker-compose --file docker-compose.development.yml run --rm nodejs npm run development`

6. Confirm the project was correctly built by accessing [http://localhost:8000](http://localhost:8000) on your browser. You should see '...' on your screen.

7. Turn off container services using either `make stop` or `docker-compose --file docker-compose.development.yml stop`
