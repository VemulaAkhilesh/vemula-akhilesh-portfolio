import { AnimationWrapper } from '../animations/AnimationWrapper.tsx'

type SectionHeadingProps = {
  index: string
  kicker: string
  title: string
  lede?: string
}

export function SectionHeading({ index, kicker, title, lede }: SectionHeadingProps) {
  return (
    <AnimationWrapper className="section-head">
      <p className="kicker">
        <span>{index}</span>
        {kicker}
      </p>
      <h2>{title}</h2>
      {lede ? <p className="lede">{lede}</p> : null}
    </AnimationWrapper>
  )
}
