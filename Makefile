.PHONY: test clean unit e2e

dev:
	DIR=example node src/index.js

publish:
	git add . &&\
	git commit -m 'publish' &&\
	npm publish

test:
	./node_modules/.bin/mocha \
	--require babel-core/register \
	--recursive ./test
