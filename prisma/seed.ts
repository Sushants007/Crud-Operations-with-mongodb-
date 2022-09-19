// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import {Countrydata} from '../Countrydata'
const prisma = new PrismaClient()

async function main() {
    await prisma.data.createMany({
    data: Countrydata,
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })