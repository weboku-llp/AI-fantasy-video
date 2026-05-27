import { ProfileCard } from '../../../components/profile/ProfileCard';
import { ProfileVideoGrid } from '../../../components/profile/ProfileVideoGrid';
import { PROFILE_HIGHLIGHTS } from '../../../lib/mock-data';

type Params = { profileId: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { profileId } = await params;
  const profile = PROFILE_HIGHLIGHTS.find((p) => p.id === profileId) ?? PROFILE_HIGHLIGHTS[0];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <ProfileCard
        name={profile.name}
        bio={profile.bio}
        tags={profile.tags}
        poster={profile.poster}
        followers={profile.followers}
        videos={profile.videos}
      />
      <ProfileVideoGrid />
    </section>
  );
}
