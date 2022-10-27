#!/bin/bash

version=$1

if [[ ! ${version} =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Invalid version: ${version}"
  exit 1
fi

docker build -f ./docker/app/Dockerfile . -t ghcr.io/ty-v1/edf6-weapons/app:latest -t ghcr.io/ty-v1/edf6-weapons/app:${version}
docker push  ghcr.io/ty-v1/edf6-weapons/app:${version}
docker push  ghcr.io/ty-v1/edf6-weapons/app:latest
