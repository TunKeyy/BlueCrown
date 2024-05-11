#!/bin/bash

set -eo pipefail
source ./scripts/set-env.sh

hasura migrate apply 