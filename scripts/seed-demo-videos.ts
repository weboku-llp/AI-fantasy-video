import { PrismaClient, Role, SubscriptionStatus, VideoStatus, VideoType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'admin@aifantasy.video' },
    update: {},
    create: {
      name: 'Platform Admin',
      email: 'admin@aifantasy.video',
      passwordHash: 'TODO_HASH_ME',
      role: Role.ADMIN,
      subscriptionStatus: SubscriptionStatus.ACTIVE
    }
  });

  const profiles = [
    { name: 'Astra Nightwind', slug: 'astra-nightwind' },
    { name: 'Lyra Moonveil', slug: 'lyra-moonveil' },
    { name: 'Kael Stormborn', slug: 'kael-stormborn' },
    { name: 'Seren Emberglow', slug: 'seren-emberglow' },
    { name: 'Noctis Silverrun', slug: 'noctis-silverrun' }
  ];

  for (const p of profiles) {
    await prisma.fantasyProfile.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        ...p,
        bio: 'Fictional synthetic fantasy profile.',
        avatarUrl: 'https://example.com/avatar.jpg',
        coverImageUrl: 'https://example.com/cover.jpg',
        tags: ['fantasy', 'synthetic'],
        isActive: true
      }
    });
  }

  const firstProfile = await prisma.fantasyProfile.findFirstOrThrow({ where: { slug: 'astra-nightwind' } });

  const videos = [
    { title: 'Preview One', slug: 'preview-one', type: VideoType.PREVIEW_30_SEC, durationSeconds: 30, isPremium: false },
    { title: 'Preview Two', slug: 'preview-two', type: VideoType.PREVIEW_30_SEC, durationSeconds: 30, isPremium: false },
    { title: 'Preview Three', slug: 'preview-three', type: VideoType.PREVIEW_30_SEC, durationSeconds: 30, isPremium: false },
    { title: 'Premium Fifteen', slug: 'premium-fifteen', type: VideoType.FULL_15_MIN, durationSeconds: 900, isPremium: true },
    { title: 'Premium Thirty', slug: 'premium-thirty', type: VideoType.FULL_30_MIN, durationSeconds: 1800, isPremium: true }
  ];

  for (const item of videos) {
    await prisma.video.upsert({
      where: { slug: item.slug },
      update: {},
      create: {
        profileId: firstProfile.id,
        title: item.title,
        slug: item.slug,
        description: 'Fictional synthetic fantasy video placeholder.',
        type: item.type,
        durationSeconds: item.durationSeconds,
        videoUrl: 'https://example.com/video.mp4',
        previewUrl: 'https://example.com/preview.mp4',
        thumbnailUrl: 'https://example.com/thumbnail.jpg',
        storageKey: `videos/${item.slug}.mp4`,
        status: VideoStatus.READY,
        isPremium: item.isPremium
      }
    });
  }
}

main().finally(async () => prisma.$disconnect());
