import { useState, useMemo } from 'react'
import Card from './Card'
import { cardData } from './cardData'
import { verifyCardData } from './verifyCardData'
import { useModalState } from '../hooks/useModalState'
import { MODAL_MAPPING, getModalComponent, type DocumentType, type ModalMode } from './Issue/modalMapping'

export default function Issue() {
  const [activeTab, setActiveTab] = useState<ModalMode>('Issue')
  
  // Список всех типов документов для управления модалками
  const documentTypes: DocumentType[] = [
    'Digital Identity',
    'Student ID',
    "Driver's License",
    'Age 18+',
    'Health Insurance Card',
    'Proof of Address',
    'Membership Card',
    'Library Card',
  ]
  
  // Централизованное управление состоянием всех модалок
  const { openModal, closeModal, isOpen } = useModalState<DocumentType>(documentTypes)

  const currentCardData = activeTab === 'Issue' ? cardData : verifyCardData

  // Создаем маппинг обработчиков кликов для карточек
  const cardClickHandlers = useMemo(() => {
    const handlers: Record<string, () => void> = {}
    currentCardData.forEach((card) => {
      const documentType = card.title as DocumentType
      handlers[card.title] = () => openModal(documentType)
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
        {/* Title Section */}
        <div className="flex flex-col gap-4 md:gap-5 items-center max-w-[576px] text-center w-full">
          <div className="flex gap-1 items-center justify-center">
            <p className="font-medium leading-5 text-sm text-[#737373]">
              Playground
            </p>
          </div>
            <h1 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
              Work with digital documents
            </h1>
            <p className="font-normal leading-6 text-base text-[#737373] whitespace-pre-wrap">
              Issue demo documents and test verification flows.
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="bg-[#e5e5e5] flex items-center w-full max-w-[400px] overflow-hidden p-[3px] rounded-xl gap-[4px]">
            <button
              onClick={() => setActiveTab('Issue')}
              className={`flex-[1_0_0] inline-flex items-center justify-center py-[5px] px-[8px] gap-[8px] rounded-[9px] border border-[rgba(255,255,255,0)] transition-all outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] ${
                activeTab === 'Issue'
                  ? 'bg-white shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]'
                  : 'bg-transparent hover:bg-black/5'
              }`}
            >
              <p className={`font-medium leading-5 text-sm text-[#0a0a0a] text-center ${activeTab !== 'Issue' ? 'opacity-75' : ''}`}>
                Issue
              </p>
            </button>
            <button
              onClick={() => setActiveTab('Verify')}
              className={`flex-[1_0_0] inline-flex items-center justify-center py-[5px] px-[8px] gap-[8px] rounded-[9px] border border-[rgba(255,255,255,0)] transition-all outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] ${
                activeTab === 'Verify'
                  ? 'bg-white shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]'
                  : 'bg-transparent hover:bg-black/5'
              }`}
            >
              <p className={`font-medium leading-5 text-sm text-[#0a0a0a] text-center ${activeTab !== 'Verify' ? 'opacity-75' : ''}`}>
                Verify
              </p>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap gap-6 items-start justify-center w-full">
            {currentCardData.map((card, index) => (
              <Card
                key={index}
                {...card}
                onClick={cardClickHandlers[card.title]}
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

