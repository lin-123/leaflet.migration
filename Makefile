.PHONY: test clean unit e2e

publish:
	git add . &&\
	git commit -m 'publish' &&\
	npm publish

test:
	./node_modules/.bin/mocha \
	--require babel-core/register \
	--recursive ./test
