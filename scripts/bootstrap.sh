#!/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$DIR/.."

log() {
  echo "$(basename ${BASH_SOURCE[0]}): $@"
}

install_hooks() {
  ln -sf $DIR/githooks/pre-commit .git/hooks/pre-commit
}

log 're/configuring hooks...'
install_hooks
