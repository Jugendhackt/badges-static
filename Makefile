
deploy:
	make build
	aws s3 sync . s3://jh-badges --acl public-read --region eu-central-1  --delete --profile marvnet --exclude 'Makefile' --exclude '*.js' --exclude '**/*.js' --exclude '.gitignore' --exclude '.git/*' --exclude '.git/**/*'

build:
	make build-made-at

build-made-at:
	cd made-at/ &&  node generate.js