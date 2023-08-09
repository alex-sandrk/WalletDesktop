const linuxInstallScript = `
[Unit]
Description={serviceName}
After=network.target

[Service]
Type=simple
ExecStart=/bin/bash -c 'CLONE_FACTORY_ADDRESS=$LMR_CLONE_FACTORY_ADDRESS ETH_NODE_ADDRESS=$LMR_ETH_NODE_ADDRESS HASHRATE_DIFF_THRESHOLD=$LMR_HASHRATE_DIFF_THRESHOLD MINER_VETTING_DURATION=$LMR_MINER_VETTING_DURATION POOL_CONN_TIMEOUT=$LMR_POOL_CONN_TIMEOUT POOL_MAX_DURATION=$LMR_POOL_MAX_DURATION POOL_MIN_DURATION=$LMR_POOL_MIN_DURATION STRATUM_SOCKET_BUFFER_SIZE=$LMR_STRATUM_SOCKET_BUFFER_SIZE VALIDATION_BUFFER_PERIOD=$LMR_VALIDATION_BUFFER_PERIOD WALLET_ADDRESS=$LMR_WALLET_ADDRESS WALLET_PRIVATE_KEY=$LMR_WALLET_PRIVATE_KEY  LOG_LEVEL=$LMR_LOG_LEVEL PROXY_ADDRESS=$LMR_PROXY_ADDRESS WEB_ADDRESS=$LMR_WEB_ADDRESS POOL_ADDRESS=$LMR_POOL_ADDRESS IS_BUYER=$LMR_IS_BUYER "{pathToExecutable}"'
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
`;

module.exports = { linuxInstallScript };