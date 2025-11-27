/**
 * Конфигурации карточек для Issue и Verify флоу
 * Использует константы вместо магических строк
 */

import { CardProps } from '../components/Card'
import { DOCUMENT_TYPES } from '../constants/documents'
import { ICON_NAMES } from '../constants/icons'
import { BADGE_LABELS } from '../constants/badges'
import { BadgeColorVariant } from '../components/ui/BadgeColor'

/**
 * Тип для конфигурации карточки
 */
export type CardConfig = CardProps

/**
 * Конфигурация карточек для Issue флоу
 */
export const issueCardConfigs: CardConfig[] = [
  {
    icon: ICON_NAMES.FINGERPRINT,
    badge: BADGE_LABELS.CORE_IDENTIFICATION,
    badgeVariant: 'primary',
    title: DOCUMENT_TYPES.DIGITAL_IDENTITY,
    description: 'Set this up first so other documents use the right data.',
  },
  {
    icon: ICON_NAMES.BOOK,
    badge: BADGE_LABELS.AUTHORIZATION,
    badgeVariant: 'Blue',
    title: DOCUMENT_TYPES.STUDENT_ID,
    description: 'Issued after signing in to your university account.',
  },
  {
    icon: ICON_NAMES.CAR,
    badge: BADGE_LABELS.AUTHORIZATION,
    badgeVariant: 'Blue',
    title: DOCUMENT_TYPES.DRIVERS_LICENSE,
    description: 'Issued after signing in to your transport authority account.',
  },
  {
    icon: ICON_NAMES.CALENDAR,
    badge: BADGE_LABELS.PRE_AUTHORIZED,
    badgeVariant: 'Emerald',
    title: DOCUMENT_TYPES.AGE_18,
    description: 'Issued automatically from your verified birth date.',
  },
  {
    icon: ICON_NAMES.SHIELD,
    badge: BADGE_LABELS.PRE_AUTHORIZED,
    badgeVariant: 'Emerald',
    title: DOCUMENT_TYPES.HEALTH_INSURANCE,
    description: 'Issued automatically using your ID data.',
  },
  {
    icon: ICON_NAMES.HOME,
    badge: BADGE_LABELS.PRE_AUTHORIZED,
    badgeVariant: 'Emerald',
    title: DOCUMENT_TYPES.PROOF_OF_ADDRESS,
    description: 'Your registered address from your ID.',
  },
  {
    icon: ICON_NAMES.STAR,
    badge: BADGE_LABELS.TRANSACTION_CODE,
    badgeVariant: 'Fuchsia',
    title: DOCUMENT_TYPES.MEMBERSHIP_CARD,
    description: 'Enter a one-time code to get your card.',
  },
  {
    icon: ICON_NAMES.LIBRARY,
    badge: BADGE_LABELS.PRESENTATION,
    badgeVariant: 'Amber',
    title: DOCUMENT_TYPES.LIBRARY_CARD,
    description: 'Show your Student ID to get your library card.',
  },
]

/**
 * Конфигурация карточек для Verify флоу
 */
export const verifyCardConfigs: CardConfig[] = [
  {
    icon: ICON_NAMES.FINGERPRINT,
    badge: BADGE_LABELS.VERIFIED_REQUESTER,
    badgeVariant: 'secondary',
    title: DOCUMENT_TYPES.DIGITAL_IDENTITY,
    description: 'Simulate a bank or public service that needs a full identity check.',
  },
  {
    icon: ICON_NAMES.BOOK,
    badge: BADGE_LABELS.VERIFIED_REQUESTER,
    badgeVariant: 'secondary',
    title: DOCUMENT_TYPES.STUDENT_ID,
    description: 'Verify enrolment status for a university or campus service.',
  },
  {
    icon: ICON_NAMES.CAR,
    badge: BADGE_LABELS.VERIFIED_REQUESTER,
    badgeVariant: 'secondary',
    title: DOCUMENT_TYPES.DRIVERS_LICENSE,
    description: 'Check licence validity and key fields for car rental or mobility.',
  },
  {
    icon: ICON_NAMES.CALENDAR,
    badge: BADGE_LABELS.VERIFIED_REQUESTER,
    badgeVariant: 'secondary',
    title: DOCUMENT_TYPES.AGE_18,
    description: 'Confirm legal age for age restricted purchases with minimum data.',
  },
  {
    icon: ICON_NAMES.SHIELD,
    badge: BADGE_LABELS.VERIFIED_REQUESTER,
    badgeVariant: 'secondary',
    title: DOCUMENT_TYPES.HEALTH_INSURANCE,
    description: 'Verify coverage status for a healthcare provider.',
  },
  {
    icon: ICON_NAMES.HOME,
    badge: BADGE_LABELS.VERIFIED_REQUESTER,
    badgeVariant: 'secondary',
    title: DOCUMENT_TYPES.PROOF_OF_ADDRESS,
    description: 'Confirm address details for KYC or utility onboarding.',
  },
  {
    icon: ICON_NAMES.STAR,
    badge: BADGE_LABELS.VERIFIED_REQUESTER,
    badgeVariant: 'secondary',
    title: DOCUMENT_TYPES.MEMBERSHIP_CARD,
    description: 'Check whether a user has an active membership.',
  },
  {
    icon: ICON_NAMES.LIBRARY,
    badge: BADGE_LABELS.VERIFIED_REQUESTER,
    badgeVariant: 'secondary',
    title: DOCUMENT_TYPES.LIBRARY_CARD,
    description: 'Verify access rights for a library or similar service.',
  },
]

