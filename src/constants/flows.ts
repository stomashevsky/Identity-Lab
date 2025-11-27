/**
 * Константы и типы для режимов флоу (Issue/Verify)
 */

export const FLOW_MODES = {
  ISSUE: 'Issue',
  VERIFY: 'Verify',
} as const

export const FLOW_MODE_VALUES = Object.values(FLOW_MODES)

export type FlowMode = typeof FLOW_MODES[keyof typeof FLOW_MODES]

