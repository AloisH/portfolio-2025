/**
 * Variants for `v-motion="motionReveal(delay)"`: fade + slide-up once the element enters the viewport.
 *
 * Passed as the directive *value* (not `:initial` / `:visible-once` attributes) so the
 * `initial` styles are also applied during SSR and the content does not flash before hydration.
 * Returns a fresh object per call because the directive mutates its variants in place.
 */
export const motionReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: { duration: 500, ease: 'easeOut', delay }
  }
})
