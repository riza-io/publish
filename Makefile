dist/index.js: lib/main.js node_modules
	./node_modules/.bin/ncc build lib/main.js -o dist

lib/main.js: src/main.ts node_modules tsconfig.json
	./node_modules/.bin/tsc

node_modules:
	npm install
