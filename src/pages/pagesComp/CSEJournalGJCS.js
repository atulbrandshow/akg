import JournalData from '@/Components/JournalData'
import { content, tabs } from '@/Json/CSEJournalData'

const CSEJournalGJCS = () => {
  return (
    <JournalData tabs={tabs} content={content} />
  )
}

export default CSEJournalGJCS