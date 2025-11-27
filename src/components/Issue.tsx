import { useState, useMemo } from 'react'
import Card from './Card'
import { cardData } from './cardData'
import { verifyCardData } from './verifyCardData'
import { useModalState } from '../hooks/useModalState'
import { getModalComponent, type DocumentType, type ModalMode } from './Issue/modalMapping'
import { DOCUMENT_TYPE_VALUES, FLOW_MODES } from '../constants'
import { SectionHeader } from './ui'

export default function Issue() {
  const [activeTab, setActiveTab] = useState<ModalMode>(FLOW_MODES.ISSUE)
  
  // Список всех типов документов для управления модалками
  const documentTypes: DocumentType[] = DOCUMENT_TYPE_VALUES
  
  // Централизованное управление состоянием всех модалок
  const { openModal, closeModal, isOpen } = useModalState<DocumentType>(documentTypes)

  const currentCardData = activeTab === FLOW_MODES.ISSUE ? cardData : verifyCardData

  // Создаем маппинг обработчиков кликов для карточек
  const cardClickHandlers = useMemo(() => {
    const handlers: Partial<Record<DocumentType, () => void>> = {}
    currentCardData.forEach((card) => {
      const documentType = card.title as DocumentType
      handlers[documentType] = () => openModal(documentType)
    })
    return handlers
  }, [currentCardData, openModal])

  // Получаем все открытые модалки для рендеринга
  const openModalsList = useMemo(() => {
    return documentTypes
      .filter((type) => isOpen(type))
      .map((type) => ({
        type,
        mode: activeTab,
        Component: getModalComponent(type, activeTab),
      }))
  }, [documentTypes, isOpen, activeTab])



  return (
    <>
      <div className="flex flex-col gap-10 items-center w-full">
        <SectionHeader
          label="Playground"
          title="Work with digital documents"
          description="Issue demo documents and test verification flows."
        />

          {/* Toggle Tabs */}
          <div className="bg-[#e5e5e5] flex items-center w-full max-w-[400px] overflow-hidden p-[3px] rounded-xl gap-[4px]">
            <button
              onClick={() => setActiveTab(FLOW_MODES.ISSUE)}
              className={`flex-[1_0_0] inline-flex items-center justify-center py-[5px] px-[8px] gap-[8px] rounded-[9px] border border-[rgba(255,255,255,0)] transition-all outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] ${
                activeTab === FLOW_MODES.ISSUE
                  ? 'bg-white shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]'
                  : 'bg-transparent hover:bg-black/5'
              }`}
            >
              <p className={`font-medium leading-5 text-sm text-[#0a0a0a] text-center ${activeTab !== FLOW_MODES.ISSUE ? 'opacity-75' : ''}`}>
                {FLOW_MODES.ISSUE}
              </p>
            </button>
            <button
              onClick={() => setActiveTab(FLOW_MODES.VERIFY)}
              className={`flex-[1_0_0] inline-flex items-center justify-center py-[5px] px-[8px] gap-[8px] rounded-[9px] border border-[rgba(255,255,255,0)] transition-all outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] ${
                activeTab === FLOW_MODES.VERIFY
                  ? 'bg-white shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]'
                  : 'bg-transparent hover:bg-black/5'
              }`}
            >
              <p className={`font-medium leading-5 text-sm text-[#0a0a0a] text-center ${activeTab !== FLOW_MODES.VERIFY ? 'opacity-75' : ''}`}>
                {FLOW_MODES.VERIFY}
              </p>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap gap-6 items-start justify-center w-full">
            {currentCardData.map((card, index) => (
              <Card
                key={index}
                {...card}
                onClick={cardClickHandlers[card.title as DocumentType]}
              />
            ))}
            {/* Invisible placeholder cards to align last row to the left */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`placeholder-${i}`}
                className="flex-[1_0_0] min-w-[280px] max-w-[400px] h-0 opacity-0"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

      {/* Динамический рендеринг модалок через маппинг */}
      {openModalsList.map(({ type, Component }) => (
        <Component
          key={`${type}-${activeTab}`}
          isOpen={isOpen(type)}
          onClose={() => closeModal(type)}
        />
      ))}
    </>
  )
}

