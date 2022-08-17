export function getGlobalState() {
  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP'

  const localCollapsed = localStorage.getItem('collapsed') || ''
  const collapsed = localCollapsed === 'true'

  return {device, collapsed} as const
}
