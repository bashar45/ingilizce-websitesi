import { COMPARISON } from "@/data/siteContent";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ComparisonSection() {
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <SectionHeading title={COMPARISON.title} subtitle={COMPARISON.subtitle} />

        <Reveal className="mt-12">
          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-card border border-line md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-paper">
                  <th className="w-1/3 px-6 py-4 text-sm font-semibold text-muted"></th>
                  <th className="px-6 py-4 text-sm font-semibold text-muted">
                    Klasik uygulamalar
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-action-hover">
                    İngilizcemiz
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.rows.map((row) => (
                  <tr key={row.label} className="border-t border-line">
                    <td className="px-6 py-4 text-[15px] font-semibold text-ink">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-[15px] text-muted">
                      {row.classic}
                    </td>
                    <td className="bg-action-soft/40 px-6 py-4 text-[15px] font-medium text-ink">
                      {row.ours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card list */}
          <div className="space-y-3 md:hidden">
            {COMPARISON.rows.map((row) => (
              <div
                key={row.label}
                className="rounded-card border border-line bg-paper p-5"
              >
                <div className="text-sm font-semibold text-ink">{row.label}</div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-2">Klasik</div>
                    <div className="mt-0.5 text-muted">{row.classic}</div>
                  </div>
                  <div className="rounded-xl bg-action-soft/50 p-2">
                    <div className="text-xs text-action-hover">İngilizcemiz</div>
                    <div className="mt-0.5 font-medium text-ink">{row.ours}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
