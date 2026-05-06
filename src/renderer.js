const DEFAULT_CATEGORY_ID = "category-inbox"
const DEFAULT_CATEGORY_NAME = "미분류"
const RECURRING_CATEGORY_ID = "category-recurring"
const RECURRING_CATEGORY_NAME = "상시 업무"
const ALL_CATEGORIES_ITEM_ID = "showAllCategories"
const COMPACT_CATEGORY_BREAKPOINT = 1080
const STORAGE_VERSION = 3
const WEEKLY_PRINT_REMINDER_HOUR = 17
const WEEKLY_PRINT_REMINDER_MINUTE = 0
const MAX_WEEKLY_PRINT_REMINDER_HISTORY = 26
const WEEKLY_PRINT_REMINDER_MESSAGE = "주간 업무일지를 인쇄하시겠습니까? 인쇄하지 않은 자료는 사라집니다."
const CATEGORY_PANEL_EXPANDED_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256" aria-hidden="true">
    <path d="M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z"></path>
  </svg>
`
const CATEGORY_PANEL_COLLAPSED_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256" aria-hidden="true">
    <path d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"></path>
  </svg>
`
const INBOX_CATEGORY_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256" aria-hidden="true">
    <path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H208a4,4,0,0,1,4,4V156H179.31a12,12,0,0,0-8.48,3.51l-19.32,19.32a4,4,0,0,1-2.82,1.17H107.31a4,4,0,0,1-2.82-1.17L85.17,159.51A12,12,0,0,0,76.69,156H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V164H76.69a4,4,0,0,1,2.82,1.17l19.32,19.32a12,12,0,0,0,8.48,3.51h41.38a12,12,0,0,0,8.48-3.51l19.32-19.32a4,4,0,0,1,2.82-1.17H212v44A4,4,0,0,1,208,212Z"></path>
  </svg>
`
const DEFAULT_CATEGORY_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256" aria-hidden="true">
    <path d="M92,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H96A4,4,0,0,1,92,64Zm124,60H96a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,64H96a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM56,60H40a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Zm0,64H40a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Zm0,64H40a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Z"></path>
  </svg>
`
const ALL_CATEGORIES_ACTIVE_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256" aria-hidden="true">
    <path d="M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"></path>
  </svg>
`
const ALL_CATEGORIES_INACTIVE_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256" aria-hidden="true">
    <path d="M51,37.31A4,4,0,0,0,45,42.69L67.59,67.5C29.34,89,13,124.81,12.34,126.38a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17a122.59,122.59,0,0,0,53.06-11.69l24,26.38a4,4,0,1,0,5.92-5.38ZM149.1,157.16A36,36,0,0,1,101,104.22ZM128,196c-32,0-59.89-11.65-83-34.62A135.81,135.81,0,0,1,20.44,128c3.65-7.23,20.09-36.81,52.68-54.43l22.45,24.7a44,44,0,0,0,59,64.83l20.89,23A114.94,114.94,0,0,1,128,196Zm6.78-103.36a4,4,0,0,1,1.49-7.86,44.15,44.15,0,0,1,35.54,39.09,4,4,0,0,1-3.61,4.35l-.38,0a4,4,0,0,1-4-3.63A36.1,36.1,0,0,0,134.78,92.64Zm108.88,37c-.41.91-10.2,22.58-32.38,42.45a4,4,0,0,1-2.67,1,4,4,0,0,1-2.67-7A136.71,136.71,0,0,0,235.56,128,136.07,136.07,0,0,0,211,94.62C187.89,71.65,160,60,128,60a122,122,0,0,0-20,1.63,4,4,0,0,1-1.32-7.89A129.3,129.3,0,0,1,128,52c42.7,0,71.87,20.22,88.83,37.18,18.31,18.31,26.49,36.44,26.83,37.2A4.08,4.08,0,0,1,243.66,129.63Z"></path>
  </svg>
`
const DAILY_REPORT_CHILD_TASK_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256" aria-hidden="true">
    <path d="M218.83,178.83l-48,48a4,4,0,0,1-5.66-5.66L206.34,180H72a4,4,0,0,1-4-4V32a4,4,0,0,1,8,0V172H206.34l-41.17-41.17a4,4,0,1,1,5.66-5.66l48,48A4,4,0,0,1,218.83,178.83Z"></path>
  </svg>
`
const WEEKLY_REPORT_NOTE_PREVIEW_LIMIT = 3
const DAILY_REPORT_AUTO_SEND_RETRY_DELAY_MS = 60 * 1000
const MIN_REPORT_GROUP_ROWS = 5

const dailyLogState = {
  selectedCategoryId: null,
  nextOrder: 1,
  items: []
}

const dailyReportMemoState = {
  notesByDate: {},
  saveTimerId: null
}

const weeklyReportMemoState = {
  notesByPeriod: {}
}

const userProfileState = {
  name: "",
  department: "",
  position: "",
  gmailAddress: "",
  googleAppPassword: "",
  recipientEmail: "",
  dailyReportSavePath: "",
  weeklyReportSavePath: "",
  dailyReportAutoSendTime: "",
  mailBody: "",
  holidayDates: [],
  dailyReportLastAutoSentDate: ""
}

const contextMenuState = {
  targetType: null,
  targetElement: null,
  categoryMap: null,
  inboxId: null,
  inboxName: null
}

const textEditModalState = {
  submitHandler: null,
  focusInputFrameId: null
}

const confirmModalState = {
  submitHandler: null
}

const infoModalState = {
  message: ""
}

const reportPreviewState = {
  returnFocusElement: null,
  reportType: null
}

const reportMemoModalState = {
  returnFocusElement: null
}

const dailyReportAutoSendState = {
  timerId: null,
  isSending: false
}

const weeklyPrintReminderState = {
  timerId: null,
  historyByWeek: {}
}

const holidayCalendarState = {
  publicHolidayDates: [],
  lastSyncedAt: "",
  lastSyncedAppVersion: "",
  configPath: "",
  configEnabled: false,
  hasServiceKey: false,
  endpoint: "",
  syncStatusMessage: ""
}

const reportDeliveryState = {
  isDailyReportSending: false
}

const dailyLogDetailState = {
  selectedItem: null
}

const categorySelectModalState = {
  submitHandler: null,
  returnFocusElement: null,
  targetItem: null,
  categoryMap: null,
  title: "카테고리 변경"
}

const categoryPanelState = {
  isCompactLayout: null,
  isCollapsed: false
}

const archivedCategoryPanelState = {
  isExpanded: false
}

let persistQueue = Promise.resolve()

function writeStartupDebugLog(message, details = {}) {
  if (!window.appDebug?.log) {
    return
  }

  const payload = {
    message,
    ...details
  }
  window.appDebug.log(JSON.stringify(payload))
}

function createCategoryId() {
  const randomNumber = Math.floor(10000000 + Math.random() * 90000000)
  return `category-${randomNumber}`
}

function ensureCategoryId(element, fallbackId) {
  const currentId = element.dataset.categoryId?.trim()
  if (currentId) {
    return currentId
  }

  element.dataset.categoryId = fallbackId
  return fallbackId
}

function getCategoryLabel(element) {
  return element.querySelector("p")?.textContent?.trim() ?? ""
}

function getAllCategoriesItem() {
  return document.querySelector(`#${ALL_CATEGORIES_ITEM_ID}`)
}

function getCategoryList() {
  return document.querySelector("#categories > .itemList")
}

function getArchivedCategoryList() {
  return document.querySelector("#archivedCategoriesList")
}

function getArchivedCategoryPanel() {
  return document.querySelector("#archivedCategoriesPanel")
}

function getArchivedCategoryToggleButton() {
  return document.querySelector("#toggleArchivedCategoriesButton")
}

function getCategoryPanel() {
  return document.querySelector("#categories")
}

function getCategoryToggleButton() {
  return document.querySelector("#toggleCategoriesButton")
}

function isCompactCategoryLayout() {
  return window.innerWidth <= COMPACT_CATEGORY_BREAKPOINT
}

function setCategoriesCollapsed(isCollapsed) {
  const categoryPanel = getCategoryPanel()
  const toggleButton = getCategoryToggleButton()
  if (!categoryPanel || !toggleButton) {
    return
  }

  categoryPanelState.isCollapsed = isCollapsed
  categoryPanel.classList.toggle("categoriesCollapsed", isCollapsed)
  toggleButton.setAttribute("aria-expanded", String(!isCollapsed))
  toggleButton.setAttribute("aria-label", isCollapsed ? "주요 업무 펼치기" : "주요 업무 접기")
  toggleButton.innerHTML = isCollapsed ? CATEGORY_PANEL_COLLAPSED_ICON : CATEGORY_PANEL_EXPANDED_ICON
}

function syncCategoryPanelResponsiveState() {
  const isCompactLayout = isCompactCategoryLayout()
  const categoryPanel = getCategoryPanel()
  if (!categoryPanel) {
    return
  }

  if (categoryPanelState.isCompactLayout === isCompactLayout) {
    if (!isCompactLayout) {
      setCategoriesCollapsed(false)
    }
    return
  }

  categoryPanelState.isCompactLayout = isCompactLayout
  setCategoriesCollapsed(isCompactLayout)
}

function updateAllCategoriesIcon(isActive) {
  const item = getAllCategoriesItem()
  const iconNode = item?.querySelector("svg")
  if (!iconNode) {
    return
  }

  iconNode.outerHTML = isActive ? ALL_CATEGORIES_ACTIVE_ICON : ALL_CATEGORIES_INACTIVE_ICON
}

function getCategoryIconMarkup(categoryId) {
  return categoryId === DEFAULT_CATEGORY_ID ? INBOX_CATEGORY_ICON : DEFAULT_CATEGORY_ICON
}

function getAllCategoryItems() {
  return Array.from(document.querySelectorAll("#categories .itemList .item[data-category-id]"))
}

function getCategoryItemById(categoryId) {
  return document.querySelector(`#categories .itemList .item[data-category-id="${categoryId}"]`)
}

function isRecurringCategoryId(categoryId) {
  return categoryId?.trim() === RECURRING_CATEGORY_ID
}

function isRecurringCategoryItem(item) {
  return isRecurringCategoryId(item?.dataset?.categoryId)
}

function isRecurringDailyLogItem(item) {
  return isRecurringCategoryId(item?.dataset?.categoryId)
}

function isInboxCategoryItem(item) {
  return item?.dataset?.categoryId?.trim() === DEFAULT_CATEGORY_ID
}

function isArchivedCategoryItem(item) {
  return item?.dataset?.archived === "true"
}

function isArchivedCategoryId(categoryId) {
  return isArchivedCategoryItem(getCategoryItemById(categoryId?.trim?.() ?? ""))
}

function setCategoryItemArchivedState(item, isArchived) {
  if (!(item instanceof HTMLElement)) {
    return
  }

  item.dataset.archived = String(isArchived === true)
  item.classList.toggle("categoryItemArchived", isArchived === true)
}

function getRecurringCategoryName() {
  return getCategoryLabel(getCategoryItemById(RECURRING_CATEGORY_ID)) || RECURRING_CATEGORY_NAME
}

function isReorderableCategoryItem(item) {
  const categoryId = item?.dataset?.categoryId?.trim()
  return Boolean(categoryId) && categoryId !== DEFAULT_CATEGORY_ID && categoryId !== RECURRING_CATEGORY_ID
}

function syncCategoryItemDraggable(item) {
  if (!(item instanceof HTMLElement)) {
    return
  }

  const isDraggable = isReorderableCategoryItem(item)
  item.draggable = isDraggable
  item.classList.toggle("categoryItemFixed", !isDraggable)
}

function reorderCategoryListItems() {
  const categoryList = getCategoryList()
  if (!categoryList) {
    return
  }

  const allCategoriesItem = getAllCategoriesItem()
  const categoryItems = Array.from(categoryList.querySelectorAll(':scope > .item[data-category-id]'))
  const recurringItem = categoryItems.find((item) => isRecurringCategoryItem(item)) ?? null
  const inboxItem = categoryItems.find((item) => isInboxCategoryItem(item)) ?? null
  const reorderableItems = categoryItems.filter((item) => item !== recurringItem && item !== inboxItem)
  const fragment = document.createDocumentFragment()

  if (allCategoriesItem) {
    allCategoriesItem.draggable = false
    fragment.append(allCategoriesItem)
  }

  if (recurringItem) {
    syncCategoryItemDraggable(recurringItem)
    fragment.append(recurringItem)
  }

  reorderableItems.forEach((item) => {
    syncCategoryItemDraggable(item)
    fragment.append(item)
  })

  if (inboxItem) {
    syncCategoryItemDraggable(inboxItem)
    fragment.append(inboxItem)
  }

  categoryList.replaceChildren(fragment)
}

function setArchivedCategoriesExpanded(isExpanded) {
  const panel = getArchivedCategoryPanel()
  const toggleButton = getArchivedCategoryToggleButton()
  if (!panel || !toggleButton) {
    return
  }

  archivedCategoryPanelState.isExpanded = isExpanded
  panel.hidden = !isExpanded
  toggleButton.setAttribute("aria-expanded", String(isExpanded))
  toggleButton.textContent = isExpanded ? "보관된 카테고리 숨기기" : "보관된 카테고리 보기"
}

function moveCategoryItemToActiveList(item) {
  const categoryList = getCategoryList()
  if (!categoryList || !(item instanceof HTMLElement)) {
    return
  }

  const inboxItem = Array.from(categoryList.querySelectorAll(':scope > .item[data-category-id]'))
    .find((categoryItem) => isInboxCategoryItem(categoryItem))
  categoryList.insertBefore(item, inboxItem ?? null)
  reorderCategoryListItems()
}

function moveCategoryItemToArchivedList(item) {
  const archivedList = getArchivedCategoryList()
  if (!archivedList || !(item instanceof HTMLElement)) {
    return
  }

  archivedList.append(item)
}

function upsertCategoryCount(item, completedCount, totalCount) {
  let countNode = item.querySelector(".categoryCount")
  if (!countNode) {
    countNode = document.createElement("span")
    countNode.className = "categoryCount"
    item.append(countNode)
  }

  countNode.textContent = `${completedCount}/${totalCount}`
}

function updateCategoryCounts() {
  const categoryItems = getAllCategoryItems()
  const dailyLogItems = getDailyLogItems()
  const todayDateText = getTodayDateText()

  categoryItems.forEach((categoryItem) => {
    const categoryId = categoryItem.dataset.categoryId?.trim()
    if (!categoryId) {
      return
    }

    let categoryDailyLogs = dailyLogItems.filter((item) =>
      item.dataset.categoryId === categoryId &&
      !isDailyLogSnapshotItem(item)
    )

    if (isRecurringCategoryId(categoryId)) {
      categoryDailyLogs = categoryDailyLogs.filter((item) => getItemLogDate(item) === todayDateText)
    }

    const totalCount = categoryDailyLogs.length
    const completedCount = categoryDailyLogs.filter((item) => item.dataset.isChecked === "true").length
    upsertCategoryCount(categoryItem, completedCount, totalCount)
  })
}

function getItemTitleNode(item) {
  if (item.closest("#dailyLog")) {
    return item.querySelector(".dailyLogTitle")
  }

  return item.querySelector("p")
}

function upsertDebugIdLabel(item) {
  item.querySelector(".debugIdLabel")?.remove()
}

function renderDebugIds() {
  const items = document.querySelectorAll("#categories .itemList .item, #dailyLogGroups .item")
  items.forEach((item) => {
    upsertDebugIdLabel(item)
  })
}

function getDailyLogGroupsContainer() {
  return document.querySelector("#dailyLogGroups")
}

function getDailyLogDetailElements() {
  return {
    panel: document.querySelector("#dailyLogDetail"),
    category: document.querySelector("#dailyLogDetailCategory"),
    title: document.querySelector("#dailyLogDetailTitle"),
    noteInput: document.querySelector("#dailyLogDetailNote"),
    startDateInput: document.querySelector("#dailyLogDetailStartDate"),
    endDateInput: document.querySelector("#dailyLogDetailEndDate"),
    closeButton: document.querySelector("#closeDailyLogDetailButton")
  }
}

function getTextEditModalElements() {
  return {
    modal: document.querySelector("#majorTaskModal"),
    title: document.querySelector("#majorTaskModalTitle"),
    fieldLabel: document.querySelector('.modalField span'),
    input: document.querySelector("#majorTaskNameInput"),
    hint: document.querySelector(".modalHint"),
    closeButton: document.querySelector("#closeMajorTaskModal"),
    cancelButton: document.querySelector("#cancelMajorTaskModal"),
    submitButton: document.querySelector("#submitMajorTaskModal")
  }
}

function getConfirmModalElements() {
  return {
    modal: document.querySelector("#confirmModal"),
    title: document.querySelector("#confirmModalTitle"),
    message: document.querySelector("#confirmModalMessage"),
    closeButton: document.querySelector("#closeConfirmModal"),
    cancelButton: document.querySelector("#cancelConfirmModal"),
    submitButton: document.querySelector("#submitConfirmModal")
  }
}

function getInfoModalElements() {
  return {
    modal: document.querySelector("#infoModal"),
    title: document.querySelector("#infoModalTitle"),
    message: document.querySelector("#infoModalMessage"),
    closeButton: document.querySelector("#closeInfoModal"),
    submitButton: document.querySelector("#submitInfoModal")
  }
}

function getReportPreviewModalElements() {
  return {
    modal: document.querySelector("#reportPreviewModal"),
    title: document.querySelector("#reportPreviewModalTitle"),
    autoSendNotice: document.querySelector("#reportPreviewAutoSendNotice"),
    actionStatus: document.querySelector("#reportPreviewActionStatus"),
    memoButton: document.querySelector("#openReportMemoButton"),
    saveAndSendButton: document.querySelector("#saveAndSendReportButton"),
    frame: document.querySelector("#reportPreviewFrame"),
    closeButton: document.querySelector("#closeReportPreviewModal")
  }
}

function getReportMemoModalElements() {
  return {
    modal: document.querySelector("#reportMemoModal"),
    title: document.querySelector("#reportMemoModalTitle"),
    keyTasksField: document.querySelector("#reportMemoKeyTasksField"),
    keyTasksInput: document.querySelector("#reportMemoKeyTasksInput"),
    groupHomeNewsField: document.querySelector("#reportMemoGroupHomeNewsField"),
    groupHomeNewsInput: document.querySelector("#reportMemoGroupHomeNewsInput"),
    specialNotesInput: document.querySelector("#reportMemoSpecialNotesInput"),
    closeButton: document.querySelector("#closeReportMemoModal"),
    confirmButton: document.querySelector("#confirmReportMemoModal")
  }
}

function getCategorySelectModalElements() {
  return {
    modal: document.querySelector("#categorySelectModal"),
    title: document.querySelector("#categorySelectModalTitle"),
    hint: document.querySelector("#categorySelectModalHint"),
    list: document.querySelector("#categorySelectList"),
    closeButton: document.querySelector("#closeCategorySelectModal"),
    cancelButton: document.querySelector("#cancelCategorySelectModal"),
    addButton: document.querySelector("#addCategoryFromSelectModal")
  }
}

function getPersonalSettingsModalElements() {
  return {
    modal: document.querySelector("#personalSettingsModal"),
    nameInput: document.querySelector("#personalSettingsNameInput"),
    departmentInput: document.querySelector("#personalSettingsDepartmentInput"),
    positionInput: document.querySelector("#personalSettingsPositionInput"),
    gmailAddressInput: document.querySelector("#personalSettingsGmailAddressInput"),
    googleAppPasswordInput: document.querySelector("#personalSettingsGoogleAppPasswordInput"),
    recipientEmailInput: document.querySelector("#personalSettingsRecipientEmailInput"),
    dailyReportSavePathInput: document.querySelector("#personalSettingsDailyReportSavePathInput"),
    dailyReportSavePathButton: document.querySelector("#selectDailyReportSavePathButton"),
    weeklyReportSavePathInput: document.querySelector("#personalSettingsWeeklyReportSavePathInput"),
    weeklyReportSavePathButton: document.querySelector("#selectWeeklyReportSavePathButton"),
    dailyReportAutoSendTimeInput: document.querySelector("#personalSettingsDailyReportAutoSendTimeInput"),
    mailBodyTextarea: document.querySelector("#personalSettingsMailBodyTextarea"),
    holidayDatesTextarea: document.querySelector("#personalSettingsHolidayDatesTextarea"),
    holidayApiConfigPathInput: document.querySelector("#personalSettingsHolidayApiConfigPathInput"),
    holidayApiStatus: document.querySelector("#holidayApiStatus"),
    closeButton: document.querySelector("#closePersonalSettingsModal"),
    cancelButton: document.querySelector("#cancelPersonalSettingsModal"),
    submitButton: document.querySelector("#submitPersonalSettingsModal")
  }
}

function getWeeklyPrintReminderPopupElements() {
  return {
    popup: document.querySelector("#weeklyPrintReminderPopup"),
    message: document.querySelector("#weeklyPrintReminderMessage"),
    closeButton: document.querySelector("#closeWeeklyPrintReminderPopup"),
    dismissButton: document.querySelector("#dismissWeeklyPrintReminderButton"),
    openReportButton: document.querySelector("#openWeeklyPrintReminderReportButton")
  }
}

function cancelTextEditModalFocusFrames() {
  if (textEditModalState.focusInputFrameId !== null) {
    window.cancelAnimationFrame(textEditModalState.focusInputFrameId)
    textEditModalState.focusInputFrameId = null
  }
}

function scheduleElementFocus(element) {
  if (!(element instanceof HTMLElement) || !document.contains(element)) {
    return
  }

  window.setTimeout(() => {
    if (document.contains(element)) {
      window.focus()
      element.focus()
    }
  }, 10)
}

function getDefaultFocusableElement() {
  return document.querySelector("#dailyLogInput") ??
    document.querySelector("#addMajorTaskButton")
}

function sanitizeDailyLogDateText(dateText) {
  return /^\d{4}-\d{2}-\d{2}$/.test(dateText ?? "") ? dateText : ""
}

function sanitizeHolidayDateList(value) {
  const tokens = Array.isArray(value)
    ? value
    : typeof value === "string"
      ? value.split(/[\s,]+/)
      : []
  const seen = new Set()

  return tokens
    .map((token) => sanitizeDailyLogDateText(String(token ?? "").trim()))
    .filter((dateText) => {
      if (!dateText || seen.has(dateText)) {
        return false
      }

      seen.add(dateText)
      return true
    })
    .sort()
}

function sanitizeStoredTimestamp(value) {
  return typeof value === "string" ? value.trim() : ""
}

function sanitizeHolidayApiPath(value) {
  return typeof value === "string" ? value.trim() : ""
}

function sanitizeHolidayApiBoolean(value) {
  return value === true
}

function pruneWeeklyPrintReminderHistory(historyByWeek = {}) {
  return Object.fromEntries(
    Object.entries(historyByWeek)
      .filter(([weekKey]) => sanitizeDailyLogDateText(weekKey))
      .sort(([leftWeekKey], [rightWeekKey]) => leftWeekKey.localeCompare(rightWeekKey))
      .slice(-MAX_WEEKLY_PRINT_REMINDER_HISTORY)
  )
}

function normalizeWeeklyPrintReminderHistory(rawHistory) {
  if (!rawHistory || typeof rawHistory !== "object") {
    return {}
  }

  const historyByWeek = {}
  Object.entries(rawHistory).forEach(([weekKey, entry]) => {
    const safeWeekKey = sanitizeDailyLogDateText(weekKey)
    if (!safeWeekKey || !entry || typeof entry !== "object") {
      return
    }

    historyByWeek[safeWeekKey] = {
      printedAt: sanitizeStoredTimestamp(entry.printedAt),
      remindedAt: sanitizeStoredTimestamp(entry.remindedAt)
    }
  })

  return pruneWeeklyPrintReminderHistory(historyByWeek)
}

function setWeeklyPrintReminderHistory(historyByWeek = {}) {
  weeklyPrintReminderState.historyByWeek = normalizeWeeklyPrintReminderHistory(historyByWeek)
}

function upsertWeeklyPrintReminderHistoryEntry(weekKey, patch = {}) {
  const safeWeekKey = sanitizeDailyLogDateText(weekKey)
  if (!safeWeekKey) {
    return
  }

  const currentEntry = weeklyPrintReminderState.historyByWeek[safeWeekKey] ?? {
    printedAt: "",
    remindedAt: ""
  }

  weeklyPrintReminderState.historyByWeek = pruneWeeklyPrintReminderHistory({
    ...weeklyPrintReminderState.historyByWeek,
    [safeWeekKey]: {
      printedAt: sanitizeStoredTimestamp(patch.printedAt ?? currentEntry.printedAt),
      remindedAt: sanitizeStoredTimestamp(patch.remindedAt ?? currentEntry.remindedAt)
    }
  })
}

function getWeeklyPrintReminderHistoryEntry(weekKey) {
  const safeWeekKey = sanitizeDailyLogDateText(weekKey)
  return safeWeekKey ? weeklyPrintReminderState.historyByWeek[safeWeekKey] ?? null : null
}

function normalizeHolidayCalendar(rawCalendar) {
  return {
    publicHolidayDates: sanitizeHolidayDateList(rawCalendar?.publicHolidayDates),
    lastSyncedAt: sanitizeStoredTimestamp(rawCalendar?.lastSyncedAt),
    lastSyncedAppVersion: sanitizeStoredTimestamp(rawCalendar?.lastSyncedAppVersion)
  }
}

function setHolidayCalendar(calendar = {}) {
  const normalizedCalendar = normalizeHolidayCalendar(calendar)
  holidayCalendarState.publicHolidayDates = normalizedCalendar.publicHolidayDates
  holidayCalendarState.lastSyncedAt = normalizedCalendar.lastSyncedAt
  holidayCalendarState.lastSyncedAppVersion = normalizedCalendar.lastSyncedAppVersion
}

function setHolidayApiConfigInfo(info = {}) {
  holidayCalendarState.configPath = sanitizeHolidayApiPath(info.path)
  holidayCalendarState.configEnabled = sanitizeHolidayApiBoolean(info.enabled)
  holidayCalendarState.hasServiceKey = sanitizeHolidayApiBoolean(info.hasServiceKey)
  holidayCalendarState.endpoint = typeof info.endpoint === "string" ? info.endpoint.trim() : ""
}

function formatStoredDateTime(dateText) {
  if (!dateText) {
    return ""
  }

  const date = new Date(dateText)
  if (Number.isNaN(date.getTime())) {
    return dateText
  }

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date)
}

function getCurrentAppVersion() {
  return typeof window.appInfo?.version === "string" ? window.appInfo.version.trim() : ""
}

function getHolidayApiStatusMessage() {
  if (holidayCalendarState.syncStatusMessage) {
    return holidayCalendarState.syncStatusMessage
  }

  if (!holidayCalendarState.configPath) {
    return "공휴일 설정 파일 경로를 불러오는 중입니다."
  }

  if (!holidayCalendarState.configEnabled) {
    return "공휴일 자동 동기화가 꺼져 있습니다. 설정 파일에서 enabled를 true로 바꾸세요."
  }

  if (!holidayCalendarState.hasServiceKey) {
    return "설정 파일에 일반 인증키(serviceKey)를 입력하세요."
  }

  if (holidayCalendarState.lastSyncedAt) {
    const versionSuffix = holidayCalendarState.lastSyncedAppVersion
      ? ` / 앱 버전 ${holidayCalendarState.lastSyncedAppVersion}`
      : ""
    return `마지막 공휴일 동기화: ${formatStoredDateTime(holidayCalendarState.lastSyncedAt)} (${holidayCalendarState.publicHolidayDates.length}건${versionSuffix})`
  }

  return "앱 업데이트 후 최초 실행 시 공휴일 자동 동기화를 진행합니다."
}

function renderHolidayApiStatus() {
  const { holidayApiConfigPathInput, holidayApiStatus } = getPersonalSettingsModalElements()
  if (holidayApiConfigPathInput) {
    holidayApiConfigPathInput.value = holidayCalendarState.configPath
  }

  if (holidayApiStatus) {
    holidayApiStatus.textContent = getHolidayApiStatusMessage()
  }
}

function getDailyLogItemNote(item) {
  return item?.dataset?.note ?? ""
}

function setDailyLogItemNote(item, note) {
  if (!item) {
    return
  }

  item.dataset.note = typeof note === "string" ? note : ""
}

function getDailyLogItemCreatedAt(item) {
  return sanitizeDailyLogDateText(item?.dataset?.createdAt ?? "")
}

function setDailyLogItemCreatedAt(item, dateText) {
  if (!item) {
    return
  }

  item.dataset.createdAt = sanitizeDailyLogDateText(dateText)
}

function getDailyLogItemStartDate(item) {
  return sanitizeDailyLogDateText(item?.dataset?.startDate ?? "")
}

function setDailyLogItemStartDate(item, dateText) {
  if (!item) {
    return
  }

  item.dataset.startDate = sanitizeDailyLogDateText(dateText)
}

function getDailyLogItemEndDate(item) {
  return sanitizeDailyLogDateText(item?.dataset?.endDate ?? "")
}

function setDailyLogItemEndDate(item, dateText) {
  if (!item) {
    return
  }

  item.dataset.endDate = sanitizeDailyLogDateText(dateText)
}

function getDailyLogItemCompletedAt(item) {
  return sanitizeDailyLogDateText(item?.dataset?.completedAt ?? "")
}

function setDailyLogItemCompletedAt(item, dateText) {
  if (!item) {
    return
  }

  item.dataset.completedAt = sanitizeDailyLogDateText(dateText)
}

function isFutureStartDailyLogItem(item, todayDateText = getTodayDateText()) {
  const startDateText = getDailyLogItemStartDate(item)
  return Boolean(startDateText) && startDateText > todayDateText
}

function upsertDailyLogScheduleBadge(item, todayDateText = getTodayDateText()) {
  if (!(item instanceof HTMLElement)) {
    return
  }

  let badge = item.querySelector(".dailyLogScheduleBadge")
  const isScheduled = isFutureStartDailyLogItem(item, todayDateText)

  if (!isScheduled) {
    badge?.remove()
    return
  }

  if (!badge) {
    badge = document.createElement("span")
    badge.className = "dailyLogScheduleBadge"
    const categoryNode = item.querySelector(".dailyLogCategoryBadge")
    item.insertBefore(badge, categoryNode ?? null)
  }

  badge.textContent = "예정"
}

function isDailyLogSnapshotItem(item) {
  return item?.dataset?.isSnapshot === "true"
}

function setDailyLogSnapshotState(item, isSnapshot) {
  if (!item) {
    return
  }

  item.dataset.isSnapshot = String(isSnapshot === true)
}

function isRetiredRecurringDailyLogItem(item) {
  return item?.dataset?.recurringRetired === "true"
}

function setRetiredRecurringDailyLogState(item, isRetired) {
  if (!item) {
    return
  }

  item.dataset.recurringRetired = String(isRetired === true)
}

function isReadOnlyDailyLogItem(item, todayDateText = getTodayDateText()) {
  if (!item) {
    return false
  }

  return isDailyLogSnapshotItem(item) || getItemLogDate(item) !== todayDateText
}

function setDailyLogDetailPanelVisibility(isOpen) {
  const { panel } = getDailyLogDetailElements()
  if (!panel) {
    return
  }

  panel.hidden = !isOpen
}

function clearDailyLogDetailPanelInputs() {
  const {
    category,
    title,
    noteInput,
    startDateInput,
    endDateInput
  } = getDailyLogDetailElements()

  if (category) {
    category.textContent = "-"
  }

  if (title) {
    title.textContent = "업무를 선택해 주세요."
  }

  if (noteInput) {
    noteInput.value = ""
  }

  if (startDateInput) {
    startDateInput.value = ""
    startDateInput.disabled = false
  }

  if (endDateInput) {
    endDateInput.value = ""
    endDateInput.disabled = false
  }
}

function syncDailyLogDetailPanelFromItem(item) {
  const {
    category,
    title,
    noteInput,
    startDateInput,
    endDateInput
  } = getDailyLogDetailElements()

  if (!item) {
    clearDailyLogDetailPanelInputs()
    return
  }

  if (category) {
    category.textContent = item.querySelector(".dailyLogCategoryBadge")?.textContent?.trim() || DEFAULT_CATEGORY_NAME
  }

  if (title) {
    title.textContent = getDailyLogItemTitle(item) || "제목 없음"
  }

  if (noteInput) {
    noteInput.value = getDailyLogItemNote(item)
    noteInput.disabled = isReadOnlyDailyLogItem(item)
  }

  const isReadOnlyItem = isReadOnlyDailyLogItem(item)
  if (startDateInput) {
    startDateInput.value = getDailyLogItemStartDate(item)
    startDateInput.disabled = isReadOnlyItem
  }

  if (endDateInput) {
    endDateInput.value = getDailyLogItemEndDate(item)
    endDateInput.disabled = isReadOnlyItem
  }
}

function closeDailyLogDetailPanel() {
  const selectedItem = dailyLogDetailState.selectedItem
  if (selectedItem) {
    selectedItem.classList.remove("itemSelected")
  }

  dailyLogDetailState.selectedItem = null
  clearDailyLogDetailPanelInputs()
  setDailyLogDetailPanelVisibility(false)
}

function openDailyLogDetailPanel(item) {
  if (!(item instanceof HTMLElement)) {
    return
  }

  if (dailyLogDetailState.selectedItem && dailyLogDetailState.selectedItem !== item) {
    dailyLogDetailState.selectedItem.classList.remove("itemSelected")
  }

  dailyLogDetailState.selectedItem = item
  item.classList.add("itemSelected")
  syncDailyLogDetailPanelFromItem(item)
  setDailyLogDetailPanelVisibility(true)
}

function syncDailyLogDetailPanelState() {
  const selectedItem = dailyLogDetailState.selectedItem
  if (!selectedItem) {
    setDailyLogDetailPanelVisibility(false)
    return
  }

  const groupsContainer = getDailyLogGroupsContainer()
  if (!groupsContainer || !groupsContainer.contains(selectedItem)) {
    closeDailyLogDetailPanel()
    return
  }

  selectedItem.classList.add("itemSelected")
  syncDailyLogDetailPanelFromItem(selectedItem)
  setDailyLogDetailPanelVisibility(true)
}

function setTextEditModalVisibility(isOpen) {
  const { modal } = getTextEditModalElements()
  if (!modal) {
    return
  }

  modal.hidden = !isOpen
  modal.setAttribute("aria-hidden", String(!isOpen))
}

function setConfirmModalVisibility(isOpen) {
  const { modal } = getConfirmModalElements()
  if (!modal) {
    return
  }

  modal.hidden = !isOpen
  modal.setAttribute("aria-hidden", String(!isOpen))
}

function setInfoModalVisibility(isOpen) {
  const { modal } = getInfoModalElements()
  if (!modal) {
    return
  }

  modal.hidden = !isOpen
  modal.setAttribute("aria-hidden", String(!isOpen))
}

function setWeeklyPrintReminderPopupVisibility(isOpen) {
  const { popup } = getWeeklyPrintReminderPopupElements()
  if (!popup) {
    return
  }

  popup.hidden = !isOpen
  popup.setAttribute("aria-hidden", String(!isOpen))
}

function setReportPreviewModalVisibility(isOpen) {
  const { modal } = getReportPreviewModalElements()
  if (!modal) {
    return
  }

  modal.hidden = !isOpen
  modal.setAttribute("aria-hidden", String(!isOpen))
}

function setReportMemoModalVisibility(isOpen) {
  const { modal } = getReportMemoModalElements()
  if (!modal) {
    return
  }

  modal.hidden = !isOpen
  modal.setAttribute("aria-hidden", String(!isOpen))
}

function setCategorySelectModalVisibility(isOpen) {
  const { modal } = getCategorySelectModalElements()
  if (!modal) {
    return
  }

  modal.hidden = !isOpen
  modal.setAttribute("aria-hidden", String(!isOpen))
}

function setPersonalSettingsModalVisibility(isOpen) {
  const { modal } = getPersonalSettingsModalElements()
  if (!modal) {
    return
  }

  modal.hidden = !isOpen
  modal.setAttribute("aria-hidden", String(!isOpen))
}

function closeTextEditModal() {
  const { modal, input, closeButton } = getTextEditModalElements()
  if (!modal || !input || !closeButton) {
    return
  }

  cancelTextEditModalFocusFrames()

  const activeElement = document.activeElement
  if (activeElement === input || activeElement === closeButton) {
    activeElement.blur()
  }

  setTextEditModalVisibility(false)
  input.value = ""
  textEditModalState.submitHandler = null
}

function openTextEditModal({
  title,
  fieldLabel,
  placeholder,
  hint,
  initialValue = "",
  onSubmit
}) {
  const elements = getTextEditModalElements()
  const { modal, title: titleNode, fieldLabel: fieldLabelNode, input, hint: hintNode } = elements

  if (!modal || !titleNode || !fieldLabelNode || !input || !hintNode) {
    return
  }

  cancelTextEditModalFocusFrames()
  closeConfirmModal()
  hideContextMenu()
  closeCategorySelectModal()

  titleNode.textContent = title
  fieldLabelNode.textContent = fieldLabel
  input.placeholder = placeholder
  input.value = initialValue
  hintNode.innerHTML = hint
  textEditModalState.submitHandler = onSubmit

  setTextEditModalVisibility(true)
  textEditModalState.focusInputFrameId = window.requestAnimationFrame(() => {
    textEditModalState.focusInputFrameId = null
    if (!modal.hidden) {
      window.focus()
      input.focus()
      input.select()
    }
  })
}

function submitTextEditModal() {
  const { input } = getTextEditModalElements()
  if (!input || !textEditModalState.submitHandler) {
    return
  }

  const value = input.value.trim()
  if (!value) {
    return
  }

  textEditModalState.submitHandler(value)
  closeTextEditModal()
  scheduleElementFocus(getDefaultFocusableElement())
}

function closeConfirmModal() {
  const { modal } = getConfirmModalElements()
  if (!modal) {
    return
  }

  setConfirmModalVisibility(false)
  confirmModalState.submitHandler = null
}

function closeInfoModal() {
  const { modal, message } = getInfoModalElements()
  if (!modal || !message) {
    return
  }

  setInfoModalVisibility(false)
  message.textContent = ""
  infoModalState.message = ""
}

function closeWeeklyPrintReminderPopup() {
  const { popup } = getWeeklyPrintReminderPopupElements()
  if (!popup) {
    return
  }

  setWeeklyPrintReminderPopupVisibility(false)
}

function closeReportPreviewModal() {
  const { frame } = getReportPreviewModalElements()
  if (frame) {
    frame.onload = null
    frame.setAttribute("src", "about:blank")
  }

  setReportPreviewModalVisibility(false)
  closeReportMemoModal()
  reportPreviewState.returnFocusElement = null
  reportPreviewState.reportType = null
}

function closeReportMemoModal() {
  flushReportMemoPersist()
  setReportMemoModalVisibility(false)
  reportMemoModalState.returnFocusElement = null
}

function closePersonalSettingsModal() {
  const { modal } = getPersonalSettingsModalElements()
  if (!modal) {
    return
  }

  setPersonalSettingsModalVisibility(false)
}

function closeCategorySelectModal() {
  const { modal, list } = getCategorySelectModalElements()
  if (!modal || !list) {
    return
  }

  setCategorySelectModalVisibility(false)
  list.replaceChildren()
  categorySelectModalState.submitHandler = null
  categorySelectModalState.returnFocusElement = null
  categorySelectModalState.targetItem = null
  categorySelectModalState.categoryMap = null
  categorySelectModalState.title = "카테고리 변경"
}

function openConfirmModal({ title, message, submitLabel = "확인", onSubmit }) {
  const { modal, title: titleNode, message: messageNode, submitButton } = getConfirmModalElements()
  if (!modal || !titleNode || !messageNode || !submitButton) {
    return
  }

  closeTextEditModal()
  closeInfoModal()
  closeCategorySelectModal()
  closeReportPreviewModal()
  hideContextMenu()
  titleNode.textContent = title
  messageNode.textContent = message
  submitButton.textContent = submitLabel
  confirmModalState.submitHandler = onSubmit

  setConfirmModalVisibility(true)
  scheduleElementFocus(submitButton)
}

function openInfoModal({ title, message }) {
  const { modal, title: titleNode, message: messageNode, submitButton } = getInfoModalElements()
  if (!modal || !titleNode || !messageNode || !submitButton) {
    return
  }

  closeTextEditModal()
  closeConfirmModal()
  closeCategorySelectModal()
  closeReportPreviewModal()
  hideContextMenu()
  titleNode.textContent = title
  messageNode.textContent = message
  infoModalState.message = message

  setInfoModalVisibility(true)
  scheduleElementFocus(submitButton)
}

function openWeeklyPrintReminderPopup(message = WEEKLY_PRINT_REMINDER_MESSAGE) {
  const { popup, message: messageNode, openReportButton } = getWeeklyPrintReminderPopupElements()
  if (!popup || !messageNode || !openReportButton) {
    return
  }

  messageNode.textContent = message
  setWeeklyPrintReminderPopupVisibility(true)
  scheduleElementFocus(openReportButton)
}

function submitConfirmModal() {
  if (!confirmModalState.submitHandler) {
    return
  }

  const handler = confirmModalState.submitHandler
  closeConfirmModal()
  handler()
  scheduleElementFocus(getDefaultFocusableElement())
}

function getReportSavePath(reportType) {
  const basePath = reportType === "weekly"
    ? userProfileState.weeklyReportSavePath
    : userProfileState.dailyReportSavePath
  const reportDateText = reportType === "weekly"
    ? getWeeklyReportDateRange().endDateText
    : getTodayDateText()

  return buildReportDirectoryPath(basePath, reportDateText)
}

function updateReportPreviewAutoSendNotice() {
  const { autoSendNotice } = getReportPreviewModalElements()
  if (!autoSendNotice) {
    return
  }

  if (reportPreviewState.reportType !== "daily") {
    autoSendNotice.hidden = true
    autoSendNotice.textContent = ""
    return
  }

  const autoSendTime = userProfileState.dailyReportAutoSendTime
  autoSendNotice.textContent = autoSendTime
    ? `오늘 ${autoSendTime}에 저장 및 자동 발송됩니다.`
    : "자동 발송 시간이 설정되지 않았습니다."
  autoSendNotice.hidden = false
}

function setReportPreviewActionStatus(message = "") {
  const { actionStatus } = getReportPreviewModalElements()
  if (actionStatus) {
    actionStatus.textContent = message
  }
}

function getReportPreviewActionLabel(reportType = reportPreviewState.reportType) {
  return reportType === "weekly" ? "인쇄하고 저장하기" : "보내고 저장하기"
}

function setReportPreviewActionPending(isPending) {
  const { saveAndSendButton } = getReportPreviewModalElements()
  if (saveAndSendButton) {
    saveAndSendButton.disabled = isPending
    saveAndSendButton.textContent = isPending ? "처리 중..." : getReportPreviewActionLabel()
  }
}

function getLatestReportMemo(memosByKey) {
  if (!memosByKey || typeof memosByKey !== "object") {
    return null
  }

  const latestKey = Object.keys(memosByKey)
    .filter((key) => key.trim())
    .sort()
    .at(-1)

  return latestKey ? memosByKey[latestKey] : null
}

function getDailyReportMemo(dateText = getTodayDateText()) {
  const memo = Object.hasOwn(dailyReportMemoState.notesByDate, dateText)
    ? dailyReportMemoState.notesByDate[dateText]
    : getLatestReportMemo(dailyReportMemoState.notesByDate)
  return {
    keyTasks: typeof memo?.keyTasks === "string" ? memo.keyTasks : "",
    specialNotes: typeof memo?.specialNotes === "string" ? memo.specialNotes : ""
  }
}

function setDailyReportMemo(dateText, memo = {}) {
  if (!dateText) {
    return
  }

  dailyReportMemoState.notesByDate[dateText] = {
    keyTasks: sanitizeProfileTextAreaField(memo.keyTasks),
    specialNotes: sanitizeProfileTextAreaField(memo.specialNotes)
  }
}

function getWeeklyReportMemoKey() {
  const { startDateText, endDateText } = getWeeklyReportDateRange()
  return `${startDateText}_${endDateText}`
}

function isOverseasBusinessDepartment(department = userProfileState.department) {
  return sanitizeProfileField(department) === "해외사업팀"
}

function getWeeklyReportMemo(periodKey = getWeeklyReportMemoKey()) {
  const memo = Object.hasOwn(weeklyReportMemoState.notesByPeriod, periodKey)
    ? weeklyReportMemoState.notesByPeriod[periodKey]
    : getLatestReportMemo(weeklyReportMemoState.notesByPeriod)
  return {
    groupHomeNews: typeof memo?.groupHomeNews === "string" ? memo.groupHomeNews : "",
    specialNotes: typeof memo?.specialNotes === "string" ? memo.specialNotes : ""
  }
}

function setWeeklyReportMemo(periodKey, memo = {}) {
  if (!periodKey) {
    return
  }

  weeklyReportMemoState.notesByPeriod[periodKey] = {
    groupHomeNews: sanitizeProfileTextAreaField(memo.groupHomeNews),
    specialNotes: sanitizeProfileTextAreaField(memo.specialNotes)
  }
}

function applyDailyReportMemoToFrame(frame = getReportPreviewModalElements().frame) {
  const frameDocument = frame?.contentDocument
  if (!frameDocument) {
    return
  }

  const memo = getDailyReportMemo()
  const keyTasksNode = frameDocument.querySelector("#dailyReportKeyTasks")
  const specialNotesNode = frameDocument.querySelector("#dailyReportSpecialNotes")

  if (keyTasksNode) {
    keyTasksNode.textContent = memo.keyTasks
  }

  if (specialNotesNode) {
    specialNotesNode.textContent = memo.specialNotes
  }
}

function applyWeeklyReportMemoToFrame(frame = getReportPreviewModalElements().frame) {
  const frameDocument = frame?.contentDocument
  if (!frameDocument) {
    return
  }

  const memo = getWeeklyReportMemo()
  const groupHomeNewsSection = frameDocument.querySelector("#weeklyReportGroupHomeNewsSection")
  const groupHomeNewsNode = frameDocument.querySelector("#weeklyReportGroupHomeNews")
  const notesNode = frameDocument.querySelector("#weeklyReportNotes")

  if (groupHomeNewsSection) {
    groupHomeNewsSection.hidden = !isOverseasBusinessDepartment()
  }

  if (groupHomeNewsNode) {
    groupHomeNewsNode.textContent = memo.groupHomeNews
  }

  if (notesNode) {
    notesNode.textContent = memo.specialNotes
  }
}

function syncReportMemoInputs() {
  const { keyTasksInput, groupHomeNewsField, groupHomeNewsInput, specialNotesInput } = getReportMemoModalElements()
  if (!keyTasksInput || !groupHomeNewsField || !groupHomeNewsInput || !specialNotesInput) {
    return
  }

  if (reportPreviewState.reportType === "weekly") {
    const memo = getWeeklyReportMemo()
    keyTasksInput.value = ""
    groupHomeNewsField.hidden = !isOverseasBusinessDepartment()
    groupHomeNewsInput.value = memo.groupHomeNews
    specialNotesInput.value = memo.specialNotes
    return
  }

  groupHomeNewsField.hidden = true
  groupHomeNewsInput.value = ""
  const memo = getDailyReportMemo()
  keyTasksInput.value = memo.keyTasks
  specialNotesInput.value = memo.specialNotes
}

function scheduleReportMemoPersist() {
  if (dailyReportMemoState.saveTimerId !== null) {
    window.clearTimeout(dailyReportMemoState.saveTimerId)
  }

  dailyReportMemoState.saveTimerId = window.setTimeout(() => {
    dailyReportMemoState.saveTimerId = null
    persistAppData()
  }, 500)
}

function flushReportMemoPersist() {
  if (dailyReportMemoState.saveTimerId === null) {
    return Promise.resolve()
  }

  window.clearTimeout(dailyReportMemoState.saveTimerId)
  dailyReportMemoState.saveTimerId = null
  return persistAppData()
}

function updateReportMemoFromInputs() {
  const { modal, keyTasksInput, groupHomeNewsInput, specialNotesInput } = getReportMemoModalElements()
  if (!modal || modal.hidden || !keyTasksInput || !groupHomeNewsInput || !specialNotesInput) {
    return
  }

  if (reportPreviewState.reportType === "weekly") {
    setWeeklyReportMemo(getWeeklyReportMemoKey(), {
      groupHomeNews: groupHomeNewsInput.value,
      specialNotes: specialNotesInput.value
    })
    applyWeeklyReportMemoToFrame()
    scheduleReportMemoPersist()
    return
  }

  setDailyReportMemo(getTodayDateText(), {
    keyTasks: keyTasksInput.value,
    specialNotes: specialNotesInput.value
  })
  applyDailyReportMemoToFrame()
  scheduleReportMemoPersist()
}

function openReportMemoModal() {
  const {
    modal,
    title,
    keyTasksField,
    keyTasksInput,
    groupHomeNewsField,
    groupHomeNewsInput,
    specialNotesInput
  } = getReportMemoModalElements()

  if (
    !modal ||
    !title ||
    !keyTasksField ||
    !keyTasksInput ||
    !groupHomeNewsField ||
    !groupHomeNewsInput ||
    !specialNotesInput ||
    !reportPreviewState.reportType
  ) {
    return
  }

  reportMemoModalState.returnFocusElement = getReportPreviewModalElements().memoButton ?? null
  title.textContent = reportPreviewState.reportType === "weekly"
    ? "주간 보고서 메모"
    : "일일 보고서 메모"
  keyTasksField.hidden = reportPreviewState.reportType === "weekly"
  groupHomeNewsField.hidden = reportPreviewState.reportType !== "weekly" || !isOverseasBusinessDepartment()
  syncReportMemoInputs()
  setReportMemoModalVisibility(true)
  scheduleElementFocus(
    reportPreviewState.reportType === "weekly"
      ? (groupHomeNewsField.hidden ? specialNotesInput : groupHomeNewsInput)
      : keyTasksInput
  )
}

function openReportPreviewModal({ title, src, reportType, returnFocusElement }) {
  const {
    modal,
    title: titleNode,
    frame,
    closeButton,
    saveAndSendButton
  } = getReportPreviewModalElements()
  if (!modal || !titleNode || !frame || !closeButton || !saveAndSendButton) {
    return
  }

  closeTextEditModal()
  closeConfirmModal()
  closeInfoModal()
  closeCategorySelectModal()
  hideContextMenu()

  reportPreviewState.returnFocusElement = returnFocusElement ?? null
  reportPreviewState.reportType = reportType ?? null
  titleNode.textContent = title
  setReportPreviewActionStatus("")
  setReportPreviewActionPending(false)
  updateReportPreviewAutoSendNotice()
  closeReportMemoModal()
  frame.onload = () => {
    if (frame.getAttribute("src") !== src) {
      return
    }

    populateReportFrameByType(frame, reportType)
    if (reportType === "daily") {
      applyDailyReportMemoToFrame(frame)
    } else if (reportType === "weekly") {
      applyWeeklyReportMemoToFrame(frame)
    }
  }
  frame.setAttribute("src", src)
  setReportPreviewModalVisibility(true)
  scheduleElementFocus(closeButton)
}

function sanitizeProfileField(value) {
  return typeof value === "string" ? value.trim() : ""
}

function sanitizeProfileTextAreaField(value) {
  return typeof value === "string" ? value : ""
}

function setUserProfile(profile = {}) {
  const hasLastAutoSentDate = Object.prototype.hasOwnProperty.call(profile, "dailyReportLastAutoSentDate")
  const hasHolidayDates = Object.prototype.hasOwnProperty.call(profile, "holidayDates")

  userProfileState.name = sanitizeProfileField(profile.name)
  userProfileState.department = sanitizeProfileField(profile.department)
  userProfileState.position = sanitizeProfileField(profile.position)
  userProfileState.gmailAddress = sanitizeProfileField(profile.gmailAddress)
  userProfileState.googleAppPassword = sanitizeProfileField(profile.googleAppPassword)
  userProfileState.recipientEmail = sanitizeProfileField(profile.recipientEmail)
  userProfileState.dailyReportSavePath = sanitizeProfileField(profile.dailyReportSavePath)
  userProfileState.weeklyReportSavePath = sanitizeProfileField(profile.weeklyReportSavePath)
  userProfileState.dailyReportAutoSendTime = sanitizeProfileField(profile.dailyReportAutoSendTime)
  userProfileState.mailBody = sanitizeProfileTextAreaField(profile.mailBody)
  userProfileState.holidayDates = hasHolidayDates
    ? sanitizeHolidayDateList(profile.holidayDates)
    : userProfileState.holidayDates
  userProfileState.dailyReportLastAutoSentDate = hasLastAutoSentDate
    ? sanitizeProfileField(profile.dailyReportLastAutoSentDate)
    : userProfileState.dailyReportLastAutoSentDate
}

function openPersonalSettingsModal() {
  const {
    modal,
    nameInput,
    departmentInput,
    positionInput,
    gmailAddressInput,
    googleAppPasswordInput,
    recipientEmailInput,
    dailyReportSavePathInput,
    weeklyReportSavePathInput,
    dailyReportAutoSendTimeInput,
    mailBodyTextarea,
    holidayDatesTextarea,
    holidayApiConfigPathInput,
    holidayApiStatus
  } = getPersonalSettingsModalElements()

  const requiredElements = [
    modal,
    nameInput,
    departmentInput,
    positionInput,
    gmailAddressInput,
    googleAppPasswordInput,
    recipientEmailInput,
    dailyReportSavePathInput,
    weeklyReportSavePathInput,
    dailyReportAutoSendTimeInput,
    mailBodyTextarea,
    holidayDatesTextarea,
    holidayApiConfigPathInput,
    holidayApiStatus
  ]

  if (requiredElements.some((element) => !element)) {
    return
  }

  closeTextEditModal()
  closeConfirmModal()
  closeInfoModal()
  closeCategorySelectModal()
  closeReportPreviewModal()
  hideContextMenu()

  nameInput.value = userProfileState.name
  departmentInput.value = userProfileState.department
  positionInput.value = userProfileState.position
  gmailAddressInput.value = userProfileState.gmailAddress
  googleAppPasswordInput.value = userProfileState.googleAppPassword
  recipientEmailInput.value = userProfileState.recipientEmail
  dailyReportSavePathInput.value = userProfileState.dailyReportSavePath
  weeklyReportSavePathInput.value = userProfileState.weeklyReportSavePath
  dailyReportAutoSendTimeInput.value = userProfileState.dailyReportAutoSendTime
  mailBodyTextarea.value = userProfileState.mailBody
  holidayDatesTextarea.value = userProfileState.holidayDates.join("\n")
  holidayApiConfigPathInput.value = holidayCalendarState.configPath
  renderHolidayApiStatus()
  setPersonalSettingsModalVisibility(true)
  scheduleElementFocus(nameInput)
}

function submitPersonalSettingsModal() {
  const {
    nameInput,
    departmentInput,
    positionInput,
    gmailAddressInput,
    googleAppPasswordInput,
    recipientEmailInput,
    dailyReportSavePathInput,
    weeklyReportSavePathInput,
    dailyReportAutoSendTimeInput,
    mailBodyTextarea,
    holidayDatesTextarea
  } = getPersonalSettingsModalElements()

  const requiredElements = [
    nameInput,
    departmentInput,
    positionInput,
    gmailAddressInput,
    googleAppPasswordInput,
    recipientEmailInput,
    dailyReportSavePathInput,
    weeklyReportSavePathInput,
    dailyReportAutoSendTimeInput,
    mailBodyTextarea,
    holidayDatesTextarea
  ]

  if (requiredElements.some((element) => !element)) {
    return
  }

  setUserProfile({
    name: nameInput.value,
    department: departmentInput.value,
    position: positionInput.value,
    gmailAddress: gmailAddressInput.value,
    googleAppPassword: googleAppPasswordInput.value,
    recipientEmail: recipientEmailInput.value,
    dailyReportSavePath: dailyReportSavePathInput.value,
    weeklyReportSavePath: weeklyReportSavePathInput.value,
    dailyReportAutoSendTime: dailyReportAutoSendTimeInput.value,
    mailBody: mailBodyTextarea.value,
    holidayDates: holidayDatesTextarea.value
  })
  closePersonalSettingsModal()
  persistAppData()
  scheduleDailyReportAutoSend()
  scheduleWeeklyPrintReminder()
  runWeeklyPrintReminderCheck()
  updateReportPreviewAutoSendNotice()
  scheduleElementFocus(getDefaultFocusableElement())
}

function populateReportProfile(frameDocument, prefix) {
  const authorNode = frameDocument.querySelector(`#${prefix}Author`)
  const departmentNode = frameDocument.querySelector(`#${prefix}Department`)
  const positionNode = frameDocument.querySelector(`#${prefix}Position`)

  if (authorNode) {
    authorNode.textContent = userProfileState.name
  }

  if (departmentNode) {
    departmentNode.textContent = userProfileState.department
  }

  if (positionNode) {
    positionNode.textContent = userProfileState.position
  }
}

function parseDateTextAsLocalDate(dateText) {
  const matched = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateText ?? "")
  if (!matched) {
    return new Date(dateText)
  }

  const [, yearText, monthText, dayText] = matched
  return new Date(Number(yearText), Number(monthText) - 1, Number(dayText))
}

function addDays(date, amount) {
  const nextDate = new Date(date)
  nextDate.setDate(nextDate.getDate() + amount)
  return nextDate
}

function formatDailyReportDate(dateText) {
  const date = parseDateTextAsLocalDate(dateText)
  if (Number.isNaN(date.getTime())) {
    return dateText || "-"
  }

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(date)
}

function formatDateAsText(date) {
  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

function buildReportDirectoryPath(basePath, reportDateText) {
  const normalizedBasePath = sanitizeProfileField(basePath).replace(/[\\/]+$/, "")
  if (!normalizedBasePath) {
    return ""
  }

  const reportDate = parseDateTextAsLocalDate(reportDateText)
  if (Number.isNaN(reportDate.getTime())) {
    return normalizedBasePath
  }

  const yearFolderName = `${reportDate.getFullYear()}년`
  const monthFolderName = `${String(reportDate.getMonth() + 1).padStart(2, "0")}월`
  return `${normalizedBasePath}\\${yearFolderName}\\${monthFolderName}`
}

function formatDateAsMonthDay(dateText) {
  const date = parseDateTextAsLocalDate(dateText)
  if (Number.isNaN(date.getTime())) {
    return dateText || "미정"
  }

  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${month}/${day}`
}

function formatWeeklyReportPeriod(startDateText, endDateText) {
  const startDate = parseDateTextAsLocalDate(startDateText)
  const endDate = parseDateTextAsLocalDate(endDateText)
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return `${startDateText || "-"} - ${endDateText || "-"}`
  }

  const startYear = startDate.getFullYear()
  const startMonth = String(startDate.getMonth() + 1).padStart(2, "0")
  const startDay = String(startDate.getDate()).padStart(2, "0")
  const endMonth = String(endDate.getMonth() + 1).padStart(2, "0")
  const endDay = String(endDate.getDate()).padStart(2, "0")

  return `${startYear}년 ${startMonth}월 ${startDay}일 - ${endMonth}월 ${endDay}일`
}

function getWeeklyReportDateRange(referenceDate = new Date()) {
  const reportStartDate = new Date(referenceDate)
  reportStartDate.setHours(0, 0, 0, 0)
  const daysSinceTuesday = (reportStartDate.getDay() - 2 + 7) % 7
  reportStartDate.setDate(reportStartDate.getDate() - daysSinceTuesday)

  const reportEndDate = new Date(reportStartDate)
  reportEndDate.setDate(reportStartDate.getDate() + 6)
  reportEndDate.setHours(23, 59, 59, 999)

  return {
    startDate: reportStartDate,
    endDate: reportEndDate,
    startDateText: formatDateAsText(reportStartDate),
    endDateText: formatDateAsText(reportEndDate)
  }
}

function getHolidayDateSet() {
  return new Set([
    ...userProfileState.holidayDates,
    ...holidayCalendarState.publicHolidayDates
  ])
}

function isBusinessDay(date, holidayDateSet = getHolidayDateSet()) {
  const day = date.getDay()
  if (day === 0 || day === 6) {
    return false
  }

  return !holidayDateSet.has(formatDateAsText(date))
}

function getWeeklyPrintDueContext(referenceDate = new Date()) {
  const { startDateText, endDateText } = getWeeklyReportDateRange(referenceDate)
  const holidayDateSet = getHolidayDateSet()
  const reportEndDate = parseDateTextAsLocalDate(endDateText)
  const dueAt = new Date(reportEndDate)
  dueAt.setHours(0, 0, 0, 0)

  while (!isBusinessDay(dueAt, holidayDateSet)) {
    dueAt.setDate(dueAt.getDate() - 1)
  }

  dueAt.setHours(WEEKLY_PRINT_REMINDER_HOUR, WEEKLY_PRINT_REMINDER_MINUTE, 0, 0)

  return {
    weekKey: endDateText,
    reportStartDateText: startDateText,
    reportEndDateText: endDateText,
    dueAt
  }
}

function getNextWeeklyPrintDueContext(referenceDate = new Date()) {
  const currentContext = getWeeklyPrintDueContext(referenceDate)
  const nextReferenceDate = addDays(parseDateTextAsLocalDate(currentContext.reportEndDateText), 1)
  return getWeeklyPrintDueContext(nextReferenceDate)
}

function getWeeklyPlanDateRange() {
  const { endDate } = getWeeklyReportDateRange()
  const planStartDate = new Date(endDate)
  planStartDate.setHours(0, 0, 0, 0)
  planStartDate.setDate(planStartDate.getDate() + 1)

  const planEndDate = new Date(planStartDate)
  planEndDate.setDate(planStartDate.getDate() + 6)
  planEndDate.setHours(23, 59, 59, 999)

  return {
    startDate: planStartDate,
    endDate: planEndDate,
    startDateText: formatDateAsText(planStartDate),
    endDateText: formatDateAsText(planEndDate)
  }
}

function getReportCategoryOrderMap() {
  const categoryList = getCategoryList()
  const archivedCategoryList = getArchivedCategoryList()
  const orderedCategoryItems = [
    ...(categoryList ? Array.from(categoryList.querySelectorAll(':scope > .item[data-category-id]')) : []),
    ...(archivedCategoryList ? Array.from(archivedCategoryList.querySelectorAll(':scope > .item[data-category-id]')) : [])
  ]
  const orderMap = new Map()
  let nextOrder = 0

  orderedCategoryItems.forEach((item) => {
    const categoryId = item.dataset.categoryId?.trim()
    if (!categoryId || categoryId === DEFAULT_CATEGORY_ID) {
      return
    }

    if (!orderMap.has(categoryId)) {
      orderMap.set(categoryId, nextOrder)
      nextOrder += 1
    }
  })

  orderMap.set(DEFAULT_CATEGORY_ID, Number.MAX_SAFE_INTEGER)
  return orderMap
}

function getSortedReportLogItems(items) {
  const categoryOrderMap = getReportCategoryOrderMap()

  return items
    .slice()
    .sort((left, right) => {
      const leftCategoryId = left.dataset.categoryId?.trim() || DEFAULT_CATEGORY_ID
      const rightCategoryId = right.dataset.categoryId?.trim() || DEFAULT_CATEGORY_ID
      const leftCategoryOrder = categoryOrderMap.get(leftCategoryId) ?? Number.MAX_SAFE_INTEGER
      const rightCategoryOrder = categoryOrderMap.get(rightCategoryId) ?? Number.MAX_SAFE_INTEGER

      if (leftCategoryOrder !== rightCategoryOrder) {
        return leftCategoryOrder - rightCategoryOrder
      }

      return compareItemsByDate(left, right)
    })
}

function getDefaultReportStatusText(item) {
  return item?.dataset?.isChecked === "true" ? "완료" : "진행 중"
}

function getDefaultCategoryReportStatusText(categoryItems, categoryId) {
  return categoryItems.length > 0 && categoryItems.every((item) => item.statusText === "완료")
    ? "완료"
    : "진행 중"
}

function getWeeklyPlanDueDateText(item, reportEndDateText = "") {
  const endDateText = getDailyLogItemEndDate(item)
  if (!endDateText) {
    return "미정"
  }

  return formatDateAsMonthDay(endDateText)
}

function getWeeklyPlanCategoryDueDateText(categoryItems, reportEndDateText = "", categoryId = "") {
  if (isRecurringCategoryId(categoryId)) {
    return "상시"
  }

  if (categoryItems.length === 0) {
    return "미정"
  }

  const endDateTexts = categoryItems
    .map((item) => getDailyLogItemEndDate(item))
    .filter(Boolean)
    .sort()

  if (endDateTexts.length === 0) {
    return "미정"
  }

  return formatDateAsMonthDay(endDateTexts[endDateTexts.length - 1])
}

function isDateTextWithinRange(dateText, startDateText, endDateText) {
  const safeDateText = sanitizeDailyLogDateText(dateText)
  return Boolean(safeDateText) && safeDateText >= startDateText && safeDateText <= endDateText
}

function shouldIncludeInWeeklyReport(item, startDateText, endDateText) {
  return isDateTextWithinRange(getItemLogDate(item), startDateText, endDateText)
}

function shouldIncludeInWeeklyPlan(item, reportEndDateText, planStartDateText, planEndDateText) {
  if (item.dataset.isChecked === "true") {
    return false
  }

  if (isRecurringDailyLogItem(item)) {
    return !isRetiredRecurringDailyLogItem(item)
  }

  const startDateText = getDailyLogItemStartDate(item)
  const endDateText = getDailyLogItemEndDate(item)

  if (startDateText && planEndDateText && startDateText > planEndDateText) {
    return false
  }

  return (
    isDateTextWithinRange(startDateText, planStartDateText, planEndDateText) ||
    !endDateText ||
    endDateText > reportEndDateText
  )
}

function compareItemsByCompletedOrder(a, b) {
  const aCompletedAt = getDailyLogItemCompletedAt(a)
  const bCompletedAt = getDailyLogItemCompletedAt(b)

  if (aCompletedAt && bCompletedAt) {
    const completedCompare = aCompletedAt.localeCompare(bCompletedAt)
    if (completedCompare !== 0) {
      return completedCompare
    }
  } else if (aCompletedAt) {
    return -1
  } else if (bCompletedAt) {
    return 1
  }

  return compareItemsByDate(a, b)
}

function getWeeklyCategorySummaryStatus(items, categoryId = "") {
  if (isRecurringCategoryId(categoryId)) {
    return "상시"
  }

  if (items.length === 0) {
    return "미정"
  }

  if (items.every((item) => item.dataset.isChecked === "true")) {
    return "완료"
  }

  if (items.some((item) => item.dataset.isChecked === "true")) {
    return "진행 중"
  }

  const hasAnySchedule = items.some((item) =>
    Boolean(
      getItemLogDate(item) ||
      getDailyLogItemStartDate(item) ||
      getDailyLogItemEndDate(item) ||
      getDailyLogItemCompletedAt(item)
    )
  )

  return hasAnySchedule ? "진행 중" : "미정"
}

function getWeeklyCategorySummaryNoteText(items, options = {}) {
  if (items.length === 0) {
    return ""
  }

  const categoryId = typeof options.categoryId === "string"
    ? options.categoryId.trim()
    : ""
  const sortItems = typeof options.sortItems === "function"
    ? options.sortItems
    : (sourceItems) => sourceItems.slice().sort(compareItemsByCompletedOrder)

  const sortedItems = sortItems(items)
  const titleSet = new Set()
  const titles = []

  sortedItems.forEach((item) => {
    const title = getDailyLogItemTitle(item)
    if (!title) {
      return
    }

    if (isRecurringCategoryId(categoryId)) {
      const recurringKey = title.trim().toLowerCase()
      if (!recurringKey || titleSet.has(recurringKey)) {
        return
      }
      titleSet.add(recurringKey)
      titles.push(title)
      return
    }

    titles.push(title)
  })

  const previewTitles = titles.slice(0, WEEKLY_REPORT_NOTE_PREVIEW_LIMIT)

  if (previewTitles.length === 0) {
    return ""
  }

  const remainingCount = Math.max(0, titles.length - previewTitles.length)
  const previewText = previewTitles.join(", ")

  return remainingCount > 0
    ? `${previewText} 외 ${remainingCount}건`
    : previewText
}

function buildWeeklyCategorySummaryEntries(items, options = {}) {
  const getStatusText = typeof options.getStatusText === "function"
    ? options.getStatusText
    : (categoryItems, categoryId) => getWeeklyCategorySummaryStatus(categoryItems, categoryId)
  const getNoteText = typeof options.getNoteText === "function"
    ? options.getNoteText
    : (categoryItems, categoryId) => getWeeklyCategorySummaryNoteText(categoryItems, { categoryId })
  const getStandaloneStatusText = typeof options.getStandaloneStatusText === "function"
    ? options.getStandaloneStatusText
    : (item) => getDefaultReportStatusText(item)
  const getStandaloneNoteText = typeof options.getStandaloneNoteText === "function"
    ? options.getStandaloneNoteText
    : (item) => getDailyLogItemNote(item)
  const reportEntries = []
  const categoryGroups = new Map()
  let nextTopLevelNumber = 1

  items.forEach((item) => {
    const categoryId = item.dataset.categoryId?.trim() || DEFAULT_CATEGORY_ID
    const categoryName = item.querySelector(".dailyLogCategoryBadge")?.textContent?.trim() || DEFAULT_CATEGORY_NAME

    if (categoryId === DEFAULT_CATEGORY_ID) {
      reportEntries.push({
        rowNumber: String(nextTopLevelNumber),
        taskText: getDailyLogItemTitle(item),
        statusText: getStandaloneStatusText(item),
        noteText: getStandaloneNoteText(item),
        rowKind: "task"
      })
      nextTopLevelNumber += 1
      return
    }

    let categoryGroup = categoryGroups.get(categoryId)
    if (!categoryGroup) {
      categoryGroup = {
        rowNumber: String(nextTopLevelNumber),
        categoryId,
        categoryName,
        items: []
      }
      categoryGroups.set(categoryId, categoryGroup)
      reportEntries.push({
        rowNumber: categoryGroup.rowNumber,
        taskText: categoryGroup.categoryName,
        rowKind: "category",
        categoryId
      })
      nextTopLevelNumber += 1
    }

    categoryGroup.items.push(item)
  })

  return reportEntries.map((entry) => {
    if (entry.rowKind !== "category") {
      return entry
    }

    const categoryGroup = categoryGroups.get(entry.categoryId)
    const categoryItems = categoryGroup?.items ?? []

    return {
      rowNumber: entry.rowNumber,
      taskText: entry.taskText,
      statusText: getStatusText(categoryItems, entry.categoryId),
      noteText: getNoteText(categoryItems, entry.categoryId),
      rowKind: "category"
    }
  })
}

function buildGroupedReportEntries(items, options = {}) {
  const getTaskStatusText = typeof options.getTaskStatusText === "function"
    ? options.getTaskStatusText
    : getDefaultReportStatusText
  const getCategoryStatusText = typeof options.getCategoryStatusText === "function"
    ? options.getCategoryStatusText
    : getDefaultCategoryReportStatusText
  const getTaskNoteText = typeof options.getTaskNoteText === "function"
    ? options.getTaskNoteText
    : getDailyLogItemNote
  const reportEntries = []
  const categoryGroups = new Map()
  let nextTopLevelNumber = 1

  items.forEach((item) => {
    const categoryId = item.dataset.categoryId?.trim() || DEFAULT_CATEGORY_ID
    const categoryName = item.querySelector(".dailyLogCategoryBadge")?.textContent?.trim() || DEFAULT_CATEGORY_NAME
    const taskText = getDailyLogItemTitle(item)
    const statusText = getTaskStatusText(item)
    const noteText = getTaskNoteText(item)
    const endDateText = getDailyLogItemEndDate(item)

    if (categoryId === DEFAULT_CATEGORY_ID) {
      reportEntries.push({
        rowNumber: String(nextTopLevelNumber),
        taskText,
        statusText,
        noteText,
        rowKind: "task"
      })
      nextTopLevelNumber += 1
      return
    }

    let categoryGroup = categoryGroups.get(categoryId)
    if (!categoryGroup) {
      categoryGroup = {
        rowNumber: String(nextTopLevelNumber),
        categoryName,
        items: []
      }
      categoryGroups.set(categoryId, categoryGroup)
      reportEntries.push({
        rowNumber: categoryGroup.rowNumber,
        taskText: categoryName,
        statusText: "",
        noteText: "",
        rowKind: "category",
        categoryId
      })
      nextTopLevelNumber += 1
    }

    categoryGroup.items.push({
      taskText,
      statusText,
      noteText,
      endDateText
    })
  })

  return reportEntries.flatMap((entry) => {
    if (entry.rowKind !== "category") {
      return [entry]
    }

    const categoryGroup = categoryGroups.get(entry.categoryId)
    const categoryItems = categoryGroup?.items ?? []
    const categoryStatusText = getCategoryStatusText(categoryItems, entry.categoryId)

    const categoryEntry = {
      rowNumber: entry.rowNumber,
      taskText: entry.taskText,
      statusText: categoryStatusText,
      noteText: entry.noteText,
      rowKind: "category",
      rowSpan: categoryItems.length + 1
    }

    const taskEntries = categoryItems.map((item) => ({
      taskText: item.taskText,
      statusText: item.statusText,
      noteText: item.noteText,
      rowKind: "task",
      isChildTask: true
    }))

    return [categoryEntry, ...taskEntries]
  })
}

function getTodayDailyReportEntries() {
  const todayDateText = getTodayDateText()
  carryOverPendingDailyLogsToToday(todayDateText)
  createTodayRecurringDailyLogs(todayDateText)

  const todayItems = getDailyLogItems()
    .slice()
    .filter((item) => !isDailyLogSnapshotItem(item) && getItemLogDate(item) === todayDateText)

  return buildGroupedReportEntries(getSortedReportLogItems(todayItems))
}

function getWeeklyReportEntries() {
  const { startDateText, endDateText } = getWeeklyReportDateRange()
  const weeklyItems = getDailyLogItems()
    .slice()
    .filter((item) => !isDailyLogSnapshotItem(item) && shouldIncludeInWeeklyReport(item, startDateText, endDateText))

  return buildWeeklyCategorySummaryEntries(getSortedReportLogItems(weeklyItems), {
    getStatusText: (categoryItems, categoryId) => getWeeklyCategorySummaryStatus(categoryItems, categoryId),
    getNoteText: (categoryItems, categoryId) => getWeeklyCategorySummaryNoteText(categoryItems, {
      categoryId,
      sortItems: (sourceItems) => sourceItems.slice().sort(compareItemsByCompletedOrder)
    }),
    getStandaloneStatusText: (item) => getDefaultReportStatusText(item),
    getStandaloneNoteText: (item) => getDailyLogItemNote(item)
  })
}

function getCurrentWorkWeekPlanReportEntries() {
  const { endDateText } = getWeeklyReportDateRange()
  const {
    startDateText: planStartDateText,
    endDateText: planEndDateText
  } = getWeeklyPlanDateRange()
  const plannedItems = getDailyLogItems()
    .slice()
    .filter((item) =>
      !isDailyLogSnapshotItem(item) &&
      shouldIncludeInWeeklyPlan(item, endDateText, planStartDateText, planEndDateText)
    )

  return buildWeeklyCategorySummaryEntries(getSortedReportLogItems(plannedItems), {
    getStatusText: (categoryItems, categoryId) =>
      getWeeklyPlanCategoryDueDateText(categoryItems, endDateText, categoryId),
    getNoteText: (categoryItems, categoryId) => getWeeklyCategorySummaryNoteText(categoryItems, {
      categoryId,
      sortItems: (sourceItems) =>
        sourceItems.slice().sort((left, right) => compareItemsByDate(left, right))
    }),
    getStandaloneStatusText: (item) => getWeeklyPlanDueDateText(item, endDateText),
    getStandaloneNoteText: (item) => getDailyLogItemNote(item)
  })
}

function createDailyReportRow(frameDocument, entry) {
  const row = frameDocument.createElement("tr")
  row.className = entry?.rowKind === "category"
    ? "dailyReportTable__row dailyReportTable__row--category"
    : "dailyReportTable__row"
  if (!entry) {
    row.classList.add("dailyReportTable__row--empty")
  }

  if (!entry?.isChildTask) {
    const numberCell = frameDocument.createElement("td")
    numberCell.className = "dailyReportTable__cell dailyReportTable__cell--center"
    numberCell.textContent = entry ? String(entry.rowNumber) : ""
    if (entry?.rowKind === "category" && entry.rowSpan > 1) {
      numberCell.rowSpan = entry.rowSpan
    }
    row.append(numberCell)
  }

  const taskCell = frameDocument.createElement("td")
  taskCell.className = entry?.rowKind === "category"
    ? "dailyReportTable__cell dailyReportTable__cell--task dailyReportTable__cell--category"
    : "dailyReportTable__cell dailyReportTable__cell--task"

  if (entry?.isChildTask) {
    const content = frameDocument.createElement("span")
    content.className = "dailyReportTaskContent dailyReportTaskContent--child"
    content.insertAdjacentHTML("beforeend", DAILY_REPORT_CHILD_TASK_ICON)

    const label = frameDocument.createElement("span")
    label.textContent = entry.taskText ?? ""
    content.append(label)
    taskCell.append(content)
  } else {
    taskCell.textContent = entry?.taskText ?? ""
  }
  row.append(taskCell)

  const statusCell = frameDocument.createElement("td")
  statusCell.className = "dailyReportTable__cell dailyReportTable__cell--center"
  statusCell.textContent = entry?.statusText ?? ""
  row.append(statusCell)

  const noteCell = frameDocument.createElement("td")
  noteCell.className = "dailyReportTable__cell"
  noteCell.textContent = entry?.noteText ?? ""
  row.append(noteCell)

  return row
}

function populateDailyReportFrame(frame) {
  const frameDocument = frame.contentDocument
  if (!frameDocument) {
    return
  }

  const todayDateText = getTodayDateText()
  const reportDateNode = frameDocument.querySelector("#dailyReportDate")
  const reportMetaDateNode = frameDocument.querySelector("#dailyReportMetaDate")
  const reportTableBody = frameDocument.querySelector("#dailyReportTableBody")
  populateReportProfile(frameDocument, "dailyReport")

  if (reportDateNode) {
    reportDateNode.textContent = formatDailyReportDate(todayDateText)
  }

  if (reportMetaDateNode) {
    reportMetaDateNode.textContent = formatDailyReportDate(todayDateText)
  }

  if (!reportTableBody) {
    return
  }

  const reportEntries = getTodayDailyReportEntries()
  const fragment = frameDocument.createDocumentFragment()
  const rowCount = Math.max(MIN_REPORT_GROUP_ROWS, reportEntries.length)

  for (let index = 0; index < rowCount; index += 1) {
    fragment.append(createDailyReportRow(frameDocument, reportEntries[index] ?? null))
  }

  reportTableBody.replaceChildren(fragment)
  applyDailyReportMemoToFrame(frame)
}

function populateWeeklyReportFrame(frame) {
  const frameDocument = frame.contentDocument
  if (!frameDocument) {
    return
  }

  const { startDateText, endDateText } = getWeeklyReportDateRange()
  const reportPeriodNode = frameDocument.querySelector("#weeklyReportPeriod")
  const reportMetaDateNode = frameDocument.querySelector("#weeklyReportMetaDate")
  const reportTableBody = frameDocument.querySelector("#weeklyReportTableBody")
  const reportPlanTableBody = frameDocument.querySelector("#weeklyReportPlanTableBody")
  populateReportProfile(frameDocument, "weeklyReport")

  if (reportPeriodNode) {
    reportPeriodNode.textContent = formatWeeklyReportPeriod(startDateText, endDateText)
  }

  if (reportMetaDateNode) {
    reportMetaDateNode.textContent = formatDailyReportDate(endDateText)
  }

  if (reportTableBody) {
    const reportEntries = getWeeklyReportEntries()
    const fragment = frameDocument.createDocumentFragment()
    const rowCount = Math.max(MIN_REPORT_GROUP_ROWS, reportEntries.length)

    for (let index = 0; index < rowCount; index += 1) {
      fragment.append(createDailyReportRow(frameDocument, reportEntries[index] ?? null))
    }

    reportTableBody.replaceChildren(fragment)
  }

  if (!reportPlanTableBody) {
    return
  }

  const planEntries = getCurrentWorkWeekPlanReportEntries()
  const planFragment = frameDocument.createDocumentFragment()
  const planRowCount = Math.max(MIN_REPORT_GROUP_ROWS, planEntries.length)

  for (let index = 0; index < planRowCount; index += 1) {
    planFragment.append(createDailyReportRow(frameDocument, planEntries[index] ?? null))
  }

  reportPlanTableBody.replaceChildren(planFragment)
  applyWeeklyReportMemoToFrame(frame)
}

function escapeHtmlText(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function sanitizeFileName(value) {
  return String(value ?? "")
    .replace(/[\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, " ")
    .trim()
}

function formatReportDateStamp(dateText) {
  const matched = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateText ?? "")
  if (!matched) {
    return dateText || ""
  }

  return `${matched[1].slice(2)}-${matched[2]}-${matched[3]}`
}

function getReportSubjectBase(reportType) {
  const userName = userProfileState.name || "사용자"
  const reportDateText = reportType === "weekly"
    ? getWeeklyReportDateRange().endDateText
    : getTodayDateText()
  const reportLabel = reportType === "weekly" ? "주간업무일지" : "일일업무일지"
  return `${userName}_${formatReportDateStamp(reportDateText)}_${reportLabel}`
}

function getReportFileName(reportType) {
  return sanitizeFileName(`${getReportSubjectBase(reportType)}.pdf`)
}

function getReportEmailSubject(reportType) {
  return getReportSubjectBase(reportType)
}

function getReportTemplateSrc(reportType) {
  return reportType === "weekly"
    ? "./report-templates/weekly-report.html"
    : "./report-templates/daily-report.html"
}

function populateReportFrameByType(frame, reportType) {
  if (reportType === "weekly") {
    populateWeeklyReportFrame(frame)
    return
  }

  populateDailyReportFrame(frame)
}

function renderReportInTemporaryFrame(reportType) {
  return new Promise((resolve, reject) => {
    const frame = document.createElement("iframe")
    const templateSrc = getReportTemplateSrc(reportType)
    frame.className = "temporaryReportFrame"
    frame.setAttribute("aria-hidden", "true")
    frame.onload = () => {
      if (frame.getAttribute("src") !== templateSrc) {
        return
      }

      try {
        window.requestAnimationFrame(() => {
          try {
            populateReportFrameByType(frame, reportType)
            window.requestAnimationFrame(() => resolve(frame))
          } catch (error) {
            reject(error)
          }
        })
      } catch (error) {
        reject(error)
      }
    }
    frame.onerror = () => reject(new Error("보고서 템플릿을 불러오지 못했습니다."))
    document.body.append(frame)
    frame.setAttribute("src", templateSrc)
  })
}

function getReportTextBody(reportType) {
  const fallback = reportType === "weekly"
    ? "주간 업무 일지를 첨부합니다."
    : "일일 업무 일지를 첨부합니다."
  return userProfileState.mailBody.trim() || fallback
}

function createMailBodyHtml(text) {
  return `<div style="font-family: Malgun Gothic, Apple SD Gothic Neo, sans-serif; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${escapeHtmlText(text)}</div>`
}

async function createStandaloneReportHtml(frame, reportType) {
  const frameDocument = frame?.contentDocument
  if (!frameDocument?.documentElement) {
    throw new Error("보고서 미리보기가 준비되지 않았습니다.")
  }

  const reportSheet = frameDocument.querySelector(".reportSheet")
  const reportTableBody = reportType === "weekly"
    ? frameDocument.querySelector("#weeklyReportTableBody")
    : frameDocument.querySelector("#dailyReportTableBody")

  if (!reportSheet || !reportTableBody) {
    throw new Error("보고서 화면이 완전히 생성되지 않았습니다.")
  }

  const clonedDocumentElement = frameDocument.documentElement.cloneNode(true)
  const stylesheet = await window.appReports.loadStylesheet(reportType)

  clonedDocumentElement.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    const style = frameDocument.createElement("style")
    style.textContent = stylesheet
    link.replaceWith(style)
  })

  return `<!DOCTYPE html>\n${clonedDocumentElement.outerHTML}`
}

function validateReportActionSettings(reportType) {
  const savePath = getReportSavePath(reportType)
  if (!savePath) {
    throw new Error(reportType === "weekly"
      ? "주간보고서 저장 위치를 설정해 주세요."
      : "일일보고서 저장 위치를 설정해 주세요.")
  }

  if (
    reportType === "daily" &&
    (!userProfileState.gmailAddress || !userProfileState.googleAppPassword || !userProfileState.recipientEmail)
  ) {
    throw new Error("메일 발송을 위해 내 이메일, 구글 앱 비밀번호, 받는 사람 이메일을 설정해 주세요.")
  }
}

async function saveReportPdfFromFrame(reportType, frame) {
  const html = await createStandaloneReportHtml(frame, reportType)
  const fileName = getReportFileName(reportType)
  const saveResult = await window.appReports.savePdf({
    directoryPath: getReportSavePath(reportType),
    fileName,
    html
  })

  return {
    html,
    fileName,
    saveResult
  }
}

async function saveAndSendReport(reportType, options = {}) {
  const frame = options.frame ?? getReportPreviewModalElements().frame
  validateReportActionSettings(reportType)

  if (reportType === "daily") {
    if (reportDeliveryState.isDailyReportSending) {
      throw new Error("일일 보고서 발송이 이미 진행 중입니다.")
    }

    reportDeliveryState.isDailyReportSending = true
  }

  if ((reportType === "daily" || reportType === "weekly") && !options.frame) {
    updateReportMemoFromInputs()
  }

  try {
    const { html, fileName, saveResult } = await saveReportPdfFromFrame(reportType, frame)

    if (reportType === "weekly") {
      await window.appReports.print({ html })
      await markWeeklyPrintCompleted()
      return saveResult
    }

    const mailText = getReportTextBody(reportType)

    await window.appReports.sendMail({
      from: userProfileState.gmailAddress,
      password: userProfileState.googleAppPassword,
      to: userProfileState.recipientEmail,
      subject: getReportEmailSubject(reportType),
      text: mailText,
      html: createMailBodyHtml(mailText),
      attachments: [
        {
          filename: fileName,
          contentType: "application/pdf",
          path: saveResult.path
        }
      ]
    })

    if (reportType === "daily") {
      userProfileState.dailyReportLastAutoSentDate = getTodayDateText()
      persistAppData()
    }

    return saveResult
  } finally {
    if (reportType === "daily") {
      reportDeliveryState.isDailyReportSending = false
    }
  }
}

function isDailyReportAutoSendDue(now = new Date()) {
  const sendTime = userProfileState.dailyReportAutoSendTime
  if (!sendTime || !/^\d{2}:\d{2}$/.test(sendTime)) {
    return false
  }

  const todayDateText = getTodayDateText()
  if (userProfileState.dailyReportLastAutoSentDate === todayDateText) {
    return false
  }

  if (
    !userProfileState.dailyReportSavePath ||
    !userProfileState.gmailAddress ||
    !userProfileState.googleAppPassword ||
    !userProfileState.recipientEmail
  ) {
    return false
  }

  const [hourText, minuteText] = sendTime.split(":")
  const scheduledDate = new Date(now)
  scheduledDate.setHours(Number(hourText), Number(minuteText), 0, 0)
  return now >= scheduledDate
}

function getDailyReportAutoSendDelay(now = new Date()) {
  const sendTime = userProfileState.dailyReportAutoSendTime
  if (!sendTime || !/^\d{2}:\d{2}$/.test(sendTime)) {
    return null
  }

  const [hourText, minuteText] = sendTime.split(":")
  const scheduledDate = new Date(now)
  scheduledDate.setHours(Number(hourText), Number(minuteText), 0, 0)

  if (userProfileState.dailyReportLastAutoSentDate === getTodayDateText()) {
    scheduledDate.setDate(scheduledDate.getDate() + 1)
    return Math.max(0, scheduledDate.getTime() - now.getTime())
  }

  return Math.max(0, scheduledDate.getTime() - now.getTime())
}

async function runDailyReportAutoSendIfDue() {
  if (dailyReportAutoSendState.isSending || !isDailyReportAutoSendDue()) {
    scheduleDailyReportAutoSend()
    return
  }

  dailyReportAutoSendState.isSending = true
  let frame = null
  let shouldRetry = false

  try {
    frame = await renderReportInTemporaryFrame("daily")
    await saveAndSendReport("daily", { silent: true, frame })
  } catch (error) {
    shouldRetry = true
    console.error("Failed to auto send daily report.", error)
  } finally {
    frame?.remove()
    dailyReportAutoSendState.isSending = false
    scheduleDailyReportAutoSend(shouldRetry ? DAILY_REPORT_AUTO_SEND_RETRY_DELAY_MS : undefined)
  }
}

function scheduleDailyReportAutoSend(delayOverrideMs) {
  if (dailyReportAutoSendState.timerId !== null) {
    window.clearTimeout(dailyReportAutoSendState.timerId)
    dailyReportAutoSendState.timerId = null
  }

  if (!userProfileState.dailyReportAutoSendTime) {
    return
  }

  const delayMs = Number.isFinite(delayOverrideMs)
    ? Math.max(0, delayOverrideMs)
    : getDailyReportAutoSendDelay()

  if (delayMs === null) {
    return
  }

  dailyReportAutoSendState.timerId = window.setTimeout(runDailyReportAutoSendIfDue, delayMs)
}

function hasWeeklyPrintCompleted(weekKey) {
  return Boolean(getWeeklyPrintReminderHistoryEntry(weekKey)?.printedAt)
}

function hasWeeklyPrintReminderBeenShown(weekKey) {
  return Boolean(getWeeklyPrintReminderHistoryEntry(weekKey)?.remindedAt)
}

function getWeeklyPrintReminderDelay(now = new Date()) {
  const context = getWeeklyPrintDueContext(now)
  if (!hasWeeklyPrintCompleted(context.weekKey) && !hasWeeklyPrintReminderBeenShown(context.weekKey)) {
    return Math.max(0, context.dueAt.getTime() - now.getTime())
  }

  const nextContext = getNextWeeklyPrintDueContext(now)
  return Math.max(0, nextContext.dueAt.getTime() - now.getTime())
}

function markWeeklyPrintReminderShown(context = getWeeklyPrintDueContext()) {
  upsertWeeklyPrintReminderHistoryEntry(context.weekKey, {
    remindedAt: new Date().toISOString()
  })
  persistAppData()
}

function markWeeklyPrintCompleted(referenceDate = new Date()) {
  const context = getWeeklyPrintDueContext(referenceDate)
  upsertWeeklyPrintReminderHistoryEntry(context.weekKey, {
    printedAt: new Date().toISOString()
  })
  closeWeeklyPrintReminderPopup()
  scheduleWeeklyPrintReminder()
  return persistAppData()
}

function runWeeklyPrintReminderCheck() {
  const now = new Date()
  const context = getWeeklyPrintDueContext(now)
  const shouldShowReminder =
    now.getTime() >= context.dueAt.getTime() &&
    !hasWeeklyPrintCompleted(context.weekKey) &&
    !hasWeeklyPrintReminderBeenShown(context.weekKey)

  if (shouldShowReminder) {
    markWeeklyPrintReminderShown(context)
    openWeeklyPrintReminderPopup()
  }

  scheduleWeeklyPrintReminder()
}

function scheduleWeeklyPrintReminder(delayOverrideMs) {
  if (weeklyPrintReminderState.timerId !== null) {
    window.clearTimeout(weeklyPrintReminderState.timerId)
    weeklyPrintReminderState.timerId = null
  }

  const delayMs = Number.isFinite(delayOverrideMs)
    ? Math.max(0, delayOverrideMs)
    : getWeeklyPrintReminderDelay()

  weeklyPrintReminderState.timerId = window.setTimeout(runWeeklyPrintReminderCheck, delayMs)
}

async function refreshHolidayApiConfigInfo() {
  if (!window.appHolidayApi?.getConfigInfo) {
    holidayCalendarState.syncStatusMessage = "공휴일 설정 파일 기능을 사용할 수 없습니다."
    renderHolidayApiStatus()
    return null
  }

  const info = await window.appHolidayApi.getConfigInfo()
  setHolidayApiConfigInfo(info)
  holidayCalendarState.syncStatusMessage = ""
  renderHolidayApiStatus()
  return info
}

async function syncPublicHolidayCalendar({ silent = false } = {}) {
  if (!window.appHolidayApi?.sync) {
    holidayCalendarState.syncStatusMessage = "공휴일 동기화 기능을 사용할 수 없습니다."
    renderHolidayApiStatus()
    return null
  }

  try {
    const result = await window.appHolidayApi.sync()
    setHolidayApiConfigInfo(result)

    if (result.skipped) {
      if (result.reason === "disabled") {
        holidayCalendarState.syncStatusMessage = "공휴일 자동 동기화가 꺼져 있습니다. 설정 파일에서 enabled를 true로 바꾸세요."
      } else if (result.reason === "missing-service-key") {
        holidayCalendarState.syncStatusMessage = "설정 파일에 일반 인증키(serviceKey)를 입력하세요."
      } else {
        holidayCalendarState.syncStatusMessage = "공휴일 동기화를 건너뛰었습니다."
      }

      renderHolidayApiStatus()
      return result
    }

    setHolidayCalendar({
      publicHolidayDates: result.dates,
      lastSyncedAt: result.syncedAt,
      lastSyncedAppVersion: getCurrentAppVersion()
    })
    holidayCalendarState.syncStatusMessage = `공휴일 ${result.count}건을 동기화했습니다.`
    renderHolidayApiStatus()
    await persistAppData()
    scheduleWeeklyPrintReminder()
    runWeeklyPrintReminderCheck()
    return result
  } catch (error) {
    console.error("Failed to sync public holidays.", error)
    holidayCalendarState.syncStatusMessage = error?.message || "공휴일 동기화에 실패했습니다."
    renderHolidayApiStatus()
    if (!silent) {
      openInfoModal({
        title: "공휴일 동기화 실패",
        message: holidayCalendarState.syncStatusMessage
      })
    }
    return null
  }
}

function shouldSyncPublicHolidayCalendarOnLaunch() {
  const currentAppVersion = getCurrentAppVersion()
  if (!currentAppVersion) {
    return false
  }

  return holidayCalendarState.lastSyncedAppVersion !== currentAppVersion
}

function ensureDailyLogEmptyState() {
  const dailyLog = document.querySelector("#dailyLog")
  if (!dailyLog) {
    return null
  }

  let emptyState = document.querySelector("#dailyLogEmptyState")
  if (emptyState) {
    return emptyState
  }

  emptyState = document.createElement("div")
  emptyState.id = "dailyLogEmptyState"
  emptyState.className = "dailyLogEmptyState"
  emptyState.hidden = true
  emptyState.textContent = "아직 업무가 없습니다"
  dailyLog.append(emptyState)
  return emptyState
}

function updateDailyLogEmptyState() {
  const emptyState = ensureDailyLogEmptyState()
  if (!emptyState) {
    return
  }

  const visibleItems = document.querySelectorAll("#dailyLogGroups .item")
  emptyState.hidden = visibleItems.length > 0
}

function syncDailyLogCategory(item, categoryId, categoryName) {
  if (!categoryId) {
    throw new Error("category_id cannot be null.")
  }

  item.dataset.categoryId = categoryId

  syncDailyLogCheckedState(item, item.dataset.isChecked === "true")

  const categoryNode = item.querySelector(".dailyLogCategoryBadge")
  if (categoryNode) {
    categoryNode.textContent = categoryName
  }

  upsertDebugIdLabel(item)
  if (dailyLogDetailState.selectedItem === item) {
    syncDailyLogDetailPanelFromItem(item)
  }
}

function syncDailyLogCheckedState(item, isChecked, options = {}) {
  const nextChecked = Boolean(isChecked)
  item.dataset.isChecked = String(nextChecked)
  item.classList.toggle("itemChecked", nextChecked)
  let movedToToday = false

  if (nextChecked) {
    const completedAt =
      sanitizeDailyLogDateText(options.completedAt ?? "") ||
      getDailyLogItemCompletedAt(item) ||
      getTodayDateText()
    setDailyLogItemCompletedAt(item, completedAt)
  } else {
    setDailyLogItemCompletedAt(item, "")
    movedToToday = moveDailyLogItemToToday(item)
  }

  const checkbox = item.querySelector('input[type="checkbox"]')
  if (checkbox) {
    checkbox.checked = nextChecked
  }

  updateCategoryCounts()
  return { movedToToday }
}

function markDailyLogItemDraggable(item) {
  item.draggable = true
}

function setupDailyLogDragging() {
  const items = document.querySelectorAll("#dailyLogGroups .item")
  items.forEach((item) => {
    markDailyLogItemDraggable(item)
  })
}

function createDailyLogItem(title, categoryId, categoryName, options = {}) {
  if (!categoryId) {
    throw new Error("category_id cannot be null.")
  }

  const item = document.createElement("li")
  item.className = "item"
  item.dataset.categoryId = categoryId

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"

  const titleNode = document.createElement("p")
  titleNode.className = "dailyLogTitle"
  titleNode.textContent = title

  const categoryNode = document.createElement("button")
  categoryNode.type = "button"
  categoryNode.className = "dailyLogCategoryBadge"
  categoryNode.draggable = false
  categoryNode.textContent = categoryName

  setDailyLogSnapshotState(item, options.isSnapshot === true)
  setRetiredRecurringDailyLogState(item, options.recurringRetired === true)
  setDailyLogItemCreatedAt(item, options.createdAt ?? getTodayDateText())
  setDailyLogItemNote(item, options.note ?? "")
  setDailyLogItemStartDate(item, options.startDate ?? "")
  setDailyLogItemEndDate(item, options.endDate ?? "")
  setDailyLogItemCompletedAt(item, options.completedAt ?? "")
  item.append(checkbox, titleNode, categoryNode)
  syncDailyLogCheckedState(item, options.isChecked === true, {
    completedAt: options.completedAt
  })
  markDailyLogItemDraggable(item)
  upsertDebugIdLabel(item)
  return item
}

function createCategoryItem(label, categoryId, options = {}) {
  if (!categoryId) {
    throw new Error("category_id cannot be null.")
  }

  const item = document.createElement("li")
  item.className = "item"
  item.dataset.categoryId = categoryId
  item.innerHTML = `
    ${getCategoryIconMarkup(categoryId)}
    <p></p>
  `
  item.querySelector("p").textContent = label
  setCategoryItemArchivedState(item, options.archived === true)

  upsertDebugIdLabel(item)
  upsertCategoryCount(item, 0, 0)
  syncCategoryItemDraggable(item)
  return item
}

function createAllCategoryItem() {
  const item = document.createElement("li")
  item.className = "item categoryAllItem"
  item.id = ALL_CATEGORIES_ITEM_ID
  item.draggable = false
  item.innerHTML = `
    ${ALL_CATEGORIES_ACTIVE_ICON}
    <p>전체보기</p>
  `
  return item
}

function getTodayDateText() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

function moveDailyLogItemToToday(item, todayDateText = getTodayDateText()) {
  if (!item || isRecurringDailyLogItem(item) || isDailyLogSnapshotItem(item) || item.dataset.isChecked === "true") {
    return false
  }

  const currentLogDate = getItemLogDate(item)
  if (!currentLogDate || currentLogDate >= todayDateText) {
    return false
  }

  dailyLogState.items.push(createDailyLogSnapshotItem(item, currentLogDate))
  item.dataset.logDate = todayDateText
  return true
}

function createDailyLogSnapshotItem(sourceItem, snapshotDateText) {
  const categoryId = sourceItem.dataset.categoryId?.trim() || DEFAULT_CATEGORY_ID
  const categoryName = sourceItem.querySelector(".dailyLogCategoryBadge")?.textContent?.trim() || DEFAULT_CATEGORY_NAME
  const snapshotItem = createDailyLogItem(
    getDailyLogItemTitle(sourceItem),
    categoryId,
    categoryName,
    {
      isSnapshot: true,
      createdAt: getDailyLogItemCreatedAt(sourceItem) || snapshotDateText,
      note: getDailyLogItemNote(sourceItem),
      startDate: getDailyLogItemStartDate(sourceItem),
      endDate: getDailyLogItemEndDate(sourceItem),
      isChecked: false,
      completedAt: ""
    }
  )

  snapshotItem.dataset.logDate = snapshotDateText
  snapshotItem.dataset.logOrder = String(getItemLogOrder(sourceItem))
  return snapshotItem
}

function getRecurringDailyLogKey(item) {
  return getDailyLogItemTitle(item).trim().toLowerCase()
}

function deleteRecurringDailyLogSeries(item) {
  const recurringKey = getRecurringDailyLogKey(item)
  const todayDateText = getTodayDateText()
  if (!recurringKey) {
    dailyLogState.items = dailyLogState.items.filter((candidate) => candidate !== item)
    return
  }

  const nextItems = []
  dailyLogState.items.forEach((candidate) => {
    if (!isRecurringDailyLogItem(candidate) || isDailyLogSnapshotItem(candidate)) {
      if (candidate !== item) {
        nextItems.push(candidate)
      }
      return
    }

    if (getRecurringDailyLogKey(candidate) !== recurringKey) {
      nextItems.push(candidate)
      return
    }

    if (getItemLogDate(candidate) < todayDateText) {
      setRetiredRecurringDailyLogState(candidate, true)
      nextItems.push(candidate)
    }
  })

  dailyLogState.items = nextItems
}

function createTodayRecurringDailyLogs(todayDateText = getTodayDateText()) {
  const recurringItems = getDailyLogItems()
    .filter((item) =>
      isRecurringDailyLogItem(item) &&
      !isDailyLogSnapshotItem(item) &&
      !isRetiredRecurringDailyLogItem(item) &&
      getRecurringDailyLogKey(item)
    )

  if (recurringItems.length === 0) {
    return false
  }

  const todayKeys = new Set(
    recurringItems
      .filter((item) => getItemLogDate(item) === todayDateText)
      .map((item) => getRecurringDailyLogKey(item))
  )
  const createdKeys = new Set()
  let hasChanges = false

  recurringItems
    .slice()
    .sort(compareItemsByDate)
    .forEach((sourceItem) => {
      const key = getRecurringDailyLogKey(sourceItem)
      if (todayKeys.has(key) || createdKeys.has(key)) {
        return
      }

      const item = createDailyLogItem(
        getDailyLogItemTitle(sourceItem),
        RECURRING_CATEGORY_ID,
        getRecurringCategoryName(),
        {
          createdAt: getDailyLogItemCreatedAt(sourceItem) || todayDateText,
          note: getDailyLogItemNote(sourceItem),
          startDate: getDailyLogItemStartDate(sourceItem),
          endDate: getDailyLogItemEndDate(sourceItem),
          isChecked: false,
          completedAt: ""
        }
      )
      item.dataset.logDate = todayDateText
      item.dataset.logOrder = String(dailyLogState.nextOrder)
      dailyLogState.nextOrder += 1
      dailyLogState.items.push(item)
      createdKeys.add(key)
      hasChanges = true
    })

  return hasChanges
}

function carryOverPendingDailyLogsToToday(todayDateText = getTodayDateText()) {
  let hasChanges = false

  dailyLogState.items.forEach((item) => {
    if (moveDailyLogItemToToday(item, todayDateText)) {
      hasChanges = true
    }
  })

  return hasChanges
}

function getDefaultAppData() {
  return {
    version: STORAGE_VERSION,
    userProfile: {
      name: "",
      department: "",
      position: "",
      gmailAddress: "",
      googleAppPassword: "",
      recipientEmail: "",
      dailyReportSavePath: "",
      weeklyReportSavePath: "",
      dailyReportAutoSendTime: "",
      mailBody: "",
      holidayDates: [],
      dailyReportLastAutoSentDate: ""
    },
    categories: [],
    dailyLogs: [],
    dailyReportNotes: {},
    weeklyReportNotes: {},
    weeklyPrintReminderHistory: {},
    holidayCalendar: {
      publicHolidayDates: [],
      lastSyncedAt: "",
      lastSyncedAppVersion: ""
    }
  }
}

function normalizeAppData(rawData) {
  const defaultData = getDefaultAppData()
  if (!rawData || typeof rawData !== "object") {
    return defaultData
  }

  const categories = []
  const seenCategoryIds = new Set([DEFAULT_CATEGORY_ID])
  let recurringCategoryLabel = RECURRING_CATEGORY_NAME
  const userProfile = {
    name: sanitizeProfileField(rawData.userProfile?.name),
    department: sanitizeProfileField(rawData.userProfile?.department),
    position: sanitizeProfileField(rawData.userProfile?.position),
    gmailAddress: sanitizeProfileField(rawData.userProfile?.gmailAddress),
    googleAppPassword: sanitizeProfileField(rawData.userProfile?.googleAppPassword),
    recipientEmail: sanitizeProfileField(rawData.userProfile?.recipientEmail),
    dailyReportSavePath: sanitizeProfileField(rawData.userProfile?.dailyReportSavePath),
    weeklyReportSavePath: sanitizeProfileField(rawData.userProfile?.weeklyReportSavePath),
    dailyReportAutoSendTime: sanitizeProfileField(rawData.userProfile?.dailyReportAutoSendTime),
    mailBody: sanitizeProfileTextAreaField(rawData.userProfile?.mailBody),
    holidayDates: sanitizeHolidayDateList(rawData.userProfile?.holidayDates),
    dailyReportLastAutoSentDate: sanitizeProfileField(rawData.userProfile?.dailyReportLastAutoSentDate)
  }
  const dailyReportNotes = {}

  if (rawData.dailyReportNotes && typeof rawData.dailyReportNotes === "object") {
    Object.entries(rawData.dailyReportNotes).forEach(([dateText, memo]) => {
      const safeDateText = sanitizeDailyLogDateText(dateText)
      if (!safeDateText || !memo || typeof memo !== "object") {
        return
      }

      dailyReportNotes[safeDateText] = {
        keyTasks: sanitizeProfileTextAreaField(memo.keyTasks),
        specialNotes: sanitizeProfileTextAreaField(memo.specialNotes)
      }
    })
  }
  const weeklyReportNotes = {}

  if (rawData.weeklyReportNotes && typeof rawData.weeklyReportNotes === "object") {
    Object.entries(rawData.weeklyReportNotes).forEach(([periodKey, memo]) => {
      const safePeriodKey = String(periodKey ?? "").trim()
      if (!safePeriodKey || !memo || typeof memo !== "object") {
        return
      }

      weeklyReportNotes[safePeriodKey] = {
        groupHomeNews: sanitizeProfileTextAreaField(memo.groupHomeNews),
        specialNotes: sanitizeProfileTextAreaField(memo.specialNotes)
      }
    })
  }

  if (Array.isArray(rawData.categories)) {
    rawData.categories.forEach((category) => {
      const categoryId = category?.id?.trim()
      const label = category?.label?.trim()
      if (
        !categoryId ||
        !label ||
        seenCategoryIds.has(categoryId)
      ) {
        return
      }

      if (categoryId === RECURRING_CATEGORY_ID) {
        recurringCategoryLabel = label
        seenCategoryIds.add(categoryId)
        return
      }

      if (categoryId === DEFAULT_CATEGORY_ID) {
        return
      }

      seenCategoryIds.add(categoryId)
      categories.push({
        id: categoryId,
        label,
        archived: category?.archived === true
      })
    })
  }

  categories.unshift({
    id: RECURRING_CATEGORY_ID,
    label: recurringCategoryLabel,
    archived: false
  })
  categories.push({
    id: DEFAULT_CATEGORY_ID,
    label: DEFAULT_CATEGORY_NAME,
    archived: false
  })

  const validCategoryIds = new Set(categories.map((category) => category.id))
  const dailyLogs = Array.isArray(rawData.dailyLogs)
    ? rawData.dailyLogs
      .map((dailyLog, index) => {
        const title = dailyLog?.title?.trim()
        if (!title) {
          return null
        }

        const categoryId = dailyLog?.categoryId?.trim()
        const logDate = sanitizeDailyLogDateText(dailyLog?.logDate?.trim?.() ?? "") || getTodayDateText()
        const parsedOrder = Number(dailyLog?.logOrder)
        const logOrder = Number.isFinite(parsedOrder) ? parsedOrder : index + 1

        return {
          title,
          categoryId: validCategoryIds.has(categoryId) ? categoryId : DEFAULT_CATEGORY_ID,
          createdAt: sanitizeDailyLogDateText(dailyLog?.createdAt?.trim?.() ?? "") || logDate,
          logDate,
          logOrder,
          isSnapshot: dailyLog?.isSnapshot === true,
          recurringRetired: dailyLog?.recurringRetired === true,
          isChecked: dailyLog?.isChecked === true,
          note: typeof dailyLog?.note === "string" ? dailyLog.note : "",
          startDate: sanitizeDailyLogDateText(dailyLog?.startDate?.trim?.() ?? ""),
          endDate: sanitizeDailyLogDateText(dailyLog?.endDate?.trim?.() ?? ""),
          completedAt: dailyLog?.isChecked === true
            ? sanitizeDailyLogDateText(dailyLog?.completedAt?.trim?.() ?? "") ||
              sanitizeDailyLogDateText(dailyLog?.endDate?.trim?.() ?? "") ||
              logDate
            : ""
        }
      })
      .filter(Boolean)
    : []

  return {
    version: STORAGE_VERSION,
    userProfile,
    categories,
    dailyLogs,
    dailyReportNotes,
    weeklyReportNotes,
    weeklyPrintReminderHistory: normalizeWeeklyPrintReminderHistory(rawData.weeklyPrintReminderHistory),
    holidayCalendar: normalizeHolidayCalendar(rawData.holidayCalendar)
  }
}

function applyAppDataToDom(appData) {
  const categoryList = document.querySelector("#categories > .itemList")
  const groupsContainer = getDailyLogGroupsContainer()
  if (!categoryList || !groupsContainer) {
    writeStartupDebugLog("applyAppDataToDom:missing-target", {
      hasCategoryList: Boolean(categoryList),
      hasGroupsContainer: Boolean(groupsContainer)
    })
    return
  }

  const safeData = normalizeAppData(appData)
  writeStartupDebugLog("applyAppDataToDom:start", {
    categoryCount: safeData.categories.length,
    dailyLogCount: safeData.dailyLogs.length
  })
  setUserProfile(safeData.userProfile)
  dailyReportMemoState.notesByDate = { ...safeData.dailyReportNotes }
  weeklyReportMemoState.notesByPeriod = { ...safeData.weeklyReportNotes }
  setWeeklyPrintReminderHistory(safeData.weeklyPrintReminderHistory)
  setHolidayCalendar(safeData.holidayCalendar)
  const categoryNameById = new Map(
    safeData.categories.map((category) => [category.id, category.label])
  )

  const categoryFragment = document.createDocumentFragment()
  const archivedCategoryFragment = document.createDocumentFragment()
  categoryFragment.append(createAllCategoryItem())
  safeData.categories.forEach((category) => {
    const item = createCategoryItem(category.label, category.id, {
      archived: category.archived === true
    })
    if (category.archived === true && !isRecurringCategoryId(category.id) && category.id !== DEFAULT_CATEGORY_ID) {
      archivedCategoryFragment.append(item)
      return
    }

    categoryFragment.append(item)
  })
  categoryList.replaceChildren(categoryFragment)
  getArchivedCategoryList()?.replaceChildren(archivedCategoryFragment)
  setArchivedCategoriesExpanded(false)
  reorderCategoryListItems()

  const groupsFragment = document.createDocumentFragment()
  const groupsByDate = new Map()
  safeData.dailyLogs
    .slice()
    .sort((left, right) => {
      const dateCompare = right.logDate.localeCompare(left.logDate)
      if (dateCompare !== 0) {
        return dateCompare
      }

      return right.logOrder - left.logOrder
    })
    .forEach((dailyLog) => {
      let list = groupsByDate.get(dailyLog.logDate)
      if (!list) {
        const { group, list: nextList } = createDailyLogGroup(dailyLog.logDate)
        groupsByDate.set(dailyLog.logDate, nextList)
        groupsFragment.append(group)
        list = nextList
      }

      const item = createDailyLogItem(
        dailyLog.title,
        dailyLog.categoryId,
        categoryNameById.get(dailyLog.categoryId) ?? DEFAULT_CATEGORY_NAME,
        {
          isSnapshot: dailyLog.isSnapshot,
          recurringRetired: dailyLog.recurringRetired,
          createdAt: dailyLog.createdAt,
          note: dailyLog.note,
          startDate: dailyLog.startDate,
          endDate: dailyLog.endDate,
          isChecked: dailyLog.isChecked,
          completedAt: dailyLog.completedAt
        }
      )
      item.dataset.logDate = dailyLog.logDate
      item.dataset.logOrder = String(dailyLog.logOrder)
      list.append(item)
    })

  groupsContainer.replaceChildren(groupsFragment)
  writeStartupDebugLog("applyAppDataToDom:end", {
    renderedGroups: groupsByDate.size,
    renderedItems: safeData.dailyLogs.length
  })
}

function serializeAppData() {
  const categories = getAllCategoryItems()
    .map((item) => {
      const id = item.dataset.categoryId?.trim()
      const label = getCategoryLabel(item)
      if (!id || !label || id === DEFAULT_CATEGORY_ID) {
        return null
      }

      return {
        id,
        label,
        archived: isRecurringCategoryId(id) ? false : isArchivedCategoryItem(item)
      }
    })
    .filter(Boolean)

  const dailyLogs = getDailyLogItems()
    .slice()
    .sort(compareItemsByDate)
    .map((item) => ({
      title: getDailyLogItemTitle(item),
      categoryId: item.dataset.categoryId?.trim() || DEFAULT_CATEGORY_ID,
      createdAt: getDailyLogItemCreatedAt(item) || getItemLogDate(item) || getTodayDateText(),
      logDate: getItemLogDate(item) || getTodayDateText(),
      logOrder: getItemLogOrder(item),
      isSnapshot: isDailyLogSnapshotItem(item),
      recurringRetired: isRetiredRecurringDailyLogItem(item),
      isChecked: item.dataset.isChecked === "true",
      note: getDailyLogItemNote(item),
      startDate: getDailyLogItemStartDate(item),
      endDate: getDailyLogItemEndDate(item),
      completedAt: getDailyLogItemCompletedAt(item)
    }))

  return {
    version: STORAGE_VERSION,
    userProfile: {
      name: userProfileState.name,
      department: userProfileState.department,
      position: userProfileState.position,
      gmailAddress: userProfileState.gmailAddress,
      googleAppPassword: userProfileState.googleAppPassword,
      recipientEmail: userProfileState.recipientEmail,
      dailyReportSavePath: userProfileState.dailyReportSavePath,
      weeklyReportSavePath: userProfileState.weeklyReportSavePath,
      dailyReportAutoSendTime: userProfileState.dailyReportAutoSendTime,
      mailBody: userProfileState.mailBody,
      holidayDates: [...userProfileState.holidayDates],
      dailyReportLastAutoSentDate: userProfileState.dailyReportLastAutoSentDate
    },
    categories,
    dailyLogs,
    dailyReportNotes: { ...dailyReportMemoState.notesByDate },
    weeklyReportNotes: { ...weeklyReportMemoState.notesByPeriod },
    weeklyPrintReminderHistory: { ...weeklyPrintReminderState.historyByWeek },
    holidayCalendar: {
      publicHolidayDates: [...holidayCalendarState.publicHolidayDates],
      lastSyncedAt: holidayCalendarState.lastSyncedAt,
      lastSyncedAppVersion: holidayCalendarState.lastSyncedAppVersion
    }
  }
}

function persistAppData() {
  if (!window.appStorage?.save) {
    return Promise.resolve()
  }

  const data = serializeAppData()
  persistQueue = persistQueue
    .catch(() => undefined)
    .then(() => window.appStorage.save(data))
    .catch((error) => {
      console.error("Failed to save app data.", error)
    })

  return persistQueue
}

async function loadAppData() {
  if (!window.appStorage?.load) {
    writeStartupDebugLog("loadAppData:no-storage")
    return getDefaultAppData()
  }

  try {
    const rawData = await window.appStorage.load()
    writeStartupDebugLog("loadAppData:loaded", {
      hasData: Boolean(rawData),
      categoryCount: Array.isArray(rawData?.categories) ? rawData.categories.length : -1,
      dailyLogCount: Array.isArray(rawData?.dailyLogs) ? rawData.dailyLogs.length : -1
    })
    return normalizeAppData(rawData)
  } catch (error) {
    console.error("Failed to load app data.", error)
    writeStartupDebugLog("loadAppData:error", {
      error: error?.message || String(error)
    })
    return getDefaultAppData()
  }
}

function initializeApplyPeriod() {
  const applyPeriod = document.querySelector(".applyPeriod")
  if (!applyPeriod) {
    return
  }

  const { startDate, endDate } = getWeeklyReportDateRange()

  const formatter = new Intl.DateTimeFormat("ko-KR", {
    month: "long",
    day: "numeric"
  })

  const startYear = `${startDate.getFullYear()}년`
  const endYear = `${endDate.getFullYear()}년`

  applyPeriod.textContent =
    startYear === endYear
      ? `업무 주간: ${startYear} ${formatter.format(startDate)} - ${formatter.format(endDate)}`
      : `업무 주간: ${startYear} ${formatter.format(startDate)} - ${endYear} ${formatter.format(endDate)}`
}

function getTodayMessageByHour(hour) {
  if (hour === 9) {
    return "안녕하세요. 좋은 아침입니다."
  }

  if (hour >= 10 && hour <= 11) {
    return "곧 점심시간입니다."
  }

  if (hour >= 12 && hour <= 16) {
    return "오후에도 화이팅입니다"
  }

  if (hour === 17) {
    return "퇴근 전에 보고서를 체크해주세요."
  }

  return "LC Daily Report"
}

function initializeTodayMessage() {
  const todayMessage = document.querySelector("#today_message")
  if (!todayMessage) {
    return
  }

  todayMessage.textContent = getTodayMessageByHour(new Date().getHours())
}

function updateAppWidthIndicator() {
  const indicator = document.querySelector("#appWidthIndicator")
  if (!indicator) {
    return
  }

  indicator.textContent = `앱 가로 크기: ${window.innerWidth}px`
}

function bindAppWidthIndicator() {
  updateAppWidthIndicator()
  window.addEventListener("resize", updateAppWidthIndicator)
}

function getRandomQuote(quotes) {
  if (!Array.isArray(quotes) || quotes.length === 0) {
    return null
  }

  const index = Math.floor(Math.random() * quotes.length)
  return quotes[index] ?? null
}

async function loadFooterQuote() {
  const quoteText = document.querySelector("#footerQuoteText")
  const quoteAuthor = document.querySelector("#footerQuoteAuthor")
  if (!quoteText || !quoteAuthor) {
    return
  }

  try {
    const rawData = await window.appQuotes?.load?.()
    const quotes = Array.isArray(rawData?.quotes)
      ? rawData.quotes.filter((quote) => typeof quote?.text === "string" && quote.text.trim())
      : []
    const selectedQuote = getRandomQuote(quotes)

    if (!selectedQuote) {
      quoteText.textContent = "오늘의 명언: 데이터 파일에 문구를 추가해 주세요."
      quoteAuthor.textContent = ""
      return
    }

    quoteText.textContent = `오늘의 명언: ${selectedQuote.text.trim()}`
    quoteAuthor.textContent = selectedQuote.author?.trim() ? `- ${selectedQuote.author.trim()}` : ""
  } catch (_error) {
    quoteText.textContent = "오늘의 명언: 데이터를 불러오지 못했습니다."
    quoteAuthor.textContent = ""
  }
}

function initializeCategories() {
  const categoryItems = getAllCategoryItems()
  const inboxItem = categoryItems.find((item) => item.dataset.categoryId?.trim() === DEFAULT_CATEGORY_ID)

  if (!inboxItem) {
    throw new Error("Default category is required.")
  }

  inboxItem.dataset.categoryId = DEFAULT_CATEGORY_ID

  const categoryMap = new Map()
  categoryItems.forEach((item) => {
    const label = getCategoryLabel(item)
    let categoryId

    if (item === inboxItem) {
      categoryId = ensureCategoryId(item, DEFAULT_CATEGORY_ID)
    } else if (isRecurringCategoryItem(item)) {
      categoryId = ensureCategoryId(item, RECURRING_CATEGORY_ID)
    } else {
      categoryId = item.dataset.categoryId?.trim()
      if (!categoryId) {
        throw new Error("Existing categories must define category_id.")
      }
    }

    categoryMap.set(categoryId, label)
  })

  return {
    categoryMap,
    recurringId: RECURRING_CATEGORY_ID,
    recurringName: categoryMap.get(RECURRING_CATEGORY_ID) ?? RECURRING_CATEGORY_NAME,
    inboxId: DEFAULT_CATEGORY_ID,
    inboxName: DEFAULT_CATEGORY_NAME
  }
}

function normalizeDailyLogItems(categoryMap, inboxId, inboxName) {
  const items = Array.from(document.querySelectorAll("#dailyLogGroups .item"))
  items.forEach((item) => {
    const currentId = item.dataset.categoryId?.trim()
    const safeId = currentId && categoryMap.has(currentId) ? currentId : inboxId
    syncDailyLogCategory(item, safeId, categoryMap.get(safeId) ?? inboxName)

    const checkbox = item.querySelector('input[type="checkbox"]')
    const isChecked =
      item.dataset.isChecked?.trim() === "true" ||
      checkbox?.checked === true
    syncDailyLogCheckedState(item, isChecked)
  })
}

function initializeDailyLogMetadata() {
  const groups = Array.from(document.querySelectorAll("#dailyLogGroups > .dailyLogGroup"))
  const itemsInOrder = []

  groups.forEach((group) => {
    const label = group.querySelector(":scope > p")?.textContent?.trim() ?? ""
    const items = Array.from(group.querySelectorAll(":scope > .itemList > .item"))

    items.forEach((item) => {
      if (label) {
        item.dataset.logDate = label
      }
      itemsInOrder.push(item)
    })
  })

  const total = itemsInOrder.length
  itemsInOrder.forEach((item, index) => {
    if (!item.dataset.logOrder?.trim()) {
      item.dataset.logOrder = String(total - index)
    }
  })

  dailyLogState.items = itemsInOrder
  dailyLogState.nextOrder = total + 1
  writeStartupDebugLog("initializeDailyLogMetadata", {
    totalItems: total
  })
}

function getDailyLogItems() {
  return dailyLogState.items.slice()
}

function getItemLogDate(item) {
  return item.dataset.logDate?.trim() ?? ""
}

function getItemLogOrder(item) {
  return Number(item.dataset.logOrder ?? "0")
}

function compareItemsByDate(a, b) {
  const dateCompare = getItemLogDate(b).localeCompare(getItemLogDate(a))
  if (dateCompare !== 0) {
    return dateCompare
  }

  return getItemLogOrder(b) - getItemLogOrder(a)
}

function compareItemsByOldestDate(a, b) {
  const dateCompare = getItemLogDate(a).localeCompare(getItemLogDate(b))
  if (dateCompare !== 0) {
    return dateCompare
  }

  return getItemLogOrder(a) - getItemLogOrder(b)
}

function compareDailyLogDisplayItems(a, b) {
  const aRecurring = isRecurringDailyLogItem(a)
  const bRecurring = isRecurringDailyLogItem(b)
  if (aRecurring !== bRecurring) {
    return aRecurring ? -1 : 1
  }

  return getItemLogOrder(b) - getItemLogOrder(a)
}

function compareTodayDailyLogDisplayItems(a, b) {
  const aRecurring = isRecurringDailyLogItem(a)
  const bRecurring = isRecurringDailyLogItem(b)
  if (aRecurring !== bRecurring) {
    return aRecurring ? -1 : 1
  }

  const aInbox = isInboxCategoryItem(a)
  const bInbox = isInboxCategoryItem(b)
  if (aInbox !== bInbox) {
    return aInbox ? 1 : -1
  }

  return getItemLogOrder(a) - getItemLogOrder(b)
}

function compareArchivedDailyLogDisplayItems(a, b) {
  return getItemLogOrder(a) - getItemLogOrder(b)
}

function createDailyLogGroup(label) {
  const group = document.createElement("div")
  group.className = "dailyLogGroup"

  const heading = document.createElement("p")
  heading.textContent = label

  const list = document.createElement("ul")
  list.className = "itemList"

  group.append(heading, list)

  return {
    group,
    list
  }
}

function syncDailyLogItemRenderState(item, todayDateText = getTodayDateText()) {
  const isReadOnly = isReadOnlyDailyLogItem(item, todayDateText)
  const isScheduled = isFutureStartDailyLogItem(item, todayDateText)
  item.classList.toggle("itemReadOnly", isReadOnly)
  item.classList.toggle("itemScheduled", isScheduled)
  item.draggable = !isReadOnly

  const checkbox = item.querySelector('input[type="checkbox"]')
  if (checkbox) {
    checkbox.disabled = isReadOnly
  }

  upsertDailyLogScheduleBadge(item, todayDateText)
}

function getContextMenu() {
  return document.querySelector("#appContextMenu")
}

function hideContextMenu() {
  const contextMenu = getContextMenu()
  if (!contextMenu) {
    return
  }

  contextMenu.hidden = true
  contextMenu.replaceChildren()
  contextMenuState.targetType = null
  contextMenuState.targetElement = null
}

function showContextMenu(left, top, actions, context) {
  const contextMenu = getContextMenu()
  if (!contextMenu) {
    return
  }

  const fragment = document.createDocumentFragment()
  actions.forEach(({ label, action, danger = false, disabled = false }) => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = "contextMenuButton"
    button.dataset.action = action
    button.disabled = disabled
    if (danger) {
      button.classList.add("contextMenuDanger")
    }
    button.textContent = label
    fragment.append(button)
  })

  contextMenu.replaceChildren(fragment)
  contextMenu.hidden = false
  contextMenu.style.left = "0px"
  contextMenu.style.top = "0px"

  contextMenuState.targetType = context.targetType
  contextMenuState.targetElement = context.targetElement
  contextMenuState.categoryMap = context.categoryMap
  contextMenuState.inboxId = context.inboxId
  contextMenuState.inboxName = context.inboxName

  const rect = contextMenu.getBoundingClientRect()
  const maxLeft = Math.max(8, window.innerWidth - rect.width - 8)
  const maxTop = Math.max(8, window.innerHeight - rect.height - 8)
  contextMenu.style.left = `${Math.min(left, maxLeft)}px`
  contextMenu.style.top = `${Math.min(top, maxTop)}px`
}

function getDailyLogItemTitle(item) {
  return item.querySelector(".dailyLogTitle")?.textContent?.trim() ?? ""
}

function renameDailyLogItem(item) {
  const currentTitle = getDailyLogItemTitle(item)
  const titleNode = item.querySelector(".dailyLogTitle")
  if (!titleNode) {
    return
  }

  openTextEditModal({
    title: "업무 수정",
    fieldLabel: "업무 이름",
    placeholder: "업무 이름을 입력하세요",
    hint: "이름 수정 후 <strong>Enter</strong>를 누르면 저장됩니다.",
    initialValue: currentTitle,
    onSubmit: (nextTitle) => {
      titleNode.textContent = nextTitle
      if (dailyLogDetailState.selectedItem === item) {
        syncDailyLogDetailPanelFromItem(item)
      }
      persistAppData()
    }
  })
}

function deleteDailyLogItem(item) {
  const currentTitle = getDailyLogItemTitle(item)
  const isRecurringItem = isRecurringDailyLogItem(item)
  openConfirmModal({
    title: "업무 삭제",
    message: isRecurringItem
      ? `'${currentTitle}' 상시 업무를 삭제할까요?\n삭제 후에는 이후 날짜에도 다시 생성되지 않습니다.`
      : `'${currentTitle}' 업무를 삭제할까요?`,
    submitLabel: "삭제",
    onSubmit: () => {
      if (dailyLogDetailState.selectedItem === item) {
        closeDailyLogDetailPanel()
      }

      if (isRecurringItem) {
        deleteRecurringDailyLogSeries(item)
      } else {
        dailyLogState.items = dailyLogState.items.filter((candidate) => candidate !== item)
      }

      renderDailyLog()
      persistAppData()
    }
  })
}

function changeDailyLogItemCategory(item, nextCategoryId, categoryMap) {
  const categoryId = nextCategoryId?.trim()
  if (!item || !categoryId || !categoryMap?.has(categoryId)) {
    return
  }

  syncDailyLogCategory(item, categoryId, categoryMap.get(categoryId))
  renderDailyLog()
  persistAppData()
}

function openDailyLogCategorySelectModal(item, categoryMap, title = "카테고리 변경", focusCategoryId = null) {
  const currentCategoryId = item?.dataset.categoryId?.trim()
  const { modal, title: titleNode, hint, list } = getCategorySelectModalElements()
  if (!item || !categoryMap || !modal || !titleNode || !hint || !list) {
    return
  }

  closeTextEditModal()
  closeConfirmModal()
  closeInfoModal()
  hideContextMenu()

  const categoryItems = getAllCategoryItems()
  const fragment = document.createDocumentFragment()

  categoryItems.forEach((categoryItem) => {
    const categoryId = categoryItem.dataset.categoryId?.trim()
    const label = getCategoryLabel(categoryItem)
    if (!categoryId || !label) {
      return
    }

    const optionButton = document.createElement("button")
    optionButton.type = "button"
    optionButton.className = "categorySelectOption"
    optionButton.dataset.categoryId = categoryId
    if (categoryId === currentCategoryId) {
      optionButton.classList.add("categorySelectOptionCurrent")
    }

    const optionLabel = document.createElement("span")
    optionLabel.className = "categorySelectOptionLabel"
    optionLabel.textContent = label

    const optionMeta = document.createElement("span")
    optionMeta.className = "categorySelectOptionMeta"
    optionMeta.textContent = categoryId === currentCategoryId
      ? "현재"
      : isArchivedCategoryItem(categoryItem)
        ? "보관됨"
        : "선택"

    optionButton.append(optionLabel, optionMeta)
    fragment.append(optionButton)
  })

  titleNode.textContent = title
  hint.textContent = "업무를 이동할 카테고리를 선택하세요."
  list.replaceChildren(fragment)
  categorySelectModalState.returnFocusElement = item.querySelector(".dailyLogCategoryBadge")
  categorySelectModalState.targetItem = item
  categorySelectModalState.categoryMap = categoryMap
  categorySelectModalState.title = title
  categorySelectModalState.submitHandler = (selectedCategoryId) => {
    changeDailyLogItemCategory(item, selectedCategoryId, categoryMap)
  }

  setCategorySelectModalVisibility(true)
  scheduleElementFocus(
    list.querySelector(`.categorySelectOption[data-category-id="${focusCategoryId ?? currentCategoryId}"]`) ??
    list.querySelector(".categorySelectOptionCurrent") ??
    list.querySelector(".categorySelectOption")
  )
}

function renameCategoryItem(item, categoryMap) {
  const categoryId = item.dataset.categoryId?.trim()
  if (!categoryId || categoryId === DEFAULT_CATEGORY_ID) {
    return
  }

  const currentLabel = getCategoryLabel(item)
  const labelNode = item.querySelector("p")
  if (!labelNode) {
    return
  }

  openTextEditModal({
    title: "카테고리 수정",
    fieldLabel: "카테고리 이름",
    placeholder: "카테고리 이름을 입력하세요",
    hint: "이름 수정 후 <strong>Enter</strong>를 누르면 저장됩니다.",
    initialValue: currentLabel,
    onSubmit: (nextLabel) => {
      labelNode.textContent = nextLabel
      upsertDebugIdLabel(item)
      categoryMap.set(categoryId, nextLabel)
      dailyLogState.items.forEach((dailyLogItem) => {
        if (dailyLogItem.dataset.categoryId === categoryId) {
          syncDailyLogCategory(dailyLogItem, categoryId, nextLabel)
        }
      })
      renderDailyLog()
      persistAppData()
    }
  })
}

function deleteCategoryItem(item, categoryMap, inboxId, inboxName) {
  const categoryId = item.dataset.categoryId?.trim()
  if (!categoryId || categoryId === inboxId || isRecurringCategoryId(categoryId)) {
    return
  }

  const currentLabel = getCategoryLabel(item)
  openConfirmModal({
    title: "카테고리 삭제",
    message: `'${currentLabel}' 카테고리를 삭제할까요?\n해당 업무는 ${inboxName}(으)로 이동합니다.`,
    submitLabel: "삭제",
    onSubmit: () => {
      categoryMap.delete(categoryId)
      item.remove()

      if (dailyLogState.selectedCategoryId === categoryId) {
        dailyLogState.selectedCategoryId = null
        setActiveCategory(getAllCategoriesItem())
      }

      dailyLogState.items.forEach((dailyLogItem) => {
        if (dailyLogItem.dataset.categoryId === categoryId) {
          syncDailyLogCategory(dailyLogItem, inboxId, inboxName)
        }
      })
      renderDailyLog()
      persistAppData()
    }
  })
}

function archiveCategoryItem(item) {
  const categoryId = item?.dataset.categoryId?.trim()
  if (!categoryId || categoryId === DEFAULT_CATEGORY_ID || isRecurringCategoryId(categoryId)) {
    return
  }

  setCategoryItemArchivedState(item, true)
  moveCategoryItemToArchivedList(item)
  if (dailyLogState.selectedCategoryId === categoryId) {
    setArchivedCategoriesExpanded(true)
    setActiveCategory(item)
  }
  renderDailyLog()
  persistAppData()
}

function restoreCategoryItem(item) {
  const categoryId = item?.dataset.categoryId?.trim()
  if (!categoryId || categoryId === DEFAULT_CATEGORY_ID || isRecurringCategoryId(categoryId)) {
    return
  }

  setCategoryItemArchivedState(item, false)
  moveCategoryItemToActiveList(item)
  renderDailyLog()
  persistAppData()
}

function handleContextMenuAction(action) {
  const {
    targetType,
    targetElement,
    categoryMap,
    inboxId,
    inboxName
  } = contextMenuState

  if (!targetElement) {
    return
  }

  if (targetType === "daily-log") {
    if (isReadOnlyDailyLogItem(targetElement)) {
      return
    }

    if (action === "complete") {
      syncDailyLogCheckedState(targetElement, true)
      persistAppData()
      return
    }

    if (action === "change-category" && categoryMap) {
      openDailyLogCategorySelectModal(targetElement, categoryMap)
      return
    }

    if (action === "edit") {
      renameDailyLogItem(targetElement)
      return
    }

    if (action === "delete") {
      deleteDailyLogItem(targetElement)
    }
    return
  }

  if (targetType === "category" && categoryMap) {
    if (action === "edit") {
      renameCategoryItem(targetElement, categoryMap)
      return
    }

    if (action === "archive") {
      archiveCategoryItem(targetElement)
      return
    }

    if (action === "restore") {
      restoreCategoryItem(targetElement)
      return
    }

    if (action === "delete") {
      deleteCategoryItem(targetElement, categoryMap, inboxId, inboxName)
    }
  }
}

function renderDailyLog() {
  const container = getDailyLogGroupsContainer()
  if (!container) {
    writeStartupDebugLog("renderDailyLog:no-container")
    return
  }

  const todayDateText = getTodayDateText()
  carryOverPendingDailyLogsToToday(todayDateText)
  createTodayRecurringDailyLogs(todayDateText)
  const allItems = getDailyLogItems()
  const isArchivedSelection = Boolean(
    dailyLogState.selectedCategoryId && isArchivedCategoryId(dailyLogState.selectedCategoryId)
  )
  const visibleItems = dailyLogState.selectedCategoryId
    ? allItems.filter((item) => item.dataset.categoryId === dailyLogState.selectedCategoryId)
    : allItems

  const fragment = document.createDocumentFragment()
  const itemsByDate = new Map()

  visibleItems
    .slice()
    .sort(isArchivedSelection ? compareItemsByOldestDate : compareItemsByDate)
    .forEach((item) => {
      const logDate = getItemLogDate(item) || "날짜 없음"
      if (!itemsByDate.has(logDate)) {
        itemsByDate.set(logDate, [])
      }

      itemsByDate.get(logDate).push(item)
    })

  itemsByDate.forEach((dateItems, dateLabel) => {
    const displayLabel = dateLabel === todayDateText ? "오늘" : dateLabel
    const { group, list } = createDailyLogGroup(displayLabel)
    if (dateLabel === todayDateText) {
      group.classList.add("dailyLogGroupToday")
    }
    const sortedDateItems = dateItems
      .slice()
      .sort(isArchivedSelection
        ? compareArchivedDailyLogDisplayItems
        : dateLabel === todayDateText
          ? compareTodayDailyLogDisplayItems
          : compareDailyLogDisplayItems)

    sortedDateItems.forEach((item) => {
      syncDailyLogItemRenderState(item, todayDateText)
      list.append(item)
    })

    fragment.append(group)
  })

  container.replaceChildren(fragment)
  updateDailyLogEmptyState()
  updateCategoryCounts()
  syncDailyLogDetailPanelState()
  writeStartupDebugLog("renderDailyLog:end", {
    selectedCategoryId: dailyLogState.selectedCategoryId,
    totalItems: allItems.length,
    visibleItems: visibleItems.length,
    renderedGroups: itemsByDate.size
  })
}

function applyCategoryFilter(selectedCategoryId) {
  dailyLogState.selectedCategoryId = selectedCategoryId || null
  renderDailyLog()
}

function setActiveCategory(selectedItem) {
  const categoryItems = document.querySelectorAll("#categories .itemList .item")
  categoryItems.forEach((item) => {
    const isActive = item === selectedItem
    item.classList.toggle("categoryItemActive", isActive)
    item.setAttribute("aria-pressed", String(isActive))
  })

  updateAllCategoriesIcon(selectedItem?.id === ALL_CATEGORIES_ITEM_ID)
}

function bindCategoryFiltering() {
  const categoryPanel = getCategoryPanel()
  if (!categoryPanel) {
    return
  }

  categoryPanel.addEventListener("click", (event) => {
    const item = event.target.closest(".item")
    if (!item) {
      return
    }

    if (!item.closest(".itemList")) {
      return
    }

    if (item.id === ALL_CATEGORIES_ITEM_ID) {
      setActiveCategory(item)
      applyCategoryFilter(null)
      return
    }

    const isAlreadyActive = item.classList.contains("categoryItemActive")
    const categoryId = item.dataset.categoryId?.trim()
    if (!categoryId) {
      return
    }

    if (isAlreadyActive) {
      setActiveCategory(getAllCategoriesItem())
      applyCategoryFilter(null)
      return
    }

    setActiveCategory(item)
    applyCategoryFilter(categoryId)
  })
}

function bindCategoryReordering() {
  const categoryList = getCategoryList()
  if (!categoryList) {
    return
  }

  let draggedCategoryItem = null
  let activeDropTarget = null
  let activeDropPosition = null

  const clearDropTarget = () => {
    if (!activeDropTarget) {
      return
    }

    activeDropTarget.classList.remove("dropTargetBefore", "dropTargetAfter")
    activeDropTarget = null
    activeDropPosition = null
  }

  const setDropTarget = (target, position) => {
    if (activeDropTarget === target && activeDropPosition === position) {
      return
    }

    clearDropTarget()
    activeDropTarget = target
    activeDropPosition = position
    activeDropTarget.classList.add(position === "after" ? "dropTargetAfter" : "dropTargetBefore")
  }

  const getDropTarget = (event) => {
    const target = event.target.closest(".item[data-category-id]")
    if (!target || !categoryList.contains(target) || target === draggedCategoryItem) {
      return null
    }

    if (!isReorderableCategoryItem(target) && !isInboxCategoryItem(target)) {
      return null
    }

    return target
  }

  categoryList.addEventListener("dragstart", (event) => {
    const item = event.target.closest(".item[data-category-id]")
    if (!isReorderableCategoryItem(item)) {
      return
    }

    draggedCategoryItem = item
    item.classList.add("dragging")

    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move"
      event.dataTransfer.setData("text/category-order", item.dataset.categoryId ?? "")
    }
  })

  categoryList.addEventListener("dragend", () => {
    if (draggedCategoryItem) {
      draggedCategoryItem.classList.remove("dragging")
    }

    draggedCategoryItem = null
    clearDropTarget()
  })

  categoryList.addEventListener("dragover", (event) => {
    if (!draggedCategoryItem) {
      return
    }

    const target = getDropTarget(event)
    if (!target) {
      return
    }

    event.preventDefault()
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "move"
    }

    if (isInboxCategoryItem(target)) {
      setDropTarget(target, "before")
      return
    }

    const rect = target.getBoundingClientRect()
    const dropPosition = event.clientY < rect.top + rect.height / 2 ? "before" : "after"
    setDropTarget(target, dropPosition)
  })

  categoryList.addEventListener("dragleave", (event) => {
    if (!draggedCategoryItem || !activeDropTarget) {
      return
    }

    const nextTarget = event.relatedTarget
    if (nextTarget && activeDropTarget.contains(nextTarget)) {
      return
    }

    if (nextTarget && categoryList.contains(nextTarget)) {
      return
    }

    clearDropTarget()
  })

  categoryList.addEventListener("drop", (event) => {
    if (!draggedCategoryItem) {
      return
    }

    const target = getDropTarget(event)
    if (!target) {
      clearDropTarget()
      return
    }

    event.preventDefault()

    if (isInboxCategoryItem(target) || activeDropPosition !== "after") {
      categoryList.insertBefore(draggedCategoryItem, target)
    } else {
      categoryList.insertBefore(draggedCategoryItem, target.nextSibling)
    }

    reorderCategoryListItems()
    persistAppData()

    draggedCategoryItem.classList.remove("dragging")
    draggedCategoryItem = null
    clearDropTarget()
  })
}

function bindDailyLogCategoryDnD(categoryMap) {
  const dailyLog = document.querySelector("#dailyLog")
  const categoryList = getCategoryList()

  if (!dailyLog || !categoryList) {
    return
  }

  let draggedItem = null
  let activeDropTarget = null

  const clearDropTarget = () => {
    if (!activeDropTarget) {
      return
    }

    activeDropTarget.classList.remove("dropTargetActive")
    activeDropTarget = null
  }

  const setDropTarget = (target) => {
    if (activeDropTarget === target) {
      return
    }

    clearDropTarget()
    activeDropTarget = target
    activeDropTarget.classList.add("dropTargetActive")
  }

  dailyLog.addEventListener("dragstart", (event) => {
    const item = event.target.closest(".item")
    if (!item) {
      return
    }

    draggedItem = item
    item.classList.add("dragging")

    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move"
      event.dataTransfer.setData("text/plain", item.dataset.categoryId ?? "")
    }
  })

  dailyLog.addEventListener("dragend", () => {
    if (draggedItem) {
      draggedItem.classList.remove("dragging")
    }

    draggedItem = null
    clearDropTarget()
  })

  categoryList.addEventListener("dragover", (event) => {
    const target = event.target.closest(".item")
    if (!draggedItem || !target) {
      return
    }

    event.preventDefault()
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "move"
    }
    setDropTarget(target)
  })

  categoryList.addEventListener("dragleave", (event) => {
    if (!activeDropTarget) {
      return
    }

    const nextTarget = event.relatedTarget
    if (nextTarget && activeDropTarget.contains(nextTarget)) {
      return
    }

    const closestItem = nextTarget?.closest?.(".item")
    if (closestItem && categoryList.contains(closestItem)) {
      setDropTarget(closestItem)
      return
    }

    clearDropTarget()
  })

  categoryList.addEventListener("drop", (event) => {
    const target = event.target.closest(".item")
    if (!draggedItem || !target) {
      clearDropTarget()
      return
    }

    event.preventDefault()

    const categoryId = target.dataset.categoryId?.trim()
    changeDailyLogItemCategory(draggedItem, categoryId, categoryMap)

    draggedItem.classList.remove("dragging")
    draggedItem = null
    clearDropTarget()
  })
}

function bindDailyLogCheckedState() {
  const dailyLog = document.querySelector("#dailyLog")
  if (!dailyLog) {
    return
  }

  dailyLog.addEventListener("change", (event) => {
    const checkbox = event.target.closest('input[type="checkbox"]')
    if (!checkbox) {
      return
    }

    const item = checkbox.closest(".item")
    if (!item) {
      return
    }

    if (isReadOnlyDailyLogItem(item)) {
      checkbox.checked = item.dataset.isChecked === "true"
      return
    }

    const { movedToToday } = syncDailyLogCheckedState(item, checkbox.checked)
    if (movedToToday) {
      renderDailyLog()
    }
    persistAppData()
  })
}

function bindDailyLogDetailPanel() {
  const dailyLog = document.querySelector("#dailyLog")
  const {
    panel,
    noteInput,
    startDateInput,
    endDateInput,
    closeButton
  } = getDailyLogDetailElements()

  if (!dailyLog || !panel || !noteInput || !startDateInput || !endDateInput || !closeButton) {
    return
  }

  dailyLog.addEventListener("click", (event) => {
    const item = event.target.closest(".item")
    if (!item) {
      return
    }

    if (event.target.closest('.dailyLogCategoryBadge, input[type="checkbox"]')) {
      return
    }

    if (dailyLogDetailState.selectedItem === item) {
      closeDailyLogDetailPanel()
      return
    }

    openDailyLogDetailPanel(item)
  })

  closeButton.addEventListener("click", () => {
    closeDailyLogDetailPanel()
    scheduleElementFocus(getDefaultFocusableElement())
  })

  noteInput.addEventListener("input", () => {
    const selectedItem = dailyLogDetailState.selectedItem
    if (!selectedItem) {
      return
    }

    setDailyLogItemNote(selectedItem, noteInput.value)
    persistAppData()
  })

  startDateInput.addEventListener("change", () => {
    const selectedItem = dailyLogDetailState.selectedItem
    if (!selectedItem) {
      return
    }

    setDailyLogItemStartDate(selectedItem, startDateInput.value)
    startDateInput.value = getDailyLogItemStartDate(selectedItem)
    syncDailyLogItemRenderState(selectedItem)
    persistAppData()
  })

  endDateInput.addEventListener("change", () => {
    const selectedItem = dailyLogDetailState.selectedItem
    if (!selectedItem) {
      return
    }

    setDailyLogItemEndDate(selectedItem, endDateInput.value)
    endDateInput.value = getDailyLogItemEndDate(selectedItem)
    persistAppData()
  })
}

function bindContextMenu(categoryMap, inboxId, inboxName) {
  const dailyLog = document.querySelector("#dailyLog")
  const categoryPanel = getCategoryPanel()
  const contextMenu = getContextMenu()

  if (!dailyLog || !categoryPanel || !contextMenu) {
    return
  }

  dailyLog.addEventListener("contextmenu", (event) => {
    const item = event.target.closest(".item")
    if (!item) {
      hideContextMenu()
      return
    }

    event.preventDefault()
    const isReadOnlyItem = isReadOnlyDailyLogItem(item)
    showContextMenu(
      event.clientX,
      event.clientY,
      [
        { label: "완료", action: "complete", disabled: isReadOnlyItem },
        { label: "카테고리 변경", action: "change-category", disabled: isReadOnlyItem },
        { label: "수정", action: "edit", disabled: isReadOnlyItem },
        { label: "삭제", action: "delete", danger: true, disabled: isReadOnlyItem }
      ],
      {
        targetType: "daily-log",
        targetElement: item,
        categoryMap,
        inboxId,
        inboxName
      }
    )
  })

  categoryPanel.addEventListener("contextmenu", (event) => {
    const item = event.target.closest(".item")
    if (!item || !item.closest(".itemList")) {
      hideContextMenu()
      return
    }

    event.preventDefault()

    const categoryId = item.dataset.categoryId?.trim()
    const isInboxCategory = categoryId === inboxId
    const isRecurringCategory = isRecurringCategoryItem(item)
    const isSystemCategory = !categoryId || isInboxCategory
    const isArchivedCategory = isArchivedCategoryItem(item)
    showContextMenu(
      event.clientX,
      event.clientY,
      [
        { label: "수정", action: "edit", disabled: isSystemCategory },
        {
          label: isArchivedCategory ? "보관 해제" : "보관하기",
          action: isArchivedCategory ? "restore" : "archive",
          disabled: isSystemCategory || isRecurringCategory
        },
        { label: "삭제", action: "delete", danger: true, disabled: isSystemCategory }
      ],
      {
        targetType: "category",
        targetElement: item,
        categoryMap,
        inboxId,
        inboxName
      }
    )
  })

  contextMenu.addEventListener("click", (event) => {
    const button = event.target.closest(".contextMenuButton")
    if (!button || button.disabled) {
      return
    }

    handleContextMenuAction(button.dataset.action ?? "")
    hideContextMenu()
  })

  document.addEventListener("click", (event) => {
    if (!contextMenu.hidden && !contextMenu.contains(event.target)) {
      hideContextMenu()
    }
  })

  document.addEventListener("contextmenu", (event) => {
    if (!event.target.closest("#dailyLog .item, #categories .itemList .item")) {
      hideContextMenu()
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      hideContextMenu()
    }
  })

  window.addEventListener("resize", hideContextMenu)
  window.addEventListener("blur", hideContextMenu)
}

function bindCategoryPanelToggle() {
  const toggleButton = getCategoryToggleButton()
  if (!toggleButton) {
    return
  }

  syncCategoryPanelResponsiveState()

  toggleButton.addEventListener("click", () => {
    if (!isCompactCategoryLayout()) {
      setCategoriesCollapsed(false)
      return
    }

    setCategoriesCollapsed(!categoryPanelState.isCollapsed)
  })

  window.addEventListener("resize", syncCategoryPanelResponsiveState)
}

function openCategoryCreationModal(categoryMap, { onCreated } = {}) {
  const categoryList = document.querySelector("#categories > .itemList")
  if (!categoryList) {
    return
  }

  openTextEditModal({
    title: "카테고리 추가",
    fieldLabel: "카테고리 이름",
    placeholder: "예: 거래처 대응",
    hint: "이름 입력 후 <strong>Enter</strong>를 누르면 카테고리가 생성됩니다.",
    onSubmit: (label) => {
      let categoryId = createCategoryId()
      while (categoryMap.has(categoryId)) {
        categoryId = createCategoryId()
      }

      const item = createCategoryItem(label, categoryId)
      const inboxItem = Array.from(categoryList.querySelectorAll(':scope > .item[data-category-id]'))
        .find((categoryItem) => isInboxCategoryItem(categoryItem))
      categoryList.insertBefore(item, inboxItem ?? null)
      reorderCategoryListItems()
      categoryMap.set(categoryId, label)
      persistAppData()

      if (typeof onCreated === "function") {
        onCreated({ item, categoryId, label })
      }
    }
  })
}

function bindCategoryCreation(categoryMap) {
  const addButton = document.querySelector("#addMajorTaskButton")
  if (!addButton) {
    return
  }

  addButton.addEventListener("click", () => {
    openCategoryCreationModal(categoryMap)
  })
}

function bindArchivedCategoryToggle() {
  const toggleButton = getArchivedCategoryToggleButton()
  if (!toggleButton) {
    return
  }

  setArchivedCategoriesExpanded(false)
  toggleButton.addEventListener("click", () => {
    setArchivedCategoriesExpanded(!archivedCategoryPanelState.isExpanded)
  })
}

function bindCategorySelectModal() {
  const { modal, list, closeButton, cancelButton, addButton } = getCategorySelectModalElements()
  if (!modal || !list || !closeButton || !cancelButton || !addButton) {
    return
  }

  list.addEventListener("click", (event) => {
    const button = event.target.closest(".categorySelectOption")
    if (!button) {
      return
    }

    const selectedCategoryId = button.dataset.categoryId?.trim()
    if (!selectedCategoryId || !categorySelectModalState.submitHandler) {
      return
    }

    const handler = categorySelectModalState.submitHandler
    const returnFocusElement = categorySelectModalState.returnFocusElement
    closeCategorySelectModal()
    handler(selectedCategoryId)
    scheduleElementFocus(returnFocusElement ?? getDefaultFocusableElement())
  })

  closeButton.addEventListener("click", () => {
    const returnFocusElement = categorySelectModalState.returnFocusElement
    closeCategorySelectModal()
    scheduleElementFocus(returnFocusElement ?? getDefaultFocusableElement())
  })

  cancelButton.addEventListener("click", () => {
    const returnFocusElement = categorySelectModalState.returnFocusElement
    closeCategorySelectModal()
    scheduleElementFocus(returnFocusElement ?? getDefaultFocusableElement())
  })

  addButton.addEventListener("click", () => {
    const targetItem = categorySelectModalState.targetItem
    const categoryMap = categorySelectModalState.categoryMap
    const title = categorySelectModalState.title
    if (!targetItem || !categoryMap) {
      return
    }

    openCategoryCreationModal(categoryMap, {
      onCreated: ({ categoryId }) => {
        window.setTimeout(() => {
          openDailyLogCategorySelectModal(targetItem, categoryMap, title, categoryId)
        }, 0)
      }
    })
  })

  modal.addEventListener("click", (event) => {
    if (event.target !== modal) {
      return
    }

    const returnFocusElement = categorySelectModalState.returnFocusElement
    closeCategorySelectModal()
    scheduleElementFocus(returnFocusElement ?? getDefaultFocusableElement())
  })

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || modal.hidden) {
      return
    }

    const returnFocusElement = categorySelectModalState.returnFocusElement
    closeCategorySelectModal()
    scheduleElementFocus(returnFocusElement ?? getDefaultFocusableElement())
  })
}

function bindDailyLogCategoryBadge(categoryMap) {
  const dailyLog = document.querySelector("#dailyLog")
  if (!dailyLog) {
    return
  }

  dailyLog.addEventListener("click", (event) => {
    const badge = event.target.closest(".dailyLogCategoryBadge")
    if (!badge) {
      return
    }

    const item = badge.closest(".item")
    if (!item) {
      return
    }

    if (isReadOnlyDailyLogItem(item)) {
      return
    }

    openDailyLogCategorySelectModal(item, categoryMap, "카테고리 선택")
  })
}

function bindReportPreviewModal() {
  const dailyButton = document.querySelector("#openDailyReportPreviewButton")
  const weeklyButton = document.querySelector("#openWeeklyReportPreviewButton")
  const {
    modal,
    closeButton,
    memoButton,
    saveAndSendButton
  } = getReportPreviewModalElements()
  if (
    !dailyButton ||
    !weeklyButton ||
    !modal ||
    !closeButton ||
    !memoButton ||
    !saveAndSendButton
  ) {
    return
  }

  dailyButton.addEventListener("click", () => {
    openReportPreviewModal({
      title: "일일 보고서 미리보기",
      src: getReportTemplateSrc("daily"),
      reportType: "daily",
      returnFocusElement: dailyButton
    })
  })

  weeklyButton.addEventListener("click", () => {
    openReportPreviewModal({
      title: "주간 보고서 미리보기",
      src: getReportTemplateSrc("weekly"),
      reportType: "weekly",
      returnFocusElement: weeklyButton
    })
  })

  memoButton.addEventListener("click", openReportMemoModal)

  saveAndSendButton.addEventListener("click", async () => {
    if (!reportPreviewState.reportType) {
      return
    }

    setReportPreviewActionStatus("")
    setReportPreviewActionPending(true)

    try {
      await saveAndSendReport(reportPreviewState.reportType)
      const completeMessage = reportPreviewState.reportType === "weekly"
        ? "인쇄가 완료되었습니다."
        : "메일이 전송되었습니다."
      setReportPreviewActionStatus(completeMessage)
    } catch (error) {
      console.error("Failed to save and send report.", error)
      const failureMessage = reportPreviewState.reportType === "weekly"
        ? "저장 및 인쇄에 실패했습니다."
        : "저장 및 발송에 실패했습니다."
      setReportPreviewActionStatus(error?.message || failureMessage)
    } finally {
      setReportPreviewActionPending(false)
    }
  })

  closeButton.addEventListener("click", () => {
    const returnFocusElement = reportPreviewState.returnFocusElement
    closeReportPreviewModal()
    scheduleElementFocus(returnFocusElement ?? getDefaultFocusableElement())
  })

  modal.addEventListener("click", (event) => {
    if (event.target !== modal) {
      return
    }

    const returnFocusElement = reportPreviewState.returnFocusElement
    closeReportPreviewModal()
    scheduleElementFocus(returnFocusElement ?? getDefaultFocusableElement())
  })

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || modal.hidden) {
      return
    }

    const { modal: reportMemoModal } = getReportMemoModalElements()
    if (reportMemoModal && !reportMemoModal.hidden) {
      return
    }

    const returnFocusElement = reportPreviewState.returnFocusElement
    closeReportPreviewModal()
    scheduleElementFocus(returnFocusElement ?? getDefaultFocusableElement())
  })
}

function bindReportMemoModal() {
  const {
    modal,
    keyTasksInput,
    groupHomeNewsInput,
    specialNotesInput,
    closeButton,
    confirmButton
  } = getReportMemoModalElements()

  if (!modal || !keyTasksInput || !groupHomeNewsInput || !specialNotesInput || !closeButton || !confirmButton) {
    return
  }

  const closeAndFocus = () => {
    const returnFocusElement = reportMemoModalState.returnFocusElement
    closeReportMemoModal()
    scheduleElementFocus(returnFocusElement ?? getReportPreviewModalElements().memoButton ?? getDefaultFocusableElement())
  }

  keyTasksInput.addEventListener("input", updateReportMemoFromInputs)
  groupHomeNewsInput.addEventListener("input", updateReportMemoFromInputs)
  specialNotesInput.addEventListener("input", updateReportMemoFromInputs)
  closeButton.addEventListener("click", closeAndFocus)
  confirmButton.addEventListener("click", closeAndFocus)

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeAndFocus()
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      event.preventDefault()
      closeAndFocus()
    }
  })
}

function bindPersonalSettingsModal() {
  const {
    modal,
    nameInput,
    departmentInput,
    positionInput,
    gmailAddressInput,
    googleAppPasswordInput,
    recipientEmailInput,
    dailyReportSavePathInput,
    dailyReportSavePathButton,
    weeklyReportSavePathInput,
    weeklyReportSavePathButton,
    dailyReportAutoSendTimeInput,
    mailBodyTextarea,
    holidayDatesTextarea,
    holidayApiConfigPathInput,
    holidayApiStatus,
    closeButton,
    cancelButton,
    submitButton
  } = getPersonalSettingsModalElements()

  const requiredElements = [
    modal,
    nameInput,
    departmentInput,
    positionInput,
    gmailAddressInput,
    googleAppPasswordInput,
    recipientEmailInput,
    dailyReportSavePathInput,
    dailyReportSavePathButton,
    weeklyReportSavePathInput,
    weeklyReportSavePathButton,
    dailyReportAutoSendTimeInput,
    mailBodyTextarea,
    holidayDatesTextarea,
    holidayApiConfigPathInput,
    holidayApiStatus,
    closeButton,
    cancelButton,
    submitButton
  ]

  if (requiredElements.some((element) => !element)) {
    return
  }

  const closeAndFocus = () => {
    closePersonalSettingsModal()
    scheduleElementFocus(getDefaultFocusableElement())
  }

  closeButton.addEventListener("click", closeAndFocus)
  cancelButton.addEventListener("click", closeAndFocus)
  submitButton.addEventListener("click", submitPersonalSettingsModal)

  const submitOnEnterInputs = [
    nameInput,
    departmentInput,
    positionInput,
    gmailAddressInput,
    googleAppPasswordInput,
    recipientEmailInput,
    dailyReportSavePathInput,
    weeklyReportSavePathInput,
    dailyReportAutoSendTimeInput,
    holidayApiConfigPathInput
  ]

  const selectFolder = async (targetInput, title) => {
    if (!window.appDialogs?.selectFolder) {
      return
    }

    const selectedPath = await window.appDialogs.selectFolder({
      title,
      defaultPath: targetInput.value.trim() || undefined
    })
    if (selectedPath) {
      targetInput.value = selectedPath
    }
  }

  dailyReportSavePathButton.addEventListener("click", () => {
    selectFolder(dailyReportSavePathInput, "일일보고서 저장 루트 선택")
  })

  weeklyReportSavePathButton.addEventListener("click", () => {
    selectFolder(weeklyReportSavePathInput, "주간 보고서 저장 루트 선택")
  })

  submitOnEnterInputs.forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault()
        submitPersonalSettingsModal()
      }

      if (event.key === "Escape") {
        event.preventDefault()
        closeAndFocus()
      }
    })
  })

  mailBodyTextarea.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault()
      closeAndFocus()
    }
  })

  holidayDatesTextarea.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault()
      closeAndFocus()
    }
  })

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeAndFocus()
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeAndFocus()
    }
  })

  window.appMenu?.onOpenSettings?.(() => {
    openPersonalSettingsModal()
  })
}

function bindWeeklyPrintReminderPopup() {
  const {
    popup,
    closeButton,
    dismissButton,
    openReportButton
  } = getWeeklyPrintReminderPopupElements()
  const weeklyButton = document.querySelector("#openWeeklyReportPreviewButton")

  if (!popup || !closeButton || !dismissButton || !openReportButton || !weeklyButton) {
    return
  }

  const closePopup = () => {
    closeWeeklyPrintReminderPopup()
    scheduleElementFocus(getDefaultFocusableElement())
  }

  closeButton.addEventListener("click", closePopup)
  dismissButton.addEventListener("click", closePopup)
  openReportButton.addEventListener("click", () => {
    closeWeeklyPrintReminderPopup()
    openReportPreviewModal({
      title: "주간 보고서 미리보기",
      src: getReportTemplateSrc("weekly"),
      reportType: "weekly",
      returnFocusElement: openReportButton
    })
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !popup.hidden) {
      event.preventDefault()
      closePopup()
    }
  })

  window.addEventListener("focus", runWeeklyPrintReminderCheck)
}

function bindTextEditModal() {
  const { modal, input, closeButton, cancelButton, submitButton } = getTextEditModalElements()
  if (!modal || !input || !closeButton || !cancelButton || !submitButton) {
    return
  }

  const confirmElements = getConfirmModalElements()
  const {
    modal: confirmModal,
    closeButton: confirmCloseButton,
    cancelButton: confirmCancelButton,
    submitButton: confirmSubmitButton
  } = confirmElements
  const infoElements = getInfoModalElements()
  const {
    modal: infoModal,
    closeButton: infoCloseButton,
    submitButton: infoSubmitButton
  } = infoElements
  if (
    !confirmModal || !confirmCloseButton || !confirmCancelButton || !confirmSubmitButton ||
    !infoModal || !infoCloseButton || !infoSubmitButton
  ) {
    return
  }

  closeButton.addEventListener("click", closeTextEditModal)
  cancelButton.addEventListener("click", closeTextEditModal)
  submitButton.addEventListener("click", submitTextEditModal)

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeTextEditModal()
    }
  })

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      submitTextEditModal()
      return
    }

    if (event.key === "Escape") {
      event.preventDefault()
      closeTextEditModal()
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeTextEditModal()
    }
  })

  confirmCloseButton.addEventListener("click", closeConfirmModal)
  confirmCancelButton.addEventListener("click", () => {
    closeConfirmModal()
    scheduleElementFocus(getDefaultFocusableElement())
  })
  confirmSubmitButton.addEventListener("click", submitConfirmModal)

  confirmModal.addEventListener("click", (event) => {
    if (event.target === confirmModal) {
      closeConfirmModal()
      scheduleElementFocus(getDefaultFocusableElement())
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !confirmModal.hidden) {
      closeConfirmModal()
      scheduleElementFocus(getDefaultFocusableElement())
    }
  })

  infoCloseButton.addEventListener("click", () => {
    closeInfoModal()
    scheduleElementFocus(getDefaultFocusableElement())
  })
  infoSubmitButton.addEventListener("click", () => {
    closeInfoModal()
    scheduleElementFocus(getDefaultFocusableElement())
  })

  infoModal.addEventListener("click", (event) => {
    if (event.target === infoModal) {
      closeInfoModal()
      scheduleElementFocus(getDefaultFocusableElement())
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !infoModal.hidden) {
      closeInfoModal()
      scheduleElementFocus(getDefaultFocusableElement())
    }
  })
}

function bindCategoryDetailDescription() {
  const trigger = document.querySelector("#category_detail_description")
  if (!trigger) {
    return
  }

  trigger.addEventListener("click", () => {
    openInfoModal({
      title: "카테고리 안내",
      message: `- 주간보고서는 카테고리별 하위 업무를 기준으로 생성됩니다.\n- 미분류는 카테고리와 동일한 층위의 단독 업무로 주간보고에 삽입됩니다.`
    })
  })
}

function getDefaultDailyLogCategory(categoryMap, inboxId, inboxName) {
  const selectedCategoryId = dailyLogState.selectedCategoryId?.trim()
  if (selectedCategoryId && categoryMap.has(selectedCategoryId)) {
    return {
      categoryId: selectedCategoryId,
      categoryName: categoryMap.get(selectedCategoryId) ?? inboxName
    }
  }

  return {
    categoryId: inboxId,
    categoryName: inboxName
  }
}

function bindDailyLogCreation(categoryMap, inboxId, inboxName) {
  const input = document.querySelector("#dailyLogInput")
  const groupsContainer = getDailyLogGroupsContainer()
  if (!input || !groupsContainer) {
    return
  }

  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return
    }

    const title = input.value.trim()
    if (!title) {
      return
    }

    const { categoryId, categoryName } = getDefaultDailyLogCategory(categoryMap, inboxId, inboxName)
    const item = createDailyLogItem(title, categoryId, categoryName)
    item.dataset.logDate = getTodayDateText()
    item.dataset.logOrder = String(dailyLogState.nextOrder)
    dailyLogState.nextOrder += 1

    dailyLogState.items.push(item)
    input.value = ""

    renderDailyLog()
    openDailyLogDetailPanel(item)
    persistAppData()
  })
}

window.addEventListener("DOMContentLoaded", async () => {
  writeStartupDebugLog("DOMContentLoaded:start", {
    hasStorage: Boolean(window.appStorage?.load),
    title: document.title
  })
  const appName = window.appInfo?.name ?? "AutoDailyReport2"
  document.title = window.appInfo?.isPackaged === false
    ? `${appName} (Dev)`
    : appName

  initializeTodayMessage()
  bindAppWidthIndicator()
  await loadFooterQuote()
  initializeApplyPeriod()
  const loadedAppData = await loadAppData()
  applyAppDataToDom(loadedAppData)

  const { categoryMap, inboxId, inboxName } = initializeCategories()
  normalizeDailyLogItems(categoryMap, inboxId, inboxName)
  initializeDailyLogMetadata()
  carryOverPendingDailyLogsToToday()
  createTodayRecurringDailyLogs()
  setupDailyLogDragging()
  renderDebugIds()
  ensureDailyLogEmptyState()
  bindTextEditModal()
  bindPersonalSettingsModal()
  bindReportPreviewModal()
  bindReportMemoModal()
  bindCategorySelectModal()
  bindWeeklyPrintReminderPopup()
  bindCategoryDetailDescription()
  bindCategoryPanelToggle()
  bindCategoryCreation(categoryMap)
  bindArchivedCategoryToggle()
  bindCategoryReordering()
  bindDailyLogCreation(categoryMap, inboxId, inboxName)
  bindDailyLogCategoryDnD(categoryMap)
  bindDailyLogCheckedState()
  bindDailyLogDetailPanel()
  bindDailyLogCategoryBadge(categoryMap)
  bindContextMenu(categoryMap, inboxId, inboxName)
  bindCategoryFiltering()
  setActiveCategory(getAllCategoriesItem())
  renderDailyLog()
  persistAppData()
  scheduleDailyReportAutoSend()
  await refreshHolidayApiConfigInfo()
  if (shouldSyncPublicHolidayCalendarOnLaunch()) {
    await syncPublicHolidayCalendar({ silent: true })
  }
  runWeeklyPrintReminderCheck()
  writeStartupDebugLog("DOMContentLoaded:end", {
    categoryCount: document.querySelectorAll("#categories .itemList .item[data-category-id]").length,
    dailyLogDomCount: document.querySelectorAll("#dailyLogGroups .item").length
  })
})
