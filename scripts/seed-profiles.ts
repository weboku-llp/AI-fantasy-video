import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const profiles = [
    { name: 'Astra Nightwind', slug: 'astra-nightwind' },
    { name: 'Lyra Moonveil', slug: 'lyra-moonveil' },
    { name: 'Kael Stormborn', slug: 'kael-stormborn' },
    { name: 'Seren Emberglow', slug: 'seren-emberglow' },
    { name: 'Noctis Silverrun', slug: 'noctis-silverrun' }
  ];

  for (const item of profiles) {
    await prisma.fantasyProfile.upsert({
      where: { slug: item.slug },
      update: {},
      create: {
        ...item,
        bio: 'Fictional synthetic fantasy profile.',
        avatarUrl: 'https://example.com/avatar.jpg',
        coverImageUrl: 'https://example.com/cover.jpg',
        tags: ['fantasy', 'synthetic'],
        isActive: true
      }
    });
  }
}

main().finally(async () => prisma.$disconnect());
