FROM debian:10.13-slim

ARG VERSION=v2.20.0

ENV HASURA_GRAPHQL_SHOW_UPDATE_NOTIFICATION=false
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /

ADD . .

# download hasura-cli
RUN curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | VERSION=v2.37.0 INSTALL_PATH=usr/bin bash
RUN wget https://raw.githubusercontent.com/hgiasac/graphql-engine-migrate-dockerfile/main/migrate.sh \
    -O /migrate.sh

RUN chmod +x /migrate.sh
RUN chmod +x /usr/bin/hasura
ENTRYPOINT ["sh", "/migrate.sh"]