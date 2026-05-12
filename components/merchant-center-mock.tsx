export interface MerchantRow {
  name: string;
  brand: string;
  margin: string;
  avail: string;
  status: "active" | "limited" | "disapproved";
}

export interface MerchantCenterMockProps {
  title: string;
  meta: string;
  rows: MerchantRow[];
}

const statusLabel: Record<MerchantRow["status"], string> = {
  active: "Aktiv",
  limited: "Begrænset",
  disapproved: "Afvist",
};

const statusColor: Record<MerchantRow["status"], string> = {
  active: "text-ice",
  limited: "text-copper",
  disapproved: "text-ink-soft",
};

export function MerchantCenterMock({
  title,
  meta,
  rows,
}: MerchantCenterMockProps) {
  return (
    <div
      className="border border-rule bg-paper-2 overflow-hidden"
      style={{ boxShadow: "0 18px 42px -24px rgba(22,20,15,0.25)" }}
    >
      {/* Chrome bar */}
      <div className="border-b border-rule px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="block h-2.5 w-2.5 border border-rule" />
          <span className="block h-2.5 w-2.5 border border-rule" />
          <span className="block h-2.5 w-2.5 border border-rule" />
        </div>
        <span className="font-mono text-[10px] text-ink-soft tracking-[0.10em] uppercase">
          Merchant Center
        </span>
      </div>

      {/* Header */}
      <div className="px-4 py-4 border-b border-rule">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper mb-1">
          {meta}
        </p>
        <p className="font-display text-[15px] font-[300] text-ink">{title}</p>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-x-3 px-4 py-2 border-b border-rule">
        {["Produkt", "Brand", "Margin", "Lager", "Status"].map((h) => (
          <span
            key={h}
            className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-soft"
          >
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-x-3 px-4 py-3 border-b border-rule last:border-b-0 items-center"
        >
          <span className="font-body text-[12px] text-ink truncate">
            {row.name}
          </span>
          <span className="font-mono text-[11px] text-ink-mid">{row.brand}</span>
          <span className="font-mono text-[11px] text-ink-mid">{row.margin}</span>
          <span className="font-mono text-[11px] text-ink-mid">{row.avail}</span>
          <span
            className={`font-mono text-[10px] uppercase tracking-[0.12em] ${statusColor[row.status]}`}
          >
            {statusLabel[row.status]}
          </span>
        </div>
      ))}
    </div>
  );
}
