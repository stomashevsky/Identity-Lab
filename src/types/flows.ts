/**
 * Types for document issuance and verification flows
 */

import { FlowMode } from '../constants/flows'
import { DocumentType } from '../constants/documents'

/**
 * Steps in document issuance flow
 */
export type IssueFlowStep =
  | 'form' // Data entry form
  | 'confirmation' // Confirmation and QR code

/**
 * Steps in document verification flow
 */
export type VerifyFlowStep =
  | 'configuration' // Verification request configuration
  | 'confirmation' // Confirmation and QR code
  | 'verified' // Verification results

/**
 * Modal state in flow
 */
export interface FlowModalState {
  documentType: DocumentType
  mode: FlowMode
  currentStep?: IssueFlowStep | VerifyFlowStep
}

