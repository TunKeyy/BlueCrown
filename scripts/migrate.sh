#!/bin/bash

set -eo pipefail
source ./scripts/set-env.sh

hasura migrate apply --skip-update-check --insecure-skip-tls-verify --all-databases --endpoint $HASURA_URL --admin-secret $HASURA_GRAPHQL_ADMIN_SECRET --project ./services/hasura
hasura metadata apply --skip-update-check --insecure-skip-tls-verify --endpoint $HASURA_URL --admin-secret $HASURA_GRAPHQL_ADMIN_SECRET --project ./services/hasura
hasura metadata reload --skip-update-check --insecure-skip-tls-verify --endpoint $HASURA_URL --admin-secret $HASURA_GRAPHQL_ADMIN_SECRET --project ./services/hasura