
const Metadata = require('../src/Metadata.js')
const Token = require('../src/Token.js')
const { CAR_LAYOUT } = require('../src/Layout.js')

const core = {
    serialNumber: "4",

    item: "2",
    appearance: "5",

    power: "860",
    accuracy: "500",
    spin: "600",
    recovery: "200",
    durability: "340",

    weight: "7",
    model: "1",
    rarity: "4",
    brand: "5",
    flex: "3",
    loft: "1",
    material: "2",

    type: "1",
    nfFlag: "1"
}
const toJSON = (core) => {
    try {
        const testToken = new Token({ id: '57910179826535473067770440987776038168217872548489934021543459020073450078724' })
        const testMetadata = new Metadata(testToken)
        const testFullMetadata = testMetadata.toJSON('11155111');
        console.log(testFullMetadata);

        const token = Token.fromMetadata(core, CAR_LAYOUT);
        const metadata = new Metadata(token).toJSON();
        console.log(`---------------------"${metadata.name}"-----------------------`);
        console.log(`TokenID for "${metadata.name}": ${token.getTokenID().toString(10)}`);
        console.dir(metadata);
        console.log(`------------------========================---------------------`);
    } catch (error) {
        console.error(error);

    }
}

module.exports = toJSON(core);

const example = {
    core: {
        serialNumber: '4',
        item: '2',
        appearance: '5',
        power: '860',
        accuracy: '500',
        spin: '600',
        recovery: '200',
        durability: '340',
        weight: '7',
        model: '1',
        rarity: '4',
        brand: '5',
        flex: '3',
        loft: '1',
        material: '2',
        type: '1',
        nfFlag: '1'
    },
    brand: 'Prestige Line',
    type: 'Iron',
    flex: 'Stiff Flex (Advanced)',
    loft: 'Standard Loft',
    material: 'Steel (Durable and Reliable)',
    model: 'Model X (High Performance)',
    rarity: 'Rare',
    name: 'Elite',
    description: 'Distance golf balls are designed for maximum distance off the tee.',
    image: 'purple-able-smelt-882.mypinata.cloud/GOLFIN-1_2_2_5.jpg',
    id: '57910179826535473067770440987776038168217872548489934021543459020073450078724',
    attributes: [
        { trait_type: 'rarity', value: 'Rare' },
        { trait_type: 'model', value: 'Model X (High Performance)' },
        { trait_type: 'material', value: 'Steel (Durable and Reliable)' },
        { trait_type: 'type', value: 'Iron' },
        { trait_type: 'brand', value: 'Prestige Line' },
        { trait_type: 'flex', value: 'Stiff Flex (Advanced)' },
        { trait_type: 'loft', value: 'Standard Loft' },
        { trait_type: 'weight', value: '7kg' },
        { trait_type: 'serial_number', value: '4' }
    ],
    external_url: 'https://golfin.io/en/'
}