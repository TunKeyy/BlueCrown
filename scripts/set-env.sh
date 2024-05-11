export ROOT_APP="`pwd`"
echo "ROOT APP: $ROOT_APP"

OS=$(uname -s)
if [$OS = "Darwin"] then
    export $(cat $ROOT_APP/.env | grep -v '#' | awk '/=/ {print $1}')
else
    export $(grep -v '^#' $ROOT_APP/.env | xargs -d '\n')
fi
HASURA_URL="http://localhost:${HASURA_PORT}"

echo "Exported file .env"