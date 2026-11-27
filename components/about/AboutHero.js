import PageHero, { HERO_MEDIA } from "@/components/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      media={HERO_MEDIA.cut}
      crumb="About"
      title={
        <>
          A pair of scissors
          <br />
          and a <span>dream.</span>
        </>
      }
      subtitle={<>The story of Hammad &quot;Ahmad&quot; and Scissors VIP Salon, Dubai.</>}
    />
  );
}
