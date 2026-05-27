export type PosterVariant = 'aurora' | 'ember' | 'tide';

export type ReelVideo = {
  id: string;
  title: string;
  profileName: string;
  profileId: string;
  durationLabel: string;
  isPremium: boolean;
  tags: string[];
  previewSummary: string;
  poster: PosterVariant;
  views: string;
  likes: string;
};

export const REEL_VIDEOS: ReelVideo[] = [
  {
    id: 'preview-one',
    title: 'Moonlit Spellbound',
    profileName: 'Astra Nightwind',
    profileId: 'astra-nightwind',
    durationLabel: '0:30',
    isPremium: false,
    tags: ['fantasy', 'magic', 'cinematic'],
    previewSummary: 'A surreal moon-temple duel rendered in synthetic fantasy visuals.',
    poster: 'aurora',
    views: '128K',
    likes: '14.2K',
  },
  {
    id: 'premium-fifteen',
    title: 'Citadel of Ember',
    profileName: 'Seren Emberglow',
    profileId: 'seren-emberglow',
    durationLabel: '15:00',
    isPremium: true,
    tags: ['epic', 'story', 'premium'],
    previewSummary: 'A locked premium storyline with expanded worldbuilding and battle arcs.',
    poster: 'ember',
    views: '54K',
    likes: '6.8K',
  },
  {
    id: 'premium-thirty',
    title: 'Storm Crown Chronicle',
    profileName: 'Kael Stormborn',
    profileId: 'kael-stormborn',
    durationLabel: '30:00',
    isPremium: true,
    tags: ['longform', 'adventure', 'premium'],
    previewSummary: 'A long-form cinematic chapter set across stormbound AI fantasy realms.',
    poster: 'tide',
    views: '92K',
    likes: '11.4K',
  },
  {
    id: 'preview-two',
    title: 'Veil of Silverrun',
    profileName: 'Noctis Silverrun',
    profileId: 'noctis-silverrun',
    durationLabel: '0:30',
    isPremium: false,
    tags: ['stealth', 'noir', 'city'],
    previewSummary: 'A neon-veined rogue slips between rooftops of a synthetic capital.',
    poster: 'tide',
    views: '212K',
    likes: '21.7K',
  },
  {
    id: 'preview-three',
    title: 'Embercroft Vigil',
    profileName: 'Seren Emberglow',
    profileId: 'seren-emberglow',
    durationLabel: '0:30',
    isPremium: false,
    tags: ['warmth', 'bard', 'ritual'],
    previewSummary: 'A ritual of ember-song that lights an unseen path through frost.',
    poster: 'ember',
    views: '76K',
    likes: '9.1K',
  },
];

export const PROFILE_HIGHLIGHTS = [
  {
    id: 'astra-nightwind',
    name: 'Astra Nightwind',
    bio: 'Synthetic mage persona from the floating archives of Elyndra.',
    tags: ['mage', 'arcane', 'synthetic-only'],
    poster: 'aurora' as PosterVariant,
    followers: '128K',
    videos: 14,
  },
  {
    id: 'seren-emberglow',
    name: 'Seren Emberglow',
    bio: 'A fictional fire bard guiding mythic quests through ember cities.',
    tags: ['bard', 'fire', 'storytelling'],
    poster: 'ember' as PosterVariant,
    followers: '94K',
    videos: 11,
  },
  {
    id: 'kael-stormborn',
    name: 'Kael Stormborn',
    bio: 'A storm-touched wanderer in a fully synthetic high-fantasy setting.',
    tags: ['warrior', 'storm', 'epic'],
    poster: 'tide' as PosterVariant,
    followers: '156K',
    videos: 18,
  },
];

export const PLATFORM_STATS = [
  { label: 'Synthetic profiles', value: '84+' },
  { label: 'Cinematic previews', value: '1,920' },
  { label: 'Active subscribers', value: '1.2K' },
  { label: 'Compliance audits', value: '100%' },
];

export const PLAN_FEATURES = [
  { label: 'Full 15 & 30 minute episodes', included: true },
  { label: 'New release priority access', included: true },
  { label: 'Premium profile collections', included: true },
  { label: 'Ad-free cinematic playback', included: true },
  { label: 'Cancel anytime from settings', included: true },
  { label: 'Strict synthetic-only moderation', included: true },
];
