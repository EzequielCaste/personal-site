// log the pageview with their URL
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    })
  }
}

// log specific events happening.
export const event = ({action, params}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, params)
  }
}
