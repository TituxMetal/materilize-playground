import { Datepicker, Materialbox, ScrollSpy, Sidenav, Parallax, Tabs, Tooltip } from 'materialize-css/dist/js/materialize'

document.addEventListener('DOMContentLoaded', () => {
  // Sidenav
  const sidenavEl = document.querySelectorAll('.sidenav')
  Sidenav.init(sidenavEl)

  // Materialboxed
  const imgsEl = document.querySelectorAll('.materialboxed')
  Materialbox.init(imgsEl)

  // Parallax
  const parallaxEl = document.querySelectorAll('.parallax')
  Parallax.init(parallaxEl)

  // Tabs
  const tabsEl = document.querySelectorAll('.tabs')
  Tabs.init(tabsEl, { swipeable: true })

  // Datepicker
  const datepickerEl = document.querySelectorAll('.datepicker')
  Datepicker.init(datepickerEl, { autoClose: true, format: 'dd mmm, yyyy', firstDay: 1, disableWeekends: true })

  // Tooltip
  const tooltipEl = document.querySelectorAll('.tooltipped')
  Tooltip.init(tooltipEl)

  // Scrollspy
  const scrollspyEl = document.querySelectorAll('.scrollspy')
  ScrollSpy.init(scrollspyEl)
})
