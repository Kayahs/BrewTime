const { Pool } = require("pg")
const squel = require("squel").useFlavour("postgres")
const config = require("../config/default.json")

const breweriesSeeds = [
  {
    name: "Red Autumn",
    description: `Zombie ipsum brains reversus ab cerebellum viral 
                  inferno, brein nam rick mend grimes malum cerveau 
                  cerebro. De carne cerebro lumbering animata cervello 
                  corpora quaeritis.`
  }
]

const mapdataSeeds = [
  {
    location: "462 Wellington St W #101, Toronto, ON M5V 1E3",
    description: `Summus thalamus brains sit​​, morbobasal ganglia vel 
                  maleficia? De braaaiiiins apocalypsi gorger omero 
                  prefrontal cortex undead survivor fornix dictum 
                  mauris. Hi brains mindless mortuis limbic 
                  cortex soulless creaturas optic nerve, imo evil 
                  braaiinns stalking monstra hypothalamus adventus resi 
                  hippocampus dentevil vultus brain comedat cerebella 
                  pitiutary gland viventium. `,
    type: "Brewery",
    brewery_id: 1
  },
  {
    location: "520 Wellington St W, Toronto, ON M5V 1E3",
    description: `Qui optic gland animated 
                  corpse, brains cricket bat substantia nigra max brucks 
                  spinal cord terribilem incessu brains zomby. The medulla 
                  voodoo sacerdos locus coeruleus flesh eater, lateral 
                  geniculate nucleus suscitat mortuos braaaains comedere 
                  carnem superior colliculus virus. Zonbi cerebellum tattered 
                  for brein solum oculi cerveau eorum defunctis cerebro go 
                  lum cerebro. Nescio brains an Undead cervello zombies. 
                  Sicut thalamus malus putrid brains voodoo horror. Nigh 
                  basal ganglia tofth eliv ingdead.`,
    type: "Bar",
    brewery_id: 1
  },
  {
    location: "609 King St W, Toronto, ON M5V 1M5",
    description: `Normally, both your asses would be dead as fucking 
                  fried chicken, but you happen to pull this shit while 
                  I'm in a transitional period so I don't wanna kill you, 
                  I wanna help you. But I can't give you this case, it 
                  don't belong to me. Besides, I've already been through 
                  too much shit this morning over this case to hand it 
                  over to your dumb ass.`,
    type: "Restaurant",
    brewery_id: 1
  }
]

const bookingsSeeds = [
  {
    title: "Brewery Tour",
    description: `Nescio brains an Undead cervello zombies. 
                  Sicut thalamus malus putrid brains voodoo horror. 
                  Nigh basal ganglia tofth eliv ingdead.`,
    time: "07-25-2019",
    brewery_id: 1
  }
]

const imagesSeeds = [
  {
    uri: "https://via.placeholder.com/1136x640",
    description: `Nescio brains an Undead cervello zombies. 
                  Sicut thalamus malus putrid brains voodoo horror. 
                  Nigh basal ganglia tofth eliv ingdead.`,
    width: 1136,
    height: 640,
    brewery_id: 1
  },
  {
    uri: "https://via.placeholder.com/960x640",
    description: `Nescio brains an Undead cervello zombies. 
                  Sicut thalamus malus putrid brains voodoo horror. 
                  Nigh basal ganglia tofth eliv ingdead.`,
    width: 960,
    height: 640,
    brewery_id: 1
  },
  {
    uri: "https://via.placeholder.com/320x480",
    description: `Nescio brains an Undead cervello zombies. 
                  Sicut thalamus malus putrid brains voodoo horror. 
                  Nigh basal ganglia tofth eliv ingdead.`,
    width: 320,
    height: 480,
    brewery_id: 1
  },
  {
    uri: "https://via.placeholder.com/320x416",
    description: `Nescio brains an Undead cervello zombies. 
                  Sicut thalamus malus putrid brains voodoo horror. 
                  Nigh basal ganglia tofth eliv ingdead.`,
    width: 320,
    height: 416,
    brewery_id: 1
  }
]

const productsSeeds = [
  {
    name: "Shitty Wine",
    description: `De braaaiiiins apocalypsi gorger omero prefrontal 
                  cortex undead survivor fornix dictum mauris.`,
    price: 200,
    image:
      "https://www.thelabelmaker.eu/wp-content/uploads/2018/08/orbelia-wine-bottle-design.jpg",
    brewery_id: 1
  }
]

const seed = async () => {
  const pg = await new Pool(config.db).connect()

  try {
    await pg.query("BEGIN")

    console.log("Seeding Breweries...")

    await Promise.all(
      breweriesSeeds.map(breweriesSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.breweries")
            .setFields(breweriesSeed)
            .toParam()
        )
      )
    )

    console.log("Seeding Breweries... [DONE]")

    console.log("Seeding Map Data...")

    await Promise.all(
      mapdataSeeds.map(mapdataSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.mapdata")
            .setFields(mapdataSeed)
            .toParam()
        )
      )
    )

    console.log("Seeding Map Data... [DONE]")

    console.log("Seeding Bookings...")

    await Promise.all(
      bookingsSeeds.map(bookingsSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.bookings")
            .setFields(bookingsSeed)
            .toParam()
        )
      )
    )

    console.log("Seeding Bookings... [DONE]")

    console.log("Seeding Images...")

    await Promise.all(
      imagesSeeds.map(imagesSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.images")
            .setFields(imagesSeed)
            .toParam()
        )
      )
    )

    console.log("Seeding Images... [DONE]")

    console.log("Seeding Products...")

    await Promise.all(
      productsSeeds.map(productsSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.products")
            .setFields(productsSeed)
            .toParam()
        )
      )
    )

    console.log("Seeding Products... [DONE]")

    await pg.query("COMMIT")
  } catch (e) {
    await pg.query("ROLLBACK")
    throw e
  } finally {
    pg.release()
  }
}

seed().catch(e => {
  setImmediate(() => {
    throw e
  })
})
