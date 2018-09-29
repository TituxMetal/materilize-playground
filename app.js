document.addEventListener('DOMContentLoaded', () => {
  // Sidenav
  const sidenavEl = document.querySelectorAll('.sidenav')
  M.Sidenav.init(sidenavEl)

  // Materialboxed
  const imgsEl = document.querySelectorAll('.materialboxed')
  M.Materialbox.init(imgsEl)

  // Parallax
  const parallaxEl = document.querySelectorAll('.parallax')
  M.Parallax.init(parallaxEl)

  // Tabs
  const tabsEl = document.querySelectorAll('.tabs')
  M.Tabs.init(tabsEl, { swipeable: true })

  // Datepicker
  const datepickerEl = document.querySelectorAll('.datepicker')
  M.Datepicker.init(datepickerEl, { autoClose: true, format: 'dd mmm, yyyy', firstDay: 1, disableWeekends: true })

  // Tooltip
  const tooltipEl = document.querySelectorAll('.tooltipped')
  M.Tooltip.init(tooltipEl)

  // Scrollspy
  const scrollspyEl = document.querySelectorAll('.scrollspy')
  M.ScrollSpy.init(scrollspyEl)
})
