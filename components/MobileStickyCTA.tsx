import Link from "next/link";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-lift backdrop-blur md:hidden">
      <Link href="/contact" className="button button-primary w-full">
        Request a Walkthrough
      </Link>
    </div>
  );
}
