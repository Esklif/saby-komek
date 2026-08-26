import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const campaign = await prisma.campaign.create({
    data: {
      id: 'test-id',
      campaignNumber: '#240512',
      beneficiary: 'Алимжан С.',
      age: '6 лет',
      city: 'г. Алматы',
      category: 'Здоровье',
      diagnosis: 'Острый лимфобластный лейкоз (ОЛЛ)',
      description: 'Алимжану 6 лет. Активный, любознательный мальчик, который любит конструкторы и мечтает стать инженером. В феврале 2024 года ему поставили диагноз - острый лимфобластный лейкоз. Сейчас Алимжан проходит лечение, которое даёт шанс на полное выздоровление. Но для продолжения терапии необходимо дорогостоящее лекарство, не входящее в список бесплатного обеспечения.',
      requiredAmount: 12500000,
      gatheredAmount: 7875000,
      openDate: new Date('2024-05-12T00:00:00Z'),
      helpersCount: 1235
    }
  })
  
  console.log('Created campaign:', campaign.id)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
