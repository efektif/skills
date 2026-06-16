.PHONY: install build deploy preview dev skills-validate skills-install skills-install-dry

install:
	bun install

dev:
	bun run dev

build:
	bun run build

deploy: build
	bunx wrangler pages deploy dist --project-name efektif-skills

preview:
	bun run preview

skills-validate:
	./scripts/validate-skills.sh

skills-install-dry:
	./scripts/install.sh

skills-install:
	./scripts/install.sh --apply
