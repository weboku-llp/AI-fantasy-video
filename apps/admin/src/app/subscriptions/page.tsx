import { SubscriptionTable } from '../../components/subscriptions/SubscriptionTable';

export default function Page() {
  return (
    <section>
      <span className="chip">Subscriptions</span>
      <h1 className="mt-2 text-3xl font-bold text-white">Subscribers</h1>
      <p className="mt-1 text-sm text-zinc-400">
        Monitor Premium Monthly subscribers and billing status.
      </p>
      <div className="mt-6">
        <SubscriptionTable />
      </div>
    </section>
  );
}
