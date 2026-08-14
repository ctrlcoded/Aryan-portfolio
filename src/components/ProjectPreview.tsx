/**
 * Browser-chrome product mockups for each project.
 *
 * The projects have no deployed URL (3 of 4) and no screenshots in their
 * READMEs, so instead of bare gradients we render a clean macOS-style browser
 * window containing a recognizable, schematic silhouette of each product's UI.
 * Purely presentational, no client hooks — safe inside a server component.
 */

type Variant = "gonomad" | "lumina" | "mlforai" | "solvi";

const bar = (w: string, extra = "") => (
    <span className={`block h-1.5 rounded-full ${extra}`} style={{ width: w }} />
);

function Chrome({ url, tint, children }: { url: string; tint: string; children: React.ReactNode }) {
    return (
        <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
            <div className="w-full max-w-[440px] rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0f] shadow-2xl">
                {/* title bar */}
                <div className="h-8 flex items-center gap-2 px-3 border-b border-white/8 bg-white/[0.03]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <div className="ml-2 flex-1">
                        <div className="mx-auto max-w-[220px] h-4 rounded-full bg-white/[0.06] flex items-center justify-center">
                            <span className="text-[9px] text-white/40 truncate px-2">{url}</span>
                        </div>
                    </div>
                </div>
                {/* viewport */}
                <div className={`relative h-[190px] md:h-[210px] overflow-hidden bg-gradient-to-br ${tint}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

function GoNomad() {
    return (
        <div className="absolute inset-0 p-3 flex flex-col gap-2.5">
            {/* search row */}
            <div className="flex gap-2">
                <div className="flex-1 h-6 rounded-md bg-white/10 flex items-center px-2">
                    {bar("60%", "bg-white/25")}
                </div>
                <div className="h-6 w-14 rounded-md bg-emerald-400/80" />
            </div>
            {/* car cards */}
            <div className="grid grid-cols-3 gap-2 flex-1">
                {[0, 1, 2].map((i) => (
                    <div key={i} className="rounded-lg bg-white/[0.06] border border-white/10 p-1.5 flex flex-col gap-1.5">
                        <div className="h-10 rounded-md bg-gradient-to-br from-emerald-400/40 to-teal-500/20" />
                        {bar("80%", "bg-white/25")}
                        {bar("50%", "bg-white/15")}
                        <div className="mt-auto h-3.5 w-10 rounded-full bg-emerald-400/70" />
                    </div>
                ))}
            </div>
        </div>
    );
}

function Lumina() {
    return (
        <div className="absolute inset-0 p-3 grid grid-cols-2 gap-2">
            {[["AI text", "bg-white/15"], ["Humanized", "bg-violet-300/40"]].map(([label, tone], c) => (
                <div key={c} className="rounded-lg bg-white/[0.05] border border-white/10 p-2 flex flex-col gap-1.5">
                    <div className="text-[8px] uppercase tracking-wider text-white/40">{label}</div>
                    {bar("95%", tone as string)}
                    {bar("100%", tone as string)}
                    {bar("85%", tone as string)}
                    {bar("92%", tone as string)}
                    {bar("60%", tone as string)}
                </div>
            ))}
            {/* center action */}
            <div className="col-span-2 flex justify-center -mt-1">
                <div className="h-5 w-24 rounded-full bg-violet-400/80" />
            </div>
        </div>
    );
}

function MLforAI() {
    return (
        <div className="absolute inset-0 p-3 flex gap-2">
            {/* sidebar */}
            <div className="w-1/3 rounded-lg bg-white/[0.05] border border-white/10 p-2 flex flex-col gap-2">
                {["100%", "70%", "85%", "60%", "75%"].map((w, i) => (
                    <div key={i} className={i === 1 ? "flex items-center gap-1" : ""}>
                        {i === 1 && <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />}
                        {bar(w, i === 1 ? "bg-amber-300/70" : "bg-white/20")}
                    </div>
                ))}
            </div>
            {/* content */}
            <div className="flex-1 rounded-lg bg-white/[0.04] border border-white/10 p-2.5 flex flex-col gap-2">
                <div className="h-2.5 w-2/3 rounded bg-white/30" />
                {bar("100%", "bg-white/15")}
                {bar("92%", "bg-white/15")}
                <div className="mt-1 rounded-md bg-black/40 border border-white/10 p-1.5 flex flex-col gap-1">
                    {bar("70%", "bg-amber-300/50")}
                    {bar("55%", "bg-white/15")}
                </div>
            </div>
        </div>
    );
}

function Solvi() {
    return (
        <div className="absolute inset-0 p-3 flex flex-col gap-2">
            {/* header with progress */}
            <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full border-[3px] border-white/70 border-r-white/10" />
                <div className="flex flex-col gap-1.5">
                    {bar("70px", "bg-white/30")}
                    {bar("44px", "bg-white/15")}
                </div>
                <div className="ml-auto h-5 w-14 rounded-full bg-white/70" />
            </div>
            {/* problem rows */}
            <div className="flex-1 flex flex-col gap-1.5">
                {[["#28c840", "88%"], ["#28c840", "72%"], ["#febc2e", "80%"], ["#ffffff30", "64%"]].map(([dot, w], i) => (
                    <div key={i} className="flex items-center gap-2 rounded-md bg-white/[0.05] border border-white/10 px-2 py-1.5">
                        <span className="h-2 w-2 rounded-full" style={{ background: dot as string }} />
                        {bar(w as string, "bg-white/20")}
                        <span className="ml-auto h-3 w-3 rounded-[4px] border border-white/20" />
                    </div>
                ))}
            </div>
        </div>
    );
}

const screens: Record<Variant, () => React.ReactNode> = {
    gonomad: GoNomad,
    lumina: Lumina,
    mlforai: MLforAI,
    solvi: Solvi,
};

export default function ProjectPreview({
    variant,
    url,
    tint,
}: {
    variant: Variant;
    url: string;
    tint: string;
}) {
    const Screen = screens[variant];
    return (
        <Chrome url={url} tint={tint}>
            <Screen />
        </Chrome>
    );
}
