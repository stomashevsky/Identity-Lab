import { FLOW_MODES } from '../../constants'
import type { FlowMode } from '../../constants/flows'

interface FlowTabsProps {
  activeTab: FlowMode
  onTabChange: (tab: FlowMode) => void
}

export default function FlowTabs({ activeTab, onTabChange }: FlowTabsProps) {
  return (
    <div className="bg-[#e5e5e5] flex items-center w-full max-w-[400px] overflow-hidden p-[3px] rounded-xl gap-[4px]">
      <button
        onClick={() => onTabChange(FLOW_MODES.ISSUE)}
        className={`flex-[1_0_0] inline-flex items-center justify-center py-[5px] px-[8px] gap-[8px] rounded-[9px] border border-[rgba(255,255,255,0)] transition-all outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] ${
          activeTab === FLOW_MODES.ISSUE
            ? 'bg-white shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]'
            : 'bg-transparent hover:bg-black/5'
        }`}
      >
        <p
          className={`font-medium leading-5 text-sm text-[#0a0a0a] text-center ${
            activeTab !== FLOW_MODES.ISSUE ? 'opacity-75' : ''
          }`}
        >
          {FLOW_MODES.ISSUE}
        </p>
      </button>
      <button
        onClick={() => onTabChange(FLOW_MODES.VERIFY)}
        className={`flex-[1_0_0] inline-flex items-center justify-center py-[5px] px-[8px] gap-[8px] rounded-[9px] border border-[rgba(255,255,255,0)] transition-all outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] ${
          activeTab === FLOW_MODES.VERIFY
            ? 'bg-white shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]'
            : 'bg-transparent hover:bg-black/5'
        }`}
      >
        <p
          className={`font-medium leading-5 text-sm text-[#0a0a0a] text-center ${
            activeTab !== FLOW_MODES.VERIFY ? 'opacity-75' : ''
          }`}
        >
          {FLOW_MODES.VERIFY}
        </p>
      </button>
    </div>
  )
}

