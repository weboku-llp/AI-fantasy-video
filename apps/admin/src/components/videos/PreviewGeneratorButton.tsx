import { SparkleIcon } from '../ui/Icons';

export function PreviewGeneratorButton() {
  return (
    <button type="button" className="btn-ghost">
      <SparkleIcon className="h-4 w-4 text-amber-200" />
      Generate 30-sec preview
    </button>
  );
}
