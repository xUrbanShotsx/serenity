import { HOUSE, SUITES } from "@/lib/properties";
import ButtonLink from "./ButtonLink";
import Reveal from "./Reveal";
import StayCards from "./StayCards";

export default function StaysOverview() {
  return (
    <>
      <div className="grid">
        <div className="c-l start">
          <h3 className="label" style={{ marginBottom: 20 }}>The House</h3>
          <p className="small">
            A family-sized home for groups who want room to spread out — four bedrooms, an open living area that runs onto the terrace, a heated pool and a fire pit. Sleeps eight and more.
          </p>
          <div style={{ marginTop: 24 }}>
            <ButtonLink href="/house" tone="sage">Explore the house</ButtonLink>
          </div>
        </div>
        <Reveal className="c-r">
          <StayCards stays={[HOUSE]} wide />
        </Reveal>
      </div>

      <div className="grid" style={{ marginTop: "clamp(64px, 9vw, 140px)" }}>
        <div className="c-l start">
          <h3 className="label" style={{ marginBottom: 20 }}>The Suites</h3>
          <p className="small">
            Three private suites — the Olive, the Shoreline and the Horizon — each with one bedroom, a full bathroom and its own outdoor space. Intimate by design, with nothing missing.
          </p>
          <div style={{ marginTop: 24 }}>
            <ButtonLink href="/suites" tone="sage">Explore the suites</ButtonLink>
          </div>
        </div>
        <Reveal className="c-f">
          <StayCards stays={SUITES} />
        </Reveal>
      </div>
    </>
  );
}
