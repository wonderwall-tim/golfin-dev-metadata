import { Metadata } from '../src/Metadata.js'
import { CAR_LAYOUT } from '../src/Layout.js';
import { Token } from '../src/Token.js'
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

export const toJSON = (core) => {
    const token = Token.fromMetadata(core, CAR_LAYOUT);
    const metadata = new Metadata(token).toJSON();
    console.log(`---------------------"${metadata.name}"-----------------------`);
    console.log(`TokenID for "${metadata.name}": ${token.getTokenID().toString(10)}`);
    console.dir(metadata);
    console.log(`------------------========================---------------------`);
}

toJSON(core);
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