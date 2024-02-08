/**
 * @typedef {import("@prismicio/client").Content.HeroComponentSlice} HeroComponentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroComponentSlice>} HeroComponentProps
 * @param {HeroComponentProps}
 */
const HeroComponent = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hero_component (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeroComponent;
