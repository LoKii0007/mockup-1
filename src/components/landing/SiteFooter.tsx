import { ArrowLink } from "./ArrowLink";

export function SiteFooter() {
  return (
    <footer id="pricing" className="bg-black text-white">
      <div className="px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 md:px-12 md:pb-20 md:pt-14">
        <h2 className="select-none text-center font-extralight leading-[0.85] tracking-[0.04em] text-[clamp(3.25rem,16vw,10.5rem)] bg-gradient-to-t from-white/90 from-[18%] via-white/25 via-[42%] to-transparent bg-clip-text text-transparent">
          HOMEFLOW
        </h2>

        <div className="mt-8 border-t border-white/10 md:mt-10" />

        <div className="mt-8 grid gap-10 md:mt-10 md:grid-cols-2 md:items-start md:gap-8">
          <p className="text-lg font-light leading-snug text-white sm:text-xl md:text-2xl">
            Inspired Interiors,
            <br />
            Delivered
          </p>

          <div className="flex flex-col items-start gap-6 md:items-end md:gap-8 md:text-right">
            <p className="max-w-[240px] text-xs font-light leading-relaxed text-zinc-400 sm:text-[0.8125rem]">
              Discover intelligent design for spaces that feel personal and
              modern.
            </p>
            <ArrowLink label="Try now" href="#" className="text-sm text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
