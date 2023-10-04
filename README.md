# Upgradable Contracts Demo

This project demonstrates a basic upgradable smart contract usecase, by separating states with logic. Using a proxy, the logic is upgradable, while the states are with the proxy.

The transparant proxy pattern involves 3 contracts: the proxy, the admin of proxy, and the logic implementation.