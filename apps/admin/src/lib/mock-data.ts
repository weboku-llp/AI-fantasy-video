export const DASHBOARD_STATS = [
  { label: 'Active subscribers', value: '1,248', delta: '+8.4%' },
  { label: 'Total profiles', value: '84', delta: '+3' },
  { label: 'Videos ready', value: '1,920', delta: '+42 today' },
  { label: 'AI jobs running', value: '12', delta: 'Live' },
];

export const RECENT_ACTIVITY = [
  { id: 1, type: 'New subscriber', detail: 'user_3814 • Premium Monthly', time: '2m ago' },
  { id: 2, type: 'Profile created', detail: 'Astra Nightwind', time: '12m ago' },
  { id: 3, type: 'AI job completed', detail: 'job_086 • 0:30 preview', time: '24m ago' },
  { id: 4, type: 'Video published', detail: 'Citadel of Ember • 15:00', time: '1h ago' },
  { id: 5, type: 'Report resolved', detail: 'report_421 • dismissed', time: '3h ago' },
];

export const PROFILE_ROWS = [
  { name: 'Astra Nightwind', slug: 'astra-nightwind', status: 'Active', videos: 14, tags: ['mage', 'arcane'] },
  { name: 'Seren Emberglow', slug: 'seren-emberglow', status: 'Active', videos: 11, tags: ['bard', 'fire'] },
  { name: 'Kael Stormborn', slug: 'kael-stormborn', status: 'Active', videos: 18, tags: ['warrior', 'storm'] },
  { name: 'Noctis Silverrun', slug: 'noctis-silverrun', status: 'Review', videos: 7, tags: ['rogue', 'noir'] },
];

export const VIDEO_ROWS = [
  { title: 'Moonlit Spellbound', type: 'PREVIEW_30_SEC', status: 'READY', duration: '0:30', premium: false },
  { title: 'Citadel of Ember', type: 'FULL_15_MIN', status: 'READY', duration: '15:00', premium: true },
  { title: 'Storm Crown Chronicle', type: 'FULL_30_MIN', status: 'PROCESSING', duration: '30:00', premium: true },
  { title: 'Veil of Silverrun', type: 'PREVIEW_30_SEC', status: 'READY', duration: '0:30', premium: false },
];

export const AI_JOB_ROWS = [
  { id: 'job_101', provider: 'provider-abstract', status: 'PROCESSING', duration: '0:30' },
  { id: 'job_099', provider: 'provider-abstract', status: 'QUEUED', duration: '15:00' },
  { id: 'job_086', provider: 'provider-abstract', status: 'COMPLETED', duration: '0:30' },
  { id: 'job_077', provider: 'provider-abstract', status: 'FAILED', duration: '30:00' },
];
