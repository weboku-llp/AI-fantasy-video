export class VideosService {
  assertLocked(isPremium: boolean, hasSubscription: boolean) {
    return isPremium && !hasSubscription;
  }
}
