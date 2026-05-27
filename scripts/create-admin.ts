import { PrismaClient, Role, SubscriptionStatus } from '@prisma/client';

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
}

main().finally(async () => prisma.$disconnect());
