export function addDays(d: Date, days: number) { const r = new Date(d); r.setDate(r.getDate() + days); return r; }
