/**
 * Типы для флоу выпуска и верификации документов
 */

import { FlowMode } from '../constants/flows'
import { DocumentType } from '../constants/documents'

/**
 * Шаги в флоу выпуска документа
 */
export type IssueFlowStep = 
  | 'form'      // Форма заполнения данных
  | 'confirmation' // Подтверждение и QR код

/**
 * Шаги в флоу верификации документа
 */
export type VerifyFlowStep =
  | 'configuration'  // Настройка запроса верификации
  | 'confirmation'  // Подтверждение и QR код
  | 'verified'      // Результаты верификации

/**
 * Состояние модалки в флоу
 */
export interface FlowModalState {
  documentType: DocumentType
  mode: FlowMode
  currentStep?: IssueFlowStep | VerifyFlowStep
}

