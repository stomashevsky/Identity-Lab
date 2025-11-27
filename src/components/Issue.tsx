import { useState, useMemo } from 'react'

import Card from './Card'
import { cardData } from './cardData'
import { verifyCardData } from './verifyCardData'
import FlowTabs from './Issue/FlowTabs'
import { getModalComponent, type DocumentType, type ModalMode } from './Issue/modalMapping'
import { SectionHeader } from './ui'
import { useModalState } from '../hooks/useModalState'
import { DOCUMENT_TYPE_VALUES, FLOW_MODES } from '../constants'

export default function Issue() {
  const [activeTab, setActiveTab] = useState<ModalMode>(FLOW_MODES.ISSUE)

  const documentTypes: DocumentType[] = DOCUMENT_TYPE_VALUES
  const { openModal, closeModal, isOpen } = useModalState<DocumentType>(documentTypes)
  const currentCardData = activeTab === FLOW_MODES.ISSUE ? cardData : verifyCardData

  const cardClickHandlers = useMemo(() => {
    const handlers: Partial<Record<DocumentType, () => void>> = {}
    currentCardData.forEach((card) => {
      const documentType = card.title as DocumentType
      handlers[documentType] = () => openModal(documentType)
    })
    return handlers
  }, [currentCardData, openModal])

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

        <FlowTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Cards Grid */}
          <div className="flex flex-wrap gap-6 items-start justify-center w-full">
            {currentCardData.map((card, index) => (
              <Card
                key={index}
                {...card}
                onClick={cardClickHandlers[card.title as DocumentType]}
                animationDelay={index * 25}
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

      {/* Dynamic modal rendering via mapping */}
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

