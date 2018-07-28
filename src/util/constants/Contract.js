const address = '0xa2d32af03e5777d35929f49e0f49bb4f7d8d62d7' // Mainnet
// const address = '0x9472554609691d439ba54c1bdad3c02dc673fd22' // ローカル
const ABI = [{'constant': false, 'inputs': [], 'name': 'nagesen', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'address'}], 'name': 'ownerPigCount', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'uint256'}], 'name': 'pigs', 'outputs': [{'name': 'name', 'type': 'string'}, {'name': 'target', 'type': 'uint256'}, {'name': 'amount', 'type': 'uint256'}, {'name': 'starttime', 'type': 'uint256'}, {'name': 'limittime', 'type': 'uint256'}, {'name': 'penaltybalance', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_id', 'type': 'uint256'}], 'name': 'withdraw', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'contractowner', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'uint256'}], 'name': 'pigToOwner', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_name', 'type': 'string'}, {'name': '_target', 'type': 'uint256'}, {'name': '_limit', 'type': 'uint256'}, {'name': '_penalty', 'type': 'uint256'}], 'name': 'makepig', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_id', 'type': 'uint256'}], 'name': 'deposit', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_id', 'type': 'uint256'}], 'name': 'penaltybycontractowner', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_id', 'type': 'uint256'}], 'name': 'penaltywithdraw', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'newOwner', 'type': 'address'}], 'name': 'transferOwnership', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_owner', 'type': 'address'}], 'name': 'getPigByOwner', 'outputs': [{'name': '', 'type': 'uint256[]'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'pigId', 'type': 'uint256'}], 'name': 'NewPig', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'previousOwner', 'type': 'address'}, {'indexed': true, 'name': 'newOwner', 'type': 'address'}], 'name': 'OwnershipTransferred', 'type': 'event'}]
export {address, ABI}