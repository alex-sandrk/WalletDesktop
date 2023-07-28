const macosInstallScript = `
<?xml version=‘1.0’ encoding=‘UTF-8’?>
<!DOCTYPE plist PUBLIC \“-//Apple Computer//DTD PLIST 1.0//EN\” \”http://www.apple.com/DTDs/PropertyList-1.0.dtd\” >
<plist version=‘1.0’>
<dict>
<key>Label</key><string>{serviceName}</string>
<key>ProgramArguments</key>
<array>
<string>/bin/zsh</string>
<string>-c</string>
<string>CLONE_FACTORY_ADDRESS=$LMR_CLONE_FACTORY_ADDRESS ETH_NODE_ADDRESS=$LMR_ETH_NODE_ADDRESS HASHRATE_DIFF_THRESHOLD=$LMR_HASHRATE_DIFF_THRESHOLD MINER_VETTING_DURATION=$LMR_MINER_VETTING_DURATION POOL_CONN_TIMEOUT=$LMR_POOL_CONN_TIMEOUT POOL_MAX_DURATION=$LMR_POOL_MAX_DURATION POOL_MIN_DURATION=$LMR_POOL_MIN_DURATION STRATUM_SOCKET_BUFFER_SIZE=$LMR_STRATUM_SOCKET_BUFFER_SIZE VALIDATION_BUFFER_PERIOD=$LMR_VALIDATION_BUFFER_PERIOD WALLET_ADDRESS=$LMR_WALLET_ADDRESS WALLET_PRIVATE_KEY=$LMR_WALLET_PRIVATE_KEY  LOG_LEVEL=$LMR_LOG_LEVEL PROXY_ADDRESS=$LMR_PROXY_ADDRESS WEB_ADDRESS=$LMR_WEB_ADDRESS POOL_ADDRESS=$LMR_POOL_ADDRESS IS_BUYER=$LMR_IS_BUYER {pathToExecutable}</string>
</array>
<key>WorkingDirectory</key><string>{workingDir}</string>
<key>StandardOutPath</key><string>{logFilePath}</string>
<key>KeepAlive</key><true/>
<key>Disabled</key><false/>
</dict>
</plist>
`;

module.exports = { macosInstallScript };