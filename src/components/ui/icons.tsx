import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Stroke({ size = 20, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const MenuIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Stroke>
)
export const CloseIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Stroke>
)
export const ChevronLeft = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M15 5l-7 7 7 7" />
  </Stroke>
)
export const ChevronRight = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M9 5l7 7-7 7" />
  </Stroke>
)
export const ExpandIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
  </Stroke>
)
export const SwapIcon = (p: IconProps) => (
  <Stroke size={28} {...p}>
    <path d="M4 8h13l-3-3M20 16H7l3 3" />
  </Stroke>
)
export const ShelfIcon = (p: IconProps) => (
  <Stroke size={28} {...p}>
    <path d="M5 4h3v16H5zM10 4h3v16h-3zM15.5 5.5l3-.8 3.4 14.6-3 .8z" />
  </Stroke>
)
export const PostIcon = (p: IconProps) => (
  <Stroke size={28} {...p}>
    <path d="M5 5h14v10H10l-5 4z" />
    <path d="M9 9h6M9 12h4" />
  </Stroke>
)

export function LinkedInIcon({ size = 28 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="flex-none">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

export function MailIcon({ size = 28 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="flex-none">
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.6 2L12 12.4 19.4 7H4.6zM4 8.9V17h16V8.9l-8 5.8-8-5.8z" />
    </svg>
  )
}
