git_version = $$(git branch 2>/dev/null | sed -e '/^[^*]/d'-e's/* \(.*\)/\1/')
npm_bin= $$(npm bin)

all: test
install:
	@npm install
build:
	@${npm_bin}/webpack
watch:
	@${npm_bin}/webpack --watch
lint:
	@${npm_bin}/eslint src
server: install
	@${npm_bin}/startserver
.PHONY: test
