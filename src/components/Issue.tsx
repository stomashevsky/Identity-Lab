import { useState } from 'react'
import Card from './Card'
import { cardData } from './cardData'
import { verifyCardData } from './verifyCardData'
import DigitalIdentityModal from './DigitalIdentityModal'
import StudentIdModal from './StudentIdModal'
import DriversLicenseModal from './DriversLicenseModal'
import Age18Modal from './Age18Modal'
import HealthInsuranceModal from './HealthInsuranceModal'
import ProofOfAddressModal from './ProofOfAddressModal'
import MembershipCardModal from './MembershipCardModal'
import LibraryCardModal from './LibraryCardModal'
import VerifyDigitalIdentityModal from './VerifyDigitalIdentityModal'
import VerifyStudentIdModal from './VerifyStudentIdModal'
import VerifyDriversLicenseModal from './VerifyDriversLicenseModal'
import VerifyAge18Modal from './VerifyAge18Modal'
import VerifyHealthInsuranceModal from './VerifyHealthInsuranceModal'
import VerifyProofOfAddressModal from './VerifyProofOfAddressModal'
import VerifyMembershipCardModal from './VerifyMembershipCardModal'
import VerifyLibraryCardModal from './VerifyLibraryCardModal'

export default function Issue() {
  const [activeTab, setActiveTab] = useState<'Issue' | 'Verify'>('Issue')
  const [isDigitalIdentityModalOpen, setIsDigitalIdentityModalOpen] = useState(false)
  const [isStudentIdModalOpen, setIsStudentIdModalOpen] = useState(false)
  const [isDriversLicenseModalOpen, setIsDriversLicenseModalOpen] = useState(false)
  const [isAge18ModalOpen, setIsAge18ModalOpen] = useState(false)
  const [isHealthInsuranceModalOpen, setIsHealthInsuranceModalOpen] = useState(false)
  const [isProofOfAddressModalOpen, setIsProofOfAddressModalOpen] = useState(false)
  const [isMembershipCardModalOpen, setIsMembershipCardModalOpen] = useState(false)
  const [isLibraryCardModalOpen, setIsLibraryCardModalOpen] = useState(false)
  const [isVerifyDigitalIdentityModalOpen, setIsVerifyDigitalIdentityModalOpen] = useState(false)
  const [isVerifyStudentIdModalOpen, setIsVerifyStudentIdModalOpen] = useState(false)
  const [isVerifyDriversLicenseModalOpen, setIsVerifyDriversLicenseModalOpen] = useState(false)
  const [isVerifyAge18ModalOpen, setIsVerifyAge18ModalOpen] = useState(false)
  const [isVerifyHealthInsuranceModalOpen, setIsVerifyHealthInsuranceModalOpen] = useState(false)
  const [isVerifyProofOfAddressModalOpen, setIsVerifyProofOfAddressModalOpen] = useState(false)
  const [isVerifyMembershipCardModalOpen, setIsVerifyMembershipCardModalOpen] = useState(false)
  const [isVerifyLibraryCardModalOpen, setIsVerifyLibraryCardModalOpen] = useState(false)

  const currentCardData = activeTab === 'Issue' ? cardData : verifyCardData



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
          <div className="bg-[#e5e5e5] flex items-center w-[400px] overflow-hidden p-[3px] rounded-xl gap-[4px]">
            <button
              onClick={() => setActiveTab('Issue')}
              className={`flex-[1_0_0] inline-flex items-center justify-center py-[5px] px-[8px] gap-[8px] rounded-[9px] border border-[rgba(255,255,255,0)] transition-all outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] ${
                activeTab === 'Issue'
                  ? 'bg-white shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]'
                  : 'bg-transparent hover:bg-black/10'
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
                  : 'bg-transparent hover:bg-black/10'
              }`}
            >
              <p className={`font-medium leading-5 text-sm text-[#0a0a0a] text-center ${activeTab !== 'Verify' ? 'opacity-75' : ''}`}>
                Verify
              </p>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap gap-6 items-start justify-center w-full">
            {currentCardData.map((card, index) => {
              let onClickHandler: (() => void) | undefined = undefined
              
              if (activeTab === 'Issue') {
                if (card.title === 'Digital Identity') {
                  onClickHandler = () => setIsDigitalIdentityModalOpen(true)
                } else if (card.title === 'Student ID') {
                  onClickHandler = () => setIsStudentIdModalOpen(true)
                } else if (card.title === "Driver's License") {
                  onClickHandler = () => setIsDriversLicenseModalOpen(true)
                } else if (card.title === 'Age 18+') {
                  onClickHandler = () => setIsAge18ModalOpen(true)
                } else if (card.title === 'Health Insurance Card') {
                  onClickHandler = () => setIsHealthInsuranceModalOpen(true)
                } else if (card.title === 'Proof of Address') {
                  onClickHandler = () => setIsProofOfAddressModalOpen(true)
                } else if (card.title === 'Membership Card') {
                  onClickHandler = () => setIsMembershipCardModalOpen(true)
                } else if (card.title === 'Library Card') {
                  onClickHandler = () => setIsLibraryCardModalOpen(true)
                }
              } else if (activeTab === 'Verify') {
                if (card.title === 'Digital Identity') {
                  onClickHandler = () => setIsVerifyDigitalIdentityModalOpen(true)
                } else if (card.title === 'Student ID') {
                  onClickHandler = () => setIsVerifyStudentIdModalOpen(true)
                } else if (card.title === "Driver's License") {
                  onClickHandler = () => setIsVerifyDriversLicenseModalOpen(true)
                } else if (card.title === 'Age 18+') {
                  onClickHandler = () => setIsVerifyAge18ModalOpen(true)
                } else if (card.title === 'Health Insurance Card') {
                  onClickHandler = () => setIsVerifyHealthInsuranceModalOpen(true)
                } else if (card.title === 'Proof of Address') {
                  onClickHandler = () => setIsVerifyProofOfAddressModalOpen(true)
                } else if (card.title === 'Membership Card') {
                  onClickHandler = () => setIsVerifyMembershipCardModalOpen(true)
                } else if (card.title === 'Library Card') {
                  onClickHandler = () => setIsVerifyLibraryCardModalOpen(true)
                }
              }
              
              return (
                <Card
                  key={index}
                  {...card}
                  onClick={onClickHandler}
                />
              )
            })}
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

      {/* Digital Identity Modal */}
      <DigitalIdentityModal isOpen={isDigitalIdentityModalOpen} onClose={() => setIsDigitalIdentityModalOpen(false)} />
      
      {/* Student ID Modal */}
      <StudentIdModal isOpen={isStudentIdModalOpen} onClose={() => setIsStudentIdModalOpen(false)} />
      
      {/* Driver's License Modal */}
      <DriversLicenseModal isOpen={isDriversLicenseModalOpen} onClose={() => setIsDriversLicenseModalOpen(false)} />
      
      {/* Age 18+ Modal */}
      <Age18Modal isOpen={isAge18ModalOpen} onClose={() => setIsAge18ModalOpen(false)} />
      
      {/* Health Insurance Modal */}
      <HealthInsuranceModal isOpen={isHealthInsuranceModalOpen} onClose={() => setIsHealthInsuranceModalOpen(false)} />
      
      {/* Proof of Address Modal */}
      <ProofOfAddressModal isOpen={isProofOfAddressModalOpen} onClose={() => setIsProofOfAddressModalOpen(false)} />
      
      {/* Membership Card Modal */}
      <MembershipCardModal isOpen={isMembershipCardModalOpen} onClose={() => setIsMembershipCardModalOpen(false)} />
      
      {/* Library Card Modal */}
      <LibraryCardModal isOpen={isLibraryCardModalOpen} onClose={() => setIsLibraryCardModalOpen(false)} />
      
      {/* Verify Digital Identity Modal */}
      <VerifyDigitalIdentityModal isOpen={isVerifyDigitalIdentityModalOpen} onClose={() => setIsVerifyDigitalIdentityModalOpen(false)} />
      
      {/* Verify Student ID Modal */}
      <VerifyStudentIdModal isOpen={isVerifyStudentIdModalOpen} onClose={() => setIsVerifyStudentIdModalOpen(false)} />
      
      {/* Verify Driver's License Modal */}
      <VerifyDriversLicenseModal isOpen={isVerifyDriversLicenseModalOpen} onClose={() => setIsVerifyDriversLicenseModalOpen(false)} />
      
      {/* Verify Age 18+ Modal */}
      <VerifyAge18Modal isOpen={isVerifyAge18ModalOpen} onClose={() => setIsVerifyAge18ModalOpen(false)} />
      
      {/* Verify Health Insurance Modal */}
      <VerifyHealthInsuranceModal isOpen={isVerifyHealthInsuranceModalOpen} onClose={() => setIsVerifyHealthInsuranceModalOpen(false)} />
      
      {/* Verify Proof of Address Modal */}
      <VerifyProofOfAddressModal isOpen={isVerifyProofOfAddressModalOpen} onClose={() => setIsVerifyProofOfAddressModalOpen(false)} />
      
      {/* Verify Membership Card Modal */}
      <VerifyMembershipCardModal isOpen={isVerifyMembershipCardModalOpen} onClose={() => setIsVerifyMembershipCardModalOpen(false)} />
      
      {/* Verify Library Card Modal */}
      <VerifyLibraryCardModal isOpen={isVerifyLibraryCardModalOpen} onClose={() => setIsVerifyLibraryCardModalOpen(false)} />
    </>
  )
}

