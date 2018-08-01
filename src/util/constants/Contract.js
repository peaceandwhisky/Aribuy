const address = '0x947f139d8b2d8e98510c639a9a3125e2abd72be4' // Mainnet
// const address = '0x9472554609691d439ba54c1bdad3c02dc673fd22' // ローカル
const ABI = [{'constant': false, 'inputs': [], 'name': 'nagesen', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_time', 'type': 'uint256'}, {'name': '_jyusyo', 'type': 'string'}, {'name': '_latitude', 'type': 'uint256'}, {'name': '_longitude', 'type': 'uint256'}, {'name': '_os', 'type': 'string'}], 'name': 'makeItasoko', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'uint256'}], 'name': 'Itasokos', 'outputs': [{'name': 'time', 'type': 'uint256'}, {'name': 'jyusyo', 'type': 'string'}, {'name': 'longitude', 'type': 'uint256'}, {'name': 'latitude', 'type': 'uint256'}, {'name': 'os', 'type': 'string'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'address'}], 'name': 'ownerItasokoCount', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'contractowner', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_owner', 'type': 'address'}], 'name': 'getItasokoByOwner', 'outputs': [{'name': '', 'type': 'uint256[]'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'newOwner', 'type': 'address'}], 'name': 'transferOwnership', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'uint256'}], 'name': 'ItasokoToOwner', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'anonymous': false, 'inputs': [{'indexed': false, 'name': 'ariId', 'type': 'uint256'}], 'name': 'NewAribuy', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'previousOwner', 'type': 'address'}, {'indexed': true, 'name': 'newOwner', 'type': 'address'}], 'name': 'OwnershipTransferred', 'type': 'event'}]
export {address, ABI}
