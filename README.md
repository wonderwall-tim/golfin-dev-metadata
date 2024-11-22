# golfin-dev-metadata

Node-based Metadata generators for golfin dev

## Metadata Properties

### Bag Properties

#### Brands

- Common: BasicGolf, StarterBag
- Uncommon: MidGolf, CasualBag
- Rare: ProGolf, SportyBag
- Epic: EliteGolf, PremiumBag
- Legendary: LuxuryGolf, ChampionBag
- Supreme: UltraGolf, MasterBag

#### Colors

- Common: Black, Gray
- Uncommon: Navy, Olive
- Rare: Red, Blue
- Epic: Green, Yellow
- Legendary: Gold, Custom Design
- Supreme: Silver, Platinum

#### Materials

- Common: Nylon
- Uncommon: Canvas
- Rare: Synthetic Leather
- Epic: Premium Leather
- Legendary: Carbon Fiber
- Supreme: Graphene

#### Capacity

- Common: 8 clubs
- Uncommon: 10 clubs
- Rare: 14 clubs
- Epic: 15 clubs
- Legendary: 16 clubs
- Supreme: 20 clubs

#### Weight

- Common: 3 kg
- Uncommon: 2.8 kg
- Rare: 2.5 kg
- Epic: 2 kg
- Legendary: 1.8 kg
- Supreme: 1.5 kg

#### Rarity

- Common: Common
- Uncommon: Uncommon
- Rare: Rare
- Epic: Epic
- Legendary: Legendary
- Supreme: Supreme

### Ball Properties

#### Brands

- Common: BasicGolf, BasicBall
- Uncommon: MidGolf, StandardBall
- Rare: ProGolf, TechBall
- Epic: EliteGolf, ProBall
- Legendary: ChampionGolf, UltimateBall
- Supreme: SupremeGolf, InfinityBall

#### Types

- Common: Standard, Practice
- Uncommon: Training, Warm-up
- Rare: Distance, Spin
- Epic: Tour, Control
- Legendary: Premium, Performance
- Supreme: Elite, Masterclass

#### Compressionsbj

- Common: High
- Uncommon: Medium-High
- Rare: Middle
- Epic: Low
- Legendary: Ultra Low
- Supreme: Zero Compression

#### Colors

- Common: White, Yellow
- Uncommon: Orange, Green
- Rare: Blue, Pink
- Epic: Red, Purple
- Legendary: Gold, Multi-color
- Supreme: Holographic, Iridescent

#### Cover Materials

- Common: Surlyn
- Uncommon: Ionomer
- Rare: Urethane
- Epic: Multi-layer Urethane
- Legendary: Advanced Urethane
- Supreme: Nano-coating

#### Rarity

- Common: Common
- Uncommon: Uncommon
- Rare: Rare
- Epic: Epic
- Legendary: Legendary
- Supreme: Supreme

### Club Properties

#### Brands

- Common: BasicGolf, StartClubs
- Uncommon: MidGolf, StandardClubs
- Rare: MaxGolf, ProClubs
- Epic: EliteGolf, PerformanceClubs
- Legendary: LuxuryGolf, UltimateClubs
- Supreme: SupremeGolf, ApexClubs

#### Models

- Common: Standard Iron
- Uncommon: Basic Wood
- Rare: Xtreme 2024
- Epic: Pro Series
- Legendary: Ultimate Driver
- Supreme: Master Series

#### Types

- Common: Iron
- Uncommon: Hybrid
- Rare: Driver
- Epic: Wood
- Legendary: Putter
- Supreme: All-in-One

#### Loft

- Common: 30°
- Uncommon: 28°
- Rare: 9.5°
- Epic: 15°
- Legendary: 8.5°
- Supreme: Adjustable Loft

#### Materials

- Common: Steel
- Uncommon: Aluminum
- Rare: Titanium
- Epic: Carbon Fiber
- Legendary: Graphene
- Supreme: Nano-composite

#### Flex

- Common: Regular
- Uncommon: Senior
- Rare: Stiff
- Epic: Extra Stiff
- Legendary: Ultra Stiff
- Supreme: Custom Flex

#### Rarity

- Common: Common
- Uncommon: Uncommon
- Rare: Rare
- Epic: Epic
- Legendary: Legendary
- Supreme: Supreme

### Character Properties

#### Skill Levels

- Common: Beginner (1-25)
- Uncommon: Intermediate (26-40)
- Rare: Advanced (41-55)
- Epic: Expert (56-70)
- Legendary: Expert (71-85)
- Supreme: Master (86-100)

#### Special Ability

- Common: None
- Uncommon: Club Control
- Rare: Stamina
- Epic: Accuracy Boost
- Legendary: Power Shot
- Supreme: Super Swing

#### Outfit

- Common: Casual Wear
- Uncommon: Sporty Attire
- Rare: Professional Attire
- Epic: Championship Gear
- Legendary: Elite Gear
- Supreme: Legendary Outfit

#### Experience Points

- Common: 100
- Uncommon: 300
- Rare: 500
- Epic: 1000
- Legendary: 2000
- Supreme: 5000

#### Rarity

- Common: Common
- Uncommon: Uncommon
- Rare: Rare
- Epic: Epic
- Legendary: Legendary
- Supreme: Supreme

## Club Paramters

- Power
- Accuracy
- Spin
- Recovery
- Natural Loft
- Durability

## Example json

```json
{
  "serialNumber": "4",

  "item": "2",
  "appearance": "5",

  "power": "860",
  "accuracy": "500",
  "spin": "600",
  "recovery": "200",
  "durability": "340",
  "weight": "7",

  "model": "1",
  "rarity": "4",
  "brand": "5",
  "flex": "3",
  "loft": "1",
  "material": "2",

  "type": "1",
  "nfFlag": "1"
}
```

## Features

- Given token to map its corresponding metadata
- Given metadata to generate its corresponding token id

## How to use it?

### Market and PR Team

- Marketing team or PR team consider the theme or co-lab
- Based on the event, to mix-and-match the token through different collection as JSON
- Generate token ID based on that JSON
- Mint the NFT with JSON, and its mark the token ID from ID-generation

### Dev Team

- Using API call with token ID, to get the metadata JSON
- Using API call to check if 2 tokens are the same

## Step after updating

- Renew the metadata mapping if there are new update
- Renew the changelog (maintain versioning)
```.md
## 1.0.0 (2024/10/21)
* Inital Commit
* Add basic token support on club
```
- Renew the package json version: `"version": "1.0.0"`
- commit message as the version: `1.0.0`
- git push to github
- publish a new tag, click tags, create new release, enter the upcoming version (same as the verion on CHANGELOG, package), eg v1.0.0 the description is copying from the current CHANGELOG readme and click publish release
```.md
## 1.0.0 (2024/10/21)
* Inital Commit
* Add basic token support on club
```
- on other repo, package json using `golfin-dev-metadata: "https://github.com/<REPO>/golfin-dev-metadata.git#v<VERSIONING>"`
- run the npm, and the package can be used

## Running locally

- run `node ./script/generate` and the example tokenId and decoded result of the generated tokenId will be shown
